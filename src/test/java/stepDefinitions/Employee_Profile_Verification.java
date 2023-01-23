package stepDefinitions;

import static org.junit.Assert.assertEquals;

import base.Base;
import io.cucumber.java.en.Then;
import pages.Employee_My_Profile_Page;
import pages.Employee_login_page;

public class Employee_Profile_Verification extends Base{
	
	Employee_login_page employee_login_page = new Employee_login_page();
	Employee_My_Profile_Page employee_My_Profile_Page = new Employee_My_Profile_Page();
	@Then("I click My Profile button")
	public void i_click_My_Profile_button() {
		employee_login_page.click_My_Profile();
	}

	@Then("I will seen {string}")
	public void i_will_seen(String expectedMsg) {
	String actualMsg = 	employee_My_Profile_Page.get_My_Info();
	assertEquals(actualMsg, expectedMsg);
	}
	
	
}
