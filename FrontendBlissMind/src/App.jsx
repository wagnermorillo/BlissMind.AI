import AppRouter from './router/router'
import { AuthProvider } from './services/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}

export default App;