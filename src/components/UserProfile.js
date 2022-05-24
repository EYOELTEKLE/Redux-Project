import classes from './UserProfile.module.css';
import { useSelector } from 'react-redux';
const UserProfile = () => {
  const SignIn = useSelector(state => state.Auth.isAuthenticated);
  return (
    SignIn &&
    <main className={classes.profile}>
      <h2>My User Profile</h2>
    </main>
  );
};

export default UserProfile;
