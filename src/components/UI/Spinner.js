import React from 'react'
import Loading from "../../images/loading.gif";

const Spinner = () => {
    return (
        <img src={Loading} style={{width: "200", margin: "auto", display:"block"}} alt="Loading" />
    )
}

export default Spinner
