import { Component } from "react";
import Header from "../Functional/Header";
import Footer from "../Functional/Footer";
import AddUser from "../Functional/AddUser";
import Users from "../Functional/Users";
// import PolicyList from "./PolicyList";
// import { Counter } from "./Counter";
// import Axiosapp from "../axiosapp/Axiosapp";
// import AxiosApp from "../axiosapp/AxiosSpringJDBC";

export default class MainApp extends Component{

componentDidMount(){
    console.log("Loaded Mount...")
    const json = localStorage.getItem('slusers')
    const users = JSON.parse(json)
    if(users){
        this.setState(()=>{
            return users
        })
    }
}

componentDidUpdate(){
    console.log("Loaded Update...")
    const json = JSON.stringify(this.state.userData)
    localStorage.setItem('slusers',json)
}

    state={
         headerApp : "Welcome to Header App...",
         footerApp : "Nice Meeting You...",
         userData : []
    }

    addUser=(data)=>{
        this.setState((prevData)=>{
            return{
                userData:prevData.userData.concat(data)
            }
        })
    }

    deleteAll=()=>{
        this.setState((prevData)=>{
            return{
                userData:[]
            }
        })
    }
    deleteUser=(user)=>{
        this.setState((prevData)=>{
            return{
                userData:prevData.userData.filter(function (u) {
                    return u !== user;
                })
            }
        })
    }
    deleteUserById=(useridx)=>{
        this.setState((prevData)=>{
            return{
                deleted:prevData.userData.splice(useridx,1)
            }
        })
    }
    policyList=[
        {
            "policyId":1,
            "policyName":"Policy 1"
        },
        {
            "policyId":2,
            "policyName":"Policy 2"
        },
        {
            "policyId":3,
            "policyName":"Policy 3"
        },
    ]
    render(){
        return (
            <div>
                {/* <AxiosApp/> */}
                {/* <Axiosapp/> */}
                <Header hd={this.state.headerApp}/>
                <h2>Main App Works ....</h2>
                <Users 
                    userData={this.state.userData} 
                    deleteAll={this.deleteAll}
                    userLength={this.state.userData.length>0}
                    deleteUser={this.deleteUser}
                    deleteUserById={this.deleteUserById}/>
                <AddUser au={this.addUser}/>
                <Footer fd={this.state.footerApp}/>
                {/* <Counter/> */}
            </div>
        )
    }
}