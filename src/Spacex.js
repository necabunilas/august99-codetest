import React, { useState, useEffect } from 'react';
import Info from './Info';
import LazyLoad from 'react-lazyload';

function Spacex() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://api.spacexdata.com/v3/launches")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    const Loading = () =>(
        <div className="inner">
            <h3>Loading . .</h3>
        </div>
    )

    function showItem(item, index){
        return (
			<LazyLoad height={200} offset={100} once={true} key={index} placeholder={<Loading />}>
				<Info item={item} />
			</LazyLoad>
		);
    }

    if (error) {
        return <div className="container">Error: {error}</div>;
    } else if (!isLoaded) {
        return <div className="container">{<h1>Loading...</h1>}</div>;
    } else {
        return (
            <div className="container">
                {items.map(showItem)}
            </div>
        );
    }
}


export default Spacex;