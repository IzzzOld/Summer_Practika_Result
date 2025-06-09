import React, { Component } from 'react';
import AudiRS7 from '../img/Audi RS-7.jpg';
import AudiRSQ8 from '../img/Audi RSQ8.jpg';
import '../Style/ProjectCars.css';

export default class ProjectCars extends Component {
  render() {
    return (
      <div className="left-column"> 
          <h1>Информация о компании</h1>
          <h3>Project cars - это современный автосалон, предлагающий широкий выбор автомобилей Audi</h3>
          <h3>Почему стоит выбрать именно нас?</h3>
          <ol>
              <li>Большой ассортимент автомобилей</li>
              <li>Профессиональная поддержка</li>
              <li>Подробная информация по моделям</li>
              <li>Индивидуальный подход и точный</li>
              <li>Передовые технологии и безопасность</li>
              <li>Персонализация и комфорт</li>
            </ol>
          <div className="right-column">
            <div className="images">
              <h3>Самый часто покупаемый автомобиль</h3>
              <img src= {AudiRS7} alt="Audi RS-7" />
              <p>Audi RS-7</p>
            </div>
            <div className="images">
              <h3>Самый дорогой автомобиль</h3>
              <img src= {AudiRSQ8} alt="Audi RS Q8 Performance" />
              <p>Audi RS Q8 Performance | Рестайлинг</p>
            </div>
          </div>
        </div>

    );
  }
}