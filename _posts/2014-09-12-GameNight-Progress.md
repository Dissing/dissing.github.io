---
layout: post
title: GameNight Progress
categories: Game Graphics
---

Long time since the last update, but I have been very busy developing the GameNight game. The game is now nearing playable, but still lacks a lot of nontrivial features. As I have decided to develop gameplay features first and only then develop the graphics, the game still looks very rough. There is a lot to write about this project, each deserving its own blog post. Instead I will here touch on three interesting topics explored during the project.![GameNight Preview](/img/GameNightPreview2.png "GameNight Preview")

## Event system

The best decision I made about the development of the game server, was the use of an event system. Using Java reflection, I implemented a system which allows me to easily pass messages from any part of the game server to all other interested components on both the server and on the clients. Even through the system is dynamically dispatched through Java reflection, there has so far been no performance problems at all. As a result of using this system, the server code is very clean and the server-client communication nearly automatic. I will write a separate blog post about this system somewhere after the 3. October. 

## Movement / Collision

The collision system has without doubt created the most trouble. Movement and collision is generally an endless source of seemingly non-deterministic bugs. Even major AAA games sometimes get it wrong. And o'boy did I get it wrong. The current movement code is one large methods checking for a ton of special cases. As a result the code is buggy and hard to debug. The only bright point here is the many hilarious bugs I have witnessed, many which at random allows the player to jump through the roof or climb walls. While these bugs might be fun to experience during development they are certainly not some you would like the players to exploit during real play. The solution? Reimplement it all from scratch. The problem is finding the motivation and time for this behemoth of a task. It just feels hard to justify rewriting a whole component, when there are other important components to be implemented. Currently the code is in a strange kind of limbo, as I have decided to not do any work on the current code and thereby no bug fixing, yet I have still not scheduled the time for the rewrite.

## Motivation

While movement sure has been the biggest technical issue, a much bigger problem is motivation. It is not because I do not want to do this, yet sometimes it just seems impossible to get anything done. Working on the game every single free hour worked pretty well for the first two weeks, but then things started getting rough. Every time I faced some non-trivial issue, I would end up browsing Reddit instead. While this topic deserves its own blog post, the best solution for now seems to relax a bit and take a few hours off per week to do something else (Like experimenting with Rust language).

With just three weeks left, the pressure is increasing and there is no longer any doubt that it is possible to finish a playable game. But the question is how fun it will be. I have still not announced an official tournament, as I am still not quite sure it will "ready". Come again next week to follow the latest development.
