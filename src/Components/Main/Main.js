import okCircle from './svg/ok-circle.svg';
import Styled from './main.module.css';
import data from './data.json';
import { Modal } from "../Modal/Modal.js";
import { useState } from 'react';


function cardPaint(data){
    return (
        data.map(function(elem) {
            return (
                <div key={elem.id} className={Styled['card_container']}>
                    <h2 className={Styled['card_container__title']} >{elem.title}</h2>
                    <img className={Styled['card_container__img']} src={elem.url} />
                    <p className={Styled['card_container__info']} >{elem.info}</p>
                </div>
            )
        })
    )
}

export function Main () {

    const[isModalOpen, setIsModalOpen] = useState(false);

    const onShowModal = () => {
        setIsModalOpen(true)
    } 

    return (
        <div className={Styled['container']}>
            <button className={Styled['container__button']}>
                Я кнопка с галочкой
                <img src={okCircle} />
            </button> 
            <button className={Styled['container__button']}  onClick={onShowModal}>Открыть модальное окно</button> 
            {cardPaint(data)}
            {isModalOpen && <Modal onClose={setIsModalOpen} />}
        </div>
    );
}