import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.testng.annotations.AfterClass;
import org.testng.annotations.AfterSuite;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.BeforeSuite;
import pageObjects.*;

/**
 * Created by umahaea on 8/15/18.
 */
public class BaseClass {
    WebDriver driver = null;
    CommonUtils commonUtils = null;
    DesiredCapabilities desiredCapabilities = null;

    @BeforeClass(alwaysRun = true)
    public void setUp() {
        System.setProperty("webdriver.chrome.driver", "/Users/umahaea/demo/projects/drivers/chromedriver");
        driver = new ChromeDriver();
        commonUtils = new CommonUtils(driver);
    }

    @AfterClass(alwaysRun = true)
    public void tearDown() throws InterruptedException {
        driver.close();
        driver.quit();
    }
}
