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
                this.set_name("etcExample1");
                this.set_titletext("Base::etcExample1");
                this._setFormPosition(0,0,764,873);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_in", this);
            obj._setContents("<ColumnInfo><Column id=\"index\" type=\"INT\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"index\">0</Col><Col id=\"value\">M</Col><Col id=\"text\">Men</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("bigCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">100</Col><Col id=\"value\">농산품</Col></Row><Row><Col id=\"code\">200</Col><Col id=\"value\">수산물</Col></Row><Row><Col id=\"code\">300</Col><Col id=\"value\">축산물</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("middleCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">101</Col><Col id=\"value\">콩</Col></Row><Row><Col id=\"code\">102</Col><Col id=\"value\">상추</Col></Row><Row><Col id=\"code\">103</Col><Col id=\"value\">배추</Col></Row><Row><Col id=\"code\">201</Col><Col id=\"value\">고등어</Col></Row><Row><Col id=\"code\">202</Col><Col id=\"value\">참치</Col></Row><Row><Col id=\"code\">203</Col><Col id=\"value\">연어</Col></Row><Row><Col id=\"code\">301</Col><Col id=\"value\">소고기</Col></Row><Row><Col id=\"code\">302</Col><Col id=\"value\">돼지고기</Col></Row><Row><Col id=\"code\">303</Col><Col id=\"value\">닭고기</Col></Row><Row><Col id=\"code\">304</Col><Col id=\"value\">오리고기</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("smallCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1000</Col><Col id=\"value\">콩_국산</Col></Row><Row><Col id=\"code\">1001</Col><Col id=\"value\">쌀_수입</Col></Row><Row><Col id=\"code\">1002</Col><Col id=\"value\">보리_국산</Col></Row><Row><Col id=\"code\">2000</Col><Col id=\"value\">고등어_냉동</Col></Row><Row><Col id=\"code\">2001</Col><Col id=\"value\">참치_해동</Col></Row><Row><Col id=\"code\">2002</Col><Col id=\"value\">연어_국산</Col></Row><Row><Col id=\"code\">3000</Col><Col id=\"value\">소고기_국산</Col></Row><Row><Col id=\"code\">3001</Col><Col id=\"value\">돼지고기_수입</Col></Row><Row><Col id=\"code\">3002</Col><Col id=\"value\">닭고기_해동</Col></Row><Row><Col id=\"code\">3003</Col><Col id=\"value\">오리고기_국산</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("default", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("searchCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">100</Col><Col id=\"value\">test1</Col></Row><Row><Col id=\"code\">200</Col><Col id=\"value\">test2</Col></Row><Row><Col id=\"code\">300</Col><Col id=\"value\">search1</Col></Row><Row><Col id=\"code\">400</Col><Col id=\"value\">search2</Col></Row><Row><Col id=\"code\">500</Col><Col id=\"value\">output1</Col></Row><Row><Col id=\"code\">600</Col><Col id=\"value\">output2</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("datasetTest", this);
            obj._setContents("<ColumnInfo><Column id=\"status\" type=\"STRING\" size=\"256\"/><Column id=\"col1\" type=\"STRING\" size=\"256\"/><Column id=\"col2\" type=\"STRING\" size=\"256\"/><Column id=\"col3\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"status\">1</Col><Col id=\"col1\">1</Col><Col id=\"col2\">2</Col><Col id=\"col3\">3</Col></Row><Row><Col id=\"status\">1</Col><Col id=\"col1\">4</Col><Col id=\"col2\">5</Col><Col id=\"col3\">6</Col></Row><Row><Col id=\"status\">1</Col><Col id=\"col1\">7</Col><Col id=\"col2\">8</Col><Col id=\"col3\">9</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("datasetTest2", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"col1\" type=\"STRING\" size=\"256\"/><Column id=\"col2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"col1\">A</Col><Col id=\"col2\">1</Col></Row><Row><Col id=\"col1\">A</Col><Col id=\"col2\">2</Col></Row><Row><Col id=\"col1\">A</Col><Col id=\"col2\">3</Col></Row><Row><Col id=\"col1\">B</Col><Col id=\"col2\">4</Col></Row><Row><Col id=\"col1\">B</Col><Col id=\"col2\">5</Col></Row><Row><Col id=\"col1\">C</Col><Col id=\"col2\">6</Col></Row><Row><Col id=\"col1\">C</Col><Col id=\"col2\">7</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("cDataset", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("Button00", "absolute", "80.63%", "17", null, "30", "2.49%", null, this);
            obj.set_taborder("0");
            obj.set_text("←Back");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "1.57%", "15", null, "23", "82.85%", null, this);
            obj.set_taborder("1");
            obj.set_text("Combo Example");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00", "absolute", "1.44%", "52", null, "25", "84.55%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_text("Combo00");
            obj.set_innerdataset("@ds_in");
            obj.set_codecolumn("value");
            obj.set_datacolumn("text");
            obj.set_displaynulltext("::select::");

            obj = new Combo("BigValue", "absolute", "1.44%", "95", null, "25", "84.55%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_text("Combo01");
            obj.set_displaynulltext("::대분류::");
            obj.set_innerdataset("@bigCombo");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");

            obj = new Combo("middleValue", "absolute", "17.15%", "95", null, "25", "68.85%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_text("Combo02");
            obj.set_displaynulltext("::중분류::");
            obj.set_innerdataset("@middleCombo");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");

            obj = new Combo("smallValue", "absolute", "33.12%", "95", null, "25", "52.88%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("5");
            obj.set_text("Combo01");
            obj.set_displaynulltext("::소분류::");
            obj.set_innerdataset("@smallCombo");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");

            obj = new Combo("Combo01", "absolute", "1.05%", "133", null, "22", "81.54%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("6");
            obj.set_type("search");
            obj.set_innerdataset("@searchCombo");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");

            obj = new Static("Static01", "absolute", "1.18%", "165", null, "27", "73.43%", null, this);
            obj.set_taborder("7");
            obj.set_text("Dataset");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "1.57%", "192", null, "107", "52.36%", null, this);
            obj.set_taborder("8");
            obj.set_binddataset("datasetTest");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" disptype=\"normal\" text=\"status\"/><Cell col=\"1\" disptype=\"normal\" text=\"col1\"/><Cell col=\"2\" disptype=\"normal\" text=\"col2\"/><Cell col=\"3\" disptype=\"normal\" text=\"col3\"/></Band><Band id=\"body\"><Cell col=\"0\" disptype=\"normal\" text=\"bind:status\"/><Cell col=\"1\" disptype=\"normal\" text=\"bind:col1\"/><Cell col=\"2\" disptype=\"normal\" text=\"bind:col2\"/><Cell col=\"3\" disptype=\"normal\" text=\"bind:col3\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "1.83%", "304", null, "23", "82.46%", null, this);
            obj.set_taborder("9");
            obj.set_text("Ascending");
            this.addChild(obj.name, obj);

            obj = new Button("Button02", "absolute", "18.85%", "304", null, "23", "65.45%", null, this);
            obj.set_taborder("10");
            obj.set_text("Descending");
            this.addChild(obj.name, obj);

            obj = new Button("Button03", "absolute", "35.21%", "304", null, "23", "49.21%", null, this);
            obj.set_taborder("11");
            obj.set_text("Filter");
            this.addChild(obj.name, obj);

            obj = new Button("Button04", "absolute", "1.83%", "337", null, "23", "82.2%", null, this);
            obj.set_taborder("12");
            obj.set_text("filter 해제 ");
            this.addChild(obj.name, obj);

            obj = new Button("Button05", "absolute", "18.85%", "337", null, "23", "65.45%", null, this);
            obj.set_taborder("13");
            obj.set_text("getColumn(0,col1)");
            this.addChild(obj.name, obj);

            obj = new Button("Button06", "absolute", "24.87%", "484", null, "23", "52.88%", null, this);
            obj.set_taborder("14");
            obj.set_text("filter를 이용한 distinct 처리");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01", "absolute", "1.83%", "481", null, "198", "76.05%", null, this);
            obj.set_taborder("15");
            obj.set_binddataset("datasetTest2");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"col1\"/><Cell col=\"1\" text=\"col2\"/></Band><Band id=\"body\"><Cell text=\"bind:col1\"/><Cell col=\"1\" text=\"bind:col2\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button07", "absolute", "1.7%", "368", null, "20", "82.07%", null, this);
            obj.set_taborder("16");
            obj.set_text("getSum()");
            this.addChild(obj.name, obj);

            obj = new Button("Button08", "absolute", "18.85%", "368", null, "20", "65.31%", null, this);
            obj.set_taborder("17");
            obj.set_text("getCaseSum");
            this.addChild(obj.name, obj);

            obj = new Button("Button09", "absolute", "24.74%", "515", null, "24", "64.53%", null, this);
            obj.set_taborder("18");
            obj.set_text("rowposition");
            this.addChild(obj.name, obj);

            obj = new Button("Button10", "absolute", "36.52%", "515", null, "24", "52.88%", null, this);
            obj.set_taborder("19");
            obj.set_text("getRowCount");
            this.addChild(obj.name, obj);

            obj = new Button("Button11", "absolute", "24.87%", "547", null, "24", "64.53%", null, this);
            obj.set_taborder("20");
            obj.set_text("getColumn");
            this.addChild(obj.name, obj);

            obj = new Button("Button12", "absolute", "36.52%", "547", null, "24", "52.88%", null, this);
            obj.set_taborder("21");
            obj.set_text("setColumn");
            this.addChild(obj.name, obj);

            obj = new Button("Button13", "absolute", "35.6%", "337", null, "25", "49.35%", null, this);
            obj.set_taborder("22");
            obj.set_text("findRowExpr");
            this.addChild(obj.name, obj);

            obj = new Button("Button14", "absolute", "35.73%", "368", null, "20", "49.35%", null, this);
            obj.set_taborder("23");
            obj.set_text("findRow");
            this.addChild(obj.name, obj);

            obj = new Button("Button15", "absolute", "24.74%", "575", null, "24", "64.53%", null, this);
            obj.set_taborder("24");
            obj.set_text("appendDataset");
            this.addChild(obj.name, obj);

            obj = new Button("Button16", "absolute", "36.39%", "575", null, "24", "53.01%", null, this);
            obj.set_taborder("25");
            obj.set_text("clearData");
            this.addChild(obj.name, obj);

            obj = new Button("Button17", "absolute", "13.09%", "683", null, "27", "76.18%", null, this);
            obj.set_taborder("26");
            obj.set_text("deleteRow");
            this.addChild(obj.name, obj);

            obj = new Button("Button18", "absolute", "1.44%", "714", null, "23", "87.96%", null, this);
            obj.set_taborder("27");
            obj.set_text("applyChange");
            this.addChild(obj.name, obj);

            obj = new Button("Button19", "absolute", "25%", "607", null, "27", "64.66%", null, this);
            obj.set_taborder("28");
            obj.set_text("deleteAll");
            this.addChild(obj.name, obj);

            obj = new Button("Button20", "absolute", "36.26%", "606", null, "27", "53.01%", null, this);
            obj.set_taborder("29");
            obj.set_text("copyData");
            this.addChild(obj.name, obj);

            obj = new Button("Button21", "absolute", "25.13%", "641", null, "27", "64.53%", null, this);
            obj.set_taborder("30");
            obj.set_text("mergeData");
            this.addChild(obj.name, obj);

            obj = new Button("Button22", "absolute", "1.57%", "683", null, "27", "87.7%", null, this);
            obj.set_taborder("31");
            obj.set_text("addRow");
            this.addChild(obj.name, obj);

            obj = new Button("Button23", "absolute", "13.09%", "714", null, "27", "76.18%", null, this);
            obj.set_taborder("32");
            obj.set_text("getDeletedRowCount");
            this.addChild(obj.name, obj);

            obj = new Button("Button24", "absolute", "1.44%", "744", null, "27", "87.83%", null, this);
            obj.set_taborder("33");
            obj.set_text("getRowType");
            this.addChild(obj.name, obj);

            obj = new Button("Button25", "absolute", "12.96%", "745", null, "27", "76.18%", null, this);
            obj.set_taborder("34");
            obj.set_text("getOrgColumn");
            this.addChild(obj.name, obj);

            obj = new Button("Button26", "absolute", "36.26%", "641", null, "28", "52.62%", null, this);
            obj.set_taborder("35");
            obj.set_text("reset");
            this.addChild(obj.name, obj);

            obj = new Edit("resultWin", "absolute", "24.87%", "677", null, "97", "52.88%", null, this);
            obj.set_taborder("36");
            this.addChild(obj.name, obj);

            obj = new TextArea("resultWin2", "absolute", "1.31%", "397", null, "48", "49.21%", null, this);
            obj.set_taborder("37");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 764, 873, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("Base::etcExample1");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("etcExample1.xfdl", function(exports) {

        this.Button00_onclick = function(obj,e)
        {
        	this.go("Base::HelloScreen.xfdl");
        }

        

        
        this.BigValue_onitemchanged = function(obj,e)
        {
        	this.middleValue.set_innerdataset("middleCombo");
        	if(this.middleValue.value != null){
        		
        		this.middleValue.set_text("::중분류::");
        	}
        	
        	if(this.BigValue.value == '100')
        	{
        		this.middleCombo.filter("code <200");
        		this.smallCombo.filter("code >= 1000 && code <2000");
        	}else if(this.BigValue.value =='200')
        	{	
        		this.middleCombo.filter("code>=200 && code <300");
        		this.smallCombo.filter("code >= 2000 && code <3000");
        	
        	}else{
        		this.middleCombo.filter("code>=300 && code <400");
        		this.smallCombo.filter("code >= 3000 && code <4000");
        	}
        }

        this.middleValue_onitemchanged = function(obj,e)
        {
        	this.smallValue.set_innerdataset("smallCombo");
        	if(this.smallValue.value != null){
        		this.smallValue.set_text("::소분류::");
        	}
        	
        	if(this.middleValue.value >= '100' && this.middleValue.value < '200')
        	{
        		this.smallCombo.filter("code >= 1000 && code <2000");
        	}else if(this.middleValue.value >= '200' && this.middleValue.value <'300')
        	{
        		this.smallCombo.filter("code >= 2000 && code <3000");
        	}else{
        		this.smallCombo.filter("code >= 3000 && code <4000");
        	}
        	
        	
        	
        	
        }

        this.etcExample1_onload = function(obj,e)
        {
        	if(new String(this.BigValue.value).valueOf() == "undefined"){
        		this.middleValue.set_innerdataset("default");
        		this.smallValue.set_innerdataset("default");	
        	}
        }

        this.Combo01_onitemchanged = function(obj,e)
        {
        	trace(this.Combo01.value);
        }

        this.Button01_onclick = function(obj,e)
        {
        	this.datasetTest.set_keystring("S:-col1-col2");
        	
        }

        this.Button02_onclick = function(obj,e)
        {
        	this.datasetTest.set_keystring("S:+col1+col2");
        }

        this.Button03_onclick = function(obj,e)
        {
        	//filter 예제
        	this.datasetTest.filter("col1 >'1'");
        }

        this.Button04_onclick = function(obj,e)
        {
        	this.datasetTest.filter("");
        }

        this.Button05_onclick = function(obj,e)
        {
        	trace(this.datasetTest.getColumn(0,"col1"));
        }

        this.Button06_onclick = function(obj,e)
        {
        	//rowidx : Dataset Expression 예약어다. 
        	this.datasetTest2.filter("rowidx == dataset.findRowExpr(\"col1=='\" + col1 + \"'\")");
        	
        }

        //getSum
        this.Button07_onclick = function(obj,e)
        {
        	var sum = this.datasetTest.getSum("col2 > '1' ? col2: '0'");
        	this.resultWin2.set_value(sum);
        	
        }

        //getCaseSum
        this.Button08_onclick = function(obj,e)
        {
        	var caseSum = this.datasetTest.getCaseSum("col2 > 2","col2") ;
        	this.resultWin2.set_value(caseSum);
        }

        this.Button09_onclick = function(obj,e)
        {
        	var position = this.datasetTest2.rowposition;
        	this.resultWin.set_value(position);
        }

        this.Button10_onclick = function(obj,e)
        {	//dataset 갯수 구하기
        	var rowCount = this.datasetTest2.getRowCount();
        	this.resultWin.set_value(rowCount);
        }

        this.Button11_onclick = function(obj,e)
        {
        	//dataset에서 해당하는 컬럼값 구하기 
        	var column  = this.datasetTest2.getColumn(this.datasetTest2.rowposition, "col1");
        	this.resultWin.set_value(column);
        }

        this.Button12_onclick = function(obj,e)
        {
        	//dataset에서 해당하는 컬럼값 설정 
        	this.datasetTest2.setColumn(this.datasetTest2.rowposition,"col2",'A');
        }

        

        this.Button13_onclick = function(obj,e)
        {
        	//조건에 맞는 첫번째 레코드 검색하기
        	var record = this.datasetTest.findRowExpr("col2 >5");
        	this.resultWin.set_value(record);
        }

        this.Button14_onclick = function(obj,e)
        {
        	//find row
        	var result = this.datasetTest.findRow("col1",'4'); //row의 index를 알려 주는 구나
        	var resultT = this.datasetTest.getColumn(result,"col1");
        	this.resultWin2.set_value(resultT);
        }

        //Dataset 전체 제어
        this.Button15_onclick = function(obj,e)
        {
        	//다른 dataset을 추가 하기 
        	this.datasetTest2.appendData(this.datasetTest);
        }

        
        this.Button16_onclick = function(obj,e)
        {
        	//Dataset 전체 데이터 지우기
        	this.datasetTest2.clearData();
        }

        this.Button19_onclick = function(obj,e)
        {
        	//Dataset 레코드 전체 삭제 하기 
        	this.datasetTest2.deleteAll();
        }

        this.Button20_onclick = function(obj,e)
        {
        	//Deataset을 다른 Dataset으로 복사 하기 
        	this.cDataset.copyData(this.datasetTest2);
        	alert(this.cDataset.saveXML() );
        }

        
        this.Button21_onclick = function(obj,e)
        {
        	//다른 Dataset을 현재 dataset 뒤에 덧붙이기
        	this.datasetTest2.mergeData(this.datasetTest);
        	
        }

        this.Button22_onclick = function(obj,e)
        {
        	//레코드 추가 하기 
        	var addIndex = this.datasetTest2.addRow();
        	this.resultWin.set_value(addIndex);
        	this.datasetTest2.setColumn(addIndex,"col1","D");
        	this.datasetTest2.setColumn(addIndex,"col2",addIndex+1);
        	alert(this.datasetTest2.saveXML());
        }

        this.Button17_onclick = function(obj,e)
        {
         // 레코드 삭제 하기 
        	this.datasetTest2.deleteRow(this.datasetTest2.rowposition);
        }

        this.Button18_onclick = function(obj,e)
        {
        	//레코드 변경 사항
        	var test = this.datasetTest2.applyChange();
        }

        this.Button23_onclick = function(obj,e)
        {
        	//삭제된 레코드 갯수 구하기 
        	var deleteCnt = this.datasetTest2.getDeletedRowCount();
        	this.resultWin.set_value(deleteCnt);
        }

        this.Button24_onclick = function(obj,e)
        {
        	//레코드 상태 정보 
        	this.datasetTest2.getRowType(this.datasetTest2.rowposition);
        	/**
        		레코드 상태 정보 
        		normal : 1, 
        		insert : 2,
        		update : 4,
        		delete : 8
        	*/
        	this.resultWin.set_value(this.datasetTest2.getRowType(this.datasetTest2.rowposition));
        }

        this.Button25_onclick = function(obj,e)
        {
        	//변경된 컬럼 인덱스 구하기 
        	var test = this.datasetTest2.getOrgColumn(this.datasetTest2.rowposition, "col2");
        	this.resultWin.set_value(test);
        }

        this.Button26_onclick = function(obj,e)
        {
        	//Dataset을 마지막 저장 상태로 되돌리기 , sql rollback에 해당 한다. 
        	this.datasetTest2.reset();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.etcExample1_onload, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.BigValue.addEventHandler("onitemchanged", this.BigValue_onitemchanged, this);
            this.middleValue.addEventHandler("onitemchanged", this.middleValue_onitemchanged, this);
            this.Combo01.addEventHandler("onitemchanged", this.Combo01_onitemchanged, this);
            this.Button01.addEventHandler("onclick", this.Button01_onclick, this);
            this.Button02.addEventHandler("onclick", this.Button02_onclick, this);
            this.Button03.addEventHandler("onclick", this.Button03_onclick, this);
            this.Button04.addEventHandler("onclick", this.Button04_onclick, this);
            this.Button05.addEventHandler("onclick", this.Button05_onclick, this);
            this.Button06.addEventHandler("onclick", this.Button06_onclick, this);
            this.Button07.addEventHandler("onclick", this.Button07_onclick, this);
            this.Button08.addEventHandler("onclick", this.Button08_onclick, this);
            this.Button09.addEventHandler("onclick", this.Button09_onclick, this);
            this.Button10.addEventHandler("onclick", this.Button10_onclick, this);
            this.Button11.addEventHandler("onclick", this.Button11_onclick, this);
            this.Button12.addEventHandler("onclick", this.Button12_onclick, this);
            this.Button13.addEventHandler("onclick", this.Button13_onclick, this);
            this.Button14.addEventHandler("onclick", this.Button14_onclick, this);
            this.Button15.addEventHandler("onclick", this.Button15_onclick, this);
            this.Button16.addEventHandler("onclick", this.Button16_onclick, this);
            this.Button17.addEventHandler("onclick", this.Button17_onclick, this);
            this.Button18.addEventHandler("onclick", this.Button18_onclick, this);
            this.Button19.addEventHandler("onclick", this.Button19_onclick, this);
            this.Button20.addEventHandler("onclick", this.Button20_onclick, this);
            this.Button21.addEventHandler("onclick", this.Button21_onclick, this);
            this.Button22.addEventHandler("onclick", this.Button22_onclick, this);
            this.Button23.addEventHandler("onclick", this.Button23_onclick, this);
            this.Button24.addEventHandler("onclick", this.Button24_onclick, this);
            this.Button25.addEventHandler("onclick", this.Button25_onclick, this);
            this.Button26.addEventHandler("onclick", this.Button26_onclick, this);

        };

        this.loadIncludeScript("etcExample1.xfdl", true);

       
    };
}
)();
