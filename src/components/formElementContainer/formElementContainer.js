import React from "react";
//import FormElementContainer from "components/formElementContainer/formElementContainer";

class FormElementContainer extends React.Component{
    constructor(props){
        super(props);
        this.state={
            error:null,
            validators:{},
            value:this.props.value
        }
    }
    componentDidMount(){
        let validators = this.props.validators;
        let mod = {};
        let props = this.props;
        for(var key in validators){
            let temp = validators[key];
            mod[key] = (event)=>{
                let res = temp(event.target.value);
                if(res === true){
                    this.setState({
                        'error':null
                    });
                }
                else{
                   this.setState({
                        'error':res
                    });
                }
            }
        }
        this.setState({'validators':mod});
    }
    render (){
        let props = this.props;
        let parentState = this.state;
        let children = React.Children.map(this.props.children, function(Child){

            let temp  = (<Child.type {...Child.props} {...parentState.validators} />);
            return temp;
        });
        return (
            <div className="formElement">
                <label>{props.label}</label>
                <div>
                    {children}
                </div>
                <div className="error-container">
                    {this.state.error}
                </div>
            </div>
        )
    }
}

export default FormElementContainer;

//window.FormElementContainer = FormElementContainer;
