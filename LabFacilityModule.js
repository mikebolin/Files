'use strict';
(function () {
class LabFacility {
	constructor() {
		this._isDropdownEnabled = 'true';
		this._dropdownOutterHtml = $('<div class="panel-group" id="PrimaryFacilityLab"><div class="panel panel-default"><div class="panel-heading" data-toggle="collapse" data-target="#divPrimaryFacilityLab" data-parent="#divPrimaryFacilityLab"><span class="panel-title">Primary Facility/Lab</span><i class="indicator glyphicon glyphicon-chevron-down  pull-right"></i></div><div id="divPrimaryFacilityLab" class="panel-collapse collapse in"><div class="panel-body"><div id="divPrimaryFacilityLab"></div></div></div></div></div>');
		this._dropdownInnerHtml = $('<form action="" id="formMemberCoverageGroupDetail" method="post"><div>' +
			'<div class="row"><div class="col-md-12"><div class="alert hide" id="divMembCovGrpDetailMessage">' +
			'<button type="button" class="close" data-target="divMembCovGrpDetailMessage"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button>' +
			'<span id="idMembCovGrpDetailMessage"></span>' +
			'</div></div></div><div class="row"><div class="col-md-6"><div class="row"><div class="col-md-6"><div class="row"><div class="col-md-6">' +
			'<label>* Effective Date</label><div class="form-group"><div class="input-group date " id="EffMembCovGrpDetail">' +
			'<input class="form-control datepicker" id="EffMembCovGrpDetailMask" maxlength="10" name="EffectiveDate" placeholder="MM/DD/YYYY" type="text" value="" autocomplete="off">' +
			'<span class="input-group-addon"><span class="glyphicon-calendar glyphicon"></span></span>' +
			'</div></div></div><div class="col-md-6"><label>Term Date</label><div class="form-group"><div class="input-group date " id="TermMembCovGrpDetail">' +
			'<input class="form-control datepicker" id="TermMembCovGrpDetailMask" maxlength="10" name="TermDate" placeholder="MM/DD/YYYY" type="text" value="" autocomplete="off">' +
			'<span class="input-group-addon"><span class="glyphicon-calendar glyphicon"></span></span>' +
			'</div></div></div></div></div><div class="col-md-3"><br>' +
			'<button id="facilityLookup" name="Facility Lookup" type="button" class="btn btn-primary" style="width: 100%; height: 30px;" >Facility Lookup</button>' +
			'</div><div class="col-md-3"><label>Primary Facility ID</label><input class="form-control" id="SubGroupID" maxlength="30" name="SubGroupID" type="text" value="">' +
			'</div></div></div><div class="col-md-6"><div class="row"><div class="col-md-3"><label>Facility Name</label>' +
			'<input class="form-control" style="width:225%" id="DivisionID" maxlength="100" name="DivisionID" type="text" value="">' +
			'</div></div></div></div><br><div class="row"><div class="col-md-6"><div class="row"><div class="col-md-6">' +
			'<label>Street Address #1</label>' +
			'<input class="form-control" id="StreetAddress1" maxlength="100" name="StreetAddress1" readonly="True" type="text" value=""></div>' +
			'<div class="col-md-6"><label>Street Address #2</label>' +
			'<input class="form-control" id="StreetAddress2" maxlength="100" name="StreetAddress2" readonly="True" type="text" value="">' +
			'</div></div></div><div class="col-md-6"><div class="row"><div class="col-md-3">' +
			'<label>City</label>' +
			'<input class="form-control" id="txtPCPCity" maxlength="50" name="City" readonly="True" type="text" value=""></div>' +
			'<div class="col-md-3"><label>State</label><div class="form-group divErrorMsg">' +
			'<select class="form-control MainState selectpicker" data-live-search="true" data-val="true" data-val-number="The field StateID must be a number." data-val-required="The StateID field is required." id="ddlCoveragePCPState" name="StateID" readonly="True" disabled="disabled" style="display: none;"><option value="0">--Select--</option></select><div class="btn-group bootstrap-select form-control MainState"><button type="button" style="font-weight:normal;height:30px;" class="btn dropdown-toggle selectpicker skipDisable btn-default disabled" data-toggle="dropdown" data-id="ddlCoveragePCPState" title="--Select--" tabindex="-1"><span class="filter-option pull-left">--Select--</span>&nbsp;<span class="caret"></span></button><div class="dropdown-menu open" style="max-height: 260px; overflow: hidden; min-height: 38px; z-index: 1000;"><div class="bootstrap-select-searchbox"><input type="text" autocomplete="off" data-dataurl="" data-ctrlid="ddlCoveragePCPState" class="input-block-level items form-control skipDisable"></div><ul class="dropdown-menu inner selectpicker" role="menu" style="max-height: 215px; overflow-y: auto; min-height: 0px; z-index: 1000;"><li rel="0" class="disabled selected active"><a tabindex="-1" class="" style="min-height:20px;" href="#"><span class="text">--Select--</span><i class="glyphicon glyphicon-ok icon-ok check-mark"></i></a></li></ul></div></div>' +
			'</div></div><div class="col-md-3"><label>Zip Code</label>' +
			'<input class="form-control" id="txtPCPZipCode" maxlength="10" name="ZipCode" readonly="True" type="text" value="" autocomplete="off">' +
			'</div><div class="col-md-3"><label>County</label><input class="form-control" id="txtPCPCounty" name="County" readonly="True" type="text" value="">' +
			'</div></div></div></div><br><div class="row"><div class="col-md-1"><br><div class="form-group">' +
			'<button id="btnPrimaryfacilitylookup" name="btnPrimaryfacilitylookup" type="button" class="btn btn-primary form-control" data-toggle="modal" data-target="#lookUpProvider">Lab Lookup</button>' +
			'</div></div> <div class="col-md-2"><label>Primary Lab ID</label><div class="form-group"><input type="text" class="form-control" readonly="readonly" id="txtPrimaryFacilitySite">' +
			'</div></div><div class="col-md-2"><label>Primary Lab</label><div class="form-group"><input type="text" class="form-control" readonly="readonly" id="txtPrimaryLab">' +
			'</div></div><div class="col-md-1 hide"><br><div class="form-group">' +
			'<button id="btnPrimaryLablookup" name="btnPrimaryLablookup" type="button" class="btn btn-primary form-control" data-toggle="modal" data-target="#lookUpProvider">Lab Lookup</button>' +
			'</div></div></div><br><div class="row"> <div class="col-md-6"><div class="row"><div class="col-md-6"><label>Street Address #1</label>' +
			'<input class="form-control" id="StreetAddress1" maxlength="100" name="StreetAddress1" readonly="True" type="text" value=""></div>' +
			'<div class="col-md-6"><label>Street Address #2</label><input class="form-control" id="StreetAddress2" maxlength="100" name="StreetAddress2" readonly="True" type="text" value="">' +
			'</div></div></div> <div class="col-md-6"><div class="row"><div class="col-md-3"><label>City</label>' +
			'<input class="form-control" id="txtPCPCity" maxlength="50" name="City" readonly="True" type="text" value="">' +
			'</div><div class="col-md-3"><label>State</label><div class="form-group divErrorMsg">' +
			'<select class="form-control MainState selectpicker" data-live-search="true" data-val="true" id="ddlCoveragePCPState" name="StateID" readonly="True" disabled="disabled" style="display: none;"><option value="0">--Select--</option></select><div class="btn-group bootstrap-select form-control MainState"><button type="button" style="font-weight:normal;height:30px;" class="btn dropdown-toggle selectpicker skipDisable btn-default disabled" data-toggle="dropdown" data-id="ddlCoveragePCPState" title="--Select--" tabindex="-1"><span class="filter-option pull-left">--Select--</span>&nbsp;<span class="caret"></span></button><div class="dropdown-menu open" style="max-height: 260px; overflow: hidden; min-height: 38px; z-index: 1000;"><div class="bootstrap-select-searchbox"><input type="text" autocomplete="off" data-dataurl="" data-ctrlid="ddlCoveragePCPState" class="input-block-level items form-control skipDisable"></div><ul class="dropdown-menu inner selectpicker" role="menu" style="max-height: 215px; overflow-y: auto; min-height: 0px; z-index: 1000;"><li rel="0" class="disabled selected active"><a tabindex="-1" class="" style="min-height:20px;" href="#"><span class="text">--Select--</span><i class="glyphicon glyphicon-ok icon-ok check-mark"></i></a></li></ul></div></div>' +
			'</div></div><div class="col-md-3"><label>Zip Code</label>' +
			'<input class="form-control" id="txtPCPZipCode" maxlength="10" name="ZipCode" readonly="True" type="text" value="" autocomplete="off">' +
			'</div><div class="col-md-3"><label>County</label><input class="form-control" id="txtPCPCounty" name="County" readonly="True" type="text" value="">' +
			'</div></div></div></div><div class="row"><div class="col-md-6"><div class="row"><div class="col-md-6"><div class="row"><div class="col-md-6">' +
			'<button id="btnAddMembCovGrpDetail" name="btnAddMembCovGrpDetail" type="button" class="btn btn-success " style="width: 100%">Add To List</button>&nbsp;' +
			'</div><div class="col-md-6">' +
			'<button id="btnCancelMembCovGrpDetail" name="btnCancelMembCovGrpDetail" type="button" class="btn btn-danger" style="width: 100%">Cancel</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
			'</div></div></div></div></div><div class="col-md-6"><div class="row"><div class="col-md-3"></div><div class="col-md-3"></div><div class="col-md-3"></div><div class="col-md-3">' +
			'<label><input id="MembGrpDetailIsViewAllStatus" name="MembGrpDetailIsViewAllStatus" type="checkbox" value="true"><input name="MembGrpDetailIsViewAllStatus" type="hidden" value="false"> View All Statuses </label>' +
			'</div></div></div></div><div class="row"><div class="col-md-12">' +
			'<div id="dtMembCovGrpDetail_wrapper" class="dataTables_wrapper form-inline no-footer"><div class="clear"><div class="alert alert-success"><b> No record(s) found.</b></div></div><div class="DTTT btn-group"><a class="btn btn-default btn tablebtn" id="ToolTables_dtMembCovGrpDetail_5" title="View print view"><span>Print</span></a></div><div class="dataTables_length" id="dtMembCovGrpDetail_length"><label><select name="dtMembCovGrpDetail_length" aria-controls="dtMembCovGrpDetail" class="form-control input-sm"><option value="10">10</option><option value="20">20</option><option value="50">50</option><option value="100">100</option></select> records per page</label></div><div id="outerWrapperScroll" style="width:200%;  overflow: auto"><table cellpadding="0" cellspacing="0" border="0" class="table table-bordered table-stripped table-hover dataTable no-footer" id="dtMembCovGrpDetail" role="grid" aria-describedby="dtMembCovGrpDetail_info"><thead>' +
			'<tr role="row"><th class="data-table-header sorting_disabled" rowspan="1" colspan="1" aria-label="Edit">Edit</th><th class="data-table-header sorting_disabled" rowspan="1" colspan="1" aria-label="Delete">Delete</th>' +
			'<th class="data-table-header sorting" tabindex="-1" aria-controls="dtMembCovGrpDetail" rowspan="1" colspan="1" aria-label="Effective Date: activate to sort column ascending">Effective Date</th>' +
			'<th class="data-table-header sorting" tabindex="-1" aria-controls="dtMembCovGrpDetail" rowspan="1" colspan="1" aria-label="Term Date: activate to sort column ascending">Term Date</th>' +
			'<th class="data-table-header sorting" tabindex="-1" aria-controls="dtMembCovGrpDetail" rowspan="1" colspan="1" aria-label="Group ID: activate to sort column ascending">Primary Facility ID</th>' +
			'<th class="data-table-header sorting" tabindex="-1" aria-controls="dtMembCovGrpDetail" rowspan="1" colspan="1" aria-label="Subgroup ID: activate to sort column ascending">Facility LOC ID</th>' +
			'<th class="data-table-header sorting" tabindex="-1" aria-controls="dtMembCovGrpDetail" rowspan="1" colspan="1" aria-label="Division ID: activate to sort column ascending">Facility Name</th>' +
			'<th class="data-table-header sorting" tabindex="-1" aria-controls="dtMembCovGrpDetail" rowspan="1" colspan="1" aria-label="Status: activate to sort column ascending">Primary Lab ID</th>' +
			'<th class="data-table-header sorting" tabindex="-1" aria-controls="dtMembCovGrpDetail" rowspan="1" colspan="1" aria-label="Status: activate to sort column ascending">Lab LOC ID</th>' +
			'<th class="data-table-header sorting" tabindex="-1" aria-controls="dtMembCovGrpDetail" rowspan="1" colspan="1" aria-label="Status: activate to sort column ascending">Lab Name</th>' +
			'<th class="data-table-header sorting" tabindex="-1" aria-controls="dtMembCovGrpDetail" rowspan="1" colspan="1" aria-label="Status: activate to sort column ascending">Status</th>' +
			'</tr></thead>' +
			'<tbody><tr class="odd"><td valign="top" colspan="8" class="dataTables_empty">No Records Found</td></tr></tbody></table></div><div class="dataTables_info" id="dtMembCovGrpDetail_info" role="status" aria-live="polite">Showing 0 to 0 of 0 entries</div><div class="dataTables_paginate paging_input" id="dtMembCovGrpDetail_paginate" style="display: none;"><span class="first paginate_button" id="dtMembCovGrpDetail_first">First</span><span class="previous paginate_button" id="dtMembCovGrpDetail_previous">Previous</span><span class="paginate_page">Page </span><input class="paginate_input" type="text"><span class="paginate_of"></span><span class="next paginate_button" id="dtMembCovGrpDetail_next">Next</span><span class="last paginate_button" id="dtMembCovGrpDetail_last">Last</span></div></div>' +
			'</div></div></div>' +
			'<input data-val="true" data-val-number="The field StatusID must be a number." data-val-required="The StatusID field is required." id="StatusID" name="StatusID" type="hidden" value="211"><input data-val="true" data-val-number="The field MemberID must be a number." data-val-required="The MemberID field is required." id="MemberID" name="MemberID" type="hidden" value="0"><input data-val="true" data-val-number="The field MemberCoverageGroupDetailID must be a number." data-val-required="The MemberCoverageGroupDetailID field is required." id="MemberCoverageGroupDetailID" name="MemberCoverageGroupDetailID" type="hidden" value="0"></form>');
	}
	//get member variables 
	get dropdownOutterHtml() { return this._dropdownOutterHtml; }
	get dropdownInnerHtml() { return this._dropdownInnerHtml; }
	get isDropdownEnabled() { return this._isDropdownEnabled; }
	//set member variables
	set dropdownOutterHtml(newHtml) { this._dropdownOutterHtml = newHtml; }
	set dropdownInnerHtml(newValue) { this._dropdownInnerHtml = newValue; }
	set isDropdownEnabled(newValue) { this._isDropdownEnabled = newValue; }
	//member functions 
	addDropdownToDOM() {
		if (this._isDropdownEnabled === 'true') { this._dropdownOutterHtml.appendTo($('.panel-info')).after(this.addInnerHtmlToDropdown()); }
	}

	addInnerHtmlToDropdown() {
		this._dropdownInnerHtml.appendTo('#divPrimaryFacilityLab');
	}
	}

	var labFacilityModule = new LabFacility();
	labFacilityModule.addDropdownToDOM();
})();
