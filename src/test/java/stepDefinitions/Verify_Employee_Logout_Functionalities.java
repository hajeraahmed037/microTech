package stepDefinitions;

import base.Base;
import io.cucumber.java.en.Then;
import pages.Employee_Home_Page;

public class Verify_Employee_Logout_Functionalities extends Base {

	Employee_Home_Page employee_Home_Page = new Employee_Home_Page();

	@Then("I Click Employee Logout button")
	public void i_Click_Employee_Logout_button() {
		employee_Home_Page.click_Logout();
	}

}
