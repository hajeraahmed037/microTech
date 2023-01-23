package pages;

import org.openqa.selenium.By;

import base.Base;

public class Customer_Update_My_Profile_Page extends Base{
		
	By upDateCustomerInfo = By.xpath("//div/h2");
	By Contact = By.name("contact");
	By Address = By.name("address");
	By submitButton = By.name("update");
	By upDatedContact = By.name("contact");
	By upDatedAddress = By.name("address");

	public String verify_upDatedAddress(String updateaddres) {
	return getAttribute(upDatedAddress,updateaddres);
	}
	public String verify_updatedContact(String updatecontact) {
		return getAttribute(upDatedContact,updatecontact);
	}
	public void click_submitButton() {
		click(submitButton);
	}
	
	public void enter_Address(String address) {
		sendKeys(Address, address);
	}
	public void enter_Contact(String contact) {
		sendKeys(Contact, contact);
	}
	public void clear_Contact() {
		clear(Contact);
	}
	
	public void clear_Address() {
		clear(Address);
	}
	public String verify_upDateCustomerInfo() {
		return getText(upDateCustomerInfo);
	}
}
