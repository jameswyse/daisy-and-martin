Daisy & Martin's Wedding
==============

A very simple Node.js using Express.

## Getting Started

```bash
$ git clone https://github.com/jameswyse/daisy-and-martin.git
$ cd daisy-and-martin
$ npm install -g gulp
$ npm install
$ gulp
$ node app
```

## Getting Started (Beginners)
These instructions assume you're using a Mac running Mountain Lion (OS X 10.9)

#### Installing Dependencies

You'll need to install the following:
- [XCode](https://itunes.apple.com/us/app/xcode/id497799835?mt=12)
- [Git](http://git-scm.com/)
- [Node.js](http://nodejs.org)

First, install XCode from the [Mac App Store](https://itunes.apple.com/us/app/xcode/id497799835?mt=12) and open it up. If it prompts you to install additional components say yes, then go to `preferences -> Downloads` and install the Command Line Tools. Close XCode when it's finished.

You can install Git and Node.js manually from the links above or by using the [Homebrew]() package manager with the following steps:

Open `Applications/Utilities/Terminal.app`.

**Notes:**
- Everything following `$` should be typed/copied in to terminal followed by a return.
- Any lines not prefixed with a `$` shows the expected output.

Install Homebrew:
```bash
$ ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"
```

Install Git:
```bash
$ brew install git
```

Install Node.js:
```bash
$ brew install node
```

Finally re-open your terminal window (`cmd+w`, `cmd+t`) and check everything was installed correctly, you should see similar output for these 3 commands:
```bash
$ git --version
git version 1.9.0

$ node --version
v0.10.26

$ npm --version
1.4.3
```


#### Project Setup
Now we're going to set up the project on your computer.

Change to your projects directory (anywhere is fine but I like `~/Projects`):
```bash
$ cd ~/Projects
```

Clone this repo and enter the new directory:
```bash
$ git clone https://github.com/jameswyse/daisy-and-martin.git
$ cd daisy-and-martin/
```

Install Module Dependencies:
```bash
$ npm install -g gulp
$ npm install
```

Build the source files:
```bash
$ gulp
```

Run the app:
```bash
$ node app
```

You can now open [http://localhost:3000/](http://localhost:3000). To shut it down go back to the terminal window and press `ctrl + c`.

## Deployment

#### Heroku
TODO

## License

Copyright (C) 2014 James Wyse

**The MIT License**

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
