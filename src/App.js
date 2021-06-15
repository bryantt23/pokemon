import logo from './logo.svg';
import './App.css';
import Form from './Form';
import { ErrorBoundary } from './ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <Form />
    </ErrorBoundary>
  );
}

export default App;
