import AddButton from '@components/AddButton';
import Button from '@components/Button';
import Input from '@components/Input';
import Modal from '@components/Modal';
import NewsCard from '@components/NewsCard';
import NewsSkeleton from '@components/NewsCard/NewsSkeleton.tsx';
import { StyledNews, StyledTextArea } from '@pages/news/styled.ts';
import { useAppDispatch, useAppSelector } from '@store/index.ts';
import {
  addNews,
  deleteNews,
  fetchNews,
  setSearchTerm as setStoreSearchTerm,
  updateNews,
} from '@store/slices/newsSlice.ts';
import { getFibonacci, isPrime } from '@utils/math.ts';
import type { ChangeEvent, FC, FormEvent } from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

const NewsPage: FC = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const {
    items: news,
    loading,
    hasMore,
    searchTerm,
  } = useAppSelector((state) => state.news);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingNews, setEditingNews] = useState<{
    id: number;
    title: string;
    description: string;
    image: string;
  } | null>(null);
  const [page, setPage] = useState(1);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch, page, searchTerm]);

  const lastNewsRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prev) => prev + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [hasMore],
  );

  const handleDelete = async (id: number) => {
    await dispatch(deleteNews(id)).unwrap();
    dispatch(fetchNews());
  };

  const handleEdit = (news: {
    id: number;
    title: string;
    description: string;
    image: string;
  }) => {
    setEditingNews(news);
    setIsModalOpen(true);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newsData = {
      title: formData.get('title') as string,
      description: formData.get('description') as string,
      image: formData.get('image') as string,
    };

    if (editingNews) {
      await dispatch(
        updateNews({ id: editingNews.id, updates: newsData }),
      ).unwrap();
    } else {
      await dispatch(addNews(newsData)).unwrap();
    }

    dispatch(fetchNews());
    setIsModalOpen(false);
    setEditingNews(null);
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setStoreSearchTerm(e.target.value));
    setPage(1);
  };

  return (
    <StyledNews className="mx-auto lg:mt-36">
      <div className="flex justify-center">
        <Input
          name="title"
          placeholder={t('news.search')}
          value={searchTerm}
          onChange={handleSearch}
          className="search-input"
        />
      </div>

      {loading ? (
        <NewsSkeleton />
      ) : (
        <div className="grid grid-cols-auto gap-16 md:gap-24 xl:gap-32 mt-24 lg:mt-36">
          {news.map((item, index) => {
            const fibNumber = getFibonacci(index + 1);
            const prime = isPrime(fibNumber);

            return (
              <NewsCard
                key={item.id}
                id={item.id}
                title={item.title}
                description={item.description}
                image={item.image}
                fibNumber={fibNumber}
                prime={prime}
                ref={index === news.length - 1 ? lastNewsRef : null}
                onDelete={() => handleDelete(item.id)}
                onEdit={handleEdit}
              />
            );
          })}
        </div>
      )}

      <AddButton
        onClick={() => {
          setEditingNews(null);
          setIsModalOpen(true);
        }}
      />

      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingNews(null);
        }}
        title={editingNews ? t('modal.editTitle') : t('modal.addTitle')}
      >
        <form onSubmit={handleSubmit} className="flex flex-column gap-12">
          <Input
            name="title"
            placeholder={t('modal.inputTitle')}
            defaultValue={editingNews?.title}
            required
          />

          <StyledTextArea
            name="description"
            placeholder={t('modal.inputDescription')}
            defaultValue={editingNews?.description}
            required
            className="px-8 py-8"
          />

          <Input
            name="image"
            placeholder={t('modal.inputImageURL')}
            defaultValue={editingNews?.image}
            required
          />

          <div className="flex justify-center">
            <Button type="submit" className="px-24">
              {editingNews ? t('modal.saveButton') : t('modal.addButton')}
            </Button>
          </div>
        </form>
      </Modal>
    </StyledNews>
  );
};

export default NewsPage;
