import { useState } from 'react';
import { serverClient, InitialData, ActionOutput } from 'oc-server';
import styles from './styles.css';
import logo from '../public/logo.png';

type AdditionalData = ActionOutput<'funFact'>;

const App: React.FC<InitialData> = (props: InitialData) => {
  const { firstName, lastName, born, hobbies } = props;
  const [additionalData, setAdditionalData] = useState<AdditionalData | null>(
    null
  );
  const [error, setError] = useState('');

  const getFunFact = async () => {
    setError('');
    try {
      const data = await serverClient.funFact({ year: born });
      setAdditionalData(data);
    } catch (err) {
      setError(String(err));
    }
  };

  if (error) {
    return <div>Something wrong happened!</div>;
  }

  return (
    <div className={styles.container}>
      <img width="50" height="50" src={logo} alt="Logo" />
      <h1 style={{ margin: '0 0 20px 0' }}>
        This header is a react component
      </h1>
    </div >

  );
};

export default App;

