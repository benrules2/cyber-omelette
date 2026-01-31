---
title: "Automated Plant Watering with a Raspberry Pi"
date: 2017-09-24
slug: automated-plant-watering
tags: ["python", "automation", "plants", "plant watering", "relay", "RPi.GPIO", "flask", "webserver", "pump", "GPIO", "raspberry pi"]
original_url: /2017/09/automated-plant-watering.html
---

This post starts with two facts:  
  
1\. I have a penchant for killing plants.  
2\. People in Holland [grow things really well indoors](http://www.nationalgeographic.com/magazine/2017/09/holland-agriculture-sustainable-farming/).  
  
After reading about how well things can grow indoors, I started thinking that maybe automation was my path to healthy plants. So I decided to build the bare minimum - get a plant, a pump, and a water sensor. When the water sensor says "no water here", use the pump to put water there.  
  
I also decided to run it all through a Raspberry Pi to as an excuse to interact with the RPi GPIO.  
  
Here's how I did it!  
  

<iframe width="560" height="315" src="https://www.youtube.com/embed/mQNJpWkdmbc" frameborder="0" allowfullscreen></iframe>

  
  
  

### Materials:

1.  [Raspberry Pi 3](https://amzn.to/2CSUgTC)
2.  [Soil Moisture Sensor](https://www.amazon.com/gp/product/B00ZR3B60I/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00ZR3B60I&linkCode=as2&tag=cyberomelette-20&linkId=747cf37750038d3b8bc9c4b7fbc4f227)
3.  [Flexible Water Line](https://www.amazon.com/gp/product/B0002AQI9A/ref=oh_aui_detailpage_o04_s00?ie=UTF8&psc=1&tag=cyberomelette-20)
4.  [5V Relay](https://www.amazon.com/gp/product/B0057OC5O8/ref=as_li_tl?ie=UTF8&tag=cyberomelette-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B0057OC5O8&linkId=79128c0fb9efa41048a1490b5007a164)
5.  [3-6V Mini Micro Submersible Pump](https://amzn.to/2r93Smi)
6.  [TOLI 120pcs Multicolored Dupont Wire](https://www.amazon.com/gp/product/B06Y2B48RK/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B06Y2B48RK&linkCode=as2&tag=cyberomelette-20&linkId=75009e2d26426b98b9ff6ef66dc76917)
7.  5v Power Supply ([Any USB Cable](https://www.amazon.com/gp/product/B00MG317YC/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00MG317YC&linkCode=as2&tag=cyberomelette-20&linkId=a3e0faea00eaeb3132ecaa871ce09585)\+ [USB Wall Charger)](https://www.amazon.com/gp/product/B01LCDJ7LG/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B01LCDJ7LG&linkCode=as2&tag=cyberomelette-20&linkId=95c38a3fc2b9e7e43592ebe3c4a3cc81)

### Wiring:

  

The first thing I did was make my 5V power supply from a usb cable. Using an old iphone cable, I cut the iphone side off and fished out a red and black wire. I soldered some sturdier wires to this, and plugged it into a wall adapter. Checking with a voltmeter, this gave me 5V output.  
  

[
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEivC4ZK3giGgSreEi7GX9TbVyL97Hg7eJF6QWP20udPe9xoPVhAGSDPKAbWSDHdGWKjNSNGBTblK9GygS2-9EOb988cC9_c49xXDgay3pD_Kzv5hdk2XU6W4gXQsPh4dbylIUseltBOxkc/s320/IMG_5373.JPG)
](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEivC4ZK3giGgSreEi7GX9TbVyL97Hg7eJF6QWP20udPe9xoPVhAGSDPKAbWSDHdGWKjNSNGBTblK9GygS2-9EOb988cC9_c49xXDgay3pD_Kzv5hdk2XU6W4gXQsPh4dbylIUseltBOxkc/s1600/IMG_5373.JPG)

  
Now time for the GPIO.  
  
  

### **RPi Wiring:**

  
  
[
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhuioRunermoGJsCq_KquTZ0yBoMT7lLYzbNxe94kNDlbupo1aBb-b_CtSHz18IJckvKQAcjRI9E1LgOrvlQpnpWsS6yW-macQtSS2tOR3mj25n_Ru3g4wctlwA1ofURyGEztbZGMLQzH0/s640/GPIO.jpg)
](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhuioRunermoGJsCq_KquTZ0yBoMT7lLYzbNxe94kNDlbupo1aBb-b_CtSHz18IJckvKQAcjRI9E1LgOrvlQpnpWsS6yW-macQtSS2tOR3mj25n_Ru3g4wctlwA1ofURyGEztbZGMLQzH0/s1600/GPIO.jpg)  
  
Following [this GPIO layout](https://www.element14.com/community/servlet/JiveServlet/previewBody/73950-102-12-339300/pi3_gpio.png):  
  
**Water Sensor** - plug the positive lead from the water sensor to pin 2, and the negative lead to pin 6. Plug the signal wire (yellow) to pin 8.  
  
**Relay** - Plug the positive lead from pin 7 to IN1 on the Relay Board. Also connect Pin 2 to VCC, and Pin 5 to GND on the Relay board.  
  
**Pump** \- Connect your pump to a power source, run the black ground wire between slots B and C of relay module 1 (when the RPi sends a LOW signal of 0v to pin 1, this will close the circuit turning on the pump).  
  
This diagram should capture the correct GPIO so long as you are using Raspberry Pi 3. Not shown is another power source to the RPi.  

  

  

### Hardware Setup:

  

Once the wiring has been completed, attach the flexible hose to the pump (I used electrical tape), and drop it into a jar of water. Attach the other end of the hose to your plant.  
  
Now plug in all power sources (and make sure your Raspberry Pi is running some version of an operating system, like this one [here](https://www.raspberrypi.org/blog/raspbian-jessie-is-here/)).

  

[
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi9LCUtMZ167Ap15RtRtgIcD711NMEwsYbUjSAc9Eo7mZIMmIhUUUXXr8VKsUH9sC4qz7o0ttQQKEoljX7apacF9emJ1Mo3ad8H994zYTW0A-52W3CR7RLztqad5qf_t1gb3OqUbafa1Ts/s400/_DSC3994.JPG)
](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi9LCUtMZ167Ap15RtRtgIcD711NMEwsYbUjSAc9Eo7mZIMmIhUUUXXr8VKsUH9sC4qz7o0ttQQKEoljX7apacF9emJ1Mo3ad8H994zYTW0A-52W3CR7RLztqad5qf_t1gb3OqUbafa1Ts/s1600/_DSC3994.JPG)

  
  

[
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEigTevcx9RZ4Btwhyty7edtWD_WKYzpi1g3EOdSyfW-5FHoGnGba9GdVMmHD9U63k-NZBZ2Zvuw7TFqZrR25_WLbFBn7hCkUa3aJFcneS14XyTRaosDmMY5xnqStdoMGTTPPscuBSf1oZs/s400/pump.jpg)
](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEigTevcx9RZ4Btwhyty7edtWD_WKYzpi1g3EOdSyfW-5FHoGnGba9GdVMmHD9U63k-NZBZ2Zvuw7TFqZrR25_WLbFBn7hCkUa3aJFcneS14XyTRaosDmMY5xnqStdoMGTTPPscuBSf1oZs/s1600/pump.jpg)

  

## Software

  

Note: If you get the wiring exactly as described above, my code in the next section will work with no modifications.

  

There are two parts to this setup. One file controls all the GPIO and circuit logic, and the other runs a local web server.  
  
All files:  
[water.py](https://gist.github.com/benrules2/6f490f3a0e082ae6592a630bd7abe588)  
[web\_plants.py](https://gist.github.com/benrules2/c4f3db455f4f2dfbe7d5b825b0b4ee36#file-web_plants-py)  
[auto\_water.py](https://gist.github.com/benrules2/c4f3db455f4f2dfbe7d5b825b0b4ee36#file-auto_water-py%EF%BB%BF)  
[main.html](https://gist.github.com/benrules2/e43c469b2c1263237dc67010fca18b53)  
  

### GPIO Script

  

Let's start with the code for controlling the GPIO. This requires the RPi.GPIO python library which can be installed on your Raspberry Pi as follows:  
  
$> python3.4 -m pip install RPi.GPIO

  

With that installed, you should be able to use the water.py script found [here](https://gist.github.com/benrules2/6f490f3a0e082ae6592a630bd7abe588).

  
You can test this is working correctly by running an interactive python session as follows:  
  
$> python3.4  
\>>> import water  
\>>> water.get\_status()  
\>>> water.pump\_on()  
  
This should print a statement about whether your sensor is wet or dry (get\_status()), and also turn on the pump for 1s. If these work as expected, you're in good shape.  
  
At this point you can also calibrate your water sensor. If your plant status is incorrect, try turning the small screw (potentiometer) on the sensor while it is in moist soil until the 2nd light comes on.  
  

### Flask Webserver

  

The next aspect of this project is to setup the web server. This code can be found [here](https://gist.github.com/benrules2/c4f3db455f4f2dfbe7d5b825b0b4ee36) in a file called web\_plants.py. This python script runs a web server enabling various actions from the script described above.  
  
You will need to keep web\_plants.py in the same directory as water.py described above, as well as auto\_water.py. You will also need a sub-directory called "templates" containing the html file [here](https://gist.github.com/benrules2/e43c469b2c1263237dc67010fca18b53) called main.html.  
  
You will need to install flask, and psutil as follows:  
  
$> python3.4 -m pip install flask  
$> python3.4 -m pip install psutil

  
You will also need to create a sub-directory called templates, and place main.html in the templates directory.  

  

Now run the following command command to start your web server:  
  
$> sudo python3.4 web\_plants.py  
  
Now if you navigate to the ip address of your RPi, you should see a web dashboard something like this:  
  
  

[
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEilyCugZSXrU-3Kiiqs789M74glL0ZOhhVZIbhFQNkdFlf7EgHsO6SQfNK81UICKOVLGTDySl8aX8H00U-RDp3GN-coSvxvhfWYXDLmzUkwN6vU7Ox0AsU2i6Q5ISt0eve4tIXPhCp9kSo/s400/web.JPG)
](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEilyCugZSXrU-3Kiiqs789M74glL0ZOhhVZIbhFQNkdFlf7EgHsO6SQfNK81UICKOVLGTDySl8aX8H00U-RDp3GN-coSvxvhfWYXDLmzUkwN6vU7Ox0AsU2i6Q5ISt0eve4tIXPhCp9kSo/s1600/web.JPG)

  

Try clicking the buttons to make sure everything works as expected! If so, you're off to the races.  
  
[here's another great tutorial I followed on flask + GPIO](http://mattrichardson.com/Raspberry-Pi-Flask/)  

### Run Website Automatically

  
Finally, you probably want the website to auto start when the RPi gets turned on. This can be done using a tool called cronjob, which registers your website as a startup command.

  

To do so, type:

  

$> sudo crontab -e

  

This will bring up a text editor. Add a single line that reads (and make sure to leave one empty line below):

  

@reboot cd ; sudo python3.4 web\_plants.py

  

Now when you reboot your pi, it should auto start the server.