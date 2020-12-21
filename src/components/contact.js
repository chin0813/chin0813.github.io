import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render() {
        return (
            <div className='contact-body'>

                <Grid className='contact-grid'>
                    <Cell col={6}>
                        <h2>Chin Yi Xiang</h2>
                        <img 
                            src='img/Profile Pic 1.png' 
                            alt='avatar' 
                            style={{ height: '250px' }}

                        />

                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>Grow your business by making the right choice with Data Driven Decision.</p>
                    </Cell>

                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>

                        <div className='contact-list'>
                            <List>

                                <ListItem>
                                    <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton'}}>
                                        <i class="fas fa-phone-square" aria-hidden='true'> </i> 
                                        (60) 011 12344520
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton'}}>
                                        <i class="fas fa-envelope" aria-hidden='true'></i>
                                        chinyixiang@gmail.com
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton'}}>
                                    <i class="fab fa-skype" aria-hidden='true'></i>
                                        chinyixiang_1
                                    </ListItemContent>
                                </ListItem>

                            </List>
                        </div>

                    </Cell>

                </Grid>

            </div>
        );
    }
}

export default Contact;