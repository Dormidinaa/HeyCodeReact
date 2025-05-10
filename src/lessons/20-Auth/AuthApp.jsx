import { RoutesApp } from './routes/RoutesApp';
import { BrowserRouter } from 'react-router-dom';

export const AuthApp = () => {
  return (
    <BrowserRouter>
      <RoutesApp />
    </BrowserRouter>
  );
};
