// Copyright (c) 2016, libracore and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports["Reinigunsplan"] = {
	"filters": [
		{
			fieldname: "from_date",
			label: __("From"),
			fieldtype: "Date",
			default: frappe.datetime.get_today()
		},
		{
			fieldname: "to_date",
			label: __("To"),
			fieldtype: "Date",
			default: frappe.datetime.add_days(frappe.datetime.get_today(), 6)
		}
	],
	"formatter":function (row, cell, value, columnDef, dataContext, default_formatter) {
		value = default_formatter(row, cell, value, columnDef, dataContext);
		if (columnDef.id == __("Task") && (dataContext["Task"] == "End-R" || dataContext["Task"] == "Sub-R")) {
				value = "<span style='background-color:red!important;'>" + value + "</span>";
		}
		if (columnDef.id == __("Task") && dataContext["Task"] == "Control") {
				value = "<span style='background-color:gray!important;'>" + value + "</span>";
		}
		if (dataContext["Name"] == "ALERT") {
				value = "<span style='background-color:yellow!important;'>" + value + "</span>";
		}
		if (dataContext["Remark"] == ("KONFLIKT - Dieser MA arbeitet an diesem Tag nicht!")) {
				value = "<span style='background-color:orange!important;'>" + value + "</span>";
		}
		return value;
	}
}