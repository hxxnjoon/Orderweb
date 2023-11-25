import React from 'react'
import './styles/modal.css';

function Modal({ selectedItem, setShowModal }) {
    const addToCart = (item) => {
        // 여기에 장바구니에 아이템을 추가하는 로직을 구현할 수 있습니다.
        console.log(`${item.name}이(가) 장바구니에 추가되었습니다.`);
        setShowModal(false); // 모달 닫기
      };
  
    const closeModal = () => {
      setShowModal(false);
    };
  
    return (
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={closeModal}>&times;</span>
          <h2>맛있는 {selectedItem.name}</h2>
          <p>가격: {selectedItem.price}원.</p>
          <button onClick={() => addToCart(selectedItem)}>장바구니 담기</button>
          <button onClick={closeModal}>취소</button>
        </div>
      </div>
    );
  }
  
  export default Modal;
