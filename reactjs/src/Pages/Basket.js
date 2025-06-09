import React, { useState, useContext } from 'react';
import '../Style/Basket.css';
import AudiRS7 from '../img/Audi RS-7.jpg';
import AudiRS6 from '../img/Audi RS-6.jpg';
import AudiA6 from '../img/Audi A6.jpg';
import AudiRSQ8 from '../img/Audi RSQ8.jpg';
import { CardCar } from '../Components/CardCar';
import { PaymentContext } from '../Components/PaymentContext';
import { useNavigate } from 'react-router-dom';

const initialCars = [
  { id: 1, name: 'Audi RS-6', price: 13000000, img: AudiRS6, quantity: 0 },
  { id: 2, name: 'Audi A6', price: 5300000, img: AudiA6, quantity: 0 },
  { id: 3, name: 'Audi RS-7', price: 17000000, img: AudiRS7, quantity: 0 },
  { id: 4, name: 'Audi RS Q8', price: 22000000, img: AudiRSQ8, quantity: 0 },
];

const Basket = () => {
  const [cars, setCars] = useState(initialCars); // состояние cars в нем массив, setCars для обновления cars
  const { setAmount } = useContext(PaymentContext);
  const navigate = useNavigate();

  const incrementQuantity = (id) => { // Увеличение выбранных авто
    setCars(cars.map(car =>
      car.id === id ? { ...car, quantity: car.quantity + 1 } : car
    ));
  };

  const decrementQuantity = (id) => { // Уменьшение выбранных авто 
    setCars(cars.map(car =>
      car.id === id && car.quantity > 0 ? { ...car, quantity: car.quantity - 1 } : car
    ));
  };

  const totalPrice = cars.reduce((sum, car) => sum + car.price * car.quantity, 0); // Итоговая сумма покупки

  const handleProceedToPayment = () => { // Переход к оплате
    setAmount(totalPrice); // Установка суммы оплаты
    navigate('/Pages/factOfPayment');
  };

  return (
    <div className="basket-container">
      <h2 className="basket-title">
        Здесь будут автомобили, выбранные вами для покупки
      </h2>

      {cars.map(car => ( // Перебор массива
        <CardCar
          key={car.id}
          name={car.name}
          price={car.price}
          img={car.img}
          quantity={car.quantity}
          onIncrement={() => incrementQuantity(car.id)}
          onDecrement={() => decrementQuantity(car.id)}
        />
      ))}

      <div className="total-section">
        <div className="total-text">
          Итоговая сумма покупки: {totalPrice.toLocaleString('ru-RU')} ₽
        </div>
        <button className="pay-button" onClick={handleProceedToPayment}>
          Перейти к оплате
        </button>
      </div>
    </div>
  );
};

export default Basket;
