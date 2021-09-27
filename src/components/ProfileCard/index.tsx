import React from 'react';
import dateFormater from 'utils/formatters/dateFormater';
import { Container } from './styles';

type GithubUser = {
  avatar_url: string;
  name: string;
  public_repos: number;
  followers: number;
  created_at: Date;
};

interface ProfileCardProps {
  githubUser: GithubUser;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ githubUser }) => {
  return (
    <Container>
      <img src={githubUser.avatar_url} alt={`avatar of ${githubUser.name}`} />
      <p>{githubUser.name}</p>
      <p>quantidade de repositórios: {githubUser.public_repos}</p>
      <p>número de seguidores: {githubUser.followers}</p>
      <p>Entrou no github em: {dateFormater(githubUser.created_at)}</p>
    </Container>
  );
};

export default ProfileCard;
