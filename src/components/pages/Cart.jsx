import React from 'react'
import { Link } from 'react-router-dom';

export default function Cart() {
    const cartitems = (item) => {
        // 여기에 장바구니에 아이템을 추가하는 로직을 구현할 수 있습니다.
        console.log(`${item.name}이(가) 장바구니에 추가되었습니다.`);

      };
  return (
    <div>
        <p>{cartitems.name}</p>
        <p>db받아서 넣는 곳</p>
        <div className='purchase' style={{ position: 'relative', marginTop: '20px', marginRight: '20px' }}>
        <button><Link to="/cart/purchase">구매하기</Link></button>
      </div>
    </div>
  )
}
