# 07. Star Patterns

## 01. Square of stars

### Logic Breakdown:

```javascript
const n = 4;

for (let i = 0; i < n; i++) {
  let row = "";

  for (j = 0; j < n; j++) {
    row += "* ";
  }

  console.log(row);
}
```

### Output:

```bash
* * * *
* * * *
* * * *
* * * *
```

## 02. Right-angled triangle (increasing)

### Logic Breakdown:

```javascript
const n = 4;

for (let i = 0; i < n; i++) {
  let row = "";

  for (let j = 0; j <= i; j++) {
    row += "* ";
  }

  console.log(row);
}
```

### Output:

```bash
*
* *
* * *
* * * *
```

## 03. Right-angled number triangle

### Logic Breakdown:

```javascript
const n = 4;

for (let i = 0; i < n; i++) {
  let row = "";

  for (let j = 0; j <= i; j++) {
    row += j + 1 + " ";
  }

  console.log(row);
}
```

### Output:

```bash
1
1 2
1 2 3
1 2 3 4
```

## 04. Triangle with repeating row numbers

### Logic Breakdown:

```javascript
const n = 4;

for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row += i + 1 + " ";
  }

  console.log(row);
}
```

### Output:

```bash
1
2 2
3 3 3
4 4 4 4
```

## 05. Inverted triangle with decreasing columns

### Logic Breakdown:

```javascript
const n = 4;

for (let i = 0; i < n; i++) {
  let row = "";

  for (j = 0; j < n - i; j++) {
    row += j + 1 + " ";
  }

  console.log(row);
}
```

### Output:

```bash
1 2 3 4
1 2 3
1 2
1
```

## 06. Inverted star triangle

### Logic Breakdown:

```javascript
const n = 4;

for (let i = 0; i < n; i++) {
  let row = "";

  for (let j = 0; j < n - i; j++) {
    row += "* ";
  }

  console.log(row);
}
```

### Output:

```bash
* * * *
* * *
* *
*
```

## 07. Right-aligned star triangle

### Logic Breakdown:

```javascript
const n = 4;

for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < n - (i + 1); j++) {
    row += "  ";
  }
  for (let k = 0; k <= i; k++) {
    row += "* ";
  }
  console.log(row);
}
```

### Output:

```bash
      *
    * *
  * * *
* * * *
```

## 08. Binary pattern with alternating toggle

### Logic Breakdown:

```javascript
const n = 4;

for (let i = 0; i < n; i++) {
  let row = "";
  let toggle = 1;
  for (let j = 0; j <= i; j++) {
    row += toggle + " ";

    if (toggle === 1) toggle = 0;
    else toggle = 1;
  }

  console.log(row);
}
```

### Output:

```bash
1
1 0
1 0 1
1 0 1 0
```

## 09. Binary pattern with continuous toggle across rows

### Logic Breakdown:

```javascript
const n = 4;
let toggle = 1;

for (let i = 0; i < n; i++) {
  let row = "";

  for (let j = 0; j <= i; j++) {
    row += toggle + " ";

    if (toggle === 1) toggle = 0;
    else toggle = 1;
  }

  console.log(row);
}
```

### Output:

```bash
1
0 1
0 1 0
1 0 1 0
```

## 10. Centered pyramid

### Logic Breakdown:

```javascript
const n = 4;

for (let i = 0; i < n; i++) {
  let row = "";

  for (let j = 0; j < n - (i + 1); j++) {
    row += "  ";
  }

  for (let k = 0; k < i * 2 + 1; k++) {
    row += "* ";
  }

  console.log(row);
}
```

### Output:

```bash
      *
    * * *
  * * * * *
* * * * * * *
```
