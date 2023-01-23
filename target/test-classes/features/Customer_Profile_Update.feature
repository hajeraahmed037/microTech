Feature: Customer Profile Updte Feature

Discription: As a customer 
I want to update my profile if I need 
So that I can see update information

Scenario: Login as an Customer 
Given I am in Landing Page 
When I click on login 
And click customer login 
Then I enter User Id "david@gmail.com"
And I enter Password "1234"
When I click Login button 
Then I will see "Welcome David1"
Then I will click my profile
Then I will click update info 
Then I will see update coustomer info "Update Customer Info"
And I update contact
And I update address 
Then I will click submit button 
Then I will click refresh url
Then I will see update contact
Then I will see update address
