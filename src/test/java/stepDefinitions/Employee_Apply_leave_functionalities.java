package stepDefinitions;

import static org.junit.Assert.assertEquals;

import base.Base;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import pages.Employee_Apply_leave_Page;

public class Employee_Apply_leave_functionalities extends Base{
	
	Employee_Apply_leave_Page employee_Apply_leave_Page = new Employee_Apply_leave_Page();

	
	
	@When("I Click Apply leave button")
public void i_Click_Apply_leave_button() {
		employee_Apply_leave_Page.click_apply_leave_button();
}

@Then("I See employee leave Page {string}")
public void i_See_employee_leave_Page(String expectedMsg) {
	String actualMsg = employee_Apply_leave_Page.get_verify_applyLeaveForm();
    assertEquals(actualMsg, expectedMsg);
}

@Then("I write reason for apply leave {string}")
public void i_write_reason_for_apply_leave(String reason) {
	employee_Apply_leave_Page.enter_reason(reason);
}

@Then("I Enter Start Date {string}")
public void i_Enter_Start_Date(String statDate) {
	employee_Apply_leave_Page.enter_start_date(statDate);
}

@Then("I Enter End Date {string}")
public void i_Enter_End_Date(String endDate) {
	employee_Apply_leave_Page.enter_end_date(endDate);
}

@Then("I  click submit button")
public void i_click_submit_button() {
	employee_Apply_leave_Page.click_submit();
}

@Then("I will refresh Url")
public void i_will_refresh_Url() {
	driver.navigate().refresh();
}

@Then("I will see Apply leave reason {string}")
public void i_will_see_Apply_leave_reason(String expectedMsg) {
	String actualMsg = employee_Apply_leave_Page.get_verify_applyReasonLeave();
    assertEquals(actualMsg, expectedMsg);
}

@Then("I will see Status {string}")
public void i_will_see_Status(String expectedMsg) {
	String actualMsg = employee_Apply_leave_Page.get_verify_status();
    assertEquals(actualMsg, expectedMsg);
}


}
