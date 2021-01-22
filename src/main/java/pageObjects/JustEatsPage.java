package pageObjects;

import java.io.IOException;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.testng.Assert;

public class JustEatsPage extends BasePage{

	public JustEatsPage() throws IOException {
		super();
	}

	public void accessJustEatsPage() {
		driver.get("https://www.just-eat.co.uk/");
	}

	public void enterLocation(String postalCode) throws Exception {
		System.out.println("Sending PostalCode: " + postalCode);
		WebElement textField_postalCode = driver.findElement(By.xpath("//*[@id=\"main\"]/div[2]/div[2]/div/div/div/div/form/div/div/label/input"));
		sendKeysToWebElement(textField_postalCode, postalCode);
	}

	public void searchRestaurants() throws InterruptedException {
		WebElement button_Search = driver.findElement(By.xpath("//*[@id=\"main\"]/div[2]/div[2]/div/div/div/div/form/div/button"));
		waitAndClickElement(button_Search);
		
	}

	public void validateRestaurants(String input) throws InterruptedException {
		
		// Validate the number of restaurants open
		WebElement text_numRestaurantsOpen = driver.findElement(By.xpath("//*[@id=\"skipToMain\"]/div[3]/div/main/div/div[2]/div/div[4]/span/div[1]/h1/span"));
		this.wait.until(ExpectedConditions.elementToBeClickable(text_numRestaurantsOpen));
		String [] text = text_numRestaurantsOpen.getText().split(" ");
		int numOpenRestaurants = Integer.valueOf(text[0]);
		System.out.println("Num Restants Open: " + numOpenRestaurants);
		Assert.assertNotEquals(numOpenRestaurants, 0);
		
		// Validate the location
		WebElement text_location = driver.findElement(By.xpath("//*[@id='skipToMain']/div[3]/div/main/div[@class='g g--gutter g--stack--mid']//div[@class='c-locationHeader u-showAboveMid']/div[@class='c-locationHeader-container']/h1[@class='c-locationHeader-title']"));
		String [] postalCode = text_location.getText().split(",");
		System.out.println("Location: " + postalCode[0]);
		Assert.assertEquals(postalCode[0].replaceAll(",", ""), input);
	
	}

	public void validatePostalCode(String error) throws InterruptedException {
		// TODO Auto-generated method stub
		WebElement text_error = driver.findElement(By.xpath("/html//div[@id='errorMessage']"));
		this.wait.until(ExpectedConditions.elementToBeClickable(text_error));
		System.out.println("Error Text: " + text_error.getText());
		Assert.assertEquals(text_error.getText(), error);
	
	}

	public void clickOnFlag() throws InterruptedException {
		WebElement flag = driver.findElement(By.cssSelector("body > div:nth-child(2) > div > header > div > div:nth-child(3) > nav > ul > li.nav-item.with-icon.country-picker > div > button > span.flag > img"));
		this.wait.until(ExpectedConditions.elementToBeClickable(flag));
		flag.click();
	}

	public void chooseFlag() throws InterruptedException {
		WebElement canadaFlag = driver.findElement(By.cssSelector("li:nth-of-type(4) > .link > .name"));
		this.wait.until(ExpectedConditions.elementToBeClickable(canadaFlag));
		canadaFlag.click();
	}

	public void validatePage() {
		System.out.println("CurrentURL: " + driver.getCurrentUrl());
		Assert.assertEquals(driver.getCurrentUrl(), "https://www.skipthedishes.com/");
	}





}
