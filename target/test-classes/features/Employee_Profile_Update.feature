Feature: Employee Profile update verification 

Scenario: Login as an Employee
Given I am in Landing Page 
When I click on login 
And I will see Employee Login Page "Employee Login"
Then I Enter user id "testpilot@gmail.com"
And I Enter password "1234"
When I click login button 
Then I will see a "Welcome Test"
Then I click My Profile button 
Then I will seen "My Info"
Then I will click update info button 
Then I see Employee Page "Update Employee Info"
And I will update contact "20202020"
And I will Update address "Buffalo"
Then I will click a submit button 
Then I click refresh url 
Then I will see Employee update contact "20202020"
Then I will see Employee update address "Buffalo"


