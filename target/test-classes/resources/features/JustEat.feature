Feature: Use the website to find restaurants
So that I can order food
As a hungry customer
I want to be able to find restaurants in my area

Background: 
	Given I access JustEats

Scenario: Search for restaurants in an area
	Given I want food in "AR51 1AA"
	When I search for restaurants
	Then I should see some restaurants in "AR51 1AA"
	

Scenario: User enters Invalid postalCode
	Given I want food in "L5M 6A7"
	When I search for restaurants
	Then I should see an error "Please enter a full, valid postcode"

Scenario: User is able to choose different region
	Given User clicks on the flag
	When User chooses Canada
	Then User is taken to the Skip the Dishes
	 
	

