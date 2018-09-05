import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            misdatos: ["texto de constructor"]
        };
    }


    peticionGet = () => {
        let pruebas = this.state.misdatos;
        pruebas.push("Texto desde react");

        axios.get('/api/hello')
            .then(function (response) {
                pruebas.push(response.data.parametro);

            })
            .catch(function (error) {
                console.log(error);
            });
        this.setState({
            misdatos: pruebas
        });
        console.log(this.state.misdatos);


    }


    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p>parrafo desde react.</p>
                <p className="App-intro">{this.state.response}</p>
                <input type="button" value="obtener" onClick={this.peticionGet}/>

                {
                    this.state.misdatos.map(function (item) {
                        return (<p key={item.length}>{item}</p>);
                    })
                }
            </div>
        );

    }
}


export default App;
