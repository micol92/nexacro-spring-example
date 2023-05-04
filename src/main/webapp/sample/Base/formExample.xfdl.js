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
                this.set_name("formExample");
                this.set_titletext("Base::formExample");
                this._setFormPosition(0,0,338,557);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_emp", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPL_ID\" type=\"STRING\" size=\"5\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"10\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"2\"/><Column id=\"HIRE_DATE\" type=\"DATE\" size=\"8\"/><Column id=\"GENDER\" type=\"STRING\" size=\"1\"/><Column id=\"MARRIED\" type=\"STRING\" size=\"1\"/><Column id=\"SALARY\" type=\"INT\" size=\"10\"/><Column id=\"EMPL_MEMO\" type=\"STRING\" size=\"500\"/></ColumnInfo><Rows><Row><Col id=\"EMPL_ID\">AA001</Col><Col id=\"FULL_NAME\">SHIN SOO CHOO </Col><Col id=\"DEPT_ID\">01</Col><Col id=\"HIRE_DATE\">20011104</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col><Col id=\"SALARY\">2000</Col><Col id=\"EMPL_MEMO\">baseball</Col></Row><Row><Col id=\"EMPL_ID\">BB001</Col><Col id=\"FULL_NAME\">YUNA KIM</Col><Col id=\"DEPT_ID\">02</Col><Col id=\"HIRE_DATE\">20050305</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">0</Col><Col id=\"SALARY\">3000</Col><Col id=\"EMPL_MEMO\">figure skating</Col></Row><Row><Col id=\"EMPL_ID\">CC001</Col><Col id=\"FULL_NAME\">SUMI JO</Col><Col id=\"DEPT_ID\">03</Col><Col id=\"HIRE_DATE\">20100506</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">0</Col><Col id=\"SALARY\">5000</Col><Col id=\"EMPL_MEMO\">singer</Col></Row><Row><Col id=\"EMPL_ID\">DD001</Col><Col id=\"FULL_NAME\">JS PARK</Col><Col id=\"DEPT_ID\">04</Col><Col id=\"HIRE_DATE\">20101123</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col><Col id=\"SALARY\">3500</Col><Col id=\"EMPL_MEMO\">soccer</Col></Row><Row><Col id=\"EMPL_ID\">EE001</Col><Col id=\"FULL_NAME\">JY PARK</Col><Col id=\"DEPT_ID\">05</Col><Col id=\"HIRE_DATE\">20200101</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col><Col id=\"SALARY\">6000</Col><Col id=\"EMPL_MEMO\">dancer </Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_dept", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">01</Col><Col id=\"text\">Sales</Col></Row><Row><Col id=\"code\">02</Col><Col id=\"text\">IT</Col></Row><Row><Col id=\"code\">03</Col><Col id=\"text\">Education</Col></Row><Row><Col id=\"code\">04</Col><Col id=\"text\">Marketing</Col></Row><Row><Col id=\"code\">05</Col><Col id=\"text\">HR</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static00", "absolute", "15", "46", "81", "21", null, null, this);
            obj.set_taborder("0");
            obj.set_text("FullName");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00", "absolute", "104", "43", "156", "27", null, null, this);
            obj.set_taborder("1");
            obj.set_displaynulltext("이름");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "15", "83", "83", "24", null, null, this);
            obj.set_taborder("2");
            obj.set_text("EmployeeID");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00", "absolute", "104", "83", "154", "28", null, null, this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "15", "128", "81", "30", null, null, this);
            obj.set_taborder("4");
            obj.set_text("HireDate");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00", "absolute", "104", "128", "154", "39", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("5");

            obj = new Static("Static03", "absolute", "16", "184", "83", "34", null, null, this);
            obj.set_taborder("6");
            obj.set_text("Married");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00", "absolute", "104", "188", "107", "30", null, null, this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "16", "232", "52", "32", null, null, this);
            obj.set_taborder("8");
            obj.set_text("Salary");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit01", "absolute", "104", "233", "154", "30", null, null, this);
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "15", "292", "80", "41", null, null, this);
            obj.set_taborder("10");
            obj.set_text("Gender");
            this.addChild(obj.name, obj);

            obj = new Radio("Female", "absolute", "105", "290", "71", "43", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("11");

            obj = new Radio("Male", "absolute", "187", "284", "88", "55", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("12");

            obj = new Static("Static06", "absolute", "13", "349", "83", "35", null, null, this);
            obj.set_taborder("13");
            obj.set_text("DepartmentID");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00", "absolute", "101", "360", "179", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("14");
            obj.set_text("Combo00");

            obj = new Static("Static07", "absolute", "17", "408", "82", "22", null, null, this);
            obj.set_taborder("15");
            obj.set_text("Memo");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00", "absolute", "91", "404", "189", "140", null, null, this);
            obj.set_taborder("16");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 338, 557, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("Base::formExample");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","Edit00","value","ds_emp","FULL_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("formExample.xfdl", function(exports) {

        this.Combo00_onitemchanged = function(obj,e)
        {
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Combo00.addEventHandler("onitemchanged", this.Combo00_onitemchanged, this);

        };

        this.loadIncludeScript("formExample.xfdl", true);

       
    };
}
)();
