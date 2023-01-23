Feature: Verify Customer Login Functionalities

Scenario: Login as an Customer
Given I am in Landing Page 
When I click on login 
And click customer login 
Then I enter User Id "david@gmail.com"
And I enter Password "1234"
When I click Login button 
Then I will see "Welcome David1"
Then I Click Logout button 
Then I see Customer Login Page "Customer Login"
