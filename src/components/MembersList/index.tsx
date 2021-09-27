import React, { useEffect, useState } from 'react';
import { List } from './styles';

type Member = {
  login: string;
  avatar_url: string;
};

interface MembersListProps {
  repositoryMembers: Member[];
  handleLoadProfile(memberLogin: string): Promise<void>;
}

const MembersList: React.FC<MembersListProps> = ({
  repositoryMembers,
  handleLoadProfile,
}) => {
  const [members, setMembers] = useState<Member[]>([]);

  useEffect(() => {
    setMembers(repositoryMembers);
  }, [repositoryMembers]);

  return (
    <div>
      {members.map(({ login, avatar_url }) => {
        return (
          <List key={login}>
            <li>
              <img src={avatar_url} alt={`Avatar of ${avatar_url}`} />
              <p>{login}</p>
              <button type="button" onClick={() => handleLoadProfile(login)}>
                Ver mais
              </button>
            </li>
          </List>
        );
      })}
    </div>
  );
};

export default MembersList;
