package stepDefinitions;

import static org.junit.Assert.assertEquals;

import base.Base;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import pages.Employee_Home_Page;
import pages.Employee_login_page;

public class Employee_login extends Base {
	Employee_login_page employee_login_page = new Employee_login_page();
	Employee_Home_Page employee_Home_Page = new Employee_Home_Page();
	
	@When("I will see Employee Login Page {string}")
	public void i_will_see_Employee_Login_Page(String expectedMsg) {
		String actualMsg = employee_login_page.get_employeeLoginLabel();
		assertEquals(actualMsg,expectedMsg);
	}

	@Then("I Enter user id {string}")
	public void i_Enter_user_id(String email) throws InterruptedException {
		employee_login_page.enter_userId(email);
		Thread.sleep(3000);
	}

	@Then("I Enter password {string}")
	public void i_Enter_password(String password) throws InterruptedException {
		employee_login_page.enter_password(password);
		Thread.sleep(3000);
	}

	@When("I click login button")
	public void i_click_login_button() throws InterruptedException {
		employee_login_page.click_login_button();
		Thread.sleep(3000);
	}

	@Then("I will see a {string}")
	public void i_will_see_a(String expectedMsg) {
		String actualMsg = employee_Home_Page.get_welcom_Test();
		assertEquals(actualMsg,expectedMsg);
	}

	

}
