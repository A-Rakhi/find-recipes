import React,{useState} from 'react';
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";


const Naav = (props) => {
  
  const [searchText,setSearchText] =useState([]);

   const handleSearch =() => {
     props.recipes.filter((item) => {
      return (item.name.toLowerCase().includes(searchText.toLowerCase()))}
     )} 

    return (
    
    <div>        
      <Navbar bg="dark" variant="dark" style={{height:"80px"}}>
        <Navbar.Brand href="#home" className="ml-5">Navbar</Navbar.Brand>
        <Nav  className="mr-auto"></Nav>
        <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2"
            onChange = {(e)=> setSearchText(e.target.value)} />
          <Button variant="outline-info" className="mr-5" onKeyPress={handleSearch}>Search</Button>
        </Form>
      </Navbar>
        </div>
    );
};

export default Naav;