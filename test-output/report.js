$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Customer_Logout_Functionalities.feature");
formatter.feature({
  "name": "Verify Customer Login Functionalities",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Login as an Customer",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am in Landing Page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.Landing_Page_Logo.i_am_in_Landing_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on login",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.Customer_Profile_Login_Page.i_click_on_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click customer login",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.Customer_Profile_Login_Page.click_customer_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter User Id \"david@gmail.com\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Customer_Profile_Login_Page.i_enter_User_Id(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Password \"1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.Customer_Profile_Login_Page.i_enter_Password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Login button",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.Customer_Profile_Login_Page.i_click_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will see \"Welcome David1\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Customer_Profile_Login_Page.i_will_see(java.lang.String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003cWelcome David[]\u003e but was:\u003cWelcome David[1]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat stepDefinitions.Customer_Profile_Login_Page.i_will_see(Customer_Profile_Login_Page.java:47)\r\n\tat ✽.I will see \"Welcome David1\"(file:///C:/java/workspace_framWork/page_object_model/src/test/resources/features/Customer_Logout_Functionalities.feature:10)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I Click Logout button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Customer_Logout_Functionalities.i_Click_Logout_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I see Customer Login Page \"Customer Login\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Customer_Logout_Functionalities.i_see_Customer_Login_Page(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/Customer_Order_List_Functionalities.feature");
formatter.feature({
  "name": "Customer Order List Functiomalities",
  "description": "Description: As a Customer \nI want to see update product order on the order list page \nSo that I can confirm my order",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Login as an Customer",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am in Landing Page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.Landing_Page_Logo.i_am_in_Landing_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on login",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.Customer_Profile_Login_Page.i_click_on_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click customer login",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.Customer_Profile_Login_Page.click_customer_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter User Id \"david@gmail.com\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Customer_Profile_Login_Page.i_enter_User_Id(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Password \"1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.Customer_Profile_Login_Page.i_enter_Password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Login button",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.Customer_Profile_Login_Page.i_click_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will see \"Welcome David1\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Customer_Profile_Login_Page.i_will_see(java.lang.String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003cWelcome David[]\u003e but was:\u003cWelcome David[1]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat stepDefinitions.Customer_Profile_Login_Page.i_will_see(Customer_Profile_Login_Page.java:47)\r\n\tat ✽.I will see \"Welcome David1\"(file:///C:/java/workspace_framWork/page_object_model/src/test/resources/features/Customer_Order_List_Functionalities.feature:14)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I click order list button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Customer_Order_List_Functionalities.i_click_order_list_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I see order list Page \"Order List\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Customer_Order_List_Functionalities.i_see_order_list_Page(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/Customer_Product_order_page.feature");
formatter.feature({
  "name": "Customer Product Order Page",
  "description": "Description: As a Customer \nI want to order a Product \nSo that I can Order a Product ",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Login as an Customer",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am in Landing Page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.Landing_Page_Logo.i_am_in_Landing_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on login",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.Customer_Profile_Login_Page.i_click_on_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click customer login",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.Customer_Profile_Login_Page.click_customer_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter User Id \"david@gmail.com\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Customer_Profile_Login_Page.i_enter_User_Id(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Password \"1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.Customer_Profile_Login_Page.i_enter_Password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Login button",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.Customer_Profile_Login_Page.i_click_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will see \"Welcome David1\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Customer_Profile_Login_Page.i_will_see(java.lang.String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003cWelcome David[]\u003e but was:\u003cWelcome David[1]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat stepDefinitions.Customer_Profile_Login_Page.i_will_see(Customer_Profile_Login_Page.java:47)\r\n\tat ✽.I will see \"Welcome David1\"(file:///C:/java/workspace_framWork/page_object_model/src/test/resources/features/Customer_Product_order_page.feature:14)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I will click Order Product",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Customer_Product_order_page.i_will_click_Order_Product()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I select product",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Customer_Product_order_page.i_select_product()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I enter order date",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.Customer_Product_order_page.i_enter_order_date()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click order product button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Customer_Product_order_page.i_click_order_product_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I see order list Page \"Order List\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Customer_Order_List_Functionalities.i_see_order_list_Page(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click confirm button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Customer_Product_order_page.i_click_confirm_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "refresh url",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Customer_Product_order_page.refresh_url()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I will see \"Confirmed\" status",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Customer_Product_order_page.i_will_see_status(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/Customer_Profile_Login_Page.feature");
formatter.feature({
  "name": "Customer Profile Login Page",
  "description": "Description: as a Customer \nI want to login with a uer id and password \nSo that I can see the customer home page ",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Login as an Customer",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am in Landing Page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.Landing_Page_Logo.i_am_in_Landing_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on login",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.Customer_Profile_Login_Page.i_click_on_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click customer login",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.Customer_Profile_Login_Page.click_customer_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter User Id \"david@gmail.com\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Customer_Profile_Login_Page.i_enter_User_Id(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Password \"1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.Customer_Profile_Login_Page.i_enter_Password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Login button",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.Customer_Profile_Login_Page.i_click_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will see \"Welcome David1\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Customer_Profile_Login_Page.i_will_see(java.lang.String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003cWelcome David[]\u003e but was:\u003cWelcome David[1]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat stepDefinitions.Customer_Profile_Login_Page.i_will_see(Customer_Profile_Login_Page.java:47)\r\n\tat ✽.I will see \"Welcome David1\"(file:///C:/java/workspace_framWork/page_object_model/src/test/resources/features/Customer_Profile_Login_Page.feature:14)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/Customer_Profile_Update.feature");
formatter.feature({
  "name": "Customer Profile Updte Feature",
  "description": "Discription: As a customer \nI want to update my profile if I need \nSo that I can see update information",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Login as an Customer",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am in Landing Page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.Landing_Page_Logo.i_am_in_Landing_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on login",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.Customer_Profile_Login_Page.i_click_on_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click customer login",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.Customer_Profile_Login_Page.click_customer_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter User Id \"david@gmail.com\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Customer_Profile_Login_Page.i_enter_User_Id(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Password \"1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.Customer_Profile_Login_Page.i_enter_Password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Login button",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.Customer_Profile_Login_Page.i_click_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will see \"Welcome David1\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Customer_Profile_Login_Page.i_will_see(java.lang.String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003cWelcome David[]\u003e but was:\u003cWelcome David[1]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat stepDefinitions.Customer_Profile_Login_Page.i_will_see(Customer_Profile_Login_Page.java:47)\r\n\tat ✽.I will see \"Welcome David1\"(file:///C:/java/workspace_framWork/page_object_model/src/test/resources/features/Customer_Profile_Update.feature:14)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I will click my profile",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Customer_Profile_Verification.i_will_click_my_profile()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I will click update info",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Customer_Profile_Update.i_will_click_update_info()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I will see update coustomer info \"Update Customer Info\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Customer_Profile_Update.i_will_see_update_coustomer_info(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I update contact",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.Customer_Profile_Update.i_update_contact()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I update address",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.Customer_Profile_Update.i_update_address()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I will click submit button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Customer_Profile_Update.i_will_click_submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I will click refresh url",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Customer_Profile_Update.i_will_click_refresh_url()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I will see update contact",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Customer_Profile_Update.i_will_see_update_contact()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I will see update address",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Customer_Profile_Update.i_will_see_update_address()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/Customer_Profile_Verification.feature");
formatter.feature({
  "name": "Customer Profille Verification Feature",
  "description": "Descriotion: As a customer \nI want to see my profile page \nSo that I can see all my profile information ",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Login as an Customer",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am in Landing Page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.Landing_Page_Logo.i_am_in_Landing_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on login",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.Customer_Profile_Login_Page.i_click_on_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click customer login",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.Customer_Profile_Login_Page.click_customer_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter User Id \"david@gmail.com\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Customer_Profile_Login_Page.i_enter_User_Id(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Password \"1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.Customer_Profile_Login_Page.i_enter_Password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Login button",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.Customer_Profile_Login_Page.i_click_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will see \"Welcome David1\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Customer_Profile_Login_Page.i_will_see(java.lang.String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003cWelcome David[]\u003e but was:\u003cWelcome David[1]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat stepDefinitions.Customer_Profile_Login_Page.i_will_see(Customer_Profile_Login_Page.java:47)\r\n\tat ✽.I will see \"Welcome David1\"(file:///C:/java/workspace_framWork/page_object_model/src/test/resources/features/Customer_Profile_Verification.feature:14)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I will click my profile",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Customer_Profile_Verification.i_will_click_my_profile()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I will see my info \"My Info\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Customer_Profile_Verification.i_will_see_my_info(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I will see My First name",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Customer_Profile_Verification.i_will_see_My_First_name()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I will see My Last name",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Customer_Profile_Verification.i_will_see_My_Last_name()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I will see Email address",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Customer_Profile_Verification.i_will_see_Email_address()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I will see Date of Birth",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Customer_Profile_Verification.i_will_see_Date_of_Birth()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I will see Gender",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Customer_Profile_Verification.i_will_see_Gender()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I will see contact number",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Customer_Profile_Verification.i_will_see_contact_number()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I will see Address \"Address\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Customer_Profile_Verification.i_will_see_Address(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/Customer_login_Invalid_password_page.feature");
formatter.feature({
  "name": "Invalid password massage shown in login page",
  "description": "Discription: As a Customer \nI want to enter wrong ID\u0026 Password \nSo that I cann\u0027t open Customer profile with wrong password ",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Login as an Customer",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am in Landing Page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.Landing_Page_Logo.i_am_in_Landing_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on login",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.Customer_Profile_Login_Page.i_click_on_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click customer login",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.Customer_Profile_Login_Page.click_customer_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter User Id \"david@gmail.com\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Customer_Profile_Login_Page.i_enter_User_Id(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Password \"12345\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.Customer_Profile_Login_Page.i_enter_Password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Login button",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.Customer_Profile_Login_Page.i_click_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will verfiy \"Invalid username or password!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Customer_login_Invalid_password_page.i_will_verfiy(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/Employee_Apply_leave_functionalities.feature");
formatter.feature({
  "name": "Employee Apple Leave Functionalities",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Apple Leave Functionalities of  Employee",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am in Landing Page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.Landing_Page_Logo.i_am_in_Landing_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on login",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.Customer_Profile_Login_Page.i_click_on_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will see Employee Login Page \"Employee Login\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.Employee_login.i_will_see_Employee_Login_Page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Enter user id \"testpilot@gmail.com\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Employee_login.i_Enter_user_id(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Enter password \"1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.Employee_login.i_Enter_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click login button",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.Employee_login.i_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will see a \"Welcome Test\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Employee_login.i_will_see_a(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Click Apply leave button",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.Employee_Apply_leave_functionalities.i_Click_Apply_leave_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I See employee leave Page \"Apply Leave Form\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Employee_Apply_leave_functionalities.i_See_employee_leave_Page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I write reason for apply leave \"Vacation\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Employee_Apply_leave_functionalities.i_write_reason_for_apply_leave(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Enter Start Date \"01/01/2020\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Employee_Apply_leave_functionalities.i_Enter_Start_Date(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Enter End Date \"12/12/2022\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Employee_Apply_leave_functionalities.i_Enter_End_Date(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I  click submit button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Employee_Apply_leave_functionalities.i_click_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will refresh Url",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Employee_Apply_leave_functionalities.i_will_refresh_Url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will see Apply leave reason \"Vacation\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Employee_Apply_leave_functionalities.i_will_see_Apply_leave_reason(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will see Status \"Pending\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.Employee_Apply_leave_functionalities.i_will_see_Status(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/Employee_Invalid_password_Verification.feature");
formatter.feature({
  "name": "Employee Invalid Username and Password Verification",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Employee Invalid Username and Password",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am in Landing Page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.Landing_Page_Logo.i_am_in_Landing_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on login",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.Customer_Profile_Login_Page.i_click_on_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will see Employee Login Page \"Employee Login\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.Employee_login.i_will_see_Employee_Login_Page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Enter user id \"testpilot@gmail.com\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Employee_login.i_Enter_user_id(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Enter password \"12345\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.Employee_login.i_Enter_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click login button",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.Employee_login.i_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will see invaild usId\u0026Password \"Invalid username or password!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Employee_Invalid_password_Verification.i_will_see_invaild_usId_Password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/Employee_Profile_Update.feature");
formatter.feature({
  "name": "Employee Profile update verification",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Login as an Employee",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am in Landing Page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.Landing_Page_Logo.i_am_in_Landing_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on login",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.Customer_Profile_Login_Page.i_click_on_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will see Employee Login Page \"Employee Login\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.Employee_login.i_will_see_Employee_Login_Page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Enter user id \"testpilot@gmail.com\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Employee_login.i_Enter_user_id(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Enter password \"1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.Employee_login.i_Enter_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click login button",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.Employee_login.i_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will see a \"Welcome Test\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Employee_login.i_will_see_a(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click My Profile button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Employee_Profile_Verification.i_click_My_Profile_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will seen \"My Info\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Employee_Profile_Verification.i_will_seen(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will click update info button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Employee_Profile_Update.i_will_click_update_info_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see Employee Page \"Update Employee Info\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Employee_Profile_Update.i_see_Employee_Page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will update contact \"20202020\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.Employee_Profile_Update.i_will_update_contact(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will Update address \"Buffalo\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.Employee_Profile_Update.i_will_Update_address(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will click a submit button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Employee_Profile_Update.i_will_click_a_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click refresh url",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Employee_Profile_Update.i_click_refresh_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will see Employee update contact \"20202020\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Employee_Profile_Update.i_will_see_Employee_update_contact(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will see Employee update address \"Buffalo\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Employee_Profile_Update.i_will_see_Employee_update_address(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/Employee_Profile_Verification.feature");
formatter.feature({
  "name": "Employee profile verification",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Login as an Employee",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am in Landing Page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.Landing_Page_Logo.i_am_in_Landing_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on login",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.Customer_Profile_Login_Page.i_click_on_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will see Employee Login Page \"Employee Login\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.Employee_login.i_will_see_Employee_Login_Page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Enter user id \"testpilot@gmail.com\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Employee_login.i_Enter_user_id(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Enter password \"1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.Employee_login.i_Enter_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click login button",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.Employee_login.i_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will see a \"Welcome Test\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Employee_login.i_will_see_a(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click My Profile button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Employee_Profile_Verification.i_click_My_Profile_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will seen \"My Info\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Employee_Profile_Verification.i_will_seen(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/Employee_login.feature");
formatter.feature({
  "name": "Employee login",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Login as Employee",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am in Landing Page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.Landing_Page_Logo.i_am_in_Landing_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on login",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.Customer_Profile_Login_Page.i_click_on_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will see Employee Login Page \"Employee Login\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.Employee_login.i_will_see_Employee_Login_Page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Enter user id \"testpilot@gmail.com\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Employee_login.i_Enter_user_id(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Enter password \"1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.Employee_login.i_Enter_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click login button",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.Employee_login.i_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will see a \"Welcome Test\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Employee_login.i_will_see_a(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/Employee_order_list_page_verification.feature");
formatter.feature({
  "name": "Employee order list verification",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Order List Verification of Employee",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am in Landing Page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.Landing_Page_Logo.i_am_in_Landing_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on login",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.Customer_Profile_Login_Page.i_click_on_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will see Employee Login Page \"Employee Login\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.Employee_login.i_will_see_Employee_Login_Page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Enter user id \"testpilot@gmail.com\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Employee_login.i_Enter_user_id(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Enter password \"1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.Employee_login.i_Enter_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click login button",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.Employee_login.i_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will see a \"Welcome Test\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Employee_login.i_will_see_a(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Click order List button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Employee_order_list_page_verification.i_Click_order_List_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will see order prouct list page \"Order Date\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Employee_order_list_page_verification.i_will_see_order_prouct_list_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/Employee_product_order_page_verification.feature");
formatter.feature({
  "name": "Employee product order verification",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "product order Verification of Employee",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am in Landing Page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.Landing_Page_Logo.i_am_in_Landing_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on login",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.Customer_Profile_Login_Page.i_click_on_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will see Employee Login Page \"Employee Login\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.Employee_login.i_will_see_Employee_Login_Page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Enter user id \"testpilot@gmail.com\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Employee_login.i_Enter_user_id(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Enter password \"1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.Employee_login.i_Enter_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click login button",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.Employee_login.i_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will see a \"Welcome Test\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Employee_login.i_will_see_a(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Order Product button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Employee_product_order_page_verification.i_click_Order_Product_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see order product page \"Order Product\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Employee_product_order_page_verification.i_see_order_product_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/Landing_page.feature");
formatter.feature({
  "name": "Landing Page Logo",
  "description": "Description:\nAs a Customer\nI want to see landing page\nSo that I can login company website",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify Landing Page Logo",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am in Landing Page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.Landing_Page_Logo.i_am_in_Landing_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify Landing Page Logo Text \"Welcome to MicroTech NA.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Landing_Page_Logo.verify_Landing_Page_Logo_Text(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/Verify_Employee_Logout_Functionalities.feature");
formatter.feature({
  "name": "Employee logout Functionalities",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify Employee Logout Functionalites",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am in Landing Page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.Landing_Page_Logo.i_am_in_Landing_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on login",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.Customer_Profile_Login_Page.i_click_on_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will see Employee Login Page \"Employee Login\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.Employee_login.i_will_see_Employee_Login_Page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Enter user id \"testpilot@gmail.com\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Employee_login.i_Enter_user_id(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Enter password \"1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.Employee_login.i_Enter_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click login button",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.Employee_login.i_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will see a \"Welcome Test\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Employee_login.i_will_see_a(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Click Employee Logout button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Verify_Employee_Logout_Functionalities.i_Click_Employee_Logout_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will see Employee Login Page \"Employee Login\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.Employee_login.i_will_see_Employee_Login_Page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});