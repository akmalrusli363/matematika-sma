# Using diff on Markdown

Using diff on Markdown is now possible with `diff` langauge supported on GitHub Flavored Markdown. This is an example of using diff on GFM Syntax Highlighting:

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

## Basic concept of diff

For very basic concept of diff, let comparing the before and after of the following text:

```
# Before

This part of the document has stayed the same from version to version.
It shouldn't be shown if it doesn't change. Otherwise, that would not
be helping to compress the size of the changes.

This paragraph contains text that is outdated. It will be deleted
in the near future.

It is important to spell check this dokument. On the other hand, a
misspelled word isn't the end of the world. Nothing in the rest of
this paragraph needs to be changed. Things can be added after it.
```

```
# After

This is an important notice! It should therefore be located at
the beginning of this document!

This part of the document has stayed the same from version to version.
It shouldn't be shown if it doesn't change. Otherwise, that would not
be helping to compress the size of the changes.

It is important to spell check this document. On the other hand, a
misspelled word isn't the end of the world. Nothing in the rest of
this paragraph needs to be changed. Things can be added after it.

This paragraph contains important new additions
to this document.
```

The comparison between before and after were named as **revision**, which represents changes between the contents of files. The revision can compared using `diff` which comparing old revision with new revision as using command below:

```bash
diff <before> <after>
```

While executing plain `diff` command without additional parameters, this will outputs the diff result which comparing before and after separately.

```diff
1c1,4
< # Before
---
> # After
> 
> This is an important notice! It should therefore be located at
> the beginning of this document!
7,10c10
< This paragraph contains text that is outdated. It will be deleted
< in the near future.
< 
< It is important to spell check this dokument. On the other hand, a
---
> It is important to spell check this document. On the other hand, a
12a13,15
> 
> This paragraph contains important new additions
> to this document.
```

This looks very differ and complicated if the plain `diff` command compares each part of revision in pair of files, which each revision shown in separate sections.

Instead, using `diff -u` or `diff --unified` compares pair of file which show revisions in same line which represented below:

```diff
--- before.txt	2021-09-13 21:30:30.871909700 +0700
+++ after.txt	2021-09-13 21:30:39.919010200 +0700
@@ -1,12 +1,15 @@
-# Before
+# After
+
+This is an important notice! It should therefore be located at
+the beginning of this document!
 
 This part of the document has stayed the same from version to version.
 It shouldn't be shown if it doesn't change. Otherwise, that would not
 be helping to compress the size of the changes.
 
-This paragraph contains text that is outdated. It will be deleted
-in the near future.
-
-It is important to spell check this dokument. On the other hand, a
+It is important to spell check this document. On the other hand, a
 misspelled word isn't the end of the world. Nothing in the rest of
 this paragraph needs to be changed. Things can be added after it.
+
+This paragraph contains important new additions
+to this document.
```

Or simplified to:

```diff
-# Before
+# After
+
+This is an important notice! It should therefore be located at
+the beginning of this document!
 
 This part of the document has stayed the same from version to version.
 It shouldn't be shown if it doesn't change. Otherwise, that would not
 be helping to compress the size of the changes.
 
-This paragraph contains text that is outdated. It will be deleted
-in the near future.
-
-It is important to spell check this dokument. On the other hand, a
+It is important to spell check this document. On the other hand, a
 misspelled word isn't the end of the world. Nothing in the rest of
 this paragraph needs to be changed. Things can be added after it.
+
+This paragraph contains important new additions
+to this document.
```

For contextual, using `-c` can produces contextual changes of pair of files below:

```diff
*** before.txt	Mon Sep 13 21:37:46 2021
--- after.txt	Mon Sep 13 21:37:43 2021
***************
*** 1,3 ****
--- 1,9 ----
+ This is an important
+ notice! It should
+ therefore be located at
+ the beginning of this
+ document!
+ 
  This part of the
  document has stayed the
  same from version to
***************
*** 8,20 ****
  compress the size of the
  changes.
  
- This paragraph contains
- text that is outdated.
- It will be deleted in the
- near future.
- 
  It is important to spell
! check this dokument. On
  the other hand, a
  misspelled word isn't
  the end of the world.
--- 14,21 ----
  compress the size of the
  changes.
  
  It is important to spell
! check this document. On
  the other hand, a
  misspelled word isn't
  the end of the world.
***************
*** 22,24 ****
--- 23,29 ----
  this paragraph needs to
  be changed. Things can
  be added after it.
+ 
+ This paragraph contains
+ important new additions
+ to this document.
```


## Approaches using diff on Markdown

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

Adding spaces on beginning of line can improve readability for comparing text/contents using Markdown.


## References

- GNU Diffutils - [https://www.gnu.org/software/diffutils/](https://www.gnu.org/software/diffutils/)
- GNU Diff: Comparing and Merging Files - [https://www.gnu.org/software/diffutils/manual/diffutils.html](https://www.gnu.org/software/diffutils/manual/diffutils.html)
- GitHub: rouge-ruby/rouge - [https://github.com/rouge-ruby/rouge](https://github.com/rouge-ruby/rouge)
- Wikipedia: diff - [https://en.wikipedia.org/wiki/Diff](https://en.wikipedia.org/wiki/Diff)
