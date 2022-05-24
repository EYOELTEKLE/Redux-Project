import classes from './Header.module.css';
import { useSelector,useDispatch } from 'react-redux';
import { AuthActions } from '../store/auth';
const Header = () => {
  const Auth = useSelector(state => state.Auth.isAuthenticated);
  const dispatch = useDispatch()
  const logoutHandler = () => 
  {
    dispatch(AuthActions.logout())
  }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        { 
          Auth ? (<ul >
         
            <li>
               <a  href='/'>My Products</a>
             </li>
         
             <li>
               <a href='/'>My Sales</a>
             </li>
             <li>
            
               <button onClick={logoutHandler}>{(Auth &&"Logout") || (!Auth && "LogIn")}</button>
           </li>
           </ul>) : (

<ul >      

 <li>

   <button onClick={logoutHandler}>{(Auth &&"Logout") || (!Auth && "LogIn")}</button>
</li>
</ul>
           )
        
        }
      
    
      </nav>
    </header>
  );
};

export default Header;
