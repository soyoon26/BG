package org.zerock.bgapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.zerock.bgapi.domain.Comment;

public interface CommentRepository extends JpaRepository<Comment, Long > {
    
} //CRUD등을 상속받음
