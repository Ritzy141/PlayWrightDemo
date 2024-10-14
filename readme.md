# Playwright cheet sheet

## To Run Tests 
### npx playwright test (headless mode)
### npx playwright test --headed (headed mode)

## To Specify browser
### npx playwright test --browser=firefox
### npx playwright test --browser=all

## Combine
### npx playwright test --browser=firefox --headed

## To runall tests
### npx playwright test

## To run specfic test
### npx playwright test tests/example.spec.ts

## To Skip all tests or run only selected ones
### Tag test with .skip (test.skip())
### Tag test with .only (test.only())

### To tag tests and run them by tags
## add a tag to the test title i'e myTag
## then run in cli, npx playwright test --grep myTag
## or to ignore all tag tests and run all others, npx playwright test --grep-invert myTag

## See documentation
### https://playwright.dev/docs/test-cli

## Using playwright config files
### create the config file, playwright.config.ts
### To run, npx playwright test --config=playwright.config.ts
### To specify a project (this can have settings i'e browser to run), npx playwright test --config=playwright.config.ts --project=Webkit

## To attach reports
### Just post-fix the cli command with, 
#### --reporter=line OR
#### --reporter=list (default) OR
#### --reporter=dot OR
#### --reporter=junit OR
#### --reporter=html

## When defining scripts in package.json, we can then run scripts using,
### e.g. npm run tests:chrome 
### to override settings in scripts, we can just add the seting on the end,
### e.g. npm run tests:chrome -- --headed

## Playwright inspector
### To do this just add a await page.pause() and the script will pause at this point showin the playwright inspector
### Ensure that you comment or delete this before production

## To capture an artifcat on faile go to playwright.config file and change the following settings,
### video: 'off'
### screenshot: 'off'
