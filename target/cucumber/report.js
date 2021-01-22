$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("JustEat.feature");
formatter.feature({
  "line": 1,
  "name": "Use the website to find restaurants",
  "description": "So that I can order food\nAs a hungry customer\nI want to be able to find restaurants in my area",
  "id": "use-the-website-to-find-restaurants",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2484098032,
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
  "duration": 2328513762,
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
  "duration": 539946269,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_search_for_restaurants()"
});
formatter.result({
  "duration": 5653252051,
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
  "duration": 248464122,
  "status": "passed"
});
formatter.after({
  "duration": 316393896,
  "status": "passed"
});
formatter.before({
  "duration": 1599964989,
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
  "duration": 2262317801,
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
  "duration": 685541674,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 305554144,
  "status": "passed"
});
formatter.before({
  "duration": 1708029456,
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
