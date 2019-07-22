import React from 'react'
import { VictoryPie, VictoryBar, VictoryChart, VictoryTheme } from 'victory'
import './Huntr/CompaniesList.css'

export default function Stats(props) {
  const { company } = props
  
  if(company === null){
    return company
  }
  
  return (
    <div className="status">
      <p>Hiring Success</p>
      <div style={styles.pie}>
        <VictoryPie 
          style={{
            data: {
              fillOpacity: 0.9
            },
            labels: {
              fontSize: 20
            }
          }}
          data={[
            { x: company.jobOfferAfterApplyingRate + '%', y: company.jobOfferAfterApplyingRate},
            { x: ' ', y: 100-company.jobOfferAfterApplyingRate}
          ]}
        />
      </div>

      <div style={styles.chart}>
        <VictoryChart
          theme={VictoryTheme.material}
          domainPadding={10}
        >
          <VictoryBar
            data={[
              { x: 'applications', y: company.applicationCount},
              { x: 'interviews', y: company.interviewCount},
              { x: 'job offers', y: company.offerCount},
            ]}
          />
        </VictoryChart>
      </div>
    </div>
  )
}

const styles = {
  pie: {
    width: 300, 
    fontSize: 40,
  },

  chart: {
    width: 300, 
    fontSize: 40,
  }
}