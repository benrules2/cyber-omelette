---
title: "Reddit Data Mining with Python: Are Canadians Really Sorry?"
date: 2016-11-07
slug: the-programmable-web-are-canadians
tags: ["python", "software", "sentiment analysis", "friendly", "data mining", "germany", "praw", "graphing", "sorry", "reddit", "api", "stereotype", "canadians", "word count"]
original_url: /2016/11/the-programmable-web-are-canadians.html
---

Internationally, Canadians have a reputation for being a sorry lot. In fact, we've even passed a law called "The Apology Act" stating that [saying "sorry" does not count as an admission of guilt](https://www.ontario.ca/laws/statute/09a03&pm=pd). A very sensible law indeed.  

  

Is this stereotype true?

  

We're going to test it in this tutorial, by counting the frequency of apologies in a number of Canadian [subreddits](https://en.wikipedia.org/wiki/Reddit#Subreddits). We will do this using python, and a module called praw which provides an interface to the Reddit API.  
  
Then we will generalize the python program to allow us to search any subreddit for any set of words using command line arguments.  
  
The final program can be found [here](https://gist.github.com/benrules2/ff7b18cde17fbcb9b7bf6eab321ab809#file-word_count-py), and an intro to python can be found [here](http://cyber-omelette.blogspot.ca/2016/11/intro-python-part-1.html).  
  

### Setup

  

The first step is to make sure you have python 3 or higher, and the praw module. If you have python 3, praw can be installed simply by running the following command your shell or command prompt:  

  
$>python -m pip install praw

  
  

Then you will need to go to [reddit's app dashboard](https://www.reddit.com/prefs/apps) and create an app. To do this, follow the app dashboard link and log into an account. Then scroll to the bottom of the app dashboard, and click "Create App".  
  
Give it a custom name and a description. Select script from the radio buttons, and enter http://127.0.0.1 as the redirect uri.  
  
  

[
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjRH3M0n59CjWsJbHepw8B4zLcjKoLzfd5Qjm-fAPfDdejwOspM66i2uPmk-HAsSF5-p5JkSfqnZosWKcKlUbGxYBrR2BtcbwBVo1QCt-Ovb6vJ2-jeyW5Nkp5X-rE_0diwHk37Xkg5dlA/s640/AppConfig.PNG)
](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjRH3M0n59CjWsJbHepw8B4zLcjKoLzfd5Qjm-fAPfDdejwOspM66i2uPmk-HAsSF5-p5JkSfqnZosWKcKlUbGxYBrR2BtcbwBVo1QCt-Ovb6vJ2-jeyW5Nkp5X-rE_0diwHk37Xkg5dlA/s1600/AppConfig.PNG)

  
Once created, you need to retrieve your client\_id, and client\_secret. Those are found in the app view, with the id listed right under the title, and the secret clearly labelled.  
  
  

[
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhdoFMYqO0H3JD-20lowSc4kof3TL6RPqv7SiLrX0gY7-fsaitCS-f7sK7gCpp2WoJtyySFw5qFNl-IaxBfqDcPxSInQgmPWlFaNU1uUflrjY-r6TaVAgld_szCtBcgLzYmGVfwV-_MsCU/s400/user_info.PNG)
](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhdoFMYqO0H3JD-20lowSc4kof3TL6RPqv7SiLrX0gY7-fsaitCS-f7sK7gCpp2WoJtyySFw5qFNl-IaxBfqDcPxSInQgmPWlFaNU1uUflrjY-r6TaVAgld_szCtBcgLzYmGVfwV-_MsCU/s1600/user_info.PNG)

client\_id and client\_secret (unique to your own app, the ones in this image won't work)

  
  
  
  

### Writing the code

  
  
In this program we will be connecting to the reddit API with our app credentials, retrieve comments, and counting the word frequency that meet our apology conditions. Our result will be simply the printed output of the total words vs the number of apologies.  

  

The first step is connecting to our reddit account. That can be done with the following function, which returns the authorized reddit\_agent.  
  

[View Gist](https://gist.github.com/benrules2/434159930afdead0dddf53634a41b0a1)

  
  

Then we will gather the comments in a get\_subreddit\_comments function. This uses the praw get\_comments API call to retrieve comments by subreddit. We just care about the text, so we will iterate through the comments and add the comment bodies to a list.  
  
Here is get\_subreddit\_comments:  
  

[View Gist](https://gist.github.com/benrules2/fbc25b7a42449b8f774c99729b55ecad)

  

  
Now we just need to look through the list populated in get\_subreddit\_comments and count instances of apologies. What counts as an apology can be tweaked by changing the input apologies list, I have been using "sorry" and "apologies". Then we simply separate the messages into individual words, and check against our "sorry" criteria.  
  

[View Gist](https://gist.github.com/benrules2/8a0cbd83630502dd5fa8ec45cdd3823e)

  
With our three required functions defined, now we just have to put it all together in a main function. You can also retrieve our entire program so far [here](https://gist.github.com/benrules2/f50dae985674c9f95c393bb052d7edba).  
  
  

[View Gist](https://gist.github.com/benrules2/032d3a66343cce680594ef646044bb71)

  

### Sorry, not sorry  

  
So what do we find? When I ran this program on November 6th, 2016, at 1pm, my results were:  

  

Canadians sorry rate:  
0.008% (3 / 39703)

  

World sorry rate:  
0.029% (72 / 258100)

  

So from this data it looks like we don't apologize as much as the general world. Take that stereotypes! We gathered 1000 comments in both cases though, and there are far more total words for the world wide sample. So either Canadians don't apologize, and use far fewer words, or maybe something else is up.  
  
Let's make some changes to the code to investigate further.  
  

### Generic sentiment analysis tool

  
To get a better idea of what is going on, it would be useful to be able to change our program quickly and easily. Fortunately this just requires slight modification, allowing us to pass subreddits and search words from the command line.

Those modifications can be found [here](https://gist.github.com/benrules2/ff7b18cde17fbcb9b7bf6eab321ab809#file-word_count-py).

  

Using these changes, we can dig a bit deeper into how true the previous result was. For example, we noticed there were much fewer words in our comment list for the "Canada" sample. That's likely due to many of the provincial subreddits being less active.

  

If we look at just [/r/canada](http://www.reddit.com/r/canada) on its own, we see 0.003% (88 / 277663) apologies. Longer comments, and more apologies than /r/[all](http://www.reddit.com/r/all)! So maybe we really are sorry.

  

To run the search on /r/canada on it's own, I used the generic program in the command line as follows from the same directory as word\_count.py:

  

$> python word\_count.py "canada" "sorry, apologies"

  

### Sorriest Country? Germany!

  
Using this tool, I searched the subreddits of countries with the [largest number of english speakers](https://en.wikipedia.org/wiki/List_of_countries_by_English-speaking_population)  

to compare the relative apology rates. It looks like Germans apologize the most, and Italians the least! Canada is still a solid top 3 though.

  

  
[
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiPReAz5mHC6MFKzuVsaCHAfyrw3Ug8Ia41a4MuTugAMv-DSeadwZ9f_I3V8X2SzSxYa1PI9gBb7J4IBWjHGzBMFBWAuEtrTJ9itCdhaDxibyZcrBvIXA2n07fMKcWUzpoGPAi_D8ClrjM/s640/sorry_count.png)
](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiPReAz5mHC6MFKzuVsaCHAfyrw3Ug8Ia41a4MuTugAMv-DSeadwZ9f_I3V8X2SzSxYa1PI9gBb7J4IBWjHGzBMFBWAuEtrTJ9itCdhaDxibyZcrBvIXA2n07fMKcWUzpoGPAi_D8ClrjM/s1600/sorry_count.png)