package pages;

import org.openqa.selenium.By;

import base.Base;

public class Customer_login_page extends Base{
	
	By customer_login = By.xpath("//li[2]/a");
	By customer_login_label = By.xpath("//div[2]/h1");
	By userId = By.name("mailuid");
	By pass_word = By.name("pwd");
	By login_button = By.name("login-submit");
	By invalid_password_userId = By.id("error-msg");
	
	
	public void click_login_button() {
		click(login_button);
	}
	
	
	public String  verify_invalid_password_userId() {
		return getText(invalid_password_userId);
		
	}
	public void enter_password(String password) {
		sendKeys(pass_word,password);
	}
	public void enter_userId(String email) {
		sendKeys(userId,email);
	}
	public String get_custome_login_label() {
		return getText(customer_login_label);
	}
	public void click_customer_login() {
		click(customer_login);
	}
	
}
