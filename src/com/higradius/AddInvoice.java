package com.higradius;

import java.io.IOException;
import java.sql.Connection;
import java.sql.*;
import java.io.*;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class AddInvoice
 */
@WebServlet("/AddInvoice")
public class AddInvoice extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public AddInvoice() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		try {
			String customerName =  request.getParameter("custName");
			String customerId = request.getParameter("custId");
			String invoiceId = request.getParameter("invNo");
			String invoiceAmt = request.getParameter("invAmt");
			String dueDate = request.getParameter("dueDa");
			String notes = request.getParameter("not");
			Connection con = DBConnection.createConnect();
			String query = "INSERT INTO mytable (name_customer, cust_number, invoice_id, total_open_amount, due_in_date, notes) values (?, ?, ?, ?, ?, ?)";
			PreparedStatement st = con.prepareStatement(query);
			st.setString(1, customerName);
			st.setString(2, customerId);
			st.setString(3, invoiceId);
			st.setString(4, invoiceAmt);
			st.setString(5,  dueDate);
			st.setString(6, notes);
			st.executeUpdate();
			con.close();
			

		}
		catch (Exception e) {
			e.printStackTrace();
		}
	}

}
