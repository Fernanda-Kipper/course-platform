package com.kipperdev.course_platform_api.controller;

import com.kipperdev.course_platform_api.dto.CourseDto;
import com.kipperdev.course_platform_api.dto.VideoDto;
import com.kipperdev.course_platform_api.service.CourseService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/courses")
public class CourseController {
    
    private final CourseService courseService;
    
    public CourseController(CourseService courseService) {
        this.courseService = courseService;
    }
    
    @GetMapping
    public ResponseEntity<List<CourseDto>> list() {
        return ResponseEntity.ok(courseService.findAll());
    }
    
    @GetMapping("/{course}")
    public ResponseEntity<CourseDto> one(@PathVariable String course) {
        return ResponseEntity.ok(courseService.findBySlug(course));
    }
    
    @GetMapping("/{course}/videos/{video}")
    public ResponseEntity<VideoDto> video(@PathVariable String course, @PathVariable String video) {
        return ResponseEntity.ok(courseService.findVideo(course, video));
    }
} 