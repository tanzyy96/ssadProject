import React from 'react';
import DataCard from '../analytics/DataCard'
import LineChartCard from '../analytics/LineChartCard'
import RadarChartCard from '../analytics/RadarChartCard'
import ProgressCard from '../analytics/ProgressCard'
import BoxPlotChart from '../analytics/BoxPlotCard'
import TitleCard from '../analytics/TitleCard'
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline, Container, Grid } from '@material-ui/core'

const UserAnalytics = props => {

    const classes = useStyles()

    return (
        <Container className={classes.root}>
            <Grid container spacing={3}>
                <Grid item container xs={12} spacing={2}>
                    <Grid item className={classes.card} xs={12}>
                        <TitleCard />
                    </Grid>
                    <Grid item className={classes.card} xs={3}>
                        <DataCard title={"hours"} />
                    </Grid>
                    <Grid item className={classes.card} xs={3}>
                        <DataCard title={"score"} />
                    </Grid>
                    <Grid item className={classes.card} xs={3}>
                        <DataCard title={"improvement"} />
                    </Grid>
                    <Grid item className={classes.card} xs={3}>
                        <DataCard title={"perfect"} />
                    </Grid>
                </Grid>
                <Grid item xs={8}>
                    <LineChartCard />
                </Grid>
                <Grid item xs={4} className={classes.radar}>
                    <RadarChartCard />
                </Grid>
                <Grid item xs={6}>
                    <ProgressCard />
                </Grid>
                <Grid item xs={6}>
                    <BoxPlotChart />
                </Grid>
            </Grid>
        </Container>
    )
};

const useStyles = makeStyles((theme) => ({

    root: {
        marginTop: theme.spacing(8),

    },
    radar: {}
}));

export default UserAnalytics;