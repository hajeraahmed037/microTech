package pages;

import org.openqa.selenium.By;

import base.Base;

public class Employee_login_page extends Base {

	By employee_login = By.xpath("//*[@id='navli']/li[3]/a");
	By employeeloginlabel = By.xpath("//div/h1");
	By userId = By.name("mailuid");
	By pass_Word = By.name("pwd");
	By loginButton = By.name("login-submit");
	By invalidLogin = By.xpath("//*[@id='error-msg']");
	By myProfile = By.xpath("//li[2]/a");
	public void click_employeeLogin() {
		click(employee_login);
	}
	public String get_employeeLoginLabel() {
		return getText(employeeloginlabel);
	}
	public void enter_userId(String emailId) {
		sendKeys(userId,emailId);
		
	}
	public void enter_password(String password) {
		sendKeys(pass_Word,password);
	}
	public void click_login_button() {
		click(loginButton);
	}
	public String get_invalidLogin() {
		
		return getText(invalidLogin);
	}
	public void click_My_Profile() {
		click(myProfile);
	}
}
