import React from 'react'
import "./style.css";

function Form() {
  return (
    <form className="add-form">
      <div className="input-group">
        <label className="form-label">Title</label>
        <input
          type="text"
          name="title"
        />
        <label className="form-label">Body</label>
        <input
          type="text"
          name="body"
        />
      </div>
      <button className="add-button">Save</button>
    </form>
  )
}

export default Form