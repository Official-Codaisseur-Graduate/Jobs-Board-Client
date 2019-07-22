import React from 'react'
import './IndeedList.css'

export default function IndeedForm(props) {
  return (
    <form 
      id='indeedQuery' 
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
