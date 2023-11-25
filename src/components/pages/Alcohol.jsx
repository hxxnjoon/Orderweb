import React from 'react'
import { dummys } from '../../itemdummy.js';
import Item from '../../Item.jsx';


export default function Alcohol() {
    const items = dummys; // 아이템 목록

    return (
        <div>
        <div>alcohol</div>
        {/* 카테고리가 alcohol인 아이템들만 렌더링합니다. */}
        <Item items={items} category="alcohol" />
        </div>
    );
    }