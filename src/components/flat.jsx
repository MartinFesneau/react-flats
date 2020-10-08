
import React, { Component } from 'react';
import '../../assets/stylesheets/cards.scss';

class Flat extends Component {

  handleClick = () => {
    this.props.selectFlat(this.props.index)
  }

  render() {
    // destructuring
    const { flat } = this.props;
    const {
      name, price, imageUrl
    } = flat;
    // const name = this.props.flat.name
    // const background = {
    //   backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('${imageUrl}')`, width: "500px"
    // };
    // const price = this.props.flat.price


    return (
      <div className={`card${this.props.selected ? " active" : ""}`} style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('${imageUrl}')`, width: "500px" }}>
        <div className="card-category">{price}€ </div>
        <div className="card-description">
          <h2>{name}</h2>
        </div>
        <a className="card-link" href="#" onClick={this.handleClick}></a>
      </div>
    );
  }
}

export default Flat;
