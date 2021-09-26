import React from 'react';
import { useParams } from 'react-router';

type Params = {
  login: string;
};

const Home: React.FC = () => {
  const { login } = useParams<Params>();
  return <>Home page : {login}</>;
};

export default Home;
