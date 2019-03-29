//imports dependencies and files
import React, { Component } from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Card from "./components/Card";
import car from "./cars.json";
import "./App.css";

//sets state to 0 or empty
class App extends Component {
  state = {
    car,
    clickedCar: [],
    score: 0
  };

//when you click on an image... the car is taken out of the array
  imageClick = event => {
    var currentCar = event.target.alt;
    var CarAlreadyClicked =
      this.state.clickedCar.indexOf(currentCar) > -1;

//if you click on a car that has already been selected, the game resets and images reordered
    if (CarAlreadyClicked) {
      this.setState({
        car: this.state.car.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedCar: [],
        score: 0
      });
        alert("You lose. Play again?");

//if you click on an available car, your score is increased and images reordered
    } else {
      this.setState(
        {
          car: this.state.car.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedCar: this.state.clickedCar.concat(
            currentCar
          ),
          score: this.state.score + 1
        },
//if you select all 12 images correctly, congrats, you won and the game resets        
        () => {
          if (this.state.score === 12) {
            alert("Congratulations, You Win!");
            this.setState({
              car: this.state.car.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedCar: [],
              score: 0
            });
          }
        }
      );
    }
  };

//the order of components being rendered: nav, header, card
  render() {
    return (
      <div>
        <Nav
          score={this.state.score}
        />
        <Header />
        <div className="wrapper">
          {this.state.car.map(car => (
            <Card
              imageClick={this.imageClick}
              id={car.id}
              key={car.id}
              image={car.image}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default App;