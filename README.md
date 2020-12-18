# Prince Gorge's County Governement Spending

**Project Purpose:** Government budget allocation is a complicated process of deciding how much is spent and where. The purpose of this application will be to reduce the complexity of the process so that both the government can analyse its spending and the average person can understand where the government spends its money. In addition, this application will provide transparency for the Prince George’s County government’s budget distribution. 

**Target Browsers:** 
* Safari
* Goole Chrome
* iOS 
* Android

**User Manual Link:**


**Developer Manual Link:**




## Developer Manual


Running the application on a server:
To operate the application first start a local server using Node by entering "npm run start-watch" into the terminal. From there enter "http://localhost:4000/index.html" into a new browser windo. This will bring you to the front page of the application.

API:
The api used in this application is from https://data.princegeorgescountymd.gov/resource/uh6s-izyj.json . This API contains information on the spending of Prince Georges County. The shape of the api is a list of objects with information on the zipcode, agency, amount, payee name, and payment description. In the api.js file, teh data is fetched from the api using a GET method. The data is then filtered using input from the user. The user can filter using the zip code, payee name, or agency. The filtered data is then displayed on the screen as a list.

