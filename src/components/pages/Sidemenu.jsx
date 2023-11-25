import React from 'react'
import { dummys } from '../../itemdummy.js';
import Item from '../../Item.jsx';


export default function Sidemenu() {
  const items = dummys; // 아이템 목록

  return (
    <div>
      <div>sidemenu</div>
      {/* 카테고리가 sidemenu인 아이템들만 렌더링합니다. */}
      <Item items={items} category="sidemenu" />
    </div>
  );
}