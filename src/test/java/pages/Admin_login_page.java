package pages;

import org.openqa.selenium.By;

import base.Base;

public class Admin_login_page extends Base{
	
	By admin_login = By.xpath("//li[4]/a");
	By admin_login_label = By.xpath(" //div[2]/h1");
	By userId = By.name("mailuid ");
	By pass_word= By.name("pwd ");
	By login_button = By.name("login-sumit ");
	
	
	public void click_admin_login() {
		click(admin_login);
	}
	public boolean verify_admin_login_label() {
		return isDisplayed(admin_login_label);
	}
	public void enter_userId(String email) {
		sendKeys(userId,email);
	}
	public void enter_password(String password) {
		sendKeys(pass_word,password);
	}
	public void click_login_button() {
		click(login_button);
	}
	
}
