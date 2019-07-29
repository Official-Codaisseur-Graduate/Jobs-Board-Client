import React from 'react'
import './Huntr/CompaniesList.css'
import {Bar,Pie} from 'react-chartjs-2'

export default function Stats(props) {
  const { company } = props
  
  if(company === null){
    return company
  }
  
  const barData = {
    labels: [''],
    datasets: [
      {
        label: '# of applications',
        data: [company.applicationCount],
        key: "applications",
        backgroundColor: ['rgba(54, 162, 235, 0.2)',],
        borderColor: ['rgba(54, 162, 235, 1)',],
        borderWidth: 1
      },
      {
        label: '# of interviews',
        data: [company.interviewCount],
        key: "interviews",
        backgroundColor: ['rgba(255, 206, 86, 0.2)',],
        borderColor: ['rgba(255, 206, 86, 1)',],
        borderWidth: 1
      },
      {
        label: '# of hirings',
        data: [company.offerCount],
        key: "hirings",
        backgroundColor: ['rgba(255, 99, 132, 0.2)'],
        borderColor: ['rgba(255, 99, 132, 1)'],
        borderWidth: 1
      }
    ]
  }

  const pieData = {
    labels: [
      `${company.jobOfferAfterApplyingRate}%`,
    ],
    datasets: [{
      data: [company.jobOfferAfterApplyingRate, 100-company.jobOfferAfterApplyingRate],
      backgroundColor: ['#36A2EB','#FFCE56'],
      hoverBackgroundColor: ['#36A2EB','#FFCE56']
    }]
  }

  const companyStatsBar = <Bar className="charts "data={barData} width={300} height={300}/>
  const companyHiringRatePie = <Pie className="charts" data={pieData} width={300} height={300} />

  if(company.jobOfferAfterApplyingRate===0){
    return  <div className="status">
              {companyStatsBar}
            </div>
  }

  return (
    <div className="status">
      <h3>Hiring Success</h3>
      {companyHiringRatePie}
      {companyStatsBar}
    </div>
  )
}