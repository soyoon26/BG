package org.zerock.bgapi.repository;


import java.time.LocalDate;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.zerock.bgapi.domain.GuestBook;

import lombok.extern.log4j.Log4j2;
import java.util.Optional;

@SpringBootTest
@Log4j2
public class GuestBookRepositoryTests {
    @Autowired
    private GuestBookRepository guestbookRepository;

    @Test
    public void testInsert() {
        for (int i = 1; i <=1; i++){
            GuestBook guestbook = GuestBook.builder()
            .title("이 사이트 좋아요"+i)
            .content("안녕하세요" + i)
            .date(LocalDate.of(2024,02,10))
            .writer("사용자")
            .build();

            guestbookRepository.save(guestbook);
        }
    }
    
    @Test
    public void testRead() {
        Long no = 10L;

        java.util.Optional<GuestBook> result = guestbookRepository.findById(no);
        GuestBook guestbook = result.orElseThrow();
        log.info(guestbook);
    }
    @Test
    public void testModify() {
        Long no = 10L;

        Optional<GuestBook> result = guestbookRepository.findById(no); //java.util패키지의 Optional
        GuestBook guestbook = result.orElseThrow();
        guestbook.changeContent("수정되었습니다.");

        guestbookRepository.save(guestbook);
    } 
    @Test
    public void testDelete(){
        Long no = 1L;
        guestbookRepository.deleteById(no);
    }
    @Test
    public void testPaging(){
        Pageable pageable = 
        PageRequest.of(0,10,Sort.by("no").descending());
        Page<GuestBook> result = guestbookRepository.findAll(pageable);
        log.info(result.getTotalElements());
        result.getContent().stream().forEach(guestbook -> log.info(guestbook));
    } 
}
