import React, { useState, useEffect } from "react";

export default function SearchForm(props) {
  return(
    <section>
      <form>
        <input 
          type="text" 
          placeholder={props.placeHolder} 
          value={props.searchQuery}
          onChange={props.handleChange}/>
      </form>
    </section>
  )
}