import {round5, nonActiveMembers, numberOfJobsArray} from './ApplicationsDistributionsGraph'

const jobsFirstInterview = (members) => {
  const nonActive = nonActiveMembers(members)
  const jobsFirstInterview = nonActive.map(member => {
    return member.jobs.filter(job => job.firstInterviewDate)
  })
  return jobsFirstInterview
}

function dataForInterviewChart(members){
  const numberOfApplicationsPerMember = numberOfJobsArray(members, jobsFirstInterview)
  const sortedByValue = numberOfApplicationsPerMember.sort((a, b) => a - b)
  const maxValueRounded = round5(sortedByValue[sortedByValue.length - 1])
  let barArray = []
  let index = []
  let barFrequency = []

  // this part organizes the data so that they can be presented on the bar chart with bar width=5
  for (let i = 1; (i * 1) <= maxValueRounded; i++) {
    const bar = sortedByValue.filter(num => num < i * 1 && num >= ((i - 1) * 1))
    barArray.push(bar)
    index.push(`${i-1}`)
    barFrequency.push(bar.length)
  }
  return [index, barFrequency]
}

function chartDataInterviews(members) {
  return {
    labels: dataForInterviewChart(members)[0],
    datasets: [
      {
        label: 'Number of interviews Codaisseur Graduates took part in',
        backgroundColor: 'rgb(255, 99, 132, 0.4)',
        borderColor: 'rgb(255, 99, 132)',
        data: dataForInterviewChart(members)[1],
      }
    ]
  }
}

const interviewOptions = {
  showAllTooltips: true,
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true,
      },
      categoryPercentage: 1.0,
      barPercentage: 1.0,
      scaleLabel: {
        display: true,
        labelString: 'Number of Graduates',
        fontSize: 14
      }
    }],
    xAxes: [{
      ticks: {
        beginAtZero: true,
      },
      scaleLabel: {
        display: true,
        labelString: 'Number of Interviews',
        fontSize: 14
      }
    }]
  }
}


export {chartDataInterviews, dataForInterviewChart, jobsFirstInterview, interviewOptions}