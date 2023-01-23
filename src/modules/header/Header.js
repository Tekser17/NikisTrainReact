import {Component} from "react";
import {Link} from "react-router-dom";
import '../../index.css'
import logo from './images/logo.svg'


export default class Header extends Component{
    render(){
        return(
            <>
                <div className="h-8 pt-0 pl-72">
                    <Link to="/">
                        <div className="inline">
                        <img src={logo} alt="fireSpot" className="h-6 inline align-middle"/>
                        <div className="inline text-lg">
                            <span className="font-medium pl-1 h-6 align-middle" style={{"color": "#AD922A"}}>
                                NIKIS
                            </span>
                            <span className="font-medium h-6 align-middle" style={{"color": "#6D77FA"}}>
                                TRAIN
                            </span>
                        </div>
                        </div>
                    </Link>
                    <div className="pl-2 inline text-lg space-x-1 font-medium align-middle">
                        <Link to="/problems">
                            <span className="px-3 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">
                                Задачи
                            </span>
                        </Link>
                        <Link to="/problems">
                            <span className="px-3 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">
                                Обучение
                            </span>
                        </Link>
                        <Link to="/problems">
                            <span className="px-3 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">
                                Контесты
                            </span>
                        </Link>
                    </div>
                </div>
                <hr></hr>
            </>
        );
    }
}