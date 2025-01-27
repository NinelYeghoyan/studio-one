import styled from 'styled-components';

export const StyledNews = styled.div`
  max-width: 1200px;

  .search-input {
    width: 300px;
  }
`;

export const StyledTextArea = styled.textarea`
  min-height: 100px;
  font-family: ${(p) => p.theme.typography.fontFamily.montserrat}, sans-serif;
  font-size: ${(p) => p.theme.typography.fontSize.p16.text};
  line-height: ${(p) => p.theme.typography.fontSize.p16.leading};

  border-radius: ${(p) => p.theme.borderRadius.rounded8};
  background-color: ${(p) => p.theme.palette.white};
  border: 2px solid ${(p) => p.theme.palette.gray03};
  color: ${(p) => p.theme.palette.foreground};

  &::placeholder {
    font-family: ${(p) => p.theme.typography.fontFamily.montserrat}, sans-serif;
    font-size: ${(p) => p.theme.typography.fontSize.p16.text};
    line-height: ${(p) => p.theme.typography.fontSize.p16.leading};
  }

  &:focus {
    outline-color: ${(p) => p.theme.palette.gray05};
  }
`;
