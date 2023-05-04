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
                this.set_name("popupExample1");
                this.set_titletext("Base::popupExample1");
                this._setFormPosition(0,0,403,545);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_popupData", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPL_ID\" type=\"STRING\" size=\"5\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"10\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"2\"/><Column id=\"HIRE_DATE\" type=\"DATE\" size=\"8\"/><Column id=\"GENDER\" type=\"STRING\" size=\"1\"/><Column id=\"MARRIED\" type=\"STRING\" size=\"1\"/><Column id=\"SALARY\" type=\"INT\" size=\"10\"/><Column id=\"EMPL_MEMO\" type=\"STRING\" size=\"500\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_dept", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">01</Col><Col id=\"text\">Sales</Col></Row><Row><Col id=\"code\">02</Col><Col id=\"text\">IT</Col></Row><Row><Col id=\"code\">03</Col><Col id=\"text\">Education</Col></Row><Row><Col id=\"code\">04</Col><Col id=\"text\">Marketing</Col></Row><Row><Col id=\"code\">05</Col><Col id=\"text\">HR</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static00", "absolute", "32.75%", "7", null, "25", "33.25%", null, this);
            obj.set_taborder("0");
            obj.set_text("PopupWindow");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 10 Dotum");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "2.73%", "50", null, "160", "3.23%", null, this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_popupData");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"EMPL_ID\"/><Cell col=\"1\" text=\"FULL_NAME\"/><Cell col=\"2\" text=\"DEPT_ID\"/><Cell col=\"3\" text=\"HIRE_DATE\"/><Cell col=\"4\" text=\"GENDER\"/><Cell col=\"5\" displaytype=\"normal\" text=\"MARRIED\"/><Cell col=\"6\" text=\"SALARY\"/><Cell col=\"7\" text=\"EMPL_MEMO\"/></Band><Band id=\"body\"><Cell text=\"bind:EMPL_ID\" mask=\"AA-###\"/><Cell col=\"1\" text=\"bind:FULL_NAME\"/><Cell col=\"2\" text=\"bind:DEPT_ID\"/><Cell col=\"3\" text=\"bind:HIRE_DATE\"/><Cell col=\"4\" text=\"bind:GENDER\"/><Cell col=\"5\" displaytype=\"checkbox\" text=\"bind:MARRIED\"/><Cell col=\"6\" text=\"bind:SALARY\"/><Cell col=\"7\" text=\"bind:EMPL_MEMO\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "2.48%", "224", null, "17", "82.13%", null, this);
            obj.set_taborder("2");
            obj.set_text("EmployID");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "2.23%", "252", null, "24", "74.69%", null, this);
            obj.set_taborder("3");
            obj.set_text("Employee Name");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "2.48%", "286", null, "21", "83.13%", null, this);
            obj.set_taborder("4");
            obj.set_text("DEPT");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "2.23%", "315", null, "37", "83.13%", null, this);
            obj.set_taborder("5");
            obj.set_text("Gender");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "2.73%", "382", null, "31", "85.11%", null, this);
            obj.set_taborder("6");
            obj.set_text("Memo");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "2.98%", "448", null, "21", "85.86%", null, this);
            obj.set_taborder("7");
            obj.set_text("Salary");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "2.98%", "482", null, "22", "85.11%", null, this);
            obj.set_taborder("8");
            obj.set_text("Married");
            this.addChild(obj.name, obj);

            obj = new Edit("empName", "absolute", "30.27%", "260", null, "20", "9.18%", null, this);
            obj.set_taborder("10");
            obj.style.set_align("right middle");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new TextArea("memo", "absolute", "30.02%", "391", null, "58", "8.68%", null, this);
            obj.set_taborder("13");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("salary", "absolute", "30.02%", "457", null, "20", "9.18%", null, this);
            obj.set_taborder("14");
            obj.style.set_align("right middle");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("married", "absolute", "30.02%", "482", null, "26", "45.66%", null, this);
            obj.set_taborder("15");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "73.45%", "512", null, "24", "3.23%", null, this);
            obj.set_taborder("16");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new TextArea("dept", "absolute", "29.78%", "286", null, "23", "9.43%", null, this);
            obj.set_taborder("17");
            obj.style.set_align("right top");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Radio("genderRa", "absolute", "30.27%", "322", null, "24", "14.14%", null, this);
            this.addChild(obj.name, obj);
            var genderRa_innerdataset = new Dataset("genderRa_innerdataset", this.genderRa);
            genderRa_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">W</Col><Col id=\"datacolumn\">Female</Col></Row><Row><Col id=\"codecolumn\">M</Col><Col id=\"datacolumn\">Male</Col></Row></Rows>");
            obj.set_innerdataset(genderRa_innerdataset);
            obj.set_taborder("18");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_enable("true");
            obj.set_readonly("true");

            obj = new MaskEdit("empID", "absolute", "30.27%", "232", null, "23", "9.18%", null, this);
            obj.set_taborder("19");
            obj.set_type("string");
            obj.set_mask("AA-###");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "2.73%", "357", null, "20", "83.37%", null, this);
            obj.set_taborder("20");
            obj.set_text("HireDate");
            this.addChild(obj.name, obj);

            obj = new Calendar("hireDate", "absolute", "29.78%", "354", null, "25", "9.43%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("21");
            obj.set_readonly("true");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 403, 545, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("Base::popupExample1");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("popupExample1.xfdl", function(exports) {

        this.Button00_onclick = function(obj,e)
        {
        	this.close();
        }

        this.popupExample1_onload = function(obj,e)
        {	

        	
        	//받아온 Dataset
        	var parentDataset = new Dataset();
        	parentDataset = this.getOwnerFrame().param1;
        	
        	//Dataset copy 하기 		
        	var rowDataset = this.ds_popupData.addRow();
        	var addRowIndex = parentDataset.rowposition;
        	this.ds_popupData.copyRow(rowDataset, parentDataset);
        	
        	/*Form에 Dataset 내용 binding 하기 */
        	this.empID.set_value(this.ds_popupData.getColumn(addRowIndex,"EMPL_ID" ));
        	
        	//mask edit box는 type을 string으로 바꿔야 한다. 
        	this.empName.set_value(this.ds_popupData.getColumn(addRowIndex,"FULL_NAME") );
        	
        	var deptColumn = this.ds_popupData.getColumn(this.ds_popupData.rowposition,"DEPT_ID"); //01
        	this.dept.set_value(this.ds_dept.getColumn(this.ds_dept.findRow("code",deptColumn), "text"));
        	
        	this.genderRa.set_value(this.ds_popupData.getColumn(this.ds_popupData.rowposition,"GENDER"));
        	this.hireDate.set_value(this.ds_popupData.getColumn(this.ds_popupData.rowposition,"HIRE_DATE"));
        	this.memo.set_value(this.ds_popupData.getColumn(this.ds_popupData.rowposition,"EMPL_MEMO"));
        	this.salary.set_value(this.ds_popupData.getColumn(this.ds_popupData.rowposition,"SALARY"));
        	
        	this.married.set_readonly("true");
        	this.married.set_value(this.ds_popupData.getColumn(this.ds_popupData.rowposition,"MARRIED"));
        	
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.popupExample1_onload, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);

        };

        this.loadIncludeScript("popupExample1.xfdl", true);

       
    };
}
)();
