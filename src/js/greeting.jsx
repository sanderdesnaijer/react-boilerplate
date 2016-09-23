import React from 'react';

class Greeting extends React.Component {
    constructor() {
        super();
        this.state = {
            ammount: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {
        this.test = 'heey';
    }
    handleClick() {
        this.setState({
            ammount: this.state.ammount += 1
        });
    }
    render() {
        return (
            <div className="greeting" >
                ik ben {this.props.name}
                <button onClick={this.handleClick}>klik {this.state.ammount}</button>
            </div>
        );
    }
}

Greeting.propTypes = {
    name: React.PropTypes.node
};

export default Greeting;
