'use strict';
(function () {
class TimerTest {
	constructor() {this._hours = '';this._minutes = '';this._seconds = ''; }
	get hours() { return this._hours; }
	get minutes() { return this._minutes; }
	get seconds() { return this._seconds; }
	set hours(val) { this._hours = val; }
	set minutes(val) { this._minutes = val; }
	set seconds(val) { this._seconds = val; }
	getDate(timestamp) {let date = new Date(timestamp);let year = date.getUTCFullYear();let month = date.getUTCMonth() + 1; let day = date.getUTCDate();let hours = date.getUTCHours();let minutes = date.getUTCMinutes();let seconds = date.getUTCSeconds();month = (month < 10) ? '0' + month : month;day = (day < 10) ? '0' + day : day;hours = (hours < 10) ? '0' + hours : hours;minutes = (minutes < 10) ? '0' + minutes : minutes;seconds = (seconds < 10) ? '0' + seconds: seconds;return new Date(year, (month-1), day, hours, minutes, seconds); }
	getNowUTC(){let date = new Date();let now_utc =  Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds()); return new Date(now_utc);}
	
	startTimer(year, month, day, hour, minutes, seconds, milliseconds) {
	let nowUTC = this.getDate(this.getNowUTC());
	let countDownDate = new Date(year, month, day, hour, minutes, seconds, milliseconds).getTime(); 

	console.log('nowUTC', nowUTC);
	console.log('countDownDate', countDownDate);
	}
	
	}

	var TimerTest = new TimerTest();
	TimerTest.startTimer();
})();
