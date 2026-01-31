---
title: "Am I Hearing this Right?"
date: 2017-08-19
slug: lyric-repetitions
tags: ["web scraping", "python", "visualization", "music", "song lyrics counter", "data mining", "nltk", "genius api", "data processing", "matplotlib", "lyrics counter"]
original_url: /2017/08/lyric-repetitions.html
---

## The Lyrics Repetition Analyzer

  
I have just returned from a two week vacation, which contained a sizeable amount of road tripping. And with every great road trip comes great tunes!  
  
One of the albums I was excited to be listening to was The Arcade Fire's newest release, called Everything Now. It has received some mixed, but I try to keep an open mind.  
  
Upon first listen I actually really liked the album (and will listen many more times), but something stuck out to me. It seemed like several of their songs were just the same couple of words repeated for the whole track. The instrumentals were great, but the lyrics seemed like an after thought in a few songs.  
  
Now "same couple of words repeated" is actually a pretty decent description of song lyrics in general. So I was curious if this was an accurate observation, or just my perception being critically biased in light of reviews.  
  
_"I should pull the lyrics of the album, do some word counting, and compare to past albums"_ I proclaimed. My passenger reacted with mild to light enthusiasm.  
  
As the idea matured, I decided word counting is not the best metric. Repeating the same few words throughout an album is not a problem if their order is varying. So instead I looked at groupings of words, counting duplicate pairs, triplets, and quadruplets of word groupings.  
  
Here is what I got:  

  

[
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgYXwBPeWfSzKmZNoAD9EG6LpLCl0GCNnKSEx2-JpOn6pU7Xw1A3-RS6P2q1SblfLnJ-ycfhVDZtMPQFKEl1xfgsKRPbeiA3riDUFjLP1ChnJ0pQ8iv63WEHLjDJJ1VVLc-hzzrPHzpcrw/s640/Arcade+Fire.png)
](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgYXwBPeWfSzKmZNoAD9EG6LpLCl0GCNnKSEx2-JpOn6pU7Xw1A3-RS6P2q1SblfLnJ-ycfhVDZtMPQFKEl1xfgsKRPbeiA3riDUFjLP1ChnJ0pQ8iv63WEHLjDJJ1VVLc-hzzrPHzpcrw/s1600/Arcade+Fire.png)  
  
In the figure above, you can see the duplicate rate of pairs, triples, and quadruplets as a percentage of all words. As expected, Everything Now had a higher rate in all cases. Furthermore, it also had a higher relative rate of triplets and quadruplets than the other albums (green and blue bars were closer to the red bar height).  
  
So this gives me peace of mind knowing in fact they were repeating themselves more, and I wasn't just influenced by the reviews.  
  

## Beyond The Arcade Fire

  
Throwing this graph together would have been a pretty easy task if I assembled all the data by hand, generate some numbers, and used a tool like google docs or excel to plot the graph. That would require a lot of work for each new artist though, and my burgeoning career as a music critic requires efficiency.  
  
So I decided to automate the whole process by artist. This was done using a python script that will take a musician's name, pull all their available lyrics using the [Genius API](https://docs.genius.com/) / web scraping (based on [this Bigish Data post](https://bigishdata.com/2016/09/27/getting-song-lyrics-from-geniuss-api-scraping/)), gather statistics for each album using the [Natural Language Tool Kit](http://www.nltk.org/), and plot a bar graph using [matplotlib](https://matplotlib.org/).  
  
This allowed me to look into several more bands, trying to spot trends and worst offenders. Here are a few more.  
  

[
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhN9rbKOufHVnVtCs7qw5jHRHJcf7iCbqDxRCX6rHlKA8NCxP6uFGbnKm7p9mqEV-JjEjIgMKpSYC0BwptVgCQxDB9F4hGC9LVUoX6qCuG3WYx3jVUGMKnzZ2JqySCKI5LlpDPG63Avdwo/s640/Daft+Punk.png)
](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhN9rbKOufHVnVtCs7qw5jHRHJcf7iCbqDxRCX6rHlKA8NCxP6uFGbnKm7p9mqEV-JjEjIgMKpSYC0BwptVgCQxDB9F4hGC9LVUoX6qCuG3WYx3jVUGMKnzZ2JqySCKI5LlpDPG63Avdwo/s1600/Daft+Punk.png)

  

[
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgzzTr3Vjv4W1kXEc-B3u4QvgJXHU3HZMCtzoTEe8EKP19YdcVcQwjyJFE_ch5jQJttKVqY2yMEIQZTORTy5A5VHTcmrY5I9CsPpjWUOqKc4RJ4pF5dwAnwg7h3P7_5BpvrVuWy7Pr5g1k/s640/Taylor+Swift.png)
](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgzzTr3Vjv4W1kXEc-B3u4QvgJXHU3HZMCtzoTEe8EKP19YdcVcQwjyJFE_ch5jQJttKVqY2yMEIQZTORTy5A5VHTcmrY5I9CsPpjWUOqKc4RJ4pF5dwAnwg7h3P7_5BpvrVuWy7Pr5g1k/s1600/Taylor+Swift.png)

  

[
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhZ1R_8UvW2o2cgIyTz4z7C11aI7_nUbhpP6yPFxXeMqNX7NQX1jUS1RQKlpIvkdjtZ5oxuGCru0dwqTYU9z92-WHNUEEA8CudR2VtSKMgtXXHgLJwrj460k16lhOYJ0uR4zwrpBRnOi7U/s640/The+Beatles.png)
](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhZ1R_8UvW2o2cgIyTz4z7C11aI7_nUbhpP6yPFxXeMqNX7NQX1jUS1RQKlpIvkdjtZ5oxuGCru0dwqTYU9z92-WHNUEEA8CudR2VtSKMgtXXHgLJwrj460k16lhOYJ0uR4zwrpBRnOi7U/s1600/The+Beatles.png)

  
From these graphs we can see that Daft Punk repeats themselves a lot ([as expected](https://youtu.be/yca6UsllwYs?t=2m2s)), that T Swift's most repetitious album by a long shot was 1989, and that The Beatles have a large variation.  
  

## Try it yourself

  

Here are the steps to write your own script, but if you want to just analyze some albums with my out of the box setup, you can [try my web version here.](https://www.cyber-omelette.com/p/album-lyric-repetition-counter.html)  
  
If you'd like to run this script yourself to track down albums, or modify it to count something, the first step is to register with Genius to get an access token by following [this link](https://genius.com/signup_or_login).  
  
Click the "Generate Access Token" button. Copy the client id, client secret, and access token to a text file for future use.  
  

### Installing Dependencies

  
Now you need to make sure you have the following python modules installed:  
nltk, counter, requests, matplotlib, BeautifulSoup (bs4), and counter.  
  
These can been installed by running the following commands with python version 3.x:  
  
$> python -m pip install requests  
$> python -m pip install bs4  
$> python -m pip install matplotlib  
$> python -m pip install counter  
  
nltk (extra step):  
  
$> python -m pip install -U nltk  
$> python -m textblob.download\_corpora  
  

### Copy the Scripts

  

Once the dependencies on your system are in place, you need to grab two python files and put them in the same directory.  
  

File 1: [album\_counter.py](https://gist.github.com/benrules2/849179680fe02704d47a1e0dfbabdc04)

File 2: [plot\_albums.py](https://gist.github.com/benrules2/a8caa4ee672f87f2229144c2bddbf1fe)

  

In album\_counter.py, edit the top 3 lines to contain your client id, client secret, and access token for the Genius API.

  

### Run the Script

  

With these changes made, you should be properly authorized to run the script and generate artist info. This is done as follows (from the directory of the python files):

  

$> python album\_counter.py "Arcade Fire"

  

This will run for a minute or two, printing out each album as it gets scraped. When the script completes, there will be a file called "Arcade Fire.png" and "Arcade Fire.csv" in your running directory. This is the graph output, and a csv file incase you would like to modify the visualization process yourself.