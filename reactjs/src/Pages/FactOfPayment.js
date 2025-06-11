import React, { useContext, useState, useRef } from 'react';
import visa from '../img/visa.jpg';
import mastercard from '../img/mastercard.jpg';
import '../Style/FactOfPayment.css';
import { PaymentContext } from '../Components/PaymentContext';

const FactOfPayment = () => {
  const { amount } = useContext(PaymentContext);
  const [success, setSuccess] = useState(false);

  const [errors, setErrors] = useState({});

  // useRef для управления полями
  const numberRef = useRef();
  const nameRef = useRef();
  const expiryRef = useRef();
  const cvcRef = useRef();

  const validate = () => {
    const newErrors = {};

    const number = numberRef.current.value.trim(); // Получение значения из поля
    if (!number) {
      newErrors.number = 'Введите номер карты';
    } else if (!/^\d{16}$/.test(number)) {
      newErrors.number = 'Номер карты должен содержать ровно 16 цифр';
    }

    const name = nameRef.current.value.trim();
    if (!name) {
      newErrors.name = 'Введите имя и фамилию владельца';
    }

    const expiry = expiryRef.current.value.trim();
    if (!expiry) {
      newErrors.expiry = 'Введите срок действия карты';
    } else if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiry)) {
      newErrors.expiry = 'Срок действия должен быть в формате MM/YY';
    }

    const cvc = cvcRef.current.value.trim();
    if (!cvc) {
      newErrors.cvc = 'Введите CVC/CVV';
    } else if (!/^\d{3}$/.test(cvc)) {
      newErrors.cvc = 'CVC/CVV должен содержать 3 цифры';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0; // Если ошибок нет, то true
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSuccess(true);

      // Очистка полей ввода
      if (numberRef.current) numberRef.current.value = '';
      if (nameRef.current) nameRef.current.value = '';
      if (expiryRef.current) expiryRef.current.value = '';
      if (cvcRef.current) cvcRef.current.value = '';

      setErrors({}); // Сброс ошибок
    } else {
      setSuccess(false);
    }
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
            value={amount.toLocaleString('ru-RU')}
            readOnly
          />
        </div>
        <div className="form">
          <label htmlFor="number">Номер карты:</label>
          <input id="number" type="text" placeholder=" " ref={numberRef} />
          {errors.number && <div className="error-message">{errors.number}</div>}
        </div>
        <div className="form">
          <label htmlFor="name">Имя и фамилия владельца:</label>
          <input id="name" type="text" placeholder=" " ref={nameRef} />
          {errors.name && <div className="error-message">{errors.name}</div>}
        </div>
        <div className="form">
          <label htmlFor="expiry">Срок действия:</label>
          <input id="expiry" type="text" placeholder="MM/YY" ref={expiryRef} />
          {errors.expiry && <div className="error-message">{errors.expiry}</div>}
        </div>
        <div className="form">
          <label htmlFor="cvc">CVC/CVV:</label>
          <input id="cvc" type="text" placeholder=" " ref={cvcRef} />
          {errors.cvc && <div className="error-message">{errors.cvc}</div>}
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
