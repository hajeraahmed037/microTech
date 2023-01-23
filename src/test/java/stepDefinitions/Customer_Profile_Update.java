package stepDefinitions;

import static org.junit.Assert.assertEquals;

import base.Base;
import io.cucumber.java.en.Then;
import pages.Customer_Home_page;
import pages.Landing_page;
import pages.Customer_My_Profile_Page;
import pages.Customer_Update_My_Profile_Page;

public class Customer_Profile_Update extends Base  {
	
	Landing_page landing_page = new Landing_page();
	Customer_Home_page customer_Home_page = new  Customer_Home_page();
	Customer_My_Profile_Page my_Profile_Page = new Customer_My_Profile_Page();
	Customer_Update_My_Profile_Page customer_Update_My_Profile_Page =new Customer_Update_My_Profile_Page();
	
	
	@Then("I will click update info")
	public void i_will_click_update_info() {
		my_Profile_Page.click_update();
	}

	@Then("I will see update coustomer info {string}")
	public void i_will_see_update_coustomer_info(String expectedMsg) {
	   String actualMsg = customer_Update_My_Profile_Page.verify_upDateCustomerInfo();
	   assertEquals(actualMsg,expectedMsg);
	   }

	@Then("I update contact")
	public void i_update_contact() throws InterruptedException {
		customer_Update_My_Profile_Page.clear_Contact();
		Thread.sleep(2000);
		customer_Update_My_Profile_Page.enter_Contact("101010095");
		Thread.sleep(1000);
	}

	@Then("I update address")
	public void i_update_address() throws InterruptedException {
		customer_Update_My_Profile_Page.clear_Address();
		Thread.sleep(2000);
		customer_Update_My_Profile_Page.enter_Address("NY");
		Thread.sleep(2000);
		}

	@Then("I will click submit button")
	public void i_will_click_submit_button() {
		customer_Update_My_Profile_Page.click_submitButton();
	}

	@Then("I will click refresh url")
	public void i_will_click_refresh_url() {
	   driver.navigate().refresh();
	}

	@Then("I will see update contact")
	public void i_will_see_update_contact() {
		String actualMsg =	customer_Update_My_Profile_Page.verify_updatedContact("value");
		assertEquals(actualMsg,"101010095");
	}

	@Then("I will see update address")
	public void i_will_see_update_address() {
		String actualMsg =	customer_Update_My_Profile_Page.verify_upDatedAddress("value");
	    assertEquals(actualMsg,"NY");	}
	
	
	
	
	
}
