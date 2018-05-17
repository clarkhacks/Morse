# Morse Js

The lightweight Morse Code javascript library you've been looking for. Weighing in at only 423 bytes compressed and GZipped.
Morse Js automatically detects if your input is a number, letter, or Morse Code.

To add Morse Js to your projects copy the code below.

```html
<script src="https://cdn.rawgit.com/clarkhacks/Morse/v0.0.1/production/morse-0.0.1.min.js"></script>
```

Morse Js currently only supports single characters.
## Letters

```javascript
console.log(morse("a"));
// ".-"

console.log(morse(".--."));
// "P"
```
## Numbers

```javascript
console.log(morse("1"));
// ".----"

console.log(morse("----"));
// "0"

```

## Symbols & Terms

```javascript
console.log(morse("@"));
// ".--.-."

console.log(morse("...-."));
// "UDERSTOOD"

```
