import {Component} from "react";
import easy_title from './images/easy_title.svg'
import medium_title from './images/medium_title.svg'
import hard_title from './images/hard_title.svg'
import easy_difficult from './images/easy_difficult.svg'
import medium_difficult from './images/medium_difficult.svg'
import hard_difficult from './images/hard_difficult.svg'
import solved from './images/solved.svg'
import attempted from './images/attempted.svg'
import not_solved from './images/not_solved.svg'
import '../index.css'

function RenderTitleIcon(props) {
    const type = props;
    if(type === 'Легко'){
        return <img className="inline max-h-6 max-w-6 pr-1" src={easy_title} alt={type}/>
    }
    else if(type === 'Средне'){
        return <img className="inline h6 w6 pr-1" src={medium_title} alt={type}/>
    }
    else if(type === 'Сложно'){
        return <img  className="inline h6 w6 pr-0.5" src={hard_title} alt={type}/>
    }
    else{
        return null
    }
}

function RenderDifficultIcon(props){
    const difficult = props
    if(difficult === 'Легко'){
        return (
            <div style={{'color': '#36D96E'}}>
                <img  className="inline h6 w6 pr-0.5" src={easy_difficult} alt={difficult}/>
                {difficult}
            </div>
        )
    }
    else if(difficult === 'Средне'){
        return (
            <div style={{'color': '#DBBE46'}}>
                <img  className="inline h6 w6 pr-0.5" src={medium_difficult} alt={difficult}/>
                {difficult}
            </div>
        )
    }
    else if(difficult === 'Сложно'){
        return (
            <div style={{'color': '#DB5551'}}>
                <img  className="inline h6 w6 pr-0.5" src={hard_difficult} alt={difficult}/>
                {difficult}
            </div>
        )
    }
    else{
        return null
    }
}

function RenderStatus(props){
    const status = props
    if(status === 'Решено'){
        return (
            <div style={{'color': '#36D96E'}}>
                <img  className="inline h6 w6 pr-0.5" src={solved} alt={status}/>
                {status}
            </div>
        )
    }
    else if(status === 'Попытка'){
        return (
            <div style={{'color': '#DBBE46'}}>
                <img  className="inline h6 w6 pr-0.5" src={attempted} alt={status}/>
                {status}
            </div>
        )
    }
    else if(status === 'Не решено'){
        return (
            <div style={{'color': '#DB5551'}}>
                <img  className="inline h6 w6 pr-0.5" src={not_solved} alt={status}/>
                {status}
            </div>
        )
    }
    else{
        return null
    }
}


export default class TaskList extends Component {
    render() {
        return(
            <>
                <table className="border-collapse border-spacing-12" style={{'fontSize': '17px'}}>
                    <thead style={{'textAlign': 'left', 'color': '#615E5E'}}>
                        <tr style={{'borderBottom': '1px solid black', 'borderBottomColor': '#615E5E'}}>
                            <th className="inset-0" >Имя</th>
                            <th className="pl-40">Сложность</th>
                            <th className="pl-16">Тема</th>
                            <th className="pl-16">Статус</th>
                        </tr>
                    </thead>
                    <tbody className="font-medium" style={{'fontFamily':'Ubuntu-Regular'}}>
                        {this.props.list.map((task) => (
                            <tr key={task.key}>
                                <td className="pl-0">
                                    {RenderTitleIcon(task.difficult)}
                                    {task.task_name}
                                </td>
                                <td className="pl-40">
                                    {RenderDifficultIcon(task.difficult)}
                                </td>
                                <td className="pl-16">{task.type}</td>
                                <td className="pl-16">
                                    {RenderStatus(task.status)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </>
        );
    }
}