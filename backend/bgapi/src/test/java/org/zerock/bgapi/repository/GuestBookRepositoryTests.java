package org.zerock.bgapi.repository;

import static org.mockito.ArgumentMatchers.isNull;

import java.time.LocalDate;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.zerock.bgapi.domain.GuestBook;

import lombok.extern.log4j.Log4j2;

@SpringBootTest
@Log4j2
public class GuestBookRepositoryTests {
    @Autowired
    private GuestBookRepository commentRepository;

    @Test
    public void testInsert() {
        for (int i = 1; i <=12; i++){
            GuestBook comment = GuestBook.builder()
            .content("안녕하세요" + i)
            .dueDate(LocalDate.of(2024,02,10))
            .writer("사용자")
            .build();

            commentRepository.save(comment);
        }
    }
}
