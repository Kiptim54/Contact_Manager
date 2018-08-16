import React, { Component } from 'react'
import Contact from './Contact';
import { Consumer } from '../../Context';

class Contacts extends Component {
    constructor(){
        super()

    }
  render() {
      return(
        <Consumer>
              {value=>{
                  const {contacts }= value
                  console.log(contacts)
                  return (
                    <div>
                        {contacts.map(contact=>{
                            return <Contact contact={contact} key={contact.id} />
                        })
                        }
        
                    </div>
                    )
                    }}
        </Consumer>
      )
       

       
  }
}
export default Contacts