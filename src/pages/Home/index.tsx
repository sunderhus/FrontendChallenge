import MembersList from 'components/MembersList';
import ProfileCard from 'components/ProfileCard';
import SearchForm from 'components/SearchForm';
import { SearchProvider, useSearchMember } from 'contexts/searchContext';
import React, { useCallback, useEffect, useState } from 'react';
import api from 'services';
import { Container } from './styles';

type Member = {
  login: string;
  avatar_url: string;
};

type GithubUser = {
  avatar_url: string;
  name: string;
  public_repos: number;
  followers: number;
  created_at: Date;
};

const Home: React.FC = () => {
  const { searchResult, searchEnabled } = useSearchMember();
  const [repositoryMembers, setRepositoryMembers] = useState<Member[]>([]);
  const [githubUser, setGitHubUser] = useState<GithubUser>();

  const handleLoadUserProfile = useCallback(async (login: string) => {
    if (!login) {
      return;
    }
    const result = await api.get<GithubUser>(`users/${login}`);
    if (!result.data) {
      return;
    }
    setGitHubUser(result.data);
  }, []);

  useEffect(() => {
    async function fetchGithubRepositoryMembers() {
      const result = await api.get('/orgs/facebook/public_members');
      setRepositoryMembers(result.data);
    }
    fetchGithubRepositoryMembers();
  }, []);

  if (repositoryMembers.length === 0) {
    return (
      <Container>
        <h2>Carregando informações do repositório React.</h2>
      </Container>
    );
  }

  return (
    <Container>
      <h2>
        Veja informações sobre os membros do respositório Facebook (React).
      </h2>

      {!!githubUser && <ProfileCard githubUser={githubUser} />}

      <SearchForm repositoryMembers={repositoryMembers} />

      <MembersList
        repositoryMembers={searchEnabled ? searchResult : repositoryMembers}
        handleLoadProfile={handleLoadUserProfile}
      />
    </Container>
  );
};

export default Home;
