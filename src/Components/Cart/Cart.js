import React from 'react';
import { Table } from 'antd';
import { useSelector } from 'react-redux';
const columns = [
    {
      title: 'Name (all screens)',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Quantity',
      dataIndex: 'stock',
      key: 'stock',
      responsive: ['md'],
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      responsive: ['lg'],
    },
  ]
const Cart = () => {
    const cart=useSelector(state=>state.cart)
    return (
        <div>
            <Table columns={columns} dataSource={cart} />
        </div>
    );
};

export default Cart;