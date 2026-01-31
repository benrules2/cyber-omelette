---
title: "Turning a Hot Air Popcorn Popper into a temperature controlled Coffee Roaster"
date: 2021-02-23
slug: turning-hot-air-popcorn-popper-into
tags: ["murder hornet", "coffee roaster", "coffee", "arduino uno"]
original_url: /2021/02/turning-hot-air-popcorn-popper-into.html
---

I love coffee, and I love making things. So I'm surprised this project took me so long, but thankfully I've finally got around to building my own coffee roaster. All you need for a good DIY coffee roaster is a source of heat, and something to mix up the beans. After some research, I decided to start with a hot air popper. This blog post will walk through how I converted the Presto Poplite Hot Air Popper into a coffee roaster.

<iframe width="560" height="315" src="https://www.youtube.com/embed/jouKJEVmwRQ" frameborder="0" allowfullscreen></iframe>

  

  

## Materials  

1.  [Presto Poplite Hot Air Popper](https://amzn.to/3k9kWTZ)
2.  [Arduino Uno](https://amzn.to/2NsitIn)
3.  [120V AC to 24V DC Transformer](https://amzn.to/2ZCIkQl)
4.  [4" K-type Thermocouple](https://amzn.to/3aFAYC1)
5.  [Max31855 K-type Thermocouple breakout board](https://amzn.to/2NJQ00m)
6.  [120V Solid State Relay](https://amzn.to/3qH0E6F)
7.  [Twist On Wire Connectors](https://amzn.to/2OZgZpp)
8.  [Misc jumper wires](https://amzn.to/3dynaLw)
9.  [Scrap power cord](https://amzn.to/3spYKbh) (you can probably find one of these around your house)  
    

### 

[
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgBQmk3Lg1lOQKfscjsKz7VG9ZDL2gXhf8eyi3PZ0Vx-XkTIsVQjMsCIz_VZDPdEpx2ixK4bad-_Knog5VzEt2zxPX8N9OPiDhZJZGIgm73M_I058i9ElWhNfsit-JM3d9oggG6VBrEKj0/w400-h300/IMG_5753.jpg)
](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgBQmk3Lg1lOQKfscjsKz7VG9ZDL2gXhf8eyi3PZ0Vx-XkTIsVQjMsCIz_VZDPdEpx2ixK4bad-_Knog5VzEt2zxPX8N9OPiDhZJZGIgm73M_I058i9ElWhNfsit-JM3d9oggG6VBrEKj0/)

How it will Work  

Before I dive into the nitty gritty, let me emphasize that the requirements are pretty simple. The Presto Poplite already has a fan to agitate the beans, and a heater to get them hot enough. So the modification required for this project is adding a thermocouple to know how hot it actually is, and adding a relay to turn the heater off if it is too hot.  
  
That's all! So keep these simple steps in mind as you're building.

There are two separate streams to this project as well, the Arduino control, and the Poplite modifications. So I'll break those out into their own sections.  

### Hacking the Poplite

### WARNING -  

To modify the Poplite, start by unplugging it. Look at the plug. Is it unplugged? Good!  

### 120V AC IS DANGEROUS! Be extremely careful it is not plugged in at any point while working on the electrical components!

Now that that's out of the way, start by removing the 3 screws in the yellow bottom plate, and the two screws holding the power cord in place.  

Your roaster will now look something like this:

[
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg2lrSayMJ96jcJ1K2w8btof6_IAY9TuRoUQQ2lSpcPDWlHeKWgtyc4u6dEoRgRa7XB0apU404AqNBvj36Q13lzZeroJ-5YV64CyzT2lNHhV40AO3p7Th_Fedg3KgvQhHRwDoR3xy1784s/w374-h482/IMG_5794.jpg)
](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg2lrSayMJ96jcJ1K2w8btof6_IAY9TuRoUQQ2lSpcPDWlHeKWgtyc4u6dEoRgRa7XB0apU404AqNBvj36Q13lzZeroJ-5YV64CyzT2lNHhV40AO3p7Th_Fedg3KgvQhHRwDoR3xy1784s/)

  
Next you need to remove the 3 screws holding the fan assembly to the heat assembly. Note they come in from the bottom (this is a bit confusing when putting it back together). The metal sleeve will slide out, and you'll be left with something like this:  

  

[
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjGcUbmtaNv6y4V2vjoRe0ovnccSTznp6WOap5ZX_Q-C5L4v67bTlzKmu74-VOw0xXQr6B2nS2eAiKLfL8fQLKWDi4-OAkmecxvrR35Y0Is1K44rEi6lqSpjPB2-nyZwSzz39amT-ljO8g/w376-h502/IMG_5808_labelled.jpg)
](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjGcUbmtaNv6y4V2vjoRe0ovnccSTznp6WOap5ZX_Q-C5L4v67bTlzKmu74-VOw0xXQr6B2nS2eAiKLfL8fQLKWDi4-OAkmecxvrR35Y0Is1K44rEi6lqSpjPB2-nyZwSzz39amT-ljO8g/)

  
  
Take a look at the wires. The red wire carries the live 120V AC. This goes into a heating coil which contains two lengths of resistive / heating wire. One goes straight back to ground with the white output wire. The other carries a remaining 20V AC to the Bridge Rectifier. This Bridge Rectifier uses 4 diodes to convert the AC electricity to 20V DC, powering the fan, and finally the output of the bridge rectifier goes back to ground.

#### Connecting the Fan  

In our modifications, we are going to remove the bridge rectifier and add a 120V AC to 24V DC transformer. This powers the fan independent of the heater, allowed the fan to remain on at all times. This is done simply by adding the 120V + / - inputs directly to the [120V AC to 24V DC Transformer](https://amzn.to/2ZCIkQl), and adding output wires from this transformer and soldering them to the leads of the fan.

[
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhx4XogBKeR-OWu4X2eslhM8bjqSpfVs7s9ngSHQ2853EKSpHLto4z63Fd2HKCjo_NBDdJjYrSsRinZZeFInAuHURucfJUtgnScrvv4k-buATam29WDpi9WFkV3MJRSfUhx-JdkTT0nFQM/w333-h444/IMG_5901.jpg)
](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhx4XogBKeR-OWu4X2eslhM8bjqSpfVs7s9ngSHQ2853EKSpHLto4z63Fd2HKCjo_NBDdJjYrSsRinZZeFInAuHURucfJUtgnScrvv4k-buATam29WDpi9WFkV3MJRSfUhx-JdkTT0nFQM/)

120V AC to 24DC Transformer connected to the fan  

  

#### Adding the Relay to the Heater

With the fan connected, the next step is to add the relay to the heater's circuit so we can toggle the heater on/off with the Arduino once the Arduino is connected. To do this, start by cutting your scrap power cord so you have a length with +/- wires exposed on each end. We will connect these to the 120V AC inputs to the fan's transformer, ensuring the heater can never be on unless the fan also has power (this protects you from melting your roaster if you forget to plug in the fan).  

Then simply connect the positive lead with the twist on electrical marette, and connect the negative lead from the heater to one end of the relay. Connect the other terminal of the relay to the power cable using a twist on marette.

[
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEghfDTuUgcFjGGPzA0c13N0OhUvOIzXy13lMsEdRD-tIAc7j6w4TV7hNT0i-Re-H8CywHhwi6AAtCB651KGjqMGsd0zApbnrp3jHy7yaEq6NLuBLpuJziFVYCt426mWvXr3mSX0gDHobBE/w572-h429/IMG_5899_labelled.jpg)
](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEghfDTuUgcFjGGPzA0c13N0OhUvOIzXy13lMsEdRD-tIAc7j6w4TV7hNT0i-Re-H8CywHhwi6AAtCB651KGjqMGsd0zApbnrp3jHy7yaEq6NLuBLpuJziFVYCt426mWvXr3mSX0gDHobBE/)

  

### Sanity Check

With the heater and fan wired up, this completes the electrical modifications to the 120V AC on the hot air popper. Because the relay is "normally opened" (meaning the circuit is broken unless it is receiving a signal), plugging in the roaster now will simply run the fan. You should verify this by briefly plugging in the roaster (~2s), unplugging it, and verifying you heard the fan running, and there is no ambient heat around the heater.  

It is also possible to get the DC wires reversed on the fan motor. So also verify (once you know the heater is off) that you're getting a strong amount of airflow coming through the roaster.

### Setting Up the Arduino

The Arduino setup has one input, and one output. The input is the thermocouple telling what the temperature of the roaster is, and the output is an on or off signal to the relay, dictating if the heater should be engaged or not.

Let's start with the thermocoupler. If you ordered the [Max31855 K-type Thermocouple breakout board](https://amzn.to/2NJQ00m), you may need to start by soldering together its components. Once that is done, open your [Arduino IDE](https://www.arduino.cc/en/main/OldSoftwareReleases), navigate to Tools->Manage Libraries. Search for "max31855\_RT" and install the library by Rob Tillart.

[
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjEjcKqMUjJ1a4hM5kH1bxhOhv-r2qyIzZAJS72rO0jUkO1-8mbueICGcupIC1PgOGpAyaK7V5twZ4sfKOinPwUWKkm4zS0FKu6hEH_kvhvVqlYlvCwMIjIAjuo4NvQ2WR9g-KGr4UbIy8/w444-h263/Screen+Shot+2021-02-20+at+3.46.46+PM.png)
](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjEjcKqMUjJ1a4hM5kH1bxhOhv-r2qyIzZAJS72rO0jUkO1-8mbueICGcupIC1PgOGpAyaK7V5twZ4sfKOinPwUWKkm4zS0FKu6hEH_kvhvVqlYlvCwMIjIAjuo4NvQ2WR9g-KGr4UbIy8/)

  
Then navigate to File->Examples->Max31855\_RT->demo0.

The top of this sketch will inform what pins to connect the Max31855 breakboard board to on your Arduino. Follow this setup, and connect your thermocouple's blue terminal to the "red" labelled input, and the red terminal to the terminal labelled "Yeeeow" \[sic\].

  

[
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgjM4HGE721gYltUnq4di3TTXUZ21QyEMIMVse1iV2gyDbtSYxIJOCxBSk_WWqgZyjVmyjJy-an7duywFHu-Onw8Gfrz939k-n8m5iIy5b3gNxVNwC4kZDqamf_9FKj-RKT5lEh8L1w08c/w492-h369/IMG_5906.jpg)
](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgjM4HGE721gYltUnq4di3TTXUZ21QyEMIMVse1iV2gyDbtSYxIJOCxBSk_WWqgZyjVmyjJy-an7duywFHu-Onw8Gfrz939k-n8m5iIy5b3gNxVNwC4kZDqamf_9FKj-RKT5lEh8L1w08c/)

  
Running this sketch will provide output to the Arduino Serial Terminal showing the temperatures measured by the thermocouple. Try dipping the thermocouple in icy water, and hot water to verify the readings are accurate.

If so, you're almost done! If not, you can try reversing the red and blue terminals connecting to the breakout board.

#### Controlling the Relay

Now let's make sure the relay is working. To test the relay, navigate to File->Examples->Basics->Blink. Blink toggles Pin 13 on the arduino on and off, switching the onboard LED on and off.

Now make sure the 120V power cord is NOT plugged in. Once that is confirmed, connect the negative terminal on the DC side of the relay to ground on the Arduino. Connect the positive side to Pin 13. Now when the Blink sketch runs, you should see both the onboard LED (pin 13) turning on and off, as well as the LED within the relay.

If you have seen the Relay LED turning on and off, and the thermocoupler giving sensible temperature readings, you're almost done! Now all that remains is adding the control loop arduino code, and re-assembling the Poplite.  

#### Controlling the Coffee Roaster

Now that individual elements are working on the Arduino, and Poplite, it's time to tie them all together in a sketch. The goal here is to toggle the heater on and off in a way that reliably holds a target temperature in the roaster. I did this by defining a time step (500ms), and adding a helper function in the Arduino sketch to read the current temperature, and calculate how long the fan should be **disabled** for a given time window.

This is done by calculating the current temperature, and determining the "error" of this compared to the target temperature. I then used trial and error to tweak the formula controlling these values such that the heater turns off proportional to the difference from the target temp.

The sketch also has four roasting stages. A warmup phase, the first roasting temp, the second roasting temp, and a cooldown.

The pin connections are the same as in the Blink and Max31855\_RT->demo0 sketches, so leaving these as is after testing will ensure compatibility with my sketch, which can be downloaded [from github](https://gist.github.com/benrules2/1d34c74a25401d482e66a981b2e3e174).  

### Re-assembling the Poplite

With the Arduino input and outputs confirmed, and the roasting sketch loaded, now it's time to re-assemble the poplite. To do so, make sure there is generous amounts of wire between the fan DC wires, and the relay 120V wires. Then reassemble the interior component of the Poplite, attaching the black fan assembly firmly to the heating assembly.

  

[
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhBzcFF8zhURlsKl7w-yA2MIS3sVPSlg7QcYP2aEE3PCBDgkxcSTyisE_rcLRTda9SWfqScVBEvWXZuggxRmJhC9sCgKTAXdN5U-PqzVMsPQfNVFUGgMMWAyBkKo0MjKj8ki0EMGduCRYk/w363-h314/Screen+Shot+2021-02-20+at+4.14.15+PM.png)
](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhBzcFF8zhURlsKl7w-yA2MIS3sVPSlg7QcYP2aEE3PCBDgkxcSTyisE_rcLRTda9SWfqScVBEvWXZuggxRmJhC9sCgKTAXdN5U-PqzVMsPQfNVFUGgMMWAyBkKo0MjKj8ki0EMGduCRYk/)

  
  
Use electrical tape to attach all the wires together, and re-attach the poplite power cord insert to hold the cables in place. At this point, depending on how long your wires are, you may want to fasted the relay and transformer to the body.  
  

[
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhJt3iCCK4U6mEK1XzVJaNDZzZKhfMn8xj8M4dNZFTym7ZY-FvQOOgRUXMbFPaQvjAa3BsUretBAqKXpTf6ZriI7NJJSCNmJExSRpSPNUec3MDYZRdpO-bwLeZKBt4Z2grfoWkVjMZHsDk/w452-h445/Screen+Shot+2021-02-20+at+4.17.52+PM.png)
](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhJt3iCCK4U6mEK1XzVJaNDZzZKhfMn8xj8M4dNZFTym7ZY-FvQOOgRUXMbFPaQvjAa3BsUretBAqKXpTf6ZriI7NJJSCNmJExSRpSPNUec3MDYZRdpO-bwLeZKBt4Z2grfoWkVjMZHsDk/)

  
Next, complete the Poplite re-assembly by attach the yellow bottom using the 3 screws, and attach the Arduino to the body of the popper as well.

The last step is to affix the thermocouple. I took advantage of the two parallel plastic walls at the back of the lid, allowing an angled hole to be drilled just big enough for the thermocouple probe. Start with a small drill bit and work up for this one, as it would be terribly inconvenient to crack the lid.  
  
  

[
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj4-V9ahFuCcbSxLx1O16VTMtgEKwly3pWu0xNfD-n944qX8Ni0fJBnirZxIJPUusb72rtCZfjSkUne_Q-f5wX3EZVNSD1W6eAFPppuWcuWFCDDqHTDy70DyETn2Cw7XnrRKJg4Asyx8uI/w430-h309/Screen+Shot+2021-02-20+at+4.21.40+PM.png)
](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj4-V9ahFuCcbSxLx1O16VTMtgEKwly3pWu0xNfD-n944qX8Ni0fJBnirZxIJPUusb72rtCZfjSkUne_Q-f5wX3EZVNSD1W6eAFPppuWcuWFCDDqHTDy70DyETn2Cw7XnrRKJg4Asyx8uI/)

Drilling the hole for the thermocouple

  

[
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgOpMstp_EwWwjPc4SIYRjlCCcY-pYmdJXMU0JR72yyZ761N18NtC3BiqNG950ccEaLJCbBvwJZAwjsMdpvkvGLWgM7IkisZSQrrjK2ShushZFtGsAYzNys3WwM-3AMa9cs8C0Kk4mv2j8/w450-h291/Screen+Shot+2021-02-20+at+4.24.23+PM.png)
](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgOpMstp_EwWwjPc4SIYRjlCCcY-pYmdJXMU0JR72yyZ761N18NtC3BiqNG950ccEaLJCbBvwJZAwjsMdpvkvGLWgM7IkisZSQrrjK2ShushZFtGsAYzNys3WwM-3AMa9cs8C0Kk4mv2j8/)

Thermocouple in place (nut to be tightened soon)  

  

With the thermocouple in place, the yellow accents on the machine, and the mean looking electronics attached all over the exterior, I named my roaster **The Murder Hornet!**  

[
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjBp4CHTacmBqXiCpiECZaZvBNkaV9Y0UpN7PI73PIh54wa3BMAnPbDraH6OI77X6_T8C5b6E2kM6dJU8yyc9w3VUF295Kc_Jyjj-tOOoJt7dFr7Fy-SJ8VlisIeDJCUY9gdERWwxXbja8/w376-h501/IMG_5954.jpg)
](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjBp4CHTacmBqXiCpiECZaZvBNkaV9Y0UpN7PI73PIh54wa3BMAnPbDraH6OI77X6_T8C5b6E2kM6dJU8yyc9w3VUF295Kc_Jyjj-tOOoJt7dFr7Fy-SJ8VlisIeDJCUY9gdERWwxXbja8/)

  
  

### Roasting

Now it's time to roast! Here's how my roasts go:  

1.  Go into the garage, and keep a fire extinguisher handy. DIY heat related electronics are not something you want to mess around with in your house.
2.  Set my target temperatures and durations in the Arduino sketch  
    
3.  Plug in the roaster, with my laptop connected to the Arduino
4.  After about 1 minute of warming up the machine empty, begin adding green beans until they stop getting ejected out the mouth of the popcorn maker
5.  Watch the serial output from the Arduino. Once a roast has started, the only thing I can really do is unplug the Arduino which by extension disabled the relay/heater. So there is always the option to slam on the breaks if a roast is getting overcooked. Otherwise, watching The Murder Hornet self regulate temperature is just fun.
6.  When the roast is finished, wait for the cooling phase to read ~20C or lower before pulling the plug and dumping the beans into a collander or baking bowl
7.  Wait at least 24 hrs for the beans to lose some of the C02 zip
8.  Enjoy my coffee!

Here are a few photos of my roasts, and graphs of the temperature control while roasting:

[
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjeLM0uTHSOTBvpcbHQlNGwgnXehIOhUB6M-R_JFmZmfEbuo0-pJh7Unni3RFHUUSUgcO_gvSal4aCi1dTMktg0QKdpNjkzmKPyw7eMXfxMO5JKnKFy8Ekzit5Sg8PmKWkSGFopowfZ5Gs/w535-h329/Screen+Shot+2021-02-20+at+7.38.28+PM.png)
](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjeLM0uTHSOTBvpcbHQlNGwgnXehIOhUB6M-R_JFmZmfEbuo0-pJh7Unni3RFHUUSUgcO_gvSal4aCi1dTMktg0QKdpNjkzmKPyw7eMXfxMO5JKnKFy8Ekzit5Sg8PmKWkSGFopowfZ5Gs/)

Showing heating time, temperature, and target temperature during a medium roast  

  

[
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh4zb7c3GjM09AyS4zMc6yZ3Dy7nhHmjiWqjjD1YKgAbJNaTH2x6jSZGVKvuZ-clnTGNmemScUKyKBK0Rt0xitSCnGY-LbubikEUWl2-2QTYAkEhISw9R7HxOghMCy1XBlHAfO6hn8lpto/w426-h320/IMG_6006.jpg)
](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh4zb7c3GjM09AyS4zMc6yZ3Dy7nhHmjiWqjjD1YKgAbJNaTH2x6jSZGVKvuZ-clnTGNmemScUKyKBK0Rt0xitSCnGY-LbubikEUWl2-2QTYAkEhISw9R7HxOghMCy1XBlHAfO6hn8lpto/)

Light Roast Brazillian  

[
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiMCSugDMy3aeZqpHmNc57d16p8jhv1qJA9RVqV_2KA4eUFm_-YFgwcSDh6uabUPEz6bo6SNqRjMpF5PGNexZ_zE4SK7akQAGYs_AN0dKyvsWv5Fv1YzE-2iqWGsy6YEAav1QCJqsH0NxA/w428-h511/Screen+Shot+2021-02-20+at+7.37.24+PM.png)
](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiMCSugDMy3aeZqpHmNc57d16p8jhv1qJA9RVqV_2KA4eUFm_-YFgwcSDh6uabUPEz6bo6SNqRjMpF5PGNexZ_zE4SK7akQAGYs_AN0dKyvsWv5Fv1YzE-2iqWGsy6YEAav1QCJqsH0NxA/)

Medium Roast Guatemalla  

[
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhIlBDw42ZoVh3TsOM1JWu0WJQK8EuSbgA2Y6qjGtRsoIk-yy6lg6_aDuriRK0Dg2vMNLiDCZL9vPNy4vdjabiAblEpgLgX6yPPh5J7BLlm3Dmry7sYpatgLuuTnbxgBbuHcwQSJhhejVE/w417-h313/IMG_5980.jpg)
](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhIlBDw42ZoVh3TsOM1JWu0WJQK8EuSbgA2Y6qjGtRsoIk-yy6lg6_aDuriRK0Dg2vMNLiDCZL9vPNy4vdjabiAblEpgLgX6yPPh5J7BLlm3Dmry7sYpatgLuuTnbxgBbuHcwQSJhhejVE/)

Dark Roast Brazillian