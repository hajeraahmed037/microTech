Feature: Customer Order List Functiomalities

Description: As a Customer 
I want to see update product order on the order list page 
So that I can confirm my order

Scenario: Login as an Customer
Given I am in Landing Page 
When I click on login 
And click customer login 
Then I enter User Id "david@gmail.com"
And I enter Password "1234"
When I click Login button 
Then I will see "Welcome David1"
Then I click order list button 
Then I see order list Page "Order List"