package org.zerock.bgapi.service;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service; //빈 등록하고 주입가능
import org.springframework.transaction.annotation.Transactional;
import org.zerock.bgapi.domain.GuestBook;
import org.zerock.bgapi.dto.GuestBookDTO;
import org.zerock.bgapi.repository.GuestBookRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Service //해당 클래스가 비지니스 로직을 처리하는 클래스
@Transactional //메서드가 하나의 트랜잭션 내 실행가능
@Log4j2
@RequiredArgsConstructor // 생성자 자동 주입
public class GuestBookServiceImp implements GuestBookService {
    private final ModelMapper modelMapper;
    //final, 변수를 상수로 선언할 때 + 재할당이 불가능
    private final GuestBookRepository guestbookRepository;
    @Override
    public Long register(GuestBookDTO guestbookDTO) {
        log.info("-------");
        GuestBook guestbook = modelMapper.map(guestbookDTO, GuestBook.class);
        //DTO객체를 Guestbook 객체로 전환(클래스의 인스턴스로 매핑)
        GuestBook savedGuestBook = guestbookRepository.save(guestbook);
        return savedGuestBook.getNo();
    }    
}
