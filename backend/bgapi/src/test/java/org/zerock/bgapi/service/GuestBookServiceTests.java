package org.zerock.bgapi.service;

import java.time.LocalDate;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.zerock.bgapi.dto.GuestBookDTO;
import org.zerock.bgapi.dto.PageRequestDTO;
import org.zerock.bgapi.dto.PageResponseDTO;

import lombok.extern.log4j.Log4j2;

@SpringBootTest
@Log4j2
public class GuestBookServiceTests {
    @Autowired
    private GuestBookService guestbookService;
    
    @Test
    public void testRegister() {
        GuestBookDTO guestbookDTO = GuestBookDTO.builder()
        .content("테스트 진행")
        .writer("superuser")
        .dueDate(LocalDate.of(2024,02,12))
        .build();

        Long no = guestbookService.register(guestbookDTO);

        log.info("NO: " + no);
    }

    @Test
    public void testGet() {
        Long no = 5L;
        GuestBookDTO guestbookDTO = guestbookService.get(no);
        log.info(guestbookDTO); 
    }

    @Test
    public void testList() {
        PageRequestDTO pageRequestDTO = PageRequestDTO.builder()
            .page(2)
            .size(10)
            .build();

        PageResponseDTO<GuestBookDTO> response = guestbookService.list(pageRequestDTO);

        log.info(response);
    }
}
