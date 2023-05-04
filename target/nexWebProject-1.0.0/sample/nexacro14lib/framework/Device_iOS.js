//==============================================================================
//
//  TOBESOFT Co., Ltd.
//  Copyright 2014 TOBESOFT Co., Ltd.
//  All Rights Reserved.
//
//  NOTICE: TOBESOFT permits you to use, modify, and distribute this file 
//          in accordance with the terms of the license agreement accompanying it.
//
//  Readme URL: http://www.nexacro.co.kr/legal/nexacro-public-license-readme-1.1.html	
//
//==============================================================================

if (nexacro.OS == "iOS" && window.location.pathname.split('/').pop() == "Run.html") {
	nexacro.DeviceI.prototype.setup = function () {
		this._userCreatedObj = {
		};
		this.curDevice = 0;
		this.isphone = 0;
		this._is_hybrid = true;
		this._protocolparameters = {
		};
		this._use_fakexhr = false;

		var queries = location.search.substring(1).split('&');
		for (var i = 0; i < queries.length; i++) {
			var query = queries[i].split('=');
			if (decodeURIComponent(query[0]) == "fake-xhr") {
				this._use_fakexhr = nexacro._toBoolean(decodeURIComponent(query[1]));
				break;
			}
		}

		if (nexacro.OS == "iOS") {
			this.curDevice = 1;
		}
	};

	nexacro.DeviceI.prototype.execiOS = function (method) {
		if (this.msgqueue.length > 0 && this.curDevice == 1) {
			this.msgqueue.reverse();
			this.bridge.src = "nexacro://?" + encodeURI(this.msgqueue.pop());
			this.msgqueue.reverse();
		}
	};

	nexacro.DeviceI.prototype.exec = function (method, sync) {
		if (this.isHybrid() == false) {
			return;
		}

		if (!sync) {
			window.webkit.messageHandlers.nexacro.postMessage(method);
		}
		else {
			return prompt("nexacro", method);
		}
	};

	nexacro.DeviceI.prototype._setCookie = function (name, value, days, bsecure) {
		if (this.isHybrid() == false) {
			return;
		}

		if (!this.channel_frame) {
			this.channel_frame = document.createElement("IFRAME");
			this.channel_frame.setAttribute("height", "0px");
			this.channel_frame.setAttribute("width", "0px");
			this.channel_frame.setAttribute("frameborder", "0");
			this.channel_frame.style.display = "none";
			this.channel_frame.onload = function () {
				nexacro.Device._setCookie(name, value, days, bsecure);
			};
			this.channel_frame.src = nexacro._transfullurl(nexacro._getLocalStorage("_project_uri", ""), "comm.html");
			document.documentElement.appendChild(this.channel_frame);
			return;
		}

		var doc = this.channel_frame.contentWindow.document;

		var expires = "";
		if (days) {
			if (typeof (days) == "string") {
				expires = "; expires=" + days;
			}
			else if ((typeof days) == "object" && (days instanceof Date)) {
				expires = "; expires=" + days.toGMTString();
			}
		}
		else {
			expires = "";
		}

		var cookiestr = name + "=" + value + expires + "; path=/";
		if (bsecure) {
			cookiestr += "; secure";
		}

		doc.cookie = cookiestr;
	};

	nexacro.DeviceI.prototype._getCookie = function (name) {
		if (this.isHybrid() == false) {
			return;
		}

		if (!this.channel_frame) {
			this.channel_frame = document.createElement("IFRAME");
			this.channel_frame.setAttribute("height", "0px");
			this.channel_frame.setAttribute("width", "0px");
			this.channel_frame.setAttribute("frameborder", "0");
			this.channel_frame.style.display = "none";
			this.channel_frame.src = nexacro._transfullurl(nexacro._getLocalStorage("_project_uri", ""), "comm.html");
			document.documentElement.appendChild(this.channel_frame);
		}

		var doc = this.channel_frame.contentWindow.document;

		var nameEQ = name + "=";
		var ca = doc.cookie.split(';');

		for (var i = 0, n = ca.length; i < n; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ') {
				c = c.substring(1);
			}
			if (c.indexOf(nameEQ) == 0) {
				return c.substring(nameEQ.length);
			}
		}
		return null;
	};

	nexacro._convertRealPath = function (strAlias) {
		if (nexacro.Device.isHybrid() == undefined || !nexacro.Device.isHybrid()) {
			return strAlias;
		}

		if (strAlias === undefined || strAlias === null) {
			return "";
		}
		var rootPathCheck = strAlias.substring(0, 9);
		var iosFilePath = "";
		if (rootPathCheck.toLowerCase() == "%userapp%") {
			iosFilePath = strAlias.substring(9, strAlias.length);
			return nexacro.System.userapppath + iosFilePath;
		}
		else {
			return strAlias;
		}
	};

	nexacro._isHybrid = function () {
		return nexacro.Device.isHybrid();
	};

	nexacro._useFakeXHR = function () {
		return nexacro.Device.useFakeXHR();
	};

	nexacro._checkDevicePermission = function (permission_types) {
		if (permission_types === undefined || permission_types === null) {
			return;
		}

		var params = '{"permissions":' + JSON.stringify(permission_types) + '}';
		var jsonstr = '{"id":null, "div":"Permission", "method":"checkDevicePermission", "params":' + params + '}';
		nexacro.Device.exec(jsonstr);
	};

	nexacro._requestDevicePermission = function (permission_types, description) {
		if (permission_types === undefined || permission_types === null) {
			return;
		}

		var params;
		if (description === undefined || description === null) {
			params = '{"permissions":' + JSON.stringify(permission_types) + ',"description":null}';
		}
		else {
			params = '{"permissions":' + JSON.stringify(permission_types) + ',"description":"' + description + '"}';
		}
		var jsonstr = '{"id":null, "div":"Permission", "method":"requestDevicePermission", "params":' + params + '}';
		nexacro.Device.exec(jsonstr);
	};

	nexacro._convertDatasetSSVToBIN = function (ssvdata) {
		return ssvdata;
	};
	nexacro._convertDatasetBINToSSV = function (bindata) {
		return bindata;
	};

	nexacro._convertStreamSSVToBIN = function (ssvdata) {
		return ssvdata;
	};
	nexacro._convertStreamBINToSSV = function (bindata) {
		return bindata;
	};

	nexacro._setProtocolVar = function (name, key, val) {
		var protocol = nexacro.Device._protocolparameters[name];

		if (protocol == undefined) {
			nexacro.Device._protocolparameters[name] = {
			};
			protocol = nexacro.Device._protocolparameters[name];
		}

		protocol[key] = val;

		return true;
	};

	nexacro._execBrowser = function (strUrl) {
		this._id = nexacro.Device.makeID();

		if (strUrl == null || strUrl == undefined) {
			return false;
		}

		var params = '{"url":"' + strUrl + '"}';
		var jsonstr = '{"id":' + this._id + ', "div":"Browser", "method":"execBrowser", "params":' + params + '}';

		nexacro.Device.exec(jsonstr);

		return true;
	};

	nexacro._setPreferencesValue = function (key, value) {
		if (!key) {
			return false;
		}

		var params = '{}';

		if (value) {
			params = '{"key":"' + key + '","value":"' + nexacro.Device.encodeString(value) + '"}';
		}
		else {
			params = '{"key":"' + key + '","value":undefined}';
		}

		var jsonstr = '{"id":0, "div":"Preferences", "method":"setPreferencesValue", "params":' + params + '}';

		nexacro.Device.exec(jsonstr);

		return true;
	};

	nexacro._initDeviceAPI();
}
