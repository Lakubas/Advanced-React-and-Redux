import React from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

import VpnKeyIcon from '@material-ui/icons/VpnKey';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import { changeAuth } from 'actions';
import Button from '@material-ui/core/Button';

interface myProps {
    auth: boolean,
    changeAuth: typeof changeAuth;
};

class Login extends React.Component<myProps> {
    renderButton() {
        if (this.props.auth) {
            return (
                <button className="MuiButtonBase-root MuiTab-root MuiTab-textColorIngerit MuiTab-textColorInherit.Mui-selected MuiTabs-scroller MuiAppBar-colorPrime MuiPaper-root" style={{ display: "flex" }}>
                    < MeetingRoomIcon /> <div style={{ marginLeft: "10px" }}>Sign In</div>
                </button>
            );
            /* <Button color="secondary" startIcon={<MeetingRoomIcon />} style={{ width: "100%" }} onClick={() => this.props.changeAuth(false)}>
            Sign Out
            </Button> */
        } else {
            return (
                <button className="MuiButtonBase-root MuiTab-root MuiTab-textColorIngerit MuiTab-textColorInherit.Mui-selected MuiTabs-scroller MuiAppBar-colorPrime MuiPaper-root" style={{ display: "flex" }}>
                    < VpnKeyIcon /> <div style={{ marginLeft: "10px" }}>Sign In</div>
                </button>
            );
        }
    };

    render() {
        return (
            this.renderButton()
        );
    }
}

function mapStateToProps(state: { auth: boolean }) {
    return { auth: state.auth }
}

export default connect(mapStateToProps, actions)(Login);