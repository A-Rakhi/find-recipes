import React, { useState } from "react";
//import { useHistory } from "react-router-dom";

import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
//import data from './Data'

function Naav(props) {

//   const recipe = props.recipe;
//   const [state,setState] = useState('');

//   const searchText =(e)=>{
//     setState(e.target.value);
//  } 
//  const dataSearch = recipe.filter(item => {
//    return Object.keys(item).some(key =>
//     item[key].toString().toLowerCase().includes(state.toString().toLowerCase()) )
//  })
//  console.warn(state);

  
  // const history = useHistory();

  const [searchText, setSearchText] = useState([]);

  // const handleSearch = () => history.push("/");
  //  props.recipes.filter((item) => {
  //   return (item.name.toLowerCase().includes(searchText.toLowerCase()))}
  //  )}

  return (
    <div>
      <Navbar bg="dark" variant="dark" style={{ height: "80px" }}>
        <Navbar.Brand href="#home" className="ml-5">
          Navbar
        </Navbar.Brand>
        <Nav className="mr-auto"></Nav>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            // value={state}
            onChange=  {(e)=> setSearchText(e.target.value)}
          />

          <Button
            variant="outline-info"
            className="mr-5" 
            // onClick={dataSearch}
          >
            Search
          </Button>
        </Form>
      </Navbar>
    </div>
  );
}

export default Naav;
