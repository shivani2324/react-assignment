import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { Form,FormGroup,Label,Input,Button } from "reactstrap";
import { useGlobalContext } from "../Context/GlobalState";

const AddUser = ()=>{
    const { addData } = useGlobalContext();
    const navigate = useNavigate();
    const [formValues,setValue] = useState({firstName:'',lastName:''});
    const handlSubmit = async (e)=>{
        e.preventDefault();
        const newUser =  await addData(formValues);
        if(newUser instanceof Object){
           navigate("/")
        }
    }
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValue({ ...formValues, [name]: value });
      };
    return(
        <Form onSubmit={handlSubmit}>
            <FormGroup>
                <Label for="userName">First Name</Label>
                <Input type="text" id="userName" name="firstName" placeholder="enter first name"
                 onChange={handleInputChange} value={formValues.firstName}
                />
            </FormGroup>
            <FormGroup>
                <Label for="userlName">Last Name</Label>
                <Input type="text" name="lastName" id="userlName" placeholder="enter last name" 
                 onChange={handleInputChange} value={formValues.lastName}
                />
            </FormGroup>
            <Button type="submit">Submit</Button>
            <Link to="/" className="btn btn-danger btn">Back</Link>
        </Form>
    )
}
export default AddUser;