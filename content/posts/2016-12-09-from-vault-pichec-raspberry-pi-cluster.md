---
title: "From the Vault: PICHEC Raspberry Pi Cluster"
date: 2016-12-09
slug: from-vault-pichec-raspberry-pi-cluster
tags: ["cluster", "C", "software", "DIY", "conway's game of life", "mpi", "091labs", "raspberry pi", "plexiglass", "hardware", "hackerspace"]
original_url: /2016/12/from-vault-pichec-raspberry-pi-cluster.html
---

I want to document this project, as it is one of my favourite projects to date. This took place about 4 years ago while I was working at the [Irish Centre for High End Computing (ICHEC).](https://www.ichec.ie/)  
  
One of ICHEC's projects at the time was creating demonstration for the [BT Young Scientist Exhibition](http://btyoungscientist.com/) to explain the use of parallel computing. I volunteered to build a Raspberry Pi cluster for this, along with a parallel demo application called [Conway's Game of Life](https://en.wikipedia.org/wiki/Conway's_Game_of_Life). The (very old) code can be found [here](https://gist.github.com/benrules2/e1f03b439b386c262d72ead55bc5a183), and more details about the simulation can be found in [the official handout.](https://drive.google.com/open?id=0B3fV0f40M6TiMEh6TzZIS0VNUk0)  
  
The best part of the project was building the cluster. My design placed the 8 Raspberry Pi's into the legs of a plexiglass enclosure shaped like the pi symbol. I also wrapped ethernet cables in colour electrical tape to give them distinct colours, and added several strands of [EL Wire](https://www.amazon.com/gp/offer-listing/B00EENNHMM/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00EENNHMM&linkCode=am2&tag=cyberomelette-20&linkId=362e769ca358f5e8fe639a00dcecc510) to make it glow.  
  
Here are a couple of photos of the cluster and build process.  

  

  

[
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgpDCcIjXqUUoiOlYmemquXblCcdF41sIfXrgYx5qGTAhlmH2-xfklaN1RKtjjK9_D7A2RTQg6GyOc3V1IMRjUEysIt_4EiAZOT-oZPq0z5GKpPobhm5I5FxyUBr0pJaODIfAgsT1y2uW4/s640/pi_1.jpg)
](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgpDCcIjXqUUoiOlYmemquXblCcdF41sIfXrgYx5qGTAhlmH2-xfklaN1RKtjjK9_D7A2RTQg6GyOc3V1IMRjUEysIt_4EiAZOT-oZPq0z5GKpPobhm5I5FxyUBr0pJaODIfAgsT1y2uW4/s1600/pi_1.jpg)

Glorious PICHEC

  
  
  
  

[
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgq_9NQDjAbyIxIxwPRet4JrN7wjhW0vhyphenhyphenbmXa_j11e2YxlEBJAuajujwNSKTdZa81Cjli5RkDkDO9kntmk4DNksYvELzNGKX7y7C62I14m0bDbZaK-K6o2HTNSLYhs3vHSxQ_8ar9xkhA/s640/Rpi+Enclosure.png)
](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgq_9NQDjAbyIxIxwPRet4JrN7wjhW0vhyphenhyphenbmXa_j11e2YxlEBJAuajujwNSKTdZa81Cjli5RkDkDO9kntmk4DNksYvELzNGKX7y7C62I14m0bDbZaK-K6o2HTNSLYhs3vHSxQ_8ar9xkhA/s1600/Rpi+Enclosure.png)

The master plan, made using Google's Ketchup.

  

[
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgkEBNlekKWurICKb3kSuRkJFfURfAzYHVQDyTwLCc1L3DSdX7qw7uEkuGhrP_IOiGZ-9Rtr7PI6GYVkdd2imWmp0c3weBGPLQz6OoZfOz7AMfGr5qHe8-TNlrnQsOQXjK4fFM3mQlhASY/s640/photo-6.JPG)
](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgkEBNlekKWurICKb3kSuRkJFfURfAzYHVQDyTwLCc1L3DSdX7qw7uEkuGhrP_IOiGZ-9Rtr7PI6GYVkdd2imWmp0c3weBGPLQz6OoZfOz7AMfGr5qHe8-TNlrnQsOQXjK4fFM3mQlhASY/s1600/photo-6.JPG)

A pi shell, inside [091 labs.](http://091labs.com/)

  

[
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgs7JEDdhawr69cWh8XSPRJ77dc7Agdu0iAqMZL2DUrA_nK20z4yh7Z3OcBnfXx1EeWIy3EvkURnY4RTzNP9SlNXQwU8YjFRaK7Ryg2emqTcVzwzwcQ-8SQcecfXDqb5gA1OFiwIEZfYm0/s640/IMG_1385.JPG)
](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgs7JEDdhawr69cWh8XSPRJ77dc7Agdu0iAqMZL2DUrA_nK20z4yh7Z3OcBnfXx1EeWIy3EvkURnY4RTzNP9SlNXQwU8YjFRaK7Ryg2emqTcVzwzwcQ-8SQcecfXDqb5gA1OFiwIEZfYm0/s1600/IMG_1385.JPG)

Setting up the networking, and adding accent tape.

[
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj_Rtj1_Y8xv2hoxcWW5X02Vg-lMYSfVVUJd63XW1H8B8YABLMm0a58r6yK6sg1gjS36qnQt4dgVfY72C2Sje_k035qcZvL97Z2TnSIxQxSeMP6-i0D6B__N2ODmFvSMCY_m5b-crCwQZo/s640/pi-life.JPG)
](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj_Rtj1_Y8xv2hoxcWW5X02Vg-lMYSfVVUJd63XW1H8B8YABLMm0a58r6yK6sg1gjS36qnQt4dgVfY72C2Sje_k035qcZvL97Z2TnSIxQxSeMP6-i0D6B__N2ODmFvSMCY_m5b-crCwQZo/s1600/pi-life.JPG)

Getting graphics running.

  

[
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjPG5_bz2np-92vHw0pOZmgn0iEDjAwO5kvSevY7rtqbmrI40TjXaH9N21ohWVVzVWoWjBjsc6iejh02x4zEDh-Nafh8AVRBrLeJdobvNjvz5BgRRXlBR1ouDYMcnTJYefav-CluSEdjRs/s640/raspberry-pi.jpg)
](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjPG5_bz2np-92vHw0pOZmgn0iEDjAwO5kvSevY7rtqbmrI40TjXaH9N21ohWVVzVWoWjBjsc6iejh02x4zEDh-Nafh8AVRBrLeJdobvNjvz5BgRRXlBR1ouDYMcnTJYefav-CluSEdjRs/s1600/raspberry-pi.jpg)

I still have this shirt!