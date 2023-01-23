Feature: Employee Apple Leave Functionalities

Scenario: Apple Leave Functionalities of  Employee
Given I am in Landing Page 
When I click on login 
And I will see Employee Login Page "Employee Login"
Then I Enter user id "testpilot@gmail.com"
And I Enter password "1234"
When I click login button 
Then I will see a "Welcome Test"
When I Click Apply leave button
Then I See employee leave Page "Apply Leave Form"
Then I write reason for apply leave "Vacation"
Then I Enter Start Date "01/01/2020"
Then I Enter End Date "12/12/2022"
Then I  click submit button
Then I will refresh Url
Then I will see Apply leave reason "Vacation"
And I will see Status "Pending"





