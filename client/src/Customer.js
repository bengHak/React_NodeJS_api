import React,{ Component } from 'react';

class Customer extends Component {
    render(){
        return(
            <div>
                <p>{this.props.id}</p>
                <img src={this.props.image} alt="img"/>
                <h2>{this.props.name}</h2>
                <p>{this.props.birthday}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.job}</p>
            </div>
        );
    }
}

export default Customer;