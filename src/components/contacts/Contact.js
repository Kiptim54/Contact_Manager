import React from 'react';
import PropTypes from 'prop-types';
import {Consumer } from '../../Context';

class Contact extends React.Component{
    state={
        showInfo:false// add a property that will hide some contact detials
    }
    moreDetails= ()=>{
        //function to toggle the details of a contact
        this.setState({showInfo:!this.state.showInfo});
        
    }
    deleteClick = (id, dispatch)=>{
        //function meant to delete a contact from the state
        dispatch({type: 'DELETE_CONTACT',payload:id});
        
    }
    render(){
        return(
            <Consumer>
            {value=>{
                const {id,name, email, phone } = this.props.contact
                const {dispatch } = value
                
                return(
                    <div className=" container">
                        <div className="card-panel">
                            <i onClick={this.moreDetails} className="right material-icons">expand_more</i> 
                            <i className="material-icons right red-text" onClick={this.deleteClick.bind(this, id, dispatch)}>delete</i> 
                            <h4>Name: {name}</h4>
                                {this.state.showInfo ? (
                                    <div>
                                        <h6> {email}</h6>
                                            <h6> {phone}</h6>
                                    </div>
                                ):null}
                        </div>
                     
                       
                
                    </div> 
                    // <!--closing container-->
                )
            }}
        </Consumer>
        
        

        )
       
    }
}
Contact.propTypes={
    
}
export default Contact;