package pages;

import org.openqa.selenium.By;

import base.Base;

public class Employee_My_Profile_Page extends Base {

	By myInfo = By.xpath("//div/h2");
	By updateInfo = By.name("send");
	By UpdateEmployeeInfo = By.xpath("//div/h2");
	By enter_contact = By.name("contact");
	By enter_address = By.name("address");
	By submit = By.name("update");
	By verify_update_contact = By.name("contact");
	By verify_update_address = By.name("address");

	public String get_My_Info() {
		return getText(myInfo);
	}

	public void click_update_info_botton() {
		click(updateInfo);
	}

	public void click_submit_botton() {
		click(submit);
	}

	public void enter_updated_contact(String contact) {
		clear(enter_contact);
		sendKeys(enter_contact, contact);
	}

	public void enter_updated_address(String address) {
		clear(enter_address);
		sendKeys(enter_address, address);
	}
	public String get_UpdateEmployeeInfo() {
		return getText(UpdateEmployeeInfo);
	}
	public String get_verify_update_contact(String value) {
		return getAttribute(verify_update_contact, value);
	}
	public String get_verify_update_address(String value ) {
		return getAttribute(verify_update_address,value);
	}
}
