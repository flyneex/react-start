import './Car.scss';
import Radium from 'radium'
import React from 'react';

class Car extends React.Component {
    render() {
        const classInput = ['input']

        if (this.props.name !== '') {
            classInput.push('input-sucsess')
        } else {
            classInput.push('input-danger')
        }

        if (this.props.name.length > 5) {
            classInput.push('input-bold-red')
        }

        const style = {
            ":hover": {
                boxShadow: "2px 2px 10px rgba(168, 20, 0)",
                background: "blue",
                borderRadius: '2px solid yellow'
            }
        }

        return (
            <div className="templateCar" style={style}>
                <div>Car: {this.props.name}</div>
                <strong>Year: {this.props.year}</strong>
                <button onClick={this.props.onChangeCarTitle}>Click this btn</button>
                <input className={classInput.join(' ')} type="text" onChange={this.props.changeNameCar} value={this.props.name} />
                <button onClick={this.props.deleteCarItem}>Delete car</button>
                {this.props.children}
            </div>
        )
    }
}

// import classes from './Car.module.scss';

// console.log(classes);

// function Car() {
//     return (
//         <div>Ford Mustang</div>
//     )
// }

// const Car = () => {
//     return (
//         <div>Ford Focus</div>
//     )
// }

// const Car = () => <div>Ford GT</div>

// const Car = () => (
//     <div>
//         <div>Ford GT</div>
//         <strong>Miata</strong>
//     </div>
// )

export default Radium(Car)