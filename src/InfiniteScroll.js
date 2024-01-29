import React, { useState, useEffect } from 'react';

const InfiniteScroll = ({ prod }) => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            const apiUrl = `https://dummyjson.com/posts`;

            try {
                const response = await fetch(apiUrl);
                const data = await response.json();
                let datapost = data.posts;
                setProducts((prevProducts) => [...prevProducts, ...datapost]);
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [page]);

    const handleScroll = () => {
        if (
            window.innerHeight + document.documentElement.scrollTop >=
            document.documentElement.offsetHeight - 10
        ) {
            setPage((prevPage) => prevPage + 1);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

      
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='infinite'>

            <button className='back' onClick={prod}><i class="arrow left"></i>Back to User List</button>
            <h1>Product List</h1>

            {products.map((product) => (
                <p>{product.title}</p>
            ))}

            {loading && <p>Loading...</p>}
        </div>
    );
};



export default InfiniteScroll;
