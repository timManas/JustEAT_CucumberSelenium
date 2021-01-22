package stepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinitions extends DriverFactory{
	
	@Given("^I access JustEats$")
	public void i_access_JustEats() throws Throwable {
		justEatPage.accessJustEatsPage();
	}
	
	@Given("^I want food in \"([^\"]*)\"$")
	public void i_want_food_in(String postalCode) throws Throwable {
		justEatPage.enterLocation(postalCode);
	}

	@When("^I search for restaurants$")
	public void i_search_for_restaurants() throws Throwable {
		justEatPage.searchRestaurants();
	}

	@Then("^I should see some restaurants in \"([^\"]*)\"$")
	public void i_should_see_some_restaurants_in(String arg1) throws Throwable {
		justEatPage.validateRestaurants(arg1);
	}
	
	@Then("^I should see an error \"([^\"]*)\"$")
	public void i_should_see_an_error(String error) throws Throwable {
		justEatPage.validatePostalCode(error);
	}

	@Given("^User clicks on the flag$")
	public void user_clicks_on_the_flag() throws Throwable {
		justEatPage.clickOnFlag();
	}

	@When("^User chooses Canada$")
	public void user_chooses_Canada() throws Throwable {
		justEatPage.chooseFlag();
	}

	@Then("^User is taken to the Skip the Dishes$")
	public void user_is_taken_to_the_Skip_the_Dishes() throws Throwable {
		justEatPage.validatePage();
	}

	
}
