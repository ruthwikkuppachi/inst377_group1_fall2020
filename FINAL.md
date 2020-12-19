# Final Report

**Title:** Prince George's County Government Spending 

**Team Members:**
Maya Brenner, John Henrici, Anuj Shahi, Ruthwik Kuppachi, Brandon Cantey

**Problem**
The problem we are attempting to solve deals with budget allocation within Prince George's County government as it is a complicated process when deciding how much money is distributed and where it goes. 

**Stakeholders**

* Head Officials of the PG County Government
* Residents of PG County

**Target Browsers**

* Safari
* Google Chrome
* iOS
* Android

**Data**
The API that we are working with for this project is on the government spending for the year of 2020 in PG County, we chose to use this API because we want to essentially create a tool that is useful for the county government as well as those who are a residence of the county, this tool will allow them to analyze the government spending across different agencies. 

The data we will be using is Spending Information for FY 2020. This dataset describes Prince George’s County government’s spending for the 2020 fiscal year with columns such as zip code and agency.

The data used was obtained from Prince George’s County open data portal, [Spending Information for FY 2020 | Open Data | Socrata](https://data.princegeorgescountymd.gov/Finance-and-Budget/Spending-Information-for-FY-2020/uh6s-izyj)


**Chosen Stratgies and Solutions**

To create this application, we decided to allow the user the ability to filter by three different categories. This allows the user to be able to refine the displayed data. To do this, we 

**Technical System Decision Rationale**

Our solution helps address the problem at hand because it helps the user identify areas where there is too little and too much funding for a particular agency within PG County. In the perspective of a PG county goverment official they are able to adjust monetary funding for certain areas where it is needed more in comparison to other areas who are overly funded. 

**Challenges Faced**

The most challenging part of this project was probably in the backend, particularly with the API. We had some trouble deciding on how to approach connecting the Prince George's json file to the aplication. At first we were going to use express and sqlite3 to retrieve data from the api and store it in a sql file that could be queried. Instead of that, we decided to use session data to go through the api and display the filtered data. This method still filters the data, but it skips the process of creating a local database and querying it like it would have with sqlite3.

**Possible future work**

In the future for this system developers develop look into implementing instances data visualizations of the researched data, so that the users are able to get a better picture of budget allocation with the help of charts and graphs. Also hopefully in the future we could expand beyond PG County, it is a plan to eventually create a tool like this for all counties within theys state of Mayrland. 
