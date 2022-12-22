import React from 'react'
import { Link } from "react-router-dom";

function Product({ _id, title, price, description, images
    , thumbnail, stock }) {
    return (
        <div className='col-3'>
            <Link to={`/details/${_id}`} >
                <img src={images[0].fileUrl} />
            </Link>           
                <h5 key={_id} >{title} ({stock})</h5>

        </div>
    )
}

export default Product