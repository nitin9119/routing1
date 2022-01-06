import {Link} from "react-router-dom";
import styled from "styled-components";
import { useEffect } from "react";
import { useState } from "react";

export const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getDetailInput();
  }, []);

  const getDetailInput = () => {
    fetch("http://localhost:3001/products")
      .then((d) => d.json())
      .then((res) => {
    //   console.log(res);
        setData(res)
        
      });
  };
  
  return (
    //prod.map((e,i)=>(
        console.log(data),
    <div>
     {data.map((e,i)=>(
         <Cards>
             <h3>Product: {e.id}</h3>
         <Link to={`/products/${e.id}`}>more details</Link>
         </Cards>         
     ))}
    </div>

    //     ))
  );
};

const Cards = styled.div`
margin:10px 10px 5px 10px;
padding:5px;
border:2px solid green;
width:200px;
height:100px;
border-radius:5px;
`
