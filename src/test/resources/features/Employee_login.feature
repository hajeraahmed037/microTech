Feature: Employee login 

Scenario: Login as Employee 
Given I am in Landing Page 
When I click on login 
And I will see Employee Login Page "Employee Login"
Then I Enter user id "testpilot@gmail.com"
And I Enter password "1234"
When I click login button 
Then I will see a "Welcome Test"

