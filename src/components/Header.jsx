import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
        <img
        style={{ width: "154px", height: "20px", marginTop: "20px" }}
        src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
        alt="로고"
      />
      <nav>
        <ul style={{ display: "flex", listStyleType: "none", padding: 0 }}>
        <li style={{ marginRight: "20px" }}>
            <Link to="/mainmenu">메인메뉴</Link>
          </li>
          <li style={{ marginRight: "20px" }}>
            <Link to="/sidemenu">사이드메뉴</Link>
          </li>
          <li style={{ marginRight: "20px" }}>
            <Link to="/beverage">음료</Link>
          </li>
          <li style={{ marginRight: "20px" }}>
            <Link to="/alcohol">주류</Link>
          </li>
        </ul>
      </nav>
      <div className='orderbtn' style={{ display: 'flex'}}>
        <div className='cart' style={{ display: 'flex', marginTop: '20px', marginRight: '20px' }}>
          <button><Link to="/cart">장바구니</Link></button>
        </div>
        <div className='orderdetails' style={{ display: 'flex', marginTop: '20px', marginRight: '20px' }}>
          <button><Link to="/orderdetails">주문내역</Link></button>
        </div>
      </div>
    </div>
    
  );
}