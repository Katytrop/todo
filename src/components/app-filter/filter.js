import "./filter.css";

const AppFilter = (props) => {
    const buttonsData = [
        {name: 'all', label: "Все сотрудники"},
        {name: 'rise', label: "Cотрудники на повышение"},
        {name: 'bonus', label: "Сотрудники с премией"},
        {name: 'more1500', label: "З/П больше 1500$"}
    ]
    const buttons = buttonsData.map(({name, label}) => {
        const active = props.filter === name; // в этцу переменную возвращается или тру или фолс
        const clazz = active ? 'btn-light' : 'btn-outline-light';
        return (
            <button 
                className={`btn ${clazz}`}
                type="button"
                key={name}
                onClick={() => props.onFilterSelect(name)}>
                {label}   
            </button>
        )
    })

    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
}

export default AppFilter;