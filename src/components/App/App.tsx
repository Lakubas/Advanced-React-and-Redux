import React from 'react';

//Components
import CommentBox from 'components/Comment/CommentBox';
import CommentList from 'components/Comment/CommentList';

export default function App() {
	return ( 
    <div>
        <h1>I'm the Comment App!</h1>
        <CommentBox />
        <CommentList />
    </div>
    )
};
