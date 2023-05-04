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
                this.set_name("dataGridExample4");
                this.set_titletext("Base::dataGridExample4");
                this._setFormPosition(0,0,724,600);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_emp", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPL_ID\" type=\"STRING\" size=\"5\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"10\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"2\"/><Column id=\"HIRE_DATE\" type=\"DATE\" size=\"8\"/><Column id=\"GENDER\" type=\"STRING\" size=\"1\"/><Column id=\"MARRIED\" type=\"STRING\" size=\"1\"/><Column id=\"SALARY\" type=\"INT\" size=\"10\"/><Column id=\"EMPL_MEMO\" type=\"STRING\" size=\"500\"/></ColumnInfo><Rows><Row><Col id=\"EMPL_ID\">AA001</Col><Col id=\"FULL_NAME\">SHIN SOO CHOO </Col><Col id=\"DEPT_ID\">01</Col><Col id=\"HIRE_DATE\">20011104</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col><Col id=\"SALARY\">2000</Col><Col id=\"EMPL_MEMO\">baseball</Col></Row><Row><Col id=\"EMPL_ID\">BB001</Col><Col id=\"FULL_NAME\">YUNA KIM</Col><Col id=\"DEPT_ID\">02</Col><Col id=\"HIRE_DATE\">20050305</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">0</Col><Col id=\"SALARY\">3000</Col><Col id=\"EMPL_MEMO\">figure skating</Col></Row><Row><Col id=\"EMPL_ID\">CC001</Col><Col id=\"FULL_NAME\">SUMI JO</Col><Col id=\"DEPT_ID\">03</Col><Col id=\"HIRE_DATE\">20100506</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">0</Col><Col id=\"SALARY\">5000</Col><Col id=\"EMPL_MEMO\">singer</Col></Row><Row><Col id=\"EMPL_ID\">DD001</Col><Col id=\"FULL_NAME\">JS PARK</Col><Col id=\"DEPT_ID\">04</Col><Col id=\"HIRE_DATE\">20101123</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col><Col id=\"SALARY\">3500</Col><Col id=\"EMPL_MEMO\">soccer</Col></Row><Row><Col id=\"EMPL_ID\">EE001</Col><Col id=\"FULL_NAME\">JY PARK</Col><Col id=\"DEPT_ID\">05</Col><Col id=\"HIRE_DATE\">20200101</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col><Col id=\"SALARY\">6000</Col><Col id=\"EMPL_MEMO\">dancer </Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_dept", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">01</Col><Col id=\"text\">Sales</Col></Row><Row><Col id=\"code\">02</Col><Col id=\"text\">IT</Col></Row><Row><Col id=\"code\">03</Col><Col id=\"text\">Education</Col></Row><Row><Col id=\"code\">04</Col><Col id=\"text\">Marketing</Col></Row><Row><Col id=\"code\">05</Col><Col id=\"text\">HR</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_rowData", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"EMPL_ID\" type=\"STRING\" size=\"5\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"10\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"2\"/><Column id=\"HIRE_DATE\" type=\"DATE\" size=\"8\"/><Column id=\"GENDER\" type=\"STRING\" size=\"1\"/><Column id=\"MARRIED\" type=\"STRING\" size=\"1\"/><Column id=\"SALARY\" type=\"INT\" size=\"10\"/><Column id=\"EMPL_MEMO\" type=\"STRING\" size=\"500\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("Button00", "absolute", "592", "11", "125", "33", null, null, this);
            obj.set_taborder("0");
            obj.set_text("←Back");
            obj.getSetter("titletext").set("Base::dataGridExample4");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "24", "409", "104", "34", null, null, this);
            obj.set_taborder("1");
            obj.set_text("openMethod");
            this.addChild(obj.name, obj);

            obj = new Button("Button02", "absolute", "148", "409", "172", "34", null, null, this);
            obj.set_taborder("2");
            obj.set_text("showModalMethod");
            this.addChild(obj.name, obj);

            obj = new Button("Button03", "absolute", "335", "409", "179", "34", null, null, this);
            obj.set_taborder("3");
            obj.set_text("ShowModalWindowMethod");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "16", "11", "375", "45", null, null, this);
            obj.set_taborder("4");
            obj.set_text("Static00");
            this.addChild(obj.name, obj);

            obj = new Button("Button04", "absolute", "528", "410", "172", "33", null, null, this);
            obj.set_taborder("5");
            obj.set_text("showModalSync");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "10", "63", "706", "329", null, null, this);
            obj.set_taborder("6");
            obj.set_binddataset("ds_emp");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"59\"/><Column size=\"113\"/><Column size=\"86\"/><Column size=\"98\"/><Column size=\"114\"/><Column size=\"97\"/><Column size=\"65\"/><Column size=\"111\"/><Column size=\"170\"/><Column size=\"54\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" style=\"font:8 Arial;\" text=\"rowNum\"/><Cell col=\"1\" colspan=\"2\" style=\"font:8 Arial;\" text=\"Employees\"/><Cell col=\"3\" rowspan=\"2\" style=\"font:8 Arial;\" text=\"Dept\"/><Cell col=\"4\" rowspan=\"2\" style=\"font:8 Arial;\" text=\"HireDate\"/><Cell col=\"5\" rowspan=\"2\" style=\"font:8 Arial;\" text=\"Gender\"/><Cell col=\"6\" rowspan=\"2\" style=\"font:8 Arial;\" text=\"Married\"/><Cell col=\"7\" rowspan=\"2\" style=\"font:8 Arial;\" text=\"Salary\"/><Cell col=\"8\" rowspan=\"2\" style=\"font:8 Arial;\" text=\"Memo\"/><Cell col=\"9\" rowspan=\"2\" style=\"font:bold 8 Arial;\" text=\"Detail\"/><Cell row=\"1\" col=\"1\" style=\"font:8 Arial;\" text=\"ID\"/><Cell row=\"1\" col=\"2\" style=\"font:8 Arial;\" text=\"Name\"/></Band><Band id=\"body\"><Cell celltype=\"head\" text=\"expr:currow + 1\"/><Cell col=\"1\" style=\"color:EXPR(GENDER == &quot;W&quot; ? &quot;blue&quot;:&quot;red&quot;);color2:EXPR(GENDER == &quot;W&quot; ? &quot;blue&quot; : &quot;red&quot;);\" text=\"bind:EMPL_ID\" mask=\"AA-###\"/><Cell col=\"2\" style=\"color:EXPR(GENDER == &quot;W&quot; ? &quot;blue&quot;:&quot;red&quot;);color2:EXPR(GENDER == &quot;W&quot; ? &quot;blue&quot; : &quot;red&quot;);\" text=\"bind:FULL_NAME\"/><Cell col=\"3\" displaytype=\"combo\" text=\"bind:DEPT_ID\" combodataset=\"ds_dept\" combocodecol=\"code\" combodatacol=\"text\"/><Cell col=\"4\" text=\"bind:HIRE_DATE\"/><Cell col=\"5\" text=\"bind:GENDER\"/><Cell col=\"6\" displaytype=\"checkbox\" text=\"bind:MARRIED\"/><Cell col=\"7\" text=\"bind:SALARY\" mask=\"###,###,### 원\"/><Cell col=\"8\" text=\"bind:EMPL_MEMO\"/><Cell col=\"9\" displaytype=\"button\" edittype=\"button\" style=\"align:center middle;font:antialias 9 Arial;\" text=\"test\" expandshow=\"show\" expandsize=\"16\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" text=\"expr:&quot;total:&quot; + comp.parent.ds_emp.getRowCount()\"/><Cell col=\"2\"/><Cell col=\"3\" text=\"expr:&quot;total Salary :&quot; + comp.parent.ds_emp.getSum(&quot;SALARY&quot;)\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 724, 600, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("Base::dataGridExample4");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("dataGridExample4.xfdl", function(exports) {

        //click시 index 
        var rowIndex =0;

        
        this.Button00_onclick = function(obj,e)
        {
        	this.go("Base::HelloScreen.xfdl");
        }

        //모달리스 
        this.Button01_onclick = function(obj,e)
        {
        	//open method
        	var nWidth = 300;
        	var nHeight = 250;
        	var nLeft = system.clientToScreenX(this,10);
        	var nTop = system.clientToScreenY(this,10);
        	
        	this.ds_rowData.clearData();
        	
        	/*param으로 click한 dataset을 넘겨 보자*/
        	//1. click한 row가 들어갈 dataset에 row추가
        	var rowDataSet = this.ds_rowData.addRow();
        	
        	//선택된 row의 인덱스
        	var rowIndex = this.ds_emp.rowposition;
        	//2. click한 row를 담자
        	this.ds_rowData.copyRow(rowDataSet,this.ds_emp,rowIndex);
        	

        	//dataset을 확인 하고 싶을때
        	//trace(this.ds_rowData.saveXML());

        	var sOpenStyle = "dragmovetype=all" 
        				   + "autosize=false"
        				   + "resizable=false"
        				   + "titletext=popup"
        				   + "showtitlebar=false"
        				   + "layered=true";
        	application.open("chf_popup1", 
        					 "Base::popupExample1.xfdl",
        					  this.getOwnerFrame(),
        					  {param1 : this.ds_rowData},
        					  sOpenStyle,
        					  nLeft,
        					  nTop,
        					  nWidth,
        					  nHeight,
        					  this);  
        					 
        }

        
        //modal
        this.Button02_onclick = function(obj,e)
        {
        	
        	/*child frame 동적으로 생성 */
        	var objChilFrame = new ChildFrame();
        	//trace(objChilFrame);
        	/*modal 화면 setting 초기화*/
        	objChilFrame.init("chf_popup1","absolute",0,0,400,350,null,null,"Base::popupExample1.xfdl");
        	//결과 화면에서 pop up 창이 drag로 이동 될 수 있는지 아닌지. 
        	objChilFrame.set_dragmovetype("all");
        	objChilFrame.set_openalign("center middle");
        	//objChilFrame.style.set_overlaycolor("RGBA(196,196,196,0.5)");
        	
        	this.ds_rowData.clearData();
        	
        	/*param으로 click한 dataset을 넘겨 보자*/
        	//1. click한 row가 들어갈 dataset에 row추가
        	var rowDataSet = this.ds_rowData.addRow();
        	
        	//선택된 row의 인덱스
        	var rowIndex = this.ds_emp.rowposition;
        	//2. click한 row를 담자
        	this.ds_rowData.copyRow(rowDataSet,this.ds_emp,rowIndex);
        	
        	var param  ={param1 : this.ds_rowData};
        	objChilFrame.showModal(this.getOwnerFrame(), param, this, "");
        	
        	
        	
        }

        this.Button03_onclick = function(obj,e)
        {
        	var objChildFrame = new ChildFrame();
        	objChildFrame.init("chf_popup1","absolute",0,0,400,350,null,null,"Base::popupExample1.xfdl");
        	objChildFrame.set_dragmovetype("all");
        	objChildFrame.set_openalign("center middle");
        	
        	this.ds_rowData.clearData();
        	
        	/*param으로 click한 dataset을 넘겨 보자*/
        	//1. click한 row가 들어갈 dataset에 row추가
        	var rowDataSet = this.ds_rowData.addRow();
        	
        	//선택된 row의 인덱스
        	var rowIndex = this.ds_emp.rowposition;
        	//2. click한 row를 담자
        	this.ds_rowData.copyRow(rowDataSet,this.ds_emp,rowIndex);
        	
        	var param  ={param1 : this.ds_rowData};
        	
        	
        	system.showModalWindow(objChildFrame, "modelesss2", this.getOwnerFrame(),param,this );
        	
        	
        }

        
        this.Button04_onclick = function(obj,e)
        {

        	var objChildFrame = new ChildFrame();
        	objChildFrame.init("chf_popup1","absolute",0,0,400,350,null,null,"Base::popupExample1.xfdl");
        	objChildFrame.set_dragmovetype("all");
        	objChildFrame.set_openalign("center middle");
        	
        	this.ds_rowData.clearData();
        	
        	/*param으로 click한 dataset을 넘겨 보자*/
        	//1. click한 row가 들어갈 dataset에 row추가
        	var rowDataSet = this.ds_rowData.addRow();
        	
        	//선택된 row의 인덱스
        	var rowIndex = this.ds_emp.rowposition;
        	//2. click한 row를 담자
        	this.ds_rowData.copyRow(rowDataSet,this.ds_emp,rowIndex);
        	
        	var param  ={param1 : this.ds_rowData};
        	
        	system.showModalSync(objChildFrame, "modelesss2", this.getOwnerFrame(),param,this );
        	
        }

        
        //after return call back function
        this.fn_popupCallback = function(strPopupID,strReturn)
        {
        	trace("부모 Function");
        	if(strReturn == undefined)
        	{
        		return;
        	}
        	
        	if(strPopupID == "chf_popup1")
        	{
        		this.alert("Return value :" + strReturn);
        	}

        

        }

        this.dataGridExample4_onload = function(obj,e)
        {
        	/*static text 변경 하기*/
        	this.Static00.set_text("Popup Window Example");
        	trace("test :" + e.row);
        }

        

        

        
        this.Grid00_oncellclick = function(obj,e)
        {	
        	rowIndex = e.row;
        	
        	if(this.Grid00.getCellProperty("body",e.cell,"displaytype") == "button"){
        		
        	}else{
        		
        	
        	}

        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.dataGridExample4_onload, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.Button01.addEventHandler("onclick", this.Button01_onclick, this);
            this.Button02.addEventHandler("onclick", this.Button02_onclick, this);
            this.Button03.addEventHandler("onclick", this.Button03_onclick, this);
            this.Static00.addEventHandler("onclick", this.Static00_onclick, this);
            this.Button04.addEventHandler("onclick", this.Button04_onclick, this);
            this.Grid00.addEventHandler("oncellclick", this.Grid00_oncellclick, this);

        };

        this.loadIncludeScript("dataGridExample4.xfdl", true);

       
    };
}
)();
