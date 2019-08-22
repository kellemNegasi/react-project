import React,{Component} from 'react';
import Classes from './App.module.css';
import Person from './Person/Person';
class App extends Component{
  state={
    Persons :[
      {id: "idp1",name:"Manu",age:24},
      {id: "idp2", name:"Dave",age:23},
      {id: "idp3",name:"Asfaw", age:80}
    ],
    showPersons:true
  };
  deleteHandler =(index)=>{
    const persons=[...this.state.Persons];
    persons.splice(index,1);
    this.setState({Persons:persons})
  }
  
  togglePersonHandler =()=>{
   this.setState({showPersons: !this.state.showPersons}) 
  }
  textChangeHandler=(event,id)=>{
    const index= this.state.Persons.findIndex(p=>{
      return p.id ===id;
    })
    const person = {...this.state.Persons[index]};
    person.name = event.target.value;
    const persons = [...this.state.Persons];
    persons[index] = person;
    this.setState({Persons:persons});
  }

  render(){
    let person =null;
    let btnClass ="";
    if(this.state.Persons.length<=2){
      // classes.push("red");
    }
    if(this.state.Persons.length<=1){
      //classes.push("bold");
    }

    if(this.state.showPersons){
      person =(
        <div>
          {
            this.state.Persons.map((person,index)=>{
              return (
                <Person 
                name={person.name} 
                age = {person.age}
                key = {person.id}
                handler ={()=>this.deleteHandler(index)}
                nameChange= {(event)=>this.textChangeHandler(event,person.id)}/>
              );
            })
          }
        </div>
      );
      btnClass =Classes.Red;
    }
    return(
        <div className ={Classes.App}>
          <button
          className ={btnClass}
          onClick={this.togglePersonHandler}>Toggle Persons</button>
          <p>This is really working</p>
          <div>
          {person}
          </div>
        </div>
    );
  }
}

export default App;
