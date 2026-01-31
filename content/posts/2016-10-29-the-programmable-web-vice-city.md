---
title: "Vice City: Python Automated Sports Betting"
date: 2016-10-29
slug: the-programmable-web-vice-city
tags: ["easy programming", "python", "educational", "programmable web", "software", "gambling", "Pinnacle", "betting bot", "sports betting", "REST", "DIY", "cyber omelette", "api", "tutorial", "simple python"]
original_url: /2016/10/the-programmable-web-vice-city.html
---

## Automated Sports Betting

  
Everyone knows gambling is a great way to make money (/s). I myself formed this conclusion after hearing bookies will sometimes pay out before an event even happens, which planted a betting strategy in my mind that required a bot. This very successfully and slowly lost me my $50 investment, but I had a lot of fun making it, so I thought I would share the project.  
  
If you use this guide, please **don't be stupid**. Basically nobody comes out on top in the sports betting world. It's not going to be you! So maybe have some fun testing out theories, or let a robot lose money on your favourite sports team, but be prepared to lose any money you deposit in your Pinnacle account.  
  
This is my first tutorial, so if you use this project I'd love to hear how it goes. If you manage to make a lot of money, a donation to Wikipedia would be appreciated.  
  
Now let's get down to the coding. Taking a look at the [official API documentation](https://www.pinnacle.com/en/api/manual) at this point would be wise as well. All the source code referenced can be found at my github [here](https://github.com/benrules2/losemoneybot), along with any future bug fixes. An intro to python can be found [here.](http://cyber-omelette.blogspot.ca/2016/11/intro-python-part-1.html)  
  
In my bot, there are three essential stages.  
  
1\. Gather information. (Balance, Odds)  
2\. Check Criteria. (Find desirable bets)  
3\. Place bet.  

  
  

You will also need an account at www.pinnacle.com, and deposit some money to activate API access. The username and password of this account with be added to the header of all http requests.

  

  
You will also need to import as follows in your python file:  
  
import urllib.request as ulib  
import base64  
import uuid  
import json

  

## Gathering Information

####   
Get Balance:

The very first step is to retrieve your balance from the API. This is the simplest API use case.  
  

[View Gist](https://gist.github.com/benrules2/34be7f85d9a6af499717467199fb4eb5)

Here we start by building up the URL and headers needed to perform a GET request, which will return a JSON response with the balance information. Using json.loads converts JSON response back to a python dict.  

#### Get Odds:

Once you have checked your balance, the next step is to gather information about the sports we are interested in. Check the API for sports codes, but in this example we will use "15" which represents american football, and is given as a default parameter.

  
Get odds is very similar to getting the balance, however the sport information is added to the URL, and the response is a bit difference. It is still simply a GET request. Note the variables included in the url after the "?", specifying a sport and odds format.  
  

[View Gist](https://gist.github.com/benrules2/b4f0dcb2a93e6babc11e2e04dfe6dc53)

  

## Check Criteria

  
Now we have retrieved our balance information, and retrieved some odds. It's time to look through the odds to find a favorable betting situation. For this example, lets use the scenario where the odds are in favour of the home team.  
  
If you check the API, you can see the odds contain a "moneyline", and "team" entry. So we want to look through all the odds until we find a case where the moneyline assosciated with the home team is less than 1.91 (meaning you get 91 cents profit). If it's perfectly balance, you would expect this to be 2.0, however Pinnacle takes 0.09 of each bet. Passing the dict returned in the previous method to the following function will return the first bet that meets the criteria.  
  
This is fairly straightforward, but looks complex due to the heirarchy of the returned values. I would recommend a debugger for this especially, as it lets you view all the entries, and navigate hierarchy.  
  

[View Gist](https://gist.github.com/benrules2/34ed8c83028806ce3560e80f6f694fe6)

  

## Place Bet

  
Now we have found our balance, checked odds, and returned bet info for a scenario we would like to bet one. There are two steps involved in this action. Gathering additional data to place the bet with, and actually submitting the POST form.  
  

### Gather Required Bet Info

  
The first is to gather a little more information about our bet. Specifically, you need to know if your side is "Team1" or "Team2". This is done by using the Get Line API call, and checking if Team1 odds match our criteria. If so, we want "Team1", if not, we retrieve "Team2" data.  
  
There is additional information in here too, like "minRiskStake" that we will use to verify our bet is valid.  
  

[View Gist](https://gist.github.com/benrules2/2e21186645bab06e12853dbe5c8de764)

  

### Submitting Bet

  
Finally, it's time to submit the bet. In this step, you build up a dict containing all the data needed for the Place Bet API call. Then this is converted to a JSON file, and a POST is send to the designated URL.  
  

[View Gist](https://gist.github.com/benrules2/0ea2328a29610c35fa9dae50bfb39b92)

  

## All Together Now

  
We have now defined functions to complete the workflow. Now we just have to call them in the right order, with some simple checks.  
  
The easiest way is just to stuff the following code into the source file we have been working from. In this code we attempt to place one bet. Additional logic can be added to set a timer for these checks, and to handle any exceptions that may arise.  
  

[View Gist](https://gist.github.com/benrules2/79f8b3ada65bb17952d17cca454f04a6)

And there you have it. Running this from a command prompt like so: ">python3.5 PinnacleBetBot.py" will automatically place bets in favour of the home team in your name.