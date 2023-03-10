import React, { useContext, useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { MeetContext } from "../context/MeetContext";
import { Context } from "../store/appContext";
import { generateString } from "../helper/generateRandomString";

export const StartupPage = () => {
    // we will use this to navigate next page
    const history = useNavigate();
    const { store, actions } = useContext(Context);

    useEffect(() => {
        if (!store.userdata.id) {
            navigate("/");
        }
    }, []);

    // will be using name across all pages from context
    return (
        <div >
            <>
                <h4>Jitsi Medium Demo</h4>
                <>
                    <div style={{ marginBottom: "1.5rem" }}>
                        <input type="text"
                            label="Name"
                            variant="outlined"
                            color="default"
                            className=""
                            value={store.userdata.name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div style={{ marginBottom: "1.5rem", textAlign: "center" }}>
                        <Button
                            variant="contained"
                            color="default"
                            onClick={() => {
                                // if name is empty we mandate user to enter it as we also trigger to open snackbar here
                                if (store.userdata === "") {
                                    handleClick();
                                    return;
                                }

                                // if all goes well we will be redirecting the user to meet room
                                history.push(`/meetPage/${generateString(7)}`);
                            }}
                        >
                            Create Meet
                        </Button>
                    </div>
                </>
            </>
        </div>
    );
};