---
title: "Astrophotography Manual Barn Door Tracker"
date: 2016-10-30
slug: manual-barn-door-tracker
tags: ["barn door", "milky way", "astrophotography", "long exposure", "stars", "photos", "high school astronomy", "sony a7", "DIY", "tracker", "cyber omelette", "photography", "hardware"]
original_url: /2016/10/manual-barn-door-tracker.html
---

## 

Motivation

After seeing some beautiful photos of the milky way, I wanted to step up my astrophotography game a little bit. In astrophotography, you are limited to shutter speed = 500 / (focal length) before your stars get blurry from the earth's rotation. To get better photos of the night sky, you can use what is called a tracker which allows you to take much longer exposures.  
  
They are also quite expensive, and not particularly complicated. So I decided to try making one myself. The goal was to make it simple, and cheap. In the end, the total was less than $50, and the results have been quite successful.  
  
It was so simple to build in fact, you probably don't even need a guide once you understand the key concepts. So I'll start with the basics of how and why it works, followed by a breakdown of how I built it.  
  
Here is the final product:  
  

[
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiku72azzxBrF72Gg0Vd2FpmOTTWZah0LWYkMe5A3LGg1hSX5huY4jbpQ6xwBu_kRhYJ4l0IaUvG0u1GkuINqak3P-rqNXoCP5rkVrnKx66KAANY0AG33EpshqQvj_zLSGk-rQyjazz6SA/s320/img1.JPG)
](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiku72azzxBrF72Gg0Vd2FpmOTTWZah0LWYkMe5A3LGg1hSX5huY4jbpQ6xwBu_kRhYJ4l0IaUvG0u1GkuINqak3P-rqNXoCP5rkVrnKx66KAANY0AG33EpshqQvj_zLSGk-rQyjazz6SA/s1600/img1.JPG)

  
  
and some results:  
  
  

[
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhtnod7hvZzku2DA3VZdpW_gcPurc1TUSo3n_RTQdMpJLhOf-LXe7ZqLFFjrTD08PXq7SMMdR7unfWDNRoFuWCV-BIcCUyEXHjErYF6GGpKCc-egNecq-FMCUploVG9Q3mPX9yWvKBimok/s640/img2.jpg)
](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhtnod7hvZzku2DA3VZdpW_gcPurc1TUSo3n_RTQdMpJLhOf-LXe7ZqLFFjrTD08PXq7SMMdR7unfWDNRoFuWCV-BIcCUyEXHjErYF6GGpKCc-egNecq-FMCUploVG9Q3mPX9yWvKBimok/s1600/img2.jpg)

2.5 minute Milky Way exposure

  
  
  

[
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgGgi4uMPNAqnKMrSmGmqxd0Dh8iD-F-2EYpbg4FS24t2UorBSjwcDGAHLCkCrPY96PS5GLYAn602D7X30rED9_HkqyFIrNqjRrJc5of_R-wsoZpwOh-t6DklGilHaTSh6j_HYtpkNMaOQ/s640/im3.JPG)
](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgGgi4uMPNAqnKMrSmGmqxd0Dh8iD-F-2EYpbg4FS24t2UorBSjwcDGAHLCkCrPY96PS5GLYAn602D7X30rED9_HkqyFIrNqjRrJc5of_R-wsoZpwOh-t6DklGilHaTSh6j_HYtpkNMaOQ/s1600/im3.JPG)

Andromeda captured using 2 minute exposure

[
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj0B6oj7oIFP05Se3blVTMphMfGdRjqCj2Wi9V9eLyyvW64CTPt2gRq5Dn6ByHalJIwOzExO6gtVw2jejr8x3G64AJeZZ0IZ6TrnbKV-hxUjJkOC4pyKMmtQ_oFOB19jwVBmtiF3cH_Lqs/s640/img4.jpg)
](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj0B6oj7oIFP05Se3blVTMphMfGdRjqCj2Wi9V9eLyyvW64CTPt2gRq5Dn6ByHalJIwOzExO6gtVw2jejr8x3G64AJeZZ0IZ6TrnbKV-hxUjJkOC4pyKMmtQ_oFOB19jwVBmtiF3cH_Lqs/s1600/img4.jpg)

1 minute exposure of Milky Way

###   
  
Tracker Basics

  
The fundamental problem you are solving is that the earth's rotation leads to star trails as can be seen in the following photo. So all we are doing is rotating our camera opposite to the earth's movement.

  

Just to understand the rotation, consider long exposure with star trails as can be seen in the photo below.

  

[
![](http://i.imgur.com/eA81Ert.jpg)
](http://i.imgur.com/eA81Ert.jpg)

Example of star trails from reddit user feralfrank's [post in astrophotgraphy](https://www.reddit.com/r/astrophotography/comments/1v2dvu/first_attempt_at_star_trails_outback_qld_im_quite/)

This image was taken over 2 hrs (0.083 days), during which the earth rotated 0.083 \* 360 ~= 30°. To eliminate this motion, you would just have to point your camera at the center of the rotation (rotational axis), and rotate your camera ~30° over the two hour period opposite to the earth's rotation. This equates to 0.25° per minute.  
  
I personally imagine a camera at the north pole. To align with the earth's rotation, it just needs to point straight up. Then you place that camera in the center of a merry-go-round that spins once in 24 hrs and you've got a tracking covered.  
  
With a barn door tracker it's the same concept, except you align the trackers rotation with the rotational axis. If you're in the northern hemisphere, this is as simple as pointing your tracker's hinge at the north star.

  

To drive your tracker, you will be rotating a threaded rod. As you have some flexibility in dimensions, I suggest doing some math at this stage to make things convenient for yourself if you're hand turning. I built mine such that I need to rotate the rod once per minute. With a 20 threads per inch rod, one rotation would open the tracker 0.05". A hypotenuse length of 11.47" then ensures that one rotation per minute matches the earth's rotation of 0.25° per minute.  
  

[
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEirQTvouRAtAtpePWCs1xUBe0FaL9OL-_P0I1DZl5ePGJupHWsLaXgK2Q-wHn-xVibg6Go_Gub4Kq2qsZSRyqz7-74-e6TycVskzy__Vn8VGJjrnl6GyBgJ0T5fBXmcMddnVjr4Z9zYuaE/s320/img5.JPG)
](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEirQTvouRAtAtpePWCs1xUBe0FaL9OL-_P0I1DZl5ePGJupHWsLaXgK2Q-wHn-xVibg6Go_Gub4Kq2qsZSRyqz7-74-e6TycVskzy__Vn8VGJjrnl6GyBgJ0T5fBXmcMddnVjr4Z9zYuaE/s1600/img5.JPG)

  

  

  

### My build

  

1.  [Tripod Head](https://amzn.to/2C676MF) ($32)
2.  [3.5" Door Hinge](https://amzn.to/2C6uEAM) ($3)
3.  1 x [3/8" hex bolt](https://www.boltdepot.com/Hex_bolts_Stainless_steel_18-8_3_8-16.aspx) ($1)
4.  1 x [1/4" 20tpi carriage bolt](https://amzn.to/2GVbh3d) ($2)
5.  2 x [1/4" nut](https://www.homedepot.ca/en/home/p.14-20-fin-hex-nuts-gr5-unc.1000123233.html) ($0.10)
6.  1 x [1/4"x20 T Nut](https://www.homedepot.ca/en/home/p.14-20-tee-nuts-long-prong.1000129429.html)($0.48)
7.  [Gorilla Glue](https://amzn.to/2SDfCJR) ($7)
8.  2 x 13" 1x6 lumber - no source here as I just bought scrap wood. All you need is something that looks like the wood in my pictures, and two lengths of it

Step 1: Attach the two pieces of wood by the hinge

  

[
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhJAs68X7RqqbpfPXrP_JLWIE1T-A_SoEZj5oAKQqj37c9hbkxlViR-iYEBTbxnCiNK7rG4L-AVqmmZf8g-iG8ud13TDrE8KTNr8-gfzwIj0Whdc-OeXmZKHho3vdrTOMVm4y2m4rt_w6w/s320/img6.JPG)
](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhJAs68X7RqqbpfPXrP_JLWIE1T-A_SoEZj5oAKQqj37c9hbkxlViR-iYEBTbxnCiNK7rG4L-AVqmmZf8g-iG8ud13TDrE8KTNr8-gfzwIj0Whdc-OeXmZKHho3vdrTOMVm4y2m4rt_w6w/s1600/img6.JPG)

  

  

  

Step 2: Hammer the T-nut into the bottom of the wood. This is where a tripod will attach.

  

[
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjjpZmx0RHraQM6Qbzh4FdIU5vPm84B4wl3S5wYmKEV1u3dTPecO_kkSSQy9wAauHwe80WPZavM2JHAzfG0dlAjV0wb0FDBNnqdE1-XeMVz-QtbzUCts2n47RUBsZDnGK7-L5saijQSZYE/s320/img7.JPG)
](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjjpZmx0RHraQM6Qbzh4FdIU5vPm84B4wl3S5wYmKEV1u3dTPecO_kkSSQy9wAauHwe80WPZavM2JHAzfG0dlAjV0wb0FDBNnqdE1-XeMVz-QtbzUCts2n47RUBsZDnGK7-L5saijQSZYE/s1600/img7.JPG)

  

  

Step 3: Drill a hole through the board near the hinge (exact location doesn't matter), and run 3/4" bolt through to attach tripod head.

  

[
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjHuBKUgjUGchDfmn2IqCIWdwVBjfTJCpxUM8Cq7LHNv6szk90sGT2YECDelCVYUCGpYbOa_InPs274yD2ZyDOpgE6aobXBrvdXLlQgDESdGbNevMC6U4SkT9kLsRCU0RTQ7fjDH14cwl4/s320/img8.JPG)
](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjHuBKUgjUGchDfmn2IqCIWdwVBjfTJCpxUM8Cq7LHNv6szk90sGT2YECDelCVYUCGpYbOa_InPs274yD2ZyDOpgE6aobXBrvdXLlQgDESdGbNevMC6U4SkT9kLsRCU0RTQ7fjDH14cwl4/s1600/img8.JPG)

  

  

  

Step 4: Drill hole 11.5" from the hinge through the board for the 1/4" carriage bolt to pass through. Use a larger drill size to add a shelf to embed nut on. Gorilla glue nut to the shelf. This part is the sketchiest in my build, so use whatever you think will work to hold this nut in place.

  

[
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhFOIWCdcw0I3P47X2tN2yPehk57rAFU-f7tPkkXlB7l_-E_74-ynVoOLcrXK3TSK3iajt0gJQg-m7x4c-ygu9El0eTu6mw-T784Afr7Dey6pAL98Lx0Afr7l5u-W2mfDKhI5_N2niFQlQ/s320/img9.JPG)
](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhFOIWCdcw0I3P47X2tN2yPehk57rAFU-f7tPkkXlB7l_-E_74-ynVoOLcrXK3TSK3iajt0gJQg-m7x4c-ygu9El0eTu6mw-T784Afr7Dey6pAL98Lx0Afr7l5u-W2mfDKhI5_N2niFQlQ/s1600/img9.JPG)

  

  

  

Step 5: Thread carriage bolt up through the nut so the rounded end is in between the two sides of the hinge. Gorilla glue a nut to the end of this bolt, and glue some type of handle. I used a 3d printed handle, but literally anything you can turn would work here.

  

  

[
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgESKa5mxnpKPKzL51QwQVoS7bbMNT4qMN7B08hY1oaZDv7JGvUwSaDIPA55Nlid2tzgn3vi_ot5atVJrY86sXBp4vyCgH74GPDssZI8Gh4RxX0y0Gr0HyfDexCBf42gng7X8iEn9zqNvs/s320/img10.JPG)
](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgESKa5mxnpKPKzL51QwQVoS7bbMNT4qMN7B08hY1oaZDv7JGvUwSaDIPA55Nlid2tzgn3vi_ot5atVJrY86sXBp4vyCgH74GPDssZI8Gh4RxX0y0Gr0HyfDexCBf42gng7X8iEn9zqNvs/s1600/img10.JPG)

  

[
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjnYSWjW8ZKO1RpsHzaDn4KteIk1tv_a4ckOuhlkZ9k-3CGsqb4MOrcauAR0jA8hYVGuokXsNqwfHH9ZTuo0SCVe5vqgO1Pa6321em7-LZirhLyq8fQNYTDLso0i18dFlJM9nOV8X3iCUg/s320/img11.JPG)
](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjnYSWjW8ZKO1RpsHzaDn4KteIk1tv_a4ckOuhlkZ9k-3CGsqb4MOrcauAR0jA8hYVGuokXsNqwfHH9ZTuo0SCVe5vqgO1Pa6321em7-LZirhLyq8fQNYTDLso0i18dFlJM9nOV8X3iCUg/s1600/img11.JPG)

  

  

Step 6 (optional): I added two finishing nails and an elastic to prevent vibration in the hinge while turning.

  

[
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh64hsOvkjzkOKxCzbdvqb_Vg_EuLnZYcQ6DdQYz6kLyL5t_1rbwbC3LfWcPHVILxvbmPcGp7Nlp3oJ8m0YfJXoxFpkR9GdE6YRiUzMsHTdj8blx6sb0nvrIO_QEf7XeoCjRL030WvVoEs/s320/img12.JPG)
](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh64hsOvkjzkOKxCzbdvqb_Vg_EuLnZYcQ6DdQYz6kLyL5t_1rbwbC3LfWcPHVILxvbmPcGp7Nlp3oJ8m0YfJXoxFpkR9GdE6YRiUzMsHTdj8blx6sb0nvrIO_QEf7XeoCjRL030WvVoEs/s1600/img12.JPG)

  

  

And you're done!  
  

### Usage

  
To use, attach your tripod to the T bolt. Adjust your tripod so the hinge of the tracker is pointing straight at [Polaris](http://www.space.com/15567-north-star-polaris.html) and attach your camera to the mount on the tracker.

  

Point your camera at whatever you want to photograph, set your shutter to bulb mode, and trigger the shutter. If your lens is 30mm or less, count out 15s and rotate the handle 1/4 turn. Repeat this for as long as you want to expose, and then release the shutter.

  

Different lenses will require different count / rotation amounts, so you'll have to experiment.