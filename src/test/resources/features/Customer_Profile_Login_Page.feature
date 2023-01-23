Feature: Customer Profile Login Page

Description: as a Customer 
I want to login with a uer id and password 
So that I can see the customer home page 

Scenario: Login as an Customer 
Given I am in Landing Page 
When I click on login 
And click customer login 
Then I enter User Id "david@gmail.com"
And I enter Password "1234"
When I click Login button 
Then I will see "Welcome David1"