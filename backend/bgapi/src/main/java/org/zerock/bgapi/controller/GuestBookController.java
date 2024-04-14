package org.zerock.bgapi.controller;

import org.springframework.web.bind.annotation.*;
import org.zerock.bgapi.dto.PageRequestDTO;
import org.zerock.bgapi.dto.PageResponseDTO;
import org.zerock.bgapi.dto.GuestBookDTO;
import org.zerock.bgapi.service.GuestBookService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpHeaders;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@Log4j2
@RequestMapping("/api/guestbook")
public class GuestBookController {
    private final GuestBookService service;

    
    @PostMapping("/")
    public Map<String, Long> register(@RequestBody GuestBookDTO guestBookDTO) {
        log.info("guestbookDTO" + guestBookDTO);
        Long no = service.register(guestBookDTO);
        
    
        return Map.of("No",no);
    }

    @GetMapping("/{no}")
    public GuestBookDTO get(@PathVariable(name = "no") Long no) {
        return service.get(no);
    }

    @GetMapping("/list")
    public PageResponseDTO<GuestBookDTO> list(PageRequestDTO pageRequestDTO) {
        log.info(pageRequestDTO);
        return service.list(pageRequestDTO);
    }

    @PutMapping("/{no}")
    public Map<String, String> modify(@PathVariable(name = "no") Long no, @RequestBody GuestBookDTO guestBookDTO) {
        guestBookDTO.setNo(no);
        log.info("Modify: " + guestBookDTO);
        service.modify(guestBookDTO);
        return Map.of("RESULT", "SUCCESS");
    }
}
