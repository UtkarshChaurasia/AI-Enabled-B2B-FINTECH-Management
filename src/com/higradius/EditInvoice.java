package com.higradius;

import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.io.*;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class EditInvoice
 */
@WebServlet("/EditInvoice")
public class EditInvoice extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public EditInvoice() {
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
				String fieldValue = request.getParameter("uniqId");
				int field = Integer.parseInt(fieldValue);
				String newInAmt = request.getParameter("inamt");
				float newInvoiceAmt = Float.parseFloat(newInAmt);
				String newNotes = request.getParameter("nn");
			
			
			
			Connection con = DBConnection.createConnect();
			String query = "UPDATE mytable SET total_open_amount = ?, notes = ? WHERE FIELD1 = ?";
			
			PreparedStatement st = con.prepareStatement(query);
			st.setFloat(1, newInvoiceAmt);
			st.setString(2, newNotes);
			st.setInt(3, field);
			
			
			st.executeUpdate();
			con.close();
		}
		
		catch(Exception e) {
			
		}
	}
}


