import React from 'react';

import { makeStyles, Grid, Typography } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import { ShowRating } from '../ShowRating';

export interface ShowHeaderProps {
    /**
     * Is the component loading
     */
    loading?: boolean;
    /**
     * The id that is linked to the show.
     */
    id: number;
    /**
     * The url to the picture to use for the show
     */
    pictureUrl: string;
    /**
     * The name of the show
     */
    name: string;
    /**
     * The show synopsis
     */
    synopsis: string;
    /**
     * The rating for the show (0 - 5)
     */
    rating: number;
}

const useStyles = makeStyles(() => ({
    showHeader: {
        minHeight: 400,
    },
    name: {
        marginTop: 10,
    },
    synposis: {
        fontSize: '20px',
    },
    media: {
        width: '100%',
        objectFit: 'cover',
    },
}));

export const ShowHeader: React.FC<ShowHeaderProps> = (props: ShowHeaderProps) => {
    const { loading = false, name, synopsis, rating, pictureUrl } = props;
    const classes = useStyles();

    const pictureContent = loading ? (
        <Skeleton variant="rect" width={'100%'} height={'100%'} />
    ) : (
        <div>
            <img src={pictureUrl} className={classes.media} />
        </div>
    );

    const nameContent = (
        <Typography variant="h3" component="h1" gutterBottom className={classes.name}>
            {loading ? <Skeleton /> : name}
        </Typography>
    );

    // const synopsisContent = <Typography className={classes.synposis}> {loading ? <Skeleton /> : synopsis}</Typography>;

    const markup = { __html: synopsis };
    const synopsisContent = loading ? (
        <Typography className={classes.synposis}>
            <Skeleton />
        </Typography>
    ) : (
        <div className={classes.synposis} dangerouslySetInnerHTML={markup}></div>
    );
    return (
        <Grid container spacing={3} className={classes.showHeader}>
            <Grid item xs={12} md={4}>
                {pictureContent}
            </Grid>
            <Grid item xs={12} md={6}>
                <ShowRating loading={loading} rating={rating} showValue />
                {nameContent}
                {synopsisContent}
            </Grid>
            <Grid item md={2}></Grid>
        </Grid>
    );
};

export default ShowHeader;
