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
                this.set_name("dataGridExample");
                this.set_titletext("Base::dataGridExample");
                this._setFormPosition(0,0,1163,370);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_emp", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPL_ID\" type=\"STRING\" size=\"5\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"10\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"2\"/><Column id=\"HIRE_DATE\" type=\"DATE\" size=\"8\"/><Column id=\"GENDER\" type=\"STRING\" size=\"1\"/><Column id=\"MARRIED\" type=\"STRING\" size=\"1\"/><Column id=\"SALARY\" type=\"INT\" size=\"10\"/><Column id=\"EMPL_MEMO\" type=\"STRING\" size=\"500\"/></ColumnInfo><Rows><Row><Col id=\"EMPL_ID\">AA001</Col><Col id=\"FULL_NAME\">SHIN SOO CHOO </Col><Col id=\"DEPT_ID\">01</Col><Col id=\"HIRE_DATE\">20011104</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col><Col id=\"SALARY\">2000</Col><Col id=\"EMPL_MEMO\">baseball</Col></Row><Row><Col id=\"EMPL_ID\">BB001</Col><Col id=\"FULL_NAME\">YUNA KIM</Col><Col id=\"DEPT_ID\">02</Col><Col id=\"HIRE_DATE\">20050305</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">0</Col><Col id=\"SALARY\">3000</Col><Col id=\"EMPL_MEMO\">figure skating</Col></Row><Row><Col id=\"EMPL_ID\">CC001</Col><Col id=\"FULL_NAME\">SUMI JO</Col><Col id=\"DEPT_ID\">03</Col><Col id=\"HIRE_DATE\">20100506</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">0</Col><Col id=\"SALARY\">5000</Col><Col id=\"EMPL_MEMO\">singer</Col></Row><Row><Col id=\"EMPL_ID\">DD001</Col><Col id=\"FULL_NAME\">JS PARK</Col><Col id=\"DEPT_ID\">04</Col><Col id=\"HIRE_DATE\">20101123</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col><Col id=\"SALARY\">3500</Col><Col id=\"EMPL_MEMO\">soccer</Col></Row><Row><Col id=\"EMPL_ID\">EE001</Col><Col id=\"FULL_NAME\">JY PARK</Col><Col id=\"DEPT_ID\">05</Col><Col id=\"HIRE_DATE\">20200101</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col><Col id=\"SALARY\">6000</Col><Col id=\"EMPL_MEMO\">dancer </Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_dept", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">01</Col><Col id=\"text\">Sales</Col></Row><Row><Col id=\"code\">02</Col><Col id=\"text\">IT</Col></Row><Row><Col id=\"code\">03</Col><Col id=\"text\">Education</Col></Row><Row><Col id=\"code\">04</Col><Col id=\"text\">Marketing</Col></Row><Row><Col id=\"code\">05</Col><Col id=\"text\">HR</Col></Row><Row><Col id=\"code\">06</Col><Col id=\"text\">CTO</Col></Row><Row><Col id=\"code\">07</Col><Col id=\"text\">CMO</Col></Row><Row><Col id=\"code\">08</Col><Col id=\"text\">Business</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("Grid00", "absolute", "33", "24", "920", "327", null, null, this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_emp");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"59\"/><Column size=\"113\"/><Column size=\"86\"/><Column size=\"98\"/><Column size=\"114\"/><Column size=\"97\"/><Column size=\"65\"/><Column size=\"111\"/><Column size=\"170\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" style=\"font:8 Arial;\" text=\"rowNum\"/><Cell col=\"1\" colspan=\"2\" style=\"font:8 Arial;\" text=\"Employees\"/><Cell col=\"3\" rowspan=\"2\" style=\"font:8 Arial;\" text=\"Dept\"/><Cell col=\"4\" rowspan=\"2\" style=\"font:8 Arial;\" text=\"HireDate\"/><Cell col=\"5\" rowspan=\"2\" style=\"font:8 Arial;\" text=\"Gender\"/><Cell col=\"6\" rowspan=\"2\" style=\"font:8 Arial;\" text=\"Married\"/><Cell col=\"7\" rowspan=\"2\" style=\"font:8 Arial;\" text=\"Salary\"/><Cell col=\"8\" rowspan=\"2\" style=\"font:8 Arial;\" text=\"Memo\"/><Cell row=\"1\" col=\"1\" style=\"font:8 Arial;\" text=\"ID\"/><Cell row=\"1\" col=\"2\" style=\"font:8 Arial;\" text=\"Name\"/></Band><Band id=\"body\"><Cell celltype=\"head\" text=\"expr:currow + 1\"/><Cell col=\"1\" style=\"color:EXPR(GENDER == &quot;W&quot; ? &quot;blue&quot;:&quot;red&quot;);color2:EXPR(GENDER == &quot;W&quot; ? &quot;blue&quot; : &quot;red&quot;);\" text=\"bind:EMPL_ID\" mask=\"AA-###\"/><Cell col=\"2\" style=\"color:EXPR(GENDER == &quot;W&quot; ? &quot;blue&quot;:&quot;red&quot;);color2:EXPR(GENDER == &quot;W&quot; ? &quot;blue&quot; : &quot;red&quot;);\" text=\"bind:FULL_NAME\"/><Cell col=\"3\" displaytype=\"combo\" text=\"bind:DEPT_ID\" combodataset=\"ds_dept\" combocodecol=\"code\" combodatacol=\"text\"/><Cell col=\"4\" text=\"bind:HIRE_DATE\"/><Cell col=\"5\" text=\"bind:GENDER\"/><Cell col=\"6\" displaytype=\"checkbox\" text=\"bind:MARRIED\"/><Cell col=\"7\" text=\"bind:SALARY\" mask=\"###,###,### 원\"/><Cell col=\"8\" text=\"bind:EMPL_MEMO\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" text=\"expr:&quot;total:&quot; + comp.parent.ds_emp.getRowCount()\"/><Cell col=\"2\"/><Cell col=\"3\" text=\"expr:&quot;total Salary :&quot; + comp.parent.ds_emp.getSum(&quot;SALARY&quot;)\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1163, 370, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("Base::dataGridExample");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };

        this.loadIncludeScript("dataGridExample.xfdl", true);

       
    };
}
)();
