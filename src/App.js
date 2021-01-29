import './App.css';
import { data } from "./model/Model"
import React, { Component } from 'react'
import TextArea from './component/TextArea';
import RadioButton from './component/RadioButton';
import CheckBox from './component/CheckBox';
import ResultNilai from './component/ResultNilai';
import Formbuatsoal from './component/Formbuatsoal';
import Formchekbok from './component/Formchekbok';

import ReactDOM from 'react-dom';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = { jawabanSoal: [], score: 0, hasilJawabanSoal: [], pilihbox:[],
    options: [
      {
        name: 'Select…',
        value: null,
        tar: '2',
      },
      {
        name: 'Radio',
        value: 'Radio',
        tar: 'Formbuatsoal',
      },
      {
        name: 'Checkbox',
        value: 'Checkbox',
        tar: 'Formbuatsoal',
      },
      {
        name: 'Textarea',
        value: 'Textarea',
        tar: 'Formbuatsoal',
      },
    ],
    
  }




  }
  handleChange = (event) => {
    let newJawaban = [];

    newJawaban.push(event.target.value);

    // console.log(event.target.value);

    this.setState({ pilihbox: newJawaban ,value: event.target.value });
  };
  addJawaban = (jawaban) => {
    let newJawaban = this.state.jawabanSoal.filter((value) => { return value.soal_no !== jawaban.soal_no })

    newJawaban.push(jawaban);

    let hasilJawaban = this.kalkulasiNilai(newJawaban);
    hasilJawaban.sort((a, b) => a.soal_no - b.soal_no)

    this.setState({ jawabanSoal: newJawaban, hasilJawabanSoal: hasilJawaban });

  }

  kalkulasiNilai = (jawaban) => {
    let tempHasilJawab = [];
    let booleanJawab = "";
    jawaban.map((jawab) => {

      switch (data[jawab.soal_no - 1].type) {

        case "radio":
        case "essay":
          if (jawab.jawaban === data[jawab.soal_no - 1].kunci) {
            booleanJawab = "benar"

          } else {
            booleanJawab = "salah"
          }
          break;



        case "checkbox":
          if (this.equalsIgnoreOrder(jawab.jawaban, data[jawab.soal_no - 1].kunci)) {
            booleanJawab = "benar"

          } else {
            booleanJawab = "salah"
          }
          break;


      }

      tempHasilJawab.push({
        "soal_no": jawab.soal_no,
        "hasil": booleanJawab
      })
      booleanJawab = "";



    })

    return tempHasilJawab;

  }

 
  
  

  equalsIgnoreOrder = (a, b) => {
    if (a.length !== b.length) return false;
    const uniqueValues = new Set([...a, ...b]);
    for (const v of uniqueValues) {
      const aCount = a.filter(e => e === v).length;
      const bCount = b.filter(e => e === v).length;
      if (aCount !== bCount) return false;
    }
    return true;
  }

  render() {
    const { options, value, tar } = this.state;
    return (
      <div>

        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src="data:image/jpeg;base64,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" alt="" width="30" height="24" className="d-inline-block align-top" /> Bootstrap</a>
            <ul className="nav justify-content-end">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Create Quiz</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Attempt Quiz</a>
              </li>
              <li className="nav-item">
              <a className="nav-link" href="#">About Quiz</a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="container-fluid">

          <div className="row">
            <div className="col">
              <form>
                {data.map((nilai, i) => {
                  if (nilai.type === "essay") {
                    return <TextArea soal={nilai.soal} no={i + 1} key={i} funcJawab={this.addJawaban} />
                  } else if (nilai.type === "radio") {
                    return <RadioButton data={nilai} no={i + 1} key={i} funcJawab={this.addJawaban} />
                  } else if (nilai.type === "checkbox") {
                    return <CheckBox data={nilai} no={i + 1} key={i} funcJawab={this.addJawaban} />
                  }

                })
                }
              </form>
            </div>
            <div className="col">
              <div className="sticky-top">
              <form>
         
 <div className="form-group">
   <select className="form-control" onChange={this.handleChange} value={value}>
   {options.map(item => (
            <option key={item.value} value={item.value}>
              {item.name}
            </option>
          ))
      
          }
   </select>
   {value}
   <Formchekbok  />
          
   <Formbuatsoal />
 </div>
       
</form>    
            

                {/* <ResultNilai jawaban={this.state.hasilJawabanSoal} /> */}

              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default App