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
                this.set_name("PagingSample");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("Button00", "absolute", "500", "10", "56", "26", null, null, this);
            obj.set_taborder("0");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "6", "44", "554", "506", null, null, this);
            obj.set_taborder("1");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/><Cell col=\"4\" text=\"Column4\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_paging", "absolute", "6", "552", "554", "22", null, null, this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_url("Example::Paging.xfdl");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("PagingSample");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "Example::Paging.xfdl");
        };
        
        // User Script
        this.registerScript("PagingSample.xfdl", function(exports) {

        this.LIST_COUNT = 20; // 한 페이지에 보여줄 
        this.PAGE_COUNT = 10; // 페이지 번호 표시 개수

        this.PagingSample_onload = function(obj,e)
        {
        	// 페이징을 사용하기 위해 초기화 함수를 호출한다.
        	this.div_paging.initPaging(this.LIST_COUNT, this.PAGE_COUNT, this.onChangePage, obj);	
        }

        this.Button00_onclick = function(obj,e)
        {
        	// 버튼 클릭 시 현재 페이지 번호로 데이터를 조회한다.
        	var page = this.div_paging.getCurrentPage();
        	
        	this.searchData(page);
        }

        this.searchData = function(page)
        {
        	var url = "service::PagingSample.jsp";
        	var arg = "LIST_COUNT=" + this.LIST_COUNT + " PAGE_NO=" + page;
        	
        	this.transaction("testPaging", url, "", "Dataset00=output", arg, "serviceCallback");
        }

        this.serviceCallback = function(id,cd,msg)
        {
        	// 서버로부터 받은 총 데이터 건 수로 페이징 구성
        	var totalCount = this.Dataset00.getConstColumn("TOTAL_COUNT");
        	this.div_paging.setPage(totalCount);
        }

        // 페이지가 변경되었을 때 호출되는 함수로 변경된 page 번호가 넘어온다.
        this.onChangePage = function(page)
        {
        	// 여기서 this 는 initPaging 에서 4번째 인자로 지정한 scope 이다. (본 샘플에서는 Form)
        	this.searchData(page);
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.PagingSample_onload, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);

        };

        this.loadIncludeScript("PagingSample.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
