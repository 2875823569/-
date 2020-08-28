import React, {Component} from 'react';

class User extends Component {
    componentDidMount(){
        console.log(this.props)
    }
    render() {
        return (
            <div>
                {this.props.match.params.id}
                用户页面
            </div>
        );
    }
}

export default User;