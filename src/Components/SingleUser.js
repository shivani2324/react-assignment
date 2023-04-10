import { useEffect,useState } from "react";
import { Link,useParams } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";
import { useGlobalContext } from "../Context/GlobalState";
const SingleUser = ()=>{
    const { singleUser } = useGlobalContext();
    const [userData, setUserData] = useState(null);
    const { id } = useParams();
     console.log("singleUser",singleUser)
    const getUserData = async () => {
        try {
          let res = await singleUser(id);
          //console.log("rrrr",res)
          setUserData(res)
         } catch (err) {
          console.log(err);
        }
      };
      useEffect(()=>{
        console.log("get",getUserData())
      },[id])
    return(
       <ListGroup style={{marginTop:"10px"}}>
                    <ListGroupItem  className="d-flex">
                        <strong>{`${userData?.first_name}  ${userData?.last_name}`}</strong>
                       
                    </ListGroupItem> 
                    <Link to="/" className="btn btn-danger btn">Back</Link>
        </ListGroup>
    )
}
export default  SingleUser 