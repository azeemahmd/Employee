import React, { Component } from 'react';
import './Employeeform.css'

class EmployeeDetails extends Component {
constructor(){
super ();
this.state={
gender: 'Gender',
content: '',
submitted: false
}
this.changeGender=this.changeGender.bind(this);
 this.changeContent= this. changeContent.bind (this);
}

changeGender=(e)=>{
this.setState({
gender: e. target. value
});
console. log(e. target. value);
};

changeContent=(c)=>{
this.setState({
content: c. target. value
});
console. log(c. target.value);
}

// handleSubmit=（s）=>｛
// s.preventDefault();
// this.setState({
//     submitted:true
// });

render(){
    return(
        <form onSubmit={this.handleSubmit}>
            <div>
            <h1>Employee Details</h1>
            <label>Employee Name </label>
          <input type='text' name= 'empName' placeholder='Enter emp name' classNames='empNID' required onChange={this.changeContent}/><br/>
            <label>Employee ID</label>
            <input type='text' name='empID' placeholder= 'Enter Employee ID'className='emplIID' required onChange={this. changeContent}/><br/>
            <label>Department
<select onChange={this.changeContent}required>
<option value='--Select--'>--Select--</option>
<option value='Developer'>Developer</option> 
<option value='Executive'>Executive</option>
</select>
</label><br/>

<h3>{this.state.gender}</h3>
<input type='radio' value='male' name='gender' onChange={this.changeContent} required/>Male<br/>
<input type='radio' value='Female' name='gender' onChange={this.changeContent} required/>Female<br/>

<label>Marital Status <br/>
<select onChange={this.changeContent} required>
<option value="--Select--">--Select--</option> 
<option values="single">Single</option>
<option value="divorced">Divorcedc</option>
<option value="widowed"> Midowed</option>
</select>
</label><br/>
<br/>
<label>Salary </label>&nbsp; (In LPA)<br/>
<input type='number' name='salary'placeholder=' Enter your salary' onChange={this. changeContent}required/><br/>
<br/>
<label>Enter your address</label><br/>
<textarea className="address" name="address" rows="4" placeholder='Enter your address' onChange={this.changeContent} required/><br/>



            </div>
        </form>
    );
}

}
export default EmployeeDetails;