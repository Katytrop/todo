import { Component } from "react";

import AppInfo from "../app-info/info";
import SearchPanel from "../search-panel/search";
import AppFilter from "../app-filter/filter";
import EmployersList from "../employers-list/employers-list";
import AddForm from "../employers-add-form/add-form";

import "./app.css";

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {name: 'John C.', salary:1200, increase: false, star: false, id: 1},
                {name: 'Alex M.', salary:1800, increase: true, star: false, id: 2},
                {name: 'Mike V.', salary:3000, increase: false, star: true, id: 3},
                {name: 'John P.', salary:1300, increase: false, star: false, id: 4},
                {name: 'Carl W.', salary:2500, increase: true, star: false, id: 5}],
            term: "",
            filter: "all"
        }
        this.maxId = 6;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            star: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem]
            return {
                data: newArr
            }
        })
    }

    onToggleIncrease = (id) => {
       /* первый ввриант решения
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const old = data[index];
            const newItem = {...old, increase: !old.increase};
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
            return {
                data: newArr
            } 

        })*/
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id) {
                    return {...item, increase: !item.increase}
                }
                return item;
            })
        }))
    }

    onToggleStar = (id) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id) {
                    return {...item, star: !item.star}
                }
                return item;
            })
        }))
    }

/*  вариант обьединения инкрис и стар, видео 18
    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    } */

    searchEmp = (items, term) => {
        if(term.length === 0) { // если строка пустая то возвращается первоначальный массив
            return items
        }
        return items.filter(item => {
            return item.name.indexOf(term) > -1 // вернет массив найденых эл-ов
        })
    }

    onUpdateSearch = (term) => {
        this.setState({
            term: term
        })
    }

    filterPost = (items, filter) => {
        switch(filter) {
            case 'rise':
                return items.filter(item => item.star) // если item.star true то return
            case 'more1500': 
                return items.filter(item => item.salary > 1500)
            case 'bonus':
                return items.filter(item => item.increase)
            default:
                return items
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter})
    }

    render() {
        const {data, term, filter} = this.state;
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        const bonusPremi = this.state.data.filter(item => item.star).length;
        //const visibleData = this.searchEmp(data, term); до обьединения поиска и фильтра
        const visibleData = this.filterPost(this.searchEmp(data, term), filter); // в фильтр помещаем массив уже отфильтрованный поиском

        return (
            <div className="app">
                <AppInfo employees={employees} 
                         increased={increased}
                         bonusPremi={bonusPremi}/>
    
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
                </div>
                <EmployersList 
                    data={visibleData} /* передаем дату как пропс */
                    onDelete={this.deleteItem}
                    onToggleIncrease={this.onToggleIncrease}
                    onToggleStar={this.onToggleStar}/> 
    
                <AddForm onAdd={this.addItem}/>
            </div>
        )
    }
}

export default App;