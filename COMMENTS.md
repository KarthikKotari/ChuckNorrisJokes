# Chuck Norris Jokes

A react application displaying Chuck Norris jokes

# The song "Final Countdown" is about a man's last second after being roundhouse kicked by Chuck Norris.

## Architecture

We have a ChucksHome component which is the home component, that calls ChucksCategory to display the different categories of Jokes from https://api.chucknorris.io. Then, there is a detail component, which is called when one of these categories is clicked and it fetches a random joke from the category clicked on and displays it like a card. There is also a search component, which when used fetches all the matching results from the search and displays them in a new page. The app is responsive and uses a few third party, external libraries (library section).

For more details on each component, check the components section.

## Components

- Header.jsx : It is the navbar, with a Home tab and a search box. There's a logo and a static text on one end.
- ChucksHome.jsx : This is the home page, this is what is rendered when the app is first opened, it calls the ChucksCategory component to display the fetched categories. Fetches the data from https://api.chucknorris.io/jokes/categories.
  Ohh yes, the naming is bad? Did you think Chucks Norris' jokes are bad? ;)
- ChucksCategory.jsx : It is called by ChucksHome to display the values in a presentable way.
- CategoryDetails.jsx : The details when a category is clicked on, are displayed here. It fetches a random joke from https://api.chucknorris.io/jokes/random?category={category} and displays it. You can also navigate to the actual page of that joke from the link.
- SearchCategory.jsx : There is also a search functionality. When some text is entered and submitted, the Header component which contains the search button triggers this class ultimately. Then, the data is fetched from https://api.chucknorris.io/jokes/search?query={query} and all the matches are presented. Again, each of the jokes can be navigated to from the links in their respective cards.

## Libraries

A few external libraries have been used.

- Axios : This is a simple promise based HTTP client. It is quite simple and straight forward, thus my obvious choice. Read more here: https://axios-http.com/docs/intro

  ### yarn add axios

  ### import Axios from "axios";

  ### axios.get().then();

- React-router-dom : A library which helps with routing. Using these versions react-router-dom@5.2.0 , react-router@5.2.0 since that's what I am used to. The newer versions have different syntaxes.

  ### yarn add react-router-dom@5.2.0 react-router@5.2.0;

  ### import { BrowserRouter, Route } from "react-router-dom";

- Query-string : Using this library to parse the data, it is quite simple and effective.

  ### yarn add query-string;

  ### import queryString from "query-string";

  ### queryString.parse();

- Memory : This library was needed to format the date.There are quite a few libraries, but I just chose this and it worked. :)
  ### yarn add moment --save;
  ### import Moment from "moment";
  ### Moment(date).format("DD-MM-YYYY HH:mm:ss")

## LifeCycle Functions

- componentDidMount() : Called once intitially.
- componentDidUpdate() : Called on update. Was needed when a search is done and a new search happens, the change should be notified.

## Future enhancements - More time, More Joy!

- The search functionality needs error handling , a simple code to check if there is any data returned and only then we can call this div to display the results, otherwise show them a message saying search didn't result in any matches. Yes, No Chuck Norris Jokes!!!
- Now, the search after submitting is not cleared automatically, a user has to hit 'x'. This should be cleared automatically onSubmit(). We can implement this by using hooks and {useState} and setting the value of the input to state,which should be set to empty onSubmit();
- The navbar can be more better, now when you resize it the search and home are aligned below each other. I would rather have a button when mimised which when clicked displays these two. Some bottstrap code should fix this.
- The whole web page in general needs to be more lively, after all its Chuck Norris Jokes. Some more css to make everything look better.
- Maybe an animation on the logo on the navbar
- The pictures fetched are strected a bit, maybe display them in their original size?

## Problems Faced

- The first issue was with routing, used a newer version of react-router and that did not work work, had to downgrade to an older version.
- Started off with a different idea with search, that did not go so well and made everything cluttery. But, later switched to another idea and it worked.
- Too many date formatting libraries, too much information, took a few different tries to get it working, at the end it was very simple.
