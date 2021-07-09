package com.higradius;

public class Response {
private int field;
private String customerName;
private  String customerId;
private String invoiceId;
private float invoiceAmt;
private String dueDate;
private String predictedDate;
private String notes;

public int getField() {
	return field;
}

public void setField(int field) {
	this.field = field;
}

public String getCustomerName() {
	return customerName;
}

public void setCustomerName(String customerName) {
	this.customerName = customerName;
}


public String getCustomerId() {
	return customerId;
}

public void setCustomerId(String customerId) {
	this.customerId = customerId;
}

public String getInvoiceId() {
	return invoiceId;
}

public void setInvoiceId(String invoiceId) {
	this.invoiceId = invoiceId;
}

public float getInvoiceAmt() {
	return invoiceAmt;
}

public void setInvoiceAmt(float invoiceAmt) {
	this.invoiceAmt = invoiceAmt;
}

public String getDueDate() {
	return dueDate;
}

public void setDueDate(String dueDate) {
	this.dueDate = dueDate;
}

public String getPredictedDate() {
	return predictedDate;
}

public void setPredictedDate(String predictedDate) {
	this.predictedDate = predictedDate;
}

public String getNotes() {
	return notes;
}

public void setNotes(String notes) {
	this.notes = notes;
}




}
