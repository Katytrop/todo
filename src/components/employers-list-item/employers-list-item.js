import './employers-list-item.css';

const EmployersListItem = (props) => {

        const {name, salary, onDelete, onToggleIncrease, onToggleStar, increase, star} = props;
        let classNames = "list-group-item d-flex justify-content-between";
        if(increase) { // добавление класса инкрис дял окрашивания
            classNames += " increase"; // не забыть пробел для отделения класса
        }
        if(star) {
            classNames += " like";
        }

        return (
            <li className={classNames}>
                <span onClick={onToggleStar} className="list-group-item-label" data-toggle="star">{name}</span>
                <span className="list-group-item-input">{salary + '$'}</span>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm"
                        onClick={onToggleIncrease}
                        data-toggle="increase">
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button"
                            className="btn-trash btn-sm"
                            onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
}

export default EmployersListItem;