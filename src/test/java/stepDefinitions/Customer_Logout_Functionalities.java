package stepDefinitions;

import static org.junit.Assert.assertEquals;

import base.Base;
import io.cucumber.java.en.Then;
import pages.Customer_Home_page;
import pages.Customer_login_page;

public class Customer_Logout_Functionalities extends Base {
	
	
	Customer_login_page customer_login_page = new Customer_login_page();
	Customer_Home_page customer_Home_page = new Customer_Home_page();
	
	@Then("I Click Logout button")
	public void i_Click_Logout_button() {
		customer_Home_page.click_logOut();
	}

	@Then("I see Customer Login Page {string}")
	public void i_see_Customer_Login_Page(String expectedMsg) {
	    String actualMsg = customer_login_page.get_custome_login_label();
	    assertEquals(actualMsg,expectedMsg);
	}


}
