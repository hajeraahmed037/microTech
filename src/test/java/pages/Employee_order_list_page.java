package pages;

import org.openqa.selenium.By;

import base.Base;

public class Employee_order_list_page extends Base{
	
	
	By order_List = By.xpath("//ul/li[5]/a");
	By verify_order_date = By.xpath("//tbody/tr[1]/th[4]");
	
	public String get_verify_order_date() {
		return getText(verify_order_date);
	}
	public void click_order_list() {
		click(order_List);
	}
	

}
