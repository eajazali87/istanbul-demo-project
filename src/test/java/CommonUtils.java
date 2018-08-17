import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import org.openqa.selenium.*;
import org.openqa.selenium.support.ui.Select;

import java.io.*;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.ProtocolException;
import java.net.URL;

/**
 * Created by umahaea on 8/15/18.
 */
public class CommonUtils extends BaseClass {
    WebDriver driver = null;
    JavascriptExecutor js = null;

    public CommonUtils(WebDriver driver) {
        this.driver = driver;
    }

    WebElement webElement = null;
    Select select = null;
    public final String errorColorCode = "\u001B[31m";

    //open
    public void get(String url) throws InterruptedException {
        driver.manage().deleteAllCookies();
        try {
            driver.get(url);
        }catch (Exception e){
            System.out.println(e.getMessage());
        }
        driver.manage().window().maximize();
        Thread.sleep(1000);
    }

    //click
    public void click(By element) throws InterruptedException {
        try {
            webElement = driver.findElement(element);
            webElement.click();
        } catch (NoSuchElementException e) {
            System.out.println(errorColorCode + Thread.currentThread().getStackTrace()[2].getMethodName() + ":" + Thread.currentThread().getStackTrace()[2].getLineNumber() + " - " + element + ": no such element, click operation didn't happen");
        }
        Thread.sleep(1000);
    }

    //click using js
    public void clickUsingJS(By element) throws InterruptedException {
        try {
            webElement = driver.findElement(element);
            js = (JavascriptExecutor) driver;
            js.executeScript("arguments[0].click();", webElement);
        } catch (NoSuchElementException e) {
            System.out.println(errorColorCode + Thread.currentThread().getStackTrace()[2].getMethodName() + ":" + Thread.currentThread().getStackTrace()[2].getLineNumber() + " - " + element + ": no such element, click operation using JS didn't happen");
        }
        Thread.sleep(1000);
    }

    //select using index
    public void selectByIndex(By element, int x) throws InterruptedException {
        try {
            webElement = driver.findElement(element);
            select = new Select(webElement);
            select.selectByIndex(x);
        } catch (NoSuchElementException e) {
            System.out.println(errorColorCode + Thread.currentThread().getStackTrace()[2].getMethodName() + ":" + Thread.currentThread().getStackTrace()[2].getLineNumber() + " - " + element + ": no such element, click operation using JS didn't happen");
        }

        Thread.sleep(1000);
    }

    public void postCoverageData() {
        js = (JavascriptExecutor) driver;
        Object str = js.executeScript("return window.__coverage__;");
        GsonBuilder builder = new GsonBuilder();
        Gson gson = builder.create();
        String coverage = gson.toJson(str);
        //System.out.println("coverage: " + coverage);

        //setting up http post request
        URL url = null;
        try {
            url = new URL("http://localhost:3000/coverage/client");
        } catch (MalformedURLException e) {
            e.printStackTrace();
        }
        HttpURLConnection connection = null;
        try {
            connection = (HttpURLConnection) url.openConnection();
        } catch (IOException e) {
            e.printStackTrace();
        }
        connection.setConnectTimeout(5000);//5 secs
        connection.setReadTimeout(5000);//5 secs

        try {
            connection.setRequestMethod("POST");
        } catch (ProtocolException e) {
            e.printStackTrace();
        }
        connection.setDoOutput(true);
        connection.setRequestProperty("Content-Type", "application/json");

        OutputStreamWriter out = null;
        try {
            out = new OutputStreamWriter(connection.getOutputStream());
        } catch (IOException e) {
            e.printStackTrace();
        }
        try {
            out.write(coverage);
        } catch (IOException e) {
            e.printStackTrace();
        }
        try {
            out.flush();
        } catch (IOException e) {
            e.printStackTrace();
        }
        try {
            out.close();
        } catch (IOException e) {
            e.printStackTrace();
        }

        try {
            int res = connection.getResponseCode();
        } catch (IOException e) {
            e.printStackTrace();
        }

        //System.out.println(res);

        InputStream is = null;
        try {
            is = connection.getInputStream();
        } catch (IOException e) {
            e.printStackTrace();
        }
        BufferedReader br = new BufferedReader(new InputStreamReader(is));
        String line = null;
        try {
            while ((line = br.readLine()) != null) {
                System.out.println(line);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        connection.disconnect();
    }
}
