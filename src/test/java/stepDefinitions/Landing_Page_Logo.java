package stepDefinitions;

import static org.junit.Assert.assertEquals;

import org.openqa.selenium.By;

import base.Base;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import pages.Landing_page;

public class Landing_Page_Logo extends Base{
	
	Landing_page landing_page = new Landing_page();
	
	
	@Given("I am in Landing Page")
	public void i_am_in_Landing_Page() {
		getUrl("https://sit.skyschooling.com/microtech/index.html");
	}

	@Then("verify Landing Page Logo Text {string}")
	public void verify_Landing_Page_Logo_Text(String expectedMsg) {
		String actualMsg = landing_page.verify_landing_page();
		assertEquals(actualMsg,expectedMsg);
	}
}