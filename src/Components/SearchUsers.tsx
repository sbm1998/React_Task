
import React, {useEffect} from 'react';
import {inject,observer} from 'mobx-react';
import {UsersStore} from '../Stores/Users';
import './Style.css';
 
type StoreProps = {
    UsersStore: UsersStore;
  };
  
  interface Props extends StoreProps {

  }

const SearchUsers:React.FC<Props>= (props)=>{
    return(
        <>
        <h1>Search Box</h1>
        </>
    )
}


export default inject('UsersStore')(observer(SearchUsers));

