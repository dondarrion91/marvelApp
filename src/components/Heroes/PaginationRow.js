import React,{Fragment} from "react";
import {  
    Link,
  } from "react-router-dom";
import styled from '@emotion/styled';
import Imagen from "./Image";
import PropTypes from 'prop-types';

const Buttons = styled.div`
    display: flex;
    flex-direction:column;
    button{
        background-color:#b97d10;
        border:0;
        color:#aa0505;        
        :hover{
            background-color:#4b0908;
        }       
        :visited{
            background-color:#4b0908;
        }
    }
  `;

const Tr = styled.tr`
    color: #fbca03;
    font-weight:bold;
    border: 2px solid black;
`;



const PaginationRow = ({heroe}) => {
    let descripcion;
        


    // localstorage
    if(!localStorage.getItem("favoritos") === true){
        localStorage.setItem("favoritos","[]");
    }


    if(!heroe.stories.items[0]){
        descripcion = "Sin comic";
    }else{
        descripcion = heroe.stories.items[0].name;
    }

    // Agregar a favoritos
    function agregarFavorito(heroe){
        let favorito = JSON.parse(localStorage.getItem("favoritos"));
        let exists = false;
        favorito.forEach(element => {
            if(element.name === heroe.name){
                exists = true;
            }            
        });

        if(!exists){
            favorito.push(heroe);
        }else{
            alert("Este heroe ya lo tienes!!");
        }        
        localStorage.setItem("favoritos",JSON.stringify(favorito));        
    }

    


    return (
        <Fragment>                    
            <Tr>                      
                <th scope="row">                                                                
                    <Link to={"/heroe/"+heroe.id}>
                        <Imagen imagen={heroe.thumbnail.path} />                                                                                             
                    </Link>                     
                </th>
                <td>{heroe.name}</td>
                <td>{descripcion}</td> 
                <td>
                    <Buttons>
                        <button 
                            onClick={() => {                                                                                        
                                agregarFavorito(heroe)
                                }                                
                            }
                            className="btn agregar">Agregar a Favoritos
                        </button>                        
                    </Buttons>      
                </td>                                          
            </Tr>                                                                                                             
        </Fragment>
    );
};

PaginationRow.propTypes = {    
    heroe: PropTypes.object.isRequired,  
  }

export default PaginationRow;