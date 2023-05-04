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
                this.set_name("treeGridExample");
                this.set_titletext("Base::treeGridExample");
                this._setFormPosition(0,0,764,640);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("treeDataSet", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"INT\" size=\"256\"/><Column id=\"parent\" type=\"INT\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/><Column id=\"lvl\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"id\">1</Col><Col id=\"parent\">0</Col><Col id=\"text\">부류/품목</Col><Col id=\"lvl\">0</Col></Row><Row><Col id=\"id\">2</Col><Col id=\"parent\">1</Col><Col id=\"text\">농산물(aTKAMIS) </Col><Col id=\"lvl\">1</Col></Row><Row><Col id=\"id\">1200</Col><Col id=\"parent\">2</Col><Col id=\"text\">채소</Col><Col id=\"lvl\">2</Col></Row><Row><Col id=\"id\">1300</Col><Col id=\"parent\">2</Col><Col id=\"text\">특용작물</Col><Col id=\"lvl\">2</Col></Row><Row><Col id=\"id\">234</Col><Col id=\"parent\">2</Col><Col id=\"text\">쌀</Col><Col id=\"lvl\">2</Col></Row><Row><Col id=\"id\">1400</Col><Col id=\"parent\">2</Col><Col id=\"text\">과일류</Col><Col id=\"lvl\">2</Col></Row><Row><Col id=\"id\">3</Col><Col id=\"parent\">1</Col><Col id=\"text\">수산물(aTKAMIS) </Col><Col id=\"lvl\">1</Col></Row><Row><Col id=\"id\">261101</Col><Col id=\"parent\">3</Col><Col id=\"text\">고등어_생선</Col><Col id=\"lvl\">2</Col></Row><Row><Col id=\"id\">261102</Col><Col id=\"parent\">3</Col><Col id=\"text\">고등어_냉동</Col><Col id=\"lvl\">2</Col></Row><Row><Col id=\"id\">261103</Col><Col id=\"parent\">3</Col><Col id=\"text\">고등어_염장</Col><Col id=\"lvl\">2</Col></Row><Row><Col id=\"id\">4</Col><Col id=\"parent\">1</Col><Col id=\"text\">축산물(축평원)</Col><Col id=\"lvl\">1</Col></Row><Row><Col id=\"id\">3100</Col><Col id=\"parent\">4</Col><Col id=\"text\">한우</Col><Col id=\"lvl\">2</Col></Row><Row><Col id=\"id\">3200</Col><Col id=\"parent\">4</Col><Col id=\"text\">돼지고기</Col><Col id=\"lvl\">2</Col></Row><Row><Col id=\"id\">3300</Col><Col id=\"parent\">4</Col><Col id=\"text\">육계</Col><Col id=\"lvl\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("gridData", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"INT\" size=\"256\"/><Column id=\"parent\" type=\"INT\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/><Column id=\"lvl\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("popGridData", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"INT\" size=\"256\"/><Column id=\"parent\" type=\"INT\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/><Column id=\"lvl\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("Button00", "absolute", "83.12%", "12", null, "31", "1.57%", null, this);
            obj.set_taborder("0");
            obj.set_text("←Back");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "3.53%", "94", null, "510", "60.21%", null, this);
            obj.set_taborder("1");
            obj.set_binddataset("treeDataSet");
            obj.set_treeinitstatus("collapse,null");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"293\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"text\"/></Band><Band id=\"body\"><Cell displaytype=\"tree\" edittype=\"tree\" text=\"bind:text\" treelevel=\"bind:lvl\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "42.54%", "97", null, "26", "44.11%", null, this);
            obj.set_taborder("2");
            obj.set_text("Tree node 추가");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01", "absolute", "42.67%", "131", null, "341", "2.09%", null, this);
            obj.set_taborder("3");
            obj.set_binddataset("gridData");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"65\"/><Column size=\"179\"/><Column size=\"126\"/><Column size=\"75\"/><Column size=\"40\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\"/><Cell col=\"1\" text=\"Item\"/><Cell col=\"2\" text=\"parent ITem\"/><Cell col=\"3\" text=\"item name\"/><Cell col=\"4\" text=\"level\"/><Cell col=\"5\" text=\"delete\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\"/><Cell col=\"1\" text=\"bind:id\"/><Cell col=\"2\" text=\"bind:parent\"/><Cell col=\"3\" text=\"bind:text\"/><Cell col=\"4\" text=\"bind:lvl\"/><Cell col=\"5\" displaytype=\"button\" edittype=\"button\" style=\"color:black;color2:black;controlcolor:black;\" text=\"삭제\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button02", "absolute", "3.66%", "62", null, "24", "88.74%", null, this);
            obj.set_taborder("4");
            obj.set_text("모두열기");
            this.addChild(obj.name, obj);

            obj = new Button("Button03", "absolute", "11.91%", "62", null, "24", "80.1%", null, this);
            obj.set_taborder("5");
            obj.set_text("모두닫기");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 764, 640, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("Base::treeGridExample");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("treeGridExample.xfdl", function(exports) {

        this.Button00_onclick = function(obj,e)
        {	
        	this.go("Base::HelloScreen.xfdl");
        }

        /*등록*/
        this.Button01_onclick = function(obj,e)
        {
        	
        	var objChilFrame = new ChildFrame();
        	//trace(objChilFrame);
        	/*modal 화면 setting 초기화*/
        	objChilFrame.init("chf_popup2","absolute",0,0,400,350,null,null,"Base::treePopupExample.xfdl");
        	//결과 화면에서 pop up 창이 drag로 이동 될 수 있는지 아닌지. 
        	objChilFrame.set_dragmovetype("all");
        	objChilFrame.set_openalign("center middle");
        	
        	var param ={param1 : 'W'};
        	objChilFrame.showModal(this.getOwnerFrame(), param, this, "");
        }

        
        this.fn_parent_data_setting = function (itemID,itemParent,itemText,itemLevel,flag)
        {
        	trace("parent flag :", flag);
        	if(flag == 'W')
        	{
        		//해당 index를 찾고 난 다음 row 에 추가를 시킬 수 있다. 
        		var nRow = this.treeDataSet.insertRow(this.treeDataSet.findRow("id",itemParent)+1);
        		this.treeDataSet.setColumn(nRow, "id", itemID);
        		this.treeDataSet.setColumn(nRow,"parent",itemParent);
        		this.treeDataSet.setColumn(nRow,"text",itemText);
        		this.treeDataSet.setColumn(nRow,"lvl",itemLevel);
        	}else{
        		
        		var nRow = this.treeDataSet.findRow("id",itemID);
        		this.treeDataSet.setColumn(nRow,"parent",itemParent);
        		this.treeDataSet.setColumn(nRow,"text", itemText);
        		this.treeDataSet.setColumn(nRow,"lvl", itemLevel);
        		//왼쪽 그리드에도 동일하게 적용하게 하기 위해서 
        		//this.Grid00_oncellclick();
        		this.copyCridFunction();
        	}
        	
        }
        this.Button02_onclick = function(obj,e)
        {
        	//Tree 모두 열기
        	this.Grid00.set_treeinitstatus("expand,all");
        	
        }

        
        this.Button03_onclick = function(obj,e)
        {
        	//Tree 모두 닫기
        	this.Grid00.set_treeinitstatus("collapse,all");
        }

        this.Grid00_oncellclick = function(obj,e)
        {
        	this.copyCridFunction();
        }

        
        //Grid00 그리기
        this.copyCridFunction = function(){
        	//tree를 클릭시 grid에 내용을 보여주게 한다. 
        	var searchID = this.treeDataSet.getColumn(this.treeDataSet.rowposition, "id");	
        	this.gridData.copyData(this.treeDataSet);  
        	this.gridData.filter("parent=='"+searchID+"'");
        }

        this.Grid01_oncellclick = function(obj,e)
        {	

        // 	if(this.Grid01.getCellText(e.row,5)=="삭제")
        // 	{
        // 		trace("삭제 버튼");
        // 		
        // 	}
        	
        	if(this.Grid01.getCellProperty("body",e.cell,"displaytype") == "button")
        	{
        		//row를 삭제 
        		var searchID =this.gridData.getColumn(e.row, "id"); 
        		
        		var sIndex = this.treeDataSet.findRow("id",searchID);
        		this.treeDataSet.deleteRow(sIndex);
        		this.copyCridFunction();
        		
        	}else{
        	
        		
        		//Grid 데이터 수정 
         		var objChilFrame = new ChildFrame();
         		//trace(objChilFrame);
         		/*modal 화면 setting 초기화*/
         		objChilFrame.init("chf_popup2","absolute",0,0,400,350,null,null,"Base::treePopupExample.xfdl");
         		//결과 화면에서 pop up 창이 drag로 이동 될 수 있는지 아닌지. 
         		objChilFrame.set_dragmovetype("all");
         		objChilFrame.set_openalign("center middle");
         		
         		
         		var addPopupRow = this.popGridData.addRow();
         		var rowIndex = this.gridData.rowposition;
         		
         		this.popGridData.copyRow(addPopupRow, this.gridData, rowIndex);
         		//trace("rowIndex :", rowIndex);
         		//trace(this.popGridData.saveXML());
         		var param  ={param1 : 'E', ds: this.popGridData, index: rowIndex};
         		objChilFrame.showModal(this.getOwnerFrame(), param, this, "");
        	}
        	
        }

        

        
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.Grid00.addEventHandler("oncellclick", this.Grid00_oncellclick, this);
            this.Button01.addEventHandler("onclick", this.Button01_onclick, this);
            this.Grid01.addEventHandler("oncellclick", this.Grid01_oncellclick, this);
            this.Button02.addEventHandler("onclick", this.Button02_onclick, this);
            this.Button03.addEventHandler("onclick", this.Button03_onclick, this);

        };

        this.loadIncludeScript("treeGridExample.xfdl", true);

       
    };
}
)();
