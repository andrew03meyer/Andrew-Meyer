import React from "react";
import "./Ringing.css";
function Ringing() {

  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "https://bb.ringingworld.co.uk/view.php?id=110081");
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      return (
          <>
            <p>
              connection made
            </p>
          </>
      );
    }
    return (
        <p>next stage</p>
    );
  }

  return(
      <p>
        Couldnt be loaded
      </p>
  );
}

export default Ringing;
