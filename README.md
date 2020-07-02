# Hello private world
Simple node application that only displays a message from the backend. This repository is a tiny little project to help me to understand how I not expose the backend for the internet when the frontend is deployed.

This applications uses Docker compose to create a link between the backend container and the frontend container. With this link, I configurated the nginx to get the */api* route and point to the backend.

In the end, my *index.html* is at *http://localhost/* and my backend at *http://localhost/api*, where only routes with */api* are exposed.

# Final thoughts
With with this tiny project, there is a lot to learn in terms of security. I have jumped from tutorial to tutorial all over internet and still I am not sure how this works.

I hope at least I'm in the right track.

![I don't know what i'm doing](https://memegenerator.net/img/instances/66573991/i-dont-know-what-im-doing.jpg "i don't know what i'm doing")
