package org.zerock.bgapi.repository;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import lombok.extern.log4j.Log4j2;

@SpringBootTest
@Log4j2
public class CommentRepositoryTests {
    @Autowired
    private CommentRepository commentRepository;

    @Test
    public void test1() {

        log.info("-------------------냠");
        log.info(commentRepository);
    }
}
