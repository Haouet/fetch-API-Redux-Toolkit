import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import FormData from 'form-data';

const baseURL = "http://localhost:5000/api";

function AddProduct() {
    const [title, setTitle] = useState('');
    const name = useRef(null);
    const [price, setPrice] = useState('');
    const prix = useRef(null);
    const [stock, setStock] = useState('');
    const qty = useRef(null);
    const [category, setCategory] = useState('');
    const cat = useRef(null);
    const [file, setFile] = useState('');
    const img = useRef(null);
    const [description, setDescription] = useState('');
    const desc = useRef(null);
    const [listCategory, setListCategory] = useState([]);
    const [message, setMessage] = useState('');
   
    //  const data = new FormData();
    //   data.append('imageUrl', {
    //     uri: imageUrl.uri,
    //     name: imageUrl.uri.split('/').pop(), 
    //     type: mime.getType(imageUrl.uri)

    // })
    const formData = new FormData();
    formData.append('images',file);
    formData.append('category',category);
    formData.append('price',price);
    formData.append('stock',stock);
    formData.append('title',title);
    formData.append('description',description);
   
    const onFormSubmit = (e) => {
        e.preventDefault();

        const config = {
             headers: {    
                'Content-Type': 'multipart/form-data'    
            }
        }
         axios.post(`${baseURL}/product/add`, 
                formData 
            , config).then((result) => {
                console.log(result.data);   
                name.current.value = '';  
                desc.current.value = '';
                prix.current.value = '';  
                qty.current.value = '';  
                desc.current.value = ''; 
                img.current.value = '';          
            }).catch((error) => {
                console.log(error);
            });

       
    }
    
    const fetchData = async () => {

        try {
            const { data: response } = await axios.get(`${baseURL}/cat`);
            console.log(response.data);
            setListCategory(response.data);
        } catch (error) {
            console.error(error.message);
        }

    }

    useEffect(() => {
        
        fetchData();
    }, []);
    return (
        <div className='container'>
            <div className="row">
                <div className="col-lg-12">
                    <div className="contact__form__title">
                        <h2>Add Product</h2>
                    </div>
                </div>
            </div>
            <form onSubmit={onFormSubmit} >
                <div className="form-group">
                    <input type="text" ref={name} className="form-control" label="title" placeholder="Enter Product name" onChange={(e) => {
                        setTitle(e.target.value)
                    }} />
                </div>
                <div className="form-group">
                    <input type="text" ref={prix} className="form-control" label="price" placeholder="Enter Product price §" onChange={(e) => {
                        setPrice(e.target.value)
                    }} />
                </div>
                <div className="form-group">

                    <input type="text" ref={qty} className="form-control" label="stock" placeholder="Enter product stock" onChange={(e) => {
                        setStock(e.target.value)
                    }} />

                </div>
                <div className="form-group">

                    <input type="file" ref={img} onChange={(e) => {
                        setFile(e.target.files[0])
                    }} className="form-control" id="customFile" />
                </div>
                <div className="form-group">
                    <select className="form-select"  ref={cat} onChange={(e) => {
                                setCategory(e.target.value);                               
                            }}   value={category}>
                    <option value="">Choose a category</option>
                        {listCategory.map(item => (
                            <option key={item._id} value={item.name}> {item.name} </option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <textarea type="text"  ref={desc} className="form-control" label="description" placeholder="Enter description" onChange={(e) => {
                        setDescription(e.target.value)
                    }} />
                </div>
                <div className="form-group">
                    <button type="submit" className="primary-btn" > Submit</button>
                    
                </div>
                <div>{message}</div>
            </form>
        </div>
    )
}

export default AddProduct