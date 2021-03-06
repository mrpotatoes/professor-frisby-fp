## [Semigroup examples](https://egghead.io/lessons/javascript-semigroup-examples)

This one is super easy. We know that a `semigroup` is something that has a concat method which is bound to one law. Associativity: `a + (b + c) = (a + b) + c`.

So given two objects (or dictionaries) in order to concat them we would want to do 2 things.

1. Use a library to be able to `concat` dictionaries because there is no option to do that natively. `immutable-ext` is one option which is used in the videos. Then we'd want to "decorate" or "enrich" each property's data.

So we'd go from
```js
const acct1 = {
  name: 'Nico',
  isPaid: true,
  points: 10,
  friends: ['Franklin']
}
```

To this
```js
const acct1 = Map({
  name: First('Nico'),
  isPaid: All(true),
  points: Sum(10),
  friends: ['Franklin']
})
```

Now when we concat `name`, `isPaid` or `points` we can handle it like we would for any other `semigroup` and `friends` is an array which already has a `.concat()` method so we don't have to worry about that property.

Of course this is something you can do in a class, as we've all done something similar, but the major, and I mean **MAJOR** benefit here is that we are working with plain objects and with functions/interfaces that are ambivlant of their types.

The name concat method is not tied to a class type. It is completely separate but it follows the laws laid down by `semigroup`s.

1. If we put this code into a class we'd have to export that entire class/function making for a bigger bundle therefore more code to interpret (interpreter not us).
1. This code is inherently easier to test.
    - Stateless, orderless 
    - Smaller functions
1. Each one of those `semigroup`s can be tested on their own.
1. Each one of those `semigroup`s functions can be used anywhere without having to export the whole class since the api is based on a mathematical law so therefore ther is no guessing how it will work. It's also going to be more portable as anyone taht wants to use a semigroup will always have the same expected behavior.
    - As a matter of fact you dont' care how it'll work just that is follows the laws. Which is a super powerful idea. Some interpretations may be slow but nicer API and others may be very fast with a more difficult API. Heck, the first option could maybe even be made faster using a `babel` plugin!
    - How many times have you imported a `class` that was a `Factory` or `Facade` or `Proxy` or `Strategy` but they didn't work at all how you expected? This is not a worry as all the libraries that impliment a `semigroup` or any ADT would have to obide by the laws otherwise they don't conform and they cannot be trusted
      - Caveat: Each library does some minor things different (ie `fold`, `cata`, `reduce` to collapse the data structure to the primative value).
1. Each one of those `semigroup`s can be exported individually allowig for smaller bundles and [significantly] smaller output.

