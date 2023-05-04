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
                this.set_name("base_hello");
                this.set_titletext("Base::base_hello");
                this._setFormPosition(0,0,930,1191);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_dept", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" size=\"255\" type=\"STRING\"/><Column id=\"VALUE\" size=\"255\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">01</Col><Col id=\"VALUE\">Human Resources</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_rank", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" size=\"255\" type=\"STRING\"/><Column id=\"VALUE\" size=\"255\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">01</Col><Col id=\"VALUE\">Human Resources</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_gender", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" size=\"255\" type=\"STRING\"/><Column id=\"VALUE\" size=\"255\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">01</Col><Col id=\"VALUE\">Human Resources</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_employees", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ID\" type=\"INT\" size=\"256\"/><Column id=\"RANK\" type=\"INT\" size=\"256\"/><Column id=\"GENDER\" type=\"INT\" size=\"256\"/><Column id=\"HIRE_DATE\" type=\"DATE\" size=\"256\"/><Column id=\"MARRIED\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_MEMO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_emp", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"HIRE_DATE\" type=\"DATE\" size=\"256\"/><Column id=\"GENDER\" type=\"STRING\" size=\"256\"/><Column id=\"MARRIED\" type=\"STRING\" size=\"256\"/><Column id=\"SALARY\" type=\"INT\" size=\"256\"/><Column id=\"EMPL_MEMO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"EMPL_ID\">AA001</Col><Col id=\"FULL_NAME\">SHIN SOO CHOO </Col><Col id=\"DEPT_ID\">01</Col><Col id=\"HIRE_DATE\">20011104</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col><Col id=\"SALARY\">2000</Col><Col id=\"EMPL_MEMO\">baseball</Col></Row><Row><Col id=\"EMPL_ID\">BB001</Col><Col id=\"FULL_NAME\">YUNA KIM</Col><Col id=\"DEPT_ID\">02</Col><Col id=\"HIRE_DATE\">20050305</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">0</Col><Col id=\"SALARY\">3000</Col><Col id=\"EMPL_MEMO\">figure skating</Col></Row><Row><Col id=\"EMPL_ID\">CC001</Col><Col id=\"FULL_NAME\">SUMI JO </Col><Col id=\"DEPT_ID\">03</Col><Col id=\"HIRE_DATE\">20100506</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">0</Col><Col id=\"SALARY\">5000</Col><Col id=\"EMPL_MEMO\">singer</Col></Row><Row><Col id=\"EMPL_ID\">DD001</Col><Col id=\"FULL_NAME\">JS PARK</Col><Col id=\"DEPT_ID\">04</Col><Col id=\"HIRE_DATE\">20101123</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col><Col id=\"SALARY\">3500</Col><Col id=\"EMPL_MEMO\">soccer</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_DEPT", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">01</Col><Col id=\"text\">Sales</Col></Row><Row><Col id=\"code\">02</Col><Col id=\"text\">IT</Col></Row><Row><Col id=\"code\">03</Col><Col id=\"text\">Education</Col></Row><Row><Col id=\"code\">04</Col><Col id=\"text\">Marketing</Col></Row><Row><Col id=\"code\">05</Col><Col id=\"text\">HR</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Edit("edit_hello", "absolute", "525", "66", "167", "28", null, null, this);
            obj.set_taborder("0");
            obj.set_value("Hello");
            this.addChild(obj.name, obj);

            obj = new Button("btn_hello", "absolute", "705", "66", "111", "25", null, null, this);
            obj.set_taborder("1");
            obj.set_text("hello!!!");
            this.addChild(obj.name, obj);

            obj = new Static("st_title", "absolute", "16", "56", "179", "34", null, null, this);
            obj.set_taborder("2");
            obj.set_text("Employee Management");
            obj.style.set_background("mintcream");
            obj.style.set_border("1 solid #646464ff");
            obj.style.set_color("#46463dff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 10 Tahoma");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSearch", "absolute", "224", "69", "208", "21", null, null, this);
            obj.set_taborder("3");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            this.addChild(obj.name, obj);

            obj = new Button("btnRetrieve", "absolute", "448", "66", "53", "22", null, null, this);
            obj.set_taborder("4");
            obj.set_text("Retrieve");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "16", "112", "718", "146", null, null, this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_emp");
            obj.set_autosizingtype("none");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"93\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"2\"><Cell/><Cell col=\"1\" text=\"EMPL_ID\"/></Cell><Cell col=\"2\" text=\"FULL_NAME\"/><Cell col=\"3\" text=\"DEPT_ID\"/><Cell col=\"4\" text=\"HIRE_DATE\"/><Cell col=\"5\" text=\"GENDER\"/><Cell col=\"6\" text=\"MARRIED\"/><Cell col=\"7\" text=\"SALARY\"/><Cell col=\"8\" text=\"EMPL_MEMO\"/></Band><Band id=\"body\"><Cell colspan=\"2\"><Cell/><Cell col=\"1\" text=\"bind:EMPL_ID\"/></Cell><Cell col=\"2\" text=\"bind:FULL_NAME\"/><Cell col=\"3\" text=\"bind:DEPT_ID\"/><Cell col=\"4\" text=\"bind:HIRE_DATE\"/><Cell col=\"5\" text=\"bind:GENDER\"/><Cell col=\"6\" text=\"bind:MARRIED\"/><Cell col=\"7\" text=\"bind:SALARY\"/><Cell col=\"8\" text=\"bind:EMPL_MEMO\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01", "absolute", "13", "310", "859", "154", null, null, this);
            obj.set_taborder("6");
            obj.set_binddataset("ds_emp");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"118\"/><Column size=\"166\"/><Column size=\"122\"/><Column size=\"123\"/><Column size=\"135\"/><Column size=\"59\"/><Column size=\"131\"/><Column size=\"155\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" style=\"font:8 Arial;\" text=\"EMPLOYEES\"/><Cell col=\"2\" rowspan=\"2\" style=\"font:8 Arial;\" text=\"DEPT\"/><Cell col=\"3\" rowspan=\"2\" style=\"font:8 Arial;\" text=\"HIRE_DATE\"/><Cell col=\"4\" rowspan=\"2\" style=\"font:8 Arial;\" text=\"GENDER\"/><Cell col=\"5\" rowspan=\"2\" style=\"font:8 Arial;\" text=\"MARRIED\"/><Cell col=\"6\" rowspan=\"2\" style=\"font:8 Arial;\" text=\"SALARY\"/><Cell col=\"7\" rowspan=\"2\" style=\"font:8 Arial;\" text=\"MEMO\"/><Cell row=\"1\" style=\"font:8 Arial;\" text=\"ID\" expandsize=\"13\"/><Cell row=\"1\" col=\"1\" style=\"font:8 Arial;\" text=\"NAME\"/></Band><Band id=\"body\"><Cell text=\"bind:EMPL_ID\"/><Cell col=\"1\" text=\"bind:FULL_NAME\"/><Cell col=\"2\" displaytype=\"combo\" text=\"bind:DEPT_ID\" combodataset=\"ds_DEPT\" combocodecol=\"code\" combodatacol=\"text\"/><Cell col=\"3\" text=\"bind:HIRE_DATE\"/><Cell col=\"4\" text=\"bind:GENDER\"/><Cell col=\"5\" displaytype=\"checkbox\" text=\"bind:MARRIED\"/><Cell col=\"6\" text=\"bind:SALARY\"/><Cell col=\"7\" text=\"bind:EMPL_MEMO\"/><Cell row=\"1\"/><Cell row=\"1\" col=\"1\"/><Cell row=\"1\" col=\"2\"/><Cell row=\"1\" col=\"3\"/><Cell row=\"1\" col=\"4\"/><Cell row=\"1\" col=\"5\"/><Cell row=\"1\" col=\"6\"/><Cell row=\"1\" col=\"7\"/><Cell row=\"2\"/><Cell row=\"2\" col=\"1\"/><Cell row=\"2\" col=\"2\"/><Cell row=\"2\" col=\"3\"/><Cell row=\"2\" col=\"4\"/><Cell row=\"2\" col=\"5\"/><Cell row=\"2\" col=\"6\"/><Cell row=\"2\" col=\"7\"/><Cell row=\"3\"/><Cell row=\"3\" col=\"1\"/><Cell row=\"3\" col=\"2\"/><Cell row=\"3\" col=\"3\"/><Cell row=\"3\" col=\"4\"/><Cell row=\"3\" col=\"5\"/><Cell row=\"3\" col=\"6\"/><Cell row=\"3\" col=\"7\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "16", "276", "210", "36", null, null, this);
            obj.set_taborder("7");
            obj.set_text("DataSetEditor Example");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "1.87%", "485", null, "25", "73.87%", null, this);
            obj.set_taborder("8");
            obj.set_text("날짜 FORMAT");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid02", "absolute", "1.43%", "513", null, "136", "6.92%", null, this);
            obj.set_taborder("9");
            obj.set_binddataset("ds_emp");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"97\"/><Column size=\"94\"/><Column size=\"129\"/><Column size=\"101\"/><Column size=\"94\"/><Column size=\"137\"/><Column size=\"85\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"font:8 Arial;\" text=\"DATE\"/><Cell col=\"1\" style=\"font:8 Arial;\" text=\"YEAR\"/><Cell col=\"2\" style=\"font:8 Arial;\" text=\"MONTH\"/><Cell col=\"3\" style=\"font:8 Arial;\" text=\"DAY\"/><Cell col=\"4\" style=\"font:8 Arial;\" text=\"day of the week\"/><Cell col=\"5\" style=\"font:8 Arial;\" text=\"DATEFORMAT\"/><Cell col=\"6\" style=\"font:8 Arial;\" text=\"DATEFORMAT\"/></Band><Band id=\"body\"><Cell text=\"bind:HIRE_DATE\"/><Cell col=\"1\" text=\"bind:HIRE_DATE\" mask=\"yyyy\"/><Cell col=\"2\" text=\"bind:HIRE_DATE\" mask=\"MM\"/><Cell col=\"3\" text=\"bind:HIRE_DATE\" mask=\"dd\"/><Cell col=\"4\" text=\"bind:HIRE_DATE\" mask=\"dddd\"/><Cell col=\"5\" text=\"bind:HIRE_DATE\" mask=\"yyyyMMdd\"/><Cell col=\"6\" text=\"bind:HIRE_DATE\" mask=\"yyyy/MM/dd\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "2.09%", "656", null, "31", "79.47%", null, this);
            obj.set_taborder("10");
            obj.set_text("Matching Dataset");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid03", "absolute", "1.51%", "686", null, "154", "26.02%", null, this);
            obj.set_taborder("11");
            obj.set_binddataset("ds_emp");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"165\"/><Column size=\"129\"/><Column size=\"169\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"font:8 Arial;\" text=\"NAME\"/><Cell col=\"1\" style=\"font:8 Arial;\" text=\"DEPT_ID\"/><Cell col=\"2\" style=\"font:8 Arial;\" text=\"DEPT_NAME\"/></Band><Band id=\"body\"><Cell text=\"bind:FULL_NAME\"/><Cell col=\"1\" text=\"bind:DEPT_ID\"/><Cell col=\"2\" displaytype=\"combo\" text=\"bind:DEPT_ID\" combodataset=\"ds_DEPT\" combocodecol=\"code\" combodatacol=\"text\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("secodeScreen", "absolute", "69.68%", "16", null, "29", "6.02%", null, this);
            obj.set_taborder("12");
            obj.set_text("NEXT PAGE");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "13.33%", "14", null, "38", "37.31%", null, this);
            obj.set_taborder("13");
            obj.set_text("NEXACRO PRACTICE");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 18 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("DataBinding", "absolute", "2.04%", "864", null, "31", "82.8%", null, this);
            obj.set_taborder("14");
            obj.set_text("DataBinding");
            this.addChild(obj.name, obj);

            obj = new Button("secondView", "absolute", "20.11%", "866", null, "30", "64.73%", null, this);
            obj.set_taborder("15");
            obj.set_text("GridWithForm");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "37.85%", "866", null, "30", "46.99%", null, this);
            obj.set_taborder("16");
            obj.set_text("GridAddDelete");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "55.05%", "866", null, "30", "29.78%", null, this);
            obj.set_taborder("17");
            obj.set_text("GridButton");
            this.addChild(obj.name, obj);

            obj = new Button("Button02", "absolute", "72.26%", "866", null, "30", "12.58%", null, this);
            obj.set_taborder("18");
            obj.set_text("GridModal");
            this.addChild(obj.name, obj);

            obj = new Button("Button03", "absolute", "2.04%", "912", null, "31", "82.8%", null, this);
            obj.set_taborder("19");
            obj.set_text("TreeWithGrid");
            this.addChild(obj.name, obj);

            obj = new Button("Button04", "absolute", "20.11%", "912", null, "31", "64.73%", null, this);
            obj.set_taborder("20");
            obj.set_text("tabMenu");
            this.addChild(obj.name, obj);

            obj = new Button("Button05", "absolute", "37.85%", "912", null, "31", "46.99%", null, this);
            obj.set_taborder("21");
            obj.set_text("FileDialog");
            this.addChild(obj.name, obj);

            obj = new Button("Button06", "absolute", "55.05%", "912", null, "31", "29.78%", null, this);
            obj.set_taborder("22");
            obj.set_text("DebuggingTest");
            this.addChild(obj.name, obj);

            obj = new Button("Button07", "absolute", "72.26%", "912", null, "31", "12.58%", null, this);
            obj.set_taborder("23");
            obj.set_text("etc");
            this.addChild(obj.name, obj);

            obj = new Button("Button08", "absolute", "2.04%", "960", null, "31", "82.8%", null, this);
            obj.set_taborder("24");
            obj.set_text("etcExample1");
            this.addChild(obj.name, obj);

            obj = new Button("Button09", "absolute", "20.11%", "960", null, "31", "64.73%", null, this);
            obj.set_taborder("25");
            obj.set_text("Grid paging");
            this.addChild(obj.name, obj);

            obj = new Button("Button10", "absolute", "37.85%", "960", null, "31", "46.99%", null, this);
            obj.set_taborder("26");
            obj.set_text("Button10");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 930, 1191, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("Base::base_hello");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","edtSearch","value","ds_rank","CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("HelloScreen.xfdl", function(exports) {

        this.btn_hello_onclick = function(obj,e)
        {
        	this.alert("Hello");
        	alert(this.edit_hello.value);
        	//이벤트 함수의 첫번째 인자는 이벤트를 실행한 오브젝트 
        	application.alert(obj.text);
        }

        this.Static03_onclick = function(obj,e)
        {
        	
        }

        this.secodeScreen_onclick = function(obj,e)
        {
        	this.go("Base::ExampleFrom1.xfdl");
        	
        }

        this.DataBinding_onclick = function(obj,e)
        {
        	this.go("Base::comExample1.xfdl");
        }

        this.secondView_onclick = function(obj,e)
        {
        	this.go("Base::SecondView.xfdl");
        }

        this.Button00_onclick = function(obj,e)
        {
        	this.go("Base::dataGridExample2.xfdl");
        }

        this.Button01_onclick = function(obj,e)
        {
        	this.go("Base::dataGridExample3.xfdl");
        }

        this.Button02_onclick = function(obj,e)
        {
        	this.go("Base::dataGridExample4.xfdl");
        }

        this.Button03_onclick = function(obj,e)
        {
        	this.go("Base::treeGridExample.xfdl");
        }

        this.Button04_onclick = function(obj,e)
        {
        	this.go("Base::tabMenu.xfdl");
        }

        this.Button05_onclick = function(obj,e)
        {
        	this.go("Base::fileDialog.xfdl");
        }

        this.Button06_onclick = function(obj,e)
        {
        	this.go("Base::menuPopup.xfdl");
        }

        this.Button07_onclick = function(obj,e)
        {
        	this.go("Base::etcExample.xfdl");
        }

        this.Button08_onclick = function(obj,e)
        {
        	this.go("Base::etcExample1.xfdl");
        }

        this.base_hello_onload = function(obj,e)
        {
        	trace("HelloScreen is first view Test");
        	
        	trace("this.getOwnerFrame : ",this.getOwnerFrame()["tabMenu"]);
        	
        }

        this.Button09_onclick = function(obj,e)
        {
        	this.go("Base::GridPaging.xfdl");
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.base_hello_onload, this);
            this.btn_hello.addEventHandler("onclick", this.btn_hello_onclick, this);
            this.secodeScreen.addEventHandler("onclick", this.secodeScreen_onclick, this);
            this.Static03.addEventHandler("onclick", this.Static03_onclick, this);
            this.DataBinding.addEventHandler("onclick", this.DataBinding_onclick, this);
            this.secondView.addEventHandler("onclick", this.secondView_onclick, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.Button01.addEventHandler("onclick", this.Button01_onclick, this);
            this.Button02.addEventHandler("onclick", this.Button02_onclick, this);
            this.Button03.addEventHandler("onclick", this.Button03_onclick, this);
            this.Button04.addEventHandler("onclick", this.Button04_onclick, this);
            this.Button05.addEventHandler("onclick", this.Button05_onclick, this);
            this.Button06.addEventHandler("onclick", this.Button06_onclick, this);
            this.Button07.addEventHandler("onclick", this.Button07_onclick, this);
            this.Button08.addEventHandler("onclick", this.Button08_onclick, this);
            this.Button09.addEventHandler("onclick", this.Button09_onclick, this);

        };

        this.loadIncludeScript("HelloScreen.xfdl", true);

       
    };
}
)();
