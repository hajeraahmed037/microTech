package stepDefinitions;

import static org.junit.Assert.assertEquals;

import base.Base;
import io.cucumber.java.en.Then;
import pages.Customer_Home_page;
import pages.Landing_page;
import pages.Customer_Order_List_page;

public class Customer_Order_List_Functionalities extends Base  {
	
	Landing_page landing_page = new Landing_page();
	Customer_Home_page customer_Home_page = new  Customer_Home_page();
	Customer_Order_List_page order_List_page = new Customer_Order_List_page();
	
	
	@Then("I click order list button")
	public void i_click_order_list_button() {
		customer_Home_page.click_order_list();
	}

	@Then("I see order list Page {string}")
	public void i_see_order_list_Page(String expactedMsg) {
	   String actualMsg = order_List_page.verify_order_list();
	   assertEquals(actualMsg, expactedMsg);
	}

}
