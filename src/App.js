import React,{Fragment} from "react";
import Pagination from "./components/Heroes/Pagination";
import {
  BrowserRouter as Router,
  Switch,
  Route,  
} from "react-router-dom";
import Nav from "./components/Header/Nav";
import Heroe from "./components/Heroes/Heroe";
import PaginationFav from "./components/Heroes/PaginationFav";
import styled from '@emotion/styled';

const Body = styled.div`
    font-family: 'Marvel', sans-serif;
    background: #aa0505;
    color: #fbca03;
  `;

function App() {
  return (

    <Fragment>       
      <Body>
        <Nav/>  
        <Router>   
          <Switch>
            <Route path="/" exact component={Pagination}/>
            <Route path="/heroe/:id" component={Heroe}/>
            <Route path="/favoritos" component={PaginationFav}/>
          </Switch>             
        </Router>   

      </Body>                  
    </Fragment>            
  );
}

export default App;
