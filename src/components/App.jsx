import Home from '../pages/Home/Home';
import Layout from './Layout/Layout';
import Movies from '../pages/Movies/Movies';
import { key } from '../services/data';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      React homework template
    </div>
  );
};
