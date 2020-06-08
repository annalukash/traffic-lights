import React, { Component } from 'react';

import CircleList from '../circle-list/circle-list';
import Timer from '../timer/timer';

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {color: 'red', active: true, id: 1, timer: 5},
                {color: 'yellow', active: false, id: 2, timer: 5},
                {color: 'green', active: false, id: 3, timer: 5}
            ],
            isCarTrafficLights: true,
            timer: 5,
            activeId: 1
        }

        this.onToogleActive = this.onToogleActive.bind(this);
        this.onToogleCar = this.onToogleCar.bind(this);

        
    }

    componentDidMount() {
        this.initTimer()
    }

    onToogleActive(id) {
        this.setState(({data, timer, activeId}) => {
            let currentTimer = 0;
            const mappedArray = data.map((item) => {
                if (item.id === id) {
                    item.active = true;
                    currentTimer = item.timer;
                } else {
                    item.active = false;
                }

                return item
            })

            return {
                data: mappedArray,
                timer: currentTimer,
                activeId: (id + 1) > data.length ? 1 : id + 1
            }
        })
    }

    onToogleCar() {
        this.setState(({isCarTrafficLights}) => {
            return {
                isCarTrafficLights: !isCarTrafficLights
            }
        })
    }

    initTimer() {
        setInterval(() => {
           this.setState(({timer, activeId}) => {
               timer--
                if (timer === 0) {
                    this.onToogleActive(activeId)
                }
               return {
                   timer
               }
           }) 
        }, 1000);
        
    }

    render() {
        const {data, isCarTrafficLights, timer} = this.state;

        return (
            <div>
                <Timer
                    timer = {timer}
                />
                <CircleList
                    data = {data}
                    isCarTrafficLights = {isCarTrafficLights}
                    onToogleActive = {this.onToogleActive}
                    onToogleCar = {this.onToogleCar}/>
            </div>
            
        )   
    }
}