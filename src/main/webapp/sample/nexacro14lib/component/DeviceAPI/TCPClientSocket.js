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

if (!nexacro.Device && !nexacro.TCPClientSocket) {
	nexacro.SocketConnectEventInfo = function (obj, id, errmsg, errno) {
		this.id = this.eventid = id || "onconnect";
		this.fromobject = this.fromreferenceobject = obj;

		this.errmsg = errmsg;
		this.errno = errno;
	};
	var _pSocketConnectEventInfo = nexacro._createPrototype(nexacro.Event, nexacro.SocketConnectEventInfo);
	nexacro.SocketConnectEventInfo.prototype = _pSocketConnectEventInfo;
	_pSocketConnectEventInfo._type_name = "SocketConnectEventInfo";

	delete _pSocketConnectEventInfo;
	_pSocketConnectEventInfo = null;

	nexacro.SocketSendEventInfo = function (obj, id, bytesremain, bytessent, errmsg, errno) {
		this.id = this.eventid = id || "onsend";
		this.fromobject = this.fromreferenceobject = obj;

		this.bytesremain = bytesremain;
		this.bytessent = bytessent;
		this.errmsg = errmsg;
		this.errno = errno;
	};
	var _pSocketSendEventInfo = nexacro._createPrototype(nexacro.Event, nexacro.SocketSendEventInfo);
	nexacro.SocketSendEventInfo.prototype = _pSocketSendEventInfo;
	_pSocketSendEventInfo._type_name = "SocketSendEventInfo";

	delete _pSocketSendEventInfo;
	_pSocketSendEventInfo = null;

	nexacro.SocketReceiveEventInfo = function (obj, id, bytesread) {
		this.id = this.eventid = id || "ondataarrived";
		this.fromobject = this.fromreferenceobject = obj;

		this.bytesread = bytesread;
	};
	var _pSocketReceiveEventInfo = nexacro._createPrototype(nexacro.Event, nexacro.SocketReceiveEventInfo);
	nexacro.SocketReceiveEventInfo.prototype = _pSocketReceiveEventInfo;
	_pSocketReceiveEventInfo._type_name = "SocketReceiveEventInfo";

	delete _pSocketReceiveEventInfo;
	_pSocketReceiveEventInfo = null;

	nexacro.SocketCloseEventInfo = function (obj, id, errmsg, errno) {
		this.id = this.eventid = id || "onclose";
		this.fromobject = this.fromreferenceobject = obj;

		this.errmsg = errmsg;
		this.errno = errno;
	};
	var _pSocketCloseEventInfo = nexacro._createPrototype(nexacro.Event, nexacro.SocketCloseEventInfo);
	nexacro.SocketCloseEventInfo.prototype = _pSocketCloseEventInfo;
	_pSocketCloseEventInfo._type_name = "SocketCloseEventInfo";

	delete _pSocketCloseEventInfo;
	_pSocketCloseEventInfo = null;

	nexacro.SocketErrorEventInfo = function (obj, id, errmsg, errno) {
		this.id = this.eventid = id || "onerror";
		this.fromobject = this.fromreferenceobject = obj;

		this.errmsg = errmsg;
		this.errno = errno;
	};
	var _pSocketErrorEventInfo = nexacro._createPrototype(nexacro.Event, nexacro.SocketErrorEventInfo);
	nexacro.SocketErrorEventInfo.prototype = _pSocketErrorEventInfo;
	_pSocketErrorEventInfo._type_name = "SocketErrorEventInfo";

	delete _pSocketErrorEventInfo;
	_pSocketErrorEventInfo = null;

	nexacro.TCPClientSocket = function (id, parent) {
		this.id = this.name = id;
		if (parent) {
			this.parent = parent;
		}

		this.address = "";
		this.port = 0;
		this.errmsg = "";
		this.errno = 0;
		this._event_list = {
			"onconnect" : 1, 
			"onclose" : 1, 
			"onsend" : 1, 
			"ondataarrived" : 1, 
			"onerror" : 1
		};

		this._handle = null;
		this.onconnect = null;
		this.onclose = null;
		this.onsend = null;
		this.ondataarrived = null;
		this.onerror = null;

		if (nexacro.Browser == "Runtime") {
			this._handle = nexacro.__createTCPClientSocket(this, this.on_success, this.on_error);
		}
	};

	var _pTCPClientSocket = nexacro.TCPClientSocket.prototype = nexacro._createPrototype(nexacro.EventSinkObject, nexacro.TCPClientSocket);
	_pTCPClientSocket._type_name = "TCPClientSocket";

	_pTCPClientSocket.on_created = function () {
	};

	_pTCPClientSocket.destroy = function () {
		if (this._handle) {
			nexacro.__destroyTCPClientSocket(this._handle);

			this.address = "";
			this.port = 0;
			this.errmsg = "";
			this.errno = 0;
			this.isopen = false;
			this._handle = null;
		}

		return true;
	};

	_pTCPClientSocket.open = function (address, port, timeout) {
		if (this._handle && address && (port != undefined)) {
			var ret = nexacro.__openTCPClientSocket(this._handle, address, port, timeout);
			if (ret) {
				this.address = address;
				this.port = port;
			}
			return ret;
		}
		return false;
	};

	_pTCPClientSocket.close = function () {
		if (this._handle) {
			return nexacro.__closeTCPClientSocket(this._handle);
		}
		return false;
	};

	_pTCPClientSocket.read = function (size, timeout, charset) {
		if (this._handle && (size != undefined)) {
			var isreadline = false;
			return nexacro.__readTCPClientSocket(this._handle, isreadline, size, timeout, charset);
		}
		return Array(false);
	};

	_pTCPClientSocket.readLine = function (maxsize, timeout, charset) {
		if (this._handle && (maxsize != undefined)) {
			var isreadline = true;
			return nexacro.__readTCPClientSocket(this._handle, isreadline, maxsize, timeout, charset);
		}
		return Array(false);
	};

	_pTCPClientSocket.write = function (data, charset) {
		if (this._handle && (data != undefined)) {
			return nexacro.__writeTCPClientSocket(this._handle, data, charset);
		}
		return false;
	};



	_pTCPClientSocket.on_success = function (evt_id, arg0, arg1, arg2, arg3) {
		if (evt_id == "on_connect") {
			return this.on_connect(arg0, arg1);
		}
		else if (evt_id == "on_close") {
			return this.on_close(arg0, arg1);
		}
		else if (evt_id == "on_send") {
			return this.on_send(arg0, arg1, arg2, arg3);
		}
		else if (evt_id == "on_dataarrived") {
			return this.on_dataarrived(arg0);
		}

		return false;
	};

	_pTCPClientSocket.on_connect = function (errmsg, errno) {
		this.isopen = true;

		if (this.onconnect && this.onconnect._has_handlers) {
			var evt = new nexacro.SocketConnectEventInfo(this, "onconnect", errmsg, errno);
			return this.onconnect._fireEvent(this, evt);
		}
		return true;
	};

	_pTCPClientSocket.on_close = function (errmsg, errno) {
		this.isopen = false;

		if (this.onclose && this.onclose._has_handlers) {
			var evt = new nexacro.SocketCloseEventInfo(this, "onclose", errmsg, errno);
			return this.onclose._fireEvent(this, evt);
		}
		return true;
	};

	_pTCPClientSocket.on_send = function (errmsg, errno, bytessent, bytesremain) {
		if (this.onsend && this.onsend._has_handlers) {
			var evt = new nexacro.SocketSendEventInfo(this, "onsend", bytesremain, bytessent, errmsg, errno);
			return this.onsend._fireEvent(this, evt);
		}
		return true;
	};

	_pTCPClientSocket.on_dataarrived = function (bytesread) {
		if (this.ondataarrived && this.ondataarrived._has_handlers) {
			var evt = new nexacro.SocketReceiveEventInfo(this, "ondataarrived", bytesread);
			return this.ondataarrived._fireEvent(this, evt);
		}
		return true;
	};

	_pTCPClientSocket.on_error = function (errmsg, errno) {
		this.errmsg = errmsg;
		this.errno = errno;
		if (this.onerror && this.onerror._has_handlers) {
			var evt = new nexacro.SocketErrorEventInfo(this, "onerror", errmsg, errno);
			return this.onerror._fireEvent(this, evt);
		}
		return true;
	};

	delete _pTCPClientSocket;
}
