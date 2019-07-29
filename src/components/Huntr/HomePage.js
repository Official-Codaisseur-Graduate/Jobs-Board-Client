import React from 'react'
import './HomePage.css'

export default function HomePage() {
  return (
    <div>
    <div className='homepage-title'>
      <h3>Jobs Board</h3>
    </div>
    <div className='homepage'>
      <h4>Why?</h4>
      <p>The overall goal for this project was to provide a tool to Codaisseur graduates whereby they could gain useful information regarding job applications. 
        The app will allow graduates to gain insight into previous graduates experiences when applying to companies in the Netherlands. 
        More precisely, the app gives a basic overview such as, how many previous graduates have applied to a company, whether they had an interview, finally whether they got hired.
        The app also gives an overview of how many applications and interviews it takes on average to get a job offer.</p>
      <h4>How?</h4>
      <p>In order to do this we used the Huntr API for previous graduates data and job postings.</p>
      <h4>Contributors</h4>
      <div className='contributors-list'>
      <div>
      <h5>Class #27</h5>
      <ul>
        <li>
          Jetske van der Wouden
        </li>
        <li>
          Tatiany Costa
        </li>
        <li>
          Marlon Palpa
        </li>
        <li>
          Alina Beglarian
        </li>
        </ul>
        </div>
        <div>
        <h5>Class #26</h5>
      <ul>
        <li>
          Tiago Barros
        </li>
        <li>
          Cathal Hastings
        </li>
        <li>
          Hager Hussein
        </li>
        <li>
          Dave Mollen
        </li>
      </ul>
      </div>
      </div>
    </div>
    </div>
  )
}
