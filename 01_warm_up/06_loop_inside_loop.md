# 06. Loop Inside Loop

## ✅ 01. Full Grid Loop

```javascript
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(i, j);
  }
}
```

- Prints every `(i, j)` pair in a 3×3 grid.

## ✅ 02. Lower Triangle (excluding diagonal)

```javascript
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < i; j++) {
    console.log(i, j);
  }
}
```

- Skips the diagonal (`j < i`)
- Prints only when `j` is **less** than `i`.

## ✅ 03. Lower Triangle (including diagonal)

```javascript
for (let i = 0; i < 5; i++) {
  for (let j = 0; j <= i; j++) {
    console.log(i, j);
  }
}
```

- Includes diagonal (`j <= i`)
- Prints only when `j` is **less** than **or equal to** `i`.
- Useful for building triangle/star patterns like:

  ```
  *
  * *
  * * *
  * * * *
  * * * * *
  ```

## ✅ 04. Reverse Loop from `i`

```javascript
for (let i = 0; i < 3; i++) {
  for (let j = i; j > 0; j--) {
    console.log(i, j);
  }
}
```

- Inner loop counts **downward from `i`**.
- Good for reverse triangular iterations.

```
  * * *
  * *
  *
```

## ✅ 05. Inverted Triangle (top-down)

```javascript
for (let i = 5; i > 0; i--) {
  for (let j = 0; j < i; j++) {
    console.log(i, j);
  }
}
```

- Outer loop counts **down**, inner loop counts **up**.
- Forms a decreasing number of iterations:

  ```
  * * * * *
  * * * *
  * * *
  * *
  *
  ```

## 🔁 Bonus Tip: Pattern Use Cases

- Grid navigation, matrix traversal → Pattern 01
- Building lower/upper triangles in 2D arrays → Pattern 02, 03
- Dynamic inner loop ranges → Pattern 04, 05
