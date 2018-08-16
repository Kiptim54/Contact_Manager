import React, { Component } from 'react'

class AddContact extends Component {
    constructor(props){
        super(props)
        this.state={
            name:'',
            email:'',
            phone:'',
        }
    
    }
  
  render() {
      const {name, email, phone}= this.state
      const Change = (e)=>{
          this.setState({
              [e.target.name]:e.target.value
          })
      }
    return (
      <div>
        <div className="card" style={{width:'50%', padding:'3%', background:'grey light',marginRight:'auto', marginLeft:'auto'}}>
        <span className="card-title">Add Contact</span>
        <form style={{padding:'2%'}}>
            <label htmlFor="name">Name:
            <input type="text" placeholder="Enter Name" name="name" value={name} onChange={this.Change}/>
            </label>
            <label htmlFor="name">Email:
            <input type="email" placeholder="Enter email" name="email" value={email} onChange={this.Change}/>
            </label>
            <label htmlFor="name">Phone:
            <input type="text" placeholder="Enter Phone" name="Phone" value={phone} onClick={this.Change}/>
            </label>
            <input type="submit" value="Save Contact" className="btn"  />
        </form>
        </div>
      </div>
    )
  }
}
export default AddContact;