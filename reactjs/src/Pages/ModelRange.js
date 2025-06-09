import React, { useState, useEffect } from 'react';
import '../Style/ModelRange.css';
import AudiRS7 from '../img/Audi RS-7.jpg';
import AudiRS6 from '../img/Audi RS-6.jpg';
import AudiA6 from '../img/Audi A6.jpg';
import AudiRSQ8 from '../img/Audi RSQ8.jpg';

const images = {
  1: AudiRS7,
  2: AudiRS6,
  3: AudiA6,
  4: AudiRSQ8,
};

const modelNames = {
  1: "Audi RS-7",
  2: "Audi RS-6",
  3: "Audi A6",
  4: "Audi RS-Q8 Performance | Рестайлинг",
};

export default function ModelRange() {
  const [cards, setCards] = useState([]); // Создание пустого массива

  useEffect(() => {
    fetch('http://localhost:3001/Cards') // Запрос к API
      .then((response) => response.json()) // Преобразование
      .then((data) => setCards(data)) // Запись в setCards
      .catch((error) => console.error('Ошибка загрузки данных:', error));
  }, []);


  return (
    <div className="model-range-container">
      <h1>Модельный ряд</h1>

      <div className="cars-grid">
        {cards.map((card) => ( // Перебор массива
          <div key={card.id} className={`car-card ${modelNames[card.id]}`}>
            <img src={images[card.id]} alt={modelNames[card.id]} className="car-image" />
            <h2>{modelNames[card.id]}</h2>
            <ul>
              <li>Пробег: {card["Пробег"]} км</li>
              <li>Объём двигателя: {card["Объём двигателя"]} л</li>
              <li>Мощность двигателя: {card["Мощность двигателя"]} л.с.</li>
              <li>Коробка: {card["Коробка"]}</li>
              <li>Цена: {card["Цена"].toLocaleString('ru-RU')} ₽</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
