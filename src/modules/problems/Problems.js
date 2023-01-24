import {Component} from "react";
import Header from "../header/Header"
import TaskList from "./modules/TaskList";

const initialData = [
    {
        'task_name': 'Петя и Массивы',
        'difficult': 'Легко',
        'type': 'Массивы',
        'status': 'Решено',
    },
    {
        'task_name': 'Владик и Бинарный поиск',
        'difficult': 'Средне',
        'type': 'Бинарный поиск',
        'status': 'Попробовали',
    },
    {
        'task_name': 'Миньон и дерево отрезков',
        'difficult': 'Сложно',
        'type': 'Дерево отрезков',
        'status': 'Не решено',
    },
]

export default class Problems extends Component {

    render() {
        return (
            <>
                <Header/>
                <TaskList list={initialData}/>
            </>
        );
    }
}

