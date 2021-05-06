import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Grid, makeStyles, TextField, Typography, Button } from '@material-ui/core';
import ShowCard from '../../components/ShowCard';
import useData from '../../../hooks/useData';

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        padding: 0,
    },
    searchWidget: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    searchButton: {
        marginLeft: '10px',
    },
    gridItem: {
        paddingBottom: 20,
        marginBottom: 20,
    },
}));

interface eventTargetControl {
    value: string;
}
interface eventTarget {
    target: eventTargetControl;
}

const SearchPage: React.FC = () => {
    const classes = useStyles();

    const { loading, search, shows } = useData();
    const [searchTerm, setSesarchTerm] = useState('');
    const [searched, setSearched] = useState(false);
    const message = searchTerm && searched ? 'No matching shows' : 'Enter something to search for';

    const history = useHistory();

    const newShows = [...shows];

    const onPress = (showId: number) => {
        history.push(`/show/${showId.toString()}`);
    };

    const onChange = (event: eventTarget) => {
        const value = event.target.value;
        setSesarchTerm(value);
    };

    const onSearch = () => {
        if (searchTerm) search(searchTerm);
        setSearched(true);
    };

    const searchWidget = (
        <div className={classes.searchWidget}>
            <TextField id="searchTerm" value={searchTerm} size="small" onChange={onChange} variant="outlined" />
            <Button
                onClick={onSearch}
                variant="contained"
                color="primary"
                className={classes.searchButton}
                disabled={!searchTerm}
            >
                Search
            </Button>
        </div>
    );

    const gridResults = newShows.length ? (
        <Grid container spacing={0}>
            {newShows.map((show, i) => (
                <Grid key={i} item xs={6} md={2} className={classes.gridItem}>
                    <ShowCard loading={loading} {...show} onPress={onPress} />
                </Grid>
            ))}
        </Grid>
    ) : (
        <Typography>{message}</Typography>
    );

    return (
        <div>
            <h2>Search Page</h2>
            {searchWidget}
            <div className={classes.root}>{gridResults}</div>
        </div>
    );
};

export default SearchPage;
