import React from "react";
import FormElement from "components/formElement/formElement";

class Form extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        let form = [];
        let data = this.props.data;
        let options = this.props.options;
        for(var key in this.props.data){
            form.push(
                <React.Fragment>
                    <FormElement value={data[key]} validators={options[key].validators} label={options[key].label} type={options[key].type} options={options[key].options}/>
                    <br/>
                </React.Fragment>
            )
        }
        return (
            <div>
                {form}
            </div>
        )
    }
}
export default Form;

//window.Form = Form;
