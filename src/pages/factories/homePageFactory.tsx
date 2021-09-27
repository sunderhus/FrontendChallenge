import { SearchProvider } from 'contexts/searchContext';
import Home from 'pages/Home';

export const homePageFactory = (): JSX.Element => {
  return (
    <SearchProvider>
      <Home />
    </SearchProvider>
  );
};
