import { Paper, Stack, Button, Box, useTheme } from '@mui/material';
import React from 'react';
import Container from './Container';
import Logo from './Logo';
import menuConfigs from "../../configs/menu.configs";
import { Link } from "react-router-dom";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
    const theme = useTheme();
    const iconBoxShadowColor = theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)';

    return (
        <Container>
            <Paper square={true} sx={{ backgroundImage: "unset", padding: "2rem", position: "relative" }}>
                <Stack
                    alignItems="center"
                    justifyContent="space-between"
                    direction={{ xs: "column", md: "row " }}
                    sx={{ height: "max-content", borderBottom: `1px solid ${theme.palette.mode === 'dark' ? 'white' : 'black'}` }}
                >
                    <Logo />
                    <Box>
                        {menuConfigs.main.map((item, index) => (
                            <Button
                                key={index}
                                sx={{ color: "inherit" }}
                                component={Link}
                                to={item.path}
                            >
                                {item.display}
                            </Button>
                        ))}
                    </Box>
                </Stack>
                <div style={{ textAlign: 'center', marginBottom: '1rem', marginTop: '1rem' }}>
                Welcome to WebFlix, your go-to destination for movie trailers! Dive into a world of cinematic excitement as you explore the latest trailers for upcoming films and TV shows. Powered by the comprehensive API of The Movie Database (TMDb).
                </div>
                <Box
                    sx={{
                        textAlign: 'center',
                        marginTop: '1rem',
                    }}
                >
                    <span style={{ marginRight: '1rem', display: 'inline-block' }}>
                        <Box
                            sx={{
                                width: "30px",
                                height: "30px",
                                borderRadius: "50%",
                                boxShadow: `0 0 5px ${iconBoxShadowColor}`,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                transition: "all 0.3s",
                                "&:hover": {
                                    boxShadow: `0 0 15px rgba(233, 30, 99, 0.7)`,
                                },
                            }}
                        >
                            <FaFacebookF />
                        </Box>
                    </span>
                    <span style={{ marginRight: '1rem', display: 'inline-block' }}>
                        <Box
                            sx={{
                                width: "30px",
                                height: "30px",
                                borderRadius: "50%",
                                boxShadow: `0 0 5px ${iconBoxShadowColor}`,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                transition: "all 0.3s",
                                "&:hover": {
                                    boxShadow: `0 0 15px rgba(233, 30, 99, 0.7)`,
                                },
                            }}
                        >
                            <FaInstagram />
                        </Box>
                    </span>
                    <span style={{ marginRight: '1rem', display: 'inline-block' }}>
                        <Box
                            sx={{
                                width: "30px",
                                height: "30px",
                                borderRadius: "50%",
                                boxShadow: `0 0 5px ${iconBoxShadowColor}`,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                transition: "all 0.3s",
                                "&:hover": {
                                    boxShadow: `0 0 15px rgba(233, 30, 99, 0.7)`,
                                },
                            }}
                        >
                            <FaTwitter />
                        </Box>
                    </span>
                    <span style={{ display: 'inline-block' }}>
                        <Box
                            sx={{
                                width: "30px",
                                height: "30px",
                                borderRadius: "50%",
                                boxShadow: `0 0 5px ${iconBoxShadowColor}`,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                transition: "all 0.3s",
                                "&:hover": {
                                    boxShadow: `0 0 15px rgba(233, 30, 99, 0.7)`,
                                },
                            }}
                        >
                            <FaLinkedin />
                        </Box>
                    </span>
                </Box>
            </Paper>
        </Container>
    );
};

export default Footer;
