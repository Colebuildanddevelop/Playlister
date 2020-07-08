import React from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Dropdown from "react-bootstrap/Dropdown"



class CreatePlaylist extends React.Component{

    // state={
    //     title: '',
    //     category: ''
    // }

    // handleChange = (e) => {
    //  this.setState({
    //      [e.target.name]: e.target.value
    //  })

    // }

    // handleClikc = (e) => {
    //     e.preventDefault()
    //     this.props.newPlaylist(this.state)
    // }
    
   
render(){
    return(
        <div>
            <form>
            <div class="form-group">
            <input name="title" type="textfield" class="form-control" id="exampleFormControlInput1" placeholder="Playlist Nanme"></input>
            </div>
            <div class="form-group">
             <label for="exampleFormControlSelect1">Select Category</label>
             <select class="form-control" id="exampleFormControlSelect1">
             <option name="option1">1</option>
             <option name="option2">2</option>
             <option name="option3">3</option>
             <option name="option4">4</option>
             <option name="option5">5</option>
             </select>
             </div>
             <Button variant="primary">Submit</Button>
            </form>
        </div>
        
            
            
            
        )
    }
}
export default CreatePlaylist;

