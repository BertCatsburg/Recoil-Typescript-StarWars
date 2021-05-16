import React from 'react';
import { AppBar, Toolbar, Button, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    outer: {
        height: '6em'
    },
    appbar: {
        height: '5em'
    },
    toolbar: {
        height: '5em',
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginLeft: 30
    },
    linkButton: {
        marginRight: 20
    },
    linkLink: {
        textDecoration: 'none'
    }
}));
export const Header: React.FC = () => {
    const classes = useStyles();
    return (
        <div className={classes.outer}>
            <AppBar className={classes.appbar}>
                <Toolbar disableGutters className={classes.toolbar}>
                    <Link to={'/home'} className={classes.linkLink}>
                        <Button className={classes.linkButton} variant={'contained'}>
                            Home
                        </Button>
                    </Link>
                    <Link to={'/about'} className={classes.linkLink}>
                        <Button className={classes.linkButton} variant={'contained'}>
                            About Us
                        </Button>
                    </Link>
                    <Link to={'starwars/person'} className={classes.linkLink}>
                        <Button className={classes.linkButton} variant={'contained'}>
                            Get a Star Wars Person
                        </Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    );
};
