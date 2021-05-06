import React, { useEffect } from 'react';
import { ShowHeader, ShowInfo, CastList } from '../../components';

import { makeStyles, Grid, Hidden } from '@material-ui/core';
import { useParams } from 'react-router-dom';

import useData from '../../../hooks/useData';

const useStyles = makeStyles(() => ({
    spacer: {
        minHeight: 20,
    },
}));

type ShowParams = { showId?: string };

const ShowPage: React.FC = () => {
    const { showId } = useParams<ShowParams>();
    const classes = useStyles();

    const { loading, show, getShow } = useData();

    useEffect(() => {
        getShow(showId || '');
    }, [showId]);

    return (
        <div>
            <h2>Show Page</h2>
            <ShowHeader loading={loading} {...show} />

            <Grid container spacing={4}>
                <Hidden smDown>
                    <Grid item xs={false} md={12}>
                        <div className={classes.spacer}></div>
                    </Grid>
                </Hidden>
                <Grid item xs={12} md={6}>
                    <ShowInfo {...show} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <CastList {...show} />
                </Grid>
            </Grid>
        </div>
    );
};

export default ShowPage;
