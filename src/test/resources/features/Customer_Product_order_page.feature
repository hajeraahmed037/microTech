Feature: Customer Product Order Page 

Description: As a Customer 
I want to order a Product 
So that I can Order a Product 

Scenario: Login as an Customer 
Given I am in Landing Page 
When I click on login 
And click customer login 
Then I enter User Id "david@gmail.com"
And I enter Password "1234"
When I click Login button 
Then I will see "Welcome David1"
Then I will click Order Product 
Then I select product 
And I enter order date 
Then I click order product button 
Then I see order list Page "Order List"
Then I click confirm button 
Then refresh url 
Then I will see "Confirmed" status
                           