![By Miles Skills Assessments](https://images.bymiles.co.uk/images-by-miles/by-miles-logo-clear-350x160.png)

# Jonathan Dawson submission of QA Engineer 

## Part 1 - Approach to testing 

Answered in accompanying email 

## Part 2 - UI automation testing

Solution was built using [cypress.io](https://www.cypress.io/). 

### Installation

1. Clone this repository into your local directory
1. Initialise the directory using `npm init` or ensure you have a **node_modules** folder or **package.json** file in the root of your project
1. Install cypress via npm:
   ```sh
   $ cd /your/project/path`
   $ npm install cypress --save-dev
   ```
   *Note: For other installation methods like yarn or direct download, click [here](https://docs.cypress.io/guides/getting-started/installing-cypress.html#Installing).* 
1. If you used npm to install, Cypress has now been installed to your *./node_modules* directory, with its binary executable accessible from *./node_modules/.bin*.
   Open Cypress Test Runner the long way using the full path:
   ```sh
   $ ./node_modules/.bin/cypress open
   ```
   Or with the shortcut using npm bin
   ```sh
   $ $(npm bin)/cypress open
   ```
   After a moment, the Cypress Test Runner will launch.
1. Copy the **bymiles-spec.js** file into *solution/cypress/integration*. The file should automatically appear in Cypress Test Runner. 
1. Click on the file in the Test Runner to run the solution. 