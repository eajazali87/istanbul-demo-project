import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.testng.ITestContext;
import org.testng.annotations.AfterClass;
import org.testng.annotations.AfterSuite;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.BeforeSuite;
import org.testng.xml.XmlSuite;
import pageObjects.*;

import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;

/**
 * Created by umahaea on 8/15/18.
 */
public class BaseClass {
    WebDriver driver = null;
    CommonUtils commonUtils = null;
    String groupsInclude = "", testSuite = "";
    DesiredCapabilities desiredCapabilities = null;
    private static final String INPUT_ZIP_FILE = "/Users/umahaea/demo/istanbul-demo-project/download_coverage/coverage.zip";
    private static final String OUTPUT_FOLDER = "/Users/umahaea/demo/istanbul-demo-project/download_coverage";

    @BeforeClass(alwaysRun = true)
    public void setUp() {
        System.setProperty("webdriver.chrome.driver", "/Users/umahaea/demo/istanbul-demo-project/drivers/chromedriver");
        driver = new ChromeDriver();
        commonUtils = new CommonUtils(driver);
    }

    @AfterClass(alwaysRun = true)
    public void tearDown() throws InterruptedException {
        driver.close();
        driver.quit();
    }

    @AfterSuite(alwaysRun = true)
    public void afterSuite(final ITestContext testContext) throws IOException {
        XmlSuite suite = testContext.getSuite().getXmlSuite();
        groupsInclude = suite.getTests().get(0).getIncludedGroups().get(0);

        if(groupsInclude.equals("multiple")){
            System.out.println("downloading reports in the workspace!");
            URL url = new URL("http://localhost:3000/coverage/download");
            HttpURLConnection connection = (HttpURLConnection) url.openConnection();
            connection.setRequestMethod("GET");
            InputStream in = connection.getInputStream();
            FileOutputStream out = new FileOutputStream(INPUT_ZIP_FILE);
            commonUtils.downloadZip(in, out, 1024);
            out.close();
            commonUtils.unZipIt(INPUT_ZIP_FILE, OUTPUT_FOLDER);
        } else {
            System.out.println("single-session report is in the .nyc_output dir!");
        }
    }
}
