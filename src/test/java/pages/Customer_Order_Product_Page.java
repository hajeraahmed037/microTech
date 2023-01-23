package pages;

import org.openqa.selenium.By;

import base.Base;

public class Customer_Order_Product_Page extends Base {
	
	By order_product = By.xpath("//li[3]/a");
	By selectProduct = By.xpath("//select[@name='prodId']/option[7]");
	By enterOrderDate = By.name("ordDate"); 
	By orderProductButton = By.xpath("//div/button");
	
	
	
	public void click_order_product() {
		click(order_product);
	}
	public void click_orderProductButton() {
		click(orderProductButton);
	}
	
	public void enter_order_date(String orderDate) {
		sendKeys(enterOrderDate,orderDate);
	}
	public void select_product() {
		click(selectProduct);
	}
	
	

}
