---
title: "Haunted Home Automation"
date: 2017-10-15
slug: haunted-home-automation
tags: ["magic mirror", "smart mirror", "python", "halloween", "halloween DIY", "alexa", "scary", "haunted house", "raspberry pi", "philips hue", "hardware"]
original_url: /2017/10/haunted-home-automation.html
---

Halloween is one of my favourite holidays of the year. One reason for this is that it's totally optional and low stress. People can get exactly as in to it as they want. I'm also really intrigued by the perseverance of belief that there are supernatural forces at work. No matter how fact based and rational you are, I'd wager you still get a tingling feeling on the back of your neck crossing a cemetery during a wind storm all alone at night.  
  
In other words, even if you don't believe in ghosts, you still end up scared of them anyway. The goofy costumes and haunted houses are just icing on the cake.  
  
My absolutely favourite part of Halloween however is that DIY is deeply ingrained in the traditions. There's pumpkin carving, costume making, haunted houses in a garage, and a lot more.  
  
Naturally as a DIY fan, I've been thinking of how to incorporate technology into a good scare. Home automation has a lot of potential here, and it pairs nicely with the smart mirror in our house. Check out the video below to see what I came up with (with some help)!  
  

<iframe width="560" height="315" src="https://www.youtube.com/embed/Vm3WBFDKKPI" frameborder="0" allowfullscreen></iframe>

  
  

## Do it Yourself

  

If you like this effect and want to do it yourself, a good starting point is a smart mirror with Alexa and a custom skill to run scripts. You'll also need some Philips Hue lights.  
  

### Resources and Supplies:

-   [Smart Mirror with Alexa](http://www.cyber-omelette.com/2016/12/smart-mirror.html)
-   [Alexa Skill to run Scripts on a Raspberry Pi](http://www.cyber-omelette.com/2017/01/alexa-run-script.html)
-   [Philips Hue Lights](https://www.amazon.com/gp/product/B07354SP1C/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B07354SP1C&linkCode=as2&tag=cyberomelette-20&linkId=5f367810a261491e7eb563a01037395f)
-   [The haunted mirror video file](https://drive.google.com/file/d/0B3fV0f40M6TiTjB5ZVJrcGJ2VGM/view?usp=sharing)

  
Starting from scratch, its probably a day or two of work to build the smart mirror, and setup the custom skill. If you just replace the smart mirror with a regular computer monitor, you can probably get a similar effect going with less effort!  

### Controlling Philips Hue Lights

  

Most of the instructions for this demo are included in previous blog posts. The one new piece of technology was the use of the Philips Hue API, which I'll go over here.  
  

Philips has a great walk through to get you started with their API which can be found [here](https://developers.meethue.com/documentation/getting-started). What you need from that link is your username, your Hue Bridge IP address, and the ids of your lights. To find your IP address, you'll have to log onto your wireless router and look at the DHCP table to find the Philips Hue assignment. Through the Hue app, you can configure this to remain static as well to avoid unexpected changes in the future.  
  
The username will be a random alphanumeric string... In their examples it is: 1028d66426293e821ecfd9ef1a0731df  
  
The id of your lights can be found my using their debug API tool, and sending a GET request to: http:///api//lights  
  
Once you've got that information, you just need to plug in the username, my\_lights, and bridge\_ip\_address variables in this script flicker.py:  
  

[View Gist](https://gist.github.com/benrules2/e908323ab59436c171e74fb445964c18)

Once that is done, test it by running the script with one argument to describe how many seconds to flicker the lights for as follows:  
  
$>python3.4 flicker.py 5  
  
This should cause your house lights to 5 seconds.  
  
Finally, you just have to place the script on your Raspberry Pi (or desired platform), download the video file, and run this script to play the video and flicker the lights simultaneously:  
  

[View Gist](https://gist.github.com/benrules2/eec74875f5a98ac16b19931652aa9bed)

  
  
  

## Alexa Integration

  
If you are using the custom skill described in the previous post, there are three steps to integrating this new capability.  
  

Note, instructions from here on out are very closely tied to [this post](http://www.cyber-omelette.com/2017/01/alexa-run-script.html). If something doesn't make sense, make sure you've followed the steps there already!

#### Alexa Developer

  
The first step is adding a new intent to your skill in the Amazon Developer portal. To do so, go to your [Amazon developer page](https://developer.amazon.com/) and edit your Magic Mirror interaction model to include a new intent (I called mine "Haunted").  
  

[
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhLkr-4TiwZEhPemhlioCdtUzBIyk_kFybqC_eoyb20mJ02-CnhgMqzaHu9Mdp5ZLy4csm9v8rM-Eu8dUEfbTlrS_pbhItTtPK_Wr6qlKwip7iazBx_VGOB5WR_fbyNC7msZ0iA9CI4QYw/s640/intent.JPG)
](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhLkr-4TiwZEhPemhlioCdtUzBIyk_kFybqC_eoyb20mJ02-CnhgMqzaHu9Mdp5ZLy4csm9v8rM-Eu8dUEfbTlrS_pbhItTtPK_Wr6qlKwip7iazBx_VGOB5WR_fbyNC7msZ0iA9CI4QYw/s1600/intent.JPG)

Setup a sample utterance as well for this intent, such as "Haunted to tell me a ghost story".

[
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjCc8XHrub18TavSEmdk7yQ_RY3ju-RDGBwv9F3dQNYZ62Q7zYx5ZvlnXuC81NYUXQIAJyo2jZ3H7BDSsIddfwj1SPKUrw4GjuV8k5zQfJ4nCm3oL18s_rpXVHwLnWq5pHwMPgTr3ItCG4/s640/utterance.JPG)
](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjCc8XHrub18TavSEmdk7yQ_RY3ju-RDGBwv9F3dQNYZ62Q7zYx5ZvlnXuC81NYUXQIAJyo2jZ3H7BDSsIddfwj1SPKUrw4GjuV8k5zQfJ4nCm3oL18s_rpXVHwLnWq5pHwMPgTr3ItCG4/s1600/utterance.JPG)

#### AWS Lambda

  
Next, you will need to modify your AWS Lambda function to post a message to your command queue containing the word "haunted". This can be done by going to your [AWS Lambda portal](https://console.aws.amazon.com/lambda/home?region=us-east-1#/functions), and editing the [python file](https://gist.github.com/benrules2/e40ebb937e0062cd85a5d2a1167ef5e2#file-lambda_function-py) lambda\_handler function to include:  
  

elif intent\_name == "Haunted":

post\_message(client, 'haunted', queue\_url)

message = "uh oh... get out of here while you can!"

This will post a message to the command queue with the content "haunted".

####   

#### Raspberry Pi Queue Checker

  
Finally, ssh into your Raspberry Pi and find your [check\_queue.py](https://gist.github.com/benrules2/c6ab906d94e4988c92b1596d20b5f7a2#file-check_queue-py) file. Add one more option to the if statements to handle the new message "haunted".  
  
That will look something like:  

elif message == "haunted":

os.system("~/haunted.sh")  
  

That's all! Now you should be able to ask your mirror to tell you a ghost story, and have the video play.