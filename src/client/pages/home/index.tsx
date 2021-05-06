import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Grid, makeStyles } from '@material-ui/core';
import ShowCard from '../../components/ShowCard';
import useData from '../../../hooks/useData';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: 0,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    gridItem: {
        paddingBottom: 20,
        marginBottom: 20,
    },
}));

const HomePage: React.FC = () => {
    const classes = useStyles();
    const history = useHistory();
    const { loading, schedule, shows } = useData();

    useEffect(() => {
        schedule();
    }, []);

    const onPress = (showId: number) => {
        history.push(`/show/${showId.toString()}`);
    };

    const newShows = [...shows];

    const gridResults = newShows.length ? (
        <Grid container spacing={0} data-testid="grid-container">
            {newShows.map((show, i) => (
                <Grid key={i} item xs={6} md={2} className={classes.gridItem}>
                    <ShowCard loading={loading} {...show} onPress={onPress} />
                </Grid>
            ))}
        </Grid>
    ) : null;

    return (
        <div>
            <h2>Home Page</h2>
            <div className={classes.root}>{gridResults}</div>
        </div>
    );
};

export default HomePage;
