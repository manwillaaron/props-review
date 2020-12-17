import React, { Component } from 'react'
import ListItem from './ListItem'

class List extends Component {
    render() {
        return (
            <div>
                {this.props.list.map((el, i) => (
                    <ListItem key={i} item={el} />
                ))}
            </div>
        )
    }
}

export default List
