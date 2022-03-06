---
title: Minimum knowledge to get a Frontend job - Luis Martinez Web Developer
description: Applying a11y guidelines should be a part of the development process, these are the steps I suggest to make a website highly accessible
excerpt: Applying a11y guidelines should be a part of the development process, these are the steps I suggest to make a website highly accessible
createdAt: 2022-03-05
---

# The Minimum you need to know to get a Frontend job

- Intro

  - My opinion
  - Need to find job
  - Not any job, but one job
    - Some jobs might have additional pre-requisites
    - Some jobs will have enough with this
      - So knowing these you might have a chance

- What to know?
  - HTML, CSS, JS and React?
    - NO
  - You need to know _some_ html, css, js and React
    - React could be another framework, it's not all that important
      - But React is the most common
    - This is what this post is about.
      - _What_ html, css, js and React should you know?
- Summary in one sentence: know a few key things, but know them very well

- HTML

  - HTML is HUGE
    - What you need to know to be productive with it is tiny
  - Know this:
    - First, this is what you should be able to achieve:
      - You should be able to create a html file, and when you open it in the browser:
        - It should have a title and a favicon (in the browser tab)
        - It should show some headings, some text, some images, some links and a bullet point list
        - It should have a small form with one single input and a submit button, but the only thing it does is refresh the page
    - How to use an IDE to auto scafflold a starting html
    - Understand the concept of "nested tree"
    - Basic syntax
      - opening and closing tags
      - element tags
      - attributes
        - id
        - class
      - content
      - comments
    - Difference between block and inline
    - Some of the elements, but not all by any means
      - Body elements
        - div, span, a, p, h1-h6, img, button, form, input, label, ul, li
          - div is block and span is inline
          - Some other elements are block and inline by default
          - img src and alt, that's it
          - a target="\_blank", href and title
            - Link to external pages
            - Link to internal pages (#)
          - forms
            - inputs of types text, checkbox, radio, textarea, number
      - Head elements
        - link, title, meta
      - The number of times I've used a <table> is exactly zero
      - It would be good to know about main, header, nav, article, section, footer... but can you do without them? Yes. You can learn them during your first job.
    - Use html validators, like this [Ready to check - Nu Html Checker](https://validator.w3.org/nu/#textarea)

- CSS

  - CSS is HUUUGE, to get started we only need like 5% of it
    - Learn what you need when you need it
  - Know about the different ways to add styles
    - Inline styles in style attribute
    - Embedded in <style> block in the head
      - But who does this? We don't need this one
    - In an external css file, with a <link>
  - Basic CSS syntax: selector, property, value
  - Understand the box model: margin, border, padding, content
  - Some basic things:
    - Properties: color, background-color, display, flexbox or grid (pick one), font-size, font-family, border (1px solid black), border-radius, margin (auto), padding, height, width, max-height, max-width, position (absolute, relative), z-index, top/bottom/left/right, cursor, overflow
      - My suggestion is to just remember how to do specific things rather than theory, like the border I mention, easy to remember
    - Selectors: class selectors, id selectors, child selectors, \*,
    - Units: px, rem and % are enough
      - Understand absolute vs relative units
    - Different color values: hex, rgba
    - Media queries
    - Pseudo selectors: hover, focus
  - Fonts: combine html and css to use a custom font
  - Should be aware of some way to organize CSS, but it becomes trivial when using component-based frameworks, so we can skip this
  - Know that normalize.css is a thing
  - How about making images responsive, or making sticky footers? You'll learn that on the job
  - Animations? You won't use them in most jobs, anyway
  - Bezier curves? Forget it

- JS

  - JS is HUUUGE, but you only need like 5% of it.
  - It's much better to know a few things well that to roughly know everything
  - Forget about classes
  - The basic types: string, number, boolean, array, object
  - Null and undefined
  - Functions, function declarations and arrow functions
  - Array methods
  - This, I guess: https://www.reddit.com/r/learnprogramming/comments/e9ec0p/what_js_you_should_know_as_a_beginner/
  - That list is over exhaustive, too long.
    - Types
    - conditionals and ternary operators
    - some array methods: map, filter, find, reduce, forEach
    - some string methods
    - The a && b, a || b stuff
    - Objects with properties and methods
    - Destructuring
    - Spread operator to create new arrays and objects
  - Basics of code readability, like, split things into functions basically
  - Write pure functions which don't mutate arguments
  - Use always ===, never ==
  - No this, no classes, no obscure prototype methods
  - Closure (variable declared inside function is not accessible outside)
  - Fetch to do GET and POST
  - Async await
  - Basic debugging with `debugger`, some debugging flow, even if it's just console.log
  - Exports/imports, named and default

- Framework

  - Quickstart an app with a command
  - Create an basic one page app or widget with some components
  - How to do static content (html and CSS)
  - Use reactive variables
  - Computed properties
  - Bind properties to template
    - Classes, styles...
  - Loops and conditionals in template
  - Declare and call methods from elements
  - Most common lifecycle hooks
  - Use props
  - Emit events from components
  - Manage inputs and forms
  - Use whatever built-in and simplest way to manage state
  - Some way to watch changes in properties and run effects in response

- Other
  - Basic use of VSCode
  - Basic git workflow with IDE or commands
