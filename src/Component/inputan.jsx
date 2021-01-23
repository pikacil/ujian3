import React, { Component } from 'react';
import postsdata from './data.json';

class inputan extends Component {
    constructor(props) {
        super(props);
        this.postdatanya=postsdata;
        this.nilai = "";
        this.checkbok = "";
        
        this.state = {
            postdatanya:postsdata,
          nilai: "",
        };
      }
    
      onChangeesay = (nilai) => {
        this.setState({ nilai: nilai.target.value });
        console.log(this.nilai);
      };
    
render() {
    return (
        <div>
            {this.postdatanya.map((detail,index)=>{
                 
                 if (detail.type == "radio") {
                   
                    return <h5>{index+1}. {detail.soal}<br /><input type={detail.type} className={detail.a} checked />{detail.a}<input type={detail.type} className={detail.c} />{detail.c}<br /><input type={detail.type} className={detail.b} />{detail.b}<input type={detail.type} className={detail.d} />{detail.d}</h5>
                 }
                 if (detail.type == "checkbox") {
                    // console.log(detail.jawab[0]);
                    let statusCss = ""
                    let jawab=detail.jawab;
                  
                    console.log(detail.jawab[0]);
                     if(detail.jawab.value==detail.option.value){
                        statusCss = " checked";
                        console.log(detail.jawab);
                     }
                     else{
                        statusCss = "";
                     }
                    return <h5>{index+1}. {detail.soal}<br /><input type={detail.type} className={detail.option[0]}  checked  />{detail.option[0]}<br /><input type={detail.type} className={detail.option[1]} checked/>{detail.option[1]}<br /><input type={detail.type} className={detail.option[2]} />{detail.option[2]}</h5>
                }
                 else {
                    return <h5>{index+1}. {detail.soal}<br /> 
                   
                    <textarea id="w3review" className="w3review" rows="4" cols="50"     onChange={this.onChangeesay} /> 
                    
                      </h5>
                 }
            //    return <h1>{index}.<br /></h1>
            })}
        </div>
    );
 

}
}

export default inputan;