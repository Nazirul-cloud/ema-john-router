import React from 'react';
import { Link } from 'react-router-dom';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import useCart from '../hooks/useCart';
import useProducts from '../hooks/useProducts';
import ReviewItem from '../ReviewItem/ReviewItem';
import { useHistory } from 'react-router';

const OrderReview = () => {

    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    const history = useHistory();

    const handleRemove = key =>{
       const newCart = cart.filter(product => product.key !== key);
       setCart (newCart);
       removeFromDb(key);
    }
    const handleProceedToShipping = () =>{
        history.push('/shipping');
        // setCart([]);
        // clearTheCart();
    }
 
    
    return (
        <div className="shop-container">
           <div className="product-container">
               {
                   cart.map(product => <ReviewItem 
                    key = {product.key}
                    product={product}
                    handleRemove ={ handleRemove }
                   
                   ></ReviewItem>)
               }
           </div>

           <div className='cart-container'>
                    <Cart cart={cart}>
            
                            <button onClick={handleProceedToShipping} className='btn-regular'>Proceed to Shipping</button>
                        
                    </Cart>
           </div>
        </div>
    );
};

export default OrderReview;