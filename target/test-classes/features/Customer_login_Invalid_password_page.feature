Feature: Invalid password massage shown in login page

Discription: As a Customer 
I want to enter wrong ID& Password 
So that I cann't open Customer profile with wrong password 

Scenario: Login as an Customer
Given I am in Landing Page 
When I click on login 
And click customer login 
Then I enter User Id "david@gmail.com"
And I enter Password "12345"
When I click Login button
Then I will verfiy "Invalid username or password!"