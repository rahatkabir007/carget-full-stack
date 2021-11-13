import { Grid, Container } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import AnimatedNumber from 'react-animated-number';

const SalesCount = () => {
    return (
      
        <Box sx={{ backgroundColor: '#f18d4d', py: 10}}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={12} lg={4} sx={{ textAlign: 'center', color: 'black', textShadow: '1px 1px grey',  }}>
                        <AnimatedNumber component="text" value={5682}
                            style={{
                                transition: '0.6s ease-out',
                                fontSize: 80,
                                letterSpacing: '10px',
                            }}
                            formatValue={n => n.toFixed()}
                            duration={3000}
                        />
                        <h3>Brand New Cars</h3>
                    </Grid>
                    <Grid item xs={12} md={12} lg={4} sx={{ textAlign: 'center', color: 'white', textShadow: '1px 1px grey' }}>
                        <AnimatedNumber component="text" value={2572}
                            style={{
                                transition: '0.6s ease-out',
                                fontSize: 80,
                                letterSpacing: '10px'
                            }}
                            formatValue={n => n.toFixed()}
                            duration={3000}
                        />
                        <h3>Certified Pre-Owned Vehicles</h3>
                    </Grid>
                    <Grid item xs={12} md={12} lg={4} sx={{ textAlign: 'center', color: 'black', textShadow: '1px 1px grey'  }}>
                        <AnimatedNumber component="text" value={9562}
                            style={{
                                transition: '0.6s ease-out',
                                fontSize: 80,
                                letterSpacing: '10px'
                            }}

                            formatValue={n => n.toFixed()}
                            duration={3000}
                        />
                        <h3>Pre-Owned Vehicles</h3>
                    </Grid>
                </Grid>
          </Container>
              
        </Box>
    );
};

export default SalesCount;