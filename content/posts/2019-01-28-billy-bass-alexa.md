---
title: "How To Hack Alexa (Echo Dot) into Big Mouth Billy Bass"
date: 2019-01-28
slug: billy-bass-alexa
tags: ["motor shield", "LM386", "arduino", "alexa", "big mouth billy bass", "echo dot", "arduino uno"]
original_url: /2019/01/billy-bass-alexa.html
---

Alexa is fun and all, but combining her with animatronics such as the Big Mouth Billy Bass creates a much larger and weirder personality! In this post I'll walk you through how to make an Alexa device out of a Billy Bass toy. This isn't an original idea (kudos to [Brian Kane](http://briankane.net/tag/billy-bass/) for coming up with this project), but I've tried to make the steps as simple as possible.  

  

<iframe width="560" height="315" src="https://www.youtube.com/embed/kNofsIxJrwo" frameborder="0" allowfullscreen></iframe>

  

  

## Do It Yourself

**Tools:** Soldering Iron, Hot Glue Gun, Torx Screwdriver, Philips Screwdriver  
  

### Materials:

[
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh3FOjiuKXvNwrRSR_nkgQ5IvpwHgLff0HpCOm7uJm3ax8zPYJ8xae1KoMgMcite7aInEswYcDHBG6zKWz2BlC7-mm_91T6Wok-AKwRlQto8uHy7QrxBcwicY5-TXdQ5tbMVrf7xPPj2x8/s320/1NI05708.JPG)
](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh3FOjiuKXvNwrRSR_nkgQ5IvpwHgLff0HpCOm7uJm3ax8zPYJ8xae1KoMgMcite7aInEswYcDHBG6zKWz2BlC7-mm_91T6Wok-AKwRlQto8uHy7QrxBcwicY5-TXdQ5tbMVrf7xPPj2x8/s1600/1NI05708.JPG)

Billy Bass in the Toronto Tool Library surgery room.

1.  [Big Mouth Billy Bass](https://amzn.to/2Dtyvdm)\*
2.  [Echo Dot 2nd Generation](https://amzn.to/2T3KAet)
3.  [Arduino Uno](https://amzn.to/2WcPfwt)
4.  [Arduino Motor Driver Shield](https://amzn.to/2W8VMs5)
5.  [LM386 Amplifier](https://amzn.to/2S92mzX)
6.  [3.5mm Audio Cable](https://amzn.to/2Mu7F7O)
7.  [At least 4x C Cell Batteries](https://amzn.to/2WbEdYx)

_\*This Billy Bass seems closest to mine, any should work but some may contain only two motors_  
  

### Billy Bass Tear-down

1\. Billy bass should have some pretty obvious screws on the back. Trust your instincts and simply unscrew those (saving the screws), and pull the back off the fish. This should open up to reveal motors on the fish side, and a battery pack on the back plate.  
  

[
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhsY4uMCTCEHn5rHlWh6FCMtqDRW2z43HZYP-bvQnVboU-Gh_4QO1M2TkGpEyioUBOZPGhe-cPJhCUxZz9T3IZmctHerj4WQcc1tITVpFJbKvHoVf1wDAgjHO8hAySNbPNOrshnX7_wkUU/s400/1NI05695.JPG)
](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhsY4uMCTCEHn5rHlWh6FCMtqDRW2z43HZYP-bvQnVboU-Gh_4QO1M2TkGpEyioUBOZPGhe-cPJhCUxZz9T3IZmctHerj4WQcc1tITVpFJbKvHoVf1wDAgjHO8hAySNbPNOrshnX7_wkUU/s1600/1NI05695.JPG)

Internals of Billy Bass. The white square contains all the motors with the 3 sets of motor wires coming out. The battery pack which we use as a power source can be seen on the back plate.

  

  
2\. You will see a PCB inside with all the wires attached. Track the wires coming from the motors, and cut them free from the Billy PCB board leaving yourself as much wire as you can (there should be plenty). Tape or mark these wires. Identify the wires coming from the battery, and cut those free from the PCB as well. These will be used later to provide power to your Arduino through the Motor Shield.  
  
  

[
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiUKJlCLrvqGZQR3cXJKpOgFCbunEMpOraXKtT5YYe9wQnPyrbkbwmoyIe8xT7k77hj8x5gK37UutY_Xrrc1aTDnv46X6cQV8p8OOn86X33gIov9cB-PiUIAXZhM_p95lULf-0H5b_eBsc/s400/1NI05700.JPG)
](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiUKJlCLrvqGZQR3cXJKpOgFCbunEMpOraXKtT5YYe9wQnPyrbkbwmoyIe8xT7k77hj8x5gK37UutY_Xrrc1aTDnv46X6cQV8p8OOn86X33gIov9cB-PiUIAXZhM_p95lULf-0H5b_eBsc/s1600/1NI05700.JPG)

Billy Bass PCB with some of the wires cut. You can cut this piece completely free, but I hadn't committed to that when I took this photo.

  
3\. (Optional) Identify the switch used to toggle the motion sensor for the fish on and off. Cut its wires and solder the positive lead from the battery terminal to pass through this switch instead, allowing it to be used for turning on and off Billy's power to the motors. This is for convenience and not strictly necessary.  
  

[
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhCnrM-sYw9PJHXIb14XwVW4sdtszR7UK-uCpRmLVWC4yn93urmap9Ri0xg2uOukxAMVo3p4yzhPP2S8JnnYIADH3D83SMQ1q9rJsSaHNl84aAufuxokFCw5ZN_LLSamM64s9dxMUt_hCc/s400/IMG_20190112_140818.jpg)
](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhCnrM-sYw9PJHXIb14XwVW4sdtszR7UK-uCpRmLVWC4yn93urmap9Ri0xg2uOukxAMVo3p4yzhPP2S8JnnYIADH3D83SMQ1q9rJsSaHNl84aAufuxokFCw5ZN_LLSamM64s9dxMUt_hCc/s1600/IMG_20190112_140818.jpg)

The positive wire coming off the power source being connected to the back switch. The switch now turns the motors on and off by enabling and disabling the power.

  
4\. Attach your motor shield to your Arduino, and connect the positive and negatives wires from the motors to the first three motor ports on the motor shield (labelled M1, M2, M3). Connect the positive and negative leads from Billy's battery pack to the terminals labelled EXT\_PWR.  
  

[
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjMiMWn0ouA3_T0GZ7p9Eo7eEnoS0OrkWCU-tnIH4xGuTMKx0Gx78nuvbgfzAzMH67EwHDYmZr6OsT0hVavhOHyLwVIY37vOdV_2O3WtI7eEuxsezguWXZLoIR3IAzhfb2Rc0kHcKyNqT4/s400/1NI05827.JPG)
](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjMiMWn0ouA3_T0GZ7p9Eo7eEnoS0OrkWCU-tnIH4xGuTMKx0Gx78nuvbgfzAzMH67EwHDYmZr6OsT0hVavhOHyLwVIY37vOdV_2O3WtI7eEuxsezguWXZLoIR3IAzhfb2Rc0kHcKyNqT4/s1600/1NI05827.JPG)

Motor shield with 3 motor wires attached - two at the bottom, one at the top, along with power from the battery pack on the right hand side with the black and red wires. The white wire is connected to the audio amplifier described in the next section.

  

### Controlling the Motors

With all the wires attached, now you can upload your first sketch to the Arduino and confirm the motors are working as expected. You will first need to install the Adafruit Motor Library for controlling your motor shield by following [the instructions on their site](https://learn.adafruit.com/adafruit-motor-shield/library-install). Once that is done, you can upload this [Motor Diagnostic](https://gist.github.com/benrules2/f9268a320d99863fe9dbd330351af56a) sketch to your Arduino which should drive M1, M2, and M3 in sequence.  
  
You should remain on this step until you are able to control the head, mouth, and tail by the motors of the same name in the Arduino sketch. This will be needed when we add more sophisticated actions.  
  
_If this is not working, you may have to assign the head, mouth, and tail variables in the sketch to a different motor number based on how you connected them. Additionally if the mouth, tail, or head seem to move the wrong direction, you can reverse the two wires attached to the motor shield._  

## Echo Dot Tear-down and Audio Detection

1\. Peel the rubber off the bottom of your Echo Dot (2nd Generation), which will reveal a clear adhesive layer which you can also peel off. This will reveal four torx screws. Unscrew and remove these four screws, and your dot should come apart into multiple pieces.  
  
We are interested in the two circuit boards. Be careful with the ribbon cable connecting the two PCBs. This came unplugged for me about 20 times, so you may want to attach this to the fish case immediately (see photos near the end of this post for how I attached mine).  
  

[
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEibiCjCA_GNbsfFPnnuv56Nn8u6PheKNLGxGPvmkuB8s0tGcQ74Vkva7S-rpEtOh-CA4O3M8K5CSe3d-3PprNKaSBX6AWdE4kRoj9kQ8YC_GXTGFGh4fd_6JkpLPGrd1mgRvdB52dY4l-U/s400/PICT_20190106_192625.JPG)
](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEibiCjCA_GNbsfFPnnuv56Nn8u6PheKNLGxGPvmkuB8s0tGcQ74Vkva7S-rpEtOh-CA4O3M8K5CSe3d-3PprNKaSBX6AWdE4kRoj9kQ8YC_GXTGFGh4fd_6JkpLPGrd1mgRvdB52dY4l-U/s1600/PICT_20190106_192625.JPG)

Echo Dot disassembled. The green PCBs connected by the ribbon cable are all we need. You can re-assemble the empty Dot case and gift it to a friend.

  

  
2\. Cut your 3.5mm audio cable very close to the jack. Peel away the rubber to reveal the contacts at the base of jack. This will contain a left, right, and ground cable (in the form of many small loose wires). Solder a length of wire to both L and R (converting the signal to mono), and twist the loose wires together to form a ground wire. For more info on the audio jack, checkout [this very helpful post](https://www.hackster.io/HiAmadeus/soldering-audio-jack-1a34c7). At this stage you can test that the audio output still works using a portable speaker.  
  

[
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjVRWEZlS5x1_EuAZ47sfVRNDBNML7-xMgtuIookQWX_ebRzGUnvrPPC6_Csa9nXnzE0yTKfE4nS1hnTS1MHOOjui9nN3LWuF7i3QrbE5ivD13kCohIIwSptnlGz8OxjNfjbPQQueCyy_g/s400/1NI05784.JPG)
](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjVRWEZlS5x1_EuAZ47sfVRNDBNML7-xMgtuIookQWX_ebRzGUnvrPPC6_Csa9nXnzE0yTKfE4nS1hnTS1MHOOjui9nN3LWuF7i3QrbE5ivD13kCohIIwSptnlGz8OxjNfjbPQQueCyy_g/s1600/1NI05784.JPG)

Arduino connected to the audio output of the Echo using the stripped 3.5mm audio cable. The red wire carries the signal

  
  
3\. Connect the signal wire (L and R mono) to the IN pin on the LM386 amplifier board, and connect the ground pin to the audio signal ground. Run wires from the Arduino 5V output / GND to the amplifier's VCC and 2nd GND pin (can also use Billy Bass battery pack for VCC and GND). Now attach the wires from Billy Bass' speaker to the amplifier.  
  
At this point you should be able to plug the 3.5mm audio jack into the Echo Dot, and hear Alexa through the speaker. If you can not hear music, try turning the small screw (potentiometer) on the amplifier to increase the gain. This will introduce noise however, so try to keep the gain as low as possible.  
  

[
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjhlwI9XdLNZv5B28hF1FDWBmq9euSx7812xwFvKz6bkdInwcnD7R8WroVtscVbS3p2n8ct2QjwJZr-O1Tg2FtC8aGGX2H8fPcq-t6vThhiwrwJOJkGs8KIozKFjM7BrBQHZmjyPL1yL20/s400/1NI05790.JPG)
](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjhlwI9XdLNZv5B28hF1FDWBmq9euSx7812xwFvKz6bkdInwcnD7R8WroVtscVbS3p2n8ct2QjwJZr-O1Tg2FtC8aGGX2H8fPcq-t6vThhiwrwJOJkGs8KIozKFjM7BrBQHZmjyPL1yL20/s1600/1NI05790.JPG)

Arduino and Echo Dot connected to the LM386 amplifier board and internal Billy Bass Speaker. Note the white signal cable from the amplifier speaker wire terminal running to the Analog input on the Arduino.

  
4\. With the 4 pins on the amplifier oriented at the bottom, you'll have the two speaker wire terminals at the "top". Attach an additional wire to the top left speaker terminal, and connect this to Analog pin 0 on your Arduino. For testing purposes this can be done without the motor shield attached. Once it is working however, you will have to solder this to the motor shield connection marked A0 _(actually, I accidentally used A1 - any analog pin will suffice)_.  
  

### Audio Diagnostic Arduino Sketch

If you have followed the above steps correctly, there are two tests to confirm you are on the right track. You should make sure these two checks are working before proceeding to the next step!  
  
1\. When you play music from your Echo ("Alexa, play Slayer"), you actually hear something.  
  
_If this is not working, check the power going into the amplifier is setup correctly, and check your wires from the 3.5mm audio are properly connected._  
  
2\. When you load [this audio diagnostic sketch](https://gist.github.com/benrules2/9b6c730084e6fbb46ca1c8b4036e8c9c) to your Arduino and open the Serial Monitor (9600 baud), you can see a log message indicating if music is playing or not. You can also watch the onboard LED for the Arduino which should be illuminated when music is playing, and off otherwise.  
  
_If step 2 isn't working, try connecting your analog wire to the other terminal on the speaker ports coming from the amplifier. You may also need to adjust the "quietThreshold" value in the sketch to correctly calibrate for no sound playing, though in the next step we will average this value to make it more stable._  
  

### Putting it all Together

After independently determining we can make all the motors move, and that we can play music and measure from the Arduino when music is playing, we just need to combine the components.  
  
This is done simply by connecting the amplifier signal to the A0 port on the motor shield, and plugging in all the motors. Pushing [this sketch combining the audio signal reading with some more advanced motor movements](https://gist.github.com/benrules2/2f5304627c109e4ceb31b8ec12d69ee0) to your Arduino should now trigger fish animations anytime music is playing.  
  
Plug your echo into a power supply and connect it to the 3.5mm audio cable, and you should see your fish take on the personality of Alexa! We're in the home stretch now.  
  

[
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhmwJsORKtX8rY5ZeuDRuUN0a4rbQsOMVxQOjOj_3fxWNRG7fiVlDfuVCH_OiRwNa0YN3DkvRAs6_PsdA-1Kbm4e23zqOCjFz7dWeRNMiBPWE_IwDVtif1-t-RP3FdQ7dJ5VC7QMgzkSm4/s400/IMG_20190112_163129.jpg)
](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhmwJsORKtX8rY5ZeuDRuUN0a4rbQsOMVxQOjOj_3fxWNRG7fiVlDfuVCH_OiRwNa0YN3DkvRAs6_PsdA-1Kbm4e23zqOCjFz7dWeRNMiBPWE_IwDVtif1-t-RP3FdQ7dJ5VC7QMgzkSm4/s1600/IMG_20190112_163129.jpg)

All the components connected and working, but not yet re-assembled into a coherent fish.

  
Now all that's left is attaching the electronic components inside Billy's case and closing it back up. I used the plastic spacer tabs on Billy Bass to hold the Dot in place by gluing the lower PCB to the case, and attaching a screw through the top PCB to one of existing screw risers for the case which I cut in half. The amplifier was glued to the backing plate (as far from the speaker as possible, as there is a crackling noise when they are close together), and the Arduino was hot glued in the remaining space. Keep in mind you may want to take this apart again, so use either long or detachable wire connections.  
  
  

[
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhQnRW8n23Z_I5vkAawCDqPdhyphenhyphen3KsBqRQS6SqUnHI6YbmCAYCLtbC0cyDbskRsNEl2ujTYYdHoHuzaFtE-D7yG49Sp0wW_WHJ0rR1lM7AgLz9TBoCHsAASWhjan02tP7outpIO127xI9A0/s320/1NI05820.JPG)
](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhQnRW8n23Z_I5vkAawCDqPdhyphenhyphen3KsBqRQS6SqUnHI6YbmCAYCLtbC0cyDbskRsNEl2ujTYYdHoHuzaFtE-D7yG49Sp0wW_WHJ0rR1lM7AgLz9TBoCHsAASWhjan02tP7outpIO127xI9A0/s1600/1NI05820.JPG)[
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhRspxp7LDDztaJCb_KR6aXe21J8WOfikd9TsiX3diFsDKMHBWZUjXaiICqa-9r_tSzvzIHcxLoWWXhIjqAYsHqFB3O8qhEXTMpXG86QIVasTWCyNvdAM4y_AhvkJplTnlsu4QmZAjX4LY/s320/1NI05823.JPG)
](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhRspxp7LDDztaJCb_KR6aXe21J8WOfikd9TsiX3diFsDKMHBWZUjXaiICqa-9r_tSzvzIHcxLoWWXhIjqAYsHqFB3O8qhEXTMpXG86QIVasTWCyNvdAM4y_AhvkJplTnlsu4QmZAjX4LY/s1600/1NI05823.JPG)

On the top you can see the front plate. I used the plastic risers on Billy's case to hot glue the lower PCB, and then screw the other half right above. On the bottom you can see the amplifier which was simply glued to the back plate. I later ended up moving it to the left side so it did not pickup interference from the speaker being driven.

  

[
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgwQHNAITo6TY4-L3EjbteoHJsh1rjg8d3FXYDc9HYW0u7F4stHKAnNMS62Sqmo_5srkh3Y0eBqL0qg8xbZJAg6GoQmnUHeKwu_60yMg_b2NhwXJhDxKK8FPv0GxKb4cTQ6hcy8xa34zoI/s320/1NI05812.JPG)
](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgwQHNAITo6TY4-L3EjbteoHJsh1rjg8d3FXYDc9HYW0u7F4stHKAnNMS62Sqmo_5srkh3Y0eBqL0qg8xbZJAg6GoQmnUHeKwu_60yMg_b2NhwXJhDxKK8FPv0GxKb4cTQ6hcy8xa34zoI/s1600/1NI05812.JPG)

Drilling holes so Alexa can hear with the case closed.

Finally, you will probably want to drill some holes in Billy's plastic so audio can travel more easily to the the Echo Dot's microphone. I also cut a hole in the side of Billy's case so I could run two USB cables out of the body. One for programming the Arduino if I wanted to keep tinkering, and the other for powering the Echo Dot (using a portable USB battery pack). I think if you wired a USB cable to the battery pack on billy you could also power the Echo dot directly from that, but my one attempt was unsuccessful. I will update this page if I manage to get that done.  
  
  

## Conclusions

So here is one more blog post about how to make Billy Bass into a Smart Fish. By using the Echo Dot instead of a Raspberry Pi you get all the first party Alexa capabilities like Drop-In calling. That being said, you can't be quite as intelligent about what kind of sounds Billy is making. It might be fun to revisit this with [Alexa in a Raspberry Pi](https://developer.amazon.com/docs/alexa-voice-service/set-up-raspberry-pi.html) so I could write some different animations when voice is detected, or even add another layer of audio processing so it sounds like the fish is under water. But I'll have to leave that for a rainy day.  
  
Hope you enjoyed the write up, and good luck hacking! As always I will try to provide technical support in the comments, so please let me know if you have any trouble following.