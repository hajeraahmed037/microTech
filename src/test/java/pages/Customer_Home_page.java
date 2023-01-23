package pages;

import org.openqa.selenium.By;

import base.Base;

public class Customer_Home_page extends Base{
	
	By welcomeDavid = By.xpath("//div[@id='divimg']/div/h2[2]");
	By my_profile = By.xpath("//li[2]/a");
	//By order_product = By.xpath("//li[3]/a");
	By order_list = By.xpath("//li[4]/a");
	By logOut = By.xpath("//li[5]/a");
	
	
	public void click_order_list() {
		click(order_list);
	}
//	public void click_order_product() {
//		click(order_product);
//	}
	public void click_my_profile() {
		click(my_profile);
	}
	public String verify_welcomDavid() {
		return getText(welcomeDavid);
	}
	public void click_logOut() {
		click(logOut);
	}
}
