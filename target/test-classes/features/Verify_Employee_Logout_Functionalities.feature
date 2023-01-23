Feature: Employee logout Functionalities 

Scenario: Verify Employee Logout Functionalites
Given I am in Landing Page 
When I click on login 
And I will see Employee Login Page "Employee Login"
Then I Enter user id "testpilot@gmail.com"
And I Enter password "1234"
When I click login button 
Then I will see a "Welcome Test"
Then I Click Employee Logout button
And I will see Employee Login Page "Employee Login"