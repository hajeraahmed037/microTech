package pages;

import org.openqa.selenium.By;

import base.Base;

public class Employee_ProductOrder_Page extends Base {
	By productOrder = By.xpath("//li[4]/a");
	By verify_order_product = By.xpath("//div/div/div/div/h2");
	
	
	public void click_productOrder() {
		click(productOrder);
	}
	public String get_verify_order_product() {
		return getText(verify_order_product);
	}
}
