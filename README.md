# Testing

## Benefits of automated testing

1. Test your code frequently, in less time
2. Catch bugs before deploying
3. Deploy with confidence
4. Refactor with confidence
5. Focus more on the quality

## Types of tests

1. Unit - Tests a unit of an application without its external dependencies

```
* Cheap to write
* Execute fast
* Don't give a lot of confidence
```

2. Integration - Tests the application with its external dependencies

```
* Take longer to execute
* Give more confidence
```

3. End-to-end - Drives an application through its UI
   Example: Selenium

```
* Give the greatest confidence
* Very slow
* Very brittle
```

## Test Pyramid

```
E2E
Integration
Unit
```

- Favour unit tests to e2e tests
- Cover unit test gaps with integration tests
- Use end-to-end tests sparingly

## Tooling

### Frameworks

- Jasmine
- Mocha (Plugins: Chai, Sinon, etc)
- Jest