# Technical Assignment

<br>

## Prerequisites

---

- [Node.js] **4.2.x** or above installed.
- Have _Node.js_ installation path added to **PATH** environment variable.

<br>

## Installation

---

All need node packages and its dependencies are specified in the `package.json` file located in the repository root. So all you need is to run the following command from the repository root:

```sh
$ npm install
$ npx playwright install
```

<br>

## Execution

---

If you want to execute the tests, you should type the next command in the terminal:
<br>

FRONT Playwright:

```sh
$ npm run playwright
```

BACK:

```sh
$ npm run backend
```

When the Cypress UI starts, double click on the test set you want to run, or click on run all specs to run all of them.
You should run the test on chrome browser (normally preselected)
<br>

## FRONTEND - Scenarios of expected tests

---

We want you to create 1 scenario using the following Playwright projects. You can find the details of the expected steps as follows.<br>
About the "way" of programming:<br>
  - use clear variable names<br>
  - avoid as much as possible hardcoding expected results or inputs<br>
  - feel free to comment those functions you might consider not clear enough by its own name<br>
  - add the assertions you may consider<br><br>

- First Scenario - Playwright:<br>
  
  <br>
  Precondition: You are not logged in<br>

  1. Go to https://www.saucedemo.com/<br>
  2. Log in<br>
  3. Press on the second article to access to the PDP page and verify the article has a title, description and price<br>
  4. Add the article to the cart<br>
  5. Verify the article is added<br>
  6. Proceed with the order until completion<br><br>


<br>

## BACKEND - Scenarios of expected tests

---

We want you to create 1 scenario using this mocha project and the Axios lib. If you never used Axios before, find the documentation here https://www.npmjs.com/package/axios<br>
You can find the details of the expected steps as follows.<br>

About the "way" of programming:<br>
  - use clear variable names<br>
  - avoid as much as possible hardcoding expected results or inputs<br>
  - feel free to comment those functions you might consider not clear enough by its own name<br>
  - add the assertions you consider<br><br>

- Scenario:<br>
  1. Do a GET on https://pokeapi.co/api/v2/pokemon/pikachu<br>
  2. Verify the number of "moves" the pokemon has<br>
  3. Verify the pokemon "types" is "electric"<br>
