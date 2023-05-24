package Database;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

public class DBCreate {
    static final String JDBC_DRIVER = "org.h2.Driver";
    static final String DB_URL = "jdbc:h2:~/test";

    static final String USER = "sa";
    static final String PASS = "";

    public static void main(String[] args) {
        Connection conn = null;
        Statement stmt = null;
        try {
            Class.forName(JDBC_DRIVER);

            conn = DriverManager.getConnection(DB_URL,USER,PASS);

            stmt = conn.createStatement();
            String sql =  "CREATE TABLE CATEGORIES " +
                    "(id INTEGER not NULL, " +
                    " title VARCHAR(255), " +
                    " PRIMARY KEY ( id ))";
            stmt.executeUpdate(sql);

            sql =  "CREATE TABLE PRODUCTS " +
                    "(id INTEGER not NULL, " +
                    " catId INTEGER, " +
                    " title VARCHAR(255), " +
                    " productCode VARCHAR(255), " +
                    " image VARCHAR(255), " +
                    " price INTEGER, " +
                    " sku VARCHAR(255), " +
                    " description VARCHAR(255), " +
                    " stock INTEGER, " +
                    " PRIMARY KEY ( id ))";
            stmt.executeUpdate(sql);

            sql =  "CREATE TABLE DIMENSIONS " +
                    "(id INTEGER not NULL, " +
                    " description VARCHAR(255), " +
                    " PRIMARY KEY ( id ))";
            stmt.executeUpdate(sql);

            sql =  "CREATE TABLE CAPACITY " +
                    "(id INTEGER not NULL, " +
                    " description VARCHAR(255), " +
                    " PRIMARY KEY ( id ))";
            stmt.executeUpdate(sql);

            sql =  "CREATE TABLE FEATURES " +
                    "(id INTEGER not NULL, " +
                    " description VARCHAR(255), " +
                    " PRIMARY KEY ( id ))";
            stmt.executeUpdate(sql);

            sql = "INSERT INTO CATEGORIES " + "VALUES (1, 'Hűtőszekrények')";
            stmt.executeUpdate(sql);

            sql = "INSERT INTO CATEGORIES " + "VALUES (2, 'Vízforralók')";
            stmt.executeUpdate(sql);

            sql = "INSERT INTO CATEGORIES " + "VALUES (3, 'Televiziók')";
            stmt.executeUpdate(sql);

            sql = "INSERT INTO PRODUCTS " + "VALUES (1, 1, 'Beko Integrated Tall Freezer White', 'BFFD3577', '10213776.jfif', 231600, '577318', 'The Beko BFFD3577 Integrated Tall Freezer has a 220-litre capacity that's ideal for larger households.\\nIt also features six clear storage drawers that make it easy to organise your shopping. The two storage shelves give you even more space to store your family favourites.Fast FreezeNeed to quickly freeze your groceries? Select the fast freeze setting. It quickly freezes fresh food, preserving its taste and nutrients. Perfect for when you've just got back from the supermarket.\\nFrost Free\\nNo need to manually defrost the freezer thanks to the BFFD3577's Frost Free technology. This handy feature prevents ice build-up, saving you time and effort while freeing-up more storage space.', 20)";
            stmt.executeUpdate(sql);

            sql = "INSERT INTO DIMENSIONS " + "VALUES (1, '177.5 x 54 x 54.5cm (H x W x D)')";
            stmt.executeUpdate(sql);

            sql = "INSERT INTO CAPACITY " + "VALUES (1, '220 litres')";
            stmt.executeUpdate(sql);

            sql = "INSERT INTO FEATURES " + "VALUES (1, 'No need to defrost with frost free technology')";
            stmt.executeUpdate(sql);

            stmt.close();
            conn.close();
        } catch(SQLException se) {
            se.printStackTrace();
        } catch(Exception e) {
            e.printStackTrace();
        } finally {
            try{
                if(stmt!=null) stmt.close();
            } catch(SQLException se2) {
            }
            try {
                if(conn!=null) conn.close();
            } catch(SQLException se){
                se.printStackTrace();
            }
        }
    }
}
