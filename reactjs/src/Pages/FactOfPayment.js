import React, { useContext, useState, useRef } from 'react';
import visa from '../img/visa.jpg';
import mastercard from '../img/mastercard.jpg';
import '../Style/FactOfPayment.css';
import { PaymentContext } from '../Components/PaymentContext';

const FactOfPayment = () => {
  const { amount } = useContext(PaymentContext); // Получение amount
  const [success, setSuccess] = useState(false); // success показывает успешная ли оплата, setSuccess для изменения success

  // useRef для управления значениями полей
  const numberRef = useRef();
  const nameRef = useRef();
  const expiryRef = useRef();
  const cvcRef = useRef();

  const handleSubmit = (e) => { // Функция при отправке формы
    e.preventDefault(); // Объект события (е), отмена перезагрузки страницы
    setSuccess(true);

    // Очистка полей ввода
    if (numberRef.current) numberRef.current.value = '';
    if (nameRef.current) nameRef.current.value = '';
    if (expiryRef.current) expiryRef.current.value = '';
    if (cvcRef.current) cvcRef.current.value = '';
  };

  return (
    <div className="payment-container">
      <h1>Оплата заказа</h1>
      <div className="card-logos">
        <img src={visa} alt="Visa" className="card-logo" />
        <img src={mastercard} alt="Mastercard" className="card-logo" />
      </div>
      <form className="payment-form" onSubmit={handleSubmit}>
        <div className="form">
          <label htmlFor="amount">Сумма оплаты:</label>
          <input
            id="amount"
            type="text"
            placeholder=" "
            value={amount.toLocaleString('ru-RU')} // Форматирование под русский язык
            readOnly // Поле только для чтения
          />
        </div>
        <div className="form">
          <label htmlFor="number">Номер карты:</label>
          <input id="number" type="text" placeholder=" " ref={numberRef} />
        </div>
        <div className="form">
          <label htmlFor="name">Имя и фамилия владельца:</label>
          <input id="name" type="text" placeholder=" " ref={nameRef} />
        </div>
        <div className="form">
          <label htmlFor="expiry">Срок действия:</label>
          <input id="expiry" type="text" placeholder=" " ref={expiryRef} />
        </div> 
        <div className="form">
          <label htmlFor="cvc">CVC/CVV:</label>
          <input id="cvc" type="text" placeholder=" " ref={cvcRef} />
        </div>
        <div className="button-row">
          <button type="submit">Оплатить</button>
        </div>
      </form>
      {success && (
        <div className="success-message">
          <h2>Оплата прошла успешно!</h2>
        </div>
      )}
    </div>
  );
};

export default FactOfPayment;
