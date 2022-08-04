# Navigate using keyboard shortcut

To use keyboard shortcut in this page, use `j` to access next heading, `k` to access previous heading, `l` to provide link from heading.

## This is a top header topic

This is a normal paragraph following a header. GitHub is a code hosting platform for version control and collaboration. It lets you and others work together on projects from anywhere.

## This is header 2

> This is a blockquote following a header.
>
> When something is important enough, you do it even if the odds are not in your favor.

## Code example in header 2

### Common example

```js
// Javascript code with syntax highlighting.
var fun = function lang(l) {
  dateformat.i18n = require('./lang/' + l)
  return true;
}
```

```ruby
# Ruby code with syntax highlighting
GitHubPages::Dependencies.gems.each do |gem, version|
  s.add_dependency(gem, "= #{version}")
end
```

### Much rarer language examples

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


### Definition lists can be used with HTML syntax.

<dl>
<dt>Name</dt>
<dd>Godzilla</dd>
<dt>Born</dt>
<dd>1952</dd>
<dt>Birthplace</dt>
<dd>Japan</dd>
<dt>Color</dt>
<dd>Green</dd>
</dl>


## [Deal with linked header 2](#)

Linked header is a clickable element. Press `l` to visit that link.

## Code implemented for custom shortcut

```js
let topicIdx = 0;
const headings = document.getElementById("content").querySelectorAll("h1, h2");

function numOfTagElements() {
  return headings.length;
}

function next() {
  if (topicIdx < numOfTagElements()-1) topicIdx++;
  scrollTo(0, headings[topicIdx].offsetTop);
}

function prev() {
  if (topicIdx > 0) topicIdx--;
  scrollTo(0, headings[topicIdx].offsetTop);
}

function detail() {
  let link = headings[topicIdx].getElementsByTagName("a")[0]
  if (link) {
    link.click();
  }
}

function link() {
  document.location.href = (window.location.href.split("#")[0])+"#"+headings[topicIdx].id;
}

document.addEventListener("keyup", event => {
  if(event.keyCode === 74){
    next(); // use J for next
  } else if(event.keyCode === 75){
    prev(); // use K for previous
  } else if(event.keyCode === 76){
    detail(); // use L for access linked heading
  }
});
```

## The end

Because markdown file can include HTML tags inside markdown, I've included script and CSS in this markdown file to improve header movement visual by keyboard.

<script>
const headings = document.getElementById("content").querySelectorAll("h1, h2");
const offsetInRem = -5;

let topicIdx = getIndexFromAnchor();

function numOfTagElements() {
  return headings.length;
}

function convertRemToPixels(rem) {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

function scrollToHeading() {
  // let headingPos = headings[topicIdx].offsetTop + convertRemToPixels(offsetInRem);
  // scrollTo(0, headingPos);
  link();
}

function next() {
  let toast = document.getElementById("wrapmsg");

  if (topicIdx < numOfTagElements()-1) topicIdx++;
  else {
    topicIdx = 0;
    toast.innerText = "Wrapped up";
    toast.classList.add("ha");
    setTimeout(function(){
      toast.classList.remove("ha");
    }, 1000);
  }
  scrollToHeading();
}

function prev() {
  let toast = document.getElementById("wrapmsg");

  if (topicIdx > 0) topicIdx--;
  else {
    topicIdx = numOfTagElements() - 1;
    toast.innerText = "Wrapped down";
    toast.classList.add("ha");
    setTimeout(function(){
      toast.classList.remove("ha");
    }, 1000);
  }
  scrollToHeading();
}

function detail() {
  let link = headings[topicIdx].getElementsByTagName("a")[0]
  if (link) {
    link.click();
  }
}

function getIndexFromAnchor() {
  let headingId = window.location.href.split("#")[1]
  if (!headingId) {
    return -1
  }
  for (let i = 0; i < headings.length; i++) {
    if(headings[i].id === headingId) {
        return i
    }
  }
}

function link() {
  document.location.href = (window.location.href.split("#")[0])+"#"+headings[topicIdx].id;
}

document.addEventListener("keyup", event => {
  if(event.keyCode === 74){
    next();
  } else if(event.keyCode === 75){
    prev();
  } else if(event.keyCode === 76){
    detail();
  } else if(event.keyCode === 77){
    link();
  }
});
</script>

<div id="wrapmsg">
</div>

<style>
  #wrapmsg {
    display: none;
    position: fixed;
    bottom: 0;
    left: 0;
    padding: .5rem 1rem;
    margin: .5rem;
    background: #666;
  }

  #wrapmsg.ha {
    display: block;
  }
</style>
