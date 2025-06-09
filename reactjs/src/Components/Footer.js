import React, { Component } from 'react';
import '../Style/Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-left">
            <p>ProjectCars © 2025 Официальный дилер автомобилей Audi</p>
            <p>Политика конфиденциальности | Пользовательское соглашение</p>
          </div>
          <div className="footer-right">
            <p>Адрес: г. Москва, ул. Кукушкина, 1</p>
            <p>Телефон: +7 (495) 123-45-67</p>
            <p>E-mail: info@projectcars.ru</p>
            </div>
          </div>
      </footer>
    );
  }
}