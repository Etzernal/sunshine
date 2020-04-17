package seleniumtesting;

import java.util.ArrayList;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class Reachable {
	String webpage;

	public static void main(String[] args) {
		Reachable check = new Reachable("http://localhost:3001/");
//    	Reachable check = new Reachable("https://istd.sutd.edu.sg/");
		check.hasTitle();
	}

	public Reachable(String webpage) {
		this.webpage = webpage;
	}

	public boolean hasTitle() {
		System.setProperty("webdriver.chrome.driver", "/Users/alicekham/seleniumWebDrivers/chromedriver");
		WebDriver driver = new ChromeDriver();
		driver.get(webpage);
		// maximize page
		driver.manage().window().maximize();

		// all the links
		java.util.List<WebElement> links = driver.findElements(By.tagName("a"));
		System.out.printf("Number of links : " + links.size() + "\n");
		// list of h refs
		List<String> hrefs = new ArrayList<>();
		for (int i = 0; i < links.size(); i++) {
			hrefs.add(links.get(i).getAttribute("href"));
		}

		for (int i = 0; i < links.size(); i++) {
			try {
				// cannot find title
				driver.get(hrefs.get(i));
				if (driver.getTitle().equals("")) {
					System.out.println("Title not found!");
					return false;
				} else {
					System.out.println("Title Found! Title is: " + driver.getTitle());
				}
			} catch (Exception e) {
				System.out.println("Failed!");
				e.printStackTrace();
				return false;
			}
		}
		return true;
	}

}
