---
title: "Caesar's Cipher in Python (AVW ZLJYLA!)"
date: 2018-09-28
slug: caesars-cipher
tags: ["simon singh", "python", "rotation cipher", "rot13", "caesar's cipher", "the code book", "cryptography", "shift cipher", "code breaking", "ancient codes"]
original_url: /2018/09/caesars-cipher.html
---

## Aol Ffily-Vtlsslaal

  
Growing up I was always fascinated by hidden messages, secret codes, ancient languages, and all manner of disguised communication. As I started learning math and computer science, that interest strangely faded. This was likely because modern cryptography seemed so complicated I didn't think I'd be able to make sense of it.  
  
This all changed recently when I read a spectacular book called [The Code Book](https://amzn.to/2zxSTbf). It starts with examples of secret codes (or ciphers) used in Ancient Rome, Medieval Scotland, and Victorian England. It carries on through WWI, WWII, early internet encryption, and ends with a breakdown of the expected uses of Quantum Computing.  
  
I would love to [share](https://www.telegraph.co.uk/science/2016/03/15/polish-codebreakers-cracked-enigma-before-alan-turing/) [much](https://www.theregister.co.uk/2012/04/23/turing_papers_released/) [more](https://napoleon.lindahall.org/rosetta_stone.shtml) [about](https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher) [this](https://www.cia.gov/news-information/featured-story-archive/2008-featured-story-archive/navajo-code-talkers/) [book](https://en.wikipedia.org/wiki/Pretty_Good_Privacy), but you're better off to just read it and I'll get on with my post.  
  
While reading the early chapters, I started thinking about how powerful I could have been in Medieval times if I had access to a computer and a python interpreter. Naturally I started writing some code just in case. The resulting program ended up being both fun, and pretty beginner friendly. So I have decided to write up a guide to how these work.  
  
In this post I will start with what is called Caesar's Cipher.  
  

## Caesar's Cipher

  

<iframe width="560" height="315" src="https://www.youtube.com/embed/qjPYBtawBLM" frameborder="0" allowfullscreen></iframe>

  
  
Julias Caesar was a Roman politician and military general. He's extremely famous. If you're just learning about him now I suggest starting [here](http://lmgtfy.com/?q=Julius+Caesar). He also happens to have been one of the first people in history to use cipher to encrypt his military messages. As a result, his secret code is now called Caesar's Cipher (aka Shift Cipher, Caesar's Code, Rotation Cipher, or Caesar's Shift).  
  
To encode his messages, Caesar created a cipher alphabet where the regular alphabet is simply shifted by three letters.  
  

Plain:    ABCDEFGHIJKLMNOPQRSTUVWXYZ
Cipher:   XYZABCDEFGHIJKLMNOPQRSTUVW

  
When encoding a message, Caesar would look at the letter in unencrypted message, and replace it with the aligning letter from the Cipher alphabet. For example, let's consider the phrase "I came, I saw, I conquered". We start with the letter "I", and see that aligns with the letter "F" in the cipher. Replacing all of these, we have:  
  
"F came, F saw, F conquered".  
  
Now let's replace all the C's. This aligns with "Z" in the cipher, so now we have:  
  
"F zame, F saw, F zonquered".  
  
Continuing this process for each new letter, you end up with:  
  
"F zxjb, F pxt, F zlknrboba."  
  

### Did it work?

  
This probably seems pretty simple to a clever reader like you, so you may be wondering how much security this really added. You are graced with literacy however, which was not very common back in Caesar's days. The fact that most people were incapable of reading really reduced the chances of a message being cracked.  
  
Additionally, there were lots of different languages, and nobody had ever heard of encryption before. So these messages were usually assumed to be written in a different language, and there is no evidence that the code was ever broken during Caesar's lifetime.  
  

### Caesar's Code Code

To recreate this secret code in python, we have two tasks we need to accomplish - encryption, and decryption. Both of these rely on a conversion between the regular alphabet, and a cipher alphabet, so the most critical step is to create the cipher alphabet.  
  
So let's write some python. If you are new to python, I recommend starting with [this post.](http://www.cyber-omelette.com/2016/11/intro-python-part-1.html) You can also find the final code snippet [here](https://gist.github.com/benrules2/6914586bd41f65605a9e329097524a10), or a more complex (partially documented) project on [github](https://github.com/benrules2/cipherama).  
  

#### Initialize ShiftCipher

I will start by initializing a class called "ShiftCipher" (because Caesar, like Omlet Omelette, is too easy to misspell). We will add an argument "N" that describes what the offset to the alphabet will be to construct the cipher alphabet.  
  
Then we will use the slice features of python on the alphabet list to insert two blocks of the regular alphabet into our cipher. That will looks something like this:  
  

[View Gist](https://gist.github.com/benrules2/f70742b48bbe8263d364ad6d0952a1fb)

  
  

#### Enable Encrypting and Decrypting

This creates a class with the original and cipher alphabets defined, now we need a way to convert in and out of our secret code format. This will be done by creating member functions for the ShiftCipher class for each action. When we are encrypting, we will iterate through the original message and find the index of each letter in the **original alphabet**. Then we will append the corresponding letter from the **cipher alphabet** to the encrypted message. Once we have replaced each letter, we are complete.  
  
Decrypting will use the same process, except with the alphabets swapped. So each letter's position in the **cipher alphabet** will be found, and replaced by the corresponding letter in the **original alphabet**.  
  
That will look something like this:  
  

### 

[View Gist](https://gist.github.com/benrules2/2f16c2ba89fbf5357c1767f757a124d5)

Using Your Cipher

Now with your class written, you will want to create a command line tool that allows you to quickly encrypt and decrypt your messages. In the [github repository](https://github.com/benrules2/cipherama) I have a more flexible command line tool, but for this post let's keep things all in one source file.  
  
We need to know if we will be encrypting or decrypting, as well as what the message is. So we will use the sys module, and argv to pass this information. In a file called shift.py containing the class described above, let's add the following code:  
  

[View Gist](https://gist.github.com/benrules2/f8ebab2e32e0001aa6db0d4c6c5fc8e7)

  
  
Now you can run shift.py directly from the command line. The first argument will be "e" or "d" indicating encrypt/decrypt, and the next argument will be the message enclosed in quotes. The shift offset is set in the code to lucky 7, which can be modified in the script to provide different offsets.  
  
You can test your program by running the following in a command prompt:  
  
$>python shift.py e "I came, I saw, I conquered"  
Encrypted message:  
v pnzr, v fnj, v pbadhrerq  
  
Now if you decode, you should retrieve your original message:  
  
$>python shift.py d "v pnzr, v fnj, v pbadhrerq"  
Decrypted message:  
i came, i saw, i conquered  
  
If you are having trouble, you can find the full [shift.py file here](https://gist.github.com/benrules2/6914586bd41f65605a9e329097524a10).  
  

### Fun with Caeser's Cipher

With the code written, there are a couple of ways to test your cipher and see interesting properties. For example, if the N value is set to 13, there is no different between decrypting, and encrypting a second time. This is because are 26 characters in the alphabet, so when you encrypt again, you shift by 13 characters a second time, and recover the original alphabet.  
  
You can also try passing your message "abcdefghijklmnopqrstuvwxyz" if you would like to see the cipher alphabet displayed. Using this, you can confirm every letter gets encrypted and decrypted properly.  
  
For example if I edit shift.py so N= 1, you can see the following (original alphabet shifted by 1 character):  
  
$>python shift.py e "abcdefghijklmnopqrstuvwxyz"  
Encrypted message:  
bcdefghijklmnopqrstuvwxyza  
  
Finally, in Caesar's Cipher he shifted by 3 letters. If you set N=3 here though, you will get a different alphabet. In this code I found it more straightforward to rotate the opposite direction, so you'll need to use N=23 to crack any of his messages. The most important part is that the encryption and decryption algorithms follow the same convention. For an exercise you can try changing the slicing of the alphabet during initialization to change the direction of the alphabet shift.  
  

### Secret messages:

wkh txlfn eurzq ira mxpsv ryhu wkh odcb grj  
  
khos l'p wudsshg lq dq hqfubswlrq idfwrub  
  
br! klv sdopv duh vzhdwb, nqhhv zhdn, dupv duh khdyb  
wkhuh'v yrplw rq klv vzhdwhu douhdgb: prp'v vsdjkhwwl  
kh'v qhuyrxv, exw rq wkh vxuidfh kh orrnv fdop dqg uhdgb  
wr gurs erpev, exw kh nhhsv rq irujhwwlqj