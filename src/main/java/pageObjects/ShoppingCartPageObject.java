package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

/**
 * Created by umahaea on 8/15/18.
 */
public class ShoppingCartPageObject {
    WebDriver driver = null;

    public ShoppingCartPageObject(WebDriver driver) {
        this.driver = driver;
    }

    public By xsFilter= By.xpath("//input[@value='XS']");
    public By addToCartButton= By.xpath("//div[@class='shelf-item__buy-btn']");
    public By openCart= By.xpath("//*[@id='root']/div/div");
    public By closeCart= By.xpath("//*[@id='root']/div/div/div[1]");

    public By orderBy = By.xpath("//select");

}
