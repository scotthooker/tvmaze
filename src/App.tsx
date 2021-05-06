import React, { ReactElement } from 'react';
import { HashRouter as Router, Switch, Route, Link as RouterLink } from 'react-router-dom';
import { AppBar, Button, makeStyles } from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import { buttons, routes } from './client/pages';

const theme = createMuiTheme({
    typography: {
        fontFamily: ['Arial'].join(','),
    },
});

const useStyles = makeStyles((theme) => ({
    menuButton: {
        color: theme.palette.primary.contrastText,
    },
    pageWrapper: {
        marginTop: 10,
        padding: 20,
    },
}));

const App = (): ReactElement => {
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <Router>
                <div>
                    <AppBar position="fixed">
                        <div>
                            {buttons.map((page, i) => {
                                return (
                                    <Button
                                        key={i}
                                        component={RouterLink}
                                        to={page.path}
                                        className={classes.menuButton}
                                    >
                                        {page.label}
                                    </Button>
                                );
                            })}
                            {/* // TODO: Remove the test button */}
                            {/* <Button component={RouterLink} to="/show/1">
                                Show 1
                            </Button> */}
                        </div>
                    </AppBar>

                    <div className={classes.pageWrapper}>
                        <Switch>
                            {routes.map((page, i) => {
                                return <Route key={i} path={page.path} component={page.component} />;
                            })}
                        </Switch>
                    </div>
                </div>
            </Router>
        </ThemeProvider>
    );
};

export default App;

{
}
