import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useCart } from 'react-use-cart';


export default function Products(){

    const[item,setItem]=useState([])
    const{addItem} = useCart();

    useEffect(()=>{
       fetchData() 
    },[])

    const fetchData=async()=>{
        const responce = await fetch('https://fakestoreapi.com/products/')
        const data = await responce.json()
        setItem(data)

    }

    return(
        <div className='row  m-5' > 
        {item.map((val)=>(
         <Card style={{ width: '18rem' }} className='m-5'key={val.id}>
      <Card.Img variant="top" src={val.image}  style={{ height: '13rem' }}/>
      <Card.Body>
        <Card.Title>{val.title}</Card.Title>
        <Card.Text>$: {val.price}</Card.Text>
        <Button variant="primary" onClick={()=>addItem(val)}>addToCart</Button>
      </Card.Body>
    </Card>
    ))}
        </div>
    )
}