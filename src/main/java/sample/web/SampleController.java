package sample.web;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

import sample.service.SampleService;

@Controller
public class SampleController {
	private Logger logger = LoggerFactory.getLogger(SampleController.class);
	
	@Resource(name = "sampleService")
	private SampleService sampleService;
	
	@RequestMapping(value="/selectSampleList.do")
	public NexacroResult selectSampleList(@ParamDataSet(name="input1", required= false)Map<String,String> ds_search ) {
		logger.debug("ds_search >>>>" + ds_search);
		List<Map<String, Object>> sampleList = null;
		sampleList = sampleService.selectSampleList(ds_search);
		
		NexacroResult result = new NexacroResult();
		result.addDataSet("output1", sampleList);
		
		return result;
	}
}
