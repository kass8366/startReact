import okCircle from './svg/ok-circle.svg';
import Styled from './main.module.css'

export function Main () {
    return (
        <div className={Styled['container']}>
            <button className={Styled['container__button']}>
                Я кнопка с галочкой
                <img src={okCircle} />
            </button> 
        </div>
    );
  }
  