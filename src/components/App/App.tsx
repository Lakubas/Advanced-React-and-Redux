import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


//Import Components
import CommentBox from 'components/Comment/CommentBox';
import CommentList from 'components/Comment/CommentList';
import Login from 'components/Login/Login';
//Redux
import { connect } from 'react-redux';
import * as actions from 'actions';
import { Button } from '@material-ui/core';

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={2}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: any) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

function App(props: {auth: boolean, changeAuth: (isLoggedIn: boolean)=> {type: string, payload: boolean}}) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="List comments..." {...a11yProps(0)} />
                    {props.auth ? <Tab label="Create comments..." {...a11yProps(0)} /> : ""}
                    {/* <Button> <Login /> </Button> */}
                    <Button color="secondary" onClick={() => props.changeAuth(!props.auth)} >
                        <Login /> 
                    </Button>
                </Tabs>
            </AppBar>
            <h1>I'm the Comment App!</h1>
            <TabPanel value={value} index={1}>
                <CommentBox />
            </TabPanel>
            <TabPanel value={value} index={0}>
                <CommentList />
            </TabPanel>

        </div>
    );
}

function mapStateToProps(state: { auth: boolean }) {
    return { auth: state.auth };
}

export default connect(mapStateToProps, actions)(App);