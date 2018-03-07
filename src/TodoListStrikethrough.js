import React, { Component } from 'react';
// Not sure if this is right
class TodoStrikethrough extends Component {
    constructor(){
        super();
        this.state = {
            clicked: false
        };
    }

    handleClick = () => {
        this.setState({clicked: !this.state.clicked});
        console.log('clicked')
    }

    handleDelete = (index) => {
        this.props.action(this.props.index);
    }

    render() {
        const styles = this.state.clicked ? { textDecoration: 'line-through', color: 'black'} : {textDecoration: 'none' };

        return (
            <div style={styles} onClick={this.handleClick}>{this.props.done}</div>
        )
    }
}
export default TodoStrikethrough;