# testcafe-login-automation

This project contains the automated tests for the "login" page using **TestCafe**.
The structure of the project is based on a page object model.

**Installation**

Step1: Ensure that Node.js and npm are installed on your computer. 
Please view https://testcafe.io/documentation/402635/getting-started#installing-testcafe

Step2: Go to terminal and run the following command

npm install -g testcafe

**Running the Test**

1. Specify the target browser & file path and execute the following command to run all the tests.

testcafe chrome ./tests

2. If you want to generate a html report, please use the below command

testcafe chrome ./tests --reporter html:./testreport.html
<img width="920" alt="Screen Shot 2021-09-13 at 3 45 26 PM" src="https://user-images.githubusercontent.com/17180968/133094897-21fdb07c-277a-439f-9973-0fdee23a56d0.png">

3. Please copy the path of the generated file "testreport.html" in your project folder and open in
   the browser to view the test results.

**Documentation**
Go to website for full documentation on TestCafe(https://testcafe.io/)
