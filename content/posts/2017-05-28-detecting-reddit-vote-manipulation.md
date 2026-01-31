---
title: "Detecting Reddit Vote Manipulation"
date: 2017-05-28
slug: detecting-reddit-vote-manipulation
tags: ["reddit api", "python", "learnpython", "programmable web", "reddit", "vote manipulation", "praw"]
original_url: /2017/05/detecting-reddit-vote-manipulation.html
---

I'll start this post with a disclaimer. This project has not produced conclusive results. But I'm optimistic! In fact, I've got a couple hurdles that maybe some of the people reading this can help with (which is what I'm hoping for).  
  
So let me describe what I have been working on. This is a python tool with two modes of operation. The first mode of operation looks at a single reddit post, and gathers statistics about the first 5 users to comment. This includes the user karma (average), account age (average), number of interactions on the subreddit (average), and number of interactions with other commenters in the thread (max, avg max, and average).  
  
  
The second mode is a batch style operation of the same process, but for the top 50 posts in the subreddit. This gathers a subreddit average of all the above statistics with the intention of getting an approximate fingerprint.  
  
The intended usage is that if you see a post that seems like it might be suspicious, you run the batch mode on the entire subreddit, and then you re-run on your individual post. You can also analyze the csv file for any outliers. An example of this csv output can be seen [here](http://commenter/). Feel free to save a copy and try to find trends in the data.  
  
The post that piqued my curiosity was [this one](https://www.reddit.com/r/toronto/comments/69r2ut/go_see_the_toronto_rock/). When I run the tool, here is what I get.  
  
Toronto subreddit stats (mode 0):  
Account Age 3.49 Karma 23361.56 Submissions 35.35  
Graph max 42 Avg Max 8.65 Avg 1.56  

  

Suspicious post stats:  
Account Age 4.29 Karma 24394.33 Submissions 25.0  
Graph max 17 Avg Max 10.33 Avg 1.61  
  
So we see the average account age is within 1 year of eachother, the karma is very similar, as is the number of submissions to the subreddit. The user graph stats max values are quite different, but it's hard to know how to interpret that. The avg max and avg are very similar. So I have to conclude either to tool doesn't work, or it was an authentic post. In fact I'm inclined to believe it was authentic.  
  
And there is the real challenge. With no set of confirmed false posts, it is very difficult to test the authenticity. I reached out to reddit for some data on this and their response was:

  
[
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEig3FQb2ZhEcUAJUhEt0-IyoGsI0XXipSUERamxtjVSxPLdxHBERyqC-MkJmS7CJ3omUu591g7ujMmIi2DHjnHIOWXfS23WYIcGBNk4azcDHsEpQ-mPIFAzy-65_flbVuQYxcxWyR-XeVM/s640/reddit_lol_no.JPG)
](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEig3FQb2ZhEcUAJUhEt0-IyoGsI0XXipSUERamxtjVSxPLdxHBERyqC-MkJmS7CJ3omUu591g7ujMmIi2DHjnHIOWXfS23WYIcGBNk4azcDHsEpQ-mPIFAzy-65_flbVuQYxcxWyR-XeVM/s1600/reddit_lol_no.JPG)  
  
So now I turn to the readers... Any suggestions on how to get around this? Feel free to comment, or hack apart the code and do whatever you want with it. More details on using the code below.  
  
  

## Using the Program

  
The source code can be found on github [here](https://github.com/benrules2/influencers).

  

This program is comprised of two python source files. One is titled "external\_influences.py" which must be edited to include your own user client id and client secret (for instructions on obtaining these, see [this post](http://www.cyber-omelette.com/2016/11/the-programmable-web-are-canadians.html) ). With your authentication details established, the program looks for command line arguments specifying the execution mode, and the subreddit or link of interest.

  

The second file is "reddit\_actions.py" which contains some custom data structures and functions for interacting with reddit.

  

To run the "batch" style to get a fingerprint, run with 0 and subreddit name as arguments. For example:

  

$> python external\_infuence.py "0" "learnpython"

  

This will run in mode 0, which means the function get\_subreddit\_status from reddit\_actions.py is called. This returns values inside the user\_data and comments data structures. It also outputs the stats for each individual post in a csv file. Note: this takes a lot longer to run than mode 1. About 5-10 minutes for me, which is because we can't flood reddit with requests and I didn't do anything clever to grab comments and user data in bulk.

  

Running in mode "1" is very similar, but would look at a specific post (and has no csv output), called like this:

  

$> python external\_infuence.py "0" "https://www.reddit.com/r/learnpython/comments/6dsruz/psa\_if\_youre\_learning\_python\_and\_having\_trouble/"

  

In both cases, you now have comment and user\_data which is simply a raw container of the comments and user graph (more on this later). Next we run gather\_stats which iterates through all the users to give an average account age, the average user karma, and the average submission count for the subreddit.

  

Next, get\_graph\_stats is called, which analyses the graph of user interactions. The user graph is a dictionary for each user. The keys for the dictionary are usernames, and the value is the number of interactions. This user graph is simply a count of how many interactions have taken place between the users who commented on a given post. This function returns the average, and max number of interactions.