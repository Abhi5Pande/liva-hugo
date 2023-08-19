---
title: "How To Customize Oclif Plugin's help class"
date: 2023-08-18
draft: false

# post thumb
image: "images/featured-post/oclif-1.png"

# meta description
description: "this is meta description"

# taxonomies
categories:
  - "Coding"
tags:
  - "CLI Application"
  - "Salesforce"


# post type
type: "featured"
---

## What is Oclif

Imagine Oclif as a smart and efficient assistant that empowers you to interact with your computer in a way that's both intuitive and powerful. Oclif stands for "Open CLI Framework," where CLI stands for "Command Line Interface." Now, don't let those fancy words scare you – CLI is simply a way to talk to your computer by typing text-based commands, like having a conversation with it.

Oclif takes this concept and turns it into something even more amazing. It provides a framework that helps developers and tech enthusiasts build their own command-line tools or applications. These tools can perform a wide range of tasks, from managing files and data to automating complex processes. So, even if you're not a coding guru, Oclif makes it possible to create tools that interact with your computer effortlessly.

<hr>

## Oclif Help Plugin

When you create a CLI (Command Line Interface) application using Oclif, you're automatically provided with a built-in help plugin that enhances the user experience by offering organized and comprehensive information. This help plugin is automatically triggered when users invoke the `--help` flag for your CLI commands.

### Utilizing the `--help` Flag

The `--help` flag is a fundamental feature of Oclif, designed to assist users in understanding your CLI application's functionality and available commands. It provides clear and structured information, including:

- **Description:** A concise overview of your CLI's purpose and functionality.
- **Usage:** Examples of how to use your CLI commands, highlighting their syntax and possible arguments.
- **Topics:** Organized sections that group related commands together for easier navigation.
- **Commands:** A listing of all available commands, along with brief descriptions.
- **Options:** Details about any options that can be used with the commands, including default values and descriptions.
- **Examples:** Real-world examples that illustrate how to use various commands effectively.

### Exploring the Code

The code responsible for generating the user-friendly help content can be found in the [Oclif Core repository](https://github.com/oclif/core) under the `src/help` directory. This directory contains the implementation that dynamically generates the help output based on your CLI application's structure and metadata.

### Enhancing User Experience

By leveraging the built-in help plugin, you provide users with a consistent and intuitive way to explore your CLI's capabilities. This not only makes your CLI more user-friendly but also helps users feel confident in utilizing its full potential. As a result, your CLI becomes more approachable to both beginners and experienced users alike.

Remember that a well-organized and informative `--help` output can significantly contribute to the success and adoption of your CLI application.


## Creating a custom Help Class

While working on an open source project ([preevy](https://github.com/livecycle/preevy)), there was an issue assigned to me where I needed to create a custom help class as the help plugin by default does not show global flag on the root command. 
 ![Image](../../images/post/pic1.jpeg)

##### Youtube video

{{< youtube C0DPdy98e4c >}}
