import React from 'react';

export const CardCar = ({ name, price, img, quantity, onIncrement, onDecrement }) => {
  return (
    <div className="car-item">
      <div className="car-model">{name}</div>
      <div className="car-price">{price.toLocaleString('ru-RU')} ₽</div>
      <div className="car-quantity">
        <button className="button" onClick={onDecrement}>−</button>
        <span style={{ margin: '0 10px' }}>{quantity}</span>
        <button className="button" onClick={onIncrement}>+</button>
      </div>
      <div className="car-image">
        <img src={img} alt={name} />
      </div>
    </div>
  );
};
