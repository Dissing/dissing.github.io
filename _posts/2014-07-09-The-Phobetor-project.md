---
layout: post
title: The Phobetor Project
categories: Robotics Graphics
---

Phobetor is a 3D virtual real time robot AI training environment currently under development by me. Now that was a lot of fancy words, but the idea is essentially to create an 3D game-like world wherein one can interact with the robot and thereby allow the AI to learn human-robot interaction, navigation and other. The developers can control in-world avatars and the robots are provided with near photorealistic camera streams. Well thats the goal anyway, but the project is still under heavy development. [(You can follow it here)](https://github.com/Dissing/Phobetor)

Why not just train the AI in real life using real hardware? Well as a poor high school student, there is just no way I am able to afford real hardware and while I have some access though school, the allocated time is way to sparse to use it on debugging software. By simulating the robot instead, the software can be developed at any time and thereby allow me to use the allocated time on tests which truly requires real hardware.

The robots are build by the students themselves and are extremely budget constrained (<100€) and it is therefore not possible to use expensive 3D scanners and other advanced sensors. Instead cheap VGA web cams are used. While this is a great way to get a wealth of data very cheaply, it puts a big requirement on the simulation to provide realistic footage.
This can be very computational expensive and for this reason the simulation is split up in a rendering client and a multithreaded simulation server which will allow the rendering to be distributed across several computers if needed. (Even though we are poor high school students there seems to be no lack of friend willing to lend you a high-end gaming computer)

The client will be developed in C++ using OpenGL and pretty much nothing else. Only the most essential libraries (GLEW and GLFW) are used to keep the code portable, but everything else is going to written from scratch. Originally I planned to avoid the STL and only use old C-style strings and IO, mostly because that was what I were familiar with. But luckily I realised that STL has way to many nice features to pass it by. The only thing I miss is the old and trusty printf. Formatted string are just much better suited for console output and logging than streams. To keep iostream performance high, I had to disable *std::ios_base::sync_with_stdio* which essentially makes old C-style IO unusable.

Development on the server has not started yet, but it will probably be written in Scala as it features good facilities for functional parallel programming while still having acceptable performance. Also more importantly Scala is the only functional language I have any experience with.
But at this point the focus is still on the client and will probably be for some time.

Now why not just use an already existing robot simulation framework? I would love to say that it was simple because Phobetor will become much better than current choices. But to be honest there already exists a lot of good open-source robot simulators. [Gazebo](http://www.gazebosim.org/) developed by some very talented people with PhDs and stuff. [MORSE](http://www.openrobots.org/wiki/morse/) even already support advanced user controlled avatars.  Both of them use well tested open-source graphics and physics engines, while Phobetor is developed fully from scratch. So why did it choose to embark on this crazy project anyway? First of all for educational purposes. The only way to truly understand how something works is by building it yourself. This is a great learning project featuring both real-time graphics, computational physics and networking. Another important point is that I am a crazy person who prefers to develop anything myself. Someday my ‘Not Invented Here’ syndrome will certainly bite me in the ass, but for now I actually think it is a great thing. It forces me to understand how everything works and write ALOT of code. Two things which are essential for anyone wishing to become a great developer.

Will I fail? Probably… But I will try anyway. Wish me luck!
