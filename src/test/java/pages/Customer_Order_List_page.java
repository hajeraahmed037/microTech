package pages;

import org.openqa.selenium.By;

import base.Base;

public class Customer_Order_List_page extends Base  {
	
	By orderList = By.id("orderList-title");
	By confirmButton = By.xpath("//tbody/tr[last()]/td[last()]/a"); 
	By confirm_status  = By.xpath("//tbody/tr[last()]/td[last()-1]");
	
	public String verify_order_list() {
		return getText(orderList);
	}
	
	
	public String verify_confirm_status() {
		return getText(confirm_status);
	}
	
	public void click_confirmButton() {
		click(confirmButton);
	}
}
