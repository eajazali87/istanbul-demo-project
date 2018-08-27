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

    @BeforeMethod(alwaysRun = true)
    public void beforeMethod() throws InterruptedException {
        commonUtils.get(url);
    }

    @Test(groups = "multiple")
    public void shoppingCartTest() throws InterruptedException {
        commonUtils.clickUsingJS(shoppingCartPageObject.xsFilter);
        commonUtils.click(shoppingCartPageObject.addToCartButton);
        commonUtils.click(shoppingCartPageObject.openCart);
        commonUtils.click(shoppingCartPageObject.addToCartButton);
        commonUtils.click(shoppingCartPageObject.closeCart);
        commonUtils.postCoverageData();
    }

    @Test(groups = {"single"})
    public void addItemsToCartTest() throws InterruptedException, IOException {
        commonUtils.selectByIndex(shoppingCartPageObject.orderBy, 1);
        commonUtils.selectByIndex(shoppingCartPageObject.orderBy, 2);
        commonUtils.clickUsingJS(shoppingCartPageObject.xsFilter);
        commonUtils.click(shoppingCartPageObject.addToCartButton);
        commonUtils.click(shoppingCartPageObject.openCart);
        commonUtils.click(shoppingCartPageObject.addToCartButton);
        commonUtils.click(shoppingCartPageObject.closeCart);
        commonUtils.singleReport();
    }
}
