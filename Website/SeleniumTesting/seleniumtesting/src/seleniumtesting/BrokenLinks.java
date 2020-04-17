package seleniumtesting;

import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class BrokenLinks {

	public static void main(String[] args) throws InterruptedException, IOException, MalformedURLException {

		// initiate driver
		System.setProperty("webdriver.chrome.driver", "/Users/alicekham/seleniumWebDrivers/chromedriver");
		WebDriver driver = new ChromeDriver();
		// maximize page
		driver.manage().window().maximize();
		// implicit wait for 10sec
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		// open URL of app
		driver.get("http://localhost:3001/");
		// wait in ms
		Thread.sleep(5000);

		// capture links from web page
		List<WebElement> links = driver.findElements(By.tagName("a"));

		// number of links
		System.out.println("Number of links: " + links.size());

		for (int i = 0; i < links.size(); i++) {
			// use href attribute to get URL
			// capture 1st web element
			WebElement element = links.get(i);
			String url = element.getAttribute("href");

			URL link = new URL(url);

			// create connection using url object "link"
			HttpURLConnection httpConnection = (HttpURLConnection) link.openConnection();

			// waiting time 2 seconds
			Thread.sleep(2000);
			// establish connection
			httpConnection.connect();

			int responseCode = httpConnection.getResponseCode(); // return response

			if (responseCode >= 400) {
				System.out.println(url + " : is broken link ");
			} else {
				System.out.println(url + " : is valid link ");
			}
		}
		driver.quit();
	}
}
