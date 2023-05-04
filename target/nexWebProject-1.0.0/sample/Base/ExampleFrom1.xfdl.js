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
                this.set_name("ExampleForm1");
                this.set_titletext("Base::ExampleForm1");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00", "absolute", "184", "17", "608", "62", null, null, this);
            obj.set_taborder("0");
            obj.set_text("Example 1 Page");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 20 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("PreButton", "absolute", "30", "26", "132", "36", null, null, this);
            obj.set_taborder("1");
            obj.set_text("←PreButton");
            this.addChild(obj.name, obj);

            obj = new Button("nextButton", "absolute", "812", "26", "168", "36", null, null, this);
            obj.set_taborder("2");
            obj.set_text("nextButton→");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "13", "131", "931", "341", null, null, this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.style.set_align("left middle");
            obj.set_url("Base::dataGridExample.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "16", "104", "300", "19", null, null, this);
            obj.set_taborder("4");
            obj.set_text("div and expression example");
            obj.style.set_font("bold 10 Dotum");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("Base::ExampleForm1");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "Base::dataGridExample.xfdl");
        };
        
        // User Script
        this.registerScript("ExampleFrom1.xfdl", function(exports) {

        this.PreButton_onclick = function(obj,e)
        {
        	this.go("Base::HelloScreen.xfdl");
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.PreButton.addEventHandler("onclick", this.PreButton_onclick, this);

        };

        this.loadIncludeScript("ExampleFrom1.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
