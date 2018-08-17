import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;
import pageObjects.ShoppingCartPageObject;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;

/**
 * Created by umahaea on 8/15/18.
 */
public class ShoppingCartTest extends BaseClass {

    ShoppingCartPageObject shoppingCartPageObject = new ShoppingCartPageObject(driver);
    JavascriptExecutor js = (JavascriptExecutor) driver;

    String url = "http://127.0.0.1:8000/src/main/java/fixtures/shopping-cart.html";

    @BeforeMethod (alwaysRun = true)
    public void beforeMethod() throws InterruptedException {
        commonUtils.get(url);
    }

    @Test(groups = "consolidated")
    public void shoppingCartTest() throws InterruptedException {
        commonUtils.clickUsingJS(shoppingCartPageObject.xsFilter);
        commonUtils.click(shoppingCartPageObject.addToCartButton);
        commonUtils.click(shoppingCartPageObject.openCart);
        commonUtils.click(shoppingCartPageObject.addToCartButton);
        commonUtils.click(shoppingCartPageObject.closeCart);
        commonUtils.postCoverageData();
    }

    @Test(groups = "single")
    public void shoppingCartSingleTest() throws InterruptedException, IOException {
        commonUtils.clickUsingJS(shoppingCartPageObject.xsFilter);
        commonUtils.click(shoppingCartPageObject.addToCartButton);
        commonUtils.click(shoppingCartPageObject.openCart);
        commonUtils.click(shoppingCartPageObject.addToCartButton);
        commonUtils.click(shoppingCartPageObject.closeCart);
        singleReport();
    }

    public void singleReport() throws IOException {
        js = (JavascriptExecutor) driver;
        Object str = js.executeScript("return window.__coverage__;");
        GsonBuilder builder = new GsonBuilder();
        Gson gson = builder.create();
        String coverage = gson.toJson(str);
        Files.write(Paths.get("/Users/umahaea/demo/projects/.nyc_output/coverage.json"), coverage.getBytes());
    }
}
