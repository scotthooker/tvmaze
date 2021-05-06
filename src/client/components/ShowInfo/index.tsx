import React from 'react';

import { makeStyles, Grid, Typography } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

export interface ShowInfoProps {
    /**
     * Is the component loading
     */
    loading?: boolean;
    /**
     * The information about where the show is streamed
     */
    streamedOn: string;
    /**
     * The show schedue
     */
    schedule: string;
    /**
     * The show status
     */
    status: string;
    /**
     * The genres for the show
     */
    genres: string[];
    /**
     * The title to show
     */
    title?: string;
}

const useStyles = makeStyles((theme) => ({
    showInfo: {
        maxWidth: 500,
    },
    title: {
        fontSize: '30px',
    },
    row: {
        paddingBottom: 10,
        marginTop: 10,
        marginBottom: 10,
        [theme.breakpoints.up('md')]: {
            borderBottom: '1px solid black',
        },
    },
    label: {},
    value: { color: '#8C8C8C' },
}));

export const ShowInfo: React.FC<ShowInfoProps> = (props: ShowInfoProps) => {
    const { loading = false, streamedOn, schedule, status, genres = [], title = 'Show info' } = props;
    const classes = useStyles();

    const info = [
        ['Streamed on', streamedOn],
        ['Schedule', schedule],
        ['Status', status],
        ['Genres', genres.join(', ')],
    ];

    return (
        <div>
            <Typography variant="h4" className={classes.title}>
                {title}
            </Typography>
            <Grid container className={classes.showInfo}>
                {info.map((item, i) => {
                    return (
                        <Grid item key={i} xs={6} md={12}>
                            <Grid container className={classes.row}>
                                <Grid key={`${i}.label`} item xs={12} md={4}>
                                    <Typography>{item[0]}</Typography>
                                </Grid>
                                <Grid key={`${i}.value`} item xs={12} md={8}>
                                    <Typography className={classes.value}>
                                        {loading ? <Skeleton /> : item[1]}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    );
                })}
            </Grid>
        </div>
    );
};

export default ShowInfo;
