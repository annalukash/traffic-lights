import React, { Component } from 'react'; 
import './circle-list-item.css';

export default class CircleListItem extends Component {
    render() {
        const {color, active, onToogleActive} = this.props;

        let classNames = 'circle-list-item'

        return (
            <div 
                className={classNames} 
                style={{backgroundColor: active ? color : 'transparent'}}
                onClick={onToogleActive}
            ></div>
        );
    }
}