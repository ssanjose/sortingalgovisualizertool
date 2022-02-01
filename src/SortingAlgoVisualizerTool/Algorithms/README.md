# Sorting Algorithms Animation

Each sorting algorithm returns an array of data to be used for animations.

## Returned data from a sorting algorithm

The returned data from a sorting algorithm will be an array of data in which each animation in the array contains an array of three different movement animations.

```js
{
  {{i,j},,{k,i|j}}, // 0: turn both bars red, 1: turn them back to og color, 2: turn the earliest bar(k or i) to the least comparison(i|j)
  {},
  ...
  {}
}
```

