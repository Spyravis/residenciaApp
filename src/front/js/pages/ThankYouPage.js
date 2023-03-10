import React from "react";

import { useNavigate } from "react-router-dom";

export const ThankYou = () => {

    // we will use this to navigate next page
    const history = useNavigate();

    return (
        <div className={classes.background}>
            <Paper className={classes.card} elevation={4}>
                <h4>Thank You</h4>
                <ThemeProvider theme={theme}>
                    <div style={{ marginBottom: "1.5rem" }}></div>
                    <div style={{ marginBottom: "1.5rem", textAlign: "center" }}>
                        <p>You can go back home and create another meeting !</p>
                        <Button
                            variant="contained"
                            color="default"
                            onClick={() => {
                                history.push(`/`);
                            }}
                        >
                            Go Back Home
                        </Button>
                    </div>
                </ThemeProvider>
            </Paper>
        </div>
    );
};