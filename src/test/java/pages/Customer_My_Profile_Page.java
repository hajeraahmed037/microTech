package pages;

import org.openqa.selenium.By;

import base.Base;

public class Customer_My_Profile_Page extends Base{
	
	By myInfo = By.xpath("//div[2]/div[1]/div[1]/div[2]/h2");
	By firstName = By.xpath("//*[text()='First Name']");
	By lastName = By.xpath("//*[text()='Last Name']");
	By email = By.xpath("//*[text()='Email']");
	By dateOfBirth = By.xpath("//*[text()='Date of Birth']");
	By gender = By.xpath("//*[text()='Gender']");
	By contactNumber = By.xpath("//*[text()='Contact Number']");
	By address = By.xpath("//*[text()='Address']");
	By update = By.name("send");
	
	public void click_update() {
		click(update);
	}
	public String verify_gender() {
		return getText(gender);
	}
	public String verify_contact_Number() {
		return getText(contactNumber);
	}
	public String verfiy_address() {
		String s= getText(address);
		 return s;
	}
	public boolean verify_Date_Of_Birth() {
		return isDisplayed(dateOfBirth);
		
	}
	
	public boolean verify_email() {
		return isDisplayed(email);
		
	}
	public boolean verify_last_name() {
		return isDisplayed(lastName);
		
	}
	public boolean verify_first_name() {
		return isDisplayed(firstName);
		
	}
	
	public String get_My_Info() {
		String s= getText(myInfo);
		return s;
	}
}
