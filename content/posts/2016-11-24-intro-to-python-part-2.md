---
title: "Intro to Python: Containers, Functions, and Loops (Part 2 /2)"
date: 2016-11-24
slug: intro-to-python-part-2
tags: ["python", "functions", "software", "classes", "for", "loops", "python3", "dictionary", "beginner", "dict", "tutorial", "programming", "hobby"]
original_url: /2016/11/intro-to-python-part-2.html
---

This is the second post in a series. If you're just getting started, see [Part 1](http://cyber-omelette.blogspot.com//2016/11/intro-python-part-1.html).  
  
In the previous post, you got python installed, and ran a simple program. In this section we will use some language features to store data, and re-use code. These are important concepts for all programming languages.  
  
Before we get started, let me warn you to pay attention to your indentation / white space here. Python doesn't care if you use tabs or spaces for white space, but does require that indented blocks are consistent.  
  

#### Lists

  
The first container we will look at is a list. A list is rather unsurprisingly just a series of items in a single object. To create a list, you just assign values inside square brackets separated by commas. After it is created you can add values using your\_list\_name.append(value).

  
  

For example:

  

list\_of\_numbers = \[1,1,1,1\]  
list\_of\_numbers.append(-4)

  
This creates a list with values 1, 1, 1, 1, -4. Individual values can be retrieved using square brackets and an index starting at zero. So list\_of\_numbers\[0\] = 1, and list\_of\_numbers\[4\] = -4.

  

#### Lists and looping

  

The list created here can also be looped very easily. This is done by using the syntax:  

  
for in :

do something with name

  

Note the indentation. Everything "inside" is indented to an equal level.  
  
So if we want to loop through all the numbers added in list\_of\_numbers, that can be done as follows:  
  

list\_of\_numbers = \[1,1,1,1\]  
list\_of\_numbers.append(-4)  
sum = 0  
  
for item in list\_of\_numbers:  
sum = sum + item  
print("Sum: {}".format(sum))

  

Running this code in your file example.py will output:

  

[
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiPDlgWtGOATrHe_ZHWjJEsm1OTmaZOeAxlR5jbu1vvZPW0eHQ28fJBujsje5-6BdCNC5BhAyMKwweeBoCspN5wb7TQWUH-jMYa_0XEn6BK9YwuHxV_nRYXak6FzQZw57_n4Qq9DDRosNE/s400/list_example.PNG)
](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiPDlgWtGOATrHe_ZHWjJEsm1OTmaZOeAxlR5jbu1vvZPW0eHQ28fJBujsje5-6BdCNC5BhAyMKwweeBoCspN5wb7TQWUH-jMYa_0XEn6BK9YwuHxV_nRYXak6FzQZw57_n4Qq9DDRosNE/s1600/list_example.PNG)

  

  

#### Dictionaries and looping

  
There is another powerful type of container called a dictionary. Dictionaries store key value pairs, and can be created using curly braces. Elements are added just by providing a key in square braces.  

  
They can also be iterated through (in fact, most things in python can be), but typically this is done by key, as there is no order to them like with lists.  
  
  

Here is an example of dictionary usage:

  

my\_dictionary = {"word1":"Hello"}

my\_dictionary\["word2"\] = "World"

for key in my\_dictionary:

print(my\_dictionary\[key\])

  
Outputting:

  

[
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi0SzxN_2yzi6nwUvn_pJrbhi4ptxZLt5-UIhFHurXSM9l6L3GZwj-VC1QFg1hjNz7H2n3rwqFXgX55SVvCCn8nimDbUqwiFAM-5z4cZ2ej7KuaabBfW1TJXR4GhzS7H5JP-f3Z__obou4/s400/dict_example.PNG)
](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi0SzxN_2yzi6nwUvn_pJrbhi4ptxZLt5-UIhFHurXSM9l6L3GZwj-VC1QFg1hjNz7H2n3rwqFXgX55SVvCCn8nimDbUqwiFAM-5z4cZ2ej7KuaabBfW1TJXR4GhzS7H5JP-f3Z__obou4/s1600/dict_example.PNG)

  

  
  
  
  
  
  
  
While lists are great for storing lots of one thing, dictionaries are great for storing many different things with descriptive names. You can even include a dictionary inside a list, and a list inside a dictionary.  
  
Lists, dictionaries, and for loops make up 90% of my program. They rest is really just code organization techniques.  
  

### Functions

  
Functions allow you to write some generalized code using variables and give it a name. This code can then be reused with different variable values.  
  
  

Here is an example of a function in use:

  

def my\_talkative\_function(phrase):

print(phrase)

  

if \_\_name\_\_ == "\_\_main\_\_":

my\_phrase = "Hello Squirrel!"

my\_talkative\_function(my\_phrase)

my\_talkative\_function("I'm World not Squirrel!")

  
Output:

  

[
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjGJrO5T28La5wDRScdvqLtft_0LmEuZkXgWBtBUVTWEbXT8RfkfBSZ4Y_2GayanvYL4uvF3dfy6jAKgtB3sPRSHNn6fvo36-EL6R-OPemwucTSXpAuSWVpaKx4w8h0C8DhRl12h4GPzJc/s400/function.PNG)
](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjGJrO5T28La5wDRScdvqLtft_0LmEuZkXgWBtBUVTWEbXT8RfkfBSZ4Y_2GayanvYL4uvF3dfy6jAKgtB3sPRSHNn6fvo36-EL6R-OPemwucTSXpAuSWVpaKx4w8h0C8DhRl12h4GPzJc/s1600/function.PNG)

  

  

  

  
  
  
The "if \_\_name\_\_ == "\_\_main\_\_":" line might be a bit confusing. This is just telling the python interpreter where the code you want to run starts. It also lets you import your functions and classes into other files without importing your program.  

  

Functions can also have optional parameters by using "=" in the argument list. If no parameter is given for these, the default will be used.

#### 

def my\_talkative\_function(phrase = "I have nothing to say."):  
print(phrase)  
  
if \_\_name\_\_ == "\_\_main\_\_":  
my\_talkative\_function()  
my\_talkative\_function("Shhh!")  

  

[
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiMn8SavGf0M-jc1NqRA64a9V-pA_97AiFpQZ3B39643C7bf2hxrLfNqhL6Qz6ezGcdwRummcVhb8fIykZhRrgWVBOTBN0LrthRkk37KXiW5hOQ_dWwsFKKRyhLqRbKLFCwbQwszmLVYmo/s400/function2.PNG)
](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiMn8SavGf0M-jc1NqRA64a9V-pA_97AiFpQZ3B39643C7bf2hxrLfNqhL6Qz6ezGcdwRummcVhb8fIykZhRrgWVBOTBN0LrthRkk37KXiW5hOQ_dWwsFKKRyhLqRbKLFCwbQwszmLVYmo/s1600/function2.PNG)

  

  

Note that with no arguments provided to my\_talkative\_function in \_\_main\_\_, it used the default value. Providing a value overrode this behaviour.  
  
Functions are a fantastic way to simplify your program using smart names to wrap up complicated tasks.

  

#### Classes

  
Classes are another way to simplify programs. Classes let you create data types with names that explain what you're doing. Readability is so important in programming!  
  
To write a class, you first initialize it with a class name, and then you declare an \_\_init\_\_ function inside the class with some variables. This \_\_init\_\_ function assign its arguments to your class members. These can be accessed by calling my\_class.variable\_name on a class object.  

  
In class functions, there is always at least one argument "self". This refers to the class object calling the function, and allows it to access member variables. This argument does not have to be passed in when calling the functions, as it is done automatically.  
  

Here is a simple example containing all these concepts:

  

class two\_word\_phrase:  
def \_\_init\_\_(self, word1, word2, punctuation = '!'):  
self.word1 = word1  
self.word2 = word2  
self.punct = punctuation  
  
def talkative\_class(phrase):  
print("{} {}{}".format(phrase.word1, phrase.word2, phrase.punct))  
  
if \_\_name\_\_ == "\_\_main\_\_":  
my\_phrase\_class \= two\_word\_phrase("Hello", "Blorld")  
talkative\_class(my\_phrase\_class)  
  
Output:  
  
  

[
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgbxuRd3El_Dnr-c7BBjsfJLHPY-W94zYRqsP6S1f_Y2lAHrCw68ODai5cbl6m-XH2NKJe6VCtw5KQSAO9CVoTKa2mbAbuw5TF4G0W8wmNAYcgLQi9Xjuk8HIotzD3rkLsSY41iXB79Eis/s400/class_ex1.PNG)
](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgbxuRd3El_Dnr-c7BBjsfJLHPY-W94zYRqsP6S1f_Y2lAHrCw68ODai5cbl6m-XH2NKJe6VCtw5KQSAO9CVoTKa2mbAbuw5TF4G0W8wmNAYcgLQi9Xjuk8HIotzD3rkLsSY41iXB79Eis/s1600/class_ex1.PNG)

  

  

  
  
  
  
You can also declare functions other than \_\_init\_\_ to act on the class member variables. This is where the real simplifications come in with classes.  
  
Here is the same example, but with talkative\_class as a member function called talkative\_class\_func taking no arguments.

  
class two\_word\_phrase:  
def \_\_init\_\_(self, word1, word2, punctuation = '!'):  
self.word1 = word1  
self.word2 = word2  
self.punct = punctuation  
  
def talkative\_class\_func(self):  
print("{} {}{}".format(self.word1, self.word2, self.punct))  
  
if \_\_name\_\_ == "\_\_main\_\_":  
my\_phrase\_class = two\_word\_phrase("Tutorial", "Completed")  
  
my\_phrase\_class.talkative\_class\_func()  
  
With some slight modifications, this will now output:  
  
  

[
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhEx2jWUuToC9gsZ7chEeosdgzgn8gM02m7l2Zcywrjj8wW3yF9qYEL2zZ0H3Qt-oP0L4eqj3zqrfacrWOes4rZ3FZ4EtblHviO5VD1Fp7giUYBUocPp3HBzFASKDb3kZ5EA7c7Wx5uXdY/s400/class_ex2.PNG)
](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhEx2jWUuToC9gsZ7chEeosdgzgn8gM02m7l2Zcywrjj8wW3yF9qYEL2zZ0H3Qt-oP0L4eqj3zqrfacrWOes4rZ3FZ4EtblHviO5VD1Fp7giUYBUocPp3HBzFASKDb3kZ5EA7c7Wx5uXdY/s1600/class_ex2.PNG)

  
  
  
  
  
  
  
And now you're done with my tutorial. Give yourself a firm congratulatory handshake, and then take a look at some of python projects on this site (or start writing your own!)