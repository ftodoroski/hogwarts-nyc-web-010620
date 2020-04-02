import React, {Component}  from 'react'

export default class Hog extends Component{
    state = {
        displayDetails: false
    }

    renderImage = () => {
        let splitWord = this.props.hog.name.toLowerCase().split(" ") 
        let image = splitWord.join('_')
        let url = require(`../hog-imgs/${image}.jpg`)
        return url
    }

    handleClick = () => {
        this.setState({ displayDetails: !this.state.displayDetails })
    }

    displayDetailsHog = () => {
        return(
            <div className='pigTile' onClick={this.handleClick}>
                <h3>{this.props.hog.name}</h3>
                <p>{this.props.hog.specialty}</p>
                <p>{this.props.hog.weight}</p>
                <p>{this.props.hog['highest medal achieved']}</p>
            </div>   
        )
    }

    normalDisplay = () => {
       return ( 
        <div onClick={this.handleClick}>
            <h1>{this.props.hog.name}</h1>
            <img src={this.renderImage()} />
        </div> 
        )
    }

    render() {
        return(
            <div>
                {this.state.displayDetails ? this.displayDetailsHog() : this.normalDisplay()}
            </div>
        )
    }
}

