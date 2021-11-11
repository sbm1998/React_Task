import {observable,action,runInAction} from 'mobx';
type Users={
    username:string;
    plan:string;
}[] | [];

type ResponseUserType={
    username:string;
    subscription:{
        plan:string;
    }
}
export class UsersStore {
    @observable users:Users=[];
    @action getUserData(){
        fetch("https://random-data-api.com//api/users/random_user?size=30").then((res)=>{
           return res.json();
        }).then(action('fetchuser', (data)=>{
            const updatedData =  data.map((item:ResponseUserType)=>{
                return {
                    username:item.username,
                    plan:item.subscription.plan
                }
            });
           this.users = updatedData;
        }))
    }
}


const store=new UsersStore();

export default store;
