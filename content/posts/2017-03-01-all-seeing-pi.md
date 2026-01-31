---
title: "The All-Seeing Pi"
date: 2017-03-01
slug: all-seeing-pi
tags: ["C++", "blind", "wearable", "vision assist", "software", "disability", "raspicam", "3d printing", "raspberry pi", "AR", "DIY", "picamera", "eyesight enhancement", "travel", "VR", "opencv", "digital eyesight", "hardware", "fashion"]
original_url: /2017/03/all-seeing-pi.html
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/O76jgiU82rg" frameborder="0" allowfullscreen></iframe>

  

  
This post is a about vision enhancement platform called The All-Seeing Pi that I have been working on with my friend Dan, who is blind. People who are blind rarely have no vision at all though, and in Dan's case, he still has a little bit of sight in one eye. He's also the first to tell you how much technology can do to enable mobility.  
  
From these discussions, we came up with the idea for a video feed connected to a display, with a wearable screen in the ideal spot for maximum vision. This allows someone to focus on just the screen, and let the camera capture the detail and depth of the environment.  
  
In the end, the prototype served as a successful proof of concept. Checkout the video above for a field test and some more discussion! Dan also likes to push the limits of what can be done with his disability, which he chronicles at his blog [Three Points of Contact](http://www.threepointsofcontact.ca/).  
  
In the rest of this post, I'll be talking about how to build the device. This may be useful if you or a friend have a similar condition, but it is also a great starting platform for a Raspberry Pi based augmented reality rig. The general setup is a raspberry pi with a camera module running on an HDMI (not SPI!) small display. The video feed is provided via OpenCV and RaspiCam, with code and install details below.  
  
  

## Build Guide

  

As always, feel free to mix and match parts. When it comes to batteries, cables, headsets, the world is your oyster. I would strongly recommend getting the same screen as me however, and a "picam" camera as they will work best with the 3d printed enclosures.

  

### Materials:

[
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjP7b0SKKiEE0ZIA9v13TNikGbhhXy_vrmZusZkjEGVHFGOWovqJf_YijpwAa_HFKdc3jDnfFMPmUv0CGQ05tcxgRwkhfO7vEkVrU7HLqmx1I3Kfxb7X_W20dXCjs3hNs7xv7UDTTCAytA/s200/IMG_3882.JPG)
](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjP7b0SKKiEE0ZIA9v13TNikGbhhXy_vrmZusZkjEGVHFGOWovqJf_YijpwAa_HFKdc3jDnfFMPmUv0CGQ05tcxgRwkhfO7vEkVrU7HLqmx1I3Kfxb7X_W20dXCjs3hNs7xv7UDTTCAytA/s1600/IMG_3882.JPG)

1.  [Raspberry Pi 3](http://azon.ly/CqAJ), [16GB Micro SD Card](http://azon.ly/eHLA)
2.  [Waveshare 5" HDMI Display](http://prourls.co/eqD7)
3.  [Raspberry Pi Camera Module](http://prourls.co/j3xA) (any version)
4.  [2000 mAH USB Charge Block](http://prourls.co/0OOt) + compatible micro USB cable
5.  [GoPro Head Mount](http://prourls.co/SzCJ) ([extenders may be necessary too](http://prourls.co/8I2Y))
6.  [3D printed case](http://www.thingiverse.com/thing:2144244) and [camera mount](http://www.thingiverse.com/thing:836143)

If you do not have a 3d printer (like most people), the files can be ordered straight from the Thingiverse link, or downloaded and ordered through [Shapeways](https://www.shapeways.com/)! I personally endorse shapeways, as it's nice to support people in your neighbourhood.

  

You also need one skinny long screw to attach the pi camera. I don't know the size because I just found it in a drawer. If you're building this, you probably have a generous drawer with screws too. Tape will also work.

  

### Assembly

  

Once you've got the hardware, putting it all together is pretty easy!

  

Start by mounting the monitor in the case with at least two screws. You may need to use a taper threaded screw to widen the holes and get the screws that come with the case to bite.  
  

[
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhYdil06Hgi40QGjpPAWttzwKGK58TT5RU8vaH9_44ZPxOuCeLhlaGnY9663sV5erzgwkhw42FqHtD8HBi40ZDTdg0vlMTshgq_PofMiljcZy4cU307DakhRUkx-ZmSSrS4WqYV8RxOWRc/s320/IMG_3883.JPG)
](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhYdil06Hgi40QGjpPAWttzwKGK58TT5RU8vaH9_44ZPxOuCeLhlaGnY9663sV5erzgwkhw42FqHtD8HBi40ZDTdg0vlMTshgq_PofMiljcZy4cU307DakhRUkx-ZmSSrS4WqYV8RxOWRc/s1600/IMG_3883.JPG)

  

  

Next, attach the picamera enclosure, and slide the picamera in.

  

  

[
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhSHVNsPNN1kqpRr-aa97O6D3LHGYLHT7cb6ZbR3auJYPTBRpNd0ljVYC4y7x3k2BZzheeuOIr6Ib8Vx_8kH4Q6nsN4FdM1ZDVY0F4T6Gwf-6bElngzJSRaNPb5MApx8H_4jp7IymWFMhg/s200/IMG_3887.JPG)
](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhSHVNsPNN1kqpRr-aa97O6D3LHGYLHT7cb6ZbR3auJYPTBRpNd0ljVYC4y7x3k2BZzheeuOIr6Ib8Vx_8kH4Q6nsN4FdM1ZDVY0F4T6Gwf-6bElngzJSRaNPb5MApx8H_4jp7IymWFMhg/s1600/IMG_3887.JPG)[
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi94cdQDTG4QOwojkBbRj67REHHTJcI4tUiIzfd7x2LfWt_kD4aeeIngDu_CiyiYYloiHTgD1mNNaez_aZTXFKX3h3DKNcJNNKhkY_6WSXDYWtFwK9gRaVVXjNbNP8wzBzcw6baKZgZoPQ/s200/IMG_3890.JPG)
](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi94cdQDTG4QOwojkBbRj67REHHTJcI4tUiIzfd7x2LfWt_kD4aeeIngDu_CiyiYYloiHTgD1mNNaez_aZTXFKX3h3DKNcJNNKhkY_6WSXDYWtFwK9gRaVVXjNbNP8wzBzcw6baKZgZoPQ/s1600/IMG_3890.JPG)

  

Now attach the pi to the screen making sure to line up the GPIO pins so the SD card side of the pi is flush. This will align the HDMI ports along the bottom as well.  
  

[
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjDDSyYmmmnoPFnX2ilrPIIxVDrHyWXzuiCMSQZIqOEyLS5pukuPi8-qlLJDtYtatzNfKMX6yFeDT4jpNrN-E_Yl7GlK2ZFPgg79t9BVOR95SHZl8YgSKsFwtyDHGLHPyEp5wthxByUK0A/s200/IMG_3893.JPG)
](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjDDSyYmmmnoPFnX2ilrPIIxVDrHyWXzuiCMSQZIqOEyLS5pukuPi8-qlLJDtYtatzNfKMX6yFeDT4jpNrN-E_Yl7GlK2ZFPgg79t9BVOR95SHZl8YgSKsFwtyDHGLHPyEp5wthxByUK0A/s1600/IMG_3893.JPG) [
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEifC68r18OrUThWZgvdG8_dQlW9JZpImyhH0uwe4hh9ZHi0wOHUlhHvWaFZJwUaPyhH46ND8mZQeOYTLSE4ISvkn8LN0Vq2TDeKquWKI7xThAaCPzzgqQnPOtWpmzcj-kMDGRLefr9yfR8/s200/IMG_3897.JPG)
](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEifC68r18OrUThWZgvdG8_dQlW9JZpImyhH0uwe4hh9ZHi0wOHUlhHvWaFZJwUaPyhH46ND8mZQeOYTLSE4ISvkn8LN0Vq2TDeKquWKI7xThAaCPzzgqQnPOtWpmzcj-kMDGRLefr9yfR8/s1600/IMG_3897.JPG)

  
  

  

Now you just attach the GoPro head mount, and plug in your power.  
  

[
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiYrDthzAzj-fSQ6bdpyupa59uEm-DirWnBllK79bufQKLvdcS3S93dyfywjRjObztR5ne2UGoVOtRCRf2n7aFZWd_-iI0sU4MSmxUqJb8G4xFq34nxfC_MpfjCHm7brasol3DZXsJ1VoQ/s200/IMG_3898.JPG)
](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiYrDthzAzj-fSQ6bdpyupa59uEm-DirWnBllK79bufQKLvdcS3S93dyfywjRjObztR5ne2UGoVOtRCRf2n7aFZWd_-iI0sU4MSmxUqJb8G4xFq34nxfC_MpfjCHm7brasol3DZXsJ1VoQ/s1600/IMG_3898.JPG) [
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj_Wjkm4qwnj4rdg2-mpHt5u7sHPqshRJWlYGiksaypiQgE03UzmQ39Lb1m3GWmiQnZZ9lB-CYPU6a1PUG4VXK0RTwxfGcm27WlgJe6RIw2blZyml_07yC_Xm5DxbL7aTHNK0gJ-pYWHfw/s200/IMG_3899.JPG)
](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj_Wjkm4qwnj4rdg2-mpHt5u7sHPqshRJWlYGiksaypiQgE03UzmQ39Lb1m3GWmiQnZZ9lB-CYPU6a1PUG4VXK0RTwxfGcm27WlgJe6RIw2blZyml_07yC_Xm5DxbL7aTHNK0gJ-pYWHfw/s1600/IMG_3899.JPG)

  
Congrats, your hardware is all setup! Now it's time to get the Raspberry Pi and software up and and running.  
  

### Raspberry Pi Setup

  

The first step in setting up the Raspberry Pi is the usual, download raspbian, transfer the image to your sd card, and update the operating system. Checkout [this section](http://www.cyber-omelette.com/2016/12/smart-mirror.html#pi_setup) if you need help with this bit.

  

The next step is getting your monitor driver functioning. Hopefully it just works when you plug it in, otherwise you may need another monitor temporarily. To find more instructions on this, checkout the [Waveshare Driver Installation instructions](http://www.waveshare.com/wiki/5inch_HDMI_LCD#Method_1._Driver_installation).

  

Once the RPi is running, and your display is appearing as expected, we now need to download OpenCV and RaspiCam++.

  

To install opencv, just run the following command to automatically install the package:  
  

**$>** sudo apt-get install libopencv-dev

  

RaspiCam provides an interface between the raspberry camera module, and OpenCV. Installing RaspiCam can be done by following the steps on their github page, or by running the following commands:  
  
**$>** git clone https://github.com/cedricve/raspicam .  
**$>** cd raspicam  
**$>** mkdir build  
**$>** cd build  
**$>** cmake ..  
**$>** make  
**$>** sudo make install  
  
  

### Writing the Software

  

The software is written in C++, and uses OpenCV to display the output. Using OpenCV just to display an output is overkill, but this leaves the project in a great position to add additional functionality such as edge highlighting, horizon tracking, and much more.

  

The project can be found in the github project [here](https://github.com/benrules2/piopencv)\*, and can be installed by running  
  

**$>** git clone https://github.com/benrules2/piopencv.git  
**$>** cd piopencv  
**$>** mkdir build  
**$>** cd build  
**$>** cmake ..  
  
This will generate a "picamera" executable that can be launched from the build directory by running  
**$>**./picamera  
  
It would be a good idea to test that this happens! You can exit the program by holding escape.  
  
\*I have received some feedback that I may be oversharing when it comes to code on non programming focused posts. So I've just linked to the github here, please leave a comment if you'd prefer some more detail.  
  
  

### Autolaunch (optional)

  

The next step is to setup the picamera executable to run automatically on startup. You can skip this step if you don't mind launching it yourself, but that requires a keyboard or remote connection.  
  
If you are running the LXDE desktop environment (default with raspbian pixel), setting a program to autostart is really simple. You simply create a file in the designated autostart folder describing the executable you wish to run.  
  
This can be done as follows  
  
**$>** cd ~/.config/autostart  
**$>** nano piopencv.desktop  
  
Enter the contents of the file to be:  
  
\[Desktop Entry\]  
  
Type = Application  
  
Exec=/home/pi/piopencv/build/picam  
  
Now close and save the file (ctrl-x, y). When you restart your system (sudo reboot -n), the program should auto start !  
  
  

### Closing Remarks

  

Whew, what a project! I went through a few iterations of screens and software platforms to get this going, and did a whole lot of work trying to get non-HDMI screens (which get a lot smaller) to show a decent frame rate. I ended up scrapping this and just buying the smallest HDMI screen I could find.  
  
Overall, I was really happy with the end result of this project. I'm also really excited about what is possible now that we've got the "reality" part of an augmented reality headset completed.

  

Hopefully you were able to follow along with the build process, and I encourage anyone interested to participate via [github](https://github.com/benrules2/piopencv). For example, if you're a computer vision pro and have some ideas about what would help a blind person navigate, add it to the project! The base criteria is that it must run in 20fps on a Raspberry Pi. Then anything goes.

  

Thanks for reading, and expect an update in the next few months.

  

  

p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Monaco; color: #f5f5f5; background-color: #000000} p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Monaco; color: #f5f5f5; background-color: #000000; min-height: 16.0px} span.s1 {font-variant-ligatures: no-common-ligatures}