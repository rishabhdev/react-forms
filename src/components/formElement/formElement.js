import React from "react";
import FormElementContainer from "components/formElementContainer/formElementContainer";

class FormElement extends React.Component{
    constructor(props){
        super(props);
    }
    render (){
        let props = this.props;
        var validators = this.props.validators;
        if(!props.type || props.type === 'text' || props.type === 'date'){
            return (
                <FormElementContainer label={props.label} value={props.value} validators={validators}>
                     <input  type={props.type}  />
                </FormElementContainer>
            );
        }
        else if(props.type  === 'number'){
            return (
                <FormElementContainer label = {props.label} value={props.value} validators={validators}>
                    <input  max={props.max || null} min={props.min || null} />
                </FormElementContainer>
            );
        }
        else if(props.type === 'options'){
            return (
              <FormElementContainer label={props.label} options={props.options} validators={validators} value={props.value}>
                    <select>
                            <option value={props.options[0]}>{props.options[0]}</option>
                            <option value={props.options[1]}>{props.options[1]}</option>
                    </select>
                </FormElementContainer>  
            );
        }
       
    }
}
export default FormElement;

//window.FormElement = FormElement;
