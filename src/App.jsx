import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/assets/css/style.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import HomePage from './components/Homepage';
import ProfilePage from './components/ProfilePage';
import SettingsPage from './components/SettingsPage';



function App() {
  return (
    <>
    <HomePage />
    <ProfilePage />
    <SettingsPage />
    </>
  );
}

export default App;
