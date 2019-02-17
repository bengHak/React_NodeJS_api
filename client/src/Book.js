import React,{ Component } from 'react';

class Book extends Component {
    render(){
        return(
            <div>
                <p>{this.props.id}</p>
                <img src={this.props.image} alt="img"/>
                <h2>{this.props.title}</h2>
                <p>{this.props.author}</p>
                <p>{this.props.published_date}</p>
            </div>
        );
    }
}

export default Book;