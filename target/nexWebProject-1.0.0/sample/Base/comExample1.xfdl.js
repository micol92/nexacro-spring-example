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
                this.set_name("comExample1");
                this.set_titletext("Base::comExample1");
                this._setFormPosition(0,0,764,640);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"searchType\" type=\"STRING\" size=\"256\"/><Column id=\"keyword\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("backBtn", "absolute", "15", "18", "111", "30", null, null, this);
            obj.set_taborder("0");
            obj.set_text("←back");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "188", "31", "417", "29", null, null, this);
            obj.set_taborder("1");
            obj.set_text("DataBinding Example");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 16 Dotum");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "31", "128", "706", "287", null, null, this);
            obj.set_taborder("2");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"142\"/><Column size=\"195\"/><Column size=\"125\"/><Column size=\"164\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"ID\"/><Cell col=\"1\" text=\"NAME\"/><Cell col=\"2\" text=\"DESCRIPTION\"/><Cell col=\"3\" text=\"USE_YN\"/><Cell col=\"4\" text=\"REG_USER\"/></Band><Band id=\"body\"><Cell text=\"bind:ID\"/><Cell col=\"1\" text=\"bind:NAME\"/><Cell col=\"2\" text=\"bind:DESCRIPTION\"/><Cell col=\"3\" text=\"bind:USE_YN\"/><Cell col=\"4\" text=\"bind:REG_USER\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00", "absolute", "4.06%", "84", null, "18", "78.4%", null, this);
            this.addChild(obj.name, obj);
            var Combo00_innerdataset = new Dataset("Combo00_innerdataset", this.Combo00);
            Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">ID</Col><Col id=\"datacolumn\">id</Col></Row><Row><Col id=\"codecolumn\">NAME</Col><Col id=\"datacolumn\">name</Col></Row></Rows>");
            obj.set_innerdataset(Combo00_innerdataset);
            obj.set_taborder("3");
            obj.set_text("id");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("ID");

            obj = new Edit("Edit00", "absolute", "21.99%", "82", null, "20", "56.15%", null, this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "78.01%", "79", null, "30", "3.4%", null, this);
            obj.set_taborder("5");
            obj.set_text("조회");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 764, 640, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("Base::comExample1");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("comExample1.xfdl", function(exports) {

        //조회 BUTTON CLICK
        this.Button00_onclick = function(obj,e)
        {
        	this.fnSearch();
        }

        this.fnSearch = function()
        {
        	//조건 조회할 data를 dataset에 넣어서 input으로 보낼 예정
        	this.ds_search.setColumn(0,"searchType",this.Combo00.value);
        	this.ds_search.setColumn(0,"keyword", this.Edit00.text);
        	
        	var strSvcId  = "search";
        	var strSvcUrl = "svc::selectSampleList.do";
        	//parameter가 될 값
        	var inData 	  = "input1=ds_search";
        	//조회해서 넘어 오게 될 값 
        	var outData   = "ds_list=output1";
        	var strArg 	  = "";
        	
        	//1.callback 함수는 생략 
        	var isAsync   = true;
        	
        	//ajax 같은 nexacro 함수 
        	this.transaction(strSvcId, strSvcUrl,inData, outData, strArg, "", isAsync);
        	

        }

        //뒤로가기 button click 
        this.backBtn_onclick = function(obj,e)
        {
        	this.go("Base::HelloScreen.xfdl");
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.comExample1_onload, this);
            this.backBtn.addEventHandler("onclick", this.backBtn_onclick, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);

        };

        this.loadIncludeScript("comExample1.xfdl", true);

       
    };
}
)();
