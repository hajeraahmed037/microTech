package pages;

import org.openqa.selenium.By;

import base.Base;

public class Landing_page extends Base{
	
	By landing_page_logo = By.xpath("//div[3]/h1");
	
	By login_button = By.xpath("//*[@id=\"navli\"]/li[4]/a");
	
	By about_Menu = By.xpath("//li[2]/a");
	
	By contact =By.xpath("//ul[@id='navli']/li[3]/a");
	
	public void click_contact() {
		click(contact);
	}

	public boolean Verify_about_Menu_present() {
		boolean b = isDisplayed(about_Menu);
		return b;
	}
	public String verify_landing_page() {
		String m = getText(landing_page_logo);
		return m;
	}
	public void click_login_button() {
		click(login_button);
	}
}
