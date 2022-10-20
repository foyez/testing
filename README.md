# Testing

## Benefits of automated testing

1. Test your code frequently, in less time
2. Catch bugs before deploying
3. Deploy with confidence
4. Refactor with confidence
5. Focus more on the quality

## Types of tests

1. Unit - Tests a unit of an application without its external dependencies

```txt
* Cheap to write
* Execute fast
* Don't give a lot of confidence
```

2. Integration - Tests the application with its external dependencies

```txt
* Take longer to execute
* Give more confidence
```

3. End-to-end - Drives an application through its UI
   Example: Selenium

```txt
* Give the greatest confidence
* Very slow
* Very brittle
```

## Test Rules

- Number of unit tests should be the same or greater than number of execution paths

## Test Pyramid

```txt
E2E
Integration
Unit
```

- Favour unit tests to e2e tests
- Cover unit test gaps with integration tests
- Use end-to-end tests sparingly

## Testing Tools

### Frameworks

- Jasmine
- Mocha (Plugins: Chai, Sinon, etc)
- Jest

## Test-Driven Development (TDD)

<details>

<summary>View contents</summary>

- Write a failing test
- Write the simplest code to make the test pass
- Refactor if necessary

### Benefits of TDD

- Testable source code
- Full coverage by tests
- Simpler implementation

### Steps of TDD

1. Write the test first

`hello.test.js`

```js
const { hello } = require("./hello");

describe("hello()", () => {
  it("should say hello to people", () => {
    expect(hello("Foyez")).toBe("Hello, Foyez");
  });
});
```

Run `yarn test`

```sh
 FAIL  tdd/hello.test.js
  ● Test suite failed to run

    Cannot find module './hello' from 'hello.test.js'
```

2. Write the minimal amount of code for the test to run and check the failing test output

`hello.js`

```js
module.exports.hello = (name) => {
  return "";
};
```

Run "yarn test":

```sh
 FAIL  tdd/hello.test.js
  ● hello() › should say hello to people

    expect(received).toBe(expected) // Object.is equality

    Expected: "Hello, Foyez"
    Received: ""
```

3. Write enough code and tests to make it pass

```js
module.exports.hello = (name) => {
  return `Hello, ${name}`;
};
```

Run `yarn test`:

```sh
 PASS  tdd/hello.test.js
```

4. Commit the code

```sh
git commit "add hell() - greeting to people"
```

5. Refactor

`hello.js`

```js
const englishGreetingPrefix = "Hello, ";

module.exports.hello = (name) => {
  return englishGreetingPrefix + name;
};
```

Run `go test`

```sh
 PASS  tdd/hello.test.js
```

6. Ammend git commit

```sh
git commit --amend
```

</details>
