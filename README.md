# Weather-App

In this project, the user can search any city to look up its weather.
Once they send a request with a specific city, the website displays its weather and icon associating with the weather.

In the background, the app sends a GET HTTPS request openweathermap.org to obtain necessary data.
Once the data is send back from openweathermap.org, the program parses the data to JS objects to read and displays on a web page.

**Used languages**
* HTML
* JavaScript

**Used NPM Packages**
* express (built-in https module as well)
* body-parser