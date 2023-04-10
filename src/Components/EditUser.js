import { useEffect, useState } from "react";
import { Link,useParams,useNavigate } from "react-router-dom";
import { Form,FormGroup,Label,Input,Button } from "reactstrap";
import { useGlobalContext } from "../Context/GlobalState";

const EditUser = ()=>{
    const { state,editUser } = useGlobalContext();
    const navigate = useNavigate();
    const [selectedUser, setSelectedUser] = useState({firstName:'',lastName:''})
    const { id } = useParams()
    // console.log("currentid",id);
    useEffect(()=>{
       const selectedUser = state.users.find(user => user.id === id);
       setSelectedUser(selectedUser)
     },[id,state.users])   
    const handleInputChange = (e)=>{
        setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value })
    } 
    const handlSubmit = (e) => {
        e.preventDefault();
        editUser(selectedUser);
        navigate("/")
      }
    return(
        <Form onSubmit={handlSubmit}>
        <FormGroup>
            <Label for="userName">Name</Label>
            <Input type="text" id="userName"  name="firstName" value={`${selectedUser?.first_name}`} placeholder="enter name" onChange={handleInputChange}/>
        </FormGroup>
        <FormGroup>
                <Label for="userlName">Last Name</Label>
                <Input type="text" name="lastName"  id="userlName" value={`${selectedUser?.last_name}`} placeholder="enter last name" 
                 onChange={handleInputChange}
                />
            </FormGroup>
        <Button type="submit">Edit Name</Button>
        <Link to="/" className="btn btn-danger btn">Back</Link>
    </Form>
    )
}
export default EditUser;