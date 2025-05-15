package com.kipperdev.course_platform_api.mapper;

import com.kipperdev.course_platform_api.domain.Video;
import com.kipperdev.course_platform_api.dto.VideoDto;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface VideoMapper {
    
    VideoDto toDto(Video video);
    
    List<VideoDto> toDtoList(List<Video> videos);
} 