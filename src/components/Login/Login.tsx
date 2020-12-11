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
        <React.Fragment>
          < MeetingRoomIcon />
          <div
            style={{ marginLeft: "10px" }}>
            Sign In
          </div>
        </React.Fragment>
      );
      /* <Button color="secondary" startIcon={<MeetingRoomIcon />} style={{ width: "100%" }} onClick={() => this.props.changeAuth(false)}>
      Sign Out
      </Button> */
    } else {
      return (
        <React.Fragment>
          < VpnKeyIcon />
          <div style={{ marginLeft: "10px" }}>
            Sign In
          </div>
        </React.Fragment>
      );
    }
  };

  render() {
    return (
      // <div className="MuiButtonBase-root MuiTab-root MuiTab-textColorInherit Mui-selected">
      //   {this.renderButton()}
      // </div>
      this.renderButton()
    );
  }
}

function mapStateToProps(state: { auth: boolean }) {
  return { auth: state.auth }
}

export default connect(mapStateToProps, actions)(Login);