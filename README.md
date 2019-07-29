# Preface
- This repository is a continuation by members of Codaisseur class #27 of the "Jobs Board" real world project that was started by members of Codaisseur class #26. The original repo can be found here https://github.com/hastinc/Jobs-Board-Client/tree/master.

## [Check out the deployed app here!](https://jobs-board-client.herokuapp.com)

This is the client repo for our Jobs Board real world project that was made during
weeks 9-10 of Codaisseur.

## Table of contents

- [Technologies used](#Technologies-used)
- [Goals for this project](#Goals-for-this-project)
- [Setup](#Setup)
- [Our git workflow](#Our-git-workflow)
- [Create React App](#Create-React-App)
- [Suggestions](#Suggestions)
- [Contributors](#Contributors)

## Technologies used
- React
- Redux
- Redux-Thunk
- [React wrapper for Chart.js](https://github.com/jerairrest/react-chartjs-2)

## Goals for this project
The overall goal for this project was to provide a tool to Codaisseur graduates
whereby they could gain useful information regarding job applications. The app
will allow graduates to gain insight into previous graduates experiences when 
applying to companies in the Netherlands. More precisely, the app gives a basic
overview such as, how many previous graduates have applied to a company, whether 
they had an interview, and whether they got hired. 

In  order to do this we used the [Huntr API](https://docs.huntr.co/) for previous
graduates data and job postings.

One of the main goals in the continuation of this project was to implement a [Webhook](https://docs.huntr.co/) with the Huntr API, so the database of the app would update automatically everytime a graduate inputs new data.

Another goal was to scrap the job postings from [Indeed](https://www.npmjs.com/package/indeed-scraper) from the previous group, and replace the job postings with data from the Huntr API. 

For a better user experiece we implemented more filter options when searching for an overview of a company,
and changed the display of graduates data of a company to display statistics directly on a card for an easier overview. 
We also added a graduates page with a chart displaying how many applications and interviews it takes on average to get a job offer.


## Setup
In order to run this App please ensure you have the server running as well. 
Instructions on how to do that may be found [here](https://github.com/Official-Codaisseur-Graduate/Jobs-Board-Server)
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

For suggestions, unfinished userstories and issues you can have a look at the [Jobs Board](https://github.com/orgs/Official-Codaisseur-Graduate/projects/3) project board.

## Contributors

Class #27

Jetske van der Wouden - [JetskevdWouden](https://github.com/JetskevdWouden)

Tatiany Costa - [TatyCris](https://github.com/TatyCris)

Marlon Palpa - [malanchito](https://github.com/malanchito)

Alina Beglarian - [alinabeglarian](https://github.com/alinabeglarian)


Class #26

Tiago Barros - [limadebarros](https://github.com/limadebarros)

Cathal Hastings - [hastinc](https://github.com/hastinc)

Hager Hussein - [hagerhussein](https://github.com/hagerhussein)

Dave Mollen - [davemollen](https://github.com/davemollen)
