---
title: "Launch a Script Using Alexa Voice Commands"
date: 2017-01-25
slug: alexa-run-script
tags: ["crontab", "AWS skills", "amazon skills", "alexa", "echo", "magicmirror2", "cronjob", "raspberry pi", "home automation", "magic mirror", "smart mirror", "SQS", "DIY", "AWS", "queue"]
original_url: /2017/01/alexa-run-script.html
---

In a [previous post](http://www.cyber-omelette.com/2016/12/smart-mirror.html), I showed how you can build a smart mirror with an Alexa voice assistant on board. The MagicMirror software and Alexa voice assistant were both hosted on a Raspberry Pi, but unfortunately there was no obvious way to get Alexa to control the smart mirror, or deliver commands to the Raspberry Pi.  
  
I have now found a solution that is free, reliable, and very flexible. This is done by writing an Alexa Skill that adds a message to a cloud hosted queue based on your voice command. The Raspberry Pi repeatedly checks this queue for new messages, and runs customizable behaviour based on message contents. This is not limited to smart mirror applications, or Raspberry Pis. It can be used to launch any script you want on any platform that will connect to Amazon's SQS.  
  
Here is a demonstration, and high level overview of how it works:  
  

<iframe width="560" height="315" src="https://www.youtube.com/embed/GJniRwFJFts" frameborder="0" allowfullscreen></iframe>

  

  
and a follow up demonstrating an extension of this idea:  
  

<iframe width="560" height="315" src="https://www.youtube.com/embed/Z00TOAu3If4" frameborder="0" allowfullscreen></iframe>

  

  
In this tutorial I will focus on just using this to simply turn the smart mirror on and off. Adding your own scripts should then be fairly straight forward,  
  
The steps will be as follows:  

1.  Create a Queue using the Amazon Simple Queue Service (SQS)
2.  Write some python code to read and write to this queue
3.  Write a Lambda Function that posts messages to the queue
4.  Write an Alexa Skill that calls the Lambda Function
5.  Schedule a task on your Raspberry Pi to read queue messages and take appropriate action.

## Creating a Queue

  

Creating an Amazon SQS queue is very straightforward. Just go to the [SQS website](https://console.aws.amazon.com/sqs), create an Amazon AWS account if needed, and click "Create New Queue". Name it whatever you want, and stick with the default settings. Personal use will also be infrequent enough that we will remain in the free tier.

  

Once the Queue is create, you simply need to note the url. This can be done by clicking on the queue in your SQS console, selecting the details tab, and reading the URL: property.  
  

  

[
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiZqphJyIkO5cihxGisQeAnFGrabcO_svLvLhFow0K5LwIriRSgsw05SMoE9nvzOWDOFHcoI3womBB-JoCgpv1socBUFWnFLyXFUaARtv-9Mkv-csy79T53PB11WjnYX60oPETMEANhECM/s640/Queue_Url.JPG)
](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiZqphJyIkO5cihxGisQeAnFGrabcO_svLvLhFow0K5LwIriRSgsw05SMoE9nvzOWDOFHcoI3womBB-JoCgpv1socBUFWnFLyXFUaARtv-9Mkv-csy79T53PB11WjnYX60oPETMEANhECM/s1600/Queue_Url.JPG)

  
You will also need to create an amazon IAM user to get an api access key, and access secret for accessing the Queue. That can be done by visiting the [IAM page](https://console.aws.amazon.com/iam), and clicking the "Users" tab, followed by "Add User".  
  
Then you click the new user's name, and find the tab "Security Credentials" which will have a "Create access key" button. Click this button. This will open a dialogue window with the option to display access secret, and download csv. Download this file, or copy paste the access key and access secret into a text file.  
  

## Reading and Writing to Queue with Python

  

The only package you'll need beyond basic python is called boto3, so you will need to run $> python -m pip install boto3 to make sure this is installed.

  

Add your access key and secret, as well as queue url, and the region (which will be a substring in your queue url, such as "us-east-1") to the following code example.  
  

[View Gist](https://gist.github.com/benrules2/7dec72a521d9caa8f8631d1965d21e87)

  

This sets up your credentials, adds the message "test" to your queue, and then reads a message from the queue and deletes the message. This should print the word "test". Read this code over to ensure you understand what is going on. If you need some python brushing up, [checkout my introduction post](http://www.cyber-omelette.com/2016/11/intro-python-part-1.html).

  
This code is just to define the behaviour needed. It will be split between the Lambda function, and the Raspberry Pi scheduled task. We will be using the "post\_message" behaviour in the Alexa Skill, and the "read\_message" behaviour running on the Raspberry Pi.  
  

## Write a Lambda Function to Post Queue Messages

  

The Lambda Function is where all the "thinking" for the Alexa Skill takes place. To create one of these, navigate to the [AWS Lambda Page](https://console.aws.amazon.com/lambda) and click "Create A Lambda Function". A series of drop down menus will appear. Select runtime python2.7 and select the blank project template.

  

Now you need to configure a trigger. There will be an empty gray dotted box image linking to the Lambda Function. Click the dotted box, and choose "Alexa Skills" as the trigger.

  

[
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiyCoYNkp8DinFwldKsLp9jxKaHw1xBsTwyyD_7VKqeOUpR7ox0-Owvht3pourQXPOrwI13EZhz4Y3dvSxaIaoPyIXNvFZr8-v1m56Yx4c3OlE6SrVvyyushDAERq4_OVp5HpXDewYlUW0/s640/triggers.JPG)
](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiyCoYNkp8DinFwldKsLp9jxKaHw1xBsTwyyD_7VKqeOUpR7ox0-Owvht3pourQXPOrwI13EZhz4Y3dvSxaIaoPyIXNvFZr8-v1m56Yx4c3OlE6SrVvyyushDAERq4_OVp5HpXDewYlUW0/s1600/triggers.JPG)

  

Click next, and enter any function name and description. It is also recommended that you create a custom role under the Role dropdown, called "lambda\_basic\_execution" with the default rights. For more info on roles, you can follow [this Amazon guide](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/content/fact-skill-3).  
  
Then Select Python2.7 from the runtime drop down menu once again. This will display a code box with a single python function called lambda\_handler. This is where the code triggered by an Alexa phrase will be placed. There is also an event parameter, which is where voice keyword behaviour is implemented (e.g. "on" or "off").

  

We will take some snippits from the demo code we wrote to write to the queue, and add some helper functions taken from AWS Lambda tutorial code for building a Lambda Function. You can copy paste the code below, but you will need to ensure you have added your api key, secret, location, and queue URL once again here.

  

[View Gist](https://gist.github.com/benrules2/e40ebb937e0062cd85a5d2a1167ef5e2)

  

  

Now click "Next" and "Create Function". Now under the [Lambda](https://console.aws.amazon.com/lambda) \-> Functions dashboard, you should see your function. If you click test, and select "Alexa Intent - Answer" from the dropdown, this should return a JSON response with "text: unknown". This will show the function is working as expected.  
  
Now it's time to connect it to Alexa Skills.  
  

## Writing an Alexa Skill

_**Update:** There have been a few commenters informing me these instructions are out of date. As this is already very well documented elsewhere, I recommend reading [Amazon's guide](https://developer.amazon.com/docs/custom-skills/steps-to-build-a-custom-skill.html) for writing a skill, and using this as a reference. The lambda code and utterances are still functional, but some of the setup details may have changed._  
  
To write an Alexa Skill, you have to navigate to the [Alexa Developer portal.](https://developer.amazon.com/edw/home.html) In here, you will click "Get Started" under the Alexa Skills Kit. Then click "Add a New Skill" and give your skill a name.

  

Under the invocation field, this will determine how you start this skills. Mine is called "magic mirror", and I have to say "Alexa, ask magic mirror (varying commands)" to invoke. Name yours whatever you want.

  

Clicking next will bring you to an intent scheme page. This defines all the different actions within your skill, and this information is passed to the Lambda Function as well. The code in the Lambda is tied to these Intents. So if you use something other than "MirrorOn" or "MirrorOff", you will need to update the corresponding section in the Lambda.  
  
[
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEio04alW7HHWSVHTtMihBeasZnGJuSo-cbuLNndYPc6K4sTVQz9CLSdd8CdI6XlY25BoWaVvI2G6DNGmHblnLsKPHTSji6BHOGoRDlPWl-hFsAseuKRyBFA7Cfa_jSprYGsakFzrNBvZQQ/s640/intent_scheme..JPG)
](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEio04alW7HHWSVHTtMihBeasZnGJuSo-cbuLNndYPc6K4sTVQz9CLSdd8CdI6XlY25BoWaVvI2G6DNGmHblnLsKPHTSji6BHOGoRDlPWl-hFsAseuKRyBFA7Cfa_jSprYGsakFzrNBvZQQ/s1600/intent_scheme..JPG)

  
Note the intents MirrorOn and MirrorOff have a multiple sample utterances. These provide the context on what logic the Lambda should execute, with multiple ways to achieve the same thing. To dive deeper on utterances, [here is a great blog post](http://www.makermusings.com/2015/07/21/defining-utterances-for-the-alexa-skills-kit/) detailing how to cover as many phrases as possible.  
  
Next you will have to add the Lambda Amazon Resource Name (arn) from your Lambda function to link the two in your skill configuration.  
  
This can be found under the AWS Lambda Dashboard when you click Function, and on a function name. It will appear in the top right corner beside the bold **ARN**. Copy and paste that into the Alexa Skills text box after specifying your region.  
  
  

[
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgPnwrBsL2Cbk-1Y66ACuNGAbhfL8qNhhimG5N0RfEAcILKjuWNmEAbNKCiIScjUIs5pdNqb9gdCiZyjQFKSJzbGBcUd90uJYlzSLch9H3Em3T7KhnGXJVIM6fWgCCii-wK4ormqu7QXSw/s640/rna.JPG)
](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgPnwrBsL2Cbk-1Y66ACuNGAbhfL8qNhhimG5N0RfEAcILKjuWNmEAbNKCiIScjUIs5pdNqb9gdCiZyjQFKSJzbGBcUd90uJYlzSLch9H3Em3T7KhnGXJVIM6fWgCCii-wK4ormqu7QXSw/s1600/rna.JPG)

Locating the Lambda ARN

  

[
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjtdbZrwDIrRldnQ6_z3PcbuNlIW_e1bRDb9DJzrdJMjlGeKifm8HdkzhK3jOqeXyLi1ClH6TVPeBvxzto8wDBQP-Ru-5jUKCMaoPD9Ct8y5Cv9Whu1XOOngM_Q9ebIdpTwRUm3ZV-KP7g/s640/arn_link.JPG)
](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjtdbZrwDIrRldnQ6_z3PcbuNlIW_e1bRDb9DJzrdJMjlGeKifm8HdkzhK3jOqeXyLi1ClH6TVPeBvxzto8wDBQP-Ru-5jUKCMaoPD9Ct8y5Cv9Whu1XOOngM_Q9ebIdpTwRUm3ZV-KP7g/s1600/arn_link.JPG)

Link Lambda ARN to Alexa Skill

  
  
Clicking next will bring you to a test page. Simply type your invoking phrase in the "utterance" box, and this should run your lambda function. Pay close attention to your utterance. If you have followed this tutorial verbatim, "turn on" or "turn off" should complete successfully, providing a JSON response with the "text:" parameter set to either on or off.  
  
If you have the same account registered under the Alexa app settings, this skill should now be enabled automatically. You can confirm by visiting [this link](http://alexa.amazon.com/spa/index.html#skills/your-skills/?ref-suffix=ysa_gw), and scrolling to find your skill.  
  
This indicates the Lambda Function has successfully added an "on" or "off" message to the queue. Wonderful! Almost finished.  
  

## Reading the Queue from target system

  
In this case, I want my Raspberry Pi hosting the smart mirror software to check this queue for additional commands. This is done by using the python queue code developed earlier for reading messages, and running custom behaviour based on the message content.

  

The script reads from the queue and run the on or off actions is as follows. Once again, don't forget to add your own API, URL, and location information:  
  

[View Gist](https://gist.github.com/benrules2/c6ab906d94e4988c92b1596d20b5f7a2)

  

  
Now you can add a cronjob to run this script every minute. This script is using long polling for the queue message, which means it waits for 20s for a message to arrive. This is repeated until 1 minute has elapsed, and then cron relaunches the job. This keeps your SQS requests well in the free tier, but responds immediately to messages.  
  
This can be added as a cronjob with the following commands:  
  
$> crontab -e  
  
Modifying this textfile to add the following line (with a newline break):  
\* \* \* \* \* python3.4 /home/pi/alexa\_skill/check\_queue.py  
  
The tv on and off scripts can be found [here](https://gist.github.com/benrules2/f3ddef15ce0c268226b172b61c98adb1).  
  

## Extended Functionality

  
This has applications far beyond simply starting and stopping a TV. Anything you can write a script for can now be triggered using custom Alexa Voice Commands. Considering the Raspberry Pi is equipped with GPIO ports, this means you can use voice commands to spin motors, unlock doors, turn on lights, and much much more.

  

If you would like to write your own skill, you need to add an additional intent to the Alexa Developer Skill configuration. Then in the Lambda function, add an if statement to handle the new intent by posting a different message. Finally, on your target platform, in the queue checking script, add an extra if statement to handle the new keyword.  
  

  

And I haven't even started thinking the use of [IFTTT](https://ifttt.com/discover)!