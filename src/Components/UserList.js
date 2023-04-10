import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";
import { useGlobalContext } from "../Context/GlobalState";
const UserList = ()=>{
    const { state,getUsers,removeUser } = useGlobalContext();
  
    useEffect (()=>{
        getUsers();
    },[])

    return(
       <ListGroup style={{marginTop:"10px"}}>
            {
                state.users.map((item)=>{
                    const {id,first_name,last_name} = item;
                    return(
                        <ListGroupItem key={id} className="d-flex">
                        <strong>{first_name} {last_name}</strong>
                        <div style={{marginLeft:"auto"}}>
                        <Link to={`/singleuser/${id}`} className="btn btn-warning">view</Link>
                         <Link to={`/edit/${id}`} className="btn btn-warning">Edit</Link>
                          <Link className="btn btn-danger" onClick={()=>removeUser(id)}>Delete</Link>
                        </div>
                    </ListGroupItem> 
                    )
                })
            }
        </ListGroup>
    )
}
export default UserList;