package stepDefinitions;

import static org.junit.Assert.assertEquals;

import base.Base;
import io.cucumber.java.en.Then;
import pages.Customer_Home_page;
import pages.Customer_Order_List_page;
import pages.Customer_Order_Product_Page;
import pages.Landing_page;

public class Customer_Product_order_page extends Base {
	
	Customer_Order_Product_Page customer_Order_Product_Page = new Customer_Order_Product_Page();
	Customer_Order_List_page customer_Order_List_page = new Customer_Order_List_page();
	
	
	@Then("I will click Order Product")
	public void i_will_click_Order_Product() {
		customer_Order_Product_Page.click_order_product();
	}

	@Then("I select product")
	public void i_select_product() {
		customer_Order_Product_Page.select_product();
	}

	@Then("I enter order date")
	public void i_enter_order_date() {
		customer_Order_Product_Page.enter_order_date("9/10/2022");
	}

	@Then("I click order product button")
	public void i_click_order_product_button() {
		customer_Order_Product_Page.click_orderProductButton();
	}

	@Then("I will see {string} home page")
	public void i_will_see_home_page(String expectedMsg) {
		String actualMsg = customer_Order_List_page.verify_order_list();
		assertEquals(actualMsg,expectedMsg);
	}

	@Then("I click confirm button")
	public void i_click_confirm_button() {
		customer_Order_List_page.click_confirmButton();
	}

	@Then("refresh url")
	public void refresh_url() {
		driver.navigate().refresh();
	}

	@Then("I will see {string} status")
	public void i_will_see_status(String expectedMsg) {
		String actualMsg = customer_Order_List_page.verify_confirm_status();
		assertEquals(actualMsg,expectedMsg);
	}

}
