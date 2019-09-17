import React, { useEffect, useState } from 'react'
import useFetch from '../hooks/useFetch'

const Home = () => {
    // const [entries, setEntries] = useState([]);

    // useEffect(async () => {
    //     async function fetchPosts(params) {
    //         const posts = await axios.get('https://jsonplaceholder.typicode.com/posts');
    //         console.log(posts)
    //     }

    //    fetchPosts()
    // }, []);
    const {data}  = useFetch('posts')
    console.log(data)

    return (
        <div>
            Home component
        </div>
    )
}

export default Home
