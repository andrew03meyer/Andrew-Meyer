import React from "react";
import "./Ringing.css";
function Ringing() {

    let url = "https://bb.ringingworld.co.uk/view.php?id=1209822";

    fetch(url, {method:"GET", headers: "Accept", "application/html"})
        .then(response => response.text())
        .then(xmlData => {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xmlData);
            const xmlContent = xmlDoc.documentElement.outerHTML;

            return(
                <p>testing</p>
            )
        })
        .catch(error => console.log("eeror"));
}

export default Ringing;
