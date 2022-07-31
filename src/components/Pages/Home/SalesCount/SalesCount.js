import { Grid, Container } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

import CountUp from 'react-countup';

const SalesCount = () => {

    const counts = [
        {
            value: 5682,
            title: 'Brand New Cars'
        },
        {
            value: 2572,
            title: 'Certified Pre-Owned Vehicles'
        },
        {
            value: 9562,
            title: 'Pre-Owned Vehicles'
        },
    ]

    return (

        <Box sx={{ backgroundColor: '#f18d4d', py: 10 }}>
            <Container>
                <Grid container spacing={2}>
                    {
                        counts.map((count, index) => {
                            return (
                                <Grid key={index} item xs={12} md={12} lg={4} sx={{ textAlign: 'center', color: 'black', textShadow: '1px 1px grey', }}>

                                    <CountUp
                                        delay={0}
                                        duration={1}
                                        preserveValue={true}
                                        enableScrollSpy={true}
                                        end={count.value}
                                        style={{
                                            transition: '0.6s ease-out',
                                            fontSize: 80,
                                            letterSpacing: '10px',
                                        }}
                                    />
                                    <h3>{count.title}</h3>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Container>

        </Box>
    );
};

export default SalesCount;