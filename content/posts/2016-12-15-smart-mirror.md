---
title: "DIY Smart Mirror ft. Alexa"
date: 2016-12-15
slug: smart-mirror
tags: ["software", "alexa", "echo", "christmas", "raspberry pi", "magic mirror", "smart mirror", "magicmirror", "DIY", "two-way mirror", "wood", "hardware"]
original_url: /2016/12/smart-mirror.html
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/ig9G36-8vJA" frameborder="0" allowfullscreen></iframe>

  
  

### Materials

1.  Computer Monitor. Buy used and look for cable inputs that point down or sideways instead of straight out. 22" recommended (I used [Acer AL2216](https://amzn.to/2RmtLxR) )
2.  Video cable. Whatever fits your monitor (I used [HDMI to DVI adapter](https://amzn.to/2BTrxfz))
3.  [Raspberry Pi 3](https://amzn.to/2GMFDFa), [16GB Micro SD Card](https://amzn.to/2Rwwjtq), [5V Micro USB power supply](https://amzn.to/2s2LUCo), [any RPi case](https://amzn.to/2BQcB1I)
4.  Wood. I bought four 3ft lengths of 3"x1"
5.  8 [Angle brackets](https://www.homedepot.ca/en/home/p.1-12-inch--zinc-corner-brace-4pk.1000773638.html)
6.  [Short wood screws](https://www.homedepot.ca/en/home/p.9x1-inch--satin-nickel-wood-screw-phillips-18pk.1000773388.html).
7.  [Gorilla glue](https://amzn.to/2BTdbvF).
8.  Electrical tape.
9.  [Extension Cord with multiple plugs.](https://amzn.to/2Rk9vNp)
10.  [50cm x 70cm Ikea STROMBY frame.](http://www.ikea.com/ca/en/catalog/products/80151014/#/20151012)
11.  [Gila Mirrored Window Film](https://amzn.to/2BUmL1q)
12.  [USB Sound Card](https://amzn.to/2VmNsVh), [Lapel Mic](https://amzn.to/2StAhju), [any USB powered speaker](https://amzn.to/2AnKdEg) **\***

**\***Bonus Alexa Materials

  
Additional required tools/supplies are: scotch tape, a squirt bottle, dish soap, a drill or screwdriver, exacto knife, scissors, and a saw.  
  
March 10, 2018 update: I'm currently in the process of trying out an actual two way mirror as well instead of the window film. If you're interested in this I can recommend [this mirror](http://amzn.to/2Fv1YWY) which comes in several sizes. I'll have a post coming soon with instructions for how to mount it.  
  

### Creating the Two Way Mirror

  
The two way mirror is the most essential part of this build. To create this component, you just apply [Gila Mirrored Window Film](https://www.amazon.com/gp/product/B000H5XTKG/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B000H5XTKG&linkCode=as2&tag=cyberomelette-20&linkId=d8e3f56cefd45b2e68d89520a72e6d32) to any piece of glass or acrylic. This works equally well for glass and acrylic, and only takes about 15 minutes.  
  
  
  

[
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg8zqV94M0dH9GNZuQI7PQH8046cv8rjWUIUIpKtQvK-9latrgOoAFlfw570J-JdwA9XQj6aqH41HVmfq8x_yETTRuRJ0CZ_mf1TntUmzMHRV2kWB7Mj1HcolrZ4pKMoH4oEXiOM2AKVZM/s400/IMG_3412.jpg)
](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg8zqV94M0dH9GNZuQI7PQH8046cv8rjWUIUIpKtQvK-9latrgOoAFlfw570J-JdwA9XQj6aqH41HVmfq8x_yETTRuRJ0CZ_mf1TntUmzMHRV2kWB7Mj1HcolrZ4pKMoH4oEXiOM2AKVZM/s1600/IMG_3412.jpg)

Ikea STROMBY with Gila Mirrored Privacy Film applied.

  

  

Remember, this is a budget solution so there is some compromise in optical quality. It's good enough for a non essential decorative mirror, but probably not a primary bathroom mirror.

  

Here you will need scotch tape, a squirt bottle, exacto knife, scissors, and a squeegy or scraper. There are lots of v[ideos online with instructions too](https://www.youtube.com/watch?v=9e6kJrH3Myw).

  
**Applying the film:**

1.  Fill the squirt bottle with water and add about 0.5 tablespoons of dish soap. Basically just one squirt.
2.  Cut off a piece of reflective film about 1 inch larger than your surface in all directions.
3.  Clean your surface, and then spray generously with dish soap mixture.
4.  Put scotch tape on both corners of the film, and pull it apart to remove the plastic protective liner. Peel the liner, spraying dish soap mixture between protective liner and the film sheet.
5.  With the film sheet generously coated in soap mixture, lay it flat on your surface.
6.  Squeegy down the middle, and then from the middle out to the sides. Keep spraying and smoothing until all the air bubbles are gone.
7.  Use scissors or the exacto knife to trim excess materials from edge.

  

You're done! Let it sit for a while before moving, as it hasn't really stuck in place until all the soap mixture dries.

  

  

### Building the frame

  
This frame simply facilitates holding the monitor, and attaching the mirror to your monitor. It will also serve as the enclosure for your Raspberry Pi.  
  

[
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhQaIpgnf3r7SxZgvvojRfWWP-OjUDBqUcv-hoR7QMfHJ4PWrG2-6jPJLz8jIEW10X7sgLoWbwPLb9UKFQXeqofv0W26IU4xPIAKFRTv00bUEn-ybw4rUoBdulCGVHWVpPWB6OPDxRcUeI/s400/IMG_3356.jpg)
](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhQaIpgnf3r7SxZgvvojRfWWP-OjUDBqUcv-hoR7QMfHJ4PWrG2-6jPJLz8jIEW10X7sgLoWbwPLb9UKFQXeqofv0W26IU4xPIAKFRTv00bUEn-ybw4rUoBdulCGVHWVpPWB6OPDxRcUeI/s1600/IMG_3356.jpg)

Building materials

  

  
Start by finding a monitor, and ripping the bezel off by removing screws and jabbing a knife or paint scraper in the seam of the monitor. There may be some parts hanging free off the back of the monitor, which can be attached using electrical tape. Insulate the back of any menu buttons with electrical tape as well to prevent short circuiting.

  

[
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEifaG_pxS2OIKvabzwaKfolaY_3IpWpVe15mK9xvj3bKa-rY2k6y_ZjRvvFAcSWPraKOhxhaB7FD9TOcZ6wSDJTiLmK0nJ9bzs4WezKmF7wBKZqRShWFlUQZxpDT-eNrvN6qwOepCyeTaI/s320/IMG_3357.jpg)
](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEifaG_pxS2OIKvabzwaKfolaY_3IpWpVe15mK9xvj3bKa-rY2k6y_ZjRvvFAcSWPraKOhxhaB7FD9TOcZ6wSDJTiLmK0nJ9bzs4WezKmF7wBKZqRShWFlUQZxpDT-eNrvN6qwOepCyeTaI/s1600/IMG_3357.jpg)

  

Once you have ripped the bezel off, it's time to build the frame. Use your most basic woodworking skills to size the wood frame, and then use the 90 angle brackets to attached the inner corners. Note, this will be hidden, so you can do an ugly job. I placed 4 small screws in the front and back corners to hold the monitor in place.

  

  

[
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh7x2erM6YhbfBeW_NquTOeCi9DY63F_s7PikrSRPC8rNmPBLpnsDfcGzwwBzfwFfSXfjcuudrR3J5BjK0Pvml5tNRUyWy9zZsVdcL-MJriLR9kB3v8xt16c8mLcrfIe_GE5TJqMlPRbW8/s400/IMG_3365.jpg)
](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh7x2erM6YhbfBeW_NquTOeCi9DY63F_s7PikrSRPC8rNmPBLpnsDfcGzwwBzfwFfSXfjcuudrR3J5BjK0Pvml5tNRUyWy9zZsVdcL-MJriLR9kB3v8xt16c8mLcrfIe_GE5TJqMlPRbW8/s1600/IMG_3365.jpg)

Wooden monitor bezel

  
I also painted my frame black for aesthetic reasons, however it's completely hidden by the frame overhang, so this is not necessary.  
  

### Sticking it all Together

  
Now we need to attach our mirror and monitor. I did this by cutting a hole in the rigid frame backing of my Ikea frame, and gorilla gluing some angle brackets to the backing to attach to the outside of the frame.  
  
  

[
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg2cxlhNZ-COZIJpY9bDpzG4Ckr3NXgF9S2VQqqG4z6G3UhFuMUJzbkkpdDA3-gWOmvrBrTbKPt9A5L_SppBsFayWcViQQ7z7yxNkfUP6i-NttswHQ2Y4DulnKpnAobWu4I8lQtk_7szx0/s400/IMG_3411.jpg)
](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg2cxlhNZ-COZIJpY9bDpzG4Ckr3NXgF9S2VQqqG4z6G3UhFuMUJzbkkpdDA3-gWOmvrBrTbKPt9A5L_SppBsFayWcViQQ7z7yxNkfUP6i-NttswHQ2Y4DulnKpnAobWu4I8lQtk_7szx0/s1600/IMG_3411.jpg)

Lining up monitor over frame backing with removed section(right).

  

The hole in the frame backing was done using multiple passes of an exacto knife. Then I lay the monitor flat over the hole, centred everything, and used the all surface gorilla glue to fasten 4 angle brackets around each edge. I used 3[d printed parts for this](http://www.thingiverse.com/thing:1538314/#files), but any 90 degree bracket with sufficient strength will work.

  

Once the glue has set, you simply screw the bracket into the monitor frame.  
  
  

[
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhdyI5PmF8253Srt8j0Jx46uJtz3ssvtksjivhZBdqGTrMprcMatmNSPc5WmM2QW2LNVKjaZLP0Xi8pCDApD8sA4Cn5IHr80iXLBNUc62QFGbtBVR_joFOBI9xiFIwiuSy1teXj22Z7eBk/s400/IMG_3418.jpg)
](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhdyI5PmF8253Srt8j0Jx46uJtz3ssvtksjivhZBdqGTrMprcMatmNSPc5WmM2QW2LNVKjaZLP0Xi8pCDApD8sA4Cn5IHr80iXLBNUc62QFGbtBVR_joFOBI9xiFIwiuSy1teXj22Z7eBk/s1600/IMG_3418.jpg)

Gorrilla glue setting on 90 degree angle bracket.

  

  
It's up to you how to arrange your components. I punched some holes in the frame to run wires for my speaker and mic using a drill, and another trough for the power cable using a hand saw.  
  
My pi case is just wedged in place. I should probably glue that or something...

  

## Raspberry Pi Setup

  
So you've built your hardware! That's awesome, now it's time to get the raspberry pi running the [MagicMirror](https://github.com/MichMich/MagicMirror) and [Alexa](https://github.com/alexa/alexa-avs-sample-app/wiki/Raspberry-Pi) software. Of course the first step is just getting an operating system. I strongly recommend [raspbian jessie](https://www.raspberrypi.org/downloads/raspbian/), which already has a great [install guide](https://www.raspberrypi.org/documentation/installation/installing-images/README.md).  

  
Once the Pi starts up, run the following in terminal to get the software up to date:  
  
**$>** sudo apt-get update  
**$>** sudo apt-get upgrade

  

You should also follow [these steps](https://www.raspberrypi.org/documentation/remote-access/vnc/) to enable VNC Viewer, a remote desktop tool that allows to you acces your RPi desktop from any computer on the same network. This lets you work remotely once you've finished the initial setup, without plugging in a keyboard and mouse.  
  
**Install MagicMirror**  
  
With the basic setup done, we will now install the core application called MagicMirror. There is a guide on the website to [install MagicMirror](https://github.com/MichMich/MagicMirror), but it didn't entirely work for me.  
  
First I had to update NodeJs and electron:  
  
**$>**curl -sL https://deb.nodesource.com/setup\_4.x — Node.js v4 LTS "Argon" | sudo bash -  
**$>**sudo apt-get install nodejs  
**$>**sudo npm install electron  

  
  
**Oct 12 2017 update:** if electron fails to install, try running the following for the last command:  
**$>**sudo npm install electron@1.7.6)  
Then I downloaded and installed magic mirror using:  
  

**$>** curl -sL https://raw.githubusercontent.com/MichMich/MagicMirror/master/installers/raspberry.sh | bash

  
If these run succesfully, you can just navigate to the MagicMirror directory, and run:  
  
**$>**npm start

  
This should show the default dashboard. To edit this, navigate to the MagicMirror/config/config.js file and add custom location, calenders, moldules, etc.  
  
There are also some [additional configuration details](https://github.com/MichMich/MagicMirror/wiki/Configuring-the-Raspberry-Pi) regarding screen orientation, screensaver settings, and wifi.  
  
**Installing Alexa**  
  
If you've already got a computer on your wall, you may as well add some voice interaction. This can be done by installing and running Alexa on your raspberry pi as well. I covered this in a [previous post](http://cyber-omelette.blogspot.ca/2016/11/alexa-pi.html).  
  
Alexa and MagicMirror will then run simultaneously on the same raspberry pi (at about 25% CPU). I am hoping to create some skills to change the magic mirror layout, add to do lists, etc, but for now it's just stock Alexa.  
  
Congratulations, now you've got a smart mirror, and maybe a personal assistant! Have fun never looking at your smart phone again. If you'd like to add some custom behaviour to Alexa, [checkout this post](http://cyber-omelette.blogspot.ca/2017/01/alexa-run-script.html) on how to do it.  
  

[
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgd7RPvu3HpFjxUjYb2gI5xY3GBDBC449KujQcsNLtRIELn-EVM5DNhyuFEcmAjYtaSrbtMrF4l8PmyvZiCxRAsaK3spfU3KJISe1GOMDjZzHCkBAX6YFbv2VC5qstD7znYIavaBTmS9Oc/s400/magic+mirror+a7.jpg)
](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgd7RPvu3HpFjxUjYb2gI5xY3GBDBC449KujQcsNLtRIELn-EVM5DNhyuFEcmAjYtaSrbtMrF4l8PmyvZiCxRAsaK3spfU3KJISe1GOMDjZzHCkBAX6YFbv2VC5qstD7znYIavaBTmS9Oc/s1600/magic+mirror+a7.jpg)