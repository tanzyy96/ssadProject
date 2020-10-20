import React from 'react';
import Entry from '../leaderboard/Entry'
import { makeStyles, Card, CardContent, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        paddingTop: 20
    },
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white', width: 1100, height: 100, margin: 10
    }
}))

const Leaderboard = props => {

    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Card className={classes.container}>
                <CardContent>
                    <Typography>World</Typography>
                </CardContent>
            </Card>
            <Entry position={"01"} name={"Jason Lim"} />
            <Entry position={"02"} name={"Nicholas Cage"} />
            <Entry position={"03"} name={"James Bond"} />
            <Entry position={"04"} name={"Jackie Chan"} />
            <Entry position={"05"} name={"Fox News"} />
            <Entry position={"06"} name={"Hermione Granger"} />
            <Entry position={"07"} name={"Barack Obama"} />
            <Entry position={"08"} name={"Sean Evans"} />
            <Entry position={"09"} name={"Lee Jia Zheng"} />
            <Entry position={"10"} name={"Jeanette Ong"} />
        </div>
    )
};

export default Leaderboard;