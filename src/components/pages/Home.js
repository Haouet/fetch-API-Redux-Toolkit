import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../features/productsSlice';

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
    <div>
      {data?.map(item => (
        <h2 key={item._id} >{item.title}</h2>
      ))}
    </div>
  )
}

export default Home