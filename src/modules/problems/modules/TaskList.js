import {Component} from "react";
import easy_title from './images/easy_title.svg'
import medium_title from './images/medium_title.svg'
import hard_title from './images/hard_title.svg'

function RenderTitleIcon(props) {
    const type = props;
    console.log('тип', type)
    if(type === 'Легко'){
        return <img className="inline max-h-6 max-w-6" src={easy_title} alt={type}/>
    }
    else if(type === 'Средне'){
        return <img className="inline h6 w6" src={medium_title} alt={type}/>
    }
    else if(type === 'Сложно'){
        return <img  className="inline h6 w6" src={hard_title} alt={type}/>
    }
    else{
        return null
    }
}


export default class TaskList extends Component {
    render() {
        return(
            <>
                <table className="border-collapse border-spacing-12">
                    <thead style={{'textAlign': 'left'}}>
                        <tr>
                            <th className="inset-0" >Имя<hr></hr></th>
                            <th className="pl-40">Сложность<hr></hr></th>
                            <th className="pl-16">Тема<hr></hr></th>
                            <th className="pl-16">Статус<hr></hr></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.list.map((task) => (
                            <tr key={task.key}>
                                <td className="pl-0">
                                    {RenderTitleIcon(task.difficult)}
                                    {task.task_name}
                                </td>
                                <td className="pl-48">{task.difficult}</td>
                                <td className="pl-16">{task.type}</td>
                                <td className="pl-16">{task.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </>
        );
    }
}