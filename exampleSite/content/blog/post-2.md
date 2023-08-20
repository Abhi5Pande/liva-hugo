---
title: "How To Customize Oclif Plugin's help class"
date: 2023-08-18
draft: false

# post thumb
image: "images/featured-post/oclif-1.png"

# meta description
description: "Salesforce Oclif CLI"

# taxonomies
categories:
  - "Coding"
  - "Open Source"
 
tags:
  - "CLI Application"
  - "Salesforce"
  - "Open Source"
  - "Oclif"

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


## Why create custom Help 

While working on an open source project ([preevy](https://github.com/livecycle/preevy)), there was an issue assigned to me where I needed to create a custom help class as the help plugin by default does not show global flag on the root command. 
 ![Image](../../images/post/pic-1.jpeg)
Global flags in Oclif are like special instructions that apply across all commands, allowing consistent behavior and configuration throughout the entire command-line tool. Maybe you want something like that for your project, or maybe you just want to format your help in a different way or provide context specific guidance.

## Creating a custom Help Class

To Create a custom help class the first thing you need to do is add the classpath for where your help class is located. Keep in mind that this is not the location of the development path of the Help class but rather the compiled path. So for typescript you would find that mostly either in `lib` or `dist` folder. You can add the path by going into the pakcage.json file of your folder, finding `oclif` there and add the path as shown below:-
``` 
"oclif": {
  //
    "helpClass": "./dist/help",
   //
  }
```
Now you create either a `help.ts` in `/src` or you can create a help folder and inside it an `index.ts` file. Then you need to compile using `tsc` or some other compiling command. 

Now in either `src/help.ts` or `src/help/index.ts` you need to extend either `Help` class or `HelpBase` class. Oclif Recommends to extend the Help class. 

## Extending the default `Help` class
The default Help class provides many method “hooks” that make it easy to override the particular parts of help's output you want to customize.

```
import {Command, Help, Topic} from '@oclif/core';

export default class MyHelpClass extends Help {
  // acts as a "router"
  // and based on the args it receives
  // calls one of showRootHelp, showTopicHelp,
  // or showCommandHelp
  showHelp(args: string[]): void {
  }

  // display the root help of a CLI
  showRootHelp(): void {
  }

  // display help for a topic
  showTopicHelp(topic: Topic): void {
  }

  // display help for a command
  showCommandHelp(command: Command): void {
  }

  // the default implementations of showRootHelp
  // showTopicHelp and showCommandHelp
  // will call various format methods that
  // provide the formatting for their corresponding
  // help sections;
  // these can be overwritten as well

  // the formatting responsible for the header
  // displayed for the root help
  formatRoot(): string {
  }

  // the formatting for an individual topic
  formatTopic(topic: Config.Topic): string {
  }

  // the formatting for a list of topics
  protected formatTopics(topics: Config.Topic[]): string {
  }

  // the formatting for a list of commands
  formatCommands(commands: Config.Command[]): string {
  }

  // the formatting for an individual command
  formatCommand(command: Config.Command): string {
  }
}

```
* src: [oclif help documentation](https://oclif.io/docs/help_classes/) *

## How I implemented the custom Help class
As written above, I had to create a custom Help class to include global flags in the root help: `preevy --help`. So I had to override the `showRootHelp()` method. So I implemented it as follows:-

<hr> <hr>

##### src/help/index.ts
```
import { Help } from '@oclif/core'
import Flag from './flag'

export default class CustomHelpClass extends Help {
  protected async showRootHelp(): Promise<void> {
    await super.showRootHelp()
    const flag = new Flag(this.config, this.opts)
    this.log(flag.getFlags())
  }
}
```
##### src/help/flag.ts

This is the code for formatting the flag. The formatting code is taken from Oclif's `CommandHelp` Class. We could not directly inherit from CommandHelp class as it had a constructor that needed Command as a parameter. But since we are operating on the root help, there is no command to pass to the constructor. So below is the workaround:-
```
import chalk from 'chalk'
import { Command } from '@oclif/core'
import { HelpFormatter } from '@oclif/core/lib/help/formatter'
import { BaseCommand } from '@preevy/cli-common'

const {
  underline,
} = chalk
const {
  dim,
} = chalk

export default class Flag extends HelpFormatter {
  public getFlags():string {
    const flags = Object.entries(BaseCommand.baseFlags)
      .filter(([_name, flag]) => !flag.hidden)
      .map(([name, flag]) => {
        flag.name = name
        return flag
      })

    const body = this.flagFormatter(flags)

    return this.section('GLOBAL FLAGS', body)
  }

  protected flagHelpLabel(flag: Command.Flag.Any, showOptions = false): string {
    let label = flag.helpLabel

    if (!label) {
      const labels = []
      if (flag.char) labels.push(`-${flag.char[0]}`)
      if (flag.name) {
        if (flag.type === 'boolean' && flag.allowNo) {
          labels.push(`--[no-]${flag.name.trim()}`)
        } else {
          labels.push(`--${flag.name.trim()}`)
        }
      }

      label = labels.join(', ')
    }

    if (flag.type === 'option') {
      let value = flag.helpValue || (this.opts.showFlagNameInTitle ? flag.name : '<value>')
      if (!flag.helpValue && flag.options) {
        value = showOptions || this.opts.showFlagOptionsInTitle ? `${flag.options.join('|')}` : '<option>'
      }

      if (flag.multiple) value += '...'
      if (!value.includes('|')) value = underline(value)
      label += `=${value}`
    }

    return label
  }

  protected flagFormatter(flags: Array<Command.Flag.Any>): [string, string | undefined][] | undefined {
    if (flags.length === 0) return undefined

    return flags.map(flag => {
      const left = this.flagHelpLabel(flag)

      let right = flag.summary || flag.description || ''
      if (flag.type === 'option' && flag.default) {
        right = `[default: ${flag.default}] ${right}`
      }

      if (flag.required) right = `(required) ${right}`

      if (flag.type === 'option' && flag.options && !flag.helpValue && !this.opts.showFlagOptionsInTitle) {
        right += `\n<options: ${flag.options.join('|')}>`
      }

      return [left, dim(right.trim())]
    })
  }
}
```

## Output
This is how it finally looks:-
![image](../../images/post/pic-2.jpg)

###### Stay tuned to learn more about how to use oclif cli to make super cool applications. You can watch the youtube video given below which is a awesome to learn about it.

{{< youtube ro87riVVDRg >}}
