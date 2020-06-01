import React,{Fragment} from "react"
import PaginationRow from "./PaginationRow";
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Spinner = styled.div`
        margin: auto;
        width:100px;   
        div{
          margin-top: 50px;
          width: 100px;
          height:100px;
        }     
    `;


const PaginationBody = ({heroes,loading}) => {    
    if(loading){      
      return (
        <Spinner>
          <div className="spinner-border text-warning" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </Spinner>        
      )
    }
            

    return (
        <Fragment>            
          <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Heroe</th>
                  <th scope="col">Series</th> 
                  <th scope="col"></th>                  
                </tr>
              </thead>
              <tbody>                   
                {                  
                  heroes.map(heroe => (                    
                    <PaginationRow 
                      key={heroes.indexOf(heroe)}                      
                      heroe={heroe}
                    />       
                  ))
                }                                                               
              </tbody>
            </table>                                       
        </Fragment>                
    );
};

PaginationBody.propTypes = {
  heroes: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,  
}

export default PaginationBody;