import React from 'react'
import './GraduatesStatsList.css'
import { Bar } from 'react-chartjs-2'

export default function GraduatesStatsList(props) {
const { companies } = props

const reducer = (accumulator, currentValue) => accumulator + currentValue

const ApplicationToInterview = !companies
? 'Loading...'
: Math.round((props.companies
    .map(companies => companies.applicationCount)
    .reduce(reducer)) / (props.companies
      .map(companies => companies.interviewCount)
      .reduce(reducer)))

const InterviewToOffer = !companies 
? 'Loading...' 
: Math.round((props.companies
    .map(companies => companies.interviewCount)
    .reduce(reducer)) / (props.companies
      .map(companies => companies.offerCount)
      .reduce(reducer)))

const ApplicationToOffer = !companies
? 'Loading...'
: Math.round((props.companies
    .map(companies => companies.applicationCount)
    .reduce(reducer)) / (props.companies
      .map(companies => companies.offerCount)
      .reduce(reducer)))

const data= {
  labels: ["Applications to Interview", "Interviews to Offer", "Applications to Offer"],
  datasets: [{
  label: "Averages indicating how long it takes to get an offer or an interview after applying",
  backgroundColor: 'rgb(255, 99, 132)',
  borderColor: 'rgb(255, 99, 132)',
  data: [ApplicationToInterview, InterviewToOffer, ApplicationToOffer],
  }]
}

const options = {
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true
      }
    }]
  }
}

const BarChart = !companies
? 'Loading...'
: <Bar
data={data}
options={options}
width={150}
height={100}
/>

  return (
    <div className="graduate-details">
      <h1>What Can I Expect as a Graduate Looking for a Job?</h1>
      {BarChart}
    </div>
  )

}