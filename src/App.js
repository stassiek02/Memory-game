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
  componentWillMount(){
    this.start();
  }
  start(){
   

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
    //check if array has already 2 items
    if(this.state.openedFrameworks.length === 2){
      setTimeout(()=>{
        this.check(this.state.openedFrameworks,this.state.finitializedFrameworks);
      },750)
    }else{

    let finitializedFrameworks = this.state.finitializedFrameworks;
    let openedFrameworks = this.state.openedFrameworks;

    //if item is already open/matched openin wont work
    if(finitializedFrameworks[index].close){
      finitializedFrameworks[index].close=false;
      openedFrameworks.push(finitializedFrameworks[index]);
      
      this.setState({
        openedFrameworks:openedFrameworks,
        finitializedFrameworks:finitializedFrameworks,
       
     })

     if(this.state.openedFrameworks.length === 2){
      setTimeout(()=>{
        this.check(openedFrameworks,finitializedFrameworks);
      },750)
      
    }

    }
    

    
  
  }
  } 
 
  check(opened,finitialized){
      //check if opened array have excatly 2 items
      if(opened.length === 2){
        //check if items have the same name but diffrent index
        if((opened[0].name == opened[1].name) && (opened[0].index !== opened[1].index )){
            
            finitialized[opened[0].index].complete = true;
            finitialized[opened[1].index].complete = true;
          this.setState({
            openedFrameworks:[],
            finitializedFrameworks:finitialized,
            
          })
          
        }else{
          finitialized[opened[0].index].close = true;
          finitialized[opened[1].index].close = true;

          this.setState({
            openedFrameworks:[],
            finitializedFrameworks:finitialized,
            
          })
        }

      }

  }
  
  
      
  //randomize array  
    shuffle(array){
      var currentIndex = array.length, temporaryValue, randomValue;
      

      while (currentIndex){
        randomValue=Math.floor(Math.random() * currentIndex--);

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomValue];
        array[randomValue]=temporaryValue;
      }
      return array;
    }

    


    render(){

      const  finitializedFrameworks = this.state.finitializedFrameworks;
      return(
        <div className='wrapper'>
          
         { finitializedFrameworks.map((framework,index)=>{
           return(
              <Card framework={framework.name}
               onClick={()=>this.handleClick(framework.name,index)}
                complete={framework.complete} 
                close={framework.close}/>
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
