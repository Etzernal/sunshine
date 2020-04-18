const { Builder, By, Key, until } = require('selenium-webdriver');

var driver = new Builder().forBrowser('chrome').build();
driver.get('http://localhost:3001/');
driver.findElement(By.linkText('Contact')).click();
driver.findElement(By.linkText("Go To Live Chat")).click();

async function goToWebsite() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.manage().window().fullscreen();
        await driver.get('http://localhost:3001/');
        await driver.findElement(By.linkText("Contact")).click();
        driver.sleep(5000);
        await driver.findElement(By.linkText("Go To Live Chat")).click();
        await driver.findElement(By.linkText("Book And Join A Tour")).click();
        await driver.findElement(By.linkText("Group Bookings")).click();
        await driver.findElement(By.id("firstName")).sendKeys("Jane");
        await driver.findElement(By.id("lastName")).sendKeys("Doe");
        await driver.findElement(By.id("email")).sendKeys("janedoe@gmail.com");
        await driver.findElement(By.id("info")).sendKeys("selenium automated testing");
        await driver.findElement(By.id("gridCheck1")).checked;
        await driver.findElement(By.id("submitbutton")).click();
    }
    finally {
        console.log("test successful")
        await driver.quit();
    }
}

goToWebsite();