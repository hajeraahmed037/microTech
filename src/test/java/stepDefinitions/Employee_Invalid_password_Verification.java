package stepDefinitions;

import static org.junit.Assert.assertEquals;

import base.Base;
import io.cucumber.java.en.Then;
import pages.Employee_login_page;

public class Employee_Invalid_password_Verification extends Base {
	
	Employee_login_page employee_login_page = new Employee_login_page();
	
	
@Then("I will see invaild usId&Password {string}")
public void i_will_see_invaild_usId_Password(String expectedMsg) {
	String actualMsg = employee_login_page.get_invalidLogin();
	assertEquals(actualMsg, expectedMsg);
}

}
