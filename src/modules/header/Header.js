import {Component} from "react";
import {Link} from "react-router-dom";
import '../../index.css'

export default class Header extends Component{
    render(){
        return(
            <>
                <div className="h-8 pt-1">
                    <Link to="/" >
                        <span className="pl-72 h-6">
                            NIKISTRAIN
                        </span>
                    </Link>
                    <Link to="/problems">
                        <span className="font-medium space-x-2.5 pl-2.5 h6">
                            Задачи
                        </span>
                    </Link>
                    <Link to="/problems">
                        <span className="font-medium space-x-2.5 pl-2.5 h6">
                            Обучение
                        </span>
                    </Link>
                    <Link to="/problems">
                        <span className="font-medium space-x-2.5 pl-2.5 h6">
                            Контесты
                        </span>
                    </Link>
                </div>
                <hr></hr>
            </>
        );
    }
}