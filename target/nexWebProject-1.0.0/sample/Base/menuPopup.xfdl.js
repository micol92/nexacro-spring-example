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
                this.set_name("menuPopup");
                this.set_titletext("Base::menuPopup");
                this._setFormPosition(0,0,764,640);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_menu", this);
            obj._setContents("<ColumnInfo><Column id=\"m_id\" type=\"STRING\" size=\"256\"/><Column id=\"m_nm\" type=\"STRING\" size=\"256\"/><Column id=\"m_lv\" type=\"STRING\" size=\"256\"/><Column id=\"m_chk\" type=\"STRING\" size=\"256\"/><Column id=\"m_enable\" type=\"STRING\" size=\"256\"/><Column id=\"m_hotkey\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"m_id\">1</Col><Col id=\"m_nm\">Main1</Col><Col id=\"m_lv\">0</Col><Col id=\"m_chk\">0</Col><Col id=\"m_enable\">1</Col></Row><Row><Col id=\"m_id\">2</Col><Col id=\"m_nm\">Sub1</Col><Col id=\"m_lv\">1</Col><Col id=\"m_chk\">0</Col><Col id=\"m_enable\">1</Col></Row><Row><Col id=\"m_id\">3</Col><Col id=\"m_nm\">Leaf1</Col><Col id=\"m_lv\">2</Col><Col id=\"m_chk\">1</Col><Col id=\"m_enable\">1</Col><Col id=\"m_hotkey\">F1</Col></Row><Row><Col id=\"m_id\">4</Col><Col id=\"m_nm\">Leaf2</Col><Col id=\"m_lv\">2</Col><Col id=\"m_chk\">0</Col><Col id=\"m_enable\">0</Col><Col id=\"m_hotkey\">F2</Col></Row><Row><Col id=\"m_id\">5</Col><Col id=\"m_nm\">Main2</Col><Col id=\"m_lv\">0</Col><Col id=\"m_chk\">0</Col><Col id=\"m_enable\">1</Col></Row><Row><Col id=\"m_id\">6</Col><Col id=\"m_nm\">Sub2</Col><Col id=\"m_lv\">1</Col><Col id=\"m_chk\">0</Col><Col id=\"m_enable\">1</Col></Row><Row><Col id=\"m_id\">7</Col><Col id=\"m_nm\">Leaf3</Col><Col id=\"m_lv\">2</Col><Col id=\"m_chk\">1</Col><Col id=\"m_enable\">1</Col><Col id=\"m_hotkey\">F3</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("Button00", "absolute", "576", "22", "166", "34", null, null, this);
            obj.set_taborder("0");
            obj.set_text("←Back");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "22", "49", "204", "42", null, null, this);
            obj.set_taborder("1");
            obj.set_text("chromDebuggingTest");
            this.addChild(obj.name, obj);

            obj = new Button("Button02", "absolute", "22", "107", "204", "42", null, null, this);
            obj.set_taborder("2");
            obj.set_text("error 위치 확인");
            this.addChild(obj.name, obj);

            obj = new Button("Button03", "absolute", "22", "166", "204", "42", null, null, this);
            obj.set_taborder("3");
            obj.set_text("라인 디버그");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 764, 640, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("Base::menuPopup");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("menuPopup.xfdl", function(exports) {

        this.Button00_onclick = function(obj,e)
        {
        	this.go("Base::HelloScreen.xfdl");
        }

        this.Button01_onclick = function(obj,e)
        {
        	var sTest2 = "Test trace!";
        	trace("this is not application trace");
        	application.trace(sTest2);
        }

        //오류가 있는 위치확인을 위해서 console탭확인
        this.Button02_onclick = function(obj,e)
        {
        	trace(Button02.text);
        }

        this.Button03_onclick = function(obj,e)
        {
        	var iTest =0;
        	
        	iTest = iTest +1;
        	iTest = iTest +1;
        	iTest = iTest +1;
        	
        	var iRtn = this.fn_debug(iTest);
        	iTest = iRtn +1;
        	iTest = iTest+1;
        	
        	trace(iTest);
        }

        this.fn_debug = function(i)
        {
        	i = i*10;
        	return i;
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.Button01.addEventHandler("onclick", this.Button01_onclick, this);
            this.Button02.addEventHandler("onclick", this.Button02_onclick, this);
            this.Button03.addEventHandler("onclick", this.Button03_onclick, this);

        };

        this.loadIncludeScript("menuPopup.xfdl", true);

       
    };
}
)();
