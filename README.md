# Preface
- This repository is a continuation by members of Codaisseur class #27 of the "Jobs Board" real world project that was started by members of Codaisseur class #26. The original repo can be found here https://github.com/hastinc/Jobs-Board-Client/tree/master.

## [ Check out the deployed app here!](https://codaisseur-jobs-board.netlify.com)

This is the client repo for our Jobs Board real world project that was made during
weeks 9-10 of Codaisseur.

## Table of contents

- [Technologies used](#Technologies-used)
- [Goals for this project](#Goals-for-this-project)
- [Setup](#Setup)
- [Our git workflow](#Our-git-workflow)
- [Create React App](#Create-React-App)
- [Suggestions](#Suggestions)
- [Fixes](#Fixes)
- [Contributors](#Contributors)

## Technologies used
- React
- Redux
- Redux-Thunk

## Goals for this project
The overall goal for this project was to provide a tool to Codaisseur graduates
whereby they could gain useful information regarding job applications. The app
will allow graduates to gain insight into previous graduates experiences when 
applying to companies in the Netherlands. More precisely, the app gives a basic
overview such as, how many previous graduates have applied to a company, whether 
they had an interview, and whether they got hired. The app also gives an 
overview of how many applications and interviews it takes on average to get a job 
offer.

In  order to do this we used the [Huntr API](https://docs.huntr.co/) for previous
graduates data and we used a basic web scraper to pull job postings from 
[Indeed](https://www.npmjs.com/package/indeed-scraper). Because the Huntr API doesn't filter out duplicate/similar company names we decided to copy all the companies from the Huntr API into our own database and write an algorithm that takes out the duplicates and merges their information.


## Setup
In order to run this App please ensure you have the server running as well. 
Instructions on how to do that may be found [here](https://github.com/hastinc/Jobs-Board-Server)
- git clone
- npm install
- npm run start

## Our git workflow

Here is our branching model for this project.

```
master (auto deploys) ______________________
                       \               /
development             \_____________/- pull request
                         \           /
feature/some-feature      \_commits_/- pull request
```

## Create React App

This project was scaffolded using the create-react-app cli. 

**[The standard create-react-app docs can be found in here](https://github.com/facebook/create-react-app)**

## Suggestions
This is just a basic list of suggestion we've thought of if any future class 
was to take on this project and build on it.

Job Search - Job search capability is rather limited by Indeed. We would suggest trying 
to find a better API in order to make requests for Job postings if you were 
to continue with the jobs board feature of the App. A suggestion to take a 
look at would be [Glassdoor](https://www.glassdoor.nl/). They have an API for 
which you'd need to register and they have a pretty decent search engine and the 
other information they have on companies would really help improve 
functionality ie, interview process, jobs posted, general reviews of 
companies etc.

Presentational - Since we’ve called this the Codaisseur Job Board it would be nice to 
use their theme see links [here](https://github.com/Codaisseur/codaisseur-theme)
and [here](https://zeroheight.com/79edbfdc5/p/52d824)
Apparently it’s a nifty little Material UI package that would be nice to implement

Web Hooks - Implement Web Hooks with the Huntr API. This would update the Apps 
database every-time a graduate inputs new data. This way you would 
populate the database only once. Implementing Web Hooks would take care 
of keeping it up to date [link](https://docs.huntr.co/).

Graphs - There’s quite a nice charting package called ChartsJS. We saw it being used by one of our fellow classmates and it looked slick! Maybe take a look?
[link](https://www.chartjs.org/)

## Fixes
- When you click a job to view the details and then refresh, it breaks!!!!

## Contributors
Tiago Barros - [limadebarros](https://github.com/limadebarros)

Cathal Hastings - [hastinc](https://github.com/hastinc)

Hager Hussein - [hagerhussein](https://github.com/hagerhussein)

Dave Mollen - [davemollen](https://github.com/davemollen)
