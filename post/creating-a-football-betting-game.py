---
title: "A Gambler, enlightened"
date: 2017-08-19T15:43:48+08:00
draft: false
tags: ["simulation"]
categories: ["Life","Simulation"]
mathjax: true
---

Gambling is a troubling issue and there are many debates about it's
usage. When I'm having conversations with people about gambling, I come
across the massive misinformation that exists, and should I attempt
to mitigate the situation, the normal person understandably struggles
to understand in a casual conversation that probabilities can
guarantee your loss in long term with numerous fallacies [3]
complicating that attempt.

The problem is exacerbated when we consider games that intentionally
convolute the determining mechanism, making it harder to infer that
you are deemed (again in long term) to lose your money.

I would like to offer an alternative approach, instead of providing
probabilities, which are usually confounding for even
familiarized audience, I will simulate the process of gambling, and
present the average results.

# Method of Doubling - Roulette

The method of doubling [4] is a popular approach that can return you low 
amounts of money with high probability, with the caveat of potentially 
costing you great amounts of money with low probability. 
The problem is, the house advantage will guarantee that your will 
eventually lose money.

To make this obvious, I simulated with a python program, the strategy,
starting with 2000 USD in your pocket, and a reset-bet of 2 USD. Each
session we will have a simple target of earning different amounts of
money before we leave the casino and enjoy our easily-gained-money.
**There is a strong assumption that no betting-limit exists**.

![Double method Probability of winning](/post-images/gambling-demystified-winning-probability.png "Simulation of double roulette method")

## Casino-game generator

The above graph is interesting in the sense that it gives you the capability to
generate a meta-casino-game, that is, a new unfavourable virtual game, with
the depicted winning-probabilities, corresponding to your virtual bets. This
funny idea will be explored further in a future post.

So assuming you desperately need 250 USD, and you are willing to risk 2000 USD.
The above graph says that you can get the desired amount 
with ~75%. That might be an okay-deal for you, but don't get too attached...please!

![Simulation of double method](/post-images/gambling-demystified-expected-loss.png "Simulation of double roulette method")

This graph demonstrates why this process should never be repeated, since the
expected result is, you having less money.

If you wish to estimate your actual "winnings", multiply the vertical-axis
value with the number of times you will apply this strategy. For Instance, 100
times with a goal to earn 500 USD each time, will cost you around 100x400 USD.

# References & Links

1. [Margingale](https://en.wikipedia.org/wiki/Martingale_\(probability_theory\))
2. [Wikipedia Casino Games](https://en.wikipedia.org/wiki/Casino_game)
3. [Gambler's fallacy](https://en.wikipedia.org/wiki/Gambler%27s_fallacy)
4. [Martingale Betting](https://en.wikipedia.org/wiki/Martingale_\(betting_system\))

