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

if (!nexacro.MediaPlayer) {
	nexacro.MediaPlayStateChangedEventInfo = function (obj, id, newvalue) {
		this.id = this.eventid = id || "onplaystatuschanged";
		this.fromobject = this.fromreferenceobject = obj;

		this.newstate = newvalue;
	};
	var _pPlayStatusChangedInfo = nexacro._createPrototype(nexacro.Event, nexacro.MediaPlayStateChangedEventInfo);
	nexacro.MediaPlayStateChangedEventInfo.prototype = _pPlayStatusChangedInfo;
	_pPlayStatusChangedInfo._type_name = "MediaPlayStatusChangedInfo";

	delete _pPlayStatusChangedInfo;

	nexacro.MediaCurrentTimeChangedEventInfo = function (obj, id, currenttime) {
		this.id = this.eventid = id || "oncurrenttimechanged";
		this.fromobject = this.fromreferenceobject = obj;

		this.currenttime = currenttime;
	};
	var _pCurrentTimeChangedInfo = nexacro._createPrototype(nexacro.Event, nexacro.MediaCurrentTimeChangedEventInfo);
	nexacro.MediaCurrentTimeChangedEventInfo.prototype = _pCurrentTimeChangedInfo;
	_pCurrentTimeChangedInfo._type_name = "MediaCurrentTimeChangedInfo";

	delete _pCurrentTimeChangedInfo;


	nexacro.MediaErrorEventInfo = function (obj, id, errortype, errormsg, statuscode) {
		this.id = this.eventid = id || "onerror";
		this.fromobject = this.fromreferenceobject = obj;

		this.errortype = errortype;
		this.errormsg = errormsg;
		this.statuscode = statuscode;
	};
	var _pMediaErrorInfo = nexacro._createPrototype(nexacro.Event, nexacro.MediaErrorEventInfo);
	nexacro.MediaErrorEventInfo.prototype = _pMediaErrorInfo;
	_pMediaErrorInfo._type_name = "MediaErrorInfo";

	delete _pMediaErrorInfo;


	nexacro.MediaPlayer = function (id, position, left, top, width, height, right, bottom, parent) {
		nexacro.Component.call(this, id, position, left, top, width, height, right, bottom, parent);

		this.adjustalpha = false;
		this.currenttime = 0;
		this.duration = 0;
		this.mute = false;
		this.loop = false;
		this.controls = false;
		this.autoplay = false;
		this.size = "Not media open";
		this.status = "The playback state is undefined";
		this.url = "";
		this._url = "";
		this.volume = 50;

		this._params = new nexacro.Collection();

		this._event_list = 
			{
			"onclick" : 1, 
			"ondblclick" : 1, 
			"onkeypress" : 1, 
			"onkeydown" : 1, 
			"onkeyup" : 1, 
			"onkillfocus" : 1, 
			"onsetfocus" : 1, 
			"ondrag" : 1, 
			"ondrop" : 1, 
			"ondragenter" : 1, 
			"ondragleave" : 1, 
			"ondragmove" : 1, 
			"onlbuttondown" : 1, 
			"onlbuttonup" : 1, 
			"onrbuttondown" : 1, 
			"onrbuttonup" : 1, 
			"onmousedown" : 1, 
			"onmouseup" : 1, 
			"onmouseenter" : 1, 
			"onmouseleave" : 1, 
			"onmousemove" : 1, 
			"onmousewheel" : 1, 
			"onmove" : 1, 
			"onsize" : 1, 
			"onsuccess" : 1, 
			"onerror" : 1, 
			"onappenditem" : 1, 
			"ondeleteitem" : 1, 
			"onitemclick" : 1, 
			"onfindclick" : 1, 
			"onitemchanged" : 1, 
			"ontouchstart" : 1, 
			"ontouchmove" : 1, 
			"ontouchend" : 1, 
			"onpinchstart" : 1, 
			"onpinch" : 1, 
			"onpinchend" : 1, 
			"onflingstart" : 1, 
			"onfling" : 1, 
			"onflingend" : 1, 
			"onlongpress" : 1, 
			"onslidestart" : 1, 
			"onslide" : 1, 
			"onslideend" : 1, 
			"oncurrenttimechanged" : 1, 
			"onplaystatuschanged" : 1
		};
	};

	var _pMedia = nexacro.MediaPlayer.prototype = nexacro._createPrototype(nexacro.Component, nexacro.MediaPlayer);

	_pMedia._type_name = "MediaPlayer";




	_pMedia._obj_id = "";
	_pMedia._obj_elem = null;
	_pMedia._params = null;

	_pMedia.on_create_contents = function () {
		var control_elem = this.getElement();
		if (control_elem) {
			var obj_elem = this._obj_elem = new nexacro.MediaPlayerPluginElement(control_elem);
			obj_elem.setElementSize(this._client_width, this._client_height);
		}
	};

	_pMedia.on_created_contents = function () {
		var obj_elem = this._obj_elem;
		if (obj_elem) {
			var params = this._params;
			var param_cnt = params.length;
			for (var i = 0; i < param_cnt; i++) {
				obj_elem.setElementParam(params.get_id(i), params.get_item(i));
			}

			obj_elem.create();
			obj_elem.setElementVisible(this.visible);

			this.on_apply_adjustalpha();
			this.on_apply_mute();
			this.on_apply_volume();
			this.on_apply_loop();
			this.on_apply_autoplay();
			this.on_apply_controls();
			this.on_apply_url();
		}
	};

	_pMedia.on_destroy_contents = function () {
		var obj_elem = this._obj_elem;
		if (obj_elem) {
			obj_elem.destroy();
			this._obj_elem = null;
		}
	};

	_pMedia.on_update_position = function (resize_flag, move_flag) {
		nexacro.Component.prototype.on_update_position.call(this, resize_flag, move_flag);
		var obj_elem = this._obj_elem;
		if (obj_elem) {
			obj_elem.on_update_position();
		}
	};


	_pMedia.on_change_containerRect = function (width, height) {
		var obj_elem = this._obj_elem;
		if (obj_elem) {
			obj_elem.setElementSize(width, height);
		}
	};

	_pMedia.set_duration = nexacro._emptyFn;
	_pMedia.set_status = nexacro._emptyFn;
	_pMedia.set_size = nexacro._emptyFn;


	_pMedia.set_visible = function (v) {
		if (v === undefined || v === null) {
			return;
		}

		v = nexacro._toBoolean(v);
		nexacro.Component.prototype.set_visible.call(this, v);

		var obj_elem = this._obj_elem;
		if (obj_elem) {
			if (obj_elem.setElementPluginVisible != null) {
				obj_elem.setElementPluginVisible(v);
			}
		}
	};

	_pMedia.set_url = function (v) {
		if (this.url != v) {
			this.url = v;
			v = nexacro._getURIValue(v);
			v = nexacro._getServiceLocation(v, this._getRefFormBaseUrl());

			if (this._url != v) {
				this._url = v;
				this.on_apply_url();
			}
		}
	};
	_pMedia.on_apply_url = function () {
		var elem = this._obj_elem;
		if (elem) {
			elem._setMediaUrl("URL", this._url);
			this._need_change_event = false;
		}
	};

	_pMedia.set_adjustalpha = function (v) {
		v = nexacro._toBoolean(v);
		if (this.adjustalpha != v) {
			this.adjustalpha = v;
			this.on_apply_adjustalpha();
		}
	};

	_pMedia.on_apply_adjustalpha = function () {
		var elem = this._obj_elem;
		if (elem) {
			elem._setMediaAdjustAlpha(this.adjustalpha);
		}
	};

	_pMedia.set_currenttime = function (v) {
		v = +v;
		if (isNaN(v)) {
			return;
		}
		if (v < 0) {
			v = 0;
		}
		else if (v > this.duration) {
			v = this.duration;
		}

		this.currenttime = v;
		this.on_apply_currenttime();
	};
	_pMedia.on_apply_currenttime = function () {
		var elem = this._obj_elem;
		if (elem) {
			elem._setMediaCurrentTime("currentPosition", this.currenttime);
		}
	};

	_pMedia.set_mute = function (v) {
		v = nexacro._toBoolean(v);
		if (this.mute != v) {
			this.mute = v;
			this.on_apply_mute();
		}
	};
	_pMedia.on_apply_mute = function () {
		var obj_elem = this._obj_elem;
		if (obj_elem) {
			obj_elem._setMediaMute("settings", this.mute);
		}
	};

	_pMedia.set_loop = function (v) {
		v = nexacro._toBoolean(v);
		if (this.loop != v) {
			this.loop = v;
			this.on_apply_loop();
		}
	};

	_pMedia.on_apply_loop = function () {
		var elem = this._obj_elem;
		if (elem) {
			elem._setMediaLoop("AutoRewind", this.loop);
		}
	};

	_pMedia.set_controls = function (v) {
		v = nexacro._toBoolean(v);
		if (this.controls != v) {
			this.controls = v;
			this.on_apply_controls();
		}
	};

	_pMedia.on_apply_controls = function () {
		var elem = this._obj_elem;
		if (elem) {
			elem._setMediaControl("uiMode", this.controls);
		}
	};

	_pMedia.set_autoplay = function (v) {
		v = nexacro._toBoolean(v);
		if (this.autoplay != v) {
			this.autoplay = v;
			this.on_apply_autoplay();
		}
	};

	_pMedia.on_apply_autoplay = function () {
		var elem = this._obj_elem;
		if (elem) {
			elem._setMediaAutoPlay("AutoStart", this.autoplay);
		}
	};

	_pMedia.set_volume = function (v) {
		v = +v;
		if (isNaN(v)) {
			return;
		}

		if (v < 0) {
			v = 0;
		}
		else if (v > 100) {
			v = 100;
		}

		if (this.volume != v) {
			this.volume = v;
			this.on_apply_volume();
		}
	};

	_pMedia.on_apply_volume = function () {
		var elem = this._obj_elem;
		if (elem) {
			elem._setMediaVolume("Volume", this.volume);
		}
	};

	_pMedia.on_apply_prop_enable = function () {
		var elem = this._obj_elem;
		if (elem) {
			var enable = this.enable;
			if (enable != null) {
				elem._setMediaEnable("Enabled", enable);
			}
		}
	};


	_pMedia.play = function () {
		var obj_elem = this._obj_elem;
		if (obj_elem) {
			obj_elem._play();
			this._need_change_event = false;
		}
	};

	_pMedia.pause = function () {
		var obj_elem = this._obj_elem;
		if (obj_elem) {
			obj_elem._pause();
		}
	};

	_pMedia.stop = function () {
		var obj_elem = this._obj_elem;
		if (obj_elem) {
			obj_elem._stop();
			this._need_change_event = true;
		}
	};


	_pMedia.on_fire_onerror = function (obj, errortype, errormsg, errorobj, statuscode) {
		if (this.onerror && this.onerror._has_handlers) {
			var evt = new nexacro.MediaErrorEventInfo(obj, "onerror", errortype, errormsg, errorobj, statuscode);
			return this.onerror._fireEvent(this, evt);
		}
	};

	_pMedia.on_fire_oncurrenttimechanged = function (obj, new_pos) {
		if (this.oncurrenttimechanged && this.oncurrenttimechanged._has_handlers) {
			var evt = new nexacro.MediaCurrentTimeChangedEventInfo(obj, "oncurrenttimechanged", new_pos);
			return this.oncurrenttimechanged._fireEvent(this, evt);
		}
	};

	_pMedia.on_fire_onplaystatuschanged = function (obj, new_status) {
		if (this.onplaystatuschanged && this.onplaystatuschanged._has_handlers) {
			var evt = new nexacro.MediaPlayStateChangedEventInfo(obj, "onplaystatuschanged", new_status);
			return this.onplaystatuschanged._fireEvent(this, evt);
		}
	};

	_pMedia._on_currenttimechanged = function (new_pos) {
		var old_pos = this.currenttime;
		if (old_pos != new_pos) {
			this.on_fire_oncurrenttimechanged(this, new_pos);
		}
		this.currenttime = new_pos;
	};

	_pMedia._on_statuschanged = function (new_status) {
		var old_status = this.status;
		if (old_status != new_status) {
			if (this._need_change_event) {
				if (new_status == "pause") {
					new_status = "stop";
				}
			}
			this.status = new_status;
			this.on_fire_onplaystatuschanged(this, new_status);
		}
	};

	_pMedia._on_error = function (errortype, errormsg, statuscode) {
		this.on_fire_onerror(this, errortype, errormsg, statuscode);
	};

	delete _pMedia;
}



