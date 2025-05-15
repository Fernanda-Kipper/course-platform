package com.kipperdev.course_platform_api.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Column;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;

@Entity
@Table(name = "videos")
public class Video {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false)
    private String slug;
    
    @Column(nullable = false)
    private String gumletAssetId;
    
    @Column(nullable = false)
    private String title;
    
    @Column(name = "video_order", nullable = false)
    private Integer order;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "course_id", nullable = false)
    private Course course;
    
    // Constructors
    protected Video() {}
    
    public Video(String slug, String gumletAssetId, String title, Integer order) {
        this.slug = slug;
        this.gumletAssetId = gumletAssetId;
        this.title = title;
        this.order = order;
    }
    
    // Getters and Setters
    public Long getId() {
        return id;
    }
    
    public String getSlug() {
        return slug;
    }
    
    public void setSlug(String slug) {
        this.slug = slug;
    }
    
    public String getGumletAssetId() {
        return gumletAssetId;
    }
    
    public void setGumletAssetId(String gumletAssetId) {
        this.gumletAssetId = gumletAssetId;
    }
    
    public String getTitle() {
        return title;
    }
    
    public void setTitle(String title) {
        this.title = title;
    }
    
    public Integer getOrder() {
        return order;
    }
    
    public void setOrder(Integer order) {
        this.order = order;
    }
    
    public Course getCourse() {
        return course;
    }
    
    public void setCourse(Course course) {
        this.course = course;
    }
} 