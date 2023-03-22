import axios from "axios"
export  function SIGNUP(data){
    return axios.post("http://localhost:8080/user/signup",data)
  }

  export  function LOGIN(data){
    return axios.post("http://localhost:8080/user/login",data)
  }

  export  function GETPROFILE(){
    return axios.get("http://localhost:8080/user/userinfo")
  }