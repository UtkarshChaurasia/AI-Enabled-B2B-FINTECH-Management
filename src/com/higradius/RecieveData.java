package com.higradius;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.*;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

/**
 * Servlet implementation class RecieveData
 */
@WebServlet("/RecieveData")
public class RecieveData extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public RecieveData() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		

		int rowToGet = 11;
		
		try {
			String pageInURL = request.getParameter("page");
			int page = Integer.parseInt(pageInURL) * rowToGet; 
			Connection con = DBConnection.createConnect();
			Statement st = con.createStatement();
			String query = "SELECT FIELD1, name_customer, cust_number, invoice_id, total_open_amount, due_in_date, predicted_clear_date, notes from mytable ORDER BY FIELD1 DESC LIMIT "+((page-1)*11+1)+","+11;
			ResultSet rs = st.executeQuery(query);
			
			ArrayList<Response> data = new ArrayList<>();
			while(rs.next())
			{
				Response inv = new Response();
				inv.setField(rs.getInt("FIELD1"));
				inv.setCustomerName(rs.getString("name_customer"));
				inv.setCustomerId(rs.getString("cust_number"));
				inv.setInvoiceId(rs.getString("invoice_id"));
				inv.setInvoiceAmt(rs.getFloat("total_open_amount"));
				inv.setDueDate(rs.getString("due_in_date"));
				inv.setPredictedDate(rs.getString("predicted_clear_date"));
				inv.setNotes(rs.getString("notes"));
				data.add(inv);
			}
			Gson gson = new GsonBuilder().serializeNulls().create();
			String invoices  = gson.toJson(data);
			response.setContentType("application/json");
			try {
				response.getWriter().write(invoices);//getWriter() returns a PrintWriter object that can send character text to the client. 
			}
			catch(IOException e)
			{
				e.printStackTrace();
			}
			rs.close();
			st.close();
			con.close();
			
		}
		catch(SQLException e) {
			e.printStackTrace();
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
