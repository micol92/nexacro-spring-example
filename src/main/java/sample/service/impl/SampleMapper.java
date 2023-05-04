package sample.service.impl;

import java.util.List;
import java.util.Map;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("sampleMapper")
public interface SampleMapper {
	List<Map<String,Object>> selectSampleList(Map<String,String> searchInfo);
}
