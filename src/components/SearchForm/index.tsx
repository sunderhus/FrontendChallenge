import { useSearchMember } from 'contexts/searchContext';
import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import useDebounce from 'utils/hooks/useDebounce';
import { Container } from './styles';

type Member = {
  login: string;
  avatar_url: string;
};

interface SearchFormProps {
  repositoryMembers: Member[];
}

const SearchForm: React.FC<SearchFormProps> = ({ repositoryMembers }) => {
  const { updateSearchResult, toggleSearchActivationStatus } =
    useSearchMember();
  const [searchText, setSearchText] = useState('');
  const debouncedSearchText = useDebounce<string>(searchText, 500);

  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { value: memberLogin } = event.target;
      setSearchText(memberLogin);
    },
    [],
  );

  useEffect(() => {
    const transformedSearchText = debouncedSearchText.toUpperCase();
    const filteredMembers = repositoryMembers.filter(member =>
      member.login.toLocaleUpperCase().includes(transformedSearchText),
    );

    updateSearchResult(filteredMembers);

    toggleSearchActivationStatus(!!debouncedSearchText);
  }, [
    debouncedSearchText,
    repositoryMembers,
    toggleSearchActivationStatus,
    updateSearchResult,
  ]);

  return (
    <Container>
      <form onSubmit={event => event.preventDefault()}>
        <fieldset>
          <legend>Pesquisar membros</legend>
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Pesquise membros pelo nome de login."
            value={searchText}
            onChange={handleInputChange}
          />
        </fieldset>
      </form>
    </Container>
  );
};

export default SearchForm;
