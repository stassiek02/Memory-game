import React from 'react';
import logo from './logo.svg';
import  './App.module.scss';

const frameworks = ['angular2','vue','react','grunt','npm','babel','ionic','gulp','yarn','nodejs',];

class App extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      frameworks:frameworks,
      finitializedFrameworks:[],
      openedFrameworks:[],
    }
    
  }
  componentDidMount(){
    this.start();
  }
  start(){
    //function which duplicate and finitialize array of frameworks
    /// wypierdala błedy jak sie szybko klika hujowo

    let finitializedFrameworks=[],randomizedFrameworks = [];
    randomizedFrameworks = this.state.frameworks.concat(this.state.frameworks);
    randomizedFrameworks= this.shuffle(randomizedFrameworks);
    randomizedFrameworks.map((name,index) => {
        finitializedFrameworks.push({
              name,
              index,
               close: true,
               complete: false,
               fail: false
             })
           })
           
        
          this.setState({finitializedFrameworks:finitializedFrameworks});
          
  }

  handleClick(name,index){
    if(this.state.openedFrameworks.length === 2){
      setTimeout(()=>{
        this.check();
      },750)
    }else{

    let finitializedFrameworks = this.state.finitializedFrameworks;
    let openedFrameworks = this.state.openedFrameworks;
    finitializedFrameworks[index].close=false;
    openedFrameworks.push(finitializedFrameworks[index]);
    
    this.setState({
      openedFrameworks:openedFrameworks,
      finitializedFrameworks:finitializedFrameworks,
     
   })
   console.log(openedFrameworks);

    if(this.state.openedFrameworks.length === 2){
      setTimeout(()=>{
        this.check();
      },750)
      
    }
  
  }
  } 
  //bug gdy openstate sie zeruje i sie kliknie kolejny raz
   
  
  check(){
      
    let openedFrameworks  = this.state.openedFrameworks;
    let finitializedFrameworks = this.state.finitializedFrameworks;
    console.log(openedFrameworks);
      if((this.state.openedFrameworks[0].name === this.state.openedFrameworks[1].name) && (this.state.openedFrameworks[0].index != this.state.openedFrameworks[1].index)){
       
        //let openedFrameworks = [] = this.state.openedFrameworks;

        setTimeout(()=>{
        finitializedFrameworks[this.state.openedFrameworks[0].index].complete=true;
        finitializedFrameworks[this.state.openedFrameworks[1].index].complete=true;
        console.log(openedFrameworks);
        this.setState({
          openedFrameworks:[],
          finitializedFrameworks:finitializedFrameworks,
        })
        console.log(openedFrameworks);
      },750)
        
      
      console.log(openedFrameworks);
    }else{
     // setTimeout(()=>{
        finitializedFrameworks[this.state.openedFrameworks[0].index].close=true;
        finitializedFrameworks[this.state.openedFrameworks[1].index].close=true;
        
        this.setState({
          finitializedFrameworks:finitializedFrameworks,
          openedFrameworks:[],
          
        })
    //  },750)
    }
    
  }
  
  
      
  //randomize array  
    shuffle(array){
      var currentIndex = array.length, temporaryValue, randomValue;
      

      while (currentIndex){// zoba czy działa fine
        randomValue=Math.floor(Math.random() * currentIndex--);

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomValue];
        array[randomValue]=temporaryValue;
      }
      return array;
    }

    


    render(){
     // console.log(this.state.finitializedFrameworks.[name])
      const  finitializedFrameworks = this.state.finitializedFrameworks;
      return(
        <div className='wrapper'>
         { finitializedFrameworks.map((framework,index)=>{
           return(
              <Card framework={framework.name} onClick={()=>this.handleClick(framework.name,index)} complete={framework.complete} close={framework.close}/>
           )
         })
           
         }
        </div>
      )
    }

}

class Card extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      
    }
    
  }
  clicked(framework){
    this.props.onClick(framework)
  }

  render(){
    return(
    <div className={"card" + (!this.props.close ? ' opened' : ' ')  + (this.props.complete ? ' matched' : '')} onClick={()=>this.clicked(this.props.framework)} >
      <div className="front">
        <h1>?</h1>
      </div>
      <div className='back'><img src={require("./assets/logos/"+this.props.framework+".svg")} /></div>
    </div>

    )
  }

}

export default App;
