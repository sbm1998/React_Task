import {action,runInAction, makeAutoObservable} from 'mobx';
import axios from 'axios';
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
type ResponseUserDataType={
    data:ResponseUserType[]
}


export class UsersStore {
    constructor() {
        makeAutoObservable(this);
    }
    
     users:Users=[];
     loadingUser= false;
    @action getUserData(){
        this.setLoading(true);
        axios.get("https://random-data-api.com//api/users/random_user?size=30")
        .then(({data}: { data: ResponseUserType[]})=>{
            console.log(data);
            runInAction(() => {
                this.users = this.filterUserData(data);
            })
            this.setLoading(false);
        //    this.users = updatedData;
        })

    }

    @action setLoading(state:boolean){
        this.loadingUser=state
    }

    @action filterUserData(data: ResponseUserType[]) {
        return data.map((item:ResponseUserType)=>{
                return {
                    username:item.username,
                    plan:item.subscription.plan
                }
            });
    }
}


const store=new UsersStore();

export default store;
