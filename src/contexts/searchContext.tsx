import React, { createContext, useCallback, useContext, useState } from 'react';

type Member = {
  login: string;
  avatar_url: string;
};

interface SearchContextData {
  searchResult: Member[];
  searchEnabled: boolean;
  updateSearchResult(repositoryMembers: Member[]): void;
  toggleSearchActivationStatus(hasSearchText: boolean): void;
}

const SearchContext = createContext<SearchContextData>({} as SearchContextData);

const SearchProvider: React.FC = ({ children }) => {
  const [filteredMembers, setFilteredMembers] = useState<Member[]>([]);
  const [searchEnabled, setSearchEnabled] = useState(false);

  const updateSearchResult = useCallback(repositoryMembers => {
    setFilteredMembers(repositoryMembers);
  }, []);

  const toggleSearchActivationStatus = useCallback((hasSearchText: boolean) => {
    setSearchEnabled(hasSearchText);
  }, []);

  return (
    <SearchContext.Provider
      value={{
        searchResult: filteredMembers,
        searchEnabled,
        updateSearchResult,
        toggleSearchActivationStatus,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

const useSearchMember = (): SearchContextData => {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error('useSearchMember must be withing a SearchProvider');
  }
  return context;
};

export { SearchProvider, useSearchMember };
