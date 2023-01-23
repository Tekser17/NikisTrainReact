import {Component} from "react";
import Header from "../header/Header";


export default class Main extends Component {
    render() {
        return (
            <>
                <Header/>
                <h1 className="text-1xl font-bold underline">
                    Main Page
                </h1>
            </>
        );
    }
}

