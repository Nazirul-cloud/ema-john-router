import { useEffect, useState } from "react"


const useProducts = () =>{
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then (data => setProducts(data))
    } ,[]);

    //return necessary things
    return [products, setProducts]; // 2ta jinish return korar jnno  array [] use kora hoise.
}
export default useProducts;