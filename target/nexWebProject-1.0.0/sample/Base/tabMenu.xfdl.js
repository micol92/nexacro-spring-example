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
                this.set_name("tabMenu");
                this.set_titletext("Base::tabMenu");
                this._setFormPosition(0,0,764,640);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_emp", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"EMPL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"HIRE_DATE\" type=\"DATE\" size=\"256\"/><Column id=\"GENDER\" type=\"STRING\" size=\"256\"/><Column id=\"MARRIED\" type=\"STRING\" size=\"256\"/><Column id=\"SALARY\" type=\"INT\" size=\"256\"/><Column id=\"EMPL_MEMO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"EMPL_ID\">AA001</Col><Col id=\"FULL_NAME\">SHIN SOO CHOO </Col><Col id=\"DEPT_ID\">01</Col><Col id=\"HIRE_DATE\">20011104</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col><Col id=\"SALARY\">2000</Col><Col id=\"EMPL_MEMO\">baseball</Col></Row><Row><Col id=\"EMPL_ID\">BB001</Col><Col id=\"FULL_NAME\">YUNA KIM</Col><Col id=\"DEPT_ID\">02</Col><Col id=\"HIRE_DATE\">20050305</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">0</Col><Col id=\"SALARY\">3000</Col><Col id=\"EMPL_MEMO\">figure skating</Col></Row><Row><Col id=\"EMPL_ID\">CC001</Col><Col id=\"FULL_NAME\">SUMI JO </Col><Col id=\"DEPT_ID\">03</Col><Col id=\"HIRE_DATE\">20100506</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">0</Col><Col id=\"SALARY\">5000</Col><Col id=\"EMPL_MEMO\">singer</Col></Row><Row><Col id=\"EMPL_ID\">DD001</Col><Col id=\"FULL_NAME\">JS PARK</Col><Col id=\"DEPT_ID\">04</Col><Col id=\"HIRE_DATE\">20101123</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col><Col id=\"SALARY\">3500</Col><Col id=\"EMPL_MEMO\">soccer</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_dept", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">01</Col><Col id=\"text\">Sales</Col></Row><Row><Col id=\"code\">02</Col><Col id=\"text\">IT</Col></Row><Row><Col id=\"code\">03</Col><Col id=\"text\">Education</Col></Row><Row><Col id=\"code\">04</Col><Col id=\"text\">Marketing</Col></Row><Row><Col id=\"code\">05</Col><Col id=\"text\">HR</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("cp_emp", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"EMPL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"HIRE_DATE\" type=\"DATE\" size=\"256\"/><Column id=\"GENDER\" type=\"STRING\" size=\"256\"/><Column id=\"MARRIED\" type=\"STRING\" size=\"256\"/><Column id=\"SALARY\" type=\"INT\" size=\"256\"/><Column id=\"EMPL_MEMO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("Button00", "absolute", "624", "12", "119", "36", null, null, this);
            obj.set_taborder("1");
            obj.set_text("←Back");
            this.addChild(obj.name, obj);

            obj = new Tab("tabMenu", "absolute", "35", "373", "709", "231", null, null, this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_scrollbars("autoboth");
            obj.set_multiline("true");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            obj = new Tabpage("tabpage1", this.tabMenu);
            obj.set_text("Form Binding");
            this.tabMenu.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "20", "34", "56", "24", null, null, this.tabMenu.tabpage1);
            obj.set_taborder("0");
            obj.set_text("EMPL_ID");
            this.tabMenu.tabpage1.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "13", "66", "79", "30", null, null, this.tabMenu.tabpage1);
            obj.set_taborder("2");
            obj.set_text("FULL_NAME");
            this.tabMenu.tabpage1.addChild(obj.name, obj);
            obj = new Edit("fullName", "absolute", "92", "69", "144", "24", null, null, this.tabMenu.tabpage1);
            obj.set_taborder("3");
            obj.set_readonly("true");
            obj.style.set_align("right middle");
            this.tabMenu.tabpage1.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "16", "109", "68", "29", null, null, this.tabMenu.tabpage1);
            obj.set_taborder("4");
            obj.set_text("DEPT");
            this.tabMenu.tabpage1.addChild(obj.name, obj);
            obj = new Edit("dept", "absolute", "92", "109", "144", "23", null, null, this.tabMenu.tabpage1);
            obj.set_taborder("5");
            obj.set_readonly("true");
            obj.style.set_align("right middle");
            this.tabMenu.tabpage1.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "13", "152", "71", "28", null, null, this.tabMenu.tabpage1);
            obj.set_taborder("6");
            obj.set_text("HIRE_DATE");
            this.tabMenu.tabpage1.addChild(obj.name, obj);
            obj = new Calendar("hireDate", "absolute", "92", "156", "144", "28", null, null, this.tabMenu.tabpage1);
            this.tabMenu.tabpage1.addChild(obj.name, obj);
            obj.set_taborder("7");
            obj.set_readonly("true");
            obj.style.set_align("right middle");
            obj = new Static("Static04", "absolute", "332", "28", "58", "28", null, null, this.tabMenu.tabpage1);
            obj.set_taborder("8");
            obj.set_text("GENDER");
            this.tabMenu.tabpage1.addChild(obj.name, obj);
            obj = new Radio("genderRadio", "absolute", "428", "27", "202", "29", null, null, this.tabMenu.tabpage1);
            this.tabMenu.tabpage1.addChild(obj.name, obj);
            var genderRadio_innerdataset = new Dataset("genderRadio_innerdataset", this.tabMenu.tabpage1.genderRadio);
            genderRadio_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">W</Col><Col id=\"datacolumn\">Female</Col></Row><Row><Col id=\"codecolumn\">M</Col><Col id=\"datacolumn\">Male</Col></Row></Rows>");
            obj.set_innerdataset(genderRadio_innerdataset);
            obj.set_taborder("9");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_readonly("true");
            obj = new Static("Static05", "absolute", "333", "68", "63", "26", null, null, this.tabMenu.tabpage1);
            obj.set_taborder("10");
            obj.set_text("MARRIED");
            this.tabMenu.tabpage1.addChild(obj.name, obj);
            obj = new CheckBox("married", "absolute", "428", "66", "34", "29", null, null, this.tabMenu.tabpage1);
            obj.set_taborder("11");
            obj.set_readonly("true");
            this.tabMenu.tabpage1.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "333", "106", "58", "21", null, null, this.tabMenu.tabpage1);
            obj.set_taborder("12");
            obj.set_text("SALARY");
            this.tabMenu.tabpage1.addChild(obj.name, obj);
            obj = new Edit("salary", "absolute", "428", "100", "144", "23", null, null, this.tabMenu.tabpage1);
            obj.set_taborder("13");
            obj.set_readonly("true");
            this.tabMenu.tabpage1.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "333", "135", "85", "27", null, null, this.tabMenu.tabpage1);
            obj.set_taborder("14");
            obj.set_text("EMPL_MEMO");
            this.tabMenu.tabpage1.addChild(obj.name, obj);
            obj = new Edit("memo", "absolute", "428", "138", "216", "46", null, null, this.tabMenu.tabpage1);
            obj.set_taborder("15");
            obj.set_readonly("true");
            this.tabMenu.tabpage1.addChild(obj.name, obj);
            obj = new MaskEdit("empId", "absolute", "92", "30", "144", "25", null, null, this.tabMenu.tabpage1);
            obj.set_taborder("16");
            obj.set_mask("AA-###");
            obj.set_readonly("true");
            obj.set_type("string");
            this.tabMenu.tabpage1.addChild(obj.name, obj);
            obj = new Tabpage("tabpage2", this.tabMenu);
            obj.set_text("GridView");
            this.tabMenu.addChild(obj.name, obj);
            obj = new Grid("Grid00", "absolute", "13", "17", "677", "178", null, null, this.tabMenu.tabpage2);
            obj.set_taborder("0");
            obj.set_binddataset("cp_emp");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"EMPL_ID\"/><Cell col=\"1\" text=\"FULL_NAME\"/><Cell col=\"2\" text=\"DEPT_ID\"/><Cell col=\"3\" text=\"HIRE_DATE\"/><Cell col=\"4\" text=\"GENDER\"/><Cell col=\"5\" text=\"MARRIED\"/><Cell col=\"6\" text=\"SALARY\"/><Cell col=\"7\" text=\"EMPL_MEMO\"/></Band><Band id=\"body\"><Cell text=\"bind:EMPL_ID\" mask=\"AA-###\"/><Cell col=\"1\" text=\"bind:FULL_NAME\"/><Cell col=\"2\" text=\"bind:DEPT_ID\"/><Cell col=\"3\" text=\"bind:HIRE_DATE\"/><Cell col=\"4\" displaytype=\"normal\" text=\"bind:GENDER\"/><Cell col=\"5\" displaytype=\"checkbox\" text=\"bind:MARRIED\"/><Cell col=\"6\" text=\"bind:SALARY\"/><Cell col=\"7\" text=\"bind:EMPL_MEMO\"/></Band></Format></Formats>");
            this.tabMenu.tabpage2.addChild(obj.name, obj);
            obj = new Tabpage("tabpage3", this.tabMenu);
            obj.set_text("tabpage3");
            this.tabMenu.addChild(obj.name, obj);
            obj = new Tabpage("tabpage4", this.tabMenu);
            obj.set_text("tabpage4");
            this.tabMenu.addChild(obj.name, obj);
            obj = new Tabpage("tabpage5", this.tabMenu);
            obj.set_text("tabpage5");
            this.tabMenu.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "33", "79", "711", "257", null, null, this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_emp");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"74\"/><Column size=\"107\"/><Column size=\"94\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"EMPL_ID\"/><Cell col=\"1\" text=\"FULL_NAME\"/><Cell col=\"2\" text=\"DEPT_ID\"/><Cell col=\"3\" text=\"HIRE_DATE\"/><Cell col=\"4\" text=\"GENDER\"/><Cell col=\"5\" text=\"MARRIED\"/><Cell col=\"6\" text=\"SALARY\"/><Cell col=\"7\" text=\"EMPL_MEMO\"/><Cell col=\"8\" displaytype=\"normal\" text=\"상세보기\"/></Band><Band id=\"body\"><Cell text=\"bind:EMPL_ID\" mask=\"AA-###\"/><Cell col=\"1\" text=\"bind:FULL_NAME\"/><Cell col=\"2\" text=\"bind:DEPT_ID\"/><Cell col=\"3\" text=\"bind:HIRE_DATE\"/><Cell col=\"4\" text=\"bind:GENDER\"/><Cell col=\"5\" text=\"bind:MARRIED\"/><Cell col=\"6\" text=\"bind:SALARY\"/><Cell col=\"7\" text=\"bind:EMPL_MEMO\"/><Cell col=\"8\" displaytype=\"button\" style=\"color:black;color2:black;controlcolor:black;\" text=\"view\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 707, 207, this.tabMenu.tabpage1,
            	//-- Layout function
            	function(p) {
            		p.set_text("Form Binding");

            	}
            );
            this.tabMenu.tabpage1.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.tabMenu.tabpage2,
            	//-- Layout function
            	function(p) {
            		p.set_text("GridView");

            	}
            );
            this.tabMenu.tabpage2.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 764, 640, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("Base::tabMenu");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("tabMenu.xfdl", function(exports) {
        this.getBindColumnIDByIndex = function(grid,index) 
        {
          var text = "";
          var columnid = null;
          var subCell = grid.getCellProperty("body", index, "subcell");
          if ( subCell > 0 )
          {
            text = grid.getSubCellProperty("body", index, 0, "text");
          }
          else
          {
            text = grid.getCellProperty("body", index, "text");
          }
          
          if ( text && text.length > 0 )
          {
            if ( text.search(/^bind:/) > -1 ) 
            {
              columnid = text.replace(/^bind:/, "");
            }  
            else if ( text.search(/^BIND\(/) > -1 ) 
            {  
              columnid = text.replace(/^BIND\(/, "");
              columnid = columnid.substr(0, columnid.length-1);
            } 
          }
          
          return columnid;
        }

        
        this.Button00_onclick = function(obj,e)
        {
        	this.go("Base::HelloScreen.xfdl");
        }

        this.Grid00_oncellclick = function(obj,e)
        {	
        	// Grid button click 
        	/*
        	if(this.Grid00.getCellProperty("body",e.cell,"displaytype") == "button")
        	{
        		//Grid의 상세보기 버튼이 눌리면 화면에 보여줘라
        		this.tabMenu.set_visible("true");
        		
        		//tabpage1
        		//Form Binding tab안의 form에 binding 해준다. 
        		this.tabMenu.tabpage1.empId.set_value(this.ds_emp.getColumn(this.ds_emp.rowposition,"EMPL_ID"));
        		
        		this.tabMenu.tabpage1.fullName.set_value(this.ds_emp.getColumn(this.ds_emp.rowposition,"FULL_NAME"));
        		
        		var deptID = this.ds_emp.getColumn(this.ds_emp.rowposition,"DEPT_ID");
        		var searchIndex = this.ds_dept.findRow("code",deptID);
        		this.tabMenu.tabpage1.dept.set_value(this.ds_dept.getColumn(searchIndex,"text"));
        		
        		this.tabMenu.tabpage1.hireDate.set_value(this.ds_emp.getColumn(this.ds_emp.rowposition,"HIRE_DATE"));
        		this.tabMenu.tabpage1.genderRadio.set_value(this.ds_emp.getColumn(this.ds_emp.rowposition,"GENDER"));
        		this.tabMenu.tabpage1.married.set_value(this.ds_emp.getColumn(this.ds_emp.rowposition,"MARRIED"));
        		this.tabMenu.tabpage1.salary.set_value(this.ds_emp.getColumn(this.ds_emp.rowposition,"SALARY"));
        		this.tabMenu.tabpage1.memo.set_value(this.ds_emp.getColumn(this.ds_emp.rowposition,"EMPL_MEMO"));
        		
        		
        		//tabpage2
        		this.cp_emp.clearData();
        		var addcopyrow = this.cp_emp.addRow();
        		this.cp_emp.copyRow(addcopyrow, this.ds_emp,this.ds_emp.rowposition);
        		
        	}*/
        	
        	//Grid Cell Click시 Cell value 가져오기
        	var columnId = this.getBindColumnIDByIndex(obj, e.cell);
        	if(columnId == "MARRIED")
        	{
        		this.tabMenu.set_taborder(3);
        		this.tabMenu.set_tabindex(3);
        		this.tabMenu.set_visible("true");
        		trace(this.tabMenu.getTabpageCount());
        	
              
                //this.Tab00.moveTabpage(dragTabIndex, dropTabIndex);
        	
        	}
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.Grid00.addEventHandler("oncellclick", this.Grid00_oncellclick, this);

        };

        this.loadIncludeScript("tabMenu.xfdl", true);

       
    };
}
)();
