Feature: Customer Profille Verification Feature 

Descriotion: As a customer 
I want to see my profile page 
So that I can see all my profile information 

Scenario: Login as an Customer 
Given I am in Landing Page 
When I click on login 
And click customer login 
Then I enter User Id "david@gmail.com"
And I enter Password "1234"
When I click Login button 
Then I will see "Welcome David1"
Then I will click my profile 
Then I will see my info "My Info"
Then I will see My First name 
Then I will see My Last name 
Then I will see Email address 
Then I will see Date of Birth 
Then I will see Gender
Then I will see contact number 
Then I will see Address "Address"


