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

if (!nexacro.Edit) {
	nexacro.Edit_Style = function (target) {
		nexacro.Style.call(this);
		if (target) {
			this._target = target;
		}

		this.caretcolor = null;
		this.compositecolor = null;
		this.displaynulltextcolor = null;
	};

	var _pEditStyle = nexacro._createPrototype(nexacro.Style, nexacro.Edit_Style);
	nexacro.Edit_Style.prototype = _pEditStyle;

	eval(nexacro._createColorAttributeEvalStr("_pEditStyle", "caretcolor"));
	eval(nexacro._createColorAttributeEvalStr("_pEditStyle", "compositecolor"));
	eval(nexacro._createColorAttributeEvalStr("_pEditStyle", "selectcolor"));
	eval(nexacro._createColorAttributeEvalStr("_pEditStyle", "selectbackground"));
	eval(nexacro._createColorAttributeEvalStr("_pEditStyle", "displaynulltextcolor"));

	_pEditStyle.__custom_emptyObject = function () {
		this.caretcolor = null;
		this.compositecolor = null;
		this.selectcolor = null;
		this.selectbackground = null;
		this.displaynulltextcolor = null;
	};

	_pEditStyle.__get_custom_style_value = function () {
		var val = "";

		if (this.caretcolor && !this.caretcolor._is_empty) {
			val += "caretcolor:" + this.caretcolor._value + "; ";
		}
		if (this.compositecolor && !this.compositecolor._is_empty) {
			val += "compositecolor:" + this.compositecolor._value + "; ";
		}
		if (this.selectcolor && !this.selectcolor._is_empty) {
			val += "selectcolor:" + this.selectcolor._value + "; ";
		}
		if (this.selectbackground && !this.selectbackground._is_empty) {
			val += "selectbackground:" + this.selectbackground._value + "; ";
		}
		if (this.displaynulltextcolor && !this.displaynulltextcolor._is_empty) {
			val += "displaynulltextcolor:" + this.displaynulltextcolor._value + "; ";
		}

		return val;
	};

	nexacro.Edit_CurrentStyle = function () {
		nexacro.CurrentStyle.call(this);

		this.caretcolor = null;
		this.compositecolor = null;
		this.selectcolor = null;
		this.selectbackground = null;
		this.displaynulltextcolor = null;
	};

	var _pEditCurrentStyle = nexacro._createPrototype(nexacro.CurrentStyle, nexacro.Edit_CurrentStyle);
	nexacro.Edit_CurrentStyle.prototype = _pEditCurrentStyle;

	_pEditCurrentStyle.__custom_emptyObject = _pEditStyle.__custom_emptyObject;
	_pEditCurrentStyle.__get_custom_style_value = _pEditStyle.__get_custom_style_value;

	_pEditStyle = null;
	_pEditCurrentStyle = null;

	nexacro.Edit = function (id, position, left, top, width, height, right, bottom, parent) {
		nexacro.Component.call(this, id, position, left, top, width, height, right, bottom, parent);

		this.value = undefined;
		this.useinputpanel = true;
		this.displaynulltext = "";
		this.readonly = false;
		this.password = false;
		this.autoselect = false;
		this.autoskip = false;
		this.maxlength = 0;
		this.usesoftkeyboard = true;
		this.inputmode = "normal";
		this.inputfilter = "none";
		this.inputtype = "normal";
		this.lengthunit = "utf16";
		this.tabindentsize = 4;
		this.imemode = "none";
		this.useime = "global";
		this.updatebindingvalue = "default";
		this.usecontextmenu = true;
		this.text = "";


		this._event_list = {
			"onclick" : 1, 
			"ondblclick" : 1, 
			"onkeypress" : 1, 
			"onkeydown" : 1, 
			"onkeyup" : 1, 
			"onkillfocus" : 1, 
			"onsetfocus" : 1, 
			"ondrag" : 1, 
			"ondragenter" : 1, 
			"ondragleave" : 1, 
			"ondragmove" : 1, 
			"ondrop" : 1, 
			"onlbuttondown" : 1, 
			"onlbuttonup" : 1, 
			"onrbuttondown" : 1, 
			"onrbuttonup" : 1, 
			"onmouseenter" : 1, 
			"onmouseleave" : 1, 
			"onmousemove" : 1, 
			"onmove" : 1, 
			"onsize" : 1, 
			"oneditclick" : 1, 
			"canchange" : 1, 
			"cancharchange" : 1, 
			"onchanged" : 1, 
			"onchar" : 1, 
			"ontextchange" : 1, 
			"ontextchanged" : 1, 
			"oncontextmenu" : 1, 
			"onfling" : 1, 
			"onflingstart" : 1, 
			"onflingend" : 1, 
			"onpinch" : 1, 
			"onpinchstart" : 1, 
			"onpinchend" : 1, 
			"onslide" : 1, 
			"onslidestart" : 1, 
			"onslideend" : 1, 
			"ontouchstart" : 1, 
			"ontouchmove" : 1, 
			"ontouchend" : 1, 
			"ontap" : 1, 
			"onlongpress" : 1
		};


		this._input_element = null;
		this._edit_base_api = new nexacro.EditNormal(this);
		this._accessibility_role = "edit";
		this._caret_pos = {
			begin : -1, 
			end : -1, 
			org_begin : -1, 
			org_end : -1
		};
		this._setcaret = false;
		this._textchanging = false;
		this._dsupdate_in_textchanging = false;
		this._dsupdate_cancel = false;
		this._activate_flag = false;
		this._has_inputElement = true;
		this._old_selection = [0, 0];
		this._lose_focus_comp = null;
		this._is_set_value = false;
	};

	var _pEdit = nexacro._createPrototype(nexacro.Component, nexacro.Edit);
	nexacro.Edit.prototype = _pEdit;
	_pEdit._type_name = "Edit";

	nexacro.Edit._default_selectcolor = nexacro._getCachedStyleObj("color", "#3e3e3eff");
	nexacro.Edit._focused_selectcolor = nexacro._getCachedStyleObj("color", "#ffffffff");
	nexacro.Edit._default_selectbackground = nexacro._getCachedStyleObj("color", "#ffffffb3");

	_pEdit.on_apply_custom_pseudo = function (pseudo) {
		if (pseudo) {
			this._pseudo = pseudo;
		}
		else if (this._pseudo) {
			pseudo = this._pseudo;
		}
		var curstyle = this.currentstyle;

		var align = this.on_find_CurrentStyle_align(pseudo) || nexacro.Component._default_left_align;
		if (align != curstyle.align) {
			curstyle.align = align;
			this.on_apply_style_align(align);
		}
		align = null;

		var font = this.on_find_CurrentStyle_font(pseudo);
		if (font != curstyle.font) {
			curstyle.font = font;
			this.on_apply_style_font(font);
		}
		font = null;

		var letterspace = this.on_find_CurrentStyle_letterspace(pseudo);
		if (letterspace != curstyle.letterspace) {
			curstyle.letterspace = letterspace;
			this.on_apply_style_letterspace(letterspace);
		}
		letterspace = null;

		var color = this.on_find_CurrentStyle_color(pseudo);
		if (color != curstyle.color) {
			curstyle.color = color;
			this.on_apply_style_color(color);
		}

		var displaynulltextcolor = this.on_find_CurrentStyle_displaynulltextcolor(pseudo);
		if (displaynulltextcolor != curstyle.displaynulltextcolor) {
			curstyle.displaynulltextcolor = displaynulltextcolor;
			this.on_apply_style_displaynulltextcolor(displaynulltextcolor);
		}

		color = this.on_find_CurrentStyle_caretcolor(pseudo);
		if (color != curstyle.caretcolor) {
			curstyle.caretcolor = color;
			this.on_apply_style_caretcolor(color);
		}

		color = this.on_find_CurrentStyle_compositecolor(pseudo);
		if (color != curstyle.compositecolor) {
			curstyle.compositecolor = color;
			this.on_apply_style_compositecolor(color);
		}

		color = null;

		var selectcolor = this.on_find_CurrentStyle_selectcolor(pseudo);
		if (selectcolor != curstyle.selectcolor) {
			curstyle.selectcolor = selectcolor;
			this.on_apply_style_selectcolor(selectcolor);
		}
		selectcolor = null;

		var selectbackground = this.on_find_CurrentStyle_selectbackground(pseudo);
		if (selectbackground != curstyle.selectbackground) {
			curstyle.selectbackground = selectbackground;
			this.on_apply_style_selectbackground(selectbackground);
		}
		selectbackground = null;

		var rtlimagemirroring = this.on_find_CurrentStyle_rtlimagemirroring(pseudo);
		if (rtlimagemirroring != curstyle.rtlimagemirroring) {
			curstyle.rtlimagemirroring = rtlimagemirroring;
			this.on_apply_style_rtlimagemirroring(rtlimagemirroring);
		}
		rtlimagemirroring = null;
	};

	_pEdit.on_create_custom_style = function () {
		return new nexacro.Edit_Style(this);
	};

	_pEdit.on_create_custom_currentStyle = function () {
		return new nexacro.Edit_CurrentStyle();
	};


	_pEdit.on_find_CurrentStyle_cursor = function (pseudo) {
		var cursor = "";
		if (!this._isEnable() && this.parent && !this.parent._is_application) {
			if (!this._is_subcontrol) {
				cursor = this.parent._find_pseudo_obj("cursor", pseudo, "value");
			}
			else {
				var p = this.parent;
				while (p && p._is_form) {
					p = p.parent;
				}

				if (p) {
					cursor = p._find_pseudo_obj("cursor", pseudo, "value");
				}
				else {
					cursor = null;
				}
			}
		}
		else {
			cursor = this._find_pseudo_obj("cursor", pseudo, "value");
		}

		return (cursor) ? cursor : nexacro.Component._default_cursor;
	};

	_pEdit.on_find_CurrentStyle_align = function (pseudo) {
		var align = this._find_pseudo_obj("align", pseudo, "align");

		return (align) ? align : nexacro.Component._default_left_align;
	};

	_pEdit.on_find_CurrentStyle_caretcolor = function (pseudo) {
		return this._find_pseudo_obj("caretcolor", pseudo, "color");
	};

	_pEdit.on_find_CurrentStyle_compositecolor = function (pseudo) {
		return this._find_pseudo_obj("compositecolor", pseudo, "color");
	};

	_pEdit.on_find_CurrentStyle_selectcolor = function (pseudo) {
		var color = this._find_pseudo_obj("selectcolor", pseudo, "color");
		if (!color) {
			if (pseudo == "focused") {
				color = nexacro.Edit._focused_selectcolor;
			}
			else {
				color = nexacro.Edit._default_selectcolor;
			}
		}

		return color;
	};

	_pEdit.on_find_CurrentStyle_displaynulltextcolor = function (pseudo) {
		var displaynulltextcolor = this._find_pseudo_obj("displaynulltextcolor", pseudo, "color");
		if (!displaynulltextcolor) {
			displaynulltextcolor = this._find_pseudo_obj("color", pseudo, "color");
		}
		if (!displaynulltextcolor) {
			displaynulltextcolor = this._find_inherit_pseudo_obj("color", pseudo, "color");
		}

		return (displaynulltextcolor) ? displaynulltextcolor : nexacro.Component._default_color;
	};

	_pEdit.on_find_CurrentStyle_selectbackground = function (pseudo) {
		var bkcolor = this._find_pseudo_obj("selectbackground", pseudo, "background");
		return (bkcolor) ? bkcolor : nexacro.Edit._default_selectbackground;
	};


	_pEdit.on_update_style_cursor = function () {
		var cursor = this.on_find_CurrentStyle_cursor(this._pseudo);
		this.currentstyle.cursor = cursor;
		this.on_apply_style_cursor(cursor);
	};

	_pEdit.on_update_style_caretcolor = function () {
		var caretcolor = this.on_find_CurrentStyle_caretcolor(this._pseudo);
		this.currentstyle.caretcolor = caretcolor;
		this.on_apply_style_caretcolor(caretcolor);
	};

	_pEdit.on_update_style_compositecolor = function () {
		var compositecolor = this.on_find_CurrentStyle_compositecolor(this._pseudo);
		this.currentstyle.compositecolor = compositecolor;
		this.on_apply_style_compositecolor(compositecolor);
	};

	_pEdit.on_update_style_selectcolor = function () {
		var selectcolor = this.on_find_CurrentStyle_selectcolor(this._pseudo);
		this.currentstyle.selectcolor = selectcolor;
		this.on_apply_style_selectcolor(selectcolor);
	};

	_pEdit.on_update_style_displaynulltextcolor = function () {
		var displaynulltextcolor = this.on_find_CurrentStyle_displaynulltextcolor(this._pseudo);
		this.currentstyle.displaynulltextcolor = displaynulltextcolor;
		this.on_apply_style_displaynulltextcolor(displaynulltextcolor);
	};

	_pEdit.on_update_style_selectbackground = function () {
		var selectbackground = this.on_find_CurrentStyle_selectbackground(this._pseudo);
		this.currentstyle.selectbackground = selectbackground;
		this.on_apply_style_selectbackground(selectbackground);
	};


	_pEdit.on_apply_style_color = function (color) {
		var input_elem = this._input_element;
		if (input_elem) {
			input_elem.setElementColor(color);
		}
	};

	_pEdit.on_apply_style_font = function (font) {
		if (font == null) {
			this.currentstyle.font = nexacro.Component._default_font;
		}

		var api = this._edit_base_api;
		var input_elem = this._input_element;
		if (input_elem) {
			input_elem.setElementFont(font);
			api.setPosition();
			api._apply_style(input_elem);
		}
	};

	_pEdit.on_apply_style_cursor = function (cursor) {
		var control_elem = this.getElement();
		if (control_elem) {
			control_elem.setElementCursor(cursor);

			var input_elem = this._input_element;
			if (input_elem) {
				input_elem.setElementCursor(cursor);
			}
		}
	};

	_pEdit.on_apply_style_align = function (align) {
		if (align == null) {
			align = nexacro.Component._default_left_align;
		}

		var api = this._edit_base_api;
		var input_elem = this._input_element;
		if (input_elem) {
			api.setPosition();
			api._apply_style(input_elem);
		}
	};

	_pEdit.on_apply_style_caretcolor = function (color) {
	};

	_pEdit.on_apply_style_compositecolor = function (color) {
	};

	_pEdit.on_apply_style_selectbackground = function (selectbackground) {
		var input_elem = this._input_element;
		if (input_elem) {
			input_elem.setElementSelectBackgroundColor(selectbackground);
		}
	};

	_pEdit.on_apply_style_selectcolor = function (selectcolor) {
		var input_elem = this._input_element;
		if (input_elem) {
			input_elem.setElementSelectColor(selectcolor);
		}
	};

	_pEdit.on_apply_style_accessibility = function (accessibility) {
		nexacro.Component.prototype.on_apply_style_accessibility.call(this, accessibility);
		if (this._input_element) {
			this._input_element.setElementAccessibilityRole(accessibility.role);
		}
	};

	_pEdit.on_apply_style_displaynulltextcolor = function (displaynulltextcolor) {
		var input_elem = this._input_element;
		if (input_elem) {
			input_elem.setElementDisplayNullTextColor(displaynulltextcolor);
		}
	};

	_pEdit.on_apply_style_letterspace = function (letterspace) {
		var input_elem = this._input_element;
		if (input_elem) {
			input_elem.setElementLetterSpace(letterspace);
		}
	};

	_pEdit.on_create_contents = function () {
		var control = this.getElement();
		if (control) {
			var curstyle = this.currentstyle;
			var input_elem = this._input_element = new nexacro.InputElement(control);

			input_elem.setElementSize(this._client_width, this._client_height);
			input_elem.setElementFont(curstyle.font);
			input_elem.setElementColor(curstyle.color);
			input_elem.setElementAlign(curstyle.align);
			input_elem.setElementSelectColor(curstyle.selectcolor);
			input_elem.setElementSelectBackgroundColor(curstyle.selectbackground);
			input_elem.setElementDisplayNullTextColor(curstyle.displaynulltextcolor);
		}
	};

	_pEdit.on_created_contents = function () {
		var input_elem = this._input_element;
		var api = this._edit_base_api;

		if (input_elem) {
			var val = nexacro._toString(this.value);
			var curstyle = this.currentstyle;

			input_elem.setElementReadonly(this.readonly);
			input_elem.setElementMaxLength(this.maxlength);
			input_elem.setElementUseIme(this.useime);
			input_elem.setElementImeMode(this.imemode);
			input_elem.setElementEnable(this._isEnable());

			if (this.password) {
				input_elem.setElementPassword(this.password);
			}
			else {
				input_elem.setElementInputType(this.inputtype);
				input_elem.setElementInputTypeKeypad(this.inputtype);
			}

			if (api) {
				api.setValue(val);
				api._setFocusValue();
			}

			input_elem.create();
			this.on_apply_style_letterspace(curstyle.letterspace);
			this.on_apply_lengthunit();
			input_elem._bindEvent(input_elem);

			if (api) {
				api.setPosition();
			}


			if (nexacro._enableaccessibility && nexacro._accessibilitytype == 4) {
				input_elem._setElementInputLabel();
			}

			this.on_apply_prop_rtldirection();
			this.on_apply_displaynulltext();

			if (curstyle && curstyle.cursor) {
				this.on_apply_style_cursor(curstyle.cursor);
			}

			this.on_apply_prop_class();
		}
	};

	_pEdit.on_destroy_contents = function () {
		var input_elem = this._input_element;
		if (input_elem) {
			input_elem._unBindEvent();
			input_elem.destroy();
			this._input_element = null;
		}

		var api = this._edit_base_api;
		if (api) {
			api._destroy();
			this._edit_base_api = null;
		}

		this._caret_pos = null;
	};

	_pEdit.on_change_containerRect = function (width, height) {
		var input_elem = this._input_element;
		var api = this._edit_base_api;
		if (input_elem && api) {
			api.setPosition();
			api._apply_style(input_elem);
		}
	};

	_pEdit.on_getBindableProperties = function () {
		return "value";
	};

	_pEdit.on_apply_prop_enable = function (v) {
		var input_elem = this._input_element;
		if (input_elem) {
			if (!v) {
				var pos = input_elem.getElementCaretPos();
				if (pos != -1 && pos.begin != pos.end) {
					input_elem.setElementSetSelect(0);
				}
			}

			input_elem.setElementEnable(v);
			this.on_apply_style_cursor(this.currentstyle.cursor);
		}
	};

	_pEdit.on_apply_custom_setfocus = function (evt_name) {
		var input_elem = this._input_element;
		var api = this._edit_base_api;

		if (api && input_elem) {
			api._changeFocusText(input_elem);
			api._bChangeFocusText = true;

			if (evt_name != "lbuttondown" && this._old_selection[0] != this._old_selection[1]) {
				input_elem.setElementSetSelect(this._old_selection[0], this._old_selection[1]);
			}
			else if (nexacro.Browser != "MobileSafari" && !this.autoselect) {
				if ((nexacro.Browser == "Gecko" && !evt_name) || nexacro.Browser == "Safari") {
					input_elem.setElementFocus();
				}
				if (!((nexacro.BrowserType == "Edge" || nexacro.Browser == "IE" || nexacro.Browser == "Runtime") && evt_name == "lbuttondown")) {
					if (this._setcaret) {
						this._setcaret = false;
					}
					this.setCaretPos(api._input_begin_pos);
				}
			}

			if (nexacro.Browser == "IE" && nexacro.BrowserVersion <= 8) {
				api._accept_blur_event = false;
				api._do_focus = true;
			}

			if ((nexacro.Browser == "Chrome" || (nexacro.Browser == "Edge" && nexacro.BrowserType == "Webkit") || nexacro.Browser == "Safari") && evt_name == "lbuttondown" && !this._is_subcontrol) {
				input_elem.setScrollLeft(0);
			}

			if (nexacro.OS == "iOS" && nexacro.SystemType == "iphone" && !this.readonly && !this.password) {
				var keypad_type = input_elem._keypad_type;
				var text = this.text;

				if (keypad_type == "number" && text) {
					if (!nexacro.isNumeric(text)) {
						keypad_type = "text";
					}
				}

				input_elem.setElementInputType(keypad_type, true);

				if (api._is_selected()) {
					api._accept_blur_event = false;
					input_elem.setElementBlur();
				}

				if (this.autoselect) {
					var selecttext = api._select_text = api._text;
					var pThis = this;
					nexacro.OnceCallbackTimer.callonce(pThis, function () {
						api._is_apply_autoselect = true;
						api.setElementCaretPos(0, selecttext.length, input_elem);
					}, 500);
				}

				if (api._is_selected()) {
					api._accept_focus_event = false;
					input_elem.setElementFocus();
					api._accept_focus_event = true;
				}
			}

			var _apply_focus = true;

			if (nexacro.OS == "iOS") {
				var _form = this._getForm();
				if (_form && _form.stepcontrol) {
					if (this.positionstep != _form.stepcontrol.stepindex) {
						_apply_focus = false;
					}
				}
			}

			if (_apply_focus) {
				input_elem.setElementFocus();
			}
		}
	};

	_pEdit.on_init_bindSource = function (columnid, propid, ds) {
		if (propid == "value") {
			var api = this._edit_base_api;
			if (api) {
				if (api._undoStack) {
					api._undoStack.init();
				}
			}

			this._setValue(undefined);
			return true;
		}
	};

	_pEdit.on_change_bindSource = function (propid, ds, row, col, index) {
		if (propid == "value") {
			var v = ds.getColumn(row, col);
			var api = this._edit_base_api;
			var input_elem = this._input_element;

			if (v && v instanceof nexacro.Decimal) {
				v = v.toString();
			}

			if (api) {
				var focus_val = api._getFocusValue();
				if (input_elem) {
					if (v === this.value && v === api._value && v === input_elem.value) {
						if (focus_val != v) {
							api._setFocusValue();
						}
						return true;
					}
					if (this._textchanging && v == this.value) {
						return true;
					}
				}
				if (api._is_composition && api._is_composition()) {
					return true;
				}
				if (api._undoStack) {
					api._undoStack.init();
				}
			}

			this._setValue(v);

			if (api) {
				if (focus_val != v) {
					api._setFocusValue();
				}
				api._updateCaretPos();
			}

			return true;
		}

		return false;
	};


	_pEdit.on_get_style_accessibility_label = function () {
		var label = "";
		return label;
	};

	_pEdit._on_getAccessibilityAdditionalLabel = function () {
		if (this._edit_base_api) {
			return this._edit_base_api._on_getAccessibilityAdditionalLabel();
		}
	};

	_pEdit._getAccessibilityReadLabel = function (bwholeread) {
		var _readlabel = nexacro.Component.prototype._getAccessibilityReadLabel.call(this);
		if (bwholeread && this._input_element && this._status != "focus") {
			if (!this._input_element._wantAccessibilityAdditionalLabel
				 || !this._input_element._wantAccessibilityAdditionalLabel()) {
				_readlabel = this.text + " " + _readlabel;
			}
		}
		return _readlabel;
	};

	_pEdit._getAccessibilityRole = function (accessibility) {
		var role = nexacro.Component.prototype._getAccessibilityRole.call(this, accessibility);
		if (nexacro._accessibilitytype == 4) {
			return "";
		}
		else {
			return role;
		}
	};

	_pEdit._setAccessibilityStatFocus = function (evt_name) {
		if (this._input_element) {
			var role = this._getAccessibilityRole(this.on_find_CurrentStyle_accessibility(this._pseudo));
			if (this._getDescLevel() == "none") {
				role = "none";
			}
			this._input_element.setElementAccessibilityRole(role);
		}
		return nexacro.Component.prototype._setAccessibilityStatFocus.call(this, evt_name);
	};

	_pEdit._setAccessibilityNotifyEvent = function (direction) {
		if (this._edit_base_api) {
			this._edit_base_api._setAccessibilityNotifyLabel();
		}
		return nexacro.Component.prototype._setAccessibilityNotifyEvent.call(this, direction);
	};

	_pEdit.on_apply_prop_rtldirection = function () {
		nexacro.Component.prototype.on_apply_prop_rtldirection.call(this);

		var api = this._edit_base_api;
		if (api) {
			api.setPosition();
		}
		if (this._input_element) {
			this._input_element.setElementRtlDirection(this._rtldirection);
		}
	};

	_pEdit.set_text = function (v, checkbind) {
	};

	_pEdit.set_value = function (v) {
		var org_value = v;
		var api = this._edit_base_api;

		v = nexacro._toString(v);
		if (v && v !== undefined && v != "") {
			v = v.replace(/&quot;/g, "\"");
		}

		if (v !== this.value) {
			var form = this._getRootForm();
			this._is_set_value = true;
			if (!this.applyto_bindSource("value", v)) {
				var form = this._getRootForm();
				if (form && form._bind_manager) {
					var _bind_item = form._bind_manager._FindBindItem(this, "value");

					if (!_bind_item && this._bind_event && this.parent instanceof nexacro.Div) {
						_bind_item = this._bind_event._sys_handlers[0].target._FindBindItem(this, "value");
					}

					if (_bind_item) {
						var ds = _bind_item._dataset;
						var row_idx = ds.rowposition;
						var col = ds._getDataColIndex(_bind_item.columnid);
						var val = ds.getColumn(row_idx, col);
						this._setValue(val);
					}
					delete _bind_item;
					_bind_item = null;
				}
				delete form;
				form = null;
				return;
			}

			if (nexacro.BrowserType == "Edge" || nexacro.Browser == "IE") {
				if (api) {
					var old_keyinput_event = api._accept_keyinput_event;
					api._accept_keyinput_event = false;

					this._setValue(v);
					api._accept_keyinput_event = old_keyinput_event;
				}
				else {
					this._setValue(v);
				}

				if (nexacro.BrowserVersion <= 8) {
					if (form && form._bFireLoadEvent) {
						this._recreateInputElement();
					}
				}
			}
			else {
				this._setValue(v);
			}

			if (api) {
				api._setFocusValue();
				api._updateCaretPos();
			}

			if (typeof org_value == "number") {
				this.value = parseFloat(v);
			}
		}
		else {
			var elem = this._input_element;
			if (nexacro.Browser == "IE" || nexacro.BrowserType == "Edge") {
				if (v !== api._value) {
					this._is_set_value = true;
					this.on_apply_value();
				}
				else {
					if (api._keycode == nexacro.Event.KEY_DELETE || api._keycode == nexacro.Event.KEY_BACKSPACE) {
						if (v !== api._text) {
							this._is_set_value = true;
							this.on_apply_value();
						}
					}
					else {
						if (elem && v !== elem.getElementValue()) {
							this._is_set_value = true;
							this.on_apply_value();
						}
					}
				}
			}
			else {
				if (api._keycode == nexacro.Event.KEY_DELETE || api._keycode == nexacro.Event.KEY_BACKSPACE) {
					if (v !== api._text) {
						this._is_set_value = true;
						this.on_apply_value();
					}
				}
				else {
					if (elem && v !== elem.getElementValue()) {
						this._is_set_value = true;
						this.on_apply_value();
					}
				}
			}
		}
	};

	_pEdit.on_apply_value = function () {
		var api = this._edit_base_api;

		if (api) {
			api.setValue(this.value);
			api.syncValue();
		}
		this._refreshAccessibilityValue();
	};

	_pEdit.set_displaynulltext = function (v) {
		var isNull = nexacro._isNull(v);
		if (isNull) {
			v = "";
		}
		else {
			v = nexacro._toString(v);
			v = v.replace(/&quot;/g, "\"");
		}

		if (v != this.displaynulltext) {
			this.displaynulltext = v;
			this.on_apply_displaynulltext();
		}
	};

	_pEdit.on_apply_displaynulltext = function () {
		var input_elem = this._input_element;
		if (input_elem) {
			input_elem.setElementDisplayNullText(this.displaynulltext);
		}
	};

	_pEdit.set_readonly = function (v) {
		v = nexacro._toBoolean(v);
		if (v != this.readonly) {
			this.readonly = v;
			this.on_apply_readonly();
		}
	};

	_pEdit.on_apply_readonly = function () {
		var v = this.readonly;
		if (v) {
			this._stat_change("readonly", this._pseudo);
		}
		else {
			this._stat_change("writable", this._pseudo == "readonly" ? "normal" : this._pseudo);
		}

		var input_elem = this._input_element;
		if (input_elem) {
			input_elem.setElementReadonly(v);
		}
	};

	_pEdit.set_autoselect = function (v) {
		v = nexacro._toBoolean(v);
		if (v != this.autoselect) {
			this.autoselect = v;
		}
	};

	_pEdit.set_autoskip = function (v) {
		v = nexacro._toBoolean(v);
		if (v != this.autoskip) {
			this.autoskip = v;
		}
	};

	_pEdit.on_apply_autoskip = function () {
		var root_comp = this._getRootComponent(this);
		var next_comp = this._refform.getNextComponent(root_comp, true);
		if (next_comp) {
			next_comp.setFocus();
			var api = next_comp._edit_base_api ? next_comp._edit_base_api : null;
			if (api) {
				if (!next_comp.autoselect) {
					next_comp.setCaretPos(0);
				}
			}
		}
	};

	_pEdit.set_usesoftkeyboard = function (v) {
		v = nexacro._toBoolean(v);
		if (v != this.usesoftkeyboard) {
			this.usesoftkeyboard = v;
			this.on_apply_usesoftkeyboard();
		}
	};

	_pEdit.on_apply_usesoftkeyboard = function () {
		var input_elem = this._input_element;
		if (input_elem) {
			input_elem.setElementUseSoftKeyboard(this.usesoftkeyboard);
		}
	};

	_pEdit.set_imemode = function (v) {
		v = nexacro._toString(v);
		this.imemode = v;
		this.on_apply_imemode();
	};

	_pEdit.on_apply_imemode = function () {
		var input_elem = this._input_element;
		if (input_elem) {
			input_elem.setElementImeMode(this.imemode);
		}
	};

	_pEdit.set_inputmode = function (v) {
		v = nexacro._toString(v);
		if (v && v != this.inputmode) {
			this.inputmode = v;
		}
	};

	_pEdit.set_inputfilter = function (v) {
		v = nexacro._toString(v);
		if (v && v != this.inputfilter) {
			this.inputfilter = v;
			this.on_apply_inputfilter();
		}
	};

	_pEdit.on_apply_inputfilter = function () {
		var api = this._edit_base_api;
		if (api) {
			api.setInputfilter(this.inputfilter);
		}
	};

	_pEdit.set_inputtype = function (v) {
		v = nexacro._toString(v);
		if (v == "") {
			v = "normal";
		}

		if (v && v != this.inputtype) {
			this.inputtype = v;
			this.on_apply_inputtype();
		}
	};

	_pEdit.on_apply_inputtype = function () {
		var api = this._edit_base_api;
		if (api) {
			api.setInputType(this.inputtype);
			api._apply_elementtype(this._input_element);
		}
	};

	_pEdit.set_lengthunit = function (v) {
		if (v != this.lengthunit) {
			this.lengthunit = v;
			this.on_apply_lengthunit();
		}
	};

	_pEdit.on_apply_lengthunit = function () {
		var api = this._edit_base_api;
		if (api) {
			api.setLengthunit(this.lengthunit);
		}
	};

	_pEdit.set_maxlength = function (v) {
		v = nexacro._toInt(v);
		if (v < 0) {
			v = 0;
		}

		if (v != this.maxlength) {
			this.maxlength = v;
			this.on_apply_maxlength();
		}
	};

	_pEdit.on_apply_maxlength = function () {
		var input_elem = this._input_element;
		if (input_elem) {
			input_elem.setElementMaxLength(this.maxlength);
		}
	};

	_pEdit.set_password = function (v) {
		v = nexacro._toBoolean(v);
		if (v != this.password) {
			this.password = v;
			this.on_apply_password();
		}
	};

	_pEdit.on_apply_password = function () {
		var input_elem = this._input_element;
		if (input_elem) {
			input_elem.setElementPassword(this.password);
		}
	};

	_pEdit.set_useime = function (v) {
		v = nexacro._toString(v);

		this.useime = v;
		this.on_apply_useime();
	};

	_pEdit.on_apply_useime = function () {
		var input_elem = this._input_element;
		if (input_elem) {
			input_elem.setElementUseIme(this.useime);
		}
	};

	_pEdit.set_useinputpanel = function (v) {
	};

	_pEdit.set_tabindentsize = function (v) {
	};

	_pEdit.set_updatebindingvalue = function (v) {
	};

	_pEdit.set_usecontextmenu = function (v) {
		v = nexacro._toBoolean(v);

		if (this.usecontextmenu != v) {
			this.usecontextmenu = v;
		}
	};

	_pEdit.getLength = function (v) {
		var api = this._edit_base_api;
		if (api) {
			if (!v) {
				v = this.lengthunit;
			}

			return api.getLength(this._input_element, this.value, false, null, v);
		}

		return -1;
	};

	_pEdit.getCaretPos = function () {
		if (this.readonly) {
			return -1;
		}

		var input_elem = this._input_element;
		if (input_elem) {
			if (!input_elem._checkActiveElement()) {
				return -1;
			}

			var pos = input_elem.getElementCaretPos();
			if (pos && pos != -1) {
				var api = this._edit_base_api;
				if (api && api._is_composition()) {
					return pos.end;
				}
				else {
					return pos.begin;
				}
			}
		}

		return -1;
	};

	_pEdit.getInputElementAttribute = function (attribute) {
		var input_elem = this._input_element;
		if (input_elem) {
			return input_elem.getInputElementAttribute(attribute);
		}

		return undefined;
	};

	_pEdit.setInputElementAttribute = function (attribute, attrvalue) {
		var input_elem = this._input_element;
		if (input_elem) {
			return input_elem.setInputElementAttribute(attribute, attrvalue);
		}

		return false;
	};

	_pEdit.setCaretPos = function (v) {
		var api = this._edit_base_api;
		var input_elem = this._input_element;
		if (input_elem) {
			this._caret_pos.org_begin = v;
			this._caret_pos.org_end = v;

			if (arguments.length == 0) {
				v = 0;
			}
			else {
				v = nexacro._toInt(v);
				if (v == -1) {
					if (v && this.value != undefined) {
						v = this.value.length;
					}
					else {
						v = 0;
					}
				}
			}

			input_elem.setElementSetSelect(v, v);
			api._input_begin_pos = api._begin_pos = api._end_pos = v;
			this._caret_pos.begin = v;
			this._caret_pos.end = v;
			this._setcaret = true;

			return true;
		}

		return false;
	};

	_pEdit.getSelect = function () {
		var api = this._edit_base_api;
		if (api) {
			var start = api._begin_pos !== undefined ? api._begin_pos : 0;
			var end = api._end_pos !== undefined ? api._end_pos : 0;
			return [start, end];
		}
		else {
			return [0, 0];
		}
	};

	_pEdit.setSelect = function (start, end) {
		var input_elem = this._input_element;
		if (input_elem) {
			var api = this._edit_base_api;
			var txt = this.text ? this.text : "";
			var txt_len = txt.length;

			this._caret_pos.org_begin = start;
			this._caret_pos.org_end = end;

			if (nexacro._isNull(start) || start === "") {
				start = 0;
			}
			if (nexacro._isNull(end) || end === "") {
				end = -1;
			}

			if (!nexacro._isNumber(start)) {
				start = nexacro._toInt(start);
			}
			if (!nexacro._isNumber(end)) {
				end = nexacro._toInt(end);
			}

			if (start == -1) {
				start = txt_len;
			}
			if (end == -1) {
				end = txt_len;
			}

			if (start > end) {
				var tmp = start;
				start = end;
				end = tmp;
			}

			api._begin_pos = start;
			api._end_pos = end;
			this._caret_pos.begin = start;
			this._caret_pos.end = end;
			this._setcaret = true;

			if (input_elem._checkActiveElement()) {
				input_elem.setElementSetSelect(start, end);
			}
			else {
				input_elem.setElementSetSelect(start, end);
			}

			return true;
		}

		return false;
	};

	_pEdit.getSelectedText = function () {
		var api = this._edit_base_api;
		var elem = this._input_element;
		if (api) {
			var start = api._begin_pos !== undefined ? api._begin_pos : 0;
			var end = api._end_pos !== undefined ? api._end_pos : 0;
			var txt = api._getText();


			if (txt && (start != end)) {
				return txt.substring(start, end);
			}
			else {
				return "";
			}
		}

		return "";
	};

	_pEdit.setSelectedText = function (v) {
		v = nexacro._toString(v);
		var api = this._edit_base_api;
		var elem = this._input_element;

		if (api) {
			if (!elem._is_focused) {
				elem._bFireSelectEvent = false;
				elem.setElementSetSelect(this._old_selection[0], this._old_selection[1]);
			}

			var ret = api.setSelectText(this._input_element, v);

			if (ret && !elem._is_focused) {
				var focus_text = api._getFocusText();
				var focus_val = api._getFocusValue();
				var cur_text = api._getText();
				var cur_val = api._getValue();

				this._on_fire_changeEventSet(focus_text, focus_val, cur_text, cur_val);

				this._restoreSelect();
				this._cancelSelect();
			}

			elem._bFireSelectEvent = true;

			return ret;
		}

		return "";
	};

	_pEdit.isAboveSelected = function () {
	};

	_pEdit.updateToDataset = function () {
		if (!this._bind_event) {
			return false;
		}

		var ret = this.applyto_bindSource("value", this.value);
		if (this._textchanging) {
			this._dsupdate_in_textchanging = true;
			if (!ret) {
				this._dsupdate_cancel = true;
			}
			else {
				this._dsupdate_cancel = false;
			}
		}
		else {
			this._dsupdate_in_textchanging = false;
		}
		return ret;
	};

	_pEdit._on_activate = function () {
		if (!this._isSelected()) {
			this._stat_change("focus", "normal");
		}

		this._activate_flag = true;
	};

	_pEdit._on_killfocus = function (obj, fromObj) {
		if (!this._is_alive) {
			return;
		}

		var api = this._edit_base_api;
		var elem = this._input_element;

		if (api && elem) {
			var focus_text = api._getFocusText();
			var focus_val = api._getFocusValue();
			var cur_text = api._getText();
			var cur_val = api._getValue();

			if (this._activate_flag) {
				this._activate_flag = false;
			}

			var elem_val = elem.getElementValue();
			if (nexacro.Browser == "IE" && (nexacro.BrowserVersion == 8 || nexacro.BrowserVersion == 9) && 
				elem_val != cur_val) {
				api._setText(elem_val);
				api._setValue(elem_val);
				api.syncValue();
				cur_text = api._getText();
			}

			if ((nexacro.BrowserType == "Edge" || nexacro.Browser == "IE") && !elem._is_focused) {
				if (focus_text != cur_text) {
					this.applyto_bindSource("value", this.value);
				}
				return;
			}

			api._is_on_killfocus = true;
			this._on_input_blur(elem);
			focus_text = api._getFocusText();
			focus_val = api._getFocusValue();
			cur_text = api._getText();
			cur_val = api._getValue();
			api._is_on_killfocus = false;

			if (focus_text != cur_text) {
				var win = this._getWindow();
				if (win && win._is_active_window != true && !obj) {
					elem.setElementValue(api._value, false, true);
					return;
				}

				var ret = this._on_fire_changeEventSet(focus_text, focus_val, cur_text, cur_val);
				if (!ret) {
					return;
				}
			}
			else if (focus_val === undefined && focus_text == cur_text) {
				api._setValue(undefined);
				api._setText("");
				api.syncValue();

				elem.setElementValue(api._value);
			}
			else {
				elem.setElementValue(api._value, false, true);
			}

			this._restoreSelect();

			var isRuntimeDisable = (nexacro.Browser == "Runtime" && !elem.enable) ? true : false;
			if (isRuntimeDisable) {
				elem.setElementEnable(true);
			}

			this._cancelSelect();

			if (isRuntimeDisable) {
				elem.setElementEnable(false);
			}

			if ((nexacro.Browser == "IE" || nexacro.BrowserType == "Edge" || nexacro.Browser == "Gecko") && 
				nexacro._isNull(this.value) && this.displaynulltext) {
				elem._setInputVisible(false);
			}
		}
	};

	_pEdit._cancelSelect = function () {
		var api = this._edit_base_api;

		if (nexacro.BrowserType == "Edge" || nexacro.Browser == "IE" || nexacro.Browser == "Gecko") {
			if (api._is_selected()) {
				if (this.visible) {
					var form = this._getRootForm();
					var form_elem = form.getElement();

					if (form.vscrollbar) {
						form_elem._recover_vpos = form.vscrollbar.pos;
					}
					if (form.hscrollbar) {
						form_elem._recover_hpos = form.hscrollbar.pos;
					}

					var input_handle = this._input_element._input_handle;
					var _doc = this._input_element.getRootWindowHandle();

					this._input_element.setElementSetSelect(api._begin_pos, api._begin_pos);
					nexacro._inputsetCaretPos(input_handle, _doc);

					if (nexacro.BrowserVersion <= 8) {
						form_elem._recover_vpos = undefined;
						form_elem._recover_hpos = undefined;
					}
				}
				else {
					this.setCaretPos(api._begin_pos);
				}
			}
		}
		else if (nexacro.Browser == "Runtime" || nexacro.Browser == "Chrome" || (nexacro.Browser == "Edge" && nexacro.BrowserType == "Webkit")) {
			if (api._is_selected()) {
				this.setCaretPos(api._begin_pos);
			}
		}
	};

	_pEdit._restoreSelect = function () {
		this._old_selection = this.getSelect();

		this._caret_pos.begin = this._old_selection[0];
		this._caret_pos.end = this._old_selection[1];
	};

	_pEdit._on_click = function (elem, button, alt_key, ctrl_key, shift_key, meta_key, canvasX, canvasY, screenX, screenY) {
		if (!this._is_alive) {
			return;
		}

		if (this.visible && this._isEnable() && this.enableevent) {
			var caretPos = this.getCaretPos();
			var clientXY = this._getClientXY(canvasX, canvasY);

			this.on_fire_oneditclick(this, caretPos, button, alt_key, ctrl_key, shift_key, meta_key, screenX, screenY, canvasX, canvasY, clientXY[0], clientXY[1], this, this);
		}
	};

	_pEdit._on_input_keyinput = function (elem) {
		var api = this._edit_base_api;
		if (api) {
			api._on_input_keyinput(elem);
			api._on_input_keyinput_after();
		}
	};

	_pEdit._on_input_focus = function (elem, target) {
		var api = this._edit_base_api;
		if (api) {
			api._on_input_focus(elem, target);
		}
	};

	_pEdit._on_input_blur = function (elem, target) {
		var api = this._edit_base_api;
		if (api) {
			api._on_input_blur(elem, target);
		}
	};

	_pEdit._on_input_keydown = function (elem, keyCode, altKey, ctrlKey, shiftKey, metaKey) {
		var bRet = false;
		var api = this._edit_base_api;

		if (api) {
			bRet = api._on_input_keydown(elem, keyCode, altKey, ctrlKey, shiftKey, metaKey);
		}
		return bRet;
	};

	_pEdit._on_input_keyup = function (elem, keyCode, altKey, ctrlKey, shiftKey, metaKey) {
		var bRet = false;
		var api = this._edit_base_api;
		if (api) {
			bRet = api._on_input_keyup(elem, keyCode, altKey, ctrlKey, shiftKey, metaKey);
		}
		return bRet;
	};

	_pEdit._on_input_keypress = function (elem, keyCode, charCode, altKey, ctrlKey, shiftKey, metaKey) {
		var bRet = false;
		var api = this._edit_base_api;
		if (api) {
			bRet = api._on_input_keypress(elem, keyCode, charCode, altKey, ctrlKey, shiftKey, metaKey);
		}
		return bRet;
	};

	_pEdit._on_input_mousedown = function (elem, altKey, ctrlKey, shiftKey, metaKey) {
		var api = this._edit_base_api;
		if (api) {
			api._on_input_mousedown(elem, altKey, ctrlKey, shiftKey, metaKey);
		}
	};

	_pEdit._on_input_mouseup = function (elem, altKey, ctrlKey, shiftKey, metaKey) {
		var api = this._edit_base_api;
		if (api) {
			api._on_input_mouseup(elem, altKey, ctrlKey, shiftKey, metaKey);
		}
	};

	_pEdit._on_input_mousemove = function (elem) {
		var api = this._edit_base_api;
		if (api) {
			api._on_input_mousemove(elem);
		}
	};

	_pEdit._on_input_touchstart = function (elem) {
		var api = this._edit_base_api;
		if (api) {
			api._on_input_touchstart(elem);
		}
	};

	_pEdit._on_input_touchmove = function (elem) {
		var api = this._edit_base_api;
		if (api) {
			api._on_input_touchmove(elem);
		}
	};

	_pEdit._on_input_touchend = function (elem) {
		var api = this._edit_base_api;
		if (api) {
			api._on_input_touchend(elem);
		}
	};

	_pEdit._on_input_select = function (elem) {
		var api = this._edit_base_api;
		if (api) {
			api._on_input_select(elem);
		}
	};

	_pEdit._on_input_selectionchange = function (elem) {
		var api = this._edit_base_api;
		if (api) {
			api._on_input_selectionchange(elem);
		}
	};

	_pEdit._on_input_copy = function (elem) {
		var api = this._edit_base_api;
		if (api) {
			api._on_input_copy(elem);
		}
	};

	_pEdit._on_input_cut = function (elem) {
		var api = this._edit_base_api;
		if (api) {
			api._on_input_cut(elem);
		}
	};

	_pEdit._on_input_paste = function (elem) {
		var api = this._edit_base_api;
		if (api) {
			api._on_input_paste(elem);
		}
	};

	_pEdit._on_input_compositionstart = function (data) {
		var api = this._edit_base_api;
		if (api) {
			api._on_input_compositionstart(data);
		}
	};

	_pEdit._on_input_compositionupdate = function (data) {
		var api = this._edit_base_api;
		if (api) {
			api._on_input_compositionupdate(data);
		}
	};

	_pEdit._on_input_compositionend = function (data) {
		var api = this._edit_base_api;
		if (api && api._is_composition()) {
			api._on_input_compositionend(data);
		}
	};

	_pEdit.on_fire_cancharchange = function (obj, chartext, pretext, posttext) {
		if (this.cancharchange && this.cancharchange._has_handlers) {
			var evt = new nexacro.CanCharEventInfo(obj, "cancharchange", chartext, pretext, posttext);
			return this.cancharchange._fireCheckEvent(this, evt);
		}

		return true;
	};

	_pEdit.on_fire_canchange = function (obj, bText, bValue, aText, aValue) {
		if (this.canchange && this.canchange._has_handlers) {
			var evt = new nexacro.ChangeEventInfo(obj, "canchange", bText, bValue, aText, aValue);
			return this.canchange._fireCheckEvent(this, evt);
		}

		return true;
	};

	_pEdit.on_fire_onchanged = function (obj, pretext, prevalue, posttext, postvalue) {
		if (this.onchanged && this.onchanged._has_handlers) {
			var evt = new nexacro.ChangeEventInfo(obj, "onchanged", pretext, prevalue, posttext, postvalue);
			return this.onchanged._fireEvent(this, evt);
		}
	};
	_pEdit.on_fire_oneditclick = function (obj, caretpos, button, alt_key, ctrl_key, shift_key, meta_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, from_refer_comp) {
		if (this.oneditclick && this.oneditclick._has_handlers) {
			var evt = new nexacro.EditClickEventInfo(obj, "oneditclick", caretpos, button, alt_key, ctrl_key, shift_key, meta_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, from_refer_comp);
			return this.oneditclick._fireEvent(this, evt);
		}

		return true;
	};

	_pEdit.on_fire_ontextchanged = function (obj, pretext, posttext) {
		if (this.ontextchanged && this.ontextchanged._has_handlers) {
			var evt = new nexacro.TextChangedEventInfo(obj, "ontextchanged", pretext, posttext);
			return this.ontextchanged._fireEvent(this, evt);
		}

		return true;
	};

	_pEdit.on_fire_ontextchange = function (event_info, evt) {
		var evt2 = evt;
		if (!evt) {
			evt2 = new nexacro.TextChangeEventInfo(this, "ontextchange", event_info.chartext, event_info.pretext, event_info.posttext, event_info.preimetext, event_info.postimetext);
		}
		else if (!(evt instanceof nexacro.TextChangeEventInfo)) {
			evt.evt = evt2 = new nexacro.TextChangeEventInfo(this, "ontextchange", event_info.chartext, event_info.pretext, event_info.posttext, event_info.preimetext, event_info.postimetext);
		}

		if (this.ontextchange && this.ontextchange._has_handlers) {
			return this.ontextchange._fireCheckEvent(this, evt2);
		}
		return true;
	};

	_pEdit.on_fire_onchar = function (event_info, evt) {
		var evt2 = evt;
		if (!evt) {
			evt2 = new nexacro.TextChangeEventInfo(this, "onchar", event_info.chartext, event_info.prechareventtext, event_info.posttext);
		}
		else if (!(evt instanceof nexacro.TextChangeEventInfo)) {
			evt.evt = evt2 = new nexacro.TextChangeEventInfo(this, "onchar", event_info.chartext, event_info.prechareventtext, event_info.posttext);
		}

		if (this.onchar && this.onchar._has_handlers) {
			return this.onchar._fireCheckEvent(this, evt2);
		}
		return true;
	};

	_pEdit._on_fire_textchangeEventSet = function (text_info) {
		var org_chartext = text_info.chartext;
		var changechartext = text_info.chartext;

		var bCancel = false;
		var bInsert = text_info.bInsert;
		var bCut = text_info.bCut;

		var bTextchangeRet = true;
		var bCancahrchangeRet = true;
		var bOncharRet = true;
		var bChartextChange = false;
		var bChangeInputValue = false;

		var fireCancharEvent = true;
		var bSetValue = false;
		var bSetCaret = false;

		var strFront = "";
		var strRear = "";

		var api = this._edit_base_api;
		var textEvt = new nexacro.TextChangeEventInfo(this, "ontextchange", text_info.chartext, text_info.pretext, text_info.posttext, text_info.preimetext, text_info.postimetext);
		var charEvt = new nexacro.TextChangeEventInfo(this, "onchar", text_info.chartext, text_info.prechareventtext, text_info.posttext);

		this._setcaret = false;
		this._is_set_value = false;

		var ret = this.on_fire_ontextchange(text_info, textEvt);

		if (ret) {
			if (org_chartext != textEvt.chartext) {
				bChartextChange = true;
				changechartext = textEvt.chartext;
			}

			if (this._is_set_value) {
				api._updateEventInfo(text_info, textEvt, charEvt);
				this._is_set_value = false;
				bSetValue = true;
				if (this._setcaret) {
					bSetCaret = true;
					this._setcaret = false;
				}
			}

			if (this._setcaret) {
				api.restoreBuffer(api._old_text, api._old_begin_pos, api._old_end_pos);
				api.syncValue();
				this.setSelect(this._caret_pos.org_begin, this._caret_pos.org_end);
				api.clearBuffer(api._text, api._begin_pos, api._end_pos);

				strFront = api._text.substr(0, api._begin_pos);
				strRear = api._text.substr(api._end_pos, api._text.length - api._end_pos);

				text_info.posttext = strFront + changechartext + strRear;

				this._setcaret = false;
				bChangeInputValue = true;
			}

			if (bSetCaret) {
				this._setcaret = true;
				bSetCaret = false;
			}

			if (!api._is_composition()) {
				if (nexacro.Browser == "IE" && nexacro.BrowserVersion == 11) {
					var imetext = text_info.postimetext == "" ? text_info.preimetext : text_info.postimetext;

					if (api._keycode == nexacro.KeyCode_ImeInput && text_info.postimetext == "" && (imetext != "" ? !api._is_hangul(imetext) : false)) {
						ret = fireCancharEvent = false;
					}
					if (api._keycode == nexacro.KeyCode_ImeInput && api._stat_composition._curr_data == "" && imetext != "" && api._is_hangul(imetext) && !api._is_on_killfocus && !bSetValue) {
						ret = fireCancharEvent = false;
					}

					delete imetext;
					imetext = null;
				}
				else if (nexacro.OS == "iOS" && nexacro.Browser == "MobileSafari") {
					if (api._keycode == 8) {
						var elem = this._input_element;
						if (api._stat_composition._curr_stat == nexacro.EditBase.Status.CompositionEnd && org_chartext == "" && api.getCompositionData(elem) == "") {
							ret = fireCancharEvent = false;
						}
					}
				}
				else if (nexacro.Browser == "Chrome" || (nexacro.Browser == "Edge" && nexacro.BrowserType == "Webkit")) {
					if (api._keycode == nexacro.KeyCode_ImeInput && org_chartext == "" && api._stat_composition.getCurrentStatus() != nexacro.EditBase.Status.None) {
						ret = fireCancharEvent = false;
					}
				}
				else if ((nexacro._isDesktop() && nexacro.Browser == "Safari") || nexacro.BrowserType == "Edge") {
					if (api._keycode == nexacro.KeyCode_ImeInput && org_chartext == "" && !api._is_on_killfocus && api._stat_composition.getCurrentStatus() == nexacro.EditBase.Status.CompositionEnd && !api._pasteAction && !bSetValue) {
						ret = fireCancharEvent = false;
					}
				}
				else if (nexacro.Browser == "Runtime") {
					var imetext = text_info.postimetext == "" ? text_info.preimetext : text_info.postimetext;
					if (api._keycode == nexacro.KeyCode_ImeInput && org_chartext == "" && imetext != "" && !bSetValue) {
						ret = fireCancharEvent = false;
					}

					delete imetext;
					imetext = null;
				}

				if (ret) {
					if (nexacro.OS == "iOS" && nexacro.Browser == "MobileSafari") {
						if (charEvt.pretext == "" && charEvt.posttext == "" && api._keycode == nexacro.Event.KEY_BACKSPACE && text_info.pretext != "") {
							charEvt.pretext = text_info.pretext;
						}

						if (api._is_hangul(org_chartext)) {
							ret = this.on_fire_cancharchange(this, textEvt.chartext, text_info.prechareventtext, textEvt.posttext);
						}
						else {
							if (bInsert) {
								if (charEvt.posttext != charEvt.pretext && !(api._is_on_killfocus && text_info.pretext == text_info.posttext)) {
									if (charEvt.chartext != "") {
										ret = this.on_fire_cancharchange(this, textEvt.chartext, text_info.prechareventtext, textEvt.posttext);
									}
									else {
										if (api._keycode == nexacro.Event.KEY_BACKSPACE || api._cutAction) {
											ret = this.on_fire_cancharchange(this, textEvt.chartext, text_info.prechareventtext, textEvt.posttext);
										}
									}
								}
							}
							else {
								if (this.maxlength > 0 && text_info.pretext.length >= this.maxlength && charEvt.pretext != "" && charEvt.posttext == charEvt.pretext) {
									fireCancharEvent = false;
									ret = false;

									var elem = this._input_element;
									api._accept_focus_event = false;
									api.setElementCaretPos(api._input_begin_pos, api._input_begin_pos, elem);
									api._accept_focus_event = true;
								}
							}
						}
					}
					else {
						ret = this.on_fire_cancharchange(this, textEvt.chartext, text_info.prechareventtext, textEvt.posttext);
					}

					if (this._is_set_value) {
						api._updateEventInfo(text_info, textEvt, charEvt);
						this._is_set_value = false;
						bSetValue = true;
					}
				}

				if (ret) {
					if (nexacro.OS == "iOS" && nexacro.Browser == "MobileSafari") {
						if (api._is_hangul(org_chartext)) {
							ret = this.on_fire_onchar(text_info, charEvt);
						}
						else if (bInsert && charEvt.posttext != charEvt.pretext && !(api._is_on_killfocus && text_info.pretext == text_info.posttext)) {
							if (charEvt.chartext != "") {
								ret = this.on_fire_onchar(text_info, charEvt);
							}
							else {
								if (api._keycode == nexacro.Event.KEY_BACKSPACE || api._cutAction) {
									ret = this.on_fire_onchar(text_info, charEvt);
								}
							}
						}
					}
					else {
						ret = this.on_fire_onchar(text_info, charEvt);
					}

					if (!ret) {
						bOncharRet = false;
					}

					if (text_info.chartext != charEvt.chartext) {
						changechartext = charEvt.chartext;
					}

					if (this._is_set_value) {
						api._updateEventInfo(text_info, textEvt, charEvt);
						this._is_set_value = false;
						bSetValue = true;
					}
				}
				else {
					bOncharRet = false;
					bCancahrchangeRet = false;
				}
			}
			else {
				fireCancharEvent = false;
			}

			if (org_chartext != changechartext) {
				var chartext = api.applyInputmode(changechartext);
				chartext = api._apply_inputfilter(chartext);
				chartext = api._apply_inputtype(chartext);

				if (changechartext.length > 0 && chartext.length == 0) {
					bCancel = true;
				}

				if (!bCancel) {
					bInsert = api._check_maxlength_from_text_event(chartext);

					if (!bInsert) {
						chartext = "";
					}
					else {
						chartext = api._apply_maxlength_from_text_event(chartext);

						if (chartext != changechartext) {
							bCut = true;
						}
					}
				}

				text_info.chartext = chartext;
				textEvt.chartext = chartext;

				if (bSetValue) {
					textEvt.posttext += chartext;
					text_info.posttext = textEvt.posttext === "" ? text_info.posttext : textEvt.posttext;
				}
				else {
					strFront = text_info.pretext.substr(0, api._input_begin_pos);

					if (nexacro.Browser == "IE" && api._is_hangul(org_chartext)) {
						strRear = text_info.posttext.substr(api._end_pos, text_info.posttext.length - api._end_pos);
					}
					else if (nexacro.Browser == "Safari" && nexacro._isDesktop() && api._is_hangul(org_chartext)) {
						strRear = text_info.pretext.substr(api._end_pos + org_chartext.length, text_info.pretext.length);
					}
					else if ((nexacro.Browser == "Chrome" || (nexacro.Browser == "Edge" && nexacro.BrowserType == "Webkit")) && api._is_hangul(org_chartext)) {
						strRear = text_info.pretext.substr(api._end_pos + org_chartext.length, text_info.pretext.length - org_chartext.length);
					}
					else {
						strRear = text_info.pretext.substr(api._end_pos, text_info.pretext.length - api._end_pos);
					}

					textEvt.posttext = strFront + chartext + strRear;
					text_info.posttext = strFront + chartext + strRear;
				}

				if (bChartextChange && bOncharRet && bCancahrchangeRet) {
					ret = this.on_fire_cancharchange(this, textEvt.chartext, text_info.prechareventtext, textEvt.posttext);
					if (this._is_set_value) {
						api._updateEventInfo(text_info, textEvt);
						this._is_set_value = false;
					}
					if (ret) {
						var evt = new nexacro.TextChangeEventInfo(this, "onchar", textEvt.chartext, text_info.prechareventtext, textEvt.posttext);
						ret = this.on_fire_onchar(text_info, evt);

						if (!ret) {
							bOncharRet = false;
						}

						if (this._is_set_value) {
							api._updateEventInfo(text_info);
							this._is_set_value = false;
						}
					}
					else {
						bOncharRet = false;
						bCancahrchangeRet = false;
					}
				}
			}
		}
		else {
			bTextchangeRet = false;

			if (this._is_set_value) {
				api._updateEventInfo(text_info);
				this._is_set_value = false;
			}
		}

		var ret = {
			bTextchangeRet : bTextchangeRet, 
			bCancahrchangeRet : bCancahrchangeRet, 
			bOncharRet : bOncharRet, 
			fireCancharEvent : fireCancharEvent, 
			bChangeInputValue : bChangeInputValue, 
			bInsert : bInsert, 
			bCut : bCut
		};

		return ret;
	};

	_pEdit._on_fire_changeEventSet = function (pretext, prevalue, posttext, postvalue) {
		var api = this._edit_base_api;
		var elem = this._input_element;

		var value = this.value;

		this._textchanging = true;
		var ret = this.on_fire_canchange(this, pretext, prevalue, posttext, postvalue);
		if (!ret) {
			api._setText(pretext);
			api._setValue(prevalue);
			api.syncValue();
			api._setFocusValue();

			elem.setElementValue(api._value);
			this._init_bind_flag();

			return false;
		}

		elem.setElementValue(api._value, false, true);

		var bind_ret = this.applyto_bindSource("value", this.value);
		var after_value = this.value;

		if (this._dsupdate_cancel || (!this._dsupdate_in_textchanging && !bind_ret && value == after_value)) {
			api._setText(pretext);
			api._setValue(prevalue);
			api.syncValue();
			api._setFocusValue();

			elem.setElementValue(api._value);
			this._init_bind_flag();

			return false;
		}

		api._setFocusValue();
		this._init_bind_flag();
		this.on_fire_onchanged(this, pretext, prevalue, this.text, this.value);
		api._setFocusValue();

		return true;
	};

	_pEdit._init = function () {
		var api = this._edit_base_api;
		if (api) {
			api._init();
		}

		this.set_value(undefined);
	};

	_pEdit._init_bind_flag = function () {
		this._textchanging = false;
		this._dsupdate_in_textchanging = false;
		this._dsupdate_cancel = false;
	};

	_pEdit._getDragData = function () {
		return this.getSelectedText();
	};

	_pEdit._setValue = function (v) {
		if (nexacro._isNull(v)) {
			this.text = "";
		}
		else {
			this.text = nexacro._toString(v);
		}

		this.value = v;
		this.on_apply_value();
	};

	_pEdit._accept_keydown_event = function (keyCode) {
		return true;
	};

	_pEdit._recreateInputElement = function () {
		var input_elem = this._input_element;

		if (input_elem) {
			input_elem._destroyInputHandle();
			input_elem._input_handle = input_elem._createInputHandle();
			input_elem._bindEvent(input_elem);
		}
	};

	_pEdit._accept_keydown_event = function (keyCode) {
		return true;
	};

	_pEdit._set_editbase_focusstat = function (stat) {
		var api = this._edit_base_api;
		if (api) {
			switch (stat) {
				case "focus":
					api._stat_focus.setStatus(nexacro.EditBase.Status.Focus);
					break;
				case "blur":
					api._stat_focus.setStatus(nexacro.EditBase.Status.Blur);
					break;
				default:
					api._stat_focus.setStatus(stat);
					break;
			}
			;
		}
	};

	delete _pEdit;
	_pEdit = null;

	nexacro.EditCtrl = function (id, position, left, top, width, height, right, bottom, parent) {
		nexacro.Edit.call(this, id, position, left, top, width, height, right, bottom, parent);
		this._is_subcontrol = true;
	};
	var _pEditCtrl = nexacro._createPrototype(nexacro.Edit, nexacro.EditCtrl);
	nexacro.EditCtrl.prototype = _pEditCtrl;
	_pEditCtrl._type_name = "EditControl";
	nexacro._setForControlStyleFinder(_pEditCtrl);

	delete _pEditCtrl;
	_pEditCtrl = null;
}
;
