package org.zerock.bgapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.zerock.bgapi.domain.Comment;

public interface CommentRepository extends JpaRepository<Comment, Long > {
    
}
