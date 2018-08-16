import React, { Component } from 'react';


const Context = React.createContext();

const reducer = (state, action)=>{
    switch(action.type){
        case 'DELETE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.filter(contact=>
                contact.id!== action.payload)
            }
        default:
            return state
    }
}

export class Provider extends Component{
    state ={
        contacts:[{
            id:1,
            name:'John Doe',
            email:'jdoe@gmail.com',
            phone:'0818182883'
        },
        {
            id:2,
            name:'Jane Doe',
            email:'jdoe@gmail.com',
            phone:'0818182883' 
        },
        {
            id:3,
            name:'Mathew Doe',
            email:'jdoe@gmail.com',
            phone:'0818182883' 
        }
        ],
        dispatch:action=>this.setState(state=>reducer(state,action))
        
    }
    render(){
        return(
            <Context.Provider value={this.state}>
            {this.props.children}
            </Context.Provider>
        )
    }
}
export const Consumer = Context.Consumer;