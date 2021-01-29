import React, { Component } from 'react';

class Formchekbok extends Component {
    constructor(props) {
        super(props)

        this.state = {
            soal: '',
            jawabA: '',
            jawabB: '',
            jawabC: '',
            jawabD: '',
            kunci: '',
            score: ''
        }
    }

    handlerSoalChange = (event) => {
        this.setState({
            soal: event.target.value
        })
    }

    handlerJawabAChange = (event) => {
        this.setState({
            jawabA: event.target.value
        })
    }

    handlerJawabBChange = (event) => {
        this.setState({
            jawabB: event.target.value
        })
    }

    handlerJawabCChange = (event) => {
        this.setState({
            jawabC: event.target.value
        })
    }

    handlerJawabDChange = (event) => {
        this.setState({
            jawabD: event.target.value
        })
    }

    handlerKunciChange = (event) => {
        this.setState({
            kunci: event.target.value
        })
    }

    handlerScoreChange = (event) => {
        this.setState({
            score: event.target.value
        })
    }

    handlerSubmit = event => {
        console.log('Your input value is: ' + this.state.soal)
        alert(`${this.state.soal} ${this.state.jawabA} ${this.state.jawabB} ${this.state.jawabC} ${this.state.jawabD} ${this.state.kunci} ${this.state.score}`)
        event.preventDefault()

    }

    render() {
        return (
            <form align="left" >
                <div>
                    <label>Soal</label><br />
                    <input type='text' value={this.state.soal} onChange={this.handlerSoalChange} /><br />
                    <label>Jawab A</label><br />
                    <input type='text' value={this.state.jawabA} onChange={this.handlerJawabAChange} /><br />

                    <label>Jawab B</label><br />
                    <input type='text' value={this.state.jawabB} onChange={this.handlerJawabBChange} /><br />

                    <label>Jawab C</label><br />
                    <input type='text' value={this.state.jawabC} onChange={this.handlerJawabCChange} /><br />

                    <label>Jawab D</label><br />
                    <input type='text' value={this.state.jawabD} onChange={this.handlerJawabDChange} /><br />

                    <label>Kunci</label><br />
                    <input type='text' value={this.state.kunci} onChange={this.handlerKunciChange} /><br />

                    <label>Score</label><br />
                    <input type='text' value={this.state.score} onChange={this.handlerScoreChange} /><br />
                </div>
                <button type="submit" onClick={this.handlerSubmit}>submit</button>
              
            </form>
        );
    }
}

export default Formchekbok;