import React from 'react';
import Card from "./Card";

const CardList = (props) => {
    const cardsArray = props.weatherinfo.map((user, i) => {
        return <Card key={i} id={props.weatherinfo[i].id} name={props.weatherinfo[i].name} value={props.weatherinfo[i].value} />
    })
    return (
        <div>
            {cardsArray}
        </div>
    )
}

export default CardList;