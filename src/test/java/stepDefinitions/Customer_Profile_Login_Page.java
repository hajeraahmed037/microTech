package stepDefinitions;

import static org.junit.Assert.assertEquals;

import base.Base;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import pages.Customer_Home_page;
import pages.Customer_login_page;
import pages.Landing_page;

public class Customer_Profile_Login_Page extends Base {
	Landing_page landing_page = new Landing_page();
	Customer_login_page customer_login_page = new Customer_login_page();
	Customer_Home_page customer_Home_page = new Customer_Home_page();


	@When("I click on login")
	public void i_click_on_login() {
		landing_page.click_login_button();
	}

	@When("click customer login")
	public void click_customer_login() {
		customer_login_page.click_customer_login();
	}

	@Then("I enter User Id {string}")
	public void i_enter_User_Id(String email) {
		customer_login_page.enter_userId(email);
	}

	@Then("I enter Password {string}")
	public void i_enter_Password(String password) {
		customer_login_page.enter_password(password);
	}

	@When("I click Login button")
	public void i_click_Login_button() {
		customer_login_page.click_login_button();
	}

	@Then("I will see {string}")
	public void i_will_see(String expectedMsg) {
	String actualMsg =	customer_Home_page.verify_welcomDavid();
	assertEquals(actualMsg,expectedMsg);
	}

}
