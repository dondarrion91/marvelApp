import React, { Fragment } from "react";
import styled from '@emotion/styled';
import PropTypes from 'prop-types';


const Ul = styled.ul`
    background: #4b0908;
    li{
      a{
        background: #fbca03;
      }
      a:hover{
        background: #4b0908;
      }
    }
`;

const PaginationNav = ({postsPerPage,totalPosts,paginate}) => {
    const pageNumbers = [];

    for(let i=1;i<=Math.ceil(totalPosts/postsPerPage);i++){
        pageNumbers.push(i);
    }   

    return (
        <Fragment>
          <div className="container">
            <nav>
                <Ul className="pagination">
                    {pageNumbers.map(number => (
                        <li key={number} className="page-item">
                          <a onClick={(e) => {
                                                e.preventDefault();
                                                paginate(number);
                                            }} 
                              href="!#" 
                              className="page-link">
                            {number}
                          </a>
                        </li>
                    ))}
                </Ul>
            </nav>
          </div>            
        </Fragment>        
    );
};

PaginationNav.propTypes = {
  postsPerPage: PropTypes.number.isRequired, 
  totalPosts: PropTypes.number.isRequired, 
  paginate: PropTypes.func.isRequired
}

export default PaginationNav;