package stepDefinitions;

import static org.junit.Assert.assertEquals;

import base.Base;
import io.cucumber.java.en.Then;
import pages.Employee_My_Profile_Page;

public class Employee_Profile_Update extends Base {

	Employee_My_Profile_Page employee_My_Profile_Page =new Employee_My_Profile_Page();
	
	@Then("I will click update info button")
	public void i_will_click_update_info_button() {
		employee_My_Profile_Page.click_update_info_botton();
	}

	@Then("I see Employee Page {string}")
	public void i_see_Employee_Page(String expectedMsg) {
	   String actualMsg = employee_My_Profile_Page.get_UpdateEmployeeInfo();
	   assertEquals(actualMsg,expectedMsg);
	}
	@Then("I will update contact {string}")
	public void i_will_update_contact(String contact) {
		employee_My_Profile_Page.enter_updated_contact(contact);
	}

	@Then("I will Update address {string}")
	public void i_will_Update_address(String address) {
		employee_My_Profile_Page.enter_updated_address(address);
	}


	@Then("I will click a submit button")
	public void i_will_click_a_submit_button() {
		employee_My_Profile_Page.click_submit_botton();
	}

	@Then("I click refresh url")
	public void i_click_refresh_url() {
	   driver.navigate().refresh();
	}

	@Then("I will see Employee update contact {string}")
	public void i_will_see_Employee_update_contact(String expectedMessage) {
		String actualMessage = employee_My_Profile_Page.get_verify_update_contact("value");
	    assertEquals(actualMessage, expectedMessage);
	}

	@Then("I will see Employee update address {string}")
	public void i_will_see_Employee_update_address(String expectedMessage) {
		String actualMessage = employee_My_Profile_Page.get_verify_update_address("value");
	    assertEquals(actualMessage, expectedMessage);
	}

}
