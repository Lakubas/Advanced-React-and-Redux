import React from 'react';
//Redux
import { connect } from 'react-redux';
import * as actions from 'actions';

//Material-ui
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';

//CSS Files
import 'components/Comment/css/CommentBox.css';

class CommentBox extends React.Component {
    state = { comment: '' };

    handleChangeComment = (event) => {
        this.setState({ comment: event.target.value });
        // console.log("COMMENT change to: " + this.state.comment);
    }

    handleSubmitComment = (event) => {
        event.preventDefault();
        this.props.saveComment(this.state.comment);
        this.setState({ comment: '' });
        // console.log("Submit COMMENT");
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmitComment}>
                    <TextareaAutosize className="textArea" aria-label="minimum height" rowsMin={3} placeholder="Enter a comment..." value={this.state.comment} onChange={this.handleChangeComment} />
                    <Button
                        variant="contained"
                        color="primary"
                        endIcon={<SendIcon />}
                        type="submite">
                        Send Comment
                    </Button>
                </form>
            </div>
        )
    }
}

export default connect(null, actions)(CommentBox);