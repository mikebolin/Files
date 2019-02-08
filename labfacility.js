'use strict';
(function (window, document) {


class LabFacility {
	constructor() {
		this._isFacilAcityModal = false; this._isLabModal = false; this._isReadonly = false; this._isFullAccess = false; this._isEditPrivledges = false; this._isDeletePrivledges; this._AccessRights = '';
		this._Modal = $('<div class="modal fade in" id="facModal" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: block; padding-right: 17px;"> <div class="modal-dialog" id="modalDialogProcessingTwo"> <div class="modal-content" id="modalContentProcessingTwo"> <div class="modal-header"> <div> <h3 class="modal-title" id="mTitle"><span id="titleForFac">Change Primary Facility</span></h3></div></div><div class="modal-body"> <div class="row"> <div class="col-md-4"> <label id="DDLLabel">*New Primary Facility</label> <div class="form-group"> <select class="form-control selectpicker" data-live-search="true" id="ddlNewProviderFromChangeFacility" name="ddlNewProviderFromChangeFacility" data-bv-field="ddlNewProviderFromChangeFacility" style="display: none;"> <option value="0">--Select--</option> </select> <div class="btn-group bootstrap-select form-control"> <button type="button" style="font-weight:normal;height:30px;" class="btn dropdown-toggle selectpicker skipDisable btn-default" data-toggle="dropdown" data-id="ddlNewProviderFromChangeFacility" title="--Select--" aria-expanded="false"> <span class="filter-option pull-left">--Select--</span>&nbsp;<span class="caret"></span> </button> <div class="dropdown-menu open" style="max-height: 260px; overflow: hidden; min-height: 38px; z-index: 1000;"> <div class="bootstrap-select-searchbox"> <input type="text" autocomplete="off" data-dataurl="" data-ctrlid="ddlNewProviderFromChangeFacility" class="input-block-level items form-control skipDisable"> </div><ul class="dropdown-menu inner selectpicker" role="menu" style="max-height: 215px; overflow-y: auto; min-height: 0px; z-index: 1000;"> <li rel="0" class="selected active"><a tabindex="0" class="" style="min-height:20px;"><span class="text">--Select--</span> <i class="glyphicon glyphicon-ok icon-ok check-mark"></i></a></li></ul> </div></div><small data-bv-validator="dropdown" data-bv-validator-for="ddlNewProviderFromChangeFacility" class="help-block" style="display: none;">New Provider is required.</small></div></div><div class="col-md-3"> <label>*Effective Date</label> <div class="form-group"> <div class="input-group date" id="EffDateChangePrimFacility"> <input class="form-control datepicker callautofilldatetime" id="EffDateChangePrimFacilityMask" name="EffDateChangePrimFacilityMask" placeholder="MM/DD/YYYY" type="text" value="" maxlength="10" autocomplete="off" data-bv-field="EffDateChangePrimFacilityMask"> <span class="input-group-addon"> <span class="glyphicon-calendar glyphicon" id="spneffDate"></span> </span> </div><small data-bv-validator="notEmpty" data-bv-validator-for="EffDateChangePrimFacility" class="help-block" style="display: none;">Effective Date is required.</small><small data-bv-validator="date" data-bv-validator-for="EffDateChangePrimFacility" class="help-block" style="display: none;">Invalid date.</small></div></div><script>$(function(){$("#EffDateChangePrimFacilityMask").datetimepicker({autoclose: true })});</script><div class="col-md-3"> <label>Termination Date</label> <div class="form-group"> <div class="input-group date" id="TermDateChangeFacility"> <input class="form-control datepicker callautofilldatetime" id="TermDateChangePrimFacilityMask" name="TermDateChangeFacility" placeholder="MM/DD/YYYY" type="text" value="" maxlength="10" autocomplete="off" data-bv-field="TermDateChangeFacility"> <span class="input-group-addon"> <span class="glyphicon-calendar glyphicon"></span> </span> </div><small data-bv-validator="date" data-bv-validator-for="PCPTermDate" class="help-block" style="display: none;">Invalid Date.</small><small data-bv-validator="compareDate" data-bv-validator-for="TermDateChangeFacility" class="help-block" style="display: none;">Terminated date should be greater than the Effective date.</small></div></div><script>$(function(){$("#TermDateChangePrimFacilityMask").datetimepicker({ autoclose: true})});</script></div><div> <div id="divRoleProcessing" class="icon-loading icon-loading-small paddig-right-150 hide"></div><button type="button" id="btnPrimaryFacDoneChange" name="" class="btn btn-primary"> Done</button> <button type="button" class="btn btn-danger" id="closeFacModal">Close</button> </div></div></div></div></div>');
		this._JsonTableData = '';
		this._dropdownOutterHtmlGreen = $('<div class="panel-group " id="PrimaryFacilityLab"><div class="panel panel-default"><div class="panel-heading green-panel-gradient" data-toggle="collapse" data-target="#divPrimaryFacilityLab" data-parent="#divPrimaryFacilityLab" aria-expanded="true"><span class="panel-title">Primary Facility/Lab</span><i class="indicator glyphicon pull-right glyphicon-chevron-down"></i></div><div id="divPrimaryFacilityLab" class="panel-collapse collapse in" aria-expanded="true" style=""></div></div></div>');
		this._canDelete = false; this._canEdit = false; this._canAdd = false; this._canReadonly = false; this._isDropdownEnabled = 'true'; this._dataTable = ''; 
		this._dropdownOutterHtml = $('<div class="panel-group " id="PrimaryFacilityLab"><div class="panel panel-default"><div class="panel-heading collapsed" data-toggle="collapse" data-target="#divPrimaryFacilityLab" data-parent="#divPrimaryFacilityLab" aria-expanded="false"><span class="panel-title">Primary Facility/Lab</span><i class="indicator glyphicon pull-right glyphicon-chevron-up"></i></div><div id="divPrimaryFacilityLab" class="panel-collapse collapse" aria-expanded="false" style="height: 0px;"></div></div></div>'); 
		this._dropdownInnerHtml = $('<form action="" id="formFacilityModule" method="post"><div><div class="row"><div class="col-md-12"><div class="alert hide" id="divMembCovGrpDetailMessage"><button type="button" class="close" data-target="divMembCovGrpDetailMessage"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button><span id="idMembCovGrpDetailMessage"></span></div></div></div><div class="row"><div class="col-md-6"><div class="row"><div class="col-md-6"><div class="row"><div class="col-md-6"><label>* Effective Date</label><div class="form-group"><div class="input-group date " id="LabFacilityEffDate"><input class="form-control datepicker" id="LabFacilityEffDatePicker" maxlength="10" name="EffectiveDate" placeholder="MM/DD/YYYY" type="text" value="" autocomplete="off"><span class="input-group-addon"><span class="glyphicon-calendar glyphicon"></span></span></div></div></div><div class="col-md-6"><label>Term Date</label><div class="form-group"><div class="input-group date " id="LabFacilityTermDate"><input class="form-control datepicker" id="LabFacilityTermDatePicker" maxlength="10" name="TermDate" placeholder="MM/DD/YYYY" type="text" value="" autocomplete="off"><span class="input-group-addon"><span class="glyphicon-calendar glyphicon"></span></span></div></div></div></div></div><div class="col-md-3"><br><button id="facilityLookup" name="Facility Lookup" type="button" class="btn btn-primary" style="width: 100%; height: 30px;" >Facility Lookup</button></div><div class="col-md-3"><label>Primary Facility ID</label><input class="form-control" id="PrimaryFacilityID" readonly="readonly" maxlength="30" name="PrimaryFacilityID" type="text" value=""></div></div></div><div class="col-md-6"><div class="row"><div class="col-md-3"><label>Facility Name</label><input class="form-control" style="width:225%" id="FacilityName" maxlength="100" readonly="readonly" name="FacilityName" type="text" value=""></div></div></div></div><br><div class="row"><div class="col-md-6"><div class="row"><div class="col-md-6"><label>Street Address #1</label><input class="form-control" id="StreetAddress1Facility" maxlength="100" name="StreetAddress1Facility" readonly="True" type="text" value=""></div><div class="col-md-6"><label>Street Address #2</label><input class="form-control" id="StreetAddress2Facility" maxlength="100" name="StreetAddress2Facility" readonly="True" type="text" value=""></div></div></div><div class="col-md-6"><div class="row"><div class="col-md-3"><label>City</label><input class="form-control" id="txtFacilityCity" maxlength="50" name="City" readonly="True" type="text" value=""></div><div class="col-md-3"><label>State</label><div class="form-group divErrorMsg"><select id="ddlFacilityState" name="StateID" disabled="disabled" style="display: none;"><option value="0">--Select--</option></select><div class="btn-group bootstrap-select form-control MainState"><button type="button" style="font-weight:normal;height:30px;" class="btn dropdown-toggle selectpicker skipDisable btn-default disabled" data-toggle="dropdown" data-id="ddlLabState" title="--Select--" tabindex="-1"><span class="filter-option pull-left">--Select--</span>&nbsp;<span class="caret"></span></button><div class="dropdown-menu open" style="max-height: 260px; overflow: hidden; min-height: 38px; z-index: 1000;"><div class="bootstrap-select-searchbox"><input type="text" autocomplete="off" data-dataurl="" data-ctrlid="ddlLabState" class="input-block-level items form-control skipDisable"></div><ul class="dropdown-menu inner selectpicker" role="menu" style="max-height: 215px; overflow-y: auto; min-height: 0px; z-index: 1000;"><li rel="0" class="disabled selected active"><a tabindex="-1" class="" style="min-height:20px;" href="#"><span class="text">--Select--</span><i class="glyphicon glyphicon-ok icon-ok check-mark"></i></a></li></ul></div></div></div></div><div class="col-md-3"><label>Zip Code</label><input class="form-control" id="txtFacilityZip" maxlength="10" name="txtFacilityZip" readonly="True" type="text" value="" autocomplete="off"></div><div class="col-md-3"><label>County</label><input class="form-control" id="txtFacilityCounty" name="County" readonly="True" type="text" value=""></div></div></div></div><br><div class="row"><div class="col-md-1"><br><div class="form-group"><button id="LabLookup" name="LabLookup" type="button" class="btn btn-primary form-control" data-toggle="modal">Lab Lookup</button></div></div> <div class="col-md-2"><label>Primary Lab ID</label><div class="form-group"><input type="text" class="form-control" readonly="readonly" id="PrimaryLabID"></div></div><div class="col-md-2"><label>Primary Lab</label><div class="form-group"><input type="text" class="form-control" readonly="readonly" id="txtPrimaryLab"></div></div><div class="col-md-1 hide"><br><div class="form-group"><button id="btnPrimaryLablookup" name="btnPrimaryLablookup" type="button" class="btn btn-primary form-control" data-toggle="modal" data-target="#lookUpProvider">Lab Lookup</button></div></div></div><br><div class="row"> <div class="col-md-6"><div class="row"><div class="col-md-6"><label>Street Address #1</label><input class="form-control" id="StreetAddress1Lab" maxlength="100" name="StreetAddress1Lab" readonly="True" type="text" value=""></div><div class="col-md-6"><label>Street Address #2</label><input class="form-control" id="StreetAddress2Lab" maxlength="100" name="StreetAddress2Lab" readonly="True" type="text" value=""></div></div></div> <div class="col-md-6"><div class="row"><div class="col-md-3"><label>City</label><input class="form-control" id="txtLabCity" maxlength="50" name="txtLabCity" readonly="True" type="text" value=""></div><div class="col-md-3"><label>State</label><div class="form-group divErrorMsg"><select class="form-control MainState selectpicker" data-live-search="true" data-val="true" id="ddlLabState" name="StateID" readonly="True" disabled="disabled" style="display: none;"><option value="0">--Select--</option></select><div class="btn-group bootstrap-select form-control MainState"><button type="button" style="font-weight:normal;height:30px;" class="btn dropdown-toggle selectpicker skipDisable btn-default disabled" data-toggle="dropdown" data-id="ddlLabState" title="--Select--" tabindex="-1"><span class="filter-option pull-left">--Select--</span>&nbsp;<span class="caret"></span></button><div class="dropdown-menu open" style="max-height: 260px; overflow: hidden; min-height: 38px; z-index: 1000;"><div class="bootstrap-select-searchbox"><input type="text" autocomplete="off" data-dataurl="" data-ctrlid="ddlCovddlLabStateeragePCPState" class="input-block-level items form-control skipDisable"></div><ul class="dropdown-menu inner selectpicker" role="menu" style="max-height: 215px; overflow-y: auto; min-height: 0px; z-index: 1000;"><li rel="0" class="disabled selected active"><a tabindex="-1" class="" style="min-height:20px;" href="#"><span class="text">--Select--</span><i class="glyphicon glyphicon-ok icon-ok check-mark"></i></a></li></ul></div></div></div></div><div class="col-md-3"><label>Zip Code</label><input class="form-control" id="txtLabZipCode" maxlength="10" name="txtLabZipCode" readonly="True" type="text" value="" autocomplete="off"></div><div class="col-md-3"><label>County</label><input class="form-control" id="txtLabCounty" name="txtLabCounty" readonly="True" type="text" value=""></div></div></div></div><div class="row"><div class="col-md-6"><div class="row"><div class="col-md-6"><div class="row"><div class="col-md-6"><button id="btnAddPrimaryFacility" name="btnAddPrimaryFacility" type="button" class="btn btn-success " style="width: 100%">Add To List</button>&nbsp;</div><div class="col-md-6"><button id="btnCancelPrimaryFacility" name="btnCancelPrimaryFacility" type="button" class="btn btn-danger" style="width: 100%">Cancel</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div></div></div></div></div><div class="col-md-6"><div class="row"><div class="col-md-3"></div><div class="col-md-3"></div><div class="col-md-3"></div><div class="col-md-3"><label><input id="PrimaryLabFacilityViewAllStatus" name="PrimaryLabFacilityViewAllStatus" type="checkbox" value="true"><input name="MembGrpDetailIsViewAllStatus" type="hidden" value="false"> View All Statuses </label></div></div></div></div><div class="row"> <div class="col-md-12"> <table cellpadding="0" cellspacing="0" border="0" class="table table-bordered table-stripped table-hover" id="dtPrimaryLabFacility"> <thead> <tr><th id="tbl_edit" style="width: 15px;"></th><th id="tbl_delete" style="width: px;"></th><th>Effective Date</th> <th>Term Date</th> <th>Primary Facility ID</th> <th>Facility LOC ID</th> <th>Facility Name</th> <th>Primary Lab ID</th> <th>Lab LOC ID</th> <th>Lab Name</th> <th>Status</th> </tr></thead> </table> </div></div></div></div><input data-val="true" data-val-number="The field StatusID must be a number." data-val-required="The StatusID field is required." id="StatusID" name="StatusID" type="hidden" value="211"><input data-val="true" data-val-number="The field MemberID must be a number." data-val-required="The MemberID field is required." id="MemberID" name="MemberID" type="hidden" value="0"><input data-val="true" data-val-number="The field MemberCoverageGroupDetailID must be a number." data-val-required="The MemberCoverageGroupDetailID field is required." id="MemberCoverageGroupDetailID" name="MemberCoverageGroupDetailID" type="hidden" value="0"></form>');

	}
	get isReadonly() { return this._isReadonly; } set isReadonly(newVal) {
		this._isReadonly = newVal;
	}
	get isFullAccess() { return this._isFullAccess; } set isFullAccess(newVal) {
		this._isFullAccess = newVal;
	}
	get isEditPrivledges() { return this._isEditPrivledges; } set isEditPrivledges(newVal) {
		this._isEditPrivledges = newVal;
	}
	get isDeletePrivledges() { return this._isDeletePrivledges; } set isDeletePrivledges(newVal) {
		this._isDeletePrivledges = newVal;
	}

	get isFacilityModal() { return this._isFacilityModal; } set isFacilityModal(newVal) {
		this._isFacilityModal = newVal;
	}
	get isLabModal() { return this._isLabModal; } set isLabModal(newVal) {
		this._isLabModal = newVal;
	}
	get dropdownOutterHtmlGreen() { return _this.dropdownOutterHtmlGreen; }
	set dropdownOutterHtmlGreen(newVal) { this._dropdownOutterHtmlGreen = newVal;}
	get JsonTableData() { return _this._JsonTableData; }
	set JsonTableData(data) { this._JsonTableData = data; } get dropdownOutterHtml() { return this._dropdownOutterHtml; } get dataTable() { return this._dataTable; } get dropdownInnerHtml() { return this._dropdownInnerHtml; } get isDropdownEnabled() { return this._isDropdownEnabled; } set dropdownOutterHtml(newHtml) { this._dropdownOutterHtml = newHtml; } set dataTable(newHtml) { this._dataTable = newHtml; } set dropdownInnerHtml(newValue) { this._dropdownInnerHtml = newValue; } set isDropdownEnabled(newValue) { this._isDropdownEnabled = newValue; }
	showChangePrimaryLabModal() {
		this._isLabModal = true;
		this._isFacilityModal = false;
		$('#mTitle').text('Change Primary Lab'); 
		$('#DDLLabel').text('New Primary Lab'); 
		this._Modal.modal('show');
	}
	hideChangePrimaryLabModal() {
		this._Modal.modal('hide');
	}
	showChangePrimaryFacilityModal() {
		this._isLabModal = false;
		this._isFacilityModal = true;
		$('#mTitle').text('Change Primary Facility');
		$('#DDLLabel').text('New Primary Facility');
		$('#DDLLabel').selectpicker('refresh');
		this._Modal.modal('show');
	}
	hideChangePrimaryFacilityModal() {
		this._Modal.modal('hide');
	}
	validator() {
		$('#formFacilityModule').bootstrapValidator({
			fields: {
				LabFacilityEffDatePicker: {
					selector: '#LabFacilityEffDatePicker',
					validators: {
						callback: {
							message: "Effective Date is required.",
							callback: function (value, validator, $field) {
								var effDate = $('#LabFacilityEffDatePicker').val(); if (effDate === "" || effDate === '') { return false; } else { return true; }
							}
						}
					}
				},
				LabFacilityTermDatePicker:
				{
					selector: '#LabFacilityTermDatePicker',
					validators: {
						callback: {
							message: "Invalid Term Date",
							callback: function (value, validator, $field) {
								var effDate = $('#LabFacilityEffDatePicker').val(); var termnDate = $('#LabFacilityTermDatePicker').val();
								if (termnDate === "" || termnDate === '') { return true; }
								else { if (effDate > termnDate) return false; if (effDate <= termnDate) return true; }
							}
						}
					}

				}
			}
		});
	}

	convertToExcelChar(num) { var s = '', t; while (num > 0) { t = (num - 1) % 26; s = String.fromCharCode(65 + t) + s; num = (num - t) / 26 | 0; } return s || undefined; }
	ConvertDateToProperFormat(testdate) {
		var aDate = new Date(testdate);
		var dd = aDate.getDate();
		var mm = aDate.getMonth() + 1;
		var yyyy = aDate.getFullYear();
		if (dd < 10) { dd = '0' + dd; }
		if (mm < 10) { mm = '0' + mm }
		var masked = dd + '/' + mm + '/' + yyyy;
		return masked;

	}
	setEventListeners() {

		$('th').on('click', function () { $("#tbl_edit").removeClass(); $("#tbl_delete").removeClass(); $("#tbl_edit").addClass("sorting_disabled"); $("#tbl_delete").addClass("sorting_disabled"); $('#tbl_delete').selectpicker('refresh'); $('#tbl_edit').selectpicker('refresh'); });
		$('#btnCancelPrimaryFacility').on('click', function () {
			$('#LabFacilityTermDatePicker').val('');
			$('#LabFacilityEffDatePicker').val('');
			$('#PrimaryLabID').val('');
			$('#txtPrimaryLab').val('');
			$('#StreetAddress1Lab').val('');
			$('#StreetAddress2Lab').val('');
			$('#txtLabCity').val('');
			$('#txtLabZipCode').val('');
			$('#txtLabCounty').val('');
			$('#PrimaryFacilityID').val('');
			$('#FacilityName').val('');
			$('#StreetAddress1Facility').val('');
			$('#StreetAddress2Facility').val('');
			$('#txtFacilityCity').val('');
			$('#txtFacilityZip').val('');
			$('#txtFacilityCounty').val('');
		}.bind(this));

		$('#btnAddPrimaryFacility').on('click', function () {
			$("#formFacilityModule").submit();
			var isValid = $("#formFacilityModule").data('bootstrapValidator').isValid();
			if (isValid) { this.addRow(); var counter = 1; }
		}.bind(this));
	
		window.addEventListener("click", (event) => {
			var target = event.target || event.srcElement;
			var id = target.id;
			$('a').click(function (e) {
				e.preventDefault();
				e.stopImmediatePropagation();
			alert('clicked implement these ');
			return false;
			});
			if (id === 'EffDateChangePrimLabMask') {
				$("#EffDateChangePrimLabMask").selectpicker('refresh');
			}
			if (id === 'setFullAccess') {
				alert('setting module to full access privledges');
				this._isFullAccess = true;
				this._isReadonly = false;
				this._isEditPrivledges = true;
				this._isDeletePrivledges = true;

				this._isDeletePrivledges = true; this._isEditPrivledges = true;
				$("#PrimaryFacilityLab").find("*").each(function (index) { $(this).attr('readonly', false); $(this).attr('disabled', false); });
				$("#PrimaryFacilityLab").find("input").each(function (index) { $(this).attr('disabled', true); $(this).attr('readonly', true); });
				$("#PrimaryFacilityLab").find("form-group").each(function (index) { $(this).attr('readonly', false); $(this).attr('disabled', false); });
				$("#dtPrimaryLabFacility_wrapper").find("*").each(function (index) { $(this).attr('readonly', false); $(this).attr('disabled', false); });
				$("#LabFacilityEffDate").find("*").each(function (index) { $(this).attr('readonly', false); $(this).attr('disabled', false); });
				$("#LabFacilityTermDate").find("*").each(function (index) { $(this).attr('readonly', false); $(this).attr('disabled', false); });

			}
			if (id === 'setReadonlyForModule') {
				this._isFullAccess = false;
				this._isReadonly = true;
				$("#divPrimaryFacilityLab").find("*").each(function (index) {
					$(this).attr('readonly', true);
					$(this).attr('disabled', true);
				});
				$("#dtPrimaryLabFacility_wrapper").find("*").each(function (index) {
					$(this).attr('disabled', true);
					$(this).attr('readonly', true);
				});
				alert('setting module to read only privledges');
				
			}
			if (id === 'EffDateChangePrimFacilityMask') {
	
			}
			if (id === 'facilityLookup') {

				$("#EffDateChangePrimFacilityMask").val('');
				$("#TermDateChangePrimFacilityMask").val('');
				this.showChangePrimaryFacilityModal();
			}
			if (id === 'LabLookup') {
				$("#EffDateChangePrimFacilityMask").val('');
				$("#TermDateChangePrimFacilityMask").val('');
				this.showChangePrimaryLabModal();
			}
			if (id === 'closeLabModal') {
				this.hideChangePrimaryLabModal();
			}
			if (id === 'btnPrimaryLabDoneChange') {
				alert('grab the data and populate it to screen, making sure the add to list button is not in update state.');
				this.hideChangePrimaryLabModal();
			}
			if (id === 'closeFacModal') {
				this.hideChangePrimaryFacilityModal();
			}
			if (id === 'btnPrimaryFacDoneChange') {
				alert('grab the data and populate it to screen, making sure the add to list button is not in update state.');
				this.hideChangePrimaryFacilityModal();
			}
		});

	}
	addDropdownToDOM(val) {
		var myButton2 = $('<button id="setFullAccess" type = "button" >set full access</button>');
		myButton2.appendTo('body');
		var myButton = $('<button id="setReadonlyForModule" type = "button" >set readonly access</button>');
		myButton.appendTo('body');

		if (val === 'blue')
		{
			if (this._isDropdownEnabled === 'true') {
				this._dropdownOutterHtml.appendTo($('body')).after(this.addInnerHtmlToDropdown()).after(this.runSetupCalls());
			}
		}
		if (val === 'green')
		{
			if (this._isDropdownEnabled === 'true') {
				this._dropdownOutterHtmlGreen.appendTo($('body')).after(this.addInnerHtmlToDropdown()).after(this.runSetupCalls());
			}
		}

	}
	runSetupCalls() {
		this.validator();
		this.setEventListeners();
		this.setAccessRights();

	}
	addInnerHtmlToDropdown() {
		this._dropdownInnerHtml.appendTo("#divPrimaryFacilityLab"), $("#LabFacilityEffDatePicker").mask("99/99/9999"), $("#LabFacilityEffDatePicker").datepicker({ autoclose: true }), $("#LabFacilityTermDatePicker").mask("99/99/9999"), $("#LabFacilityTermDatePicker").datepicker({ autoclose: true}), this._dataTable = $("#dtPrimaryLabFacility").DataTable({ paging: !0, destroy: !0, pagingType: "input" }), $("#tbl_edit").text("Edit"), $("#tbl_delete").text("Delete"), $("#tbl_edit").removeClass(), $("#tbl_delete").removeClass(), $("#tbl_edit").addClass("sorting_disabled"), $("#tbl_delete").addClass("sorting_disabled"), $("#tbl_delete").selectpicker("refresh"), $("#tbl_edit").selectpicker("refresh");
	}
	enableAll() {
		$("#divPrimaryFacilityLab").find("*").each(function (i) { $(this).hasClass("btn dropdown-toggle selectpicker skipDisable btn-default disabled") && $(this).removeClass("btn dropdown-toggle selectpicker skipDisable btn-default disabled").addClass("btn dropdown-toggle selectpicker skipDisable btn-default"); }), $("#divPrimaryFacilityLab").find("input, button").each(function (i) { $(this).attr("readonly", !1); }), $("#divPrimaryFacilityLab").find("input, button").each(function (i) { $(this).attr("disabled", !1) }), $("#divPrimaryFacilityLab").find("li").each(function (i) { $(this).hasClass("disabled selected active") && $(this).removeClass("disabled selected active").addClass("selected active") }), $("#PrimaryLabFacilityViewAllStatus").prop("disabled", !1), $("#divPrimaryFacilityLab").find("*").each(function (i) { $(this).attr("readonly", !1) }), $("#divPrimaryFacilityLab").find("*").each(function (i) { $(this).attr("disabled", !1); });
	}

	disableAll() { $("#divPrimaryFacilityLab").find("*").each(function (index) { $(this).attr('readonly', true); }); $("#divPrimaryFacilityLab").find("*").each(function (index) { $(this).attr('disabled', true); }); }


	setAccessRights() {
		switch (this._AccessRights) {
			case 'Full': { this._isDeletePrivledges = true; this._isEditPrivledges = true; $("#LabFacilityEffDatePicker").find("*").each(function (index) { $(this).attr('readonly', false); }); $("#LabFacilityEffDatePicker").find("*").each(function (index) { $(this).attr('disabled', false); }); break; }
			case 'Readonly': { alert('case');this.isReadonly = true; this.isDeletePrivledges = false; this.isEditPrivledges = false; $("#divPrimaryFacilityLab").find("*").each(function (index) { $(this).attr('readonly', true); }); $("#divPrimaryFacilityLab").find("*").each(function (index) { $(this).attr('disabled', true); }); break; }
			case 'Delete':{this._canDelete = true; break;}
			case 'Edit':{this._canEdit = true; break;}
			case 'Add':{this._canAdd = true; break;}}
	}

	addListToTable(data) {
		var myData = this._JsonTableData.map(a => a.MemberPrimaryFacilityLabID);
		for (var i = 0; i < myData.length; i++) {
			var obj = data.pop();

			if ((this._isFullAccess === true) || (this._isEditPrivledges === true && this.isDeletePrivledges === true))
				this._dataTable.row.add([
					'<a href="javascript:this.EditMemberPCPinfo(' + obj.MemberPrimaryFacilityLabID + ')"><span class="glyphicon glyphicon-pencil"></span></a>',
					'<a href="javascript:this.EditMemberPCPinfo(' + obj.MemberPrimaryFacilityLabID + ')"><span class="error glyphicon glyphicon-trash"></span></a>',
					this.ConvertDateToProperFormat(obj.EffectiveDate),
					this.ConvertDateToProperFormat(obj.TermDate),
					obj.PrimaryFacilityID,
					this.convertToExcelChar(obj.PrimaryLabLocationID),
					'facilityname',
					obj.PrimaryLabID,
					this.convertToExcelChar(obj.PrimaryFacilityLocationID),
					'labname',
					obj.StatusID
				]).draw(false);
			else if (!this._isFullAccess) {
				if (this._isEditPrivledges === true) {
					this._dataTable.row.add([
						'<a href="javascript:this.EditMemberPCPinfo(' + obj.MemberPrimaryFacilityLabID + ')"><span class="glyphicon glyphicon-pencil"></span></a>',
						'',
						this.ConvertDateToProperFormat(obj.EffectiveDate),
						this.ConvertDateToProperFormat(obj.TermDate),
						obj.PrimaryFacilityID,
						this.convertToExcelChar(obj.PrimaryLabLocationID),
						'facilityname',
						obj.PrimaryLabID,
						this.convertToExcelChar(obj.PrimaryFacilityLocationID),
						'labname',
						obj.StatusID
					]).draw(false);
				}
				if (this._isDeletePrivledges === true) {
					this._dataTable.row.add([
						'',
						'<a href="javascript:this.EditMemberPCPinfo(' + obj.MemberPrimaryFacilityLabID + ')"><span class="error glyphicon glyphicon-trash"></span></a>',
						this.ConvertDateToProperFormat(obj.EffectiveDate),
						this.ConvertDateToProperFormat(obj.TermDate),
						obj.PrimaryFacilityID,
						this.convertToExcelChar(obj.PrimaryLabLocationID),
						'SomeFacilityNameWillQueryForThis',
						obj.PrimaryLabID,
						this.convertToExcelChar(obj.PrimaryFacilityLocationID),
						'SomeLabNameWillQueryForThis',
						obj.StatusID
					]).draw(false);
				}
			}
		}
	}

	addRow() {
		var addEditButton = $('<a href="javascript:this.EditMemberPCPinfo(321834)"><span class="glyphicon glyphicon-pencil"></span></a>');
		var addDeleteButton = $('<a href="javascript:this.EditMemberPCPinfo(328086)"><span class="error glyphicon glyphicon-trash"></span></a>');
		var addEffDate = $('#LabFacilityEffDatePicker').val();
		var addTermDate = $('#LabFacilityTermDatePicker').val();
		var addPrimaryFacilityID = $('#PrimaryFacilityID').val();
		var locationID1 = 'some location ID I have to get';
		var addFacilityName = $('#FacilityName').val();
		var addPrimaryLabID = $('#PrimaryLabID').val();
		var locationID2 = 'some other location ID I have to get';
		var addtxtPrimaryLab = $('#txtPrimaryLab').val();
		var someStatus = 'some status';

		$('#PrimaryFacilityID').val('test PrimaryFacilityID');
		$('#addFacilityName').val('test addFacilityName');
		$('#PrimaryLabID').val('test PrimaryLabID');
		$('#txtPrimaryLab').val('test txtPrimaryLab');
		$('#FacilityName').val('test addFacilityName');
		var editButton;
		if ((this._isEditPrivledges) || (this._isFullAccess)) {
			editButton = '<a href="javascript:EditMemberPCPinfo(321834)"><span class="glyphicon glyphicon-pencil"></span></a>'
		}
		else {
			editButton = '';
		}

		var delButton;
		if ((this._isDeletePrivledges) || (this._isFullAccess)) {
			delButton = '<a href="javascript:EditMemberPCPinfo(328086)"><span class="error glyphicon glyphicon-trash"></span></a>'
		}
		else {
			editButton = '';
		}
		this._dataTable.row.add([
			'<a href="javascript:EditMemberPCPinfo(321834)"><span id="pencil" class="glyphicon glyphicon-pencil"></span></a>',
			'<a href="javascript:EditMemberPCPinfo(328086)"><span id="trash" class="error glyphicon glyphicon-trash"></span></a>',
			$('#LabFacilityEffDatePicker').val(),
			$('#LabFacilityTermDatePicker').val(),
			$('#PrimaryFacilityID').val(),
			locationID1,
			$('#FacilityName').val(),
			$('#PrimaryLabID').val(),
			locationID2,
			$('#txtPrimaryLab').val(),
			someStatus
		]).draw(false);
	}

	populateTableFromDB() {
		var theEnvName; var theFullText;
		var envFull = window.location.href;
		var path = new URL(window.location.href).pathname;
		var splitPath = path.split('/'); var next = false;
		var MyMemberID = '';
		splitPath.forEach(function (element) { try { var test = parseInt(element); if (Number.isInteger(test)) { MyMemberID = element; } } catch (error) { alert(error); } });
		$.ajax({
			crossDomain: true, async: true, url: 'http://localhost:64138/api/Member/GetPrimaryFacilityLabTable', dataType: "json", contentType: "application/json; charset=utf-8", data: { MemberID: MyMemberID },
			success: function (data) {
				this._JsonTableData = JSON.parse(data);
				this.addListToTable(JSON.parse(data));
			}.bind(this),
			error: function (error) { console.log('error'); return; }.bind(this)
		});

	}

	}						
	var labFacilityModule = new LabFacility();
		var txt;
		var r = confirm("Press OK to load green, press cancel to load blue. This logic will be implemented once the query logic is straigtened out in the PBI. ");
		if (r == true) {
			labFacilityModule.addDropdownToDOM('green');
		} else {
			labFacilityModule.addDropdownToDOM('blue');;
		}


})(window, document);
