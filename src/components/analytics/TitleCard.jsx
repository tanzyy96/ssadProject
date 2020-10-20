import React from 'react';
import { Card, CardContent, Typography, makeStyles } from '@material-ui/core'


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


const TitleCard = props => {

    const classes = useStyles()

    return (
        <Card className={classes.root}>
            <CardContent>
                <div className={classes.container}>
                    <img src={require("./../../assets/link_walk.gif")} height={40} width={35} style={{ paddingRight: 10 }} alt="walking_link" />
                    <div className={classes.textContainer}>
                        <Typography variant="h5" style={{ fontWeight: 800 }}>
                            Class: Science 2
                        </Typography>
                        <Typography variant="caption" align="center" >
                            Size: 3
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

export default TitleCard;