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
                this.set_name("GridPaging");
                this.set_titletext("Base::gridPaging");
                this._setFormPosition(0,0,764,640);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("gridPaging", this);
            obj._setContents("<ColumnInfo><Column id=\"no\" type=\"STRING\" size=\"256\"/><Column id=\"booktitle\" type=\"STRING\" size=\"256\"/><Column id=\"publisher\" type=\"STRING\" size=\"256\"/><Column id=\"author\" type=\"STRING\" size=\"256\"/><Column id=\"price\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"booktitle\">test1</Col><Col id=\"publisher\">test1 publisher</Col><Col id=\"author\">1</Col><Col id=\"price\">1000</Col></Row><Row><Col id=\"booktitle\">test2</Col><Col id=\"publisher\">test2 publisher</Col><Col id=\"author\">1</Col><Col id=\"price\">1001</Col></Row><Row><Col id=\"booktitle\">test3</Col><Col id=\"publisher\">test3 publisher</Col><Col id=\"author\">2</Col><Col id=\"price\">1002</Col></Row><Row><Col id=\"booktitle\">test4</Col><Col id=\"publisher\">test4 publisher</Col><Col id=\"author\">2</Col><Col id=\"price\">1003</Col><Col id=\"no\">[Undefined]</Col></Row><Row><Col id=\"booktitle\">test5</Col><Col id=\"publisher\">test5 publisher</Col><Col id=\"author\">3</Col><Col id=\"price\">1004</Col></Row><Row><Col id=\"booktitle\">test6</Col><Col id=\"publisher\">test6 publisher</Col><Col id=\"author\">4</Col><Col id=\"price\">1005</Col></Row><Row><Col id=\"booktitle\">test7</Col><Col id=\"publisher\">test7 publisher</Col><Col id=\"author\">5</Col><Col id=\"price\">1006</Col></Row><Row><Col id=\"booktitle\">test8</Col><Col id=\"publisher\">test8 publisher</Col><Col id=\"author\">6</Col><Col id=\"price\">1007</Col></Row><Row><Col id=\"booktitle\">test9</Col><Col id=\"publisher\">test9 publisher</Col><Col id=\"author\">7</Col><Col id=\"price\">1008</Col></Row><Row><Col id=\"booktitle\">test10</Col><Col id=\"publisher\">test10 publisher</Col><Col id=\"author\">8</Col><Col id=\"price\">1009</Col></Row><Row><Col id=\"booktitle\">test11</Col><Col id=\"publisher\">test11 publisher</Col><Col id=\"author\">9</Col><Col id=\"price\">1010</Col></Row><Row><Col id=\"booktitle\">test12</Col><Col id=\"publisher\">test12 publisher</Col><Col id=\"author\">9</Col><Col id=\"price\">1011</Col></Row><Row><Col id=\"booktitle\">test13</Col><Col id=\"publisher\">test13 publisher</Col><Col id=\"author\">3</Col><Col id=\"price\">1012</Col></Row><Row><Col id=\"booktitle\">test14</Col><Col id=\"publisher\">test14 publisher</Col><Col id=\"author\">4</Col><Col id=\"price\">1013</Col></Row><Row><Col id=\"booktitle\">test15</Col><Col id=\"publisher\">test15 publisher</Col><Col id=\"author\">3</Col><Col id=\"price\">1014</Col></Row><Row><Col id=\"booktitle\">test16</Col><Col id=\"publisher\">test16 publisher</Col><Col id=\"author\">3</Col><Col id=\"price\">1015</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("Button00", "absolute", "608", "11", "144", "42", null, null, this);
            obj.set_taborder("0");
            obj.set_text("←Back");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "32", "152", "707", "331", null, null, this);
            obj.set_taborder("1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"156\"/><Column size=\"122\"/><Column size=\"186\"/><Column size=\"144\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"text\" style=\"background:lightblue;background2:lightblue;color:darkblue;color2:cornflowerblue;accessibility:button enable all '' '' '' ;\" text=\"no\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"text\" style=\"background:lightblue;color:darkblue;color2:darkblue;\" text=\"booktitle\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"text\" style=\"background:lightblue;color:darkblue;color2:darkblue;\" text=\"publisher\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"text\" style=\"background:lightblue;color:darkblue;color2:darkblue;\" text=\"author\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"text\" style=\"background:lightblue;color:darkblue;color2:darkblue;\" text=\"price\"/></Band><Band id=\"body\"><Cell celltype=\"head\" displaytype=\"normal\" edittype=\"none\" style=\"background:lightblue;background2:lightblue;color:darkblue;color2:darkblue;\" text=\"bind:no\" expr=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:booktitle\"/><Cell col=\"2\" text=\"bind:publisher\"/><Cell col=\"3\" text=\"bind:author\"/><Cell col=\"4\" text=\"bind:price\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "629", "120", "107", "28", null, null, this);
            obj.set_taborder("2");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Div("paging", "absolute", "34", "485", "705", "61", null, null, this);
            obj.set_taborder("3");
            obj.set_text("this is paging");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 764, 640, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("Base::gridPaging");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("GridPaging.xfdl", function(exports) {

        this.Button00_onclick = function(obj,e)
        {
        	this.go("Base::HelloScreen.xfdl");
        }

        
        //전체 페이지 순서
        this.fv_iStartPageNo = 0;
        //한번 server 호출시 가져올 row 갯수
        this.fv_iUnitSelRowNo= 100;
        //server 호출시 시작할 row no
        this.fv_iStartSelRowNo= 1;
        //화면에 보여줄 최대 page번호 갯수
        this.fv_iMaxPageNum =10;
        //서버에서 넘어온 row 갯수(100건이 안될 수 있다.)
        this.fv_iServerRowCount = 0;

        
        this.Button01_onclick = function(obj,e)
        {
        	this.Grid00.set_binddataset("gridPaging");
        	/*이곳에 transaction이 원래 있어야 함*/
        	
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.Button01.addEventHandler("onclick", this.Button01_onclick, this);

        };

        this.loadIncludeScript("GridPaging.xfdl", true);

       
    };
}
)();
