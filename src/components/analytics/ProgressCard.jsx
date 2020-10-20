import React from 'react';
import { Card, CardContent, Typography, makeStyles } from '@material-ui/core'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: 420,
        transition: "0.3s",
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
        "&:hover": {
            boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
            backgroundColor: theme.palette.primary.main
        },
        padding: 5,
        paddingLeft: 15,
        display: 'flex',
    },
    title: {
        fontSize: 26,
        fontWeight: 800,
        textTransform: "uppercase",
        fontFamily: 'EBit',
        paddingBottom: 10
    },
    barContainer: {
        width: 125,
        height: 125,
        paddingLeft: 15,
        paddingTop: 10,
        marginRight: 15
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: '80%'
    },
    textContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: 20
    }
}))

const ProgressCard = props => {

    const classes = useStyles()

    const percentage = 66

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="overline">
                    Class
                </Typography>
                <div className={classes.title}>Completion Rate</div>
                <div className={classes.container}>
                    <div className={classes.barContainer}>
                        <CircularProgressbar
                            value={percentage}
                            text={`${percentage}%`}
                            // styles={buildStyles({ pathColor: "red" })} 
                            strokeWidth={5}
                        />
                    </div>
                    <div className={classes.textContainer}>
                        <Typography variant="subtitle1"><b>Incomplete Levels: </b>7</Typography>
                        <Typography variant="subtitle1"><b>No. of Students fully completed: </b>2</Typography>
                    </div>
                </div>
            </CardContent>
        </Card>
    )

};

export default ProgressCard;