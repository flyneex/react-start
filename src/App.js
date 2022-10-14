// import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import Car from './ComponentOne/Car';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import Counter from './Counter/Counter';

class App extends Component {
  constructor (props) {
    console.log(1);
    super (props)
      this.state = {
        cars: [
          {name: 'Ford Super', year: '2030'},
          {name: 'Mazda Next', year: '2035'},
          {name: 'Toyota Supra', year: '2038'},
        ],
        pageTitle: 'React Cars',
        showCars: true
    }
  }

  changeHandler = pageTitle => {
    this.setState({pageTitle})
  }

  showHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    })
  }

  inputHandle = e => {
    this.setState({
      pageTitle: e.target.value
    })
  }

  componentWillMount() {
    console.log(2)
  }

  componentDidMount() {
    console.log(3)
  }

  changeNameCar(name, index) {
    const car = this.state.cars[index]
    car.name = name
    const cars = [...this.state.cars]
    cars[index] = car
    this.setState({cars})
  }

  deleteCarItem = index => {
    const cars = this.state.cars.concat()
    cars.splice(index, 1)
    this.setState({cars})
  }

  render() {
    
    console.log(4)
    // const cars = this.state.cars
    const title = this.state.pageTitle

    let cars = null

    if (this.state.showCars) {
      cars = this.state.cars.map((car, index) => {
        return (
          <ErrorBoundary key={index}>
            <Car 
              name={car.name} year={car.year}
              onChangeCarTitle={() => this.changeHandler(`Name: ${car.name} / Year: ${car.year}`)}
              changeNameCar={e => this.changeNameCar(e.target.value, index)}
              deleteCarItem={this.deleteCarItem.bind(this, index)}
            />
          </ErrorBoundary>
        )
      })
    }
    
    return (
      <div>
        <Counter />
        <h1>{title}</h1>
        <h2>{this.props.title}</h2>
        <input type="text" onChange={this.inputHandle} />
        <button onClick={this.changeHandler.bind(this, 'I got changed!')}>Click me</button>
        <button onClick={this.showHandler}>Click for Show</button>
        
        {cars}

        {/* <Car name={cars[0].name} year={cars[0].year} onChangeCarTitle={this.changeHandler.bind(this, cars[0].name)} />
        <Car name={cars[1].name} year={cars[1].year} onChangeCarTitle={this.changeHandler.bind(this, cars[1].name)} />
        <Car name={cars[2].name} year={cars[2].year} onChangeCarTitle={() => this.changeHandler(cars[2].name)} /> */}
      </div>
    )
  }
}
// function App1() {
//   // return React.createElement(
//   //   'div',
//   //   {className: 'App'},
//   //   React.createElement(
//   //     'h1',
//   //     null,
//   //     'Hello JSX'
//   //   )
//   // )
//   const divStyles = {
//     'color': 'red'
//   }
 
//   return (
//     <div className="App">
    
//       <header className="App-header">
        
//         <Car name='Ford Focus' year='2020'>
//           <p>{Math.round(Math.random() * 100)}</p>
//         </Car>
//         <Car name={'Mazda Miata'} year={2021}/>
//       <h1 style={{color: 'green', fontSize: '3rem'}}>Hello world!</h1>
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <span style={divStyles}>I learn React!!!</span>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         <div>123</div>
//       </header>
      
//     </div>
//   );
// }

export default App;
