package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

/**
 * Created by umahaea on 8/15/18.
 */
public class BitCoinPriceIndexPageObject {
    WebDriver driver = null;

    public BitCoinPriceIndexPageObject(WebDriver driver) {
        this.driver = driver;
    }

    public By selectCurrency = By.xpath("//select");
    public By reset = By.xpath("//*[@id='root']/div/div[1]/div/a");
    public By canvasChart = By.cssSelector("canvas.chartjs-render-monitor");

}
