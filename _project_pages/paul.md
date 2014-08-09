---
title: Paul
layout: page
---

Jump
===

<!--![Art style preview](/img/GameConcept.png "Art style preview")-->

Paul is a robot. Well not yet, as we are still trying to get funding from our school to build him. The idea is a rover with four wheel. Depending on our budget, all four wheels will be powered, otherwise only two. For navigation Paul wil have two webcams mounted on a mast with two servos for pan and tilt functionality. If the budget allows it, he might even get an arm for manipulation tasks. 
A [BeagleBone](http://beagleboard.org/black) onboard Paul will stream data from the robot to a small compute cluster (A couple of laptops and some old desktops) and process received commands. All logic and navigation code will run on the small cluster. So while Paul is not going to be self-contained, he going to be 100% autonomous. The software is currently expected to written in a mix of Rust, Python, C++ and Common Lisp. The reason for using multiple different languages is partly because of the wish for using the right tool for the job (High-performance graphics and CV in C++ and glue code in Python) and partly because I want to get experience with both Rust and Common Lisp.
The blog will in the near future bring a lot of updates on the projects.
