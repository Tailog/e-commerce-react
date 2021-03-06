import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {auth} from '../../store/firebase';
import CartIcon from './../cartIcon/CartIcon.jsx';
import CartDropdown from '../cartDropdown/CartDropdown';
import { selectCartHidden } from '../../redux/cart/cartSelector';
import { currentUserSelector } from "../../redux/user/userSelector";

import {ReactComponent as Logo} from '../../assets/logo/4.4 crown.svg.svg'
import './header.scss';


const Header = ({currentUser,hidden}) =>{
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {
          currentUser ?(
            <div className="option" onClick={()=>auth.signOut()}>
              SIGN OUT
            </div>
          ):
          (
            <Link className="option" to="/signin">
              SIGN IN
            </Link>
          )
        }
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: currentUserSelector,
  hidden: selectCartHidden
});

 
export default connect(mapStateToProps)(Header);