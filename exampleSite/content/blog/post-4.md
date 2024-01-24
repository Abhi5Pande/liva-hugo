---
title: "J-Unit"
date: 2023-13-15
draft: false

# post thumb
image: "images/featured-post/post-4.svg

# meta description
description: ""

# taxonomies
categories:
  - "Coding"
  - "Java"
 
tags:
  - "Java"
  - "Springboot"
  - "Unit testing"
  - "Junit"

# post type
type: "featured"
---

## Introduction to J-Unit:

Junit 


<hr>

## Stream sources, Intermediate operations and Terminal operations

There are 3 stages while using java streams. 

The starting point, or stream sources could be any sub class of 'Collections' such as List, Map , Set etc or a traditional array.

Intermediate Operators include functions that perform the actual operation on the stream such as filter() , map() , sorted() etc. If you see the implementation of these functions you can see that these functions actually returns an object of datatype 'Stream' . This allows developer to play around and chain these functions together. 

Termianl Operators are the functions that mark the ending point of the stream chain. For example, you start with a list ( Source ) performs all sorts of operations on it (filter , sort , map etc) and once done, convert the stream datatype back to the required type. Functions such as collect() , forEach() , count() etc.

Wont be going into details of all these functions as lots of data already exists on the internet on that topic. But one good practice that developers should follow is to try and understand the internal implementation of functions they are using. In some another blog I might go into the implementation of stream.

## When to use stream?

This is a personal opinion but in my experience it is always safer, faster, easier to debug ( especially using intellij debugger tool) and more readable ofcourse. Furthermore streams can be easily parallelized and are immutable reducing the risk of data corruption. So whenever you have to do some sort of looping over a list or any collection object think of whether you can stream.
