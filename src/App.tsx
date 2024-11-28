import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Error from './pages/Error';
import AppLayout from './components/ui/AppLayout';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
