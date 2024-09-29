import React from "react";
import { Card, CardContent, Typography, Grid2 } from "@mui/material";

const MetricsCard = ({ title, value }) => {
    return (
        <Grid2 item xs={12} sm={6} md={4}>
            <Card sx={{height: '100%'}}>
                <CardContent>
                    <Typography variant="h6" color="textSecondary" gutterBottom>
                        {title}
                    </Typography>
                    <Typography variant="h4" component="div">
                        {value}
                    </Typography>
                </CardContent>
            </Card>
        </Grid2>
    )
}

export default MetricsCard