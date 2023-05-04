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
                this.set_name("treePopupExample");
                this.set_titletext("Base::treePopupExample");
                this._setFormPosition(0,0,384,407);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("paramData", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"INT\" size=\"256\"/><Column id=\"parent\" type=\"INT\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/><Column id=\"lvl\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static00", "absolute", "29", "37", "90", "23", null, null, this);
            obj.set_taborder("1");
            obj.set_text("ID text");
            this.addChild(obj.name, obj);

            obj = new Edit("itemID", "absolute", "127", "37", "208", "26", null, null, this);
            obj.set_taborder("2");
            obj.set_displaynulltext("ID ");
            obj.style.set_cursor("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "28", "101", "92", "23", null, null, this);
            obj.set_taborder("3");
            obj.set_text("parent ID");
            this.addChild(obj.name, obj);

            obj = new Edit("itemParent", "absolute", "127", "101", "208", "23", null, null, this);
            obj.set_taborder("4");
            obj.set_displaynulltext("parent ID");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "29", "173", "93", "28", null, null, this);
            obj.set_taborder("5");
            obj.set_text("text");
            this.addChild(obj.name, obj);

            obj = new Edit("itemText", "absolute", "128", "173", "208", "23", null, null, this);
            obj.set_taborder("6");
            obj.set_displaynulltext("text");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "28", "237", "98", "31", null, null, this);
            obj.set_taborder("7");
            obj.set_text("level");
            this.addChild(obj.name, obj);

            obj = new Edit("itemLevel", "absolute", "127", "243", "208", "21", null, null, this);
            obj.set_taborder("8");
            obj.set_displaynulltext("level");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "24", "321", "131", "39", null, null, this);
            obj.set_taborder("0");
            obj.set_text("등록");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "210", "321", "131", "39", null, null, this);
            obj.set_taborder("9");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Static("itemIDValidate", "absolute", "128", "70", "208", "20", null, null, this);
            obj.set_taborder("10");
            obj.set_text("Static04");
            obj.style.set_color("crimson");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("itemParentValidate", "absolute", "128", "123", "210", "29", null, null, this);
            obj.set_taborder("11");
            obj.set_text("Static04");
            obj.style.set_color("crimson");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("itemTextValidate", "absolute", "127", "192", "212", "29", null, null, this);
            obj.set_taborder("12");
            obj.set_text("Static05");
            obj.style.set_color("crimson");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("itemLevelValidate", "absolute", "127", "264", "211", "32", null, null, this);
            obj.set_taborder("13");
            obj.set_text("Static06");
            obj.style.set_color("crimson");
            obj.set_visible("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 384, 407, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("Base::treePopupExample");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("treePopupExample.xfdl", function(exports) {

        this.Button00_onclick = function(obj,e)
        {
        	
        	// edit box validation check 
        	var itemID = this.itemID.value;
        	if(itemID == null)
        	{
        		this.itemIDValidate.set_text("값을 입력해주세요");
        		this.itemIDValidate.set_visible("true");
        	}else{
        		this.itemIDValidate.set_visible("false");
        		
        		trace("test : ",nexacro.isNumeric(itemID));
        		trace("itemID :", this.itemID.value);
        		
        		if(nexacro.isNumeric(itemID) == false)
        		{
        			//문자일 경우 
        			this.itemIDValidate.set_text("숫자로 입력해주세요");
        			this.itemIDValidate.set_visible("true");
        		}else
        		{
        			//문자가 아닐 경우
        			this.itemIDValidate.set_visible("false");
        			this.opener.fn_parent_data_setting(this.itemID.value, this.itemParent.value, this.itemText.value, this.itemLevel.value, flag);
        			
        			
        			//팝업 창을 꺼라 
        			this.close();
        		}
        	}
        	
        	
        	
        }

        this.Button01_onclick = function(obj,e)
        {
        	this.close();
        }

        var flag;
        this.treePopupExample_onload = function(obj,e)
        {
        	
        	flag = this.getOwnerFrame().param1;
        	var index = this.getOwnerFrame().index;
        	
        	var paramDataset = new Dataset();
        	paramDataset = this.getOwnerFrame().ds;
        	
        	//trace(paramDataset.getColumn(index,"id"));
        	//trace(paramDataset.saveXML());
        	
        	//뒤에 문자형을 붙이면, 문자형으로 들어간다. 
        	//String으로  casting을 해준다. 위/아래 같은 내용 
        	//this.itemID.set_value( paramDataset.getColumn(paramDataset.rowposition,"id").toString());
        	
        	if(flag =='E')
        	{
        		this.Button00.set_text("수정");
        		//itemID는 key이기 때문에 수정 할 수 없다. 
        		this.itemID.set_readonly(true);
        		this.itemID.set_value(paramDataset.getColumn(paramDataset.rowposition,"id")+"");
        		this.itemParent.set_value(paramDataset.getColumn(paramDataset.rowposition,"parent"));
        		this.itemText.set_value(paramDataset.getColumn(paramDataset.rowposition,"text"));
        		this.itemLevel.set_value(paramDataset.getColumn(paramDataset.rowposition,"lvl"));
        	
        	}
        	
        	
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.treePopupExample_onload, this);
            this.Static00.addEventHandler("onclick", this.Static00_onclick, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.Button01.addEventHandler("onclick", this.Button01_onclick, this);

        };

        this.loadIncludeScript("treePopupExample.xfdl", true);

       
    };
}
)();
