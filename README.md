# Getting Started with Would-You-Rather App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How To Run

In the project directory, you can run:

### `npm i`

<p>Run "npm i"To install all dependencies included in "package.json" file.<p>
<p>All the dependencies of the project will be installed in node_modules folder.<p>

#### Example
* Open window terminal 
* Type "cd+[App Directory]"
* Example "cd D:/Web-Projects/would-you-rather"
* Then type "npm i" 

### `npm start`
* Open window terminal 
* Type cd+[App Directory]
* Eaxmple "cd D:/Web-Projects/would-you-rather"
* Type "npm start" to start the App

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## App Description
### `Overview`
"Would-You-Rather", a web app that lets a user play the “Would You Rather?” game. The game goes like this: A user is asked a question in the form: “Would you rather [option A] or [option B] ?”. Answering "neither" or "both" is against the rules. In the app, users will be able to answer questions, see which questions they haven’t answered, see how other people have voted, post questions, and see the ranking of users on the leaderboard
### `Functionality`
Once the user logs in, the user should be able to toggle between his/her answered and unanswered polls on the home page, which is located at the root. The polls in both categories are arranged from the most recently created (top) to the least recently created (bottom). The unanswered questions should be shown by default, and the name of the logged in user should be visible on the page. 



So what happens when someone votes in a poll? Upon voting in a poll, all of the information of an answered poll should be displayed. The user’s response should be recorded and clearly visible on the poll details page. Users can only vote once per poll; they shouldn’t be allowed to change their answer after they’ve voted -- no cheating allowed! When the user comes back to the home page, the polling question should appear in the “Answered” column. 
