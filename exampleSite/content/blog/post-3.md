---
title: "Java Streams"
date: 2023-12-15
draft: false

# post thumb
image: "images/featured-post/post-3.jpeg"

# meta description
description: ""

# taxonomies
categories:
  - "Coding"
  - "Java"
 
tags:
  - "Java"
  - "Springboot"

# post type
type: "featured"
---

## Introduction to Java Streams:

While writing industry grade code, a declarative approach plays a very important role to reduce code size and readability. Declarative apprach means developer defines 'what' rather than 'how' to do it . Java stream provides a sort of abstraction over operaions on the collection objects such as List,ArrayList,Map etc. Instead of using traditional loops, you can perform operations like filtering, transforming, and summarizing data with just a few lines of code. 


<hr>

## Stream sources, Intermediate operations and Terminal operations

There are 3 stages while using java streams. 

The starting point, or stream sources could be any sub class of 'Collections' such as List, Map , Set etc or a traditional array.

Intermediate Operators include functions that perform the actual operation on the stream such as filter() , map() , sorted() etc. If you see the implementation of these functions you can see that these functions actually returns an object of datatype 'Stream' . This allows developer to play around and chain these functions together. 

Termianl Operators are the functions that mark the ending point of the stream chain. For example, you start with a list ( Source ) performs all sorts of operations on it (filter , sort , map etc) and once done, convert the stream datatype back to the required type. Functions such as collect() , forEach() , count() etc.

Wont be going into details of all these functions as lots of data already exists on the internet on that topic. But one good practice that developers should follow is to try and understand the internal implementation of functions they are using. In some another blog I might go into the implementation of stream.

## When to use stream?

This is a personal opinion but in my experience it is always safer, faster, easier to debug ( especially using intellij debugger tool) and more readable ofcourse. Furthermore streams can be easily parallelized and are immutable reducing the risk of data corruption. So whenever you have to do some sort of looping over a list or any collection object think of whether you can stream.
