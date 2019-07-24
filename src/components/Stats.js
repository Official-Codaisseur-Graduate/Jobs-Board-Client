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
      <h3>Hiring Success</h3>
      <div style={styles.pie}>
        <VictoryPie 
          className="hiring-success-pie"
          style={{
            data: {
              fillOpacity: 0.9,
              fill: (d)=>d.y===company.jobOfferAfterApplyingRate ? "green" : "maroon"
            },
            labels: {
              fontSize: 25,
              fontWeight: "bold"
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
            className="victory-bar"
            style= {{ 
              data: {
                fill: (d)=>d.y===company.applicationCount 
                              ? "yellow" : d.y===company.interviewCount 
                                              ? "darkorchid" : "green",
                    },
              labels: {
                fontWeight: "bold"
              }
            }}
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