import React,{Fragment,useEffect,useState} from "react"
import PaginationBody from "./PaginationBody";
import axios from 'axios';
import PaginationNav from "./PaginationNav";
import { Link } from "react-router-dom";
import styled from '@emotion/styled';



// styles
const NavContainer = styled.nav`
    background: #b97d10;
`;

const LinkColor = styled.div`
    background: #aa0505;
    border-radius:10px;    
    a{
        padding:10px;
        color: #b97d10;
        font-size:24px;
    }    
`;


const Input = styled.input`
    background: #aa0505;    
    ::placeholder{
        color: #fbca03;
    }

    :focus{
        background: #fbca03; 
        color: #aa0505;          
    }
`;
// styles

const Pagination = () => {

    // Hooks
    const [heroes, setHeroes] = useState([]);    
    const [loading, setloading] = useState(false);
    const [currentPage, setcurrentPage] = useState(1);
    const [postsPerPage, setpostsPerPage] = useState(5);
    

    useEffect(() => {
        const fetchPosts = async() => {
            try{
                setloading(true);
                const res = await axios.get(`https://gateway.marvel.com/v1/public/characters?apikey=fa36e3b0cf5a3fb7498cac82186740c0&orderBy=-modified&limit=50&hash=f391f614a6c5e1b3eed998f85eb5d2d3&ts=toeip`);
                setHeroes(res.data.data.results);
                setloading(false);
            }catch(e){
                console.log(e)
            }            
        }

        fetchPosts();
    },[]);

    function handleBusqueda(){
        let busqueda = document.getElementById("busqueda");                                  
        fetchPost(busqueda.value);               
    }
    
    const fetchPost = async(resultado) => {        
        try{
            if(resultado === ""){
                return;
            }else{
                setloading(true);               
                const res = await axios.get(`https://gateway.marvel.com:443/v1/public/characters?apikey=eb21a48643b2901fea305523c0c44e18&nameStartsWith=${resultado}`);
                setHeroes(res.data.data.results);      
                setloading(false);
            }            
        }catch(e){
            console.log(e)
        }                  
    }        
    

    const indiceUltimoHeroe = currentPage * postsPerPage;
    const indicePrimerHeroe = indiceUltimoHeroe - postsPerPage;
    const HeroeActual = heroes.slice(indicePrimerHeroe,indiceUltimoHeroe);
    
    const paginate = (pageNumber) => setcurrentPage(pageNumber);
    

    return (
        <Fragment>  
            <NavContainer>
                <nav className="navbar">
                  <form className="form-inline">

                    <Input 
                        onInput={() => {
                            handleBusqueda()
                        }}
                        autoComplete="off"
                        id="busqueda"
                        className="form-control mr-sm-2" 
                        type="search" 
                        placeholder="Search" 
                        aria-label="Search" 
                    />                
                  </form>
                  

                  <LinkColor>
                    <Link to="/favoritos">
                          Heroes Favoritos
                    </Link>
                  </LinkColor>                  
                </nav>
            </NavContainer>                 

            <PaginationBody
                loading= {loading}
                heroes= {HeroeActual}
            />   

            <PaginationNav
                postsPerPage = {postsPerPage}
                totalPosts = {heroes.length}
                paginate= {paginate}
            />
        </Fragment>        
    );
};


export default Pagination;