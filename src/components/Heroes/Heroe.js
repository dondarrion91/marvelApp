import React,{useEffect,useState, Fragment} from "react";
import axios from 'axios';
import styled from '@emotion/styled';


    const Spinner = styled.div`
        margin: auto;
        width:100px;   
        div{
          margin-top: 50px;
          width: 100px;
          height:100px;
        }     
    `;
  
   const Container = styled.div`
    margin-top:50px;
    display: flex;
  `;

  const Image = styled.div`
    width: 50%;
    img{
        width: 50%;
        margin: auto;
        display:block;
    }
  `;

  const Description = styled.div`
    width: 50%;    
  `;
  

const Heroe = (matchProps) => {

    const [heroe, setheroe] = useState([]);

    // useEffect(() => {
    //     console.log(matchProps.match.params);
    // },[matchProps]);

    useEffect(() => {
        const fetchPosts = async() => {
            try{                
                const res = await axios.get(`https://gateway.marvel.com:443/v1/public/characters/${matchProps.match.params.id}?apikey=fa36e3b0cf5a3fb7498cac82186740c0&hash=f391f614a6c5e1b3eed998f85eb5d2d3&ts=toeip`);
                setheroe(res.data.data.results);                
            }catch(e){
                console.log(e)
            }            
        }

        fetchPosts();        
    },[matchProps]);
    
    
    if(heroe[0] === undefined){
        return(
            <Spinner>
                <div className="spinner-border text-warning" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </Spinner>            
        );
        
    }else{
        
        return (
            <Fragment>                
                <Container>
                    <Image>
                        <img src={heroe[0].thumbnail.path + "/portrait_xlarge.jpg"} alt=""/>
                    </Image>                
                    <Description>
                        <h2>{heroe[0].name}</h2>    
                        <p>{heroe[0].description}</p>
                        <h4>Comic List: </h4>
                        {heroe[0].comics.items.map(element => (
                            <p key={element.id}>{element.name}</p>
                        ))}
                    </Description> 
                </Container>                       
            </Fragment>        
        );
    }            
    
    
};

export default Heroe;