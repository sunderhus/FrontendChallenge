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

      <div className="profile-details">
        <div className="profile-details-item">
          <p className="profile-details-item--label">Nome:</p>
          <p className="profile-details-item--content">{githubUser.name}</p>
        </div>

        <div className="profile-details-item">
          <p className="profile-details-item--label">
            Quantidade de repositórios:
          </p>
          <p className="profile-details-item--content">
            {githubUser.public_repos}
          </p>
        </div>

        <div className="profile-details-item">
          <p className="profile-details-item--label">
            Quantidade de seguidores:
          </p>
          <p className="profile-details-item--content">
            {githubUser.followers}
          </p>
        </div>

        <div className="profile-details-item">
          <p className="profile-details-item--label">Entrou no Github em:</p>
          <p className="profile-details-item--content">
            {dateFormater(githubUser.created_at)}
          </p>
        </div>
      </div>
    </Container>
  );
};

export default ProfileCard;
