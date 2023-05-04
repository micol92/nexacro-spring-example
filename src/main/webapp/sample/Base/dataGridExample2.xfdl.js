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
                this.set_name("dataGridExample2");
                this.set_titletext("Base::dataGridExample2");
                this._setFormPosition(0,0,764,640);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_emp", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPL_ID\" type=\"STRING\" size=\"5\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"10\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"2\"/><Column id=\"HIRE_DATE\" type=\"DATE\" size=\"8\"/><Column id=\"GENDER\" type=\"STRING\" size=\"1\"/><Column id=\"MARRIED\" type=\"STRING\" size=\"1\"/><Column id=\"SALARY\" type=\"INT\" size=\"10\"/><Column id=\"EMPL_MEMO\" type=\"STRING\" size=\"500\"/></ColumnInfo><Rows><Row><Col id=\"EMPL_ID\">AA001</Col><Col id=\"FULL_NAME\">SHIN SOO CHOO </Col><Col id=\"DEPT_ID\">01</Col><Col id=\"HIRE_DATE\">20011104</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col><Col id=\"SALARY\">2000</Col><Col id=\"EMPL_MEMO\">baseball</Col></Row><Row><Col id=\"EMPL_ID\">BB001</Col><Col id=\"FULL_NAME\">YUNA KIM</Col><Col id=\"DEPT_ID\">02</Col><Col id=\"HIRE_DATE\">20050305</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">0</Col><Col id=\"SALARY\">3000</Col><Col id=\"EMPL_MEMO\">figure skating</Col></Row><Row><Col id=\"EMPL_ID\">CC001</Col><Col id=\"FULL_NAME\">SUMI JO</Col><Col id=\"DEPT_ID\">03</Col><Col id=\"HIRE_DATE\">20100506</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">0</Col><Col id=\"SALARY\">5000</Col><Col id=\"EMPL_MEMO\">singer</Col></Row><Row><Col id=\"EMPL_ID\">DD001</Col><Col id=\"FULL_NAME\">JS PARK</Col><Col id=\"DEPT_ID\">04</Col><Col id=\"HIRE_DATE\">20101123</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col><Col id=\"SALARY\">3500</Col><Col id=\"EMPL_MEMO\">soccer</Col></Row><Row><Col id=\"EMPL_ID\">EE001</Col><Col id=\"FULL_NAME\">JY PARK</Col><Col id=\"DEPT_ID\">05</Col><Col id=\"HIRE_DATE\">20200101</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col><Col id=\"SALARY\">6000</Col><Col id=\"EMPL_MEMO\">dancer </Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_dept", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">01</Col><Col id=\"text\">Sales</Col></Row><Row><Col id=\"code\">02</Col><Col id=\"text\">IT</Col></Row><Row><Col id=\"code\">03</Col><Col id=\"text\">Education</Col></Row><Row><Col id=\"code\">04</Col><Col id=\"text\">Marketing</Col></Row><Row><Col id=\"code\">05</Col><Col id=\"text\">HR</Col></Row><Row><Col id=\"code\">06</Col><Col id=\"text\">Business</Col></Row><Row><Col id=\"code\">07</Col><Col id=\"text\">Nursing</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_emp00", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPL_ID\" type=\"STRING\" size=\"5\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"10\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"2\"/><Column id=\"HIRE_DATE\" type=\"DATE\" size=\"8\"/><Column id=\"GENDER\" type=\"STRING\" size=\"1\"/><Column id=\"MARRIED\" type=\"STRING\" size=\"1\"/><Column id=\"SALARY\" type=\"INT\" size=\"10\"/><Column id=\"EMPL_MEMO\" type=\"STRING\" size=\"500\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("Button00", "absolute", "648", "11", "103", "29", null, null, this);
            obj.set_taborder("0");
            obj.set_text("←Back");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "21", "96", "731", "266", null, null, this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_emp");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"59\"/><Column size=\"113\"/><Column size=\"86\"/><Column size=\"98\"/><Column size=\"114\"/><Column size=\"97\"/><Column size=\"65\"/><Column size=\"111\"/><Column size=\"170\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" style=\"font:8 Arial;\" text=\"rowNum\"/><Cell col=\"1\" colspan=\"2\" style=\"font:8 Arial;\" text=\"Employees\"/><Cell col=\"3\" rowspan=\"2\" style=\"font:8 Arial;\" text=\"Dept\"/><Cell col=\"4\" rowspan=\"2\" style=\"font:8 Arial;\" text=\"HireDate\"/><Cell col=\"5\" rowspan=\"2\" style=\"font:8 Arial;\" text=\"Gender\"/><Cell col=\"6\" rowspan=\"2\" style=\"font:8 Arial;\" text=\"Married\"/><Cell col=\"7\" rowspan=\"2\" style=\"font:8 Arial;\" text=\"Salary\"/><Cell col=\"8\" rowspan=\"2\" style=\"font:8 Arial;\" text=\"Memo\"/><Cell row=\"1\" col=\"1\" style=\"font:8 Arial;\" text=\"ID\"/><Cell row=\"1\" col=\"2\" style=\"font:8 Arial;\" text=\"Name\"/></Band><Band id=\"body\"><Cell celltype=\"head\" text=\"expr:currow + 1\"/><Cell col=\"1\" style=\"color:EXPR(GENDER == &quot;W&quot; ? &quot;blue&quot;:&quot;red&quot;);color2:EXPR(GENDER == &quot;W&quot; ? &quot;blue&quot; : &quot;red&quot;);\" text=\"bind:EMPL_ID\" mask=\"AA-###\"/><Cell col=\"2\" style=\"color:EXPR(GENDER == &quot;W&quot; ? &quot;blue&quot;:&quot;red&quot;);color2:EXPR(GENDER == &quot;W&quot; ? &quot;blue&quot; : &quot;red&quot;);\" text=\"bind:FULL_NAME\"/><Cell col=\"3\" displaytype=\"combo\" text=\"bind:DEPT_ID\" combodataset=\"ds_dept\" combocodecol=\"code\" combodatacol=\"text\"/><Cell col=\"4\" text=\"bind:HIRE_DATE\"/><Cell col=\"5\" text=\"bind:GENDER\"/><Cell col=\"6\" displaytype=\"checkbox\" text=\"bind:MARRIED\"/><Cell col=\"7\" text=\"bind:SALARY\" mask=\"###,###,### 원\"/><Cell col=\"8\" text=\"bind:EMPL_MEMO\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" text=\"expr:&quot;total:&quot; + comp.parent.ds_emp.getRowCount()\"/><Cell col=\"2\"/><Cell col=\"3\" text=\"expr:&quot;total Salary :&quot; + comp.parent.ds_emp.getSum(&quot;SALARY&quot;)\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "24", "72", "105", "19", null, null, this);
            obj.set_taborder("2");
            obj.set_text("Delete Row");
            this.addChild(obj.name, obj);

            obj = new Button("Button02", "absolute", "305", "557", "111", "43", null, null, this);
            obj.set_taborder("3");
            obj.set_text("Insert Row");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "30", "397", "74", "21", null, null, this);
            obj.set_taborder("4");
            obj.set_text("Employee ID");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "30", "424", "96", "25", null, null, this);
            obj.set_taborder("5");
            obj.set_text("Employee Name");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "30", "455", "60", "33", null, null, this);
            obj.set_taborder("6");
            obj.set_text("DEPT");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "30", "488", "49", "32", null, null, this);
            obj.set_taborder("7");
            obj.set_text("Gender");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "393", "504", "56", "33", null, null, this);
            obj.set_taborder("8");
            obj.set_text("Married");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "397", "463", "49", "33", null, null, this);
            obj.set_taborder("9");
            obj.set_text("Salary");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "397", "397", "38", "34", null, null, this);
            obj.set_taborder("10");
            obj.set_text("Memo");
            this.addChild(obj.name, obj);

            obj = new Edit("employeeID", "absolute", "137", "395", "210", "21", null, null, this);
            obj.set_taborder("11");
            this.addChild(obj.name, obj);

            obj = new Edit("empName", "absolute", "136", "429", "211", "20", null, null, this);
            obj.set_taborder("12");
            this.addChild(obj.name, obj);

            obj = new Edit("salary", "absolute", "445", "472", "207", "22", null, null, this);
            obj.set_taborder("16");
            this.addChild(obj.name, obj);

            obj = new TextArea("memo", "absolute", "445", "396", "277", "60", null, null, this);
            obj.set_taborder("17");
            this.addChild(obj.name, obj);

            obj = new Combo("genderCombo", "absolute", "137", "501", "211", "23", null, null, this);
            this.addChild(obj.name, obj);
            var genderCombo_innerdataset = new Dataset("genderCombo_innerdataset", this.genderCombo);
            genderCombo_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">W</Col><Col id=\"datacolumn\">Female</Col></Row><Row><Col id=\"codecolumn\">M</Col><Col id=\"datacolumn\">Male</Col></Row></Rows>");
            obj.set_innerdataset(genderCombo_innerdataset);
            obj.set_taborder("18");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");

            obj = new CheckBox("married", "absolute", "456", "511", "112", "26", null, null, this);
            obj.set_taborder("19");
            this.addChild(obj.name, obj);

            obj = new Combo("deptCombo", "absolute", "137", "468", "210", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("20");
            obj.set_innerdataset("@ds_dept");
            obj.set_codecolumn("code");
            obj.set_datacolumn("text");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 764, 640, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("Base::dataGridExample2");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","employeeID","value","ds_emp00","EMPL_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","empName","value","ds_emp00","FULL_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","memo","value","ds_emp00","EMPL_MEMO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","salary","value","ds_emp00","SALARY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","married","value","ds_emp00","MARRIED");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","genderCombo","value","ds_emp00","GENDER");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("dataGridExample2.xfdl", function(exports) {

        this.Button00_onclick = function(obj,e)
        {
        	this.go("Base::HelloScreen.xfdl");
        }

        this.Button01_onclick = function(obj,e)
        {
        	/*선택한 row를 delete 해주기 */
        	this.ds_emp.deleteRow(this.ds_emp.rowposition);
        }

        
        this.Button02_onclick = function(obj,e)
        {
        	/*form에 입력한 data를 row에 추가 하기 */
        	var employId = this.employeeID.value;
        	var employName = this.empName.value;
        	var dept = this.deptCombo.value;
        	var gender = this.genderCombo.value;
        	var memo = this.memo.value;
        	var salary = this.salary.value;
        	var married = this.married.value;
        	
        	
        	/*이렇게 data를 가공해서 넣어야 하는 경우
        	 setColumn으로 일일히 해준다. */
        	if(married == true)
        	{
        		married = '1';
        	}else{
        		married = '0';
        	}
        	
        	//생성 row index갑
        	var i = this.ds_emp.addRow();
        	
        	
        	//this.ds_emp.setColumn(i,"EMPL_ID",employId);
        	this.ds_emp.setColumn(i,"EMPL_ID", employId);
        	this.ds_emp.setColumn(i,"FULL_NAME", employName);
        	this.ds_emp.setColumn(i,"DEPT_ID",dept);
        	this.ds_emp.setColumn(i,"GENDER",gender);
        	this.ds_emp.setColumn(i,"MARRIED",married);
        	this.ds_emp.setColumn(i,"SALARY",salary);
        	this.ds_emp.setColumn(i,"EMPL_MEMO",memo);
        	
        	
        }

        this.dataGridExample2_onload = function(obj,e)
        {
        	/*combo box 초기값*/
        	this.genderCombo.set_index("Female");
        	this.deptCombo.set_displaynulltext(":: Department ::");
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.dataGridExample2_onload, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.Grid00.addEventHandler("oncellclick", this.Grid00_oncellclick, this);
            this.Button01.addEventHandler("onclick", this.Button01_onclick, this);
            this.Button02.addEventHandler("onclick", this.Button02_onclick, this);

        };

        this.loadIncludeScript("dataGridExample2.xfdl", true);

       
    };
}
)();
