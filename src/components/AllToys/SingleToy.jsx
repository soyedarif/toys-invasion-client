import React from 'react';
import { Link } from 'react-router-dom';

const SingleToy = ({singleToy}) => {
    const {name,quantity,category,price,url,seller,_id,description}=singleToy
    return (
        <>
            <tr>
            <th>
          
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={url} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{name}</div>
              <div className="text-sm opacity-50">{category}</div>
            </div>
          </div>
        </td>
        <td>
          Price: ${price}
          <br/>
          <span className="badge badge-ghost badge-sm">Available: {quantity}</span>
        </td>
        <td>{seller?.seller}</td>
        <th>
          <Link to={`/toys/${_id}`} className="btn btn-border btn-xs">details</Link>
        </th>
            </tr>
        </>
    );
};

export default SingleToy;