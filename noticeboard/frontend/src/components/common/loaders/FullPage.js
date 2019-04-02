import React from 'react';
import {ClapSpinner} from "react-spinners-kit";

export default () =>
    <div className="nb_loading" style={{
        position: "absolute",
        zIndex: "200",
        background: "rgba(255, 255, 255, .9)",
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }}>
        <ClapSpinner key={"loader"} size={30} color="#686769" loading={true}/>
    </div>