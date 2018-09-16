import React from "react";
import Form from "components/form/form";

class FormApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            formData:{
                    'name':'Rishabh Dev',
                    'age':28,
                    'occupation':'Software Engineer',
                    'email':'rishabdev919@gmail.com',
                    'gender':'Male'
                },
              "options":{
                    'name':{
                        'type':'text',
                        'validators':{
                            'onInput':function(input){
                                    if(input.length>0 && input.length<10 ){
                                        return "Name should be more than 10";
                                    }
                                    else{
                                        return true;
                                    }
                            },
                            'onSubmit':function(input){
                                  return this.onInput(input);
                            }
                        },
                        'label':"Name of the employees"
                    },
                    'age':{
                        'type':'number',
                        'validators':{
                            'onSubmit':function(input){
                                if(!input){
                                    return "Enter valid age";
                                }
                                return true;
                            },
                            'onInput':function(input){
                                if(!input){
                                    return "Enter valid age";
                                }
                                else if(input<=18){
                                    return "Age must be more than 18 years"
                                }
                                return true;
                            }
                        },
                        "label":"Age"
                    },
                    'occupation':{
                        'type':'text',
                        'validators':{
                            'onSubmit':function(input){
                                if(!input.length){
                                    return "Enter a valid age";
                                }
                                return true;
                            }
                        },
                        'label':'Occupation'
                    },
                    'email':{
                        'type':'text',
                        'validators':{
                            'onSubmit':function(input){
                                if(!input.length){
                                    return "Enter a valid email address";
                                }
                                return true;
                            }
                        },
                        'label':'Email address'
                    },
                    'gender':{
                        'type':'options',
                        'options':['Male','Female'],
                        'label':'Gender',
                        'validators':{
                            'onSubmit':function(input){
                                if(!input){
                                    return "Select a valid option";
                                }
                                return true;
                            }
                        }
                    }
              }  
        }
    }
    

    render(){
        return (<div className="form-app-wrapper">
                    <div className="form-app">
                       <Form data={this.state.formData} options={this.state.options} />
                    </div>
                </div>);
    }
}

export default FormApp;
//window.FormApp = FormApp;
