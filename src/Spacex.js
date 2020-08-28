import React, { useState, useEffect } from 'react';
import Info from './Info';

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

    function showItem(item){
        return(
            <Info item={item} />
        )
    }

    if (error) {
        return <div className="container">Error: {error}</div>;
    } else if (!isLoaded) {
        return <div className="container">Loading...</div>;
    } else {
        return (
            <div className="container">
                {items.map(showItem)}
            </div>
        );
    }
}


export default Spacex;