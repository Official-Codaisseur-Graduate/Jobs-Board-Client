import React from 'react'
import './GraduatesStatsList.css'
import { Bar as BarChart } from 'react-chartjs-2'
import {
  chartDataApplications,
  options,
  numberOfJobsArray,
  styles,
  nonActiveMembers,
  jobsWithApplicationsOnly
} from './ApplicationsDistributionsGraph'

import {
  chartDataInterviews, 
  jobsFirstInterview,
  interviewOptions
} from './InterviewDistributionsGraph'

export default function GraduatesStatsPerMember(props) {

  const { allMembers } = props
  const members = allMembers && allMembers.allMembers.members

  const numberOfApplications = allMembers &&
    numberOfJobsArray(members, jobsWithApplicationsOnly).reduce((total, number) => total = total + number, 0)
  const nonActive = allMembers && nonActiveMembers(members)

  const averageApplicationPerMember = allMembers && (numberOfApplications / nonActive.length).toFixed(2)

  const numberOfInterviews = allMembers &&
    numberOfJobsArray(members, jobsFirstInterview).reduce((total, number) => total = total + number, 0)

  const averageInterviewPerMember = allMembers && (numberOfInterviews / nonActive.length).toFixed(2)

  return (
    <div className="graduate-details">
      <h3>What Can I Expect as a Graduate?</h3>
      <h4>Some fun statistics!</h4>
      <p>Average number of applications send by a graduate: <b className='number'>{averageApplicationPerMember}</b></p>
      <p>Average number of interviews per graduate: <b className='number'>{averageInterviewPerMember}</b></p>
      {allMembers && <div style={styles.graphContainer} className='bar-chart'>
        <BarChart data={chartDataApplications(allMembers.allMembers.members)}
          options={options} />
      </div>}

      {allMembers && <div style={styles.graphContainer} className='bar-chart'>
        <BarChart data={chartDataInterviews(allMembers.allMembers.members)}
          options={interviewOptions} />
      </div>}
      <br/>
      {allMembers &&
        <p>The above graphs are based on the data from Huntr regarding the Codaisseur Graduates. <br />
          We used data only for accounts which are not active anymore ({nonActive.length}), assuming that they regard people who have already found job.
      </p>}

    </div>
  )

}