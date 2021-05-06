import React from 'react';

import { makeStyles, Grid, Typography, Avatar } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

export interface CastListItem {
    /**
     * The name of the cast member
     */
    name: string;
    /**
     * The name of the character
     */
    character: string;
    /**
     * The picture of the cast member
     */
    pictureURL?: string;
}

export interface CastListProps {
    /**
     * Is the component loading
     */
    loading?: boolean;
    /**
     * The list of cast members
     */
    members: CastListItem[];
    /**
     * The title for the section
     */
    title?: string;
}

const useStyles = makeStyles(() => ({
    castList: {
        maxWidth: 500,
    },
    title: {
        fontSize: '30px',
    },
    detailsContainer: {},
    name: {},
    character: { color: '#8C8C8C' },
    row: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottom: '1px solid black',
        paddingBottom: 10,
        marginTop: 10,
        marginBottom: 10,
    },
    label: {},
    value: {},
}));

export const CastList: React.FC<CastListProps> = (props: CastListProps) => {
    const { loading = false, members = [], title = 'Starring' } = props;
    const classes = useStyles();

    const dummyCharacter: CastListItem = { name: '', character: '', pictureURL: '' };
    const membersDisplay: Array<CastListItem> = loading ? [dummyCharacter, dummyCharacter, dummyCharacter] : members;
    return (
        <div>
            <Typography variant="h4" className={classes.title}>
                {title}
            </Typography>
            <Grid container className={classes.castList}>
                {membersDisplay.map((member, i) => {
                    return (
                        <Grid container key={i} className={classes.row}>
                            <Grid item xs={2}>
                                <Avatar alt={member.name} src={member.pictureURL} />
                            </Grid>
                            <Grid item xs={10}>
                                <Grid container direction="row" alignItems="center">
                                    <Grid item xs={12} md={6} className={classes.name}>
                                        <Typography>{loading ? <Skeleton /> : member.name}</Typography>
                                    </Grid>
                                    <Grid item xs={12} md={6} className={classes.character}>
                                        <Typography className={classes.character}>
                                            {loading ? <Skeleton /> : member.character}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    );
                })}
            </Grid>
        </div>
    );
};

export default CastList;
