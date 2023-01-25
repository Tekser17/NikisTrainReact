import {Component} from "react";
import loop from './images/loop.svg'

export default class Filter extends Component {
    render() {
        return (
            <>
                <div className="rounded-l rounded-r border-2 py-5" style={{'width': '352px', 'height': '14', 'borderColor': '#615E5E'}}>
                    <span className="font-bold text-xl px-2.5" style={{'color': '#615E5E'}}>
                        Поиск
                    </span>
                    <label className="relative block pl-2.5 py-2.5">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-4">
                            <img src={loop} alt='Поиск'/>
                        </span>
                        <input
                            className="placeholder:italic placeholder:text-slate-400 block bg-gray-200 w-80 border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                            placeholder="Поиск по тегу..." type="text" name="search"
                            style={{}}
                        />
                    </label>
                </div>
            </>
        );
    }
}