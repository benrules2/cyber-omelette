---
title: "From the Vault: Arduino Night Writer."
date: 2016-11-11
slug: from-vault-arduino-night-writer
tags: ["electronics", "arduino", "DIY", "persistence of vision", "cyber omelette", "LED", "long exposure", "easy arduino", "night writer", "hardware"]
original_url: /2016/11/from-vault-arduino-night-writer.html
---

## Night Writer

  
About four years ago, I invited some friends over to try to turn a remote control car into something programmable. We had some trouble finding supplies though, so they just brought beer instead. But we were determined to build something.  
  
I had recently seen [this video](http://vimeo.com/14958082), and thought we might be able to reproduce it with just a column of LEDs and a long exposure photo.  
  
This project uses the "Persistence of Vision" concept, where the LEDs flash vertical slices of a letter or symbol, and you provide the horizontal movement. Using a long exposure camera allows you to slowly "paint" the light into your image.  
  
First I'll show you some photos from the project. If you want to build your own, keep scrolling for rough build details. As it's "from the vault", it's not a complete walkthrough. It does give you the code you need though, and a photo of the circuit. This would be a good 2nd or 3rd Arduino project.  
  

### Results

  

[
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhQAiO84IiWvm3sjC4zpH7MwdhZ4d07hEYJDOxmsmbEobT6N9zs_okdEba6ASBkgp1703Dy7hyphenhyphenUeSqa5m3yqdUvwniVp227QASoCZ7lJtq9BgemImwUolQ9-DF-cAnq2J9VuYnUX6nV6qA/s400/HPC+Nik.jpg)
](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhQAiO84IiWvm3sjC4zpH7MwdhZ4d07hEYJDOxmsmbEobT6N9zs_okdEba6ASBkgp1703Dy7hyphenhyphenUeSqa5m3yqdUvwniVp227QASoCZ7lJtq9BgemImwUolQ9-DF-cAnq2J9VuYnUX6nV6qA/s1600/HPC+Nik.jpg)

HPC 4 Life

  
  

  

[
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjG9R1qHxMl1OrjBWeQgeMcTSnR7EB5mvAk04Yb6exqGL4DzENEA6BLviYVo2vEebV9t6YCNNxS3YAN8uye5GfH7tAliXFm5WE8rkuPV5tZSuf5_i0X8yuuLtX_FRJGBfzA5mEJ0NkNn5Y/s400/boyfriend.jpg)
](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjG9R1qHxMl1OrjBWeQgeMcTSnR7EB5mvAk04Yb6exqGL4DzENEA6BLviYVo2vEebV9t6YCNNxS3YAN8uye5GfH7tAliXFm5WE8rkuPV5tZSuf5_i0X8yuuLtX_FRJGBfzA5mEJ0NkNn5Y/s1600/boyfriend.jpg)

\*Fiance

  

  

[
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjXTp09cL0dX2QVS7WL48VSEnGKmj3XMsWebyj8KDJCvI7Syz0Hu0Fb_IG5aDuO4L5a8EZ1rhYnQ_Kg2-OPbqou19WdOohNTFf8BTnEOyZLJSPk53gZ6OH-G7C-nYIvOGnlMUb1kwrJHts/s400/IforOne.jpg)
](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjXTp09cL0dX2QVS7WL48VSEnGKmj3XMsWebyj8KDJCvI7Syz0Hu0Fb_IG5aDuO4L5a8EZ1rhYnQ_Kg2-OPbqou19WdOohNTFf8BTnEOyZLJSPk53gZ6OH-G7C-nYIvOGnlMUb1kwrJHts/s1600/IforOne.jpg)

Hawking and Musk need to cool it on the fear mongering

  

  

## Build your own

  
To build your own, you will need an Arduino with 10 output pins, 10 LEDs, a power source, a resistor, and a camera that can take multi second exposures.  
  
To build the rig, just connect the 10 LEDs to 10 output pins on the Arduino in order in such a way that when pin 1 is set to HIGH, LED #1 turns on.  
  
That looks something like this:  
  

[
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiIiBd3v4zMI4a97K648Irbq_8xoE3m2Oc5LTjxeTBuukhAy-gpO06w4kfJ378A29i9GSMR9R3YFzAil61PY5lnEMPFz-_sNt1yovOTfUnts8f8Emgo8ht5MWVKQjTaXTC_cynEuABNFIA/s400/setup.jpg)
](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiIiBd3v4zMI4a97K648Irbq_8xoE3m2Oc5LTjxeTBuukhAy-gpO06w4kfJ378A29i9GSMR9R3YFzAil61PY5lnEMPFz-_sNt1yovOTfUnts8f8Emgo8ht5MWVKQjTaXTC_cynEuABNFIA/s1600/setup.jpg)

  
  
Then load this sketch onto your Arduino. There are more elegant ways to write this sketch, but this makes it pretty obvious what's happening. Remember, we're working from the vault here.  
  

  

  

Once the Arduino is setup and appears to be flashing, it's time to setup your camera on a tripod with a 3-5s shutter speed, and a high apeture / low iso so you're not completely blown out. You might need a very dark room. Then set a timer, and get in position with the Arduino contraption in hand.

  

When the camera triggers, turn on the Arduino and try to move it laterally at a constant rate for the duration of the shutter. You can play with the Delay in the sketch to change message speeds, or put the sequence in the startup loop so it only runs once.