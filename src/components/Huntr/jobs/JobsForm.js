import React from '../../../../node_modules/react'
import './css/JobsList.css'

export default function JobsForm(props) {
  return (
    <form 
      id='jobsQuery' 
      onSubmit={props.onSubmit} 
      autoComplete='off'
      className="form-list">
      
      <label>
        Role: &nbsp;
        <input 
          type="text" 
          name="query" 
          value={props.values.query} 
          onChange={props.onChange}
        />
      </label>

      <label>
        City: &nbsp;
        <input 
          type="text" 
          name="city" 
          value={props.values.city} 
          onChange={props.onChange}
        />
      </label>

      <input type="submit" />
    </form>
  )
}
