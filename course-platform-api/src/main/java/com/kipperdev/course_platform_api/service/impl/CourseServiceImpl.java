package com.kipperdev.course_platform_api.service.impl;

import com.kipperdev.course_platform_api.domain.Course;
import com.kipperdev.course_platform_api.domain.Video;
import com.kipperdev.course_platform_api.dto.CourseDto;
import com.kipperdev.course_platform_api.dto.VideoDto;
import com.kipperdev.course_platform_api.exception.ResourceNotFoundException;
import com.kipperdev.course_platform_api.mapper.CourseMapper;
import com.kipperdev.course_platform_api.mapper.VideoMapper;
import com.kipperdev.course_platform_api.repository.CourseRepository;
import com.kipperdev.course_platform_api.repository.VideoRepository;
import com.kipperdev.course_platform_api.service.CourseService;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class CourseServiceImpl implements CourseService {

    private final CourseRepository courseRepository;
    private final VideoRepository videoRepository;
    private final CourseMapper courseMapper;
    private final VideoMapper videoMapper;

    public CourseServiceImpl(CourseRepository courseRepository, 
                           VideoRepository videoRepository,
                           CourseMapper courseMapper,
                           VideoMapper videoMapper) {
        this.courseRepository = courseRepository;
        this.videoRepository = videoRepository;
        this.courseMapper = courseMapper;
        this.videoMapper = videoMapper;
    }

    @Override
    @Transactional(readOnly = true)
    @Cacheable("courses")
    public List<CourseDto> findAll() {
        List<Course> courses = courseRepository.findAll();
        return courseMapper.toDtoList(courses);
    }

    @Override
    @Transactional(readOnly = true)
    @Cacheable("course")
    public CourseDto findBySlug(String slug) {
        Course course = courseRepository.findBySlug(slug)
                .orElseThrow(() -> new ResourceNotFoundException("Curso não encontrado com slug: " + slug));
        return courseMapper.toDto(course);
    }

    @Override
    @Transactional(readOnly = true)
    @Cacheable("video")
    public VideoDto findVideo(String courseSlug, String videoSlug) {
        // Primeiro verificamos se o curso existe para garantir que o acesso está correto
        courseRepository.findBySlug(courseSlug)
                .orElseThrow(() -> new ResourceNotFoundException("Curso não encontrado com slug: " + courseSlug));
        
        Video video = videoRepository.findByCourse_SlugAndSlug(courseSlug, videoSlug)
                .orElseThrow(() -> new ResourceNotFoundException(
                        "Vídeo não encontrado com slug: " + videoSlug + " no curso: " + courseSlug));
        
        return videoMapper.toDto(video);
    }
} 