---
title: Syntax Highlighting Examples
description: The example usages of syntax highlighting in various programming languages.
---

## Syntax Highlighting Examples

Syntax highlighting is a feature that displays source code.
This feature facilitates writing in a structured language such as a programming language or a markup language as it makes import things visually distinct.

GitHub Flavored Markdown [fenced code blocks](https://help.github.com/articles/creating-and-highlighting-code-blocks/) are supported. To modify styling and highlight colors, feel free to edit `/_sass/rogue-github.scss` and add/set your favorite highlighter theme from `/_sass/highlighter-theme` directory.

For additional examples, we added following programming languages to show how syntax highlighting works in every programming languages.

* TOC
{:toc}


## Common web programming languages

### CSS

```css
/* CSS code with syntax highlighting */
#container {
  float: left;
  margin: 0 -240px 0 0;
  width: 100%;
}
```

### HTML

```html
<!-- HTML code with syntax highlighting -->
{% raw %}<nav class="pagination" role="navigation">
  {% if page.previous %}
    <a href="{{ site.url }}{{ page.previous.url }}" class="btn" title="{{ page.previous.title }}">Previous article</a>
  {% endif %}
  {% if page.next %}
    <a href="{{ site.url }}{{ page.next.url }}" class="btn" title="{{ page.next.title }}">Next article</a>
  {% endif %}
</nav><!-- /.pagination -->{% endraw %}
```

### JavaScript

```js
// Javascript code with syntax highlighting
var fun = function lang(l) {
  dateformat.i18n = require('./lang/' + l)
  return true;
}
```

### Ruby

```ruby
# Ruby code with syntax highlighting
module Jekyll
  class TagIndex < Page
    def initialize(site, base, dir, tag)
      @site = site
      @base = base
      @dir = dir
      @name = 'index.html'
      self.process(@name)
      self.read_yaml(File.join(base, '_layouts'), 'tag_index.html')
      self.data['tag'] = tag
      tag_title_prefix = site.config['tag_title_prefix'] || 'Tagged: '
      tag_title_suffix = site.config['tag_title_suffix'] || '&#8211;'
      self.data['title'] = "#{tag_title_prefix}#{tag}"
      self.data['description'] = "An archive of posts tagged #{tag}."
    end
  end
end
```

### PHP

In a HTML page:

```php
// PHP code with syntax highlighting
<!DOCTYPE html>
<html>
<body>

<h1>My first PHP page</h1>

<?php
echo "Hello World!";
?>

</body>
</html>
```

In separate PHP class file:

```php
<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTasksTable extends Migration
{
  /**
   * Run the migrations.
   * @return void
   */
  public function up()
  {
    Schema::create('tasks', function (Blueprint $table) {
      $table->increments('id');
      $table->string('name');
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   * @return void
   */
  public function down()
  {
    Schema::drop('tasks');
  }
}
```

### Vue

```vue
// Vue with syntax highlighting
<template>
  <div id="app">
    {{ message }}
  </div>
</template>

<script lang=coffee>
  app = new Vue
    el: '#app'
    data: { message: 'Hello Vue!' }
</script>
```

### JSX (React)

```jsx
// JS XML embedded code with syntax highlighting
import React from 'react'

function CardName(props) {
  return (
    <div>Hello, {props.name}!</div>
  )
}

class App extends React.Component {
  render() {
    return (
      <CardName name="react-o-meter" />
    )
  }
}
```

## Common languages in art of programming

### Java

```java
// Java code with syntax highlighting
import java.util.*;

@Example
public class Demo {
  private static final String CONSTANT = "String";
  private Object o;
  /**
   * Creates a new demo.
   * @param o The object to demonstrate.
   */
  public Demo(Object o) {
    this.o = o;
    String s = CONSTANT + "Other example of text";
    int i = 123 - 33 % 11;
  }
  public static void main(String[] args) {
    Demo demo = new Demo();
    System.out.println(demo.o.toString())
  }
}
```

### Python

```python
# Python class with syntax highlighting
from random import randint
import os

class SomeClass:
    """ dunno what I am doing """

    def __init__(self):
        pass

    @property
    def lucky_number(self):
        return randint(0, 1000)

def trigger(func):
    def inner(a, b):
        print("triggering a function with parameter '{0}' and '{1}'").format(a, b)
        func()
    return inner

@trigger
def some_function(param_one="", param_two=0):
    r'''A docstring'''
    if param_one > param_two: # interesting
        print("Greater")
    return (param_two - param_one + 1 + 0b10) or None

def print_lucky_number(nums, limit=1000):
    for num in [randint(0, limit) for i in range(nums)]:
        print("lucky number -> " + str(num))

dicts = {"username": "@user", "status": None}
dicts["status"] = "offline"
```

### C/C++

```cpp
#include <stdio.h>
#include <stdlib.h>

// C code with syntax highlighting
// For reference, this is an example code of Stack written in C/C++

typedef struct stack {
  struct stack *next;
  struct stack *prev;
  int value;
} Stack;

Stack *tops = 0;

void push(int value) {
  tops->next = (Stack *) malloc(sizeof(Stack));
  tops->next->value = value;
  tops->next->prev = tops;
  tops = tops->next;
  tops->next = NULL;
}

void pop() {
  tops = tops->prev;
  free(tops->next);
  tops->next = NULL;
}

void printStack(Stack *list) {
  Stack *curr = list;
  while(curr != NULL) {
    printf("%d -> ", curr->value);
    curr = curr->next;
  } puts("END");
}

int main() {
  Stack *package = (Stack *) malloc(sizeof(Stack));
  package->value = 55;
  tops = package;
  push(16);
  push(32);
  printf("Current stacks: ");
  printStack(package);

  pop();
  printf("Current stacks after pop: ");
  printStack(package);

  push(84);
  push(8);
  printf("Current stacks after some push: ");
  printStack(package);

  return 0;
}
```

```cpp
#include <iostream>
using namespace std;

int main() {
  int n, i;

  cout << "Enter a positive integer: ";
  cin >> n;

  cout << "Factors of " << n << " are: ";
  for(i = 1; i <= n; ++i) {
    if(n % i == 0)
      cout << i << " ";
  }

  return 0;
}
```

## Data notations

### YAML (YAML Ain't Markup Language)

```yml
# YAML/YML syntax highlighting
theme: jekyll-theme-cayman
repository: "akmalrusli363/cayman-improved"
title: "Cayman-Improved: GitHub Pages Playground"
description: "A Theme, also GitHub Pages for playing with Jekyll feature experiments"
plugins:
  - jemoji
```

### JSON (JavaScript Object Notation)

```json
{
  "id": 192,
  "uuid": "cef0cbf3-6458-4f13-a418-ee4d7e7505dd",
  "name": "John Smith",
  "url": "https://example.com/u/john_smith",
  "videos": [
    {
      "id": 1,
      "title": "hello",
      "views": 301
    },
    {
      "id": 2,
      "title": "i'm out",
      "views": 99282
    },
    {
      "id": 3,
      "title": "me & my friends",
      "views": 99282
    }
  ],
  "todos": [
    {
      "name": "playing with\nmy buddy",
      "detail": {
        "description": null,
        "is_done": false,
        "progress": 66.7
      }
    }
  ],
  "followers": ["ariel", "mia", "sampler"]
}
```

### XML (Extensible Markup Language)

```xml
<?xml version="1.0" encoding="UTF-8"?>
<user id="192" uuid="cef0cbf3-6458-4f13-a418-ee4d7e7505dd">
  <name>John Smith</name>
  <url>https://example.com/u/john_smith</url>
  <videos>
    <video id="1" views="301">Hello</video>
    <video id="2" views="99282">"i am out"</video>
    <video id="2" views="18223">Me &amp; my friends</video>
  </videos>
  <todos>
    <name><![CDATA[playing with my buddy]]></name>
    <detail is_done="false" progress="66.7" />
  </todos>
  <followers>
    <username>ariel</username>
    <username>mia</username>
    <username>sampler</username>
  </followers>
</user>
```

## Uncommon/rarer languages examples

### Kotlin

```kotlin
// kotlin with syntax highlighting
fun addOrderedNums(list: List<String>): List<String> {
    return list.mapIndexed { i, e -> "${i+1}. ${e}" }
}

fun demo() {
    var k = listOf("Any", "Byud", "Chan")
    k = addOrderedNums(k)
    println(k)
}
```

### Swift

```swift
// swift with syntax highlighting
class Shape {
  var numberOfSides: Int = 0
  var name: String

  init(name: String) {
    self.name = name
  }

  func simpleDescription() -> String {
    return "A shape with \(numberOfSides) sides."
  }
}

var square = Shape("square")
square.numberOfSides = 4
var shapeDescription = square.simpleDescription()
```

### Go

```go
// go with syntax highlighting
import ("fmt")

type Bird struct {
    name string
    species string
    age int
    gender bool
}

func getGender(gender bool) string {
    if (gender) {
        return "male"
    }
    return "female"
}

func getDetail(bird Bird) string {
    r1 := fmt.Sprintf("Name: %s\n", bird.name)
    r2 := fmt.Sprintf("Species: %s\n", bird.species)
    r3 := fmt.Sprintf("Age: %d\n", bird.age)
    r4 := fmt.Sprintf("Gender: %s", getGender(bird.gender))
    return r1 + r2 + r3 + r4;
}

func main() {
    b := Bird {"sancaka", "sancarellum querrium", 2, false}
    fmt.Println(getDetail(b))
}
```

### Lua

```lua
-- lua with syntax highlighting
function factorial(n)
    if (n <= 0) then
        return 1
    else
        return n * factorial(n - 1)
    end
end

for n = 0, 16 do
    print(string.format("%d! = %d", n, factorial(n)))
end
```

### Haskell

```haskell
-- haskell with syntax highlighting
data User = User {
    firstName :: String,
    lastName :: String,
    age :: Int,
    address :: String
} deriving Show

person = User "Batman" "Suparman" 22 "13th Winny Avenue"

main = do
    print person
    print $ firstName person
    print $ lastName person
    print $ age person
    print $ address person
```

### Lisp

```lisp
; lisp with syntax highlighting
(defun factorial (N)
  "Compute the factorial of N."
  (if (= N 1)
      1
    (* N (factorial (- N 1)))))
```

## Even with technical languages

### Vim

```vim
" Vim config with syntax highlighting

" Set vim theme with 256-color compatibility for terminals
set t_Co=256
color challenger_deep

" Don't try to be vi compatible
set nocompatible

" Turn on syntax highlighting
syntax on

" Show line numbers
set number

" Show file stats
set ruler

" Blink cursor on error instead of beeping (grr)
set visualbell

" Encoding
set encoding=utf-8
```

### Bash

```bash
# Bash with syntax highlighting
xdef="$HOME/.Xresources"
if [[ -n "$1" && -f "$1" ]]
then
  xdef=$1
fi
```

### INI file

```ini
; Ini file with syntax highlighting
[MeasureTime]
Measure=Time
Format=%H:%M:%S

[MeterTime]
MeasureName=MeasureTime
Meter=STRING
w=300
FontColor=FCFCFC
FontSize=36
FontFace=Segoe UI
StringAlign=CENTER
AntiAlias=1
```

### Windows Batch File

```bat
@echo off
rem Example of how to set command prompt window title

rem Configure the environment for software tool
set ENV_VAR1=some value
set ENV_VAR2=some value

rem Set the title to indicate that the command prompt window is configured for ABC software.
title Command shell window for ABC software

exit /b 0
```

## Or even diffs!

This is an example of using diff on GFM Syntax Highlighting:

```diff
# This is a GFM Demo with diff!

+ Hello!
+ How are you?
 -------------------------------
- Goodbye all!
 -------------------------------
! Help me off!
```

Sometimes, the diff may not work correctly if doesn't reserve first character in line for annotation mark (see [rouge-ruby/rouge issue #1676](https://github.com/rouge-ruby/rouge/issues/1676)):

```diff
// path/to/file.js

+ this is inserted
+ over multiple lines

- this is removed
- over multiple lines
```

This is an example of using diff on code:

```diff
 public abstract class Vechicle {
   public final String name;
   public final String type;
+
+  @Setter @Getter
+  private Driver driver;
+  private boolean isDriving = false;

   public Vehicle(String name, String type) {
     this.name = name;
     this.type = type;
   }
-
-  public abstract void drive();
+
+  public void drive() {
+    isDriving = true;
+  }
+
+  public boolean hasDriver() {
+    return this.driver != null;
+  }
 }
```

## And also highlights Markdown too!

~~~md
---
layout: post
title: Markdown and HTML
tags: [Katex, Markdown]
author: rohanchandra
---

Jekyll supports the use of [Markdown](http://daringfireball.net/projects/markdown/syntax)
with inline HTML tags which makes it easier to quickly write posts with Jekyll, without having
to worry too much about text formatting. A sample of the formatting follows.

## Title

### Sub title

Tables have also been extended from Markdown:

First Header  | Second Header
------------- | -------------
Content Cell  | Content Cell
Content Cell  | Content Cell

Here's an example of an image, which is included using Markdown:

![Image of a glass on a book]({{ "/assets/img/pexels/book-glass.jpeg" | relative_url }})

This is another example of list:

 - list of things
   1. Sub list
   2. of Other things
   3. with numbers
 - And many more
   - Sub sub list
     - can go on ...
       - and on ...
         - and on !
   - That's it.

### Other subtitle

Highlighting for code in Jekyll is done using Base16 or Rouge.
This theme makes use of Rouge by default.

```js
// count to ten
for (var i = 1; i <= 10; i++) {
    console.log(i);
}

// count to twenty
var j = 0;
while (j < 20) {
    j++;
    console.log(j);
}
```
~~~