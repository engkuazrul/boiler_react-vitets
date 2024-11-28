import { Outlet, useNavigation } from 'react-router-dom';
import Header from './Header';
import Loader from './Loader';
import NavigationButton from './NavigationButton';

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}

      <Header />

      <div>
        <main className="mx-auto max-w-3xl">
          <Outlet />
        </main>
      </div>

      <NavigationButton />
    </div>
  );
}

export default AppLayout;
