---
title: "WRT54GL TomatoUSB Overlock Private Internet Access VPN"
date: 2013-04-24
slug: wrt54gl-tomatousb-overlock-private
original_url: /2013/04/wrt54gl-tomatousb-overlock-private.html
---

I got a VPN service through "Private Internet Access" and wanted to setup a router to connect to this. I did a lot of googling for similar problems, so I thought I'd make a quick post with the relevant keywords to help anyone else in the world trying this.  
  
TomatoUSB firmware lets you use VPN for Private Internet Access, whereas the ddwrt "MEGA" can't be used due to insufficient memory on the router. To update the firmware, first install [regular Tomato](http://www.polarcloud.com/firmware) through the update firmware option in the linksys interface. Then through the Tomato firmware interface, go to Administration -> Upgrade and upgrade to [this firmware (v2.4 VPN](http://tomatousb.org/download)).  
  
[Follow the instructions from PIA for creating VPN tunnel](https://www.privateinternetaccess.com/forum/index.php?p=/discussion/21/connect-to-vpn-with-tomatousbtomato-router/p1), and check your speed.  
  
I was getting really poor speeds when the VPN was connected, which I decided after some troubleshooting was due to the processor in the router being unable to keep up (determined through online consensus). I did some more reading, and apparently the WRT54GL can be [overclocked with virtually no risk](http://tomatousb.org/tut:overclocking-the-wrt54gl).  
  
This is really easy to do. In the Tomato interface, go to Tools -> System and enter the following text:  
  
nvram set clkfreq=250,125  
nvram commit  
reboot nvram  
  
and click "Execute".  
  
Once the router has rebooted, you can confirm the overclock was successful using the following command:  
  
nvram show | egrep "clkfreq|debug\_clkfix"  
  
If this says "250,125" then you're off to the races. This roughly doubled my connection speed, but only because the processor in the router was throttling performance. If you get the same or similar connection speeds with and without VPN, this will do nothing for you!  
  
Also, if you break things it's your own dumb fault! Good luck!