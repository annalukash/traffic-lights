import React from 'react';
import './circle-list.css';

import CircleListItem from '../circle-list-item/circle-list-item'

const CircleList = ({data, isCarTrafficLights, onToogleActive, onToogleCar}) => {
    const filteredArray = data.filter((item, index) => index !==1)

    const newArr = isCarTrafficLights ? data.slice() : filteredArray
    const circleList = newArr.map((item) => {
        const {color, active, id} = item;

        return(
            <li key={id}>
               <CircleListItem
                    color = {color}
                    active = {active}
                    onToogleActive = {() => onToogleActive(id)}
               /> 
            </li>
            
        )
    })

    return(
        <div>
            <ul className="circle-list">
                {circleList}
            </ul>
            <div className="button-wrapper">
                <button
                    onClick={onToogleCar}
                >Toogle</button>
            </div>
        </div>
    )
}

export default CircleList;