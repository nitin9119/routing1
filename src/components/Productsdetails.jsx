import styled from 'styled-components'
import { useParams } from "react-router-dom"

import {useState,useEffect} from "react";


export const Productsdetails = () =>{
    let [one,setOne] = useState([])
    
    let {id} = useParams();

    useEffect(()=>{
        shaalu()
    },[])

    const shaalu = ()=>{
        fetch(`http://localhost:3001/products/${id}`)
        .then((d) => d.json())
      .then((res) => {
    //   console.log(res);
        setOne(res)
        
      });
    }
    return (
        <Card>
        <div>
            <ul>
                Name of Product: {one.name}</ul>
                <ul>Price of Product: {one.price}</ul>
        </div>
        </Card>
    )
}

const Card = styled.div`
margin:10px 10px 5px 5px;
padding:5px;
border:2px solid green;
width:250px;
height:100px;
border-radius:5px;
`