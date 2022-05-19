package com.higradius;

import java.sql.*;
import java.sql.SQLException;

public class DBConnection {
	public static Connection createConnect() {
		Connection con = null;
		String url = "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=USD&days=30&interval=2";
		
		try {
			try {
				Class.forName("com.mysql.cj.jdbc.Driver");
			}
			catch (ClassNotFoundException e)
			{
				e.printStackTrace();
			}
			con = DriverManager.getConnection(url, uname, pass);
			System.out.println("Post establishing a DB connection - " +con);
			
		}
		catch(SQLException e)
		{
			System.out.println("Error Occurred");
			e.printStackTrace();
		}
		return con;
		
	}

}
