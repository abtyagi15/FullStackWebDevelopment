import React, {useState} from 'react';
import Card from "./Card";
import ProductDate from "./ProductDate";
import './ProductItem.css'

function ProductItem(props){
    const [title,setTitle] = useState(props.title);
    function clickHandler(){
        setTitle("Popcorn");
    }
    return(
        <Card className='product-item'>
            <ProductDate date={props.date} />
            <h2 className="item_description">{title}</h2>
            <button className='add-to-cart-btn' onClick={clickHandler}>Add to Cart</button>
        </Card>
    );
}

export default ProductItem;