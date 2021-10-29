import React, {Component} from "react";

import Spinner from '../spinner/spinner';

import './item-list.css'

export default class ItemList extends Component {

    

    state = {
      itemList : null
    }

    componentDidMount() {

      const { getData } = this.props;

      getData()        
        .then((itemList) => {
          this.setState({
            itemList
          })
        })
    }

    renderItems(arr) {
      return arr.map((item) => {
        const {id} = item
        const value = this.props.renderItem(item)
        return (
          <li className="list-group-item"
            key = {id}
            onClick={() => this.props.onItemSelecter(id)}>
            {value}
          </li>
        )
      })
    }

    render() {

      const {itemList} = this.state

      if(!itemList) {
        return <Spinner />
      }

      const items = this.renderItems(itemList)

      return (
        <ul className="item-list list-group">
          {items}
        </ul>
      );
    }
  }
  