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

if (!nexacro.ProgressBar) {
	nexacro.ProgressBar_Style = function (target) {
		nexacro.Style.call(this);
		if (target) {
			this._target = target;
		}
	};

	var _pProgressBarStyle = nexacro._createPrototype(nexacro.Style, nexacro.ProgressBar_Style);
	nexacro.ProgressBar_Style.prototype = _pProgressBarStyle;

	eval(nexacro._createValueAttributeEvalStr("_pProgressBarStyle", "bartype"));
	eval(nexacro._createValueAttributeEvalStr("_pProgressBarStyle", "smooth"));
	eval(nexacro._createValueAttributeEvalStr("_pProgressBarStyle", "direction"));
	eval(nexacro._createValueAttributeEvalStr("_pProgressBarStyle", "startimage"));
	eval(nexacro._createValueAttributeEvalStr("_pProgressBarStyle", "progressimage"));
	eval(nexacro._createValueAttributeEvalStr("_pProgressBarStyle", "endimage"));
	eval(nexacro._createColorAttributeEvalStr("_pProgressBarStyle", "barcolor"));
	eval(nexacro._createGradationAttributeEvalStr("_pProgressBarStyle", "bargradation"));

	_pProgressBarStyle.__custom_emptyObject = function () {
		this.bartype = null;
		this.smooth = null;
		this.direction = null;
		this.startimage = null;
		this.progressimage = null;
		this.endimage = null;
		this.barcolor = null;
		this.bargradation = null;
	};

	_pProgressBarStyle.__get_custom_style_value = function () {
		var val = "";
		if (this.bartype && !this.bartype._is_empty) {
			val += "bartype:" + this.bartype._value + "; ";
		}
		if (this.smooth && !this.smooth._is_empty) {
			val += "smooth:" + this.smooth._value + "; ";
		}
		if (this.direction && !this.direction._is_empty) {
			val += "direction:" + this.direction._value + "; ";
		}
		if (this.startimage && !this.startimage._is_empty) {
			val += "startimage:" + this.startimage._value + "; ";
		}
		if (this.progressimage && !this.progressimage._is_empty) {
			val += "progressimage:" + this.progressimage._value + "; ";
		}
		if (this.endimage && !this.endimage._is_empty) {
			val += "endimage:" + this.endimage._value + "; ";
		}
		if (this.barcolor && !this.barcolor._is_empty) {
			val += "barcolor:" + this.barcolor._value + "; ";
		}
		if (this.bargradation && !this.bargradation._is_empty) {
			val += "bargradation:" + this.bargradation._value + "; ";
		}
		return val;
	};

	nexacro.ProgressBar_CurrentStyle = function () {
		nexacro.CurrentStyle.call(this);
		this.bartype = null;
		this.smooth = null;
		this.direction = null;
		this.startimage = null;
		this.progressimage = null;
		this.endimage = null;
		this.barcolor = null;
		this.bargradation = null;
	};

	var _pProgressBarCurrentStyle = nexacro._createPrototype(nexacro.CurrentStyle, nexacro.ProgressBar_CurrentStyle);
	nexacro.ProgressBar_CurrentStyle.prototype = _pProgressBarCurrentStyle;

	_pProgressBarCurrentStyle.__custom_emptyObject = _pProgressBarStyle.__custom_emptyObject;
	_pProgressBarCurrentStyle.__get_custom_style_value = _pProgressBarStyle.__get_custom_style_value;

	_pProgressBarStyle = null;
	_pProgressBarCurrentStyle = null;

	nexacro.ProgressBar = function (id, position, left, top, width, height, right, bottom, parent) {
		nexacro.Component.call(this, id, position, left, top, width, height, right, bottom, parent);

		this.pos = 0;
		this.step = 1;
		this.max = 100;
		this.min = 0;
		this.blocksize = 15;
		this.blockgap = 2;

		this._cell_list = [];
		this._cell_item = null;
		this._start_cell = null;
		this._progress_cell = null;
		this._end_cell = null;
		this._start_cell_width = 0;
		this._progress_cell_width = 0;
		this._end_cell_width = 0;
		this._start_cell_url = "";
		this._progress_cell_url = "";
		this._end_cell_url = "";
		this._accessibility_role = "progressbar";
	};

	var _pProgressBar = nexacro._createPrototype(nexacro.Component, nexacro.ProgressBar);
	nexacro.ProgressBar.prototype = _pProgressBar;

	_pProgressBar._type_name = "ProgressBar";

	nexacro.ProgressBar._default_bartype = nexacro._getCachedStyleObj("bartype", "normal");

	_pProgressBar.on_apply_custom_pseudo = function (pseudo) {
		if (!pseudo) {
			pseudo = this._pseudo;
		}

		var curstyle = this.currentstyle;
		var style_obj = this.on_find_CurrentStyle_bartype(pseudo);
		if (curstyle.bartype != style_obj) {
			curstyle.bartype = style_obj;
			this.on_apply_style_bartype(style_obj);
		}

		style_obj = this.on_find_CurrentStyle_smooth(pseudo);
		if (curstyle.smooth != style_obj) {
			curstyle.smooth = style_obj;
			this.on_apply_style_smooth(style_obj);
		}

		style_obj = this.on_find_CurrentStyle_direction(pseudo);
		if (curstyle.direction != style_obj) {
			curstyle.direction = style_obj;
			this.on_apply_style_direction(style_obj);
		}

		style_obj = this.on_find_CurrentStyle_startImage(pseudo);
		if (curstyle.startimage != style_obj) {
			curstyle.startimage = style_obj;
			this.on_apply_style_startimage(style_obj);
		}

		style_obj = this.on_find_CurrentStyle_endImage(pseudo);
		if (curstyle.endimage != style_obj) {
			curstyle.endimage = style_obj;
			this.on_apply_style_endimage(style_obj);
		}

		style_obj = this.on_find_CurrentStyle_progressImage(pseudo);
		if (curstyle.progressimage != style_obj) {
			curstyle.progressimage = style_obj;
			this.on_apply_style_progressimage(style_obj);
		}

		style_obj = this.on_find_CurrentStyle_barColor(pseudo);
		if (curstyle.barcolor != style_obj) {
			curstyle.barcolor = style_obj;
			this.on_apply_style_barcolor(style_obj);
		}

		style_obj = this.on_find_CurrentStyle_barGradation(pseudo);
		if (curstyle.bargradation != style_obj) {
			curstyle.bargradation = style_obj;
			this.on_apply_style_bargradation(style_obj);
		}

		style_obj = this.on_find_CurrentStyle_font(pseudo);
		if (curstyle.font != style_obj) {
			curstyle.font = style_obj;
			this.on_apply_style_font(style_obj);
		}

		style_obj = this.on_find_CurrentStyle_letterspace(pseudo);
		if (curstyle.letterspace != style_obj) {
			curstyle.letterspace = style_obj;
			this.on_apply_style_letterspace(style_obj);
		}

		style_obj = this.on_find_CurrentStyle_color(pseudo);
		if (curstyle.color != style_obj) {
			curstyle.color = style_obj;
			this.on_apply_style_color(style_obj);
		}

		style_obj = this.on_find_CurrentStyle_align(pseudo);
		if (curstyle.align != style_obj) {
			curstyle.align = style_obj;
			this.on_apply_style_align(style_obj);
		}
	};

	_pProgressBar.on_create_custom_style = function () {
		return new nexacro.ProgressBar_Style(this);
	};

	_pProgressBar.on_create_custom_currentStyle = function () {
		return new nexacro.ProgressBar_CurrentStyle();
	};


	_pProgressBar.on_find_CurrentStyle_bartype = function (pseudo) {
		var bartype = this._find_pseudo_obj("bartype", pseudo);
		return (bartype) ? bartype : nexacro.ProgressBar._default_bartype;
	};
	_pProgressBar.on_find_CurrentStyle_smooth = function (pseudo) {
		return this._find_pseudo_obj("smooth", pseudo);
	};
	_pProgressBar.on_find_CurrentStyle_direction = function (pseudo) {
		return this._find_pseudo_obj("direction", pseudo);
	};
	_pProgressBar.on_find_CurrentStyle_startImage = function (pseudo) {
		return this._find_pseudo_obj("startimage", pseudo);
	};
	_pProgressBar.on_find_CurrentStyle_progressImage = function (pseudo) {
		return this._find_pseudo_obj("progressimage", pseudo);
	};
	_pProgressBar.on_find_CurrentStyle_endImage = function (pseudo) {
		return this._find_pseudo_obj("endimage", pseudo);
	};
	_pProgressBar.on_find_CurrentStyle_barColor = function (pseudo) {
		return this._find_pseudo_obj("barcolor", pseudo, "color");
	};
	_pProgressBar.on_find_CurrentStyle_barGradation = function (pseudo) {
		return this._find_pseudo_obj("bargradation", pseudo, "gradation");
	};


	_pProgressBar.on_update_style_bartype = function () {
		var bartype = this.currentstyle.bartype = this.on_find_CurrentStyle_bartype(this._pseudo);
		this.on_apply_style_bartype(bartype);
	};
	_pProgressBar.on_update_style_smooth = function () {
		var smooth = this.currentstyle.smooth = this.on_find_CurrentStyle_smooth(this._pseudo);
		this.on_apply_style_smooth(smooth);
	};
	_pProgressBar.on_update_style_direction = function () {
		var direction = this.currentstyle.direction = this.on_find_CurrentStyle_direction(this._pseudo);
		this.on_apply_style_direction(direction);
	};
	_pProgressBar.on_update_style_startimage = function () {
		var startimage = this.currentstyle.startimage = this.on_find_CurrentStyle_startImage(this._pseudo);
		this.on_apply_style_startimage(startimage);
	};
	_pProgressBar.on_update_style_progressimage = function () {
		var progressimage = this.currentstyle.progressimage = this.on_find_CurrentStyle_progressImage(this._pseudo);
		this.on_apply_style_progressimage(progressimage);
	};
	_pProgressBar.on_update_style_endimage = function () {
		var endimage = this.currentstyle.endimage = this.on_find_CurrentStyle_endImage(this._pseudo);
		this.on_apply_style_endimage(endimage);
	};
	_pProgressBar.on_update_style_barcolor = function () {
		var barcolor = this.currentstyle.barcolor = this.on_find_CurrentStyle_barColor(this._pseudo);
		this.on_apply_style_barcolor(barcolor);
	};
	_pProgressBar.on_update_style_bargradation = function () {
		var bargradation = this.currentstyle.bargradation = this.on_find_CurrentStyle_barGradation(this._pseudo);
		this.on_apply_style_bargradation(bargradation);
	};


	_pProgressBar.on_apply_style_bartype = function (v) {
		this._update();
	};

	_pProgressBar.on_apply_style_smooth = function (v) {
		this._update();
	};

	_pProgressBar.on_apply_style_direction = function (v) {
		this._update();
	};

	_pProgressBar.on_apply_style_startimage = function (v) {
		this._apply_style_image(v, this._on_start_cell, "start");
	};

	_pProgressBar.on_apply_style_progressimage = function (v) {
		this._apply_style_image(v, this._on_progress_cell, "progress");
	};

	_pProgressBar.on_apply_style_endimage = function (v) {
		this._apply_style_image(v, this._on_end_cell, "end");
	};

	_pProgressBar.on_apply_style_barcolor = function (barcolor) {
		var bartype = this.on_find_CurrentStyle_bartype();
		barcolor = barcolor ? barcolor.toString() : "transparent";

		if (barcolor != "@gradation" && bartype == "normal") {
			if (this._cell_item) {
				this._cell_item.style.set_background(barcolor);
			}

			var list = this._cell_list;
			if (list.length > 0) {
				for (var i = 0, len = list.length; i < len; i++) {
					list[i].style.set_background(barcolor);
				}
			}
		}
	};

	_pProgressBar.on_apply_style_bargradation = function (bargradation) {
		if (!bargradation) {
			return;
		}

		var barcolor = this.on_find_CurrentStyle_barColor(this._pseudo);
		barcolor = barcolor ? barcolor.toString() : "transparent";

		if (barcolor == "@gradation") {
			var cell_item = this._cell_item;
			if (cell_item) {
				cell_item.style.set_background(barcolor);
				cell_item.on_update_style_gradation();
			}
			var cell_list = this._cell_list;
			var len = cell_list.length;
			if (len > 0) {
				for (var i = 0; i < len; i++) {
					cell_list[i].style.set_background(barcolor);
					cell_list[i].on_update_style_gradation();
				}
			}
		}
	};

	_pProgressBar.on_apply_style_color = function (color) {
		if (this._text_elem && color) {
			this._text_elem.setElementColor(color);
		}
	};

	_pProgressBar.on_apply_style_font = function (font) {
		if (this._text_elem && font) {
			this._text_elem.setElementFont(font);
		}
	};

	_pProgressBar.on_apply_style_align = function (align) {
		if (this._text_elem && align) {
			this._text_elem.setElementAlignXY(align.halign ? align._halign : "center", align.valign ? align._valign : "middle");
		}
	};

	_pProgressBar.on_create_contents = function () {
		var control_elem = this.getElement();
		if (control_elem) {
			var pseudo = this._pseudo;
			if (this.text) {
				var text_elem = this._text_elem = new nexacro.TextBoxElement(control_elem);
				var align = this.on_find_CurrentStyle_align(pseudo);

				text_elem.setElementSize(this._client_width, this._client_height);
				text_elem.setElementColor(this.on_find_CurrentStyle_color(pseudo));
				text_elem.setElementFont(this.on_find_CurrentStyle_font(pseudo));
				text_elem.setElementAlignXY(align.halign ? align._halign : "center", align.valign ? align._valign : "middle");
				text_elem.setElementLetterSpace(this.on_find_CurrentStyle_letterspace(pseudo));
			}
		}
	};

	_pProgressBar.on_created_contents = function () {
		var text_elem = this._text_elem;
		var list = this._cell_list;

		if (text_elem) {
			text_elem.create();
		}

		if (this._cell_item) {
			this._cell_item.on_created();
		}

		if (list && list.length > 0) {
			for (var i = 0; i < list.length; i++) {
				list[i].on_created();
			}
		}

		if (this.cssclass) {
			this.on_apply_pseudo();
			this.on_apply_custom_pseudo();
			this.on_apply_prop_class();
		}

		this.on_apply_text();

		if (nexacro._enableaccessibility && this._isAccessibilityEnable()) {
			this._setAccessibilityInfoValueMin(this.min);
			this._setAccessibilityInfoValueMax(this.max);
			this._setAccessibilityInfoValueCur(this.pos);
		}
	};
	_pProgressBar.on_destroy_contents = function () {
		if (this._text_elem) {
			this._text_elem.destroy();
			this._text_elem = null;
		}

		this._clear();
	};

	_pProgressBar._clear = function (type) {
		if ((!type || type == "list") && this._cell_list) {
			for (var i = 0, len = this._cell_list.length; i < len; i++) {
				this._cell_list[i].destroyComponent();
			}
			this._cell_list = [];
		}

		if (!type || type == "img") {
			if (this._start_cell) {
				this._start_cell.destroyComponent();
				this._start_cell = null;
			}

			if (this._end_cell) {
				this._end_cell.destroyComponent();
				this._end_cell = null;
			}

			if (this._progress_cell) {
				this._progress_cell.destroyComponent();
				this._progress_cell = null;
			}
		}

		if (!type || type == "cell") {
			if (this._cell_item) {
				this._cell_item.destroyComponent();
				this._cell_item = null;
			}
		}
	};

	_pProgressBar.on_change_containerRect = function (width, height) {
		var textElem = this._text_elem;
		if (textElem) {
			textElem.setElementSize(width, height);
		}
		this._update();
	};
	_pProgressBar._on_getAccessibilityAdditionalLabel = function () {
		var additional = "";
		if (this._isAccessibilityEnable()) {
			additional = (this.expr && this.expr.length > 0) ? this.displaytext + " " + this.min + " " + this.max : this.pos + " " + this.min + " " + this.max;
		}
		return additional;
	};

	_pProgressBar._on_getAccessibilityAdditionalRole = function () {
		if (this._getAccessibilityRole(this.on_find_CurrentStyle_accessibility(this._pseudo)) == "progressbar") {
			return " ProgressBar";
		}
		return "";
	};
	_pProgressBar.on_apply_text = function () {
		var control_elem = this.getElement();
		if (control_elem && this.text) {
			var text_elem = this._text_elem;
			if (!text_elem) {
				text_elem = this._text_elem = new nexacro.TextBoxElement(control_elem);

				text_elem.setElementSize(this._client_width, this._client_height);
				var align = this.on_find_CurrentStyle_align(this._pseudo);

				text_elem.setElementColor(this.on_find_CurrentStyle_color(this._pseudo));
				text_elem.setElementFont(this.on_find_CurrentStyle_font(this._pseudo));
				text_elem.setElementAlignXY(align.halign ? align._halign : "center", align.valign ? align._valign : "middle");
				text_elem.setElementLetterSpace(this.on_find_CurrentStyle_letterspace(this._pseudo));

				text_elem.create();
			}

			var expr = this.expr;

			if (expr && expr.length > 0) {
				expr = expr.trim().split(":");
				var len = expr.length;
				var parser = new nexacro.ExprParser();
				var conv_expr, exprfn;
				var str;

				if (len == 1) {
					str = expr[0];
				}
				else {
					if (expr[0].trim().toUpperCase() != "EXPR") {
						str = expr.join(":");
					}
					else {
						str = expr.slice(1).join(":");
					}
				}

				conv_expr = parser.makeExpr(this, str);
				exprfn = nexacro._createInlineFunc(conv_expr, ["comp", "pos"]);

				if (exprfn) {
					try {
						var val = nexacro._toString(exprfn.call(null, this, this.pos));
						if (val != this.displaytext) {
							this.displaytext = val;
							if (nexacro._enableaccessibility && this._isAccessibilityEnable()) {
								this._setAccessibilityValue(val);
								this._notifyAccessibility(val, "notify");
							}
						}
					}
					catch (e) {
						return;
					}
				}
			}
			else {
				this.displaytext = this.text;
			}

			text_elem.setElementText(this.displaytext);
			text_elem.setElementRtlDirection(this._rtldirection);
			this.on_apply_style_align(this.currentstyle.align);
		}
	};

	_pProgressBar.on_apply_expr = function () {
		this.on_apply_text();
	};

	_pProgressBar.set_blockgap = function (v) {
		if (this._is_NaN(v)) {
			return;
		}

		v = parseInt(v) | 0;

		v = (v < 0) ? 0 : v;

		if (this.blockgap != v) {
			this.blockgap = v;
			this._update();
		}
	};

	_pProgressBar.set_blocksize = function (v) {
		if (this._is_NaN(v)) {
			return;
		}
		v = parseInt(v) | 0;

		if (v < 1) {
			v = 1;
		}

		if (this.blocksize != v) {
			this.blocksize = v;
			this._update();
		}
	};

	_pProgressBar.set_min = function (v) {
		if (this._is_NaN(v)) {
			return;
		}

		v = parseInt(v) | 0;

		v = (v < 0) ? 0 : v;

		if (this.min != v) {
			this.min = v;

			if (v > this.max) {
				this.max = v;
			}
			if (v > this.pos) {
				this.pos = v;
			}

			if (nexacro._enableaccessibility && this._isAccessibilityEnable()) {
				this._setAccessibilityInfoValueMin(v);
			}
			this._update();
		}
	};

	_pProgressBar.set_max = function (v) {
		if (this._is_NaN(v)) {
			return;
		}

		v = parseInt(v) | 0;

		v = (v < 0) ? 0 : v;

		if (this.max != v) {
			this.max = v;

			if (v < this.min) {
				this.min = v;
			}
			if (v < this.pos) {
				this.pos = v;
			}

			if (nexacro._enableaccessibility && this._isAccessibilityEnable()) {
				this._setAccessibilityInfoValueMax(v);
			}

			this._update();
		}
	};

	_pProgressBar.set_pos = function (v) {
		if (this._is_NaN(v)) {
			return;
		}

		v = parseInt(v) | 0;

		if (this.pos != v) {
			if (v > this.max) {
				v = this.max;
			}
			else if (v < this.min) {
				v = this.min;
			}

			this.pos = v;

			if (nexacro._enableaccessibility && this._isAccessibilityEnable()) {
				this._setAccessibilityInfoValueCur(v);
			}

			this._update();
		}
	};

	_pProgressBar.set_step = function (v) {
		if (this.step != v) {
			this.step = v;
			this._update();
		}
	};

	_pProgressBar.on_apply_prop_rtldirection = function () {
		nexacro.Component.prototype.on_apply_prop_rtldirection.call(this);
		this._update();
	};

	_pProgressBar.stepIt = function () {
		this.set_pos(this.pos + parseInt(this.step));
	};

	_pProgressBar._on_start_cell = function (imgurl, w, h) {
		if (this._start_cell_width != w || this._start_cell_url != imgurl) {
			this._start_cell_width = w;
			this._start_cell_url = imgurl;
			this._update_cells();
		}
	};

	_pProgressBar._on_progress_cell = function (imgurl, w, h) {
		if (this._progress_cell_width != w || this._progress_cell_url != imgurl) {
			this._progress_cell_width = w;
			this._progress_cell_url = imgurl;
			this._update_cells();
		}
	};

	_pProgressBar._on_end_cell = function (imgurl, w, h) {
		if (this._end_cell_width != w || this._end_cell_url != imgurl) {
			this._end_cell_width = w;
			this._end_cell_url = imgurl;
			this._update_cells();
		}
	};

	_pProgressBar._create_cell = function (url, imgurl, id, l, t, w, h) {
		if (!imgurl || (url != null && url != "")) {
			var obj = new nexacro.ProgressBarCell(id, "absolute", l, t, w, h, null, null, this);
			obj.createComponent();
			obj._setRtlDirection(this._rtldirection);

			if (imgurl) {
				obj.style.set_background("URL('" + imgurl + "') stretch");
			}

			return obj;
		}
		return null;
	};
	_pProgressBar._update = function () {
		if (this._is_created) {
			this._update_cells();
		}
	};

	_pProgressBar._update_image_type = function (list, min, max, pos, width, height, direction) {
		var l = 0, t = 0, w = 0, h = 0, r = 0;
		var progressimg = this.currentstyle.progressimage;
		var startimg = this.currentstyle.startimage;
		var endimg = this.currentstyle.endimage;

		if ((progressimg && progressimg.value == "") || (this._client_height == 0 && this._client_width == 0)) {
			return;
		}

		this._clear("cell");

		if (!list) {
			list = this._cell_list = [];
		}

		var progress_w = this._progress_cell_width;
		var s_cell = this._start_cell, e_cell = this._end_cell, p_cell = this._progress_cell;
		var start_w = 0, end_w = 0, cnt = 0;
		var start_url = this._start_cell_url, end_url = this._end_cell_url, progress_url = this._progress_cell_url;
		var posX = parseInt(((pos - min) / (max - min)) * width) | 0;
		var img_item = null;

		if (!s_cell && start_url) {
			s_cell = this._start_cell = this._create_cell(start_url, startimg, "startcell", 0, 0, 0, height);
		}
		else if (s_cell) {
			if (s_cell.style.background.image != start_url) {
				s_cell.style.set_background("URL('" + startimg + "') stretch");
			}
		}
		start_w = this._start_cell_width;

		if (!e_cell && end_url) {
			e_cell = this._end_cell = this._create_cell(end_url, endimg, "endcell", 0, 0, 0, height);
		}
		else if (e_cell) {
			if (e_cell.style.background.image != end_url) {
				e_cell.style.set_background("URL('" + endimg + "') stretch");
			}
		}
		end_w = this._end_cell_width;

		cnt = parseInt((posX - start_w - end_w) / progress_w) | 0;

		if (cnt <= 0) {
			this._clear("list");
		}
		var len = list.length;
		if (len > cnt) {
			var gabage = len - cnt;
			for (var i = 1; i < gabage + 1; i++) {
				var list_obj = list[len - i];
				if (list_obj) {
					list_obj.destroyComponent();
					list.splice(len - i);
				}
			}
		}

		if (direction == "backward") {
			if (e_cell) {
				l = width - end_w;
				e_cell._applysetPosition(l, t, end_w, height);
			}

			for (var i = list.length; i < cnt; i++) {
				if (!list[i]) {
					p_cell = this._progress_cell = this._create_cell(progress_url, progressimg, "cell_" + i, 0, 0, 0, height);
					list[i] = p_cell;
				}
			}

			for (var j = 0; j < list.length; j++) {
				if (list[j].style.background.image != progress_url) {
					list[j].style.set_background("URL('" + progressimg + "') stretch");
				}

				l = (width - progress_w) - (progress_w * j) - end_w;
				if (list[j]._adjust_left != l || list[j]._adjust_width != progress_w) {
					list[j]._applysetPosition(l, t, progress_w, height);
				}
			}

			if (s_cell) {
				s_cell._applysetPosition(l - start_w, t, start_w, height);
			}
		}
		else {
			if (s_cell) {
				r = start_w;
				s_cell._applysetPosition(l, t, r - l, height - t);
			}

			for (var i = list.length; i < cnt; i++) {
				if (!list[i]) {
					p_cell = this._progress_cell = this._create_cell(progress_url, progressimg, "cell_" + i, 0, 0, 0, height);
					list[i] = p_cell;
				}
			}

			for (var j = 0; j < list.length; j++) {
				if (list[j].style.background.image != progress_url) {
					list[j].style.set_background("URL('" + progressimg + "') stretch");
				}

				if (j > 0) {
					img_item = list[j - 1];
					l = img_item._adjust_left + img_item._adjust_width;
					r = l + progress_w;
				}
				else {
					l = s_cell ? (s_cell._adjust_left + s_cell._adjust_width) : 0;
					r = s_cell ? (l + progress_w) : progress_w;
				}

				list[j]._applysetPosition(l, 0, r - l, height - t);
			}

			p_cell = list.length > 0 ? list[list.length - 1] : null;

			if (e_cell) {
				if (p_cell) {
					l = p_cell._adjust_left + p_cell._adjust_width;
				}
				else if (s_cell) {
					l = s_cell._adjust_left + s_cell._adjust_width;
				}

				r = l + end_w;

				e_cell._applysetPosition(l, t, r - l, height - t);
			}
		}
	};

	_pProgressBar._update_normal_type = function (item, list, min, max, pos, width, height, direction, smooth) {
		var l = 0, t = 0, w = 0, h = 0;
		var per = (pos - min) / (max - min);

		this._clear("img");

		if (smooth == true || smooth == "true") {
			if (!item) {
				item = this._cell_item = this._create_cell("", "", "cell_0", 0, 0, 0, height);
			}

			this._clear("list");

			l = (direction == "backward") ? width - parseInt(width * per) : 0;
			w = parseInt(width * per) | 0;

			if (item._ajdust_left != l || item._ajdust_width != w) {
				item._applysetPosition(l, 0, w, height);
			}
		}
		else {
			this._clear("cell");

			var blocksize = this.blocksize;
			var blockgap = this.blockgap;

			var rtn = this._get_block_size(width, blockgap, blocksize, per);
			var list_len = list.length;

			if (list_len > rtn.cnt) {
				var gabage = list_len - rtn.cnt;
				for (var i = 1; i < gabage + 1; i++) {
					var list_obj = list[list_len - i];
					if (list_obj) {
						list_obj.destroyComponent();
						list.splice(list_len - i);
					}
				}
			}

			list_len = list.length;
			var i_l = 0;

			if (direction == "backward") {
				if (list_len != rtn.cnt) {
					for (var i = 0; i < rtn.cnt; i++) {
						if (!list[i]) {
							list[i] = this._create_cell("", "", "cell_" + i, (width - (i * rtn.size) + blockgap), 0, blocksize, height);
						}
					}
				}

				if (list_len > 0) {
					for (var i = 0, len = list_len; i < len; i++) {
						i_l = width - (i * rtn.size) + blockgap;
						if (list[i]._adjust_left != i_l || list[i]._adjust_width != blocksize) {
							list[i]._applysetPosition(i_l, 0, blocksize, height);
						}
					}
				}
			}
			else {
				for (var i = list_len, rtnlen = rtn.cnt; i < rtnlen; i++) {
					if (!list[i]) {
						list[i] = this._create_cell("", "", "cell_" + i, (i * rtn.size), 0, blocksize, height);
					}
				}

				if (list_len > 0) {
					for (var i = 0, len = list_len; i < len; i++) {
						i_l = (i * rtn.size);
						if (list[i]._adjust_left != i_l || list[i]._adjust_width != blocksize) {
							list[i]._applysetPosition(i_l, 0, blocksize, height);
						}
					}
				}
			}
			this._cell_list = list;
		}

		var control_elem = this.getElement();
		if (control_elem) {
			this.on_apply_style_align(this.currentstyle.align);
			this.on_apply_style_barcolor(this.currentstyle.barcolor);
			this.on_apply_style_bargradation(this.currentstyle.bargradation);
			this.on_apply_text();
		}
	};

	_pProgressBar._update_cells = function () {
		var type = this.on_find_CurrentStyle_bartype();
		var direction = this.on_find_CurrentStyle_direction();

		if (this.pos == 0) {
			this._clear();
			return;
		}

		if (type == "image") {
			this._update_image_type(this._cell_list, this.min, this.max, this.pos, this._client_width, this._client_height, direction);
		}
		else {
			this._update_normal_type(this._cell_item, this._cell_list, this.min, this.max, this.pos, this._client_width, this._client_height, direction, this.on_find_CurrentStyle_smooth());
		}
	};

	_pProgressBar._get_block_size = function (width, gap, size, per) {
		var block_size = gap + size;

		var cnt = Math.ceil((width / block_size) * per);

		return {
			size : block_size, 
			cnt : cnt
		};
	};

	_pProgressBar._is_NaN = function (v) {
		if (v !== undefined) {
			if (isNaN(v = +v)) {
				return true;
			}
		}
		return false;
	};

	_pProgressBar._apply_style_image = function (imgurl, callbackfn, type) {
		if (imgurl) {
			var imgfullurl = nexacro._toString(imgurl);
			if (imgfullurl.substring(0, 4).toLowerCase() == "url(") {
				imgfullurl = imgfullurl.substring(5, imgfullurl.length - 2);
			}

			imgfullurl = nexacro._getImageLocation(imgfullurl, this._getRefFormBaseUrl());

			var size = nexacro._getImageSize(imgfullurl, callbackfn, this, undefined, imgurl);
			if (size != null) {
				if (type == "progress") {
					if (this._progress_cell_width == size.width && this._progress_cell_url == imgfullurl) {
						return;
					}

					this._progress_cell_width = size.width;
					this._progress_cell_url = imgfullurl;
				}
				else if (type == "start") {
					if (this._start_cell_width == size.width && this._start_cell_url == imgfullurl) {
						return;
					}

					this._start_cell_width = size.width;
					this._start_cell_url = imgfullurl;
				}
				else {
					if (this._end_cell_width == size.width && this._end_cell_url == imgfullurl) {
						return;
					}

					this._end_cell_width = size.width;
					this._end_cell_url = imgfullurl;
				}
				this._update_cells();
			}
		}
	};

	delete _pProgressBar;

	nexacro.ProgressBarCell = function (id, position, left, top, width, height, right, bottom, parent) {
		nexacro.StaticCtrl.call(this, id, position, left, top, width, height, right, bottom, parent);
		this._is_reference_control = false;
	};
	_pProgressBarCell = nexacro.ProgressBarCell.prototype = nexacro._createPrototype(nexacro.StaticCtrl, nexacro.ProgressBarCell);

	_pProgressBarCell.on_find_CurrentStyle_gradation = function (pseudo) {
		return this.parent._find_pseudo_obj("bargradation", pseudo, "gradation");
	};

	_pProgressBarCell.on_created = function (_window) {
		if (!this._is_loading) {
			var parent_elem = null;
			if (!this._is_window) {
				parent_elem = this.parent ? this.parent._control_element : null;
				if (!parent_elem) {
					return false;
				}
			}

			if (!_window) {
				_window = this._getWindow();
			}

			var control_elem = this._control_element;
			var enable = this._isEnable();

			if ((this._real_enable == null && enable == false) || (this._real_enable && this._real_enable != enable)) {
				this._real_enable = enable;
				this._stat_change(enable ? "enable" : "disable", this._pseudo);
				this.on_apply_prop_enable(enable);
			}
			else {
				this._real_enable = enable;
			}

			if (control_elem) {
				var before_elem = this.parent ? (this.parent._text_elem ? this.parent._text_elem : null) : null;

				if (before_elem) {
					control_elem.create(_window, before_elem);
				}
				else {
					control_elem.create(_window);
				}

				if (!control_elem._handle) {
					return;
				}
			}

			if (!this._is_subcontrol) {
				this._registerHotkey();
			}

			if (this._is_created != true) {
				this.on_created_contents();
			}

			this._is_created = true;

			if (this._is_subcontrol) {
				nexacro._addSubComponent(this);
			}
			this._orientation = nexacro._getMobileOrientation();
		}
	};

	_pProgressBarCell.on_find_CurrentStyle_padding = nexacro._emptyFn;
	_pProgressBarCell.on_find_CurrentStyle_linespace = nexacro._emptyFn;
	_pProgressBarCell.on_apply_style_color = nexacro._emptyFn;
	_pProgressBarCell.on_apply_style_font = nexacro._emptyFn;
	_pProgressBarCell.on_apply_style_align = nexacro._emptyFn;
	_pProgressBarCell.on_apply_style_linespace = nexacro._emptyFn;
	_pProgressBarCell.on_apply_expr = nexacro._emptyFn;
	_pProgressBarCell.on_apply_usedecorate = nexacro._emptyFn;
	_pProgressBarCell.on_apply_wordwrap = nexacro._emptyFn;
	_pProgressBarCell.on_apply_linespace = nexacro._emptyFn;
	_pProgressBarCell.on_update_style_linespace = nexacro._emptyFn;
	_pProgressBarCell.on_update_style_padding = nexacro._emptyFn;

	delete _pProgressBarCell;

	nexacro.ProgressBarCtrl = function (id, position, left, top, width, height, right, bottom, parent) {
		nexacro.ProgressBar.call(this, id, position, left, top, width, height, right, bottom, parent);
		this._is_subcontrol = true;
	};

	var _pProgressBarCtrl = nexacro.ProgressBarCtrl.prototype = nexacro._createPrototype(nexacro.ProgressBar, nexacro.ProgressBarCtrl);
	_pProgressBarCtrl._type_name = "ProgressBarControl";

	_pProgressBarCtrl._is_focus_accept = false;

	nexacro._setForControlStyleFinder(_pProgressBarCtrl);

	delete _pProgressBarCtrl;
}

