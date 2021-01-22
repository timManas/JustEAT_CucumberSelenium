$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("JustEat.feature");
formatter.feature({
  "line": 1,
  "name": "Use the website to find restaurants",
  "description": "So that I can order food\nAs a hungry customer\nI want to be able to find restaurants in my area",
  "id": "use-the-website-to-find-restaurants",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2334354913,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I access JustEats",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.i_access_JustEats()"
});
formatter.result({
  "duration": 2832210647,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Search for restaurants in an area",
  "description": "",
  "id": "use-the-website-to-find-restaurants;search-for-restaurants-in-an-area",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "I want food in \"AR51 1AA\"",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I search for restaurants",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I should see some restaurants in \"AR51 1AA\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "AR51 1AA",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.i_want_food_in(String)"
});
formatter.result({
  "duration": 690915212,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_search_for_restaurants()"
});
formatter.result({
  "duration": 6418562684,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AR51 1AA",
      "offset": 34
    }
  ],
  "location": "StepDefinitions.i_should_see_some_restaurants_in(String)"
});
formatter.result({
  "duration": 416125564,
  "status": "passed"
});
formatter.after({
  "duration": 271415072,
  "status": "passed"
});
formatter.before({
  "duration": 1346232866,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I access JustEats",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.i_access_JustEats()"
});
formatter.result({
  "duration": 2430443676,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "User enters Invalid postalCode",
  "description": "",
  "id": "use-the-website-to-find-restaurants;user-enters-invalid-postalcode",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "I want food in \"L5M 6A7\"",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I search for restaurants",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I should see an error \"Please enter a full, valid postcode\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "L5M 6A7",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.i_want_food_in(String)"
});
formatter.result({
  "duration": 618219736,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_search_for_restaurants()"
});
formatter.result({
  "duration": 204203009,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please enter a full, valid postcode",
      "offset": 23
    }
  ],
  "location": "StepDefinitions.i_should_see_an_error(String)"
});
formatter.result({
  "duration": 79721779,
  "status": "passed"
});
formatter.after({
  "duration": 239255290,
  "status": "passed"
});
formatter.before({
  "duration": 1377476743,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I access JustEats",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.i_access_JustEats()"
});
formatter.result({
  "duration": 2388023304,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "User is able to choose different region",
  "description": "",
  "id": "use-the-website-to-find-restaurants;user-is-able-to-choose-different-region",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 21,
  "name": "User clicks on the flag",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "User chooses Canada",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User is taken to the Skip the Dishes",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.user_clicks_on_the_flag()"
});
formatter.result({
  "duration": 182187791,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_chooses_Canada()"
});
formatter.result({
  "duration": 2152879014,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_is_taken_to_the_Skip_the_Dishes()"
});
formatter.result({
  "duration": 312021386,
  "status": "passed"
});
formatter.after({
  "duration": 901353296,
  "status": "passed"
});
});