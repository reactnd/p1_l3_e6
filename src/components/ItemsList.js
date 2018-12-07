import React, { Component } from 'react';
import PropTypes from 'prop-types';

 class ItemsList extends Component {
  static propTypes = {
    prop: PropTypes,
    items: PropTypes.array.isRequired
  };

  render() {
    const { items } = this.props;
    return (
      <div>
        <p className="items">Items</p>
        <ol className="item-list">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      </div>
    );
  }
}

export default ItemsList
