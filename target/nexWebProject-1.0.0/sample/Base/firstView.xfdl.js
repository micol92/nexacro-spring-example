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
                this.set_name("base_employee_0");
                this.set_titletext("Base::base_employees_0");
                this._setFormPosition(0,0,760,645);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"searchType\" type=\"STRING\" size=\"256\"/><Column id=\"keyword\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("st_title", "absolute", "2.11%", "8", null, "37", "73.16%", null, this);
            obj.set_taborder("0");
            obj.set_text("Employee Management2");
            obj.style.set_background("white");
            obj.style.set_border("1 solid #646464ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 10 Tahoma");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "2.11%", "134", null, "346", "11.05%", null, this);
            obj.set_taborder("3");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_list");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" disptype=\"normal\" text=\"ID\"/><Cell col=\"1\" disptype=\"normal\" text=\"NAME\"/><Cell col=\"2\" disptype=\"normal\" text=\"DESCRIPTION\"/><Cell col=\"3\" disptype=\"normal\" text=\"USE_YN\"/><Cell col=\"4\" disptype=\"normal\" text=\"REG_USER\"/></Band><Band id=\"body\"><Cell col=\"0\" disptype=\"normal\" text=\"bind:ID\"/><Cell col=\"1\" disptype=\"normal\" text=\"bind:NAME\"/><Cell col=\"2\" disptype=\"normal\" text=\"bind:DESCRIPTION\"/><Cell col=\"3\" disptype=\"normal\" text=\"bind:USE_YN\"/><Cell col=\"4\" disptype=\"normal\" text=\"bind:REG_USER\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00", "absolute", "2.24%", "94", null, "25", "85.92%", null, this);
            this.addChild(obj.name, obj);
            var Combo00_innerdataset = new Dataset("Combo00_innerdataset", this.Combo00);
            Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">ID</Col><Col id=\"datacolumn\">id</Col></Row><Row><Col id=\"codecolumn\">NAME </Col><Col id=\"datacolumn\">name</Col></Row></Rows>");
            obj.set_innerdataset(Combo00_innerdataset);
            obj.set_taborder("4");
            obj.set_text("Combo00");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("ID");

            obj = new Edit("Edit00", "absolute", "14.74%", "94", null, "25", "56.18%", null, this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "77.37%", "94", null, "25", "11.05%", null, this);
            obj.set_taborder("6");
            obj.set_text("조회");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 760, 645, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("Base::base_employees_0");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("firstView.xfdl", function(exports) {

        /*조회 버튼 클릭*/
        this.Button00_onclick = function(obj,e)
        {
        	alert("test-->"+application.plpl);
        	//this.fnSearch();
        }

        
        //데이터 조회 트랜잭션
        this.fnSearch = function ()
        {
        	//조회 조건 셋팅 
        	this.ds_search.setColumn(0,"searchType",this.Combo00.value);
        	this.ds_search.setColumn(0,"keyword",this.Edit00.text);
        	
        	
        	var strSvcId = "search";
        	//controller 연결 
        	var strSvcUrl ="http://localhost/sampleBuild/sample/selectSampleList.do";
        	var inData = "input1 = ds_search";
        	var outData = "ds_list = output1";
        	var strArg = "";
        	var callBackFnc = "fnCallback";
        	var isAsync = true;
        	
        	
        	/*
        	트랜잭션 :
        		1. transaction을 구분 id 값
        		2. transaction을 요청 할 주소
        		3. 입력 값으로 보낼 dataset id
        		4. 처리 결과 값으로 받을 dataset id 
        		5. 입력값으로 보낼 argument
        		6. transaction 결과를 받을  function 
        		7.비동기 통신 여부 (생략가능)
        	*/
        	this.transaction(
        		strSvcId, 
        		inData, 
        		outData, 
        		strArg, 
        		callBackFnc, 
        		isAsync
        	);
        	
        }

        //처리 콜백 함수 
        this.fnCallback = function(svcID,errorCode,errorMsg)
        {
        	//에러시 화면 처리 내역 
        	if(errorCode != 0)
        	{
        		this.alert(errorCode + "\n"+errorMsg);
        		return;
        	}
        	
        	switch(svcID)
        	{
        		case "search":
        			if(this.ds_list.rowcount <1){
        				this.alert("조회된 결과가 없습니다.");
        			}
        		break;
        	}
        }

        
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Edit00.addEventHandler("oneditclick", this.Edit00_oneditclick, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);

        };

        this.loadIncludeScript("firstView.xfdl", true);

       
    };
}
)();
