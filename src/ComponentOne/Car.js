import './Car.scss';
// import Radium from 'radium'
import propTypes from 'prop-types';
import React from 'react';
import withClass from '../hoc/withClass';

class Car extends React.Component {
    constructor(props) {
        super(props)
            this.inputRef = React.createRef()
}

    componentDidMount() {
        if(this.props.index === 2) {
          this.inputRef.current.focus()
        }
      }

    render() {

        // if (Math.random() > .7) {
        //     throw new Error('Car random failed')
        // }

        const classInput = ['input']

        if (this.props.name !== '') {
            classInput.push('input-sucsess')
        } else {
            classInput.push('input-danger')
        }

        if (this.props.name.length > 5) {
            classInput.push('input-bold-red')
        }

        // const style = {
        //     ":hover": {
        //         boxShadow: "2px 2px 10px rgba(168, 20, 0)",
        //         background: "blue",
        //         borderRadius: '2px solid yellow'
        //     }
        // }

        return (
            // <div className="templateCar" style={style}>
            <>
                <div>Car: {this.props.name}</div>
                <strong>Year: {this.props.year}</strong>
                <button onClick={this.props.onChangeCarTitle}>Click this btn</button>
                <input ref={this.inputRef} className={classInput.join(' ')} type="text" onChange={this.props.changeNameCar} value={this.props.name} />
                <button onClick={this.props.deleteCarItem}>Delete car</button>
                {this.props.children}
            </>
            // </div>
        )
    }
}

Car.propTypes = {
 name: propTypes.string.isRequired,
 year: propTypes.number,
 index: propTypes.number,
 onChangeCarTitle: propTypes.func,
 deleteCarItem: propTypes.func
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

// export default Radium(Car)
export default withClass(Car, 'templateCar')