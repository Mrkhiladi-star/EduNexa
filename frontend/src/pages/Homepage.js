import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Box, Button } from '@mui/material';
import styled from 'styled-components';
import Students from "../assets/students.svg";
import { LightPurpleButton } from '../components/buttonStyles';

const Homepage = () => {
    return (
        <FullHeightContainer>
            <Grid container spacing={4} alignItems="center">
                <Grid item xs={12} md={6}>
                    <ImageWrapper>
                        <img src={Students} alt="students" />
                    </ImageWrapper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <ContentWrapper>
                        <Title>
                            Welcome to <br />
                            EduVerse - Education Ministry's <br />
                            Digital Learning Platform
                        </Title>
                        <Description>
                            EduVerse revolutionizes government education management through a comprehensive digital ecosystem designed specifically for schools and colleges under the Education Ministry. Our platform enables seamless coordination between students, teachers, principals, district officials, and ministry authorities. Experience AI-powered classroom management, real-time attendance tracking, automated performance analytics, and transparent fund allocation systems. From daily class summaries to nationwide education monitoring, EduVerse ensures efficient governance while maintaining complete compliance with government education policies and standards.
                        </Description>
                        <ButtonWrapper>
                            <StyledLink to="/choose">
                                <LightPurpleButton variant="contained" fullWidth>
                                    Login
                                </LightPurpleButton>
                            </StyledLink>
                            <StyledLink to="/chooseasguest">
                                <Button variant="outlined" fullWidth sx={{ mt: 2, color: "#7f56da", borderColor: "#7f56da" }}>
                                    Login as Guest
                                </Button>
                            </StyledLink>
                            <Description>
                                Don't have an account?{' '}
                                <Link to="/Adminregister" style={{ color: "#550080" }}>
                                    Sign up
                                </Link>
                            </Description>
                        </ButtonWrapper>
                    </ContentWrapper>
                </Grid>
            </Grid>
        </FullHeightContainer>
    );
};

export default Homepage;

// Styled Components
const FullHeightContainer = styled(Container)`
  min-height: 100vh;
  display: flex;
  align-items: center;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  
  img {
    max-width: 100%;
    height: auto;
  }
`;

const ContentWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 20px;
`;

const Title = styled.h1`
  font-size: 2.8rem;
  color: #252525;
  font-weight: bold;
  line-height: 1.2;
`;

const Description = styled.p`
  margin: 20px 0;
  font-size: 0.75rem;
  line-height: 1.6;
  color: #444;
`;

const ButtonWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
