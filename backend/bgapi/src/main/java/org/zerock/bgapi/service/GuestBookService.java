package org.zerock.bgapi.service;

import org.zerock.bgapi.dto.PageRequestDTO;
import org.zerock.bgapi.dto.PageResponseDTO;
import org.zerock.bgapi.dto.GuestBookDTO;


public interface GuestBookService{ //등록하고 식별자 반환
    Long register(GuestBookDTO guestbookDTO);
    GuestBookDTO get(Long no);
    void modify(GuestBookDTO guestbookDTO);
    void remove(Long no);
    PageResponseDTO<GuestBookDTO> list(PageRequestDTO pageRequestDTO);
}
