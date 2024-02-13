package org.zerock.bgapi.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.zerock.bgapi.dto.PageRequestDTO;
import org.zerock.bgapi.dto.PageResponseDTO;
import org.zerock.bgapi.dto.GuestBookDTO;
import org.zerock.bgapi.service.GuestBookService;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

@RestController
@RequiredArgsConstructor
@Log4j2
@RequestMapping("/api/guestbook")

public class GuestBookController {
    private final GuestBookService service;
    
    @GetMapping("/{no}")
    public GuestBookDTO get(@PathVariable(name="no") Long no) {
        return service.get(no);
    }

    @GetMapping("/list")
    public PageResponseDTO<GuestBookDTO> list(PageRequestDTO pageRequestDTO) {
        log.info(pageRequestDTO);
        return service.list(pageRequestDTO);
    }
}
