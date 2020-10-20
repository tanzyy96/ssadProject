import React from 'react';
import { Card, CardContent, Typography, makeStyles } from '@material-ui/core'
import TimeIcon from '../../assets/time.png'
import ScoreIcon from '../../assets/score.png'
import ImproveIcon from '../../assets/improve.png'
import LanguageIcon from '../../assets/language.png'

const types = {
    "hours": {
        title: "avg hours spent",
        text: "77.3",
        icon: TimeIcon
    },
    "score": {
        title: "avg score",
        text: "89.2",
        icon: ScoreIcon
    },
    "improvement": {
        title: "improvement rate",
        text: "34.3%",
        icon: ImproveIcon
    },
    "perfect": {
        title: "perfect scores",
        text: "32",
        icon: LanguageIcon
    },
}

const useStyles = makeStyles((theme) => ({
    root: {
        transition: "0.3s",
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
        "&:hover": {
            boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
            backgroundColor: theme.palette.primary.main
        },
        display: 'flex',
        paddingLeft: 16,
        paddingTop: 5,
        // border: "5px solid",
        // backgroundColor: theme.palette.primary.main
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    textContainer: {
        marginLeft: 14
    }
}))


const DataCard = props => {

    const classes = useStyles()

    const details = types[props.title]

    return (
        <Card className={classes.root}>
            <CardContent>
                <div className={classes.container}>
                    <img src={details.icon} height={40} width={40} color={"blue"} alt="icon" />
                    <div className={classes.textContainer}>
                        <Typography variant="h5" style={{ fontWeight: 800 }}>
                            {details.text}
                        </Typography>
                        <Typography variant="caption" align="center" >
                            {details.title.toUpperCase()}
                        </Typography>
                    </div>
                </div>
                {/* <Typography variant="body1">
                    You are the top <b>11%</b> of users. Good job!
                </Typography> */}
            </CardContent>
        </Card>
    )

};

export default DataCard;