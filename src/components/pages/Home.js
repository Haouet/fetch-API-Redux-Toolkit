import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../features/productsSlice';
import AddProduct from './backOffice/AddProduct';
import Product from './block/Product';

function Home() {
  const products = useSelector((state) => state.products.data);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());

  }, [dispatch])
  useEffect(() => {
    console.log("products :", products);
    setData(products.data)

  }, [products])

  return (
    <>
      <div className='row'>
        <div className='col-lg-3'>
          <h1>Items Products</h1>
          {data?.map(item => (
            <>
              <li key={item._id} >{item.title}({item.stock})</li>
            </>
          ))}
        </div>
        <div className='col-lg-6'>
          <AddProduct />
        </div>
      </div>
      <div className='row'>
        
        {data?.map(item => (
            
              <Product key={item._id} {...item} />
           
          ))}
           
      </div>
    </>
  )
}

export default Home