import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{ textAlign: 'center' }}>
                            <img 
                                src='img/Profile Pic 1.png' 
                                alt='avatar'
                                style={{ height: '200px' }}                                
                            />
                        </div>

                        <h2 style={{ paddingTop: '2em' }}>Chin Yi Xiang</h2>
                        <h4 style={{ color: 'grey' }}>Data Scientist</h4>
                        <hr style={{ borderTop: '3px solid #833FB2', width: '50%' }} />
                        <p>Let data speak. Make your decision based on more concrete evidence.</p>
                        <hr style={{ borderTop: '3px solid #833FB2', width: '50%' }} />
                        <h5>Phone</h5>
                        <p>(60) 011 1234 4520</p>
                        <h5>Email</h5>
                        <p>chinyixiang@gmail.com</p>
                        <hr style={{ borderTop: '3px solid #833FB2', width: '50%' }} />
                    </Cell>
                    <Cell col={8} className='resume-right-col'>
                        <h2>Education</h2>
                        <Education 
                            startYear={2012}
                            endYear={2018}
                            schoolName={'University of Malaya'}
                            schoolDescription={'Bachelor of Science (Physics).'}
                        />

                        <Education 
                            startYear={2019}
                            endYear={'Now'}
                            schoolName={'Universiti Sains Malaysia'}
                            schoolDescription={'Master of Science (Data Science and Analytics)'}
                        />

                        <hr style={{borderTop: '3px solid #E22947'}}/>

                        <h2>Experience</h2>
                        <Experience 
                            startYear={2017}
                            endYear={2018}
                            jobName={'Olympiad Maths Tutor'}
                            jobCompany={'Olympic Edu Sdn. Bhd.'}
                            jobDescription={'Guide primary school students on Olympiad Maths learning. '}
                        />

                        <Experience 
                            startYear={2018}
                            endYear={2019}
                            jobCompany={'SmartB Solutions Sdn. Bhd.'}
                            jobName='Technical Executive'
                            jobDescription='Design Solution, Database Setup and Maintenance, Troubleshooting, Hardware and Software Implementation, Customer Support'
                        />

                        <hr style={{borderTop: '3px solid #E22947'}}/>

                        <h2>Skills</h2>
                        <Skills
                            skill='Python'
                            progress={40}
                        />

                        <Skills
                            skill='Machine Learning'
                            progress={30}
                        />

                        <Skills 
                            skill='Javascript'
                            progress={80}
                        />

                        <Skills 
                            skill='React'
                            progress={50}
                        />

                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Resume;