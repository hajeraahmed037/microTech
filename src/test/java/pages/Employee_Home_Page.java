package pages;

import org.openqa.selenium.By;

import base.Base;

public class Employee_Home_Page extends Base{
	
	By welcomeTest = By.xpath("//div/div/h2[2]");
	By log_Out = By.xpath("//li[7]/a");
	
	public void click_Logout() {
		click(log_Out);
	}
	public String get_welcom_Test() {
		return getText(welcomeTest);
	}
}
