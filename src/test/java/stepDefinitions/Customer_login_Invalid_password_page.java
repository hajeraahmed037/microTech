package stepDefinitions;

import static org.junit.Assert.assertEquals;

import base.Base;
import io.cucumber.java.en.Then;
import pages.Customer_login_page;


public class Customer_login_Invalid_password_page extends Base{
	Customer_login_page customer_login_page = new Customer_login_page();
	//Landing_page landing_page = new Landing_page();
	
	
@Then("I will verfiy {string}")
public void i_will_verfiy(String expectedMsg) {
	String actualMsg = customer_login_page.verify_invalid_password_userId();
	assertEquals(actualMsg,expectedMsg);
}

}
