(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        this.on_create = function()
        {
            // Declare Reference
            var obj = null;
            
            if (Form == this.constructor) {
                this.set_name("etcExample");
                this.set_titletext("Base::etcExample");
                this._setFormPosition(0,0,844,1071);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_bindItem", this);
            obj._setContents("<ColumnInfo><Column id=\"col1\" type=\"STRING\" size=\"256\"/><Column id=\"col2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"col1\">1</Col><Col id=\"col2\">4</Col></Row><Row><Col id=\"col1\">2</Col><Col id=\"col2\">5</Col></Row><Row><Col id=\"col1\">3</Col><Col id=\"col2\">6</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_bind_property", this);
            obj._setContents("<ColumnInfo><Column id=\"TEXT\" type=\"STRING\" size=\"256\"/><Column id=\"COLOR\" type=\"STRING\" size=\"256\"/><Column id=\"BORDER\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TEXT\">AAA</Col><Col id=\"COLOR\">red</Col><Col id=\"BORDER\">1 solid red</Col></Row><Row><Col id=\"TEXT\">BBB</Col><Col id=\"COLOR\">green</Col><Col id=\"BORDER\">3 solid green </Col></Row><Row><Col id=\"TEXT\">CCC</Col><Col id=\"COLOR\">blue</Col><Col id=\"BORDER\">5 solid blue</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("buttonDataset", this);
            obj._setContents("<ColumnInfo><Column id=\"col1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"col1\">1</Col></Row><Row><Col id=\"col1\">2</Col></Row><Row><Col id=\"col1\">3</Col></Row><Row><Col id=\"col1\">4</Col></Row><Row><Col id=\"col1\">5</Col></Row><Row><Col id=\"col1\">6</Col></Row><Row><Col id=\"col1\">7</Col></Row><Row><Col id=\"col1\">8</Col></Row><Row><Col id=\"col1\">9</Col></Row><Row><Col id=\"col1\">10</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("calBinding", this);
            obj._setContents("<ColumnInfo><Column id=\"col\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"col\">20041201101010</Col></Row><Row><Col id=\"col\">20041231121212</Col></Row><Row><Col id=\"col\">20050101131313</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"date\" type=\"STRING\" size=\"256\"/><Column id=\"color\" type=\"STRING\" size=\"256\"/><Column id=\"bkcolor\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"date\">20090101</Col><Col id=\"color\">blue</Col><Col id=\"bkcolor\">pink</Col></Row><Row><Col id=\"date\">20200101</Col><Col id=\"color\">blue</Col><Col id=\"bkcolor\">pink</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("chckbox", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"chk\">1</Col></Row><Row><Col id=\"chk\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("chkbox1", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"chk\">N</Col></Row><Row><Col id=\"chk\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("Button00", "absolute", "678", "6", "149", "35", null, null, this);
            obj.set_taborder("0");
            obj.set_text("←Back");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00", "absolute", "8", "40", "170", "28", null, null, this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "8", "8", "170", "30", null, null, this);
            obj.set_taborder("2");
            obj.set_text("Binding Example");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "8", "84", "109", "28", null, null, this);
            obj.set_taborder("3");
            obj.set_text("Bind정보 ");
            this.addChild(obj.name, obj);

            obj = new Button("Button02", "absolute", "131", "84", "109", "28", null, null, this);
            obj.set_taborder("4");
            obj.set_text("Edit Binding");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01", "absolute", "195", "40", "170", "28", null, null, this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "8", "128", "129", "38", null, null, this);
            obj.set_taborder("6");
            obj.set_text("속성 바인딩");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "10", "160", "349", "101", null, null, this);
            obj.set_taborder("7");
            obj.set_binddataset("ds_bind_property");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"TEXT\"/><Cell col=\"1\" text=\"COLOR\"/><Cell col=\"2\" text=\"BORDER\"/></Band><Band id=\"body\"><Cell text=\"bind:TEXT\"/><Cell col=\"1\" displaytype=\"text\" text=\"bind:COLOR\"/><Cell col=\"2\" text=\"bind:BORDER\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02", "absolute", "10", "264", "151", "21", null, null, this);
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "10", "299", "165", "22", null, null, this);
            obj.set_taborder("9");
            obj.set_text("Button");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01", "absolute", "11", "325", "108", "98", null, null, this);
            obj.set_taborder("10");
            obj.set_binddataset("buttonDataset");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" disptype=\"normal\" text=\"col1\"/></Band><Band id=\"body\"><Cell col=\"0\" disptype=\"normal\" text=\"bind:col1\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnExample", "absolute", "126", "324", "132", "25", null, null, this);
            obj.set_taborder("11");
            obj.set_text("click grid cell");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "10", "440", "148", "24", null, null, this);
            obj.set_taborder("12");
            obj.set_text("Calendar");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid02", "absolute", "9", "464", "128", "85", null, null, this);
            obj.set_taborder("13");
            obj.set_binddataset("calBinding");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"131\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"col\"/></Band><Band id=\"body\"><Cell text=\"bind:col\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00", "absolute", "157", "464", "115", "26", null, null, this);
            this.addChild(obj.name, obj);
            obj.style.set_usetrailingday("true");
            obj.style.set_trailingdaycolor("lightgreen");
            obj.set_taborder("14");

            obj = new Calendar("Calendar01", "absolute", "9", "563", "170", "26", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_expr("expr:comp.parent.fn_today()");
            obj.set_taborder("15");

            obj = new Calendar("Calendar02", "absolute", "9", "600", "169", "237", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_type("monthonly");
            obj.set_taborder("16");

            obj = new Calendar("Calendar03", "absolute", "192", "563", "170", "26", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_expr("expr:comp.parent.fn_today()");
            obj.set_taborder("17");
            obj.set_value("null");
            obj.set_dateformat("yyyy-MM-dd ddd");

            obj = new Calendar("Calendar04", "absolute", "192", "605", "170", "27", null, null, this);
            this.addChild(obj.name, obj);
            var Calendar04_innerdataset = new Dataset("Calendar04_innerdataset", this.Calendar04);
            Calendar04_innerdataset._setContents("<ColumnInfo><Column id=\"datecolumn\" size=\"256\"/><Column id=\"textcolorcolumn\" size=\"256\"/><Column id=\"backgroundcolumn\" size=\"256\"/><Column id=\"bordercolumn\" size=\"256\"/></ColumnInfo><Rows/>");
            obj.set_innerdataset(Calendar04_innerdataset);
            obj.set_innerdataset("@Dataset00");
            obj.set_datecolumn("date");
            obj.set_textcolorcolumn("color");
            obj.set_backgroundcolumn("bkcolor");
            obj.set_taborder("18");
            obj.set_value("null");
            obj.set_dateformat("yyyy-MM-dd ddd");

            obj = new Static("Static04", "absolute", "432", "56", "178", "30", null, null, this);
            obj.set_taborder("19");
            obj.set_text("CheckBox");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid03", "absolute", "435", "88", "80", "75", null, null, this);
            obj.set_taborder("20");
            obj.set_binddataset("chckbox");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" disptype=\"normal\" text=\"chk\"/></Band><Band id=\"body\"><Cell col=\"0\" disptype=\"normal\" text=\"bind:chk\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00", "absolute", "568", "88", "108", "34", null, null, this);
            obj.set_taborder("21");
            obj.set_text("CheckBox00");
            obj.style.set_buttonalign("right middle");
            obj.style.set_buttonborder("2 solid #808080ff");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid04", "absolute", "435", "183", "81", "84", null, null, this);
            obj.set_taborder("22");
            obj.set_binddataset("chkbox1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" disptype=\"normal\" text=\"chk\"/></Band><Band id=\"body\"><Cell col=\"0\" disptype=\"normal\" text=\"bind:chk\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox01", "absolute", "568", "184", "121", "32", null, null, this);
            obj.set_taborder("23");
            obj.set_text("CheckBox01");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "432", "285", "213", "43", null, null, this);
            obj.set_taborder("24");
            obj.set_text("Collection and object");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("Button03", "absolute", "428", "327", "108", "34", null, null, this);
            obj.set_taborder("25");
            obj.set_text("Componets");
            this.addChild(obj.name, obj);

            obj = new Button("Button04", "absolute", "428", "375", "108", "34", null, null, this);
            obj.set_taborder("26");
            obj.set_text("all");
            this.addChild(obj.name, obj);

            obj = new Button("Button05", "absolute", "552", "327", "108", "33", null, null, this);
            obj.set_taborder("27");
            obj.set_text("this");
            this.addChild(obj.name, obj);

            obj = new Button("Button06", "absolute", "552", "376", "108", "33", null, null, this);
            obj.set_taborder("28");
            obj.set_text("parent");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 844, 1071, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("Base::etcExample");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item1","Edit02","value","ds_bind_property","TEXT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","Edit02","color","ds_bind_property","COLOR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","Edit02","border","ds_bind_property","BORDER");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("etcExample.xfdl", function(exports) {

        this.Button00_onclick = function(obj,e)
        {
        	this.go("Base::HelloScreen.xfdl");
        }

        this.Button01_onclick = function(obj,e)
        {
        	var objBind = null;
        	var sMsg ="Bind Item 개수 =" + this.binds.length + "\n\n";

        	for(var i=0; i< this.binds.length; i++)
        	{
        		objBind = this.binds[i];
        		sMsg += i + ".compid =" + objBind.compid + "\n";
        		sMsg += i + ".propid =" + objBind.propid + "\n";
        		sMsg += i + ".datasetid =" + objBind.datasetid + "\n";
        		sMsg += i + ".columnid =" + objBind.columnid + "\n";
        		sMsg +="\n";
        	}
        	alert(sMsg);
        }

        

        this.Button02_onclick = function(obj,e)
        {
        	var objBind = null;
        	var sMsg = "";
        	for(var i=0; i< this.binds.length;i++)
        	{
        		if(this.binds[i].compid == "Edit01" && this.binds[i].propid =="value")
        		{
        			objBind = this.binds[i];
        			break;
        		}
        	}
        	
        	if(objBind != null)
        	{
        		sMsg += "Dataset =" + objBind.datasetid + "\n";
        		sMsg += "Column = " + objBind.columnid;
        		alert(sMsg);
        	
        	}
        	
        	
        }

        this.Grid01_oncellclick = function(obj,e)
        {
        	var rowposition = this.buttonDataset.rowposition;
        	var columnData = this.buttonDataset.getColumn(rowposition);
        	this.btnExample.set_text(columnData); 
        }

        this.Grid02_oncellclick = function(obj,e)
        {
        	var rowposition = this.calBinding.rowposition;
        	var columnData = this.calBinding.getColumn(rowposition);
        	this.Calendar00.set_value(columnData);
        	
        	
        }

        this.fn_today = function()
        {
        	var objDate = new Date();
        	return this.fn_toString(objDate);
        }

        this.fn_toString = function(objDate)
        {
        	var sRtn = objDate.getFullYear() 
        			+ (objDate.getMonth()+1).toString().padLeft(2,"0")
        			+ objDate.getDate().toString().padLeft(2, "0");
        	
        	this.Calendar03.set_dateformat("yyyy/MM/dd");
        	return sRtn;
        }

        

        this.Grid03_oncellclick = function(obj,e)
        {
        	var rowposition = this.chckbox.rowposition;
        	var columnData = this.chckbox.getColumn(rowposition);
        	
        	this.CheckBox00.set_value(columnData);
        }

        this.Grid04_oncellclick = function(obj,e)
        {
        	var rowposition = this.chkbox1.rowposition;
        	var columnData = this.chkbox1.getColumn(rowposition);
        	
        	if(columnData == 'Y'){
        		trace(columnData);
        		this.CheckBox01.set_value(columnData);
        	}else{
        		trace(columnData);
        		this.CheckBox01.set_value(columnData);
        	}
        }

        this.Button03_onclick = function(obj,e)
        {
        	var arrComponents = this.components;
        	for(var i=0;i< arrComponents.length;i++)
        	{
        		if(arrComponents[i] instanceof Static && arrComponents[i].name <= "Static02")
        		{
        			arrComponents[i].set_text("a");
        		}
        	}
        	alert("화면내 컴포넌트 총 개수 =" + arrComponents.length);
        }

        

        this.Button04_onclick = function(obj,e)
        {
        	alert("화면내 object 총개수 = " + this.all.length);
        }

        this.Button05_onclick = function(obj,e)
        {
        	alert(this.Static00.text);
        }

        this.Button06_onclick = function(obj,e)
        {
        	alert(this.parent);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.Edit00.addEventHandler("oneditclick", this.Edit00_oneditclick, this);
            this.Button01.addEventHandler("onclick", this.Button01_onclick, this);
            this.Button02.addEventHandler("onclick", this.Button02_onclick, this);
            this.Edit02.addEventHandler("oneditclick", this.Edit02_oneditclick, this);
            this.Grid01.addEventHandler("oncellclick", this.Grid01_oncellclick, this);
            this.Grid02.addEventHandler("oncellclick", this.Grid02_oncellclick, this);
            this.Calendar00.addEventHandler("oneditclick", this.Calendar00_oneditclick, this);
            this.Calendar03.addEventHandler("oneditclick", this.Calendar03_oneditclick, this);
            this.Grid03.addEventHandler("oncellclick", this.Grid03_oncellclick, this);
            this.Grid04.addEventHandler("oncellclick", this.Grid04_oncellclick, this);
            this.Static05.addEventHandler("onclick", this.Static05_onclick, this);
            this.Button03.addEventHandler("onclick", this.Button03_onclick, this);
            this.Button04.addEventHandler("onclick", this.Button04_onclick, this);
            this.Button05.addEventHandler("onclick", this.Button05_onclick, this);
            this.Button06.addEventHandler("onclick", this.Button06_onclick, this);

        };

        this.loadIncludeScript("etcExample.xfdl", true);

       
    };
}
)();
