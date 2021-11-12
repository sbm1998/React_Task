import React, {useEffect} from 'react';
import {inject,observer} from 'mobx-react';
import {UsersStore} from '../Stores/Users';
import {useHistory} from 'react-router-dom'
import './Style.css';
 
type StoreProps = {
    UsersStore: UsersStore;
  };
  
  interface Props extends StoreProps {

  }


const RandomData:React.FC<Props>= (props)=>{
    let history=useHistory();
    const {users,getUserData,loadingUser}=props.UsersStore;
    
    console.log(users);


    // useEffect(() => {
    //     props.UsersStore.getUserData()
    // }, [])
    const getData=()=>{
        props.UsersStore.getUserData()
    }
    return(
        <div>
            <button onClick={() =>{history.push("/search");}}>Click To Search User</button>
            <button className="fetchUser" onClick={getData}>Fetch Users</button>
            <button className="updateplan">Update subscription plan</button>
            <button className="cancelupdate">‘Cancel updating</button>
            <div>
               {loadingUser ? <div>Loading...</div> : 
                <table>
                    <thead>
                        <tr>
                        <th>
                            Name
                        </th>
                        <th>
                            Plan
                            </th>
                            </tr>
                    </thead>
                    <tbody>
                        
                        {props.UsersStore.users.map((item)=>{
                          return( <tr>
                           <td> {item.username}</td>
                           <td>{item.plan}</td>
                           </tr>)
                        
                        })}
                    </tbody>
                </table>
}
            </div>
        </div>
    )
}


export default inject('UsersStore')(observer(RandomData));

