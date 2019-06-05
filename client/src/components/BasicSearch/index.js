import React from "react";

export function SearchText(props) {
  return (
    <div className="form-group">
      <textarea className="form-control"/>
    </div>
  );
}

export function SearchBtn(props) {
  return (
    <button id="search-button">
      Go
    </button>
  );
}