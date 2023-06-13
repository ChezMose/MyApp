# Issue with the [lang] folder + React-use-intercom

## How to test

* replace the layout.js in the /app root folder by the version you want.
* replace the layout.js in the [lang] root folder by the same version.

You'll get all the cases I tested.

---

## What has been tested so far ....


### Try 1

- No layout.js in the root folder
- layout.js in the [lang] folder

=> DOES NOT WORK

The intercom widget shows up, but when switching language,
the IntercomClientProvider is unable to re-attach its context and the Intercom widget disappears.

If you switch langage AGAIN, then a client errors shows up.

---

### Try 2

- layout.js in the root folder without the \<html\> tag
- layout.js in the [lang] folder with the \<html lang=...\> tag

=> DOES NOT WORK

The intercom widget shows up, but when switching language,
the IntercomClientProvider is unable to re-attach its context and the Intercom widget disappears.

---

### Try 3

- layout.js in the root folder with the \<html\> tag
- layout.js in the [lang] folder without \<html\> tag

=> DOES NOT WORK

  => DOES ALMOST WORK
  
  The intercom widget shows up.
  Switching language works.
  But there is no way to add the lang attribute to the html tag, which is very bad for SEO.

---

### Try 4, 5 and 6

Same as 1, 2 and 3 but with a custom implementation of useIntercom I used to try to understand what happened.
