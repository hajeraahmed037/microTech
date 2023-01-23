package stepDefinitions;

import static org.junit.Assert.assertEquals;

import org.openqa.selenium.By;

import base.Base;
import io.cucumber.java.en.Then;
import pages.Employee_ProductOrder_Page;

public class Employee_product_order_page_verification extends Base{
	
	Employee_ProductOrder_Page employee_ProductOrder_Page =new Employee_ProductOrder_Page();
	
	
	
	@Then("I click Order Product button")
	public void i_click_Order_Product_button() {
		employee_ProductOrder_Page.click_productOrder();
	}

	@Then("I see order product page {string}")
	public void i_see_order_product_page(String expectedMessage) {
		String actualMessage = employee_ProductOrder_Page.get_verify_order_product();
		assertEquals(actualMessage, expectedMessage);
	}
}
