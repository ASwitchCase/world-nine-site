import { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const Register = (props) => {

    const[fname,setFname] = useState("");
    const[lname,setLname] = useState("");
    const[email,setEmail] = useState("");
    const[tag,setTag] = useState("");

    return(
        <Popup trigger={props.trigger} position="right center" modal>
      <div className='content-header'>
            <br></br>
            <h1>Register</h1>
        </div>
                
        <hr></hr>

        <div className='content'>
            <form>
                <div className='info-entry'>
                    <label>First Name</label>
                    <input type='text' onChange={(e) => setFname(e.target.value)}></input>
                </div>

                <div className='info-entry'>
                    <label>Last Name</label>
                    <input type='text' onChange={(e) => setLname(e.target.value)}></input>
                </div>

                <div className='info-entry'>
                    <label>Email</label>
                    <input type='text' onChange={(e) => setEmail(e.target.value)}></input>
                </div>

                <div className='info-entry'>
                    <label>Gamer Tag</label>
                    <input type='text' onChange={(e) => setTag(e.target.value)}></input>
                </div>
                <button>Submit</button>
            </form>
        </div>
    </Popup>
    );
    
}
export default Register;