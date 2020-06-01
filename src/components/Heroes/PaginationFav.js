import React,{Fragment,useEffect,useState} from "react";
import styled from '@emotion/styled';



const PaginationFav = () => {

    const Card = styled.div`
        width: 18rem;
    `;

    const Grid = styled.div`
        margin-top:30px;
        margin-left:7px;
        display:grid;
        @media screen and (max-width:768px){
            grid-template-columns: repeat(2,50%);    
        }

        @media screen and (min-width:769px){
            grid-template-columns: repeat(4,24%);
        }        
        grid-column-gap: 1%;
        div{
            grid-column: span 1;
            margin-bottom:25px;
            width:100%;
        }
    `;

    const [arrayFav, setarrayFav] = useState([])

    

    useEffect(() => {
        setarrayFav(JSON.parse(localStorage.getItem("favoritos")));
    },[]);
    
    
    function quitarFavorito(heroe){
        
        let favorito = JSON.parse(localStorage.getItem("favoritos"));
        
        favorito.forEach(element => {
            if(element.name === heroe.name){
                favorito.splice(favorito.indexOf(element),1);
            }            
        });

        localStorage.setItem("favoritos",JSON.stringify(favorito));

        setarrayFav(JSON.parse(localStorage.getItem("favoritos")));
        // favorito.push(heroe);
        // localStorage.setItem("favoritos",JSON.stringify(favorito));
    }
    
    
    return (    
        <Fragment>            
            <Grid>
                {arrayFav.map(element => (
                    <Card className="card">
                        <img src={element.thumbnail.path + "/portrait_xlarge.jpg"} class="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{element.name}</h5>                            
                            <button 
                                onClick={() => {quitarFavorito(element)}}
                                className="btn btn-danger">Quitar de favoritos</button>
                        </div>
                    </Card>
                ))}   
            </Grid>                     
        </Fragment>        
    );
};



export default PaginationFav;