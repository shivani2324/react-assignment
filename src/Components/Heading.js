import { Link } from "react-router-dom";
import { Navbar,Nav,NavItem,NavbarBrand } from "reactstrap";
const Heading = ()=>{
    return(
          <Navbar color="dark" dark>
           <NavbarBrand href="/">My Team</NavbarBrand>
           <Nav>
             <NavItem>
               <Link className="btn btn-primary" to="/add">Add User</Link>
               </NavItem>
           </Nav>
          </Navbar>
    )
}
export default Heading;