package pages;

import org.openqa.selenium.By;

import base.Base;

public class Employee_Apply_leave_Page extends Base{

	By apply_leave_button = By.xpath("//ul/li[6]/a");
	By verify_applyLeaveForm = By.xpath("//div/h2");
	By write_reson = By.name("reason");
	By start_date = By.name("start");
	By end_date = By.name("end");
	By verify_applyReasonLeave = By.xpath("//div[2]/div/table[3]/tbody/tr[last()]/td[last()-1]");
	By verify_status = By.xpath("//div[2]/div/table[3]/tbody/tr[last()]/td[last()]");
	By submit = By.xpath("//div/button");
	
	public void click_submit() {
		click(submit);
	}
	public void click_apply_leave_button() {
		click(apply_leave_button);
	}
	public String get_verify_applyLeaveForm() {
		return getText(verify_applyLeaveForm);
	}
	public void enter_reason(String reason) {
		sendKeys(write_reson,reason);
	}
	public void enter_start_date(String statDate) {
		sendKeys(start_date,statDate);
	}
	public void enter_end_date(String endDate) {
		sendKeys(end_date,endDate);
	}
	public String get_verify_applyReasonLeave() {
		return getText(verify_applyReasonLeave);
	}
	public String get_verify_status() {
		return getText(verify_status);
	}
}
