import React, { Component } from 'react'
import { Navbar, Nav, Container} from 'react-bootstrap'
import '../Style/App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProjectCars from '../Pages/ProjectCars';
import ModelRange from '../Pages/ModelRange'; 
import FactOfPayment from '../Pages/FactOfPayment'; 
import Basket from '../Pages/Basket'; 
import ContactsAndFeedBack from '../Pages/ContactsAndFeedBack';
import Footer from '../Components/Footer';
import { PaymentProvider } from '../Components/PaymentContext'; 

export default class Header extends Component {
    render() {
        return (
            <PaymentProvider>
            <Router>   
            <Navbar collapseOnSelect expand="md" className="background-audi" variant="light"> {/*Верхняя навигационная панель*/}
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" /> {/*Кнопка для меню*/}
                    <Navbar.Collapse id="responsive-navbar-nav" > {/*Всё, что внутри меню*/}
                        <header className="header">
                        <Nav className="ProjectCars"> {/*Группировка ссылок (Визуально)*/}
                            <Nav.Link href="/"> ProjectCars </Nav.Link> {/*Ссылка для перехода по адресу*/}
                        </Nav>
                        <Nav className="Menu">
                            <Nav.Link href="/Pages/modelrange"> Модельный ряд </Nav.Link>
                            <Nav.Link href="/Pages/factofpayment"> Факт оплаты </Nav.Link>
                            <Nav.Link href="/Pages/basket"> Корзина </Nav.Link>
                            <Nav.Link href="/Pages/contactsandfeedback"> Контакты и обратная связь </Nav.Link>
                        </Nav>
                        </header>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

                <Routes> {/*Группировка ссылок (Содержимое)*/}
                    <Route exact path="/" element={<ProjectCars />} /> {/*Указывает по какому адресу перейти*/}
                    <Route exact path="/Pages/modelRange" element={<ModelRange />} />
                    <Route exact path="/Pages/factOfPayment" element={<FactOfPayment />} />
                    <Route exact path="/Pages/basket" element={<Basket />} />
                    <Route exact path="/Pages/contactsandfeedback" element={<ContactsAndFeedBack />} />
                </Routes>

                <Footer />

            </Router>
            </PaymentProvider>
        )
    }
}
