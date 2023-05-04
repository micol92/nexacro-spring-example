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
                this.set_name("fileDialog");
                this.set_titletext("Base::fileDialog");
                this._setFormPosition(0,0,764,640);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_file", this);
            obj._setContents("<ColumnInfo><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("Button00", "absolute", "633", "12", "123", "28", null, null, this);
            obj.set_taborder("0");
            obj.set_text("←Back");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "26", "24", "214", "45", null, null, this);
            obj.set_taborder("1");
            obj.set_text("FileDialog");
            obj.style.set_font("bold 11 Dotum");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload00", "absolute", "27", "101", "317", "35", null, null, this);
            obj.set_multiselect("true");
            obj.set_taborder("3");
            obj.set_tooltiptype("default");
            obj.getSetter("retry").set("0");
            obj.style.set_buttontext("selectFile");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("uploadFile", "absolute", "367", "101", "97", "21", null, null, this);
            obj.set_taborder("4");
            obj.set_text("uploadFile");
            this.addChild(obj.name, obj);

            obj = new Button("Button02", "absolute", "487", "101", "97", "21", null, null, this);
            obj.set_taborder("5");
            obj.set_text("downloadFile");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "19", "172", "712", "293", null, null, this);
            obj.set_taborder("6");
            obj.set_binddataset("ds_file");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"240\"/><Column size=\"291\"/><Column size=\"190\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"FILE_PATH\"/><Cell col=\"1\" text=\"FILE_NAME\"/><Cell col=\"2\" text=\"FILE_SIZE\"/></Band><Band id=\"body\"><Cell text=\"bind:FILE_PATH\"/><Cell col=\"1\" text=\"bind:FILE_NAME\"/><Cell col=\"2\" text=\"bind:FILE_SIZE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 764, 640, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("Base::fileDialog");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("fileDialog.xfdl", function(exports) {

        this.Button00_onclick = function(obj,e)
        {
        	this.go("Base::HelloScreen.xfdl");
        }

        

        
        //파일 다이얼로그를 통해 파일을 선택 했을때 발생하는 이벤트 이다. 
        this.FileUpload00_onitemchanged = function(obj,e)
        {
        	
        	var sFileName; 
        	var sFilePath;
        	
        	//multiselect :여러개의 아이템을 선택 할 수 있도록 허용할지 여부를 설정하는 속성
        	if(obj.multiselect){
        		var sFileDate = e.newvalue;
        		var sFilePath = sFileDate.split(",");
        		this.ds_file.clearData();
        	}
        	
        	for(var i=0;i<sFilePath.length;i++)
        	{
        		sFilePath = sFilePath[i];
        		var dirExpt = sFilePath.lastIndexOf("\\")+1;
        		sFileName = sFilePath.substr(dirExpt);
        		
        		//daset에 저장 
        		var index = this.ds_file.addRow();
        		this.ds_file.setColumn(index, "FILE_PATH",sFilePath);
        		this.ds_file.setColumn(index, "FILE_NAME",sFileName);
        		
        	}
        	
        }

        this.uploadFile_onclick = function(obj,e)
        {
        	var svcparam  = "domain="	+ "NexawebInc"
        				  + "&model="	+ "FileUpload"
        				  + "&format="  + "xml"
        				  + "&version=" + "xplatform";
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.FileUpload00.addEventHandler("onlbuttondown", this.FileUpload00_onlbuttondown, this);
            this.FileUpload00.addEventHandler("onsuccess", this.FileUpload00_onsuccess, this);
            this.FileUpload00.addEventHandler("onitemchanged", this.FileUpload00_onitemchanged, this);
            this.uploadFile.addEventHandler("onclick", this.uploadFile_onclick, this);

        };

        this.loadIncludeScript("fileDialog.xfdl", true);

       
    };
}
)();
