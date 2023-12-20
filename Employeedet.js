import React, { Component} from "react";
import './Employeeform'
import { type } from "@testing-library/user-event/dist/type";

class Employeedet extends Component{
    constructor(){
        super();
        this.state={
            empName:'',
            empID:'',
            dep:'',
            gender:'',
            maritalstatus:'',
            salary:'',
            address:'',
            content:'',
            submitted:false,
            FormData:'{}'
        
        }
        this.changeGender-this.changeGender.bind(this);
         this.changeContent= this.changeContent.bind(this);
          this.handleSubmit-this.handleSubmit.bind(this);
           this.showTable-this.showTable.bind(this); 
           this.handleCancel=this.handleCancel.bind(this);
        
    }

    changeGender=(e)=>{
        this.setState({
            gender: e.target.value,
        });
        console.log(e.target.value);
    };
    changeContent=(c)=>{
        this.setState({
            [c.target.name]: c.target.value,
        });
        console.log(c.target.value);
    };




    handleSubmit=(s)=>{
        s.preventdefault();
        this.setState({
            submitted:true,
            FormData:{
                empName: this.state.empName,
                empID: this.state.empID,
                dep: this.state.dep,
                gender: this.state.gender,
                maritalstatus: this.state.maritalstatus,
                salary:this.state.salary,
                address:this.state.address,




            }


        });
  
    };

    showTable=()=>{
        const { FormData} = this.state;
        return(
            <div>
                <table>
                    <thread>
                        <tr>
                            <th>Employee name</th>
                            <th>Employee </th>
                            <th>department</th>
                            <th>gender</th>
                            <th>maritalStatus</th>
                            <th>salary</th>
                            <th>address</th>
                        </tr>
                    </thread>
                    <body>
                        <tr>
                            <td>{FormData.empName}</td>
                            <td>{FormData.empID}</td>
                            <td>{FormData.dep}</td>
                            <td>{FormData.gende}r</td>
                            <td>{FormData.maritalstatus}</td>
                            <td>{FormData.salary}</td>
                            <td>{FormData.address}</td>
                        </tr>
                    </body>
                </table>
            </div>
        );
    };

    handleCancel=()=>{
        this.setState({
            empName:null,
            empID:null,
            dep:null,
            gender:null,
            maritalstatus:null,
            salary:null,
            address:null,

        });
            
        
    };

    render(){
        if(this.state.submitted){
            return(
                <div>
                    <h1 style={{backgroundColor: 'GrayText' ,textAlign: 'center'}}>Employee Details submit</h1>
                    {this.showTable()}
                </div>
            );
        }

        return (
            <form onSubmit={this.handleSubmit}>
            <div className="form">

            <h1 Employee Details></h1>
            <label>Employee Name </label></br>
            <input type="text" name="empName" placeholder="Enter Employee Name" className="empNID" required onChange={this.changeContent}/></br>
            <label>Employee ID</label></br>
            <input type="text" name="empID" placeholder="Enter Employee Id" className="empNID" required onChange={this.changeContent}/></br>
            </br>
            <label>
                department  <br/>
                <select onChange={this.changeContent}name='dep' required>
                    <option value=''>--select--</option>
                    <option value='Developer'></option>
                    <option value='Executive'></option>
                </select>
            </label></br>
            <h3>Gender</h3>
            <input type="radio" value='Male' name="gender" className='gender' onChange={this.changeGender} required/> Male       
            <input type="radio" value='Female' name="gender" className='gende' onChange={this.changeGender} required/> Female</br>
            <br/>
            <label>
                maritalStatus </br>
                <select onChange={this.changeContent} name='maritalstatus' required>
                    <option value="">--select--</option>
                    <option value="single">single</option>
                    <option value="married">married></option>
                    </select>
            </label></br>
            </br>
            <label> salary</label>
            < input type=" number" name="salary" placeholder=" enter your salary"style={{width:100}}onChange={this.changeContent} required/><br/>
            <br/>
            <labe>enter your address</label><br/>
            <textarea className="adddress" name="address" rows="3" placeholder="enter your addrerss" onChange={this.changeContent} required/><br/>
            <button type="submit" onClick={this.showTable}>submit</button>
            <button onClick={this.showTable}>view</button>
            <button onClick={this.handleCancel}>cancle</button>

            </div>
            </form>
        );
        


        
    }

    

}

export default Employeedet;