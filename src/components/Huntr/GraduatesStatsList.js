import React from 'react'
import './GraduatesStatsList.css'
import { HorizontalBar } from 'react-chartjs-2'

export default function GraduatesStatsList(props) {
const { companies } = props

const sum = (accumulator, currentValue) => accumulator + currentValue

const ApplicationToInterview = !companies
? 'Loading...'
: ((companies
    .map(companies => companies.applicationCount)
    .reduce(sum)) / (props.companies
      .map(companies => companies.interviewCount)
      .reduce(sum))).toFixed(1)

const InterviewToOffer = !companies 
? 'Loading...' 
: ((companies
    .map(companies => companies.interviewCount)
    .reduce(sum)) / (companies
      .map(companies => companies.offerCount)
      .reduce(sum))).toFixed(1)

const ApplicationToOffer = !companies
? 'Loading...'
: ((companies
    .map(companies => companies.applicationCount)
    .reduce(sum)) / (companies
      .map(companies => companies.offerCount)
      .reduce(sum))).toFixed(1)

const data = {
  labels: [
    `Applications to Offer`,
    `Interviews to Offer`,
    `Applications to Interview`
  ],
  datasets: [{
  label: "Averages indicating what it takes to get an offer or an interview after applying",
  backgroundColor: 'rgb(255, 99, 132)',
  borderColor: 'rgb(255, 99, 132)',
  data: [ApplicationToOffer, InterviewToOffer, ApplicationToInterview],
  }]
}

const options = {
  showAllTooltips: true,
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true
      },
      categoryPercentage: 1.0,
      barPercentage: 1.0
    }],
    xAxes: [{
      ticks: {
        beginAtZero: true
      }
    }]
  }
}

const BarChart = !companies
? 'Loading...'
: <HorizontalBar
  data={data}
  options={options}
/>

  return (
    <div className="graduate-details">
      <h3>What Can I Expect as a Graduate Looking for a Job?</h3>
      <div className='bar-chart'>{BarChart}</div>
    </div>
  )

}