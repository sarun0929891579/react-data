import React, { Component } from 'react'
import data from '../data';
    
export default class Products extends Component {
    render() {
        return (
            <div>
                <h2>สินค้าทั้งหมด</h2>
             {
             data.products.map(item =>
                <div>
                {item.name}
                ราคา {item.price} บาท
                จำนวน {item.stock}
             </div>

            )
            }
        </div>  
        )
        }
    }    
  