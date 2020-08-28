import React, {Component} from 'react';

class NewsItems extends Component {
    render() {
        return (
            <div>
                newItem:{this.props.match.params.type}
            </div>

        );
    }
}

export default NewsItems;