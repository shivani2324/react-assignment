import React, { useReducer,useContext} from "react";
import AppReducer from './AppReducer';
import { sendData } from "../api";
const url = "https://reqres.in/api/";
//initial state
const initialState ={
     users:[],
     isError:false,
     formValues:null
}
//create context
const GlobalContext = React.createContext(initialState);
//create provider
const GlobalProvider = ({children})=>{
   const [state,dispatch] = useReducer (AppReducer,initialState);
   //add data 
    const addData = async (data)=>{
         try {
              const result = await sendData(data);
              //console.log("context",result);
              dispatch({ type: "ADD_USER", payload: result });
              return result;
            } catch (error) {
              dispatch({ type: "ERROR", payload: error });
            }
            
          }
      //fetch data
   const getUsers = async ()=>{
    try{
      const response = await fetch(url + 'users');
      const userResponse = await response.json();
      dispatch ({type:"GET_API_DATA",payload:userResponse.data})
    }catch(error){
      dispatch ({type:"ERROR"})
    }
 }
 //single user
 const singleUser = async (id)=>{
      try{
       const response = await fetch(url + `users/${id}`);
        const userRees = await response.json();
        dispatch ({type:"GET_SINGLE_DATA",payload:userRees.data})
        //console.log("single",userRees)
        return userRees.data;
      }catch(error){
        dispatch ({type:"ERROR"})
      }
 }
 //remove user
 const removeUser = (id) => {
  dispatch({
    type: 'REMOVE_USER',
    payload: id
  })
} 
const editUser = (user) => {
  dispatch({
    type: 'EDIT_USER',
    payload: user
  })
}

   return(
    <GlobalContext.Provider value = {{state,getUsers,addData,removeUser,editUser,singleUser}}>
        {children}
    </GlobalContext.Provider>
   )
   }
//create usecontext
export const useGlobalContext = () => {
    return useContext(GlobalContext)
}
export {GlobalContext,GlobalProvider}
