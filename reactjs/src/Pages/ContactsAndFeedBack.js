import React, { useState } from 'react';
import '../Style/ContactsAndFeedBack.css';
import salon from '../img/salon.jpg';

export default function ContactsAndFeedBack() {
  const [submitted, setSubmitted] = useState(false); // Состояние submitted, setSubmitted для изменения submitted

  const handleSubmit = (event) => {
    event.preventDefault(); // Отмена перезагрузки страницы
    setSubmitted(true);
  };

  return (
    <div className="contacts-feedback">
      <div className="contacts-text">
        <h2>Контакты</h2>
        <p>E-mail: info@projectcars.ru</p>
        <p>Телефон: +7 (495) 123-45-67</p>
        <p>Адрес: г. Москва, ул. Кукушкина, 1</p>
        <img className="salon" src={salon} alt="Главный офис" />
      </div>

      <div className="feedback-form-block">
        <h3>Если у вас есть какие-либо жалобы или предложения, то оставьте заявку ниже</h3>
        <form className="feedback-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Ваше ФИО" />
          <input type="text" placeholder="Номер телефона" />
          <input type="text" placeholder="Причина обращения" />
          <button type="submit">Отправить</button>
        </form>
        {submitted && (
          <p className="success-message">
            Ваше обращение успешно зарегистрировано, ожидайте ответа на вашей почте
          </p>
        )}
      </div>
    </div>
  );
}
