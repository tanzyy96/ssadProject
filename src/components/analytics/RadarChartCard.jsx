import React from 'react';
import { Card, CardContent, Typography, makeStyles } from '@material-ui/core'
import '../../../node_modules/react-vis/dist/style.css';
// import { RadarChart, CircularGridLines } from 'react-vis';
import { Chart, Line, Coordinate } from 'bizcharts'

const useStyles = makeStyles((theme) => ({
    root: {
        transition: "0.3s",
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
        "&:hover": {
            boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
            backgroundColor: theme.palette.primary.main
        },
        padding: 5,
        paddingLeft: 15,
        display: 'flex',
        justifyContent: 'center'
    },
    title: {
        fontSize: 26,
        fontWeight: 800,
        textTransform: "uppercase",
        fontFamily: 'EBit',
        marginBottom: 10
    },
    graphContainer: {
        width: '100%'
    }
}))

const data = [
    { item: 'Dynamic Programming', value: 70 },
    { item: 'Regex', value: 60 },
    { item: 'Sorting', value: 50 },
    { item: 'Data Structures', value: 40 },
    { item: 'Graphs', value: 60 },
    { item: 'Searching', value: 70 },
]

const RadarChartCard = ({ }) => {

    const classes = useStyles()

    return (
        <Card className={classes.root}>
            <CardContent className={classes.graphContainer}>
                <Typography variant="overline">
                    Holistic Performance
                </Typography>
                <div className={classes.title}>Topic Scores</div>
                <Chart
                    height={290}
                    data={data}
                    autoFit
                    scale={{
                        value: {
                            min: 0,
                            max: 90
                        }
                    }}>
                    <Coordinate type="polar" radius={0.8} />
                    <Line position="item*value" size="2" />
                </Chart>

            </CardContent>
        </Card>
    )

};

export default RadarChartCard;