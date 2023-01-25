import {Component} from "react";
import Header from "../header/Header"
import TaskList from "./modules/TaskList";
import Filter from "./modules/Filter";
import FilterButtons from "./modules/FilterButtons";

const initialData = [
    {
        'task_name': 'Петя и Массивы',
        'difficult': 'Легко',
        'type': 'Массивы',
        'status': 'Решено',
    },
    {
        'task_name': 'Петя и Массивы',
        'difficult': 'Легко',
        'type': 'Массивы',
        'status': 'Решено',
    },
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
        'status': 'Попытка',
    },
    {
        'task_name': 'Владик и Бинарный поиск',
        'difficult': 'Средне',
        'type': 'Бинарный поиск',
        'status': 'Попытка',
    },
    {
        'task_name': 'Владик и Бинарный поиск',
        'difficult': 'Средне',
        'type': 'Бинарный поиск',
        'status': 'Попытка',
    },
    {
        'task_name': 'Миньон и Дерево Отрезков',
        'difficult': 'Сложно',
        'type': 'Дерево отрезков',
        'status': 'Не решено',
    },
    {
        'task_name': 'Миньон и Дерево Отрезков',
        'difficult': 'Сложно',
        'type': 'Дерево отрезков',
        'status': 'Не решено',
    },
    {
        'task_name': 'Миньон и Дерево Отрезков',
        'difficult': 'Сложно',
        'type': 'Дерево отрезков',
        'status': 'Не решено',
    },
    ////////////////////////////


]

export default class Problems extends Component {

    render() {
        return (
            <>
                <Header/>
                <div className="inline-flex pt-10 pl-64 space-x-5">
                    <Filter/>
                    <TaskList list={initialData}/>
                </div>
                <div className="pt-2.5 pl-64 space-x-2.5">
                    <FilterButtons/>
                </div>
            </>
        );
    }
}

