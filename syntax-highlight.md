# Syntax Highlighting

Syntax highlighting[^1] is a feature that displays source code.
This feature facilitates writing in a structured language such as a programming language or a markup language as it makes import things visually distinct.


## Samples

### GFM Code Blocks

GitHub Flavored Markdown [fenced code blocks](https://help.github.com/articles/creating-and-highlighting-code-blocks/) are supported. To modify styling and highlight colors, feel free to edit `/_sass/rogue-github.scss` and add/set your favorite highlighter theme from `/_sass/highlighter-theme` directory.

```css
/* CSS code with syntax highlighting */
#container {
  float: left;
  margin: 0 -240px 0 0;
  width: 100%;
}
```

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

```js
// Javascript code with syntax highlighting.
var fun = function lang(l) {
  dateformat.i18n = require('./lang/' + l)
  return true;
}
```

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

### GFM: In art of programming examples

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

```yml
# YAML/YML syntax highlighting
theme: jekyll-theme-cayman
repository: "akmalrusli363/cayman-improved"
title: "Cayman-Improved: GitHub Pages Playground"
description: "A Theme, also GitHub Pages for playing with Jekyll feature experiments"
plugins:
  - jemoji
```

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


### GFM: Uncommon/rarer languages examples

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

```lisp
; lisp with syntax highlighting
(defun factorial (N)
  "Compute the factorial of N."
  (if (= N 1)
      1
    (* N (factorial (- N 1)))))
```

### GFM: Even with technical languages

```bash
# Bash with syntax highlighting
xdef="$HOME/.Xresources"
if [[ -n "$1" && -f "$1" ]]
then
  xdef=$1
fi
```

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

### GFM Demo: Or even diffs!

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

This is an incorrect approach using diff:

```diff
public class Tank extends Vehicle {

  public Tank(String name, String type) {
    super(name, type);
  }

  public void attack() {
    System.out.println("Tank is shooting..")
  }

+ @Override
  public void drive() {
    System.out.println("Tank is driving..")
  }

-  public void setDriver(Driver driver) {
-    this.driver = driver;
-  }
-
-  public Driver getDriver() {
-    return this.driver;
-  }
-
-  public boolean hasDriver() {
-    return this.driver != null;
-  }
}
```

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

And this is a correct implementation of using diff:

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


### GFM Demo: Search on code

Search should be working even for complicated escape symbols.

```bash
sed -i 's/\"hostname\"\:.*$/\"hostname\"\: \"'$IPADDR'\"\,/g' open-falcon/agent/config/cfg.json
```

Or try searching for partial of a command, like this article should be returned when looking for "find grep"

```bash
find /etc -type f -exec cat '{}' \; | tr -c '.[:digit:]' '\n' | grep '^[^.][^.]*\.[^.][^.]*\.[^.][^.]*\.[^.][^.]*$'
```


## Code Blocks in Lists

Indentation matters. Be sure the indent of the code block aligns with the first non-space character after the list item marker (e.g., `1.`). Usually this will mean indenting 3 spaces instead of 4.

1. Do step 1.
2. Now do this:

   ```ruby
   def print_hi(name)
     puts "Hi, #{name}"
   end
   print_hi('Tom')
   #=> prints 'Hi, Tom' to STDOUT.
   ```

3. Now you can do this.


## GitHub Gist Embed

An example of a Gist embed below:

<script src="https://gist.github.com/sylhare/dad7ed1ef3d13614c77c4ebadf8a11c3.js"></script>

You can use `defer=true` so that the loading of the gist doesn't prevent the loading of the page.

```html
<script defer=true
        src="https://gist.github.com/sylhare/dad7ed1ef3d13614c77c4ebadf8a11c3.js">
</script>
```

[^1]: Michael’s Rose, [Minimal Mistakes](Michael’s Rose, Minimal Mistakes)
