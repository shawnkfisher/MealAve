
"use strict";

// global variables

var doYouWantLabel = document.getElementById("doYouWantLabel");

// holds all of the restaurants information
// get place id here -> https://developers.google.com/places/place-id
// get lat lng from address here -> https://developers.google.com/maps/documentation/geocoding/intro
// do your best guess for foodClass and foodType its sort of opinion based
var restaurants = [
{"name":"Qdoba", lat: 33.417703, lng: -111.934353,"foodClass":"fastCasual", "foodType":"burrito", "placeID":"ChIJezLLbMMIK4cRThp6K35v5q4","foodPrice":"$$"},
{"name":"Einstein bagels", lat: 33.417703, lng: -111.934353,"foodClass":"fastCasual", "foodType":"sandwich", "placeID":"ChIJr1MAYNsIK4cRR3JlaVAzhZw","foodPrice":"$$"},
{"name":"AFC Sushi", lat: 33.417703, lng: -111.934353,"foodClass":"fast", "foodType":"sushi", "placeID":"ChIJxbtNYNsIK4cRImBQBRiuBKc","foodPrice":"$$"},
{"name":"BurgerKing", lat: 33.417703, lng: -111.934353,"foodClass":"fast", "foodType":"hamburger", "placeID":"ChIJGTl1W9cIK4cRh6zC4MZm-G8","foodPrice":"$"},
{"name":"Domino's", lat: 33.414234, lng: -111.928944,"foodClass":"fastCasual", "foodType":"pizza", "placeID":"ChIJ9WCPYsIIK4cRH_DZgrajnMs","foodPrice":"$"},
{"name":"Chick-fil-A", lat: 33.417703, lng: -111.934353,"foodClass":"fast", "foodType":"chicken", "placeID":"ChIJ6-u5oNwIK4cRDhXDRCo0jb0","foodPrice":"$"},
{"name":"Engrained Cafe", lat: 33.417703, lng: -111.934353,"foodClass":"fastCasual", "foodType":"acai bowl", "placeID":"ChIJ6-u5oNwIK4cRyf-ct3PuIkc","foodPrice":"$$"},
{"name":"Chick-in", lat: 33.417703, lng: -111.934353,"foodClass":"fast", "foodType":"salad", "placeID":"ChIJDU-XESsJK4cRon6ebOPmIIM","foodPrice":"$$$"},
{"name":"Jamba Juice", lat: 33.417703, lng: -111.934353,"foodClass":"fast", "foodType":"smoothie", "placeID":"ChIJe0myZNsIK4cRX9BiQt-iGqs","foodPrice":"$$"},
{"name":"Subway", lat: 33.417703, lng: -111.934353,"foodClass":"fast", "foodType":"sandwich", "placeID":"ChIJOftkqOkIK4cR3pkatMJGRVM","foodPrice":"$"},
{"name":"Devil's Green", lat: 33.417703, lng: -111.934353,"foodClass":"fastCasual", "foodType":"salad", "placeID":"ChIJJY_qptwIK4cRB71M423hUw8","foodPrice":"$"},
{"name":"Dave's Dog House", lat: 33.418531, lng: -111.936002,"foodClass":"fast", "foodType":"hotdog", "placeID":"ChIJ7zodc9sIK4cRBLsYwPtAvm0","foodPrice":"$"},
{"name":"Hot N Juicy Crawfish", lat: 33.422756, lng: -111.94043,"foodClass":"fineDine", "foodType":"shrimp", "placeID":"ChIJNxk3fdcIK4cR6IcwyNlDajU","foodPrice":"$$$"},
{"name":"Devil's Advocate Sports Grill", lat: 33.421689, lng: -111.924342,"foodClass":"dineIn", "foodType":"steak", "placeID":"ChIJQf3M7uYIK4cRLwWy_kr2UzY","foodPrice":"$$"},
{"name":"Slickables Ice Cream Sandwich", lat: 33.423598, lng: -111.939537,"foodClass":"fastCasual", "foodType":"ice cream", "placeID":"ChIJ35qAK9gIK4cRB95TX1qze60","foodPrice":"$"},
{"name":"Zoyo Neighborhood Yogurt", lat: 33.414265, lng: 33.414265,"foodClass":"fast", "foodType":"frozen yogurt", "placeID":"ChIJI2CPYsIIK4cR-uX9dmnrmho","foodPrice":"$"},
{"name":"Chipotle", lat: 33.418005, lng: -111.940395,"foodClass":"fastCasual", "foodType":"burrito", "placeID":"ChIJyToHgNAIK4cRARPn2mUcZuk","foodPrice":"$$"},
{"name":"RA Sushi Bar", lat: 33.426072, lng: -111.939705,"foodClass":"fineDine", "foodType":"sushi", "placeID":"ChIJFVTkB9gIK4cRS66G2ZHwHJw","foodPrice":"$$$"},
{"name":"The ChuckBox", lat: 33.422158, lng: -111.936455,"foodClass":"fastCasual", "foodType":"hamburger", "placeID":"ChIJR0_rbtkIK4cRrkvJoLTQcNQ","foodPrice":"$$"},
{"name":"Hungry Howie's Pizza", lat: 33.416119, lng: -111.922279,"foodClass":"fastCasual", "foodType":"pizza", "placeID":"ChIJK8b_Ku8IK4cRszL89bjzUts","foodPrice":"$"},
{"name":"Raising Cane's", lat: 33.422431, lng: -111.924371,"foodClass":"fast", "foodType":"chicken", "placeID":"ChIJl10kwuYIK4cRUXfzQJwJBxk","foodPrice":"$"},
{"name":"Panda Express", lat: 33.422674, lng: -111.934707,"foodClass":"fast", "foodType":"noodles", "placeID":"ChIJeUQ0UNkIK4cRt-Dri-3KjTc","foodPrice":"$"},
{"name":"Original ChopShop", lat: 33.422258, lng: -111.935908,"foodClass":"fastCasual", "foodType":"acai bowl", "placeID":"ChIJ5bcsaNkIK4cRg8aHn8VpLcc","foodPrice":"$$"},
{"name":"Casey Moore's Oyster House", lat: 33.420633, lng: -111.942631,"foodClass":"fineDine", "foodType":"shrimp", "placeID":"ChIJA50kMtcIK4cR9SIynSntaB8","foodPrice":"$$$"},
{"name":"Applebee's", lat: 33.407087, lng: -111.925668,"foodClass":"dineIn", "foodType":"steak", "placeID":"ChIJdQ3rK5UIK4cRMMO-yP99zU4","foodPrice":"$$"},
{"name":"Sparky's Old Town Creamery", lat: 33.425132, lng: -111.940279,"foodClass":"fast", "foodType":"ice cream", "placeID":"ChIJffZwHtgIK4cRaywBuQxCerk","foodPrice":"$$"},
{"name":"Urban Boba Tea House", lat: 33.417419, lng: -111.925886,"foodClass":"fastCasual", "foodType":"smoothie", "placeID":"ChIJsTUqZegIK4cRRMA_READhfA","foodPrice":"$$"},
{"name":"Cafe Rio", lat: 33.423168, lng: -111.925793,"foodClass":"dineIn", "foodType":"taco", "placeID":"ChIJRxV8LOcIK4cRSX5SdZbEmIo","foodPrice":"$$"},
{"name":"Donar Dudes", lat: 33.414265, lng: -111.928919,"foodClass":"fastCasual", "foodType":"sandwich", "placeID":"ChIJlVB-cMIIK4cRvuuZ0YoUrPU","foodPrice":"$$"},
{"name":"Sushi 101", lat: 33.422391, lng: -111.925594,"foodClass":"fineDine", "foodType":"sushi", "placeID":"ChIJATplIecIK4cR5UuBpX7I8L4","foodPrice":"$$"},
{"name":"Whataburger", lat: 33.413119, lng: -111.926708,"foodClass":"fast", "foodType":"hamburger", "placeID":"ChIJldubjekIK4cRbfy4rzuP0eY","foodPrice":"$"},
{"name":"My Pie Pizza", lat: 33.422674, lng: -111.934707,"foodClass":"fastCasual", "foodType":"pizza", "placeID":"ChIJY3nR8yoPK4cRHQLTlj8PsWo","foodPrice":"$"},
{"name":"Buffalo Wild Wings", lat: 33.423572, lng: -111.925849,"foodClass":"dineIn", "foodType":"chicken", "placeID":"ChIJWU-P0-AIK4cRGS5DOUNQVdA","foodPrice":"$$"},
{"name":"Umami", lat: 33.422215, lng: -111.938733,"foodClass":"dineIn", "foodType":"noodles", "placeID":"ChIJI1SCSdgIK4cR_x-Qjag6sgQ","foodPrice":"$$"},
{"name":"The Bodhi", lat: 33.425024, lng: -111.934558,"foodClass":"fastCasual", "foodType":"acai bowl", "placeID":"ChIJuTm91tgIK4cRF13RsQkbCog","foodPrice":"$$"},
{"name":"House of Tricks", lat: 33.423526, lng: -111.937379,"foodClass":"fineDine", "foodType":"shrimp", "placeID":"ChIJ_0cdqtkIK4cR-uQSFv-RUhk","foodPrice":"$$$$"},
{"name":"The Baked Bear", lat: 33.425698, lng: -111.940372,"foodClass":"fastCasual", "foodType":"ice cream", "placeID":"ChIJWZSA_9cIK4cRO8Uz7rTsw1I","foodPrice":"$$"},
{"name":"The Blend Teahouse", lat: 33.425024, lng: -111.934558,"foodClass":"fastCasual", "foodType":"smoothie", "placeID":"ChIJqRgs0dgIK4cR88W5_-Eb3q4","foodPrice":"$$"},
{"name":"Taco Shack", lat: 33.421339, lng: -111.92577,"foodClass":"fastCasual", "foodType":"taco", "placeID":"ChIJufhTA-cIK4cRZfxUomGuVDA","foodPrice":"$$"},
{"name":"Jimmy John's", lat: 33.414234, lng: -111.928944,"foodClass":"fast", "foodType":"sandwich", "placeID":"ChIJ9WCPYsIIK4cR5WEByaRpEyA","foodPrice":"$$"},
{"name":"Taco Bell", lat: 33.41511, lng: -111.925793,"foodClass":"fast", "foodType":"taco", "placeID":"ChIJL2d1rOkIK4cRKUUgyDmKMx4","foodPrice":"$"},
{"name":"Taco Bell", lat: 33.41511, lng: -111.925793,"foodClass":"fast", "foodType":"burrito", "placeID":"ChIJL2d1rOkIK4cRKUUgyDmKMx4","foodPrice":"$"},
{"name":"Wendy's", lat: 33.378744, lng: -111.924373,"foodClass":"fast", "foodType":"hamburger", "placeID":"ChIJ87JhpCMGK4cRqC07s_vHgB4","foodPrice":"$"},
{"name":"Venezia's New York Style Pizzeria", lat: 33.391542, lng: -111.938669,"foodClass":"dineIn", "foodType":"pizza", "placeID":"ChIJkSyNn6UIK4cRVydbVGuaLHI","foodPrice":"$$"},
{"name":"Red Devil Italian Restaurant & Pizzeria", lat: 33.392918, lng: -111.942155,"foodClass":"dineIn", "foodType":"pizza", "placeID":"ChIJa2Fcw68IK4cRUyijnCHEVVI","foodPrice":"$$$"},
{"name":"TC Tacos", lat: 33.391571, lng: -111.938387,"foodClass":"fastCasual", "foodType":"taco", "placeID":"ChIJAWs8p6UIK4cRZeW-txy1rEM","foodPrice":"$"},
{"name":"TC Tacos", lat: 33.391571, lng: -111.938387,"foodClass":"fastCasual", "foodType":"burrito", "placeID":"ChIJAWs8p6UIK4cRZeW-txy1rEM","foodPrice":"$"},
{"name":"Arby's", lat: 33.407007, lng: -111.947302,"foodClass":"fast", "foodType":"sandwich", "placeID":"ChIJuU5uxMsIK4cRJ8MOuw1huqA","foodPrice":"$"},
{"name":"Popeyes Louisana Kitchen", lat: 33.406829, lng: -111.945612,"foodClass":"fast", "foodType":"chicken", "placeID":"ChIJkaBgeskIK4cR4fpQvSV9u4U","foodPrice":"$"},
{"name":"Burger Rush", lat: 33.407662, lng: -111.949664,"foodClass":"fastCasual", "foodType":"hamburger", "placeID":"ChIJ1dQQeMsIK4cRNEuiBvQCpqk","foodPrice":"$$"},
{"name":"Boulders on Broadway", lat: 33.4077, lng: -111.947545,"foodClass":"dineIn", "foodType":"sandwich", "placeID":"ChIJ4emK7MsIK4cRhUg0QYkUkAo","foodPrice":"$$"},
{"name":"Boulders on Broadway", lat: 33.4077, lng: -111.947545,"foodClass":"dineIn", "foodType":"hamburger", "placeID":"ChIJ4emK7MsIK4cRhUg0QYkUkAo","foodPrice":"$$"},
{"name":"Boulders on Broadway", lat: 33.4077, lng: -111.947545,"foodClass":"dineIn", "foodType":"pizza", "placeID":"ChIJ4emK7MsIK4cRhUg0QYkUkAo","foodPrice":"$$"},
{"name":"Outback Steakhouse", lat: 33.393766, lng: -111.910238,"foodClass":"dineIn", "foodType":"steak", "placeID":"ChIJmwoeV4EIK4cRaR_SISPoTNk","foodPrice":"$$"},
{"name":"Spokes on Southern", lat: 33.393155, lng: -111.914427,"foodClass":"dineIn", "foodType":"hamburger", "placeID":"ChIJ9ft3Y4MIK4cRB6SGQKrkCm8","foodPrice":"$$"},
{"name":"Spokes on Southern", lat: 33.393155, lng: -111.914427,"foodClass":"dineIn", "foodType":"sandwich", "placeID":"ChIJ9ft3Y4MIK4cRB6SGQKrkCm8","foodPrice":"$$"},
{"name":"Berry Divine Acai Bowls", lat: 33.439933, lng: -111.926941,"foodClass":"fastCasual", "foodType":"acai bowl", "placeID":"ChIJAfHpkhcJK4cR1sDE0e4dXUI","foodPrice":"$$"},
{"name":"House of Tricks", lat: 33.423526, lng: -111.937379,"foodClass":"fineDine", "foodType":"salad", "placeID":"ChIJx0DuqdkIK4cRqgxHxYTAEeE","foodPrice":"$$$"},
{"name":"House of Tricks", lat: 33.41511, lng: -111.925793,"foodClass":"fineDine", "foodType":"sandwich", "placeID":"ChIJx0DuqdkIK4cRqgxHxYTAEeE","foodPrice":"$$$"},
{"name":"Little Szechuan", lat: 33.422226, lng: -111.94652,"foodClass":"fastCasual", "foodType":"noodles", "placeID":"ChIJESfO1NUIK4cRQPd-SxTtsu8","foodPrice":"$$"},
{"name":"Boston Market", lat: 33.391251, lng: -111.908816,"foodClass":"fast", "foodType":"chicken", "placeID":"ChIJjQ0do4EIK4cRLliao8spWU8","foodPrice":"$$"},
{"name":"Sonic Drive-In", lat: 33.408196, lng: -111.921169,"foodClass":"fast", "foodType":"hamburger", "placeID":"ChIJP8ppTJMIK4cRlztErASGzxw","foodPrice":"$"},
{"name":"Denny's", lat: 33.40711, lng: -111.959769,"foodClass":"dineIn", "foodType":"hamburger", "placeID":"ChIJuxYaODEPK4cRElN2KUfoNm8","foodPrice":"$$"},
{"name":"Denny's", lat: 33.40711, lng: -111.959769,"foodClass":"dineIn", "foodType":"sandwich", "placeID":"ChIJuxYaODEPK4cRElN2KUfoNm8","foodPrice":"$$"},
{"name":"Philly's Sports Bar & Grill", lat: 33.412932, lng: -111.961145,"foodClass":"fastCasual", "foodType":"hamburger", "placeID":"ChIJyejKSi4PK4cRNPF5XtffWhI","foodPrice":"$$"},
{"name":"Philly's Sports Bar & Grill", lat: 33.412932, lng: -111.961145,"foodClass":"fastCasual", "foodType":"sandwich", "placeID":"ChIJyejKSi4PK4cRNPF5XtffWhI","foodPrice":"$$"},
{"name":"Philly's Sports Bar & Grill", lat: 33.412932, lng: -111.961145,"foodClass":"fastCasual", "foodType":"salad", "placeID":"ChIJyejKSi4PK4cRNPF5XtffWhI","foodPrice":"$$"},
{"name":"Philly's Sports Bar & Grill", lat: 33.412932, lng: -111.961145,"foodClass":"fastCasual", "foodType":"pizza", "placeID":"ChIJyejKSi4PK4cRNPF5XtffWhI","foodPrice":"$$"},
{"name":"Rally's", lat: 33.422337, lng: -111.961774,"foodClass":"fastCasual", "foodType":"hamburger", "placeID":"ChIJpx8q19cOK4cRQAtjb8xpn0w","foodPrice":"$"},
{"name":"Harlow's Cafe", lat: 33.421584, lng: -111.953134,"foodClass":"dineIn", "foodType":"steak", "placeID":"ChIJHUzX2ioPK4cRD4nKIlYVxEM","foodPrice":"$$$"},
{"name":"Harlow's Cafe", lat: 33.421584, lng: -111.953134,"foodClass":"dineIn", "foodType":"hamburger", "placeID":"ChIJHUzX2ioPK4cRD4nKIlYVxEM","foodPrice":"$$"},
{"name":"Harlow's Cafe", lat: 33.421584, lng: -111.953134,"foodClass":"dineIn", "foodType":"sandwich", "placeID":"ChIJHUzX2ioPK4cRD4nKIlYVxEM","foodPrice":"$$"},
{"name":"Harlow's Cafe", lat: 33.421584, lng: -111.953134,"foodClass":"dineIn", "foodType":"salad", "placeID":"ChIJHUzX2ioPK4cRD4nKIlYVxEM","foodPrice":"$$"},
{"name":"Cheba Hut", lat: 33.422728, lng: -111.951457,"foodClass":"fastCasual", "foodType":"sandwich", "placeID":"ChIJgVcURtUIK4cRKsFNdLJbCfU","foodPrice":"$$"},
{"name":"Cheba Hut", lat: 33.422728, lng: -111.951457,"foodClass":"fastCasual", "foodType":"salad", "placeID":"ChIJgVcURtUIK4cRKsFNdLJbCfU","foodPrice":"$$"},
{"name":"Perfect Pear Bistro", lat: 33.421594, lng: -111.947568,"foodClass":"dineIn", "foodType":"taco", "placeID":"ChIJt0t9NtQIK4cRCYmxbO59Ys8","foodPrice":"$$"},
{"name":"Perfect Pear Bistro", lat: 33.421594, lng: -111.947568,"foodClass":"dineIn", "foodType":"sandwich", "placeID":"ChIJt0t9NtQIK4cRCYmxbO59Ys8","foodPrice":"$$"},
{"name":"Perfect Pear Bistro", lat: 33.421594, lng: -111.947568,"foodClass":"dineIn", "foodType":"salad", "placeID":"ChIJt0t9NtQIK4cRCYmxbO59Ys8","foodPrice":"$$"},
{"name":"Perfect Pear Bistro", lat: 33.421594, lng: -111.947568,"foodClass":"dineIn", "foodType":"taco", "placeID":"ChIJt0t9NtQIK4cRCYmxbO59Ys8","foodPrice":"$$"},
{"name":"Ted's Hot Dogs", lat: 33.407046, lng: -111.909631,"foodClass":"fastCasual", "foodType":"hotdog", "placeID":"ChIJ3fCXmosIK4cR9y9wMYhZDcQ","foodPrice":"$"},
{"name":"Wienerschnitzel", lat: 33.421026, lng: -111.909654,"foodClass":"fastCasual", "foodType":"hotdog", "placeID":"ChIJtVac4vkIK4cRmh8XXzYjh24","foodPrice":"$"},
{"name":"Portillo's Hot Dogs", lat: 33.429743, lng: -111.908606,"foodClass":"fastCasual", "foodType":"hotdog", "placeID":"ChIJp0BgW_4IK4cRNDejG57DDYQ","foodPrice":"$"},
{"name":"Chompies", lat: 33.422418, lng: -111.919924,"foodClass":"fastCasual", "foodType":"sandwich", "placeID":"ChIJ1Uy7UOQIK4cR31OnoyriA1Q","foodPrice":"$$$"},
{"name":"Chompies", lat: 33.422418, lng: -111.919924,"foodClass":"fastCasual", "foodType":"salad", "placeID":"ChIJ1Uy7UOQIK4cR31OnoyriA1Q","foodPrice":"$$$"},
{"name":"Chompies", lat: 33.422418, lng: -111.919924,"foodClass":"fastCasual", "foodType":"hamburger", "placeID":"ChIJ1Uy7UOQIK4cR31OnoyriA1Q","foodPrice":"$$$"},
{"name":"Culinary Dropout", lat: 33.428692, lng: -111.944005,"foodClass":"dineIn", "foodType":"sandwich", "placeID":"ChIJz1FRBSkJK4cRra_-XqlLJT0","foodPrice":"$$$"},
{"name":"Culinary Dropout", lat: 33.428692, lng: -111.944005,"foodClass":"dineIn", "foodType":"salad", "placeID":"ChIJz1FRBSkJK4cRra_-XqlLJT0","foodPrice":"$$$"},
{"name":"Culinary Dropout", lat: 33.428692, lng: -111.944005,"foodClass":"dineIn", "foodType":"hamburger", "placeID":"ChIJz1FRBSkJK4cRra_-XqlLJT0","foodPrice":"$$$"},
{"name":"Fired Pie", lat: 33.422183, lng: -111.945402,"foodClass":"fastCasual", "foodType":"pizza", "placeID":"ChIJy2UcidYIK4cRv6T3xYmhnNA","foodPrice":"$$"},
{"name":"Fired Pie", lat: 33.422183, lng: -111.945402,"foodClass":"fastCasual", "foodType":"salad", "placeID":"ChIJy2UcidYIK4cRv6T3xYmhnNA","foodPrice":"$$"},
{"name":"Blaze Pizza", lat: 33.411657, lng: -111.94149,"foodClass":"fastCasual", "foodType":"pizza", "placeID":"ChIJiRCEQdcIK4cR1NJy3OKFqSc","foodPrice":"$$"}
];

var filter1 = []; // holds the items from restaurants that meet the foodType criteria
var filter2 = []; // holds the items from the filter1 (foodType array) that meet the foodClass criteria
var filter3 = []; // holds the items from the filter2 (foodClass array) that meet the foodPrice criteria
var filterCount = 0;
var filterCount2 = 0;
var filterCount3 = 0;
var restaurantsCount = 0;
var doYouWantLabel; // string to hold what the user will see for food options
var foodType;
var foodClass;
var destination; // keeps the lat/lng/placeID of the selected restaurant
var foodPrice; // price/$$$$
var surpriseMeBool = false; //if the user clicks surprise me set true
var firstLoad = true;

var map, infoWindow, pos, directionsDisplay, directionsService, marker, markerOptions, randomDestination; // variables for google maps api

/*// uncomment for mobile
// wait until all phonegap/cordova is loaded then call onDeviceReady

document.addEventListener("deviceready", onDeviceReady, false);


function onDeviceReady() {
    //alert("onDeviceReady");
    
    StatusBar.overlaysWebView(false);// push the webview down below the statusBar
    showHomeTab(); // call function to show home screen
    loadScript('initMap'); // call function to load the map api
}*/

/* for web */

function initialize() {
     showHomeTab();
     loadScript('initMap');
 }

function doYouWant(form) {
    "use strict";
    // assigns variables based on html elements
    var foodType = document.getElementById("foodType").value;
    var foodClass = document.getElementById("foodClass").value;
    var foodPrice = document.getElementById("foodPrice").value; 

    // checks the selected foodType against the items in the restaurants array
    switch(foodType) {
        case "burrito":
        {
            for(var i = 0; i < restaurants.length; i++)
            {
                if(restaurants[i].foodType == "burrito")
                {
                    filter1[filterCount] = restaurants[i];
                    filterCount++;
                }
            }
            break;
        }
        case "sandwich":
        {   
            for(var i = 0; i < restaurants.length; i++) 
            {
                if(restaurants[i].foodType == "sandwich") 
                {
                    filter1[filterCount] = restaurants[i];
                    filterCount++;
                }
            }
            break;
        }
        case "sushi":
        {
            for(var i = 0; i < restaurants.length; i++)
            {
                if(restaurants[i].foodType == "sushi")
                {
                    filter1[filterCount] = restaurants[i];
                    filterCount++;
                }
            }
            break;
        }
        case "hamburger":
        {
            for(var i = 0; i < restaurants.length; i++)
            {
                if(restaurants[i].foodType == "hamburger")
                {
                    filter1[filterCount] = restaurants[i];
                    filterCount++;
                }
            }
            break;
        }
        case "pizza":
        {
            for(var i = 0; i < restaurants.length; i++)
            {
                if(restaurants[i].foodType == "pizza")
                {
                    filter1[filterCount] = restaurants[i];
                    filterCount++;
                }
            }
            break;
        }
        case "chicken":
        {
            for(var i = 0; i < restaurants.length; i++)
            {
                if(restaurants[i].foodType == "chicken")
                {
                    filter1[filterCount] = restaurants[i];
                    filterCount++;
                }
            }
            break;
        }
        case "hotdog":
        {
            for(var i = 0; i < restaurants.length; i++)
            {
                if(restaurants[i].foodType == "hotdog")
                {
                    filter1[filterCount] = restaurants[i];
                    filterCount++;
                }
            }
            break;
        }
        case "noodles":
        {
            for(var i = 0; i < restaurants.length; i++)
            {
                if(restaurants[i].foodType == "noodles")
                {
                    filter1[filterCount] = restaurants[i];
                    filterCount++;
                }
            }
            break;
        }
        case "acai bowl":
        {
            for(var i = 0; i < restaurants.length; i++)
            {
                if(restaurants[i].foodType == "acai bowl")
                {
                    filter1[filterCount] = restaurants[i];
                    filterCount++;
                }
            }
            break;
        }
        case "shrimp":
        {
            for(var i = 0; i < restaurants.length; i++)
            {
                if(restaurants[i].foodType == "shrimp")
                {
                    filter1[filterCount] = restaurants[i];
                    filterCount++;
                }
            }
            break;
        }
        case "steak":
        {
            for(var i = 0; i < restaurants.length; i++)
            {
                if(restaurants[i].foodType == "steak")
                {
                    filter1[filterCount] = restaurants[i];
                    filterCount++;
                }
            }
            break;
        }
        case "ice cream":
        {
            for(var i = 0; i < restaurants.length; i++)
            {
                if(restaurants[i].foodType == "ice cream")
                {
                    filter1[filterCount] = restaurants[i];
                    filterCount++;
                }
            }
            break;
        }
        case "frozen yogurt":
        {
            for(var i = 0; i < restaurants.length; i++)
            {
                if(restaurants[i].foodType == "frozen yogurt")
                {
                    filter1[filterCount] = restaurants[i];
                    filterCount++;
                }
            }
            break;
        }
        case "salad":
        {
            for(var i = 0; i < restaurants.length; i++)
            {
                if(restaurants[i].foodType == "salad")
                {
                    filter1[filterCount] = restaurants[i];
                    filterCount++;
                }
            }
            break;
        }
        case "smoothie":
        {
            for(var i = 0; i < restaurants.length; i++)
            {
                if(restaurants[i].foodType == "smoothie")
                {
                    filter1[filterCount] = restaurants[i];
                    filterCount++;
                }
            }
            break;
        }
        case "taco":
        {
            for(var i = 0; i < restaurants.length; i++)
            {
                if(restaurants[i].foodType == "taco")
                {
                    filter1[filterCount] = restaurants[i];
                    filterCount++;
                }
            }
            break;
        }
    }

    // checks for selected foodClass against filter1 array
    switch(foodClass)
    {
        case "fast":
        {
            for(var i = 0; i < filter1.length; i++)
            {
                if(filter1[i].foodClass == "fast")
                {
                    filter2[filterCount2] = filter1[i];
                    filterCount2++;
                }
            }
            break;
        }
        case "fastCasual":
        {
            for(var i = 0; i < filter1.length; i++)
            {
                if(filter1[i].foodClass == "fastCasual")
                {
                    filter2[filterCount2] = filter1[i];
                    filterCount2++;
                }
            }
            break;
        }
        case "dineIn":
        {
            for(var i = 0; i < filter1.length; i++)
            {
                if(filter1[i].foodClass == "dineIn")
                {
                    filter2[filterCount2] = filter1[i];
                    filterCount2++;
                }
            }
            break;
        }
        case "fineDine":
        {
            for(var i = 0; i < filter1.length; i++)
            {
                if(filter1[i].foodClass == "fineDine")
                {
                    filter2[filterCount2] = filter1[i];
                    filterCount2++;
                }
            }
            break;
        }
    }

    // checks for selected foodPrice against filter2 array
    switch(foodPrice)
    {
        case "$":
        {
            for(var i = 0; i < filter2.length; i++)
            {
                if(filter2[i].foodPrice == "$")
                {
                    filter3[filterCount3] = filter2[i];
                    filterCount3++;
                }
            }
            break;
        }
        case "$$":
        {
            for(var i = 0; i < filter2.length; i++)
            {
                if(filter2[i].foodPrice == "$$")
                {
                    filter3[filterCount3] = filter2[i];
                    filterCount3++;
                }
            }
            break;
        }
        case "$$$":
        {
            for(var i = 0; i < filter2.length; i++)
            {
                if(filter2[i].foodPrice == "$$$")
                {
                    filter3[filterCount3] = filter2[i];
                    filterCount3++;
                }
            }
            break;
        }
        case "$$$$":
        {
            for(var i = 0; i < filter2.length; i++)
            {
                if(filter2[i].foodPrice == "$$$$")
                {
                    filter3[filterCount3] = filter2[i];
                    filterCount3++;
                }
            }
            break;
        }
    }

    // if there is no results tell the user else show results
    if(filter1.length == 0 || filter2.length == 0 || filter3.length == 0)
    {
        doYouWantLabel.innerHTML = "There are no options matching your cravings, change your options and try again!";
        document.getElementById("yesButton").disabled = true;
    }
    else
    {
        // displays restaurant options to user
        doYouWantLabel.innerHTML = "Do You Want " + filter3[restaurantsCount].name + "?";
        document.getElementById("yesButton").disabled = false;
    }

    
}

function noClick() {
    console.log("in function noClick()");
    
    if(surpriseMeBool == true)
    {
    	document.getElementById("yesButton").disabled = false;
    	randomDestination = restaurants[Math.floor(Math.random()*restaurants.length)];
    	surpriseMe();
    }
    else
    {
	    if(filter1.length == 0 || filter2.length == 0 || filter3.length == 0)
	    {

	        doYouWantLabel.innerHTML = "There are no options matching your cravings, change your options and try again!";
	        document.getElementById("yesButton").disabled = true;
	    }
	    else
	    {
	    	restaurantsCount++;
	        if(restaurantsCount >= filter3.length)
	        {
	            doYouWantLabel.innerHTML = "There are no options left matching your cravings, change your options and try again!";
	            document.getElementById("yesButton").disabled = true;
	        }
	        else
	        {
	        // displays restaurant options to user
	        doYouWantLabel.innerHTML = "Do You Want " + filter3[restaurantsCount].name + "?";
	        }
	    }
	}

}

function yesClick() {
    console.log("in function yesClick()");
    destination = {lat: filter3[restaurantsCount].lat, lng: filter3[restaurantsCount].lng, "placeID":filter3[restaurantsCount].placeID};
    console.log(destination);
    showTab(event, 'Map'  );
}

// clears all variables
function clearForm() {

    console.log("in function clearForm())");
    restaurantsCount = 0;
    filterCount = 0;
    filterCount2 = 0;
    filterCount3 = 0;
    filter1 = [];
    filter2 = [];
    filter3 = [];
    foodType = "";
    foodClass = "";
    foodPrice = "";
    surpriseMeBool = false;
    doYouWantLabel.innerHTML = "";
    document.getElementById("yesButton").disabled = false;
    inputForm.reset();
    showHomeTab();
}

// shows the home page of the app to the user
function showHomeTab() {
	if(firstLoad == true)
	{
	    var preload = document.getElementById("load").click();
	    var loading = 0;
	    var id = setInterval(frame, 64);

	    // controls the loading splash screen
	    function frame() {
	        if(loading >= 100) {
	            clearInterval(id);
	            document.getElementById('home').click();
	        }
	        else {
	            // increment for faster, deincrement for slower
	            loading = loading +3;
	        }
	    }
	    firstLoad = false;
    }
    else
    {
    	document.getElementById('home').click();
    }
}

// for changing tabs
function showTab(event, tabName) {
    // Declare all variables
    var i, tabContentElems, tabLinkElems;

    // Get all elements with class="tabContent" and hide them
    tabContentElems = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabContentElems.length; i++) {
        tabContentElems[i].style.display = "none";
    }

    // Get all elements with class="tabLink" and remove the class "active"
    tabLinkElems = document.getElementsByClassName("tabLink");
    for (i = 0; i < tabLinkElems.length; i++) {
        tabLinkElems[i].className = 
            tabLinkElems[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " active";
}

// handles the google maps api and posts a script tag with it to html page
function loadScript(callback) {
    var script       = undefined;
    var googleAPIKey = "AIzaSyAUeRgSMtlmspzf55GyU10ADl3MuANtqAE";
    var googleAPIUrl = "https://maps.googleapis.com/maps/api/js";

    var srcURL       = googleAPIUrl + '?key=' + googleAPIKey 
                            + '&callback=' + callback;

    script           = document.createElement('script');
    script.type      = "text/javascript";
    script.async     = true;
    script.defer     = true;
    script.src       = srcURL;

    document.body.appendChild(script);
}

// uses google maps api to show a patch on the map from the users current position to the destination
function initMap() {
        directionsService = new google.maps.DirectionsService;
        directionsDisplay = new google.maps.DirectionsRenderer;

        randomDestination = restaurants[Math.floor(Math.random()*restaurants.length)];
   		destination = {lat: randomDestination.lat, lng: randomDestination.lng};


        map = new google.maps.Map(document.getElementById('mapDiv'), {
          zoom: 18,
          center: destination
        });
        	//markerOptions   = {position: destination, map: map};
        	marker = new google.maps.Marker();

        infoWindow = new google.maps.InfoWindow;

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
          }, function(error) {
            alert('code: '    + error.code    + '\n' +
                  'message: ' + error.message + '\n');
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
        directionsDisplay.setMap(map);
      
        var onClickHandler = function() {
          calculateAndDisplayRoute(directionsService, directionsDisplay);
        };
        document.getElementById('yesButton').addEventListener('click', onClickHandler);
      }

function calculateAndDisplayRoute(directionsService, directionsDisplay) {
directionsService.route({
  origin: pos,
  destination: destination,
  travelMode: 'WALKING'
}, function(response, status) {
  if (status === 'OK') {
    directionsDisplay.setDirections(response);
  } else {
    window.alert('Directions request failed due to ' + status);
  }
});
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
infoWindow.setPosition(pos);
infoWindow.setContent(browserHasGeolocation ?
                      'Error: The Geolocation service failed.' :
                      'Error: Your browser doesn\'t support geolocation.');
infoWindow.open(map);
}

// opens native google maps in navigation mode to the destination
function openMaps() {// uses google maps URL's-cross platform // leave out origin to use current location // lat,lng destination // use placeID to get the address and name  // travelmode Walk // starts right into navigation
var openDirections = "https://www.google.com/maps/dir/?api=1&destination=" + destination.lat + "," + destination.lng + "&query_place_id=" + destination.placeID + "&travelmode=walking&dir_action=navigate";
//launches google maps
window.open(openDirections);
}

// opens native google maps in a panoramic street view of the destination
function openStreetView() {// uses google maps URL's-cross platform // map_action=pano is street view // viewpoint finds closest street view pano to the coordinates
    var openStreetView = "https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=" + destination.lat + "," + destination.lng;
    //launches google maps
    window.open(openStreetView);
}

// picks a random restaurant for the user and skips to map tab
function surpriseMe() {
	surpriseMeBool = true;
    initMap(); // check this function, it instantiates destination with a random restaurants index
    console.log(randomDestination);
    filter3[0] = randomDestination;
    filterCount3++;
    doYouWantLabel.innerHTML = "Meal Ave chose " + randomDestination.name + " for you. It's price range is " + randomDestination.foodPrice + "/$$$$. Try their " + randomDestination.foodType + ".";

    showTab(event, 'Food'  );

}