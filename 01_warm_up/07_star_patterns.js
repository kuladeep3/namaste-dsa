const n = 4;

// 01.
// * * * *
// * * * *
// * * * *
// * * * *

for (let i = 0; i < n; i++) {
  let row = "";

  for (j = 0; j < n; j++) {
    row += "* ";
  }

  console.log(row);
}

// 02.
// *
// * *
// * * *
// * * * *

for (let i = 0; i < n; i++) {
  let row = "";

  for (let j = 0; j <= i; j++) {
    row += "* ";
  }

  console.log(row);
}

// 03.
// 1
// 1 2
// 1 2 3
// 1 2 3 4

for (let i = 0; i < n; i++) {
  let row = "";

  for (let j = 0; j <= i; j++) {
    row += j + 1 + " ";
  }

  console.log(row);
}

// 04.
// 1
// 2 2
// 3 3 3
// 4 4 4 4

for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row += i + 1 + " ";
  }

  console.log(row);
}

// 05.
// 1 2 3 4
// 1 2 3
// 1 2
// 1

for (let i = 0; i < n; i++) {
  let row = "";

  for (j = 0; j < n - i; j++) {
    row += j + 1 + " ";
  }

  console.log(row);
}

// 06.
// * * * *
// * * *
// * *
// *
for (let i = 0; i < n; i++) {
  let row = "";

  for (let j = 0; j < n - i; j++) {
    row += "* ";
  }

  console.log(row);
}

// 07.
//       *
//     * *
//   * * *
// * * * *

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

// 08.
// 1
// 1 0
// 1 0 1
// 1 0 1 0

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

// 09.
// 1
// 0 1
// 0 1 0
// 1 0 1 0

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

// 10.
//       *
//     * * *
//   * * * * *
// * * * * * * *

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
