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
                this.set_name("SecondView");
                this.set_titletext("Base::SecondView");
                this._setFormPosition(0,0,764,615);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_emp", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPL_ID\" type=\"STRING\" size=\"5\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"10\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"2\"/><Column id=\"HIRE_DATE\" type=\"DATE\" size=\"8\"/><Column id=\"GENDER\" type=\"STRING\" size=\"1\"/><Column id=\"MARRIED\" type=\"STRING\" size=\"1\"/><Column id=\"SALARY\" type=\"INT\" size=\"10\"/><Column id=\"EMPL_MEMO\" type=\"STRING\" size=\"500\"/></ColumnInfo><Rows><Row><Col id=\"EMPL_ID\">AA001</Col><Col id=\"FULL_NAME\">SHIN SOO CHOO </Col><Col id=\"DEPT_ID\">01</Col><Col id=\"HIRE_DATE\">20011104</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col><Col id=\"SALARY\">2000</Col><Col id=\"EMPL_MEMO\">baseball</Col></Row><Row><Col id=\"EMPL_ID\">BB001</Col><Col id=\"FULL_NAME\">YUNA KIM</Col><Col id=\"DEPT_ID\">02</Col><Col id=\"HIRE_DATE\">20050305</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">0</Col><Col id=\"SALARY\">3000</Col><Col id=\"EMPL_MEMO\">figure skating</Col></Row><Row><Col id=\"EMPL_ID\">CC001</Col><Col id=\"FULL_NAME\">SUMI JO</Col><Col id=\"DEPT_ID\">03</Col><Col id=\"HIRE_DATE\">20100506</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">0</Col><Col id=\"SALARY\">5000</Col><Col id=\"EMPL_MEMO\">singer</Col></Row><Row><Col id=\"EMPL_ID\">DD001</Col><Col id=\"FULL_NAME\">JS PARK</Col><Col id=\"DEPT_ID\">04</Col><Col id=\"HIRE_DATE\">20101123</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col><Col id=\"SALARY\">3500</Col><Col id=\"EMPL_MEMO\">soccer</Col></Row><Row><Col id=\"EMPL_ID\">EE001</Col><Col id=\"FULL_NAME\">JY PARK</Col><Col id=\"DEPT_ID\">05</Col><Col id=\"HIRE_DATE\">20200101</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col><Col id=\"SALARY\">6000</Col><Col id=\"EMPL_MEMO\">dancer </Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_dept", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">01</Col><Col id=\"text\">Sales</Col></Row><Row><Col id=\"code\">02</Col><Col id=\"text\">IT</Col></Row><Row><Col id=\"code\">03</Col><Col id=\"text\">Education</Col></Row><Row><Col id=\"code\">04</Col><Col id=\"text\">Marketing</Col></Row><Row><Col id=\"code\">05</Col><Col id=\"text\">HR</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_rowdata", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPL_ID\" type=\"STRING\" size=\"5\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"10\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"2\"/><Column id=\"HIRE_DATE\" type=\"DATE\" size=\"8\"/><Column id=\"GENDER\" type=\"STRING\" size=\"1\"/><Column id=\"MARRIED\" type=\"STRING\" size=\"1\"/><Column id=\"SALARY\" type=\"INT\" size=\"10\"/><Column id=\"EMPL_MEMO\" type=\"STRING\" size=\"500\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("Button00", "absolute", "656", "8", "90", "25", null, null, this);
            obj.set_taborder("2");
            obj.set_text("←Back");
            this.addChild(obj.name, obj);

            obj = new TextArea("memoArea", "absolute", "426", "469", "189", "131", null, null, this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "315", "461", "43", "22", null, null, this);
            obj.set_taborder("4");
            obj.set_text("Memo");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "309", "419", "83", "26", null, null, this);
            obj.set_taborder("5");
            obj.set_text("DepartmentID");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00", "absolute", "424", "419", "179", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("6");
            obj.set_text("Combo00");
            obj.set_innerdataset("@ds_dept");
            obj.set_datacolumn("text");
            obj.set_codecolumn("code");

            obj = new Static("Static05", "absolute", "312", "368", "80", "31", null, null, this);
            obj.set_taborder("9");
            obj.set_text("Gender");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit01", "absolute", "99", "528", "154", "22", null, null, this);
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "24", "528", "52", "32", null, null, this);
            obj.set_taborder("11");
            obj.set_text("Salary");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "27", "488", "59", "34", null, null, this);
            obj.set_taborder("12");
            obj.set_text("Married");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00", "absolute", "104", "488", "26", "30", null, null, this);
            obj.set_taborder("13");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00", "absolute", "104", "441", "154", "23", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("14");

            obj = new Static("Static02", "absolute", "24", "440", "65", "30", null, null, this);
            obj.set_taborder("15");
            obj.set_text("HireDate");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "24", "400", "64", "24", null, null, this);
            obj.set_taborder("16");
            obj.set_text("EmployeeID");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00", "absolute", "104", "402", "155", "20", null, null, this);
            obj.set_taborder("17");
            this.addChild(obj.name, obj);

            obj = new Edit("fullname", "absolute", "104", "368", "156", "19", null, null, this);
            obj.set_taborder("18");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "24", "371", "81", "21", null, null, this);
            obj.set_taborder("19");
            obj.set_text("FullName");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "21", "46", "715", "309", null, null, this);
            obj.set_taborder("20");
            obj.set_binddataset("ds_emp");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"59\"/><Column size=\"113\"/><Column size=\"86\"/><Column size=\"98\"/><Column size=\"114\"/><Column size=\"97\"/><Column size=\"65\"/><Column size=\"111\"/><Column size=\"170\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" style=\"font:8 Arial;\" text=\"rowNum\"/><Cell col=\"1\" colspan=\"2\" style=\"font:8 Arial;\" text=\"Employees\"/><Cell col=\"3\" rowspan=\"2\" style=\"font:8 Arial;\" text=\"Dept\"/><Cell col=\"4\" rowspan=\"2\" style=\"font:8 Arial;\" text=\"HireDate\"/><Cell col=\"5\" rowspan=\"2\" style=\"font:8 Arial;\" text=\"Gender\"/><Cell col=\"6\" rowspan=\"2\" style=\"font:8 Arial;\" text=\"Married\"/><Cell col=\"7\" rowspan=\"2\" style=\"font:8 Arial;\" text=\"Salary\"/><Cell col=\"8\" rowspan=\"2\" style=\"font:8 Arial;\" text=\"Memo\"/><Cell row=\"1\" col=\"1\" style=\"font:8 Arial;\" text=\"ID\"/><Cell row=\"1\" col=\"2\" style=\"font:8 Arial;\" text=\"Name\"/></Band><Band id=\"body\"><Cell celltype=\"head\" text=\"expr:currow + 1\"/><Cell col=\"1\" style=\"color:EXPR(GENDER == &quot;W&quot; ? &quot;blue&quot;:&quot;red&quot;);color2:EXPR(GENDER == &quot;W&quot; ? &quot;blue&quot; : &quot;red&quot;);\" text=\"bind:EMPL_ID\" mask=\"AA-###\"/><Cell col=\"2\" style=\"color:EXPR(GENDER == &quot;W&quot; ? &quot;blue&quot;:&quot;red&quot;);color2:EXPR(GENDER == &quot;W&quot; ? &quot;blue&quot; : &quot;red&quot;);\" text=\"bind:FULL_NAME\"/><Cell col=\"3\" displaytype=\"combo\" text=\"bind:DEPT_ID\" combodataset=\"ds_dept\" combocodecol=\"code\" combodatacol=\"text\"/><Cell col=\"4\" text=\"bind:HIRE_DATE\"/><Cell col=\"5\" text=\"bind:GENDER\"/><Cell col=\"6\" displaytype=\"checkbox\" text=\"bind:MARRIED\"/><Cell col=\"7\" text=\"bind:SALARY\" mask=\"###,###,### 원\"/><Cell col=\"8\" text=\"bind:EMPL_MEMO\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" text=\"expr:&quot;total:&quot; + comp.parent.ds_emp.getRowCount()\"/><Cell col=\"2\"/><Cell col=\"3\" text=\"expr:&quot;total Salary :&quot; + comp.parent.ds_emp.getSum(&quot;SALARY&quot;)\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00", "absolute", "53.93%", "366", null, "37", "14.01%", null, this);
            this.addChild(obj.name, obj);
            var Radio00_innerdataset = new Dataset("Radio00_innerdataset", this.Radio00);
            Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">M</Col><Col id=\"datacolumn\">Male</Col></Row><Row><Col id=\"codecolumn\">W</Col><Col id=\"datacolumn\">Female</Col></Row></Rows>");
            obj.set_innerdataset(Radio00_innerdataset);
            obj.set_taborder("21");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 764, 615, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("Base::SecondView");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","fullname","value","ds_emp","FULL_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","MaskEdit00","value","ds_emp","EMPL_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","MaskEdit00","type","ds_emp","EMPL_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","MaskEdit00","mask","ds_emp","EMPL_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","Calendar00","value","ds_emp","HIRE_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","CheckBox00","value","ds_emp","MARRIED");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","MaskEdit01","value","ds_emp","SALARY");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("SecondView.xfdl", function(exports) {

        this.Button00_onclick = function(obj,e)
        {
        	this.go("Base::HelloScreen.xfdl");
        }

        

        this.CheckBox00_onclick = function(obj,e)
        {
        	
        }

        
        /*check box readonly*/
        this.CheckBox00_onchanged = function(obj,e)
        {
        	this.CheckBox00.set_readonly("true");
        	this.Radio00.set_readonly("true");
        }

        this.SecondView_onload = function(obj,e)
        {
        	//Form을 load 할때 이벤트를 발생 시켜라 . 
        	this.CheckBox00_onchanged();
        	this.rowData();
        	
        	
        }

        this.Grid00_oncellclick = function(obj,e)
        {	
        	this.rowData();
        	
        	//만들어 줄 하나의 row 
        	var i = this.ds_rowdata.addRow();
        	
        	//선택한 row를 copy 해서 새로운  dataset에 넣어 준다. 
        	// 이렇게 해서 indata에 넣어서 parameter로 보낸다. 
        	this.ds_rowdata.copyRow(i,this.ds_emp, e.row);
        	
        	
        	alert(this.ds_rowdata.getColumn(i,"EMPL_ID"));
        	
        	
        	alert(this.fullname.value);
        	//this.fullname.set_visible("false");
        	 
        	
        	/*properties에 나온 함수들에 접근 하기 위해서는 
        		set _ property명 
        		ex ) this.object id.set_property명 ();
        		
        	*/
        	
        }

        
        this.rowData = function(){
        	//e.row를 써도 되고 ,아래 처럼 사용 해도 된다. 
        	//e.row
        	this.Combo00.set_value(this.ds_emp.getColumn(this.ds_emp.rowposition, "DEPT_ID"));
        	
        	//edit box에 row 보여주기 
        	this.memoArea.set_value(this.ds_emp.getColumn(this.ds_emp.rowposition,"EMPL_MEMO"));
        	
        	this.Radio00.set_value(this.ds_emp.getColumn(this.ds_emp.rowposition, "GENDER" ));
        	
        }

        

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.SecondView_onload, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.CheckBox00.addEventHandler("onchanged", this.CheckBox00_onchanged, this);
            this.Grid00.addEventHandler("oncellclick", this.Grid00_oncellclick, this);

        };

        this.loadIncludeScript("SecondView.xfdl", true);

       
    };
}
)();
