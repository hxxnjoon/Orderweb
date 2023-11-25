import React, { useState } from 'react';
import Modal from './Modal';
import './styles/itemlist.css';

function Item({ items, category }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  // 해당 카테고리에 속하는 아이템들만 필터링합니다.
  const filteredItems = items.results.filter((item) => item.cate === category);

  return (
    <div className="container">
      <div className="row">
        {filteredItems.map((item, index) => {
          return (
            <div className="col-md-4" key={index} onClick={() => handleItemClick(item)}>
              <h4>품목: {item.name}</h4>
              <p>가격: {item.price}</p>
            </div>
          );
        })}
      </div>
      {showModal && <Modal selectedItem={selectedItem} setShowModal={setShowModal} />}
    </div>
  );
}

export default Item;
