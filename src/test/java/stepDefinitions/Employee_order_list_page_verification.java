package stepDefinitions;

import static org.junit.Assert.assertEquals;

import base.Base;
import io.cucumber.java.en.Then;
import pages.Employee_order_list_page;

public class Employee_order_list_page_verification extends Base{
	
	Employee_order_list_page employee_order_list_page = new Employee_order_list_page();
	
	
	
	@Then("I Click order List button")
	public void i_Click_order_List_button() {
		employee_order_list_page.click_order_list();
	}

	@Then("I will see order prouct list page {string}")
	public void i_will_see_order_prouct_list_page(String expectedMsg) {
	    String actualMsg = employee_order_list_page.get_verify_order_date();
	    assertEquals(actualMsg,expectedMsg);
	}


	
	
	
	
	
	
	
	
	
	
	
	

}
