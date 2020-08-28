import React from 'react';

function Info(props){

    return(
        <div className="inner">
            <p>Flight Number: {props.item.flight_number}</p>
            <p>Mission Name: {props.item.mission_name}</p>
            <p>Launch Year: {props.item.launch_year}</p>
            <p>Rocket Name: {props.item.rocket.rocket_name}</p>
            <p>Launch Site: {props.item.launch_site.site_name_long}</p>
        </div>
    )

}

export default Info;