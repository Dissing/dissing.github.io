---
layout: post
title: UNF SDC 2014 postmortem
categories: Meetups Sprints
---

UNF is a Danish high school students interested in science (like me!), which each year organises several science camps including the SDC (Software Development Care). During a week students from around the country meet, listen to a couple of lectures and finally in groups develop a small android app during a 3 day code sprint.The camp is well organised and pure fun. My group ended up developing a networked multiplayer cardgame based on the German card game ["Mau Mau"](http://en.wikipedia.org/wiki/Mau_Mau_%28game%29). You have probably never heard of this game (I certainly had not until the camp) but it is essentially [UNO](http://en.wikipedia.org/wiki/Uno_%28card_game%29) with normal playing cards.

What went right
---------------

**1. Developing the multiplayer first.** As we only had three days to create the game, we were initially quite unsure that we could get the networking to work in such a sort timespan. Therefore we considered first creating a single-player mode and then later, if time allowed, create the multiplayer. From the start I planned on using a Quake-like architecture with dumb clients just forwarding the input to the server. But if where to use this architecture, the single-player mode would actually take longer time to implement (As it would require an AI). And first implementing a simple single-player mode and then the multiplayer would certainly be impossible for us in just three days. So we took the chance and went directly for the multiplayer. That showed to be a very wise decision as we only just managed to finish it. The Quake-like architecture served us well and the resulting code was both stable and responsive. Not somthing I had expected from a 3 day code sprint. 

**2. Reusing the rules of an existing game.** One of the biggest problems with game development is the endless amout of time you can use on balancing and fine-tuning the game play. By using the already well defined rules of a game we knew was fun and sound, we saved a lot of time. As we only just finished in time, I can say that we would never have finished if it also had been necessary to invent a new game. If we had had just a tiny bit more time, we had planned to implement a few custom rules, but when we realised the huge work the server represented, we settled on the standard rules. It is amazing how much it is possible to do in just three days, but on the other hand is it amazing how bad we humans are at estimating project work.

**3. Ignoring performance** As we only had three days to implement a heavily multithreaded application running on several phone which must always be synchronised, my greatest fear was we would stumble into some mysterious dead-lock or worse. But because of the games turn-based nature, performance was really of no concern. Therefore I deceided to just put synchronized / volatile on pretty much every method / variable with even the slightest chance of being access across threads. I *know* that this kills performance, but at no point was this a problem and our app remained responsive all the same.


What went wrong
---------------

**1. Router problems.** While developing the networking code we ran into a very strange problem. We had developed both the server and client code and testet both from the desktop. Both worked flawless without any problems. But when we tried to connect from one mobile to another, the client was unable to connect complaining about no route to the host. We spent two hours debugging our code before we realised that the flaw was not in our code at all! Instead the bug was due to the configuration of the university hotspot which made it impossible for the two mobiles to communicate. As we had no way to fix the router we ended up using on of the mobiles as a hotspot instead for the rest of the camp.

**2. Developer bottleneck.** One problem which led to a lot of wasted time, was the great skill difference in our group. Normally it can be great as the less experienced can learn alot from the others, while those with more experience can learn a lot from teaching others. But when the schedule is tight there is no time for teaching. We were four people in my group. Two of them had nearly no experience with programming and I was the only one who could understand all the networking and threading. Therefore I ended up writing a great part of the application. Sometimes the others was unable to work, because they where waiting for me to fix some code they could not understand themselves. But even though I wrote most of the app, they wrote most game logic, and without every single one, we would never had been able to finish on time. 

**3. Unengaging gameplay.** We got the game finished in time. Bug free and responsive. But it was just not fun. I have thought alot about why this is and I think I have found the reason. The game is too automatic. It only requires you to make the decisions and it will do the rest. As we did not have time to implement animations, the whole game just feels very forced and like it is playing it self. All of this probably boils down to the fact that it is not the card game itself which is fun, but the act of sitting together with friend and being social. Emulating this on a phone is just near impossible. Especially in three days.

Conclusion
----------
We finished the game! During play testing on four mobiles, we experienced no bugs or crashes. The game was indeed playable and very responsive. It just wasn't fun. But that was not the point! In those three days we learned alot about writing complex threaded code and network protocols. In some ways I still can not understand we even got it finish. In total the whole week was a lot fun and a great experience!