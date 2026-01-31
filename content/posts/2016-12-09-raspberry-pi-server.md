---
title: "Raspberry Pi Bot Server"
date: 2016-12-09
slug: raspberry-pi-server
tags: ["server", "automation", "software", "crontab", "bot", "raspbian", "rpi", "twitter bot", "rpi3", "raspberry pi", "hardware"]
original_url: /2016/12/raspberry-pi-server.html
---

  

  

[
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiBqZq6a-jYN758sYpGGkl_C270gkJV4VAPfjwnyMCzmM4cj5-9YoAH_BcsmcBmfWyHm7dxcM3BzU7esAI9o93H7bexgplOq9bv7GVE8U9mZd5uYXX4Cvdpt5X7xClVwom4MLGMCaNZs8c/s400/IMG_3289.JPG)
](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiBqZq6a-jYN758sYpGGkl_C270gkJV4VAPfjwnyMCzmM4cj5-9YoAH_BcsmcBmfWyHm7dxcM3BzU7esAI9o93H7bexgplOq9bv7GVE8U9mZd5uYXX4Cvdpt5X7xClVwom4MLGMCaNZs8c/s1600/IMG_3289.JPG)

My trusty RPi3 twitter bot server "starkiller".

  
So [let's say you've got a twitter bot](http://cyber-omelette.blogspot.com/2016/11/the-programmable-web-basic-python.html) that you want running 24/7, but you don't want it running on your personal system. What you need here is a server, which is really just a dedicated system. Note, if you're looking for a web server, you'd be better off with [Amazon's AWS](https://aws.amazon.com/free/) .  
  
If you're running automated tasks and answering tweets however, a Raspberry Pi is an excellent choice.  
  
The steps are pretty straightforward:  
  
1\. Setup a computer (raspberry pi) to run your program.  
2\. Write a script to launch your program.  
3\. Run the script automatically at startup.  

### Setup your computer

  
The starting point here is simply to buy a [Raspberry Pi](https://www.amazon.com/gp/offer-listing/B01C6Q2GSY/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B01C6Q2GSY&linkCode=am2&tag=cyberomelette-20&linkId=7333d41f4de4ab281dc4e6dc648f0277). RPi3 is great because it has build in wifi, and it's very affordable, any generation will work though. Once you've got the hardware, you need to install an OS. I strongly recommend Raspbian Jessie with Pixel ([download and install guide can be found here).](https://www.raspberrypi.org/downloads/raspbian/)  
  
  
  
Once your pi is running and connected to the internet, you need to transfer your bot's executable or script to the raspberry pi. Here is a guide to [using scp](https://www.raspberrypi.org/documentation/remote-access/ssh/scp.md) for this purpose, or you can just email it to yourself.  

###   
Write a launch script

  
Now you need to write a script to run the bot simply containing the line you would type into the terminal. To do this, open terminal and run:  
  
$> nano run\_bot.sh  
  
This opens a basic text editor. In this file, you're just going to have one line - the command you would use to run using a terminal, with a fully resolved path:  
  
$> python3 /BasicTwitter.py  
  
To close, press ctrl-x, and then "y" to confirm the filename. Run pwd now to get your current working directory. This gives you the full path to your script "run\_bot.sh".  
  

### Schedule your task

  
Now we are going to make our script executable with [chmod](https://linux.die.net/man/1/chmod), and schedule this script to run at startup using [cron](https://en.wikipedia.org/wiki/Cron). This is done by running:  
  
$>chmod +x /BasicTwitter.py  
$>crontab -e  
  
Select "2" to use nano as your editor, and scroll to the bottom of the text. Add the following line and make sure to press enter to add the line break:  
  
@reboot /BasicTwitter.py  
  
  

[
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhLV0KRtlgfG-kCkkvVfqDUqgXPS9IfK0-wxFtoIgj0Z5RVXW21qGcxK5tLXqvCtY5yrPb9_F5LMS0AWQOGjB_tB2iNLABOLosJ6pPTXh-wXZSjBVnOKDqJj9zM9RlGzMWk99iuxbFCquA/s1600/crontab.PNG)
](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhLV0KRtlgfG-kCkkvVfqDUqgXPS9IfK0-wxFtoIgj0Z5RVXW21qGcxK5tLXqvCtY5yrPb9_F5LMS0AWQOGjB_tB2iNLABOLosJ6pPTXh-wXZSjBVnOKDqJj9zM9RlGzMWk99iuxbFCquA/s1600/crontab.PNG)

Example crontab added line

  
Now close crontab using ctrl-x, y, which will display a dialogue indicating a new crontab was installed. Run "$>sudo reboot -n" to reboot your pi, and when it starts up again your bot should be automatically running!  
  
To confirm it is running, try using this command to view log messages related to cron tasks.  
  
$>grep cron /var/log/syslog  
  
Nice work! Now you've got a Raspberry Pi server. Time to add some more automation.