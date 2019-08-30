function round5(x) {
  return Math.ceil(x / 5) * 5;
}
const nonActiveMembers = (members) => {
  return members.filter(member => member.isActive === false)
}

const jobsWithApplicationsOnly = (members) => {
  const nonActive = nonActiveMembers(members)
  //the above code assumes that people who had an interview, 
  //but didn't put anything in the application date field, also did apply at some point
  const jobsWithApplicationsOnly = nonActive.map(member => {
    return member.jobs.filter(job => job.applicationDate || job.firstInterviewDate)
  })
  return jobsWithApplicationsOnly
}

const numberOfJobsArray = (members, func) => {
  const jobs = func(members)
  return jobs.map(memb => memb.length)
}

function dataForApplicationsChart(members){
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
    index.push(`${(i - 1) * 5} - ${i * 5}`)
    barFrequency.push(bar.length)
  }

  return [index, barFrequency]
}

function chartDataApplications(members) {
  return {
    labels: dataForApplicationsChart(members)[0],
    datasets: [
      {
        label: 'Number of applications send by Codaisseur Graduates',
        backgroundColor: 'rgb(82, 45, 168, 0.4)',
        borderColor: 'rgb(82, 45, 168)',
        data: dataForApplicationsChart(members)[1],
      }
    ]
  }
}

const options = {
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
        labelString: 'Number of Applications',
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

module.exports = {chartDataApplications, options, dataForApplicationsChart, numberOfJobsArray, styles, nonActiveMembers, jobsWithApplicationsOnly, round5}