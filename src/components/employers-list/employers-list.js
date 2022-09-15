import EmployersListItem from "../employers-list-item/employers-list-item";
import "./employers-list.css";


const EmployersList = ({data, onDelete, onToggleIncrease, onToggleStar}) => {

    const elements = data.map(item => { // создаем новый массив с изменеными каждыми элементами
        const {id, ...itemProps} = item;
        return (
            <EmployersListItem 
                key={id} 
                {...itemProps}  // ...item идут из data 
                onDelete={() => onDelete(id)}
                onToggleIncrease={() => onToggleIncrease(id)}
                onToggleStar={() => onToggleStar(id)}/> // props может быть в виде функции
        )
    })
/*  const elements = data.map(item => { // создаем новый массив с изменеными каждыми элементами 
        return (
            <EmployersListItem  name={item.name} salary={item.salary}/> // ...item идут из data перый вариант!!!
            <EmployersListItem  {...item}/> // второй вариант!!!!
        )
    }) */

    return (
        <ul className="app-list list-group"> 
            {elements}
        </ul> //массив новых элементов после map
    )
/*     return ( // было изначально так
        <ul className="app-list list-group"> 
            <EmployersListItem name="John C." salary={3000}/>
            <EmployersListItem name="Alex C." salary={4000}/>
            <EmployersListItem name="Carl C." salary={5000}/>
        </ul> 
    ) */

}

export default EmployersList;
