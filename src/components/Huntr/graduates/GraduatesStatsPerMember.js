import React from 'react'
import './GraduatesStatsList.css'
import { Bar as BarChart } from 'react-chartjs-2'

function round5(x) {
  return Math.ceil(x / 5) * 5;
}
const nonActiveMembers = (members) => {
  return members.filter(member => member.isActive === false)
}

const jobsWithApplicationsOnly = (members) => {
  const nonActive = nonActiveMembers(members)
  //the above code assumes that people who had an interview, but didn't put anything in the application date field, also did apply
  const jobsWithApplicationsOnly = nonActive.map(member => {
    return member.jobs.filter(job => job.applicationDate || job.firstInterviewDate)
  })
  return jobsWithApplicationsOnly
}
const jobsFirstInterview = (members) => {
  const nonActive = nonActiveMembers(members)
  const jobsFirstInterview = nonActive.map(member => {
    return member.jobs.filter(job => job.firstInterviewDate)
  })
  return jobsFirstInterview
}

const numberOfJobsArray= (members, func) => {
  const jobs = func(members)
  return jobs.map(memb => memb.length)}

const dataForChart = (members) => {
  const numberOfApplicationsPerMember = numberOfJobsArray(members, jobsWithApplicationsOnly)
  const sortedByValue = numberOfApplicationsPerMember.sort((a, b) => a - b)
  const maxValueRounded = round5(sortedByValue[sortedByValue.length - 1])
  let barArray = []
  let index = []
  let barFrequency = []

 //this part organizes the data so that they can be presented on the bar chart with bar width=5
  for (let i = 1; (i * 5) <= maxValueRounded; i++) {
    const bar = sortedByValue.filter(num => num < i * 5 && num >= ((i - 1) * 5))
    barArray.push(bar)
    index.push(`${(i-1)*5} - ${i*5}`)
    barFrequency.push(bar.length)
  }

  return [index, barFrequency]
}

function chartData(members) {
  return {
    labels: dataForChart(members)[0],
    datasets: [
      {
        label: 'Number of applications send by Codaisseur Graduates',
        // fillColor: 'rgba(220,220,220,0.2)',
        // strokeColor: 'rgba(220,220,220,1)',
        // pointColor: 'rgba(220,220,220,1)',
        // pointStrokeColor: '#fff',
        // pointHighlightFill: '#fff',
        // pointHighlightStroke: 'rgba(220,220,220,1)',
        backgroundColor: 'rgb(255, 99, 132, 0.4)',
        borderColor: 'rgb(255, 99, 132)',
        data: dataForChart(members)[1], }
      ]
  }
}

const options = {
  showAllTooltips: true,
  // scaleShowGridLines: true,
  // scaleGridLineColor: 'rgba(0,0,0,.05)',
  // scaleGridLineWidth: 1,
  // scaleShowHorizontalLines: true,
  // scaleShowVerticalLines: true,
  // bezierCurve: true,
  // bezierCurveTension: 0.4,
  // pointDot: true,
  // pointDotRadius: 4,
  // pointDotStrokeWidth: 1,
  // pointHitDetectionRadius: 20,
  // datasetStroke: true,
  // datasetStrokeWidth: 2,
  // datasetFill: false,
  // legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>',
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true,
      },
      categoryPercentage: 1.0,
      barPercentage: 1.0,
      scaleLabel: {
        display: true,
        labelString: 'number of graduates',
        fontSize: 14
      }
    }],
    xAxes: [{
      ticks: {
        beginAtZero: true,
      },
      scaleLabel: {
        display: true,
        labelString: 'number of applications',
        fontSize: 14
      }
    }]
  }
}

const styles = {
  graphContainer: {
    border: '1px solid black',
    padding: '15px'
  }
}



export default function GraduatesStatsPerMember(props) {

  const { allMembers, allCompanies } = props
  const members = allMembers && allMembers.allMembers.members
  allMembers && dataForChart(members)
  const numberOfApplications = allMembers && numberOfJobsArray(members, jobsWithApplicationsOnly).reduce((total, number) => total = total + number, 0)
  console.log(numberOfApplications)
  const nonActive = allMembers && nonActiveMembers(members)
  const averageApplicationPerMember = allMembers && (numberOfApplications / nonActive.length).toFixed(2)
  const numberOfInterviews = allMembers && numberOfJobsArray(members, jobsFirstInterview).reduce((total, number) => total = total + number, 0)
  const averageInterviewPerMember = allMembers && (numberOfInterviews/nonActive.length).toFixed(2)
  // const numberOfApplications = !allCompanies ? 'Loading' : allCompanies.reduce((total, company) => total = total + company.applicationCount, 0)
  // const numberOfMembers = !allMembers ? 'Loading' : allMembers.allMembers.number
  // const averageApplicationPerMember = (numberOfApplications / numberOfMembers).toFixed(2)
  // const numberOfInterviews = !allCompanies ? 'Loading' : allCompanies.reduce((total, company) => total = total + company.interviewCount, 0)
  // const averageInterviewPerMember = (numberOfInterviews / numberOfMembers).toFixed(2)
  // const numberOfOffers = !allCompanies ? 'Loading' : allCompanies.reduce((total, company) => total = total + company.offerCount, 0)
  console.log('members and their jobs', numberOfInterviews)

  const numberOfJobs = allMembers && allMembers.allMembers.members.map(member => member.jobs.length)
  console.log(numberOfJobs)
  allMembers && console.log('sorting', dataForChart(allMembers.allMembers.members))

  return (
    <div className="graduate-details">
      <h3>Some fun statistics!</h3>
      <p>Average number of applications send by a graduate: <b className = 'number'>{averageApplicationPerMember}</b></p>
      <p>Average number of interviews per graduate: <b className = 'number'>{averageInterviewPerMember}</b></p>
      {allMembers && <div style={styles.graphContainer} className = 'bar-chart'>
        <BarChart  data={chartData(allMembers.allMembers.members)}
          options={options} />
      </div>}
    </div>
  )

}