package stepDefinitions;

import static org.junit.Assert.assertEquals;

import base.Base;
import io.cucumber.java.en.Then;
import pages.Customer_Home_page;
import pages.Customer_My_Profile_Page;

public class Customer_Profile_Verification extends Base{

	Customer_Home_page customer_Home_page =new Customer_Home_page();
	Customer_My_Profile_Page customer_My_Profile_Page =  new Customer_My_Profile_Page();
	
	
	
	
@Then("I will click my profile")
public void i_will_click_my_profile() {
	customer_Home_page.click_my_profile();
	}


@Then("I will see my info {string}")
public void i_will_see_my_info(String expectedMsg) {
      String actualMsg = customer_My_Profile_Page.get_My_Info();
      assertEquals(actualMsg,expectedMsg);
}

@Then("I will see My First name")
public void i_will_see_My_First_name() {
  boolean s = customer_My_Profile_Page.verify_first_name();
}

@Then("I will see My Last name")
public void i_will_see_My_Last_name() {
	boolean s = customer_My_Profile_Page.verify_last_name();
	}


@Then("I will see Email address")
public void i_will_see_Email_address() {
	boolean s = customer_My_Profile_Page.verify_email();
	}


@Then("I will see Date of Birth")
public void i_will_see_Date_of_Birth() {
	boolean s = customer_My_Profile_Page.verify_Date_Of_Birth();
}

@Then("I will see Gender")
public void i_will_see_Gender() {
	String s = customer_My_Profile_Page.verify_gender();
}

@Then("I will see contact number")
public void i_will_see_contact_number() {
	String s = customer_My_Profile_Page.verify_contact_Number();
}

@Then("I will see Address {string}")
public void i_will_see_Address(String expectedMsg) {
	String actualMsg = customer_My_Profile_Page.verfiy_address();
	assertEquals(actualMsg,expectedMsg);
	}

}
