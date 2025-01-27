interface News {
  id: number;
  title: string;
  description: string;
  image: string;
  createdAt: string;
}

class MockDatabase {
  private data: News[] = [];
  private static instance: MockDatabase;
  private lastId: number = 0;

  private constructor() {
    this.lastId = 3;
    this.data = [
      {
        id: 1,
        title: 'New Technology Breakthrough',
        description:
          'Scientists discover revolutionary quantum computing method that could change the future of computing.',
        image: 'https://picsum.photos/id/1/400/300',
        createdAt: new Date().toISOString(),
      },
      {
        id: 2,
        title: 'Space Exploration Update',
        description:
          'NASA announces plans for new Mars mission with groundbreaking objectives.',
        image: 'https://picsum.photos/id/2/400/300',
        createdAt: new Date().toISOString(),
      },
      {
        id: 3,
        title: 'Environmental Innovation',
        description:
          'New sustainable energy solution shows promising results in initial trials.',
        image: 'https://picsum.photos/id/3/400/300',
        createdAt: new Date().toISOString(),
      },
    ];
  }

  public static getInstance(): MockDatabase {
    if (!MockDatabase.instance) {
      MockDatabase.instance = new MockDatabase();
    }
    return MockDatabase.instance;
  }

  async getNews(): Promise<News[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([...this.data]);
      }, 500);
    });
  }

  async addNews(news: Omit<News, 'id' | 'createdAt'>): Promise<News> {
    return new Promise((resolve) => {
      this.lastId += 1;
      const newNews = {
        ...news,
        id: this.lastId,
        createdAt: new Date().toISOString(),
      };
      this.data.push(newNews);
      setTimeout(() => {
        resolve(newNews);
      }, 500);
    });
  }

  async deleteNews(id: number): Promise<void> {
    return new Promise((resolve) => {
      this.data = this.data.filter((news) => news.id !== id);
      setTimeout(() => {
        resolve();
      }, 500);
    });
  }

  async updateNews(
    id: number,
    updates: Partial<Omit<News, 'id' | 'createdAt'>>,
  ): Promise<News> {
    return new Promise((resolve, reject) => {
      const index = this.data.findIndex((news) => news.id === id);
      if (index === -1) {
        reject(new Error('News not found'));
        return;
      }

      this.data[index] = {
        ...this.data[index],
        ...updates,
      };

      setTimeout(() => {
        resolve(this.data[index]);
      }, 500);
    });
  }
}

export const db = MockDatabase.getInstance();
export type { News };
