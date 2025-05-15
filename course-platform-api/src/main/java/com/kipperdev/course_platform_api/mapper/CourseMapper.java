package com.kipperdev.course_platform_api.mapper;

import com.kipperdev.course_platform_api.domain.Course;
import com.kipperdev.course_platform_api.dto.CourseDto;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring", uses = {VideoMapper.class})
public interface CourseMapper {
    
    @Mapping(target = "videos", source = "videos")
    CourseDto toDto(Course course);
    
    List<CourseDto> toDtoList(List<Course> courses);
} 