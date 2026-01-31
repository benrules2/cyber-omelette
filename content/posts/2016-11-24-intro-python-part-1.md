---
title: "Intro to Python: Hello World! (Part 1 /2)"
date: 2016-11-24
slug: intro-python-part-1
tags: ["python", "software", "beginner", "learn python", "command line interface", "hello world", "tutorial"]
original_url: /2016/11/intro-python-part-1.html
---

Many of the projects on this site use a programming language called python. Python is a great language for beginners, because it is designed to be very readable, but it's also very powerful. It is powerful because there are a lot of powerful libraries and [APIs](https://en.wikipedia.org/wiki/Application_programming_interface) that are easy to use made for python, which allows you to write some pretty exciting programs without much code.  
  
In this post, I walk you through installing python, and running your first program. In the [next post](http://www.cyber-omelette.com/2016/11/intro-to-python-part-2.html) I will introduce containers and functions used to make code readable and re-usable.  
  
Once you have completed both parts, you should have a good understand of the language features I use in the programs on this blog. There is a lot you can do with only a few concepts!  
  
Here are a couple projects to check out once you have completed these tutorials:  
  
[Making a simple Twitter Bot](http://www.cyber-omelette.com/2016/11/the-programmable-web-basic-python.html)  
[Reddit word counting](http://www.cyber-omelette.com/2016/11/the-programmable-web-are-canadians.html)  
[Writing an orbit simulator](http://www.cyber-omelette.com/2016/11/python-n-body-orbital-simulation.html)  
  
Now let's get down to business.  
  
  
  

## Installing Python

  
The first step to running a python program is having python installed. Python is free, and available on Linux, Windows, and Mac OSX operating systems. Let's start by checking if it is installed. This can be done by opening a Command Line Interface. Steps are a bit different for each operating system.

  

**Windows**: Open your start menu, and in the search box or run window type "cmd.exe" and press enter. This will open "Command Prompt" with a black text box with a blinking cursor. Type the command "python" here.  
  
**Linux / Mac OSX:** Go to your search bar or spotlight search, and enter the word "terminal". This should bring up a program with a text box and blinking cursor.  

  

If you get stuck at this stage, try googling "open command line \[operating system name\]".

  
Now to see if python 3 is installed. This is done by simply typing "python" in the command line and pressing enter. In this blog, the symbols "$>" means an action is to be run on the command line, so I would simply say run the command **$>**python. You can also try running **$>**python3.  
  
At this point, we are looking for an output like the image below, simply showing Python 3.5.x in the first line. To close a python session, just run **$>**exit(), press ctrl-z, or close the window.

  

[
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgd9InQdkcqNgqjE7DJ1mCqjL8WaOfY7Kz0aLvLt6vc2kst2Qqc8M0Y4ApFaP800tbpJtRe1dt00IgX8Gubgb-rQPlxq-LinMRz0qKokQvPy8SlSX9c6Mff6mF6RAEiP8YVGLO64y8ZcnM/s640/python_win.PNG)
](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgd9InQdkcqNgqjE7DJ1mCqjL8WaOfY7Kz0aLvLt6vc2kst2Qqc8M0Y4ApFaP800tbpJtRe1dt00IgX8Gubgb-rQPlxq-LinMRz0qKokQvPy8SlSX9c6Mff6mF6RAEiP8YVGLO64y8ZcnM/s1600/python_win.PNG)

  
  

  
  
  
  
If you do not see a python dialogue appear, it just means you need to download and install python. You can [download it here.](https://www.python.org/downloads/) There are two versions available - I recommend having version 3.5 or higher.  

  

Once it is downloaded, follow the installation steps on the download page for your operating system. This is just like installing any other program, and probably won't give you any trouble. Once completed, try restarting your Command Line Interface, and repeating the steps above.

  

If you have any trouble at this stage, feel free to leave a comment. There are also plenty of resources online to get Python 3 installed.

  

## Hello World

  

It's time to write your first program. This is a very specific program, a rite of passage for all programmers. It's called "Hello World", and the goal is to print the phrase "Hello World!" on the screen.

  
Programs are written in text editors. Anything that lets you type text will work, but for more complex programs I would recommend downloading an "Integrated Development Environment". These come with debuggers, syntax highlighting, auto completion, and more tools to make writing code easer. For python I recommend [PyCharm](https://www.jetbrains.com/pycharm/specials/pycharm/pycharm.html?&gclid=CjwKEAiA9s_BBRCL3ZKWsfblgS8SJACbST7DROYAIB1508E6JDU-XJvKEso80Dnzv9LRUpomm99QWxoCVRDw_wcB&gclsrc=aw.ds.ds&dclid=COjn24a3vNACFReraQodAcoKoQ) or [Visual Studio Community](https://www.visualstudio.com/vs/python/).  
  
For this tutorial however you can use Notepad, Emacs, or whatever. Mac users, I recommend you use [TextWrangler](http://www.barebones.com/products/TextWrangler/). The default TextEdit program will insist on the Rich Text Format which just doesn't work.  
  
**Step 1:** Open a new text file, and add the following line  
  
print("Hello World!")  
  
**Step 2:** Save this text file as "example.py", and make note of the full path to this file. e.g. C:\\Users\\Fritz\\python\\example.py or /home/Fritz/python/example.py

  
**Step 3:** Open a new command line interface window, and type the command:  
  

**$>**python  
  
(e.g. **$>**python C:\\Users\\Fritz\\python\\example.py)  
  
You can also run the change directories command first "cd ", and then just run the filename.  
  
That looks like this for a file located at C:\\Users\\Fritz\\python\\example.py  
  
**$>**python C:\\Users\\Fritz\\python  
**$>**python example.py  
  

This should output:

[
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjVCz-DSYLd1__h-rbLyDiD4a9SRv_uV6cGHu3DggH6lGAWc1P-bmEy4m4FFJ4fY0WB_O3q3hAXT3mnkOp8Mrole0BM-4knn4FdCi7ICOr3SfVw3petHqSH1JMNSSPPikDgC-fSsvloNNc/s400/hello.PNG)
](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjVCz-DSYLd1__h-rbLyDiD4a9SRv_uV6cGHu3DggH6lGAWc1P-bmEy4m4FFJ4fY0WB_O3q3hAXT3mnkOp8Mrole0BM-4knn4FdCi7ICOr3SfVw3petHqSH1JMNSSPPikDgC-fSsvloNNc/s1600/hello.PNG)

  
  

  
  
  
  
  
Congratulations! Now you have said hello to the world. You bent the computer to your will, and wrote your very own program.  
  
Once you feel comfortable with these steps, head on over to [part 2](http://www.cyber-omelette.com/2016/11/intro-to-python-part-2.html) where we will look at lists, dictionaries, functions, and classes.  
  
[Next post](http://www.cyber-omelette.com/2016/11/intro-to-python-part-2.html)