import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import org.openqa.selenium.*;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;

import java.io.*;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.ProtocolException;
import java.net.URL;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.zip.ZipEntry;
import java.util.zip.ZipInputStream;

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
    Actions builder = null;
    public final String errorColorCode = "\u001B[31m";

    //open
    public void get(String url) throws InterruptedException {
        driver.manage().deleteAllCookies();
        try {
            driver.get(url);
        } catch (Exception e) {
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

    //click on co-ordinates
    public void clickByCoordinates(By element, int x, int y) throws InterruptedException {
        try {
            webElement = driver.findElement(element);
            builder = new Actions(driver);
            builder.moveToElement(webElement, x, y).click().build().perform();
        } catch (NoSuchElementException e) {
            System.out.println(errorColorCode + Thread.currentThread().getStackTrace()[2].getMethodName() + ":" + Thread.currentThread().getStackTrace()[2].getLineNumber() + " - " + element + ": no such element, click operation using JS didn't happen");
        }
        Thread.sleep(1000);
    }

    public void singleReport() throws IOException {
        js = (JavascriptExecutor) driver;
        Object str = js.executeScript("return window.__coverage__;");
        GsonBuilder builder = new GsonBuilder();
        Gson gson = builder.create();
        String coverage = gson.toJson(str);
        Files.write(Paths.get("/Users/umahaea/demo/istanbul-demo-project/.nyc_output/coverage.json"), coverage.getBytes());
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

    public static void downloadZip(InputStream input, OutputStream output, int bufferSize) throws IOException {
        byte[] buf = new byte[bufferSize];
        int n = input.read(buf);
        while (n >= 0) {
            output.write(buf, 0, n);
            n = input.read(buf);
        }
        output.flush();
    }

    public void unZipIt(String zipFile, String outputFolder) {
        byte[] buffer = new byte[1024];

        try {
            //create output directory is not exists
            File folder = new File(outputFolder);
            if (!folder.exists()) {
                folder.mkdir();
            }

            //get the zip file content
            ZipInputStream zis = new ZipInputStream(new FileInputStream(zipFile));
            //get the zipped file list entry
            ZipEntry ze = zis.getNextEntry();

            while (ze != null) {
                String fileName = ze.getName();
                File newFile = new File(outputFolder + File.separator + fileName);

                System.out.println("file unzip : " + newFile.getAbsoluteFile());

                //create all non exists folders
                //else you will hit FileNotFoundException for compressed folder
                new File(newFile.getParent()).mkdirs();

                FileOutputStream fos = new FileOutputStream(newFile);

                int len;
                while ((len = zis.read(buffer)) > 0) {
                    fos.write(buffer, 0, len);
                }

                fos.close();
                ze = zis.getNextEntry();
            }

            zis.closeEntry();
            zis.close();

            System.out.println("Done");

        } catch (IOException ex) {
            ex.printStackTrace();
        }
    }
}
