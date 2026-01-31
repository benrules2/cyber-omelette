---
title: "Python N-body Orbit Simulation"
date: 2016-11-16
slug: python-n-body-orbital-simulation
tags: ["n body problem", "python", "scientific computing", "software", "simulation", "newtonian", "astrophysics", "runge-kutta", "n body", "euler method", "gravity", "orbits", "intro", "computational physics", "numeric integration"]
original_url: /2016/11/python-n-body-orbital-simulation.html
---

Do you ever find yourself thinking "I wish I could do more recreational physics"? If so, today is your lucky day! We're going simulate our very own solar system.  
  
At the end of this tutorial, you should be able to define a hypothetical gravitational system, and graph the paths of the bodies involved over a custom time frame.  
  
This sounds complicated, because usually physics relating to space is considered hard. But it's not that hard! If someone has already broken down the algorithm (which I will do), you just have to understand the rough theory. Then it's no harder than writing a bot. If you've ever studied kinematics, you should also be able to follow along with the physics.  
  
This is also the first in a series of posts. I will be solving this problem again using C++ instead of python, and introducing some [High Performance Computing](http://insidehpc.com/hpc-basic-training/what-is-hpc/) techniques.  
  
If you don't care about theory, you can also skip straight to [the program.](http://www.cyber-omelette.com/2016/11/python-n-body-orbital-simulation.html#theprogram) An intro to python can be found [here.](http://cyber-omelette.blogspot.ca/2016/11/intro-python-part-1.html)  
  

### ELI15 Gravitational Theory

  
We'll start with the difference between weight and mass. Mass is a measure of the matter that makes up an object, and weight is how much force it feels from gravity. So your weight on the Moon and on Earth are different, but your mass is the same. That's because the Moon has less gravity dragging you down man.  
  
  
  
Things with mass naturally pull other things with mass toward them in a straight line. As you get closer, the pulling gets stronger. For example, you feel lighter on the top of Everest than at the base (100 lbs feels like 99.7 lbs).  
  
Now let's talk about orbits. Imagine a bowling ball far above the Earth's surface. The ball is high enough it would take 5 minutes to free fall to the surface. To get into orbit, you just need to ball to move "sideways" fast enough in 5 minutes that it "misses" the Earth.  
  
In the sketch below, you can see some paths that crash into the Earth, and the orbit that ensues when you go fast enough to miss it.  
  

[
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhH2TESU-Xk_eWh7KNJY_g478OfvFQLZbxKDgrKoOmkOVXxlub9upw2mET3sV0J2iV-XHpB4O-XvYS930xJzPlGSzGCibu4KJj5sfo7p-aE2nRAiMirCUBIyqDforlzAmAOgbFpEilGQxk/s320/IMG_3276.JPG)
](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhH2TESU-Xk_eWh7KNJY_g478OfvFQLZbxKDgrKoOmkOVXxlub9upw2mET3sV0J2iV-XHpB4O-XvYS930xJzPlGSzGCibu4KJj5sfo7p-aE2nRAiMirCUBIyqDforlzAmAOgbFpEilGQxk/s1600/IMG_3276.JPG)

For a more in depth explanation, I would recommend wikipedia's page on [Orbital Mechanics](https://en.wikipedia.org/wiki/Orbital_mechanics), or playing [Kerbal Space Program](https://kerbalspaceprogram.com/en/)

  

To calculate our orbits, we pick an object (body), and compute its force of gravity coming from all the other bodies in the simulation. From the force, we can find the current acceleration thanks to Newton's second law (F=ma).  

  

The formula for the acceleration from multiple bodies of mass is:

  

[
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhedNDaX04-a6p_AMnkjQ07tDNEnNOsTl5mGuFBigtimZbrBaKOoUzZNniT9JM1kNaKq4zzjwADgR8Qhk1cRWq2i_jfgqWCYWUs4SZ4ceDquSekW6DldUQ9CkpEdX_gB_6OkOxR7pnLWWs/s1600/gravity.gif)
](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhedNDaX04-a6p_AMnkjQ07tDNEnNOsTl5mGuFBigtimZbrBaKOoUzZNniT9JM1kNaKq4zzjwADgR8Qhk1cRWq2i_jfgqWCYWUs4SZ4ceDquSekW6DldUQ9CkpEdX_gB_6OkOxR7pnLWWs/s1600/gravity.gif)

  

  

where aix is acceleration in the x direction for body _i_, G is the gravitational constant, m is the mass of a body, and x,y,z are the coordinates of a body. The body we are calculating for is index _i_, and we sum contributions from all other indices _j_.  
  
The y and z directional accelerations are computed just by changing the final term (x\_j \- x\_i ) to your desired dimension.  

  

As we already know the velocity and position of the object, knowing the acceleration allows us to calculate the bodies location a small time in the future. The acceleration is always changing though, so the smaller the time step, the more accurate our simulation.

  

Then we repeat this for all the other bodies, and update the positions simultaneously. This is called [the Euler Method](https://en.wikipedia.org/wiki/Euler_method) (err... actually, the Euler-Cromer method based on comments below).

  
[](https://www.blogger.com/null)  

## The Program

  
If you like to skip ahead, the complete code can be found [here](https://gist.github.com/benrules2/220d56ea6fe9a85a4d762128b11adfba).  
  
To run this tutorial, you need Python 3 (or higher), and matplotlib. Matplotlib is how we will visualize the paths of our orbiting bodies. If you have an [Anaconda python distribution,](https://www.continuum.io/downloads) it will already be included, or it can be installed by running:  
  

$> python -m pip install matplotlib

  
We start by importing the necessary modules, and creating a point class, and a body class. The point class just holds x,y,z information, and the body class holds mass, location, and velocity data. These will be used throughout the program.  
  

[View Gist](https://gist.github.com/benrules2/d56af486108ce43d6026189816b5851d)

  

### Single Body Calculation

  
In the theory section, we talked about how this whole thing hinges around calculating the accleration of a single body as a summed acceleration from all other bodies. In python, this can be implemented as follows:  
  

[View Gist](https://gist.github.com/benrules2/e910517b6878197388208e0974db574f)

The calculate\_single\_body\_acceleration function takes a list of bodies, and the index of the target\_body. Then we iterate through all the external bodies adding up the acceleration of our target body.  
  

### Update velocity and position

  
With the acceleration known, the next step is to calculate the updated velocity. This is done for all bodies before changing the positions, as we want to keep the time steps synchronized.  
  
The new velocity is calculated simply by multiplying the acceleration with the time step and adding it to the current velocity.  
  

[View Gist](https://gist.github.com/benrules2/9da10412b243fdff40c0f22a4533b7ee)

With all velocities up to date, we can now update the location for all bodies by calculating the distance traveled in the time step (velocity x time), and adding it to the current position.  
  

[View Gist](https://gist.github.com/benrules2/03c8c23ddd3a255954129b07081d4a2f)

These can be combined into a single callable compute\_gravity\_step function:  
  

[View Gist](https://gist.github.com/benrules2/a04a4d318625516877a0f3302331d407)

  

### Simulating orbits

  
While we're running the simulation, the real valuable information we're finding is the x,y,z locations of our bodies. So to run the simulation, we simply repeat the calculations outlined above for a desired number of steps, and save a history of locations.  
  
  

[View Gist](https://gist.github.com/benrules2/52d2e00cff87ca67a99d03fb54cbec34)

This only requires a list of input bodies(with some optional parameters), and returns a list of location histories.  
  

### Visualizing locations

  
From this history, here is the simplest visualization I could come up with:  
  

[View Gist](https://gist.github.com/benrules2/856d4151573a1408eac23da83851495f)

This plots a 3d line graph with equal axis scales, sized to the largest dimension. If you provide a filename, it will save to file, otherwise you'll get a graphic popup while running.  
  

### Running a simulation

  

[
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhu2P8hKyB8r8t5zgG0QEaJxHRbFTDSdv2tsf6QMn69fqKa7Zy61ThKa859YhSekS1APQOBaaxNmSCYVNVO-0bnM4tVAv7PzpCkvWwYVGOFyfy6fncMwoPkAyWjNZX3h8JBQYSlBuZRwwU/s400/orbits.jpg)
](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhu2P8hKyB8r8t5zgG0QEaJxHRbFTDSdv2tsf6QMn69fqKa7Zy61ThKa859YhSekS1APQOBaaxNmSCYVNVO-0bnM4tVAv7PzpCkvWwYVGOFyfy6fncMwoPkAyWjNZX3h8JBQYSlBuZRwwU/s1600/orbits.jpg)

Output from running the simulation, detailing the motion of The Sun, Venus, Earth, and Mars.

  
  
Now all the pieces are in place, and we just have to build up some data and run the functions we wrote in previous sections. You can tweak this however you want, but see below for an example of usage.  
  
Once you get it running, have some fun with the bodies to see what sort of wacky and unstable orbits you can create!  
  
For more fun with orbit simulations, checkout my follow up post [introducing the RK4 method](http://www.cyber-omelette.com/2017/02/RK4.html).  
  

[View Gist](https://gist.github.com/benrules2/42b6437d82f6851ac6574a9390987824)