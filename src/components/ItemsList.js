import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Item from './Item'

const ItemsList = props => {
    const { items } = props;
    return (
      <div>
        <p className="items">Items</p>
        <ol className="item-list">
          {items.map((item, index) => (
            <Item key={index} item={item} />
          ))}
        </ol>
      </div>
    );
  }

ItemsList.propTypes = {
  items: PropTypes.array.isRequired
};

export default ItemsList;
