import React from 'react';
import { connect } from 'react-redux';

import 'components/Comment/css/CommentList.css';

class CommentList extends React.Component<any> {

    renderComments = () => {
        return this.props.comments.map((comment: string, index: number) => {
            return <li key={index}>{ comment }</li>; 
        })
    };

    render() {
        return (
            <div>
                <h3>Comment list:</h3>
                <ul>
                    {this.props.comments.length === 0 ? <p>No comments in the list</p> : this.renderComments()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state: { comments: string; }) {
    return {comments: state.comments};
}

export default connect(mapStateToProps)(CommentList)