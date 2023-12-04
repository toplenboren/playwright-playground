# Hi! 

This repository is a small playground for playwright tests

You basically want to learn to do three things:

1. Generate tests using code generation

2. Learn how to store credentials safely

3. Learn how to launch tests

----

## Pre-requisites:

1. Install `node.js`
2. Install `yarn`
3. Install dependencies: run `yarn` in terminal from the root of this project

## Tests generation:

> Re: https://playwright.dev/docs/codegen-intro

0. Don't forget about `Pre-requisites`

1. Launch test generation UI:

    `npx playwright codegen <url>`

    This command will open up a window with website specified in `<url>` argument. You will test this `<url>`
    
    Example: `npx playwright codegen condo.d.doma.ai`

    Example: `npx playwright codegen v1.doma.ai`

2.  Click some stuff:

    ![Screenshot 2023-12-04 at 16.19.23.png](..%2F..%2F..%2F..%2F..%2Fvar%2Ffolders%2Fmw%2F4z4klg0n2y1gm_vp_mkpzc2r0000gn%2FT%2FTemporaryItems%2FNSIRD_screencaptureui_Y1nPMi%2FScreenshot%202023-12-04%20at%2016.19.23.png)

    On the right side you are seeing the test code, on the left you are seeing opened website. Now just click some stuff within left window and see how code is written for you!

3.  Don't forget about Assertions

    ![Screenshot 2023-12-04 at 16.22.30.png](..%2F..%2F..%2F..%2F..%2Fvar%2Ffolders%2Fmw%2F4z4klg0n2y1gm_vp_mkpzc2r0000gn%2FT%2FTemporaryItems%2FNSIRD_screencaptureui_R3uTaM%2FScreenshot%202023-12-04%20at%2016.22.30.png)

4.  Copy your first test to the `./tests` folder

    From PlayWright inspector:

    ![Screenshot 2023-12-04 at 16.23.23.png](..%2F..%2F..%2F..%2F..%2Fvar%2Ffolders%2Fmw%2F4z4klg0n2y1gm_vp_mkpzc2r0000gn%2FT%2FTemporaryItems%2FNSIRD_screencaptureui_je63TU%2FScreenshot%202023-12-04%20at%2016.23.23.png)

    To code editor

    ![Screenshot 2023-12-04 at 16.25.48.png](..%2F..%2F..%2F..%2F..%2Fvar%2Ffolders%2Fmw%2F4z4klg0n2y1gm_vp_mkpzc2r0000gn%2FT%2FTemporaryItems%2FNSIRD_screencaptureui_JdHFYt%2FScreenshot%202023-12-04%20at%2016.25.48.png)

5. We have generated first test. Inspect test code to learn what it does and go to the `Running tests` section to learn how to run these tests

## Running tests

> Re: https://playwright.dev/docs/writing-tests

1. Just use this command: 

   `yarn playwright test`

   ![Screenshot 2023-12-04 at 16.32.25.png](..%2F..%2F..%2F..%2F..%2Fvar%2Ffolders%2Fmw%2F4z4klg0n2y1gm_vp_mkpzc2r0000gn%2FT%2FTemporaryItems%2FNSIRD_screencaptureui_c4mtnc%2FScreenshot%202023-12-04%20at%2016.32.25.png)