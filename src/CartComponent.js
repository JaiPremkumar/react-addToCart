import { useState } from "react";
import Products from './Products'

export default function CartComponent(){
    const[cartdb,setCartdb] = useState('')

    const compFun=(product)=>{
        setCartdb(product)
        console.log(product)
    }
    return(
        <>
        <Products compFun={compFun}/>
        </>
    )
}