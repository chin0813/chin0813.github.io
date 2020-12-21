import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className='landing-grid'>
                    <Cell col={12}>
                        <img 
                            src='img/Profile Pic 1.png'
                            alt='avatar'
                            className='avatar-img'
                        />

                        <div className='banner-text'>
                            <h1>Data Scientist</h1>
                            <hr/>
                            <p>
                            Python | Machine Learning | Deep Learning | SQL | MongoDB | Javascript | React
                            </p>
                            
                            <div className='social-links'>

                                {/* Facebook */}
                                <a href='https://www.facebook.com/chin.y.xiang' target='_blank' rel='noopener noreferrer'>
                                <i class="fab fa-facebook-square" aria-hidden='true'></i>
                                </a>                            

                                {/* Github */}                            
                                <a href='https://github.com/chin0813' target='_blank' rel='noopener noreferrer'>
                                <i class="fab fa-github-square" aria-hidden='true'></i>
                                </a>
                          
                                {/* WhatsApp */}
                                <a href='https://api.whatsapp.com/send?phone=601112344520' target='_blank' rel='noopener noreferrer'>
                                <i class="fab fa-whatsapp-square" aria-hidden='true'></i>
                                </a>

                            </div>                          

                        </div>
                    </Cell>
                </Grid>
                
            </div>
        );
    }
}

export default Landing;