import React from 'react'
import "./Options.css";
const Options = () => {
  return (
    
    <div class="btn-group " role="group" aria-label="Basic radio toggle button group" >
    <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked/>
    <label class="btn btn-outline-primary" for="btnradio1">Resources</label>
  
    <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off"/>
    <label class="btn btn-outline-primary" for="btnradio2">Requests</label>
  
    <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off"/>
    <label class="btn btn-outline-primary" for="btnradio3">Users</label>
  </div>
  )
}

export default Options