---
title: "Simple Python Twitter Bot "
date: 2016-11-03
slug: the-programmable-web-basic-python
tags: ["easy programming", "python", "tweepy", "mirror", "educational", "programmable web", "software", "bot", "twitter", "walkthrough", "cyber omelette", "api", "tutorial", "simple python"]
original_url: /2016/11/the-programmable-web-basic-python.html
---

## Twitter Bots

  
Twitter has some amazing bot personalities; from celebrity impersonators, to genuinely useful automated announcements. It is also probably the first place anyone was exposed to bots and interacted with them. Some of my favourites are [BIGBEN](https://twitter.com/big_ben_clock?lang=en) and [CaptainMarkov](https://twitter.com/captain_markov). It is also very easy to make a simple bot, especially if you're familiar with python.  
  

In this post, I'm going to walk you through the creation of [Mirror\_Bot\_1000](http://twitter.com/mirror_bot_1000). Mirror\_bot\_1000 reads tweets when its username is mentioned, and then makes its own tweet with the mirror image.  
  
It's a great example for the simple interactions with Twitter's API because it requires you to read a message, post a message, and keep track of where you left off. If you want to make your bot more complicated, you just have to modify the decision-making behind the tweets.  
  
The entirety of the code in this example can be found on github [here](https://github.com/benrules2/basic_twitter). An intro to python can be found [here.](http://cyber-omelette.blogspot.ca/2016/11/intro-python-part-1.html)  
  

### Account Setup

  
  
  

The first step is creating an account, and getting the keys to interact with the API. The requirement is simply a Twitter account with a phone number attached. Pro-tip: with Gmail you can make an e-mail alias to have multiple accounts under one address. For example, youremail+YOURBOTNAME@gmail.com

  

Once your account is set up, we need to create and register a Twitter app. To do this, start by heading over to Twitter's apps landing page: [https://apps.twitter.com](https://apps.twitter.com/). Here you will log in, and select "Create a New App". It asks for a name, description, URL, and callback URL. Only the name and description are mandatory.

  

Once this is done, return to [https://apps.twitter.com](https://apps.twitter.com/), and click on the new application. Navigate to the "Keys and Access Tokens" tab and scroll down to see:

  

Consumer Key

Consumer Secret

Access Token Key

Access Token Secret

  

You may have to click a button to generate the access token. Write these down, as you will need them shortly.

  

### Twitter Bot Setup

  
To create this bot, you simply need a python interpreter (version 3 and up for this tutorial) and a text editor. You will also need to install the [tweepy](http://docs.tweepy.org/en/v3.5.0/getting_started.html) module.

  

This is as simple as opening a command prompt, and running the command:  
$> python -m easy\_install tweepy  
  

### Hello World: Posting a Status

  

Once you have installed tweepy and retrieved your authorization info (consumer and access keys), it's time to start interacting with twitter. The most basic interaction is simply to authorize your account, and post a message. This can be be seen in the following snippet:

  

[View Gist](https://gist.github.com/benrules2/9de59c35143b2ecd50e06e741510198e)

Add this code to a file, and name it "BasicTwitter.py". Replace the key and secrets with your own account information, and set the message to anything you would like.  
  
To run this program, open a bash shell or command prompt window and run the following:  
$> python /BasicTwitter.py  
  
If your account information was entered successfully, this will post the message to your twitter account!  
  

### Read a status

  
Now that we know our authorization is working and we're able to post status updates, let's try reading a status. More specifically, let's search for cases where your username has been mentioned, which is how most interactive bots gather input.

  

To read statuses, we will use the tweepy.cursor to look for any timeline\_mentions. Then we will push all mentioned text to a list object, and return a dict with all the text from the tweets and the highest id. This id will be handy in the next step, to prevent us from repeating the same tweets.

  

[View Gist](https://gist.github.com/benrules2/41c0358cb59008c9bc7c8adc76c0bfee)

  

### It's ALIVE! Mirrorbot is born.

  

Now for la pièce de résistance! It's time to put it together into a bot. We need to create a script that will read mentions, reverse the text, and post this as our status. We will put all of this in a "while loop" that does all of the above, and then sleeps for a while to avoid making too many API requests. We will also save the message id so that on the next check only new messages are retrieved.

  

Note: In python there is a handy trick where you can just append \[::-1\]to a string to get the reverse.

  

Here's how the body of the bot appears:

  

[View Gist](https://gist.github.com/benrules2/b1f219510400a3eff480184f5707477e)

Run our shell command once again to start the program, and you'll have your very own living breathing twitter bot!  
  

$> python /BasicTwitter.py  
  
Bonus: [Setup a raspberry pi server for your twitter bot](http://cyber-omelette.blogspot.com/2016/12/raspberry-pi-server.html).