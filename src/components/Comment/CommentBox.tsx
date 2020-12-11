import React, { FormEvent, ChangeEvent } from 'react';
//Redux
import { connect } from 'react-redux';
import * as actions from 'actions';

//Material-ui
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import FontDownloadIcon from '@material-ui/icons/FontDownload';

//CSS Files
import 'components/Comment/css/CommentBox.css';
import axios from 'axios';
import { saveComment, fetchComments } from 'actions/index';

interface myProps {
    saveComment: typeof saveComment,
    fetchComments: typeof fetchComments,
};

interface myState {
    comment: string,
};

class CommentBox extends React.Component<myProps, myState> {
    state = { comment: '' };
    // props = { saveComment: {interfaceAction},
    //             fetchComments: {}};

    handleChangeComment = (event: ChangeEvent<HTMLTextAreaElement>) => {
        this.setState({ comment: event.target.value });
        // console.log("COMMENT change to: " + this.state.comment);
    }

    handleSubmitComment = (event: FormEvent) => {
        event.preventDefault();
        if (this.state.comment !== '') {
            this.props.saveComment(this.state.comment);
            this.setState({ comment: '' });
            // console.log("Submit COMMENT");
        }
    };

    fetchComments = async () => {
        //AXIOS METODA
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/comments');
        data.map((comment: { body: string; }) => {
            return (this.props.saveComment(comment.body));
        });

        //FETCH METODA
        // await fetch('https://jsonplaceholder.typicode.com/comments')
        //     .then(response => response.json())
        //     .then(json => {
        //         json.forEach(comment => {
        //             this.props.saveComment(comment.body);
        //         });
        //     });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmitComment}>
                    <TextareaAutosize className="textArea" aria-label="minimum height" rowsMin={3} placeholder="Enter a comment..." value={this.state.comment} onChange={this.handleChangeComment} />
                    <Button
                        variant="contained"
                        color="primary"
                        endIcon={<SendIcon />}
                        type="submit"
                        className="submiteButton">
                        Send Comment
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        endIcon={<FontDownloadIcon />}
                        //Wolniejsze wyświetlenie danych za pomoca axios i fetch
                        //onClick={this.fetchComments}>
                        //MEGA SZYBKIE WYSWIETLENIE DANYCH!!!
                        onClick={this.props.fetchComments}
                        className="fetchButton">
                        Fetch Comment
                    </Button>
                </form>
            </div>
        )
    }
}



export default connect(null, actions)(CommentBox);