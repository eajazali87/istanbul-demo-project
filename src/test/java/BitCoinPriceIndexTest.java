import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;
import pageObjects.BitCoinPriceIndexPageObject;
import pageObjects.ShoppingCartPageObject;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;

/**
 * Created by umahaea on 8/15/18.
 */
public class BitCoinPriceIndexTest extends BaseClass {

    BitCoinPriceIndexPageObject bitCoinPriceIndexPageObject = new BitCoinPriceIndexPageObject(driver);
    JavascriptExecutor js = (JavascriptExecutor) driver;

    String url = "http://localhost:8000/src/main/java/fixtures/bitcoin-price-index.html";

    @BeforeMethod(alwaysRun = true)
    public void beforeMethod() throws InterruptedException {
        commonUtils.get(url);
    }

    @Test(groups = "consolidated")
    public void bitCoinPriceIndexTest() throws InterruptedException {
        commonUtils.selectByIndex(bitCoinPriceIndexPageObject.selectCurrency, 2);
        commonUtils.selectByIndex(bitCoinPriceIndexPageObject.selectCurrency, 5);
        commonUtils.click(bitCoinPriceIndexPageObject.reset);

        commonUtils.postCoverageData();
    }
}
