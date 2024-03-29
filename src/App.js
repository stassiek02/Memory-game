import React from "react";
import "./App.module.scss";
import { styles } from "ansi-colors";

const frameworks = [
  "angular2",
  "vue",
  "react",
  "grunt",
  "npm",
  "babel",
  "ionic",
  "gulp",
  "yarn",
  "nodejs"
];

class App extends React.Component {
  state = {
    frameworks: frameworks,
    finitializedFrameworks: [],
    openedFrameworks: [],
    matchedFrameworks: 0,
    lvlSelected: null
  };

  componentWillMount() {
    this.start();
  }
  start(lvl) {
    this.setState({
      lvlSelected: lvl
    });
    let finitializedFrameworks = [];
    let selectedFrameworks = frameworks.slice(0, lvl);
    let randomizedFrameworks = [];
    randomizedFrameworks = selectedFrameworks.concat(selectedFrameworks);
    randomizedFrameworks = this.shuffle(randomizedFrameworks);
    randomizedFrameworks.map((name, index) => {
      finitializedFrameworks.push({
        name,
        index,
        close: true,
        complete: false,
        fail: false
      });
    });

    this.setState({ finitializedFrameworks: finitializedFrameworks });
  }
  wonGame() {
    const { matchedFrameworks, lvlSelected } = this.state;
    console.log(matchedFrameworks);
    if (matchedFrameworks === lvlSelected) {
      alert("Congratulations! You just won the game");
    }
  }

  handleClick(name, index) {
    //check if array has already 2 items
    if (this.state.openedFrameworks.length === 2) {
      setTimeout(() => {
        this.check(
          this.state.openedFrameworks,
          this.state.finitializedFrameworks
        );
      }, 750);
    } else {
      let finitializedFrameworks = this.state.finitializedFrameworks;
      let openedFrameworks = this.state.openedFrameworks;

      //if item is already open/matched openin wont work
      if (finitializedFrameworks[index].close) {
        finitializedFrameworks[index].close = false;
        openedFrameworks.push(finitializedFrameworks[index]);

        this.setState({
          openedFrameworks: openedFrameworks,
          finitializedFrameworks: finitializedFrameworks
        });

        if (this.state.openedFrameworks.length === 2) {
          setTimeout(() => {
            this.check(openedFrameworks, finitializedFrameworks);
          }, 750);
        }
      }
    }
  }

  check(opened, finitialized) {
    //check if opened array have excatly 2 items
    if (opened.length === 2) {
      //check if items have the same name but diffrent index
      if (
        opened[0].name === opened[1].name &&
        opened[0].index !== opened[1].index
      ) {
        finitialized[opened[0].index].complete = true;
        finitialized[opened[1].index].complete = true;
        this.setState({
          openedFrameworks: [],
          finitializedFrameworks: finitialized,
          matchedFrameworks: this.state.matchedFrameworks + 1
        });
        this.wonGame();
      } else {
        finitialized[opened[0].index].close = true;
        finitialized[opened[1].index].close = true;

        this.setState({
          openedFrameworks: [],
          finitializedFrameworks: finitialized
        });
      }
    }
  }

  //randomize array
  shuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomValue;

    while (currentIndex) {
      randomValue = Math.floor(Math.random() * currentIndex--);

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomValue];
      array[randomValue] = temporaryValue;
    }
    return array;
  }

  render() {
    const finitializedFrameworks = this.state.finitializedFrameworks;
    const { lvlSelected } = this.state;
    return (
      <>
        <div className="container">
        <h1 className="heading">Play with me</h1>
        <p className="heading">{lvlSelected ? "I wish you luck" :"Choose your level"}</p>
       
          {lvlSelected ? <div className="wrapper">{(
            finitializedFrameworks.map((framework, index) => {

              return (
                
                <Card
                  framework={framework.name}
                  onClick={() => this.handleClick(framework.name, index)}
                  complete={framework.complete}
                  close={framework.close}
                />
                 
              );
            })
          )}</div> : (
            <div className="buttons__wrapper">
              
              <button onClick={() => this.start(4)}>Easy</button>
              <button onClick={() => this.start(8)}>Medium</button>
              <button onClick={() => this.start(10)}>Hard</button>
            </div>
          )}
       </div>
      </>
    );
  }
}

class Card extends React.Component {
  state = {};
  clicked(framework) {
    this.props.onClick(framework);
  }

  render() {
    return (
      <div
        className={
          "card" +
          (!this.props.close ? " opened" : " ") +
          (this.props.complete ? " matched" : "")
        }
        onClick={() => this.clicked(this.props.framework)}
      >
        <div className="front">
          <h2>?</h2>
        </div>
        <div className="back">
          <img
            src={require("./assets/logos/" + this.props.framework + ".svg")}
          />
        </div>
      </div>
    );
  }
}

export default App;
