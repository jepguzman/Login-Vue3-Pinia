import  Api  from "./Api";

export default{
  login(email, password){
    console.log("API: ",email);
    return Api().post('/login',{
        email: email,
        password : password
    })
  },

  register(email, password){
    return Api().post('/register',{
        email: email,
        password : password
    })
  },

}