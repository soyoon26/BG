package org.zerock.bgapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.zerock.bgapi.domain.GuestBook;

public interface GuestBookRepository extends JpaRepository<GuestBook, Long > {
    
} //CRUD등을 상속받음
