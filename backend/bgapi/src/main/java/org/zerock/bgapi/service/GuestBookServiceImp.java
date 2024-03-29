package org.zerock.bgapi.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;//스트림(반복가능)에서 수집한 데이터 연산 가능

import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service; //빈 등록하고 주입가능
import org.springframework.transaction.annotation.Transactional;
import org.zerock.bgapi.domain.GuestBook;
import org.zerock.bgapi.dto.PageRequestDTO;
import org.zerock.bgapi.dto.PageResponseDTO;
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

    @Override
    public GuestBookDTO get(Long no) {
        Optional<GuestBook> result = guestbookRepository.findById(no);
        GuestBook guestbook = result.orElseThrow();
        GuestBookDTO dto = modelMapper.map(guestbook, GuestBookDTO.class);
        return dto;
    }

    @Override
    public void modify(GuestBookDTO guestbookDTO) {
        Optional<GuestBook> result = guestbookRepository.findById(guestbookDTO.getNo());

        GuestBook guestbook = result.orElseThrow();

        guestbook.changeContent(guestbookDTO.getContent());
        
        guestbookRepository.save(guestbook);
    }

    @Override
    public void remove(Long no) {
        guestbookRepository.deleteById(no);
    }
    @Override
    public PageResponseDTO<GuestBookDTO> list(PageRequestDTO pageRequestDTO) {
        Pageable pageable = 
        PageRequest.of(
            pageRequestDTO.getPage() - 1, //1페이지가 0
            pageRequestDTO.getSize(),
            Sort.by("no").descending());
        Page<GuestBook> result = guestbookRepository.findAll(pageable);

        List<GuestBookDTO> dtoList = result.getContent().stream()
            .map(guestbook -> modelMapper.map(guestbook, GuestBookDTO.class))
            .collect(Collectors.toList());

        long totalCount = result.getTotalElements();

        PageResponseDTO<GuestBookDTO> responseDTO = PageResponseDTO.<GuestBookDTO>withAll()
            .dtoList(dtoList)
            .pageRequestDTO(pageRequestDTO)
            .totalCount(totalCount)
            .build();

        return responseDTO;
    }
}
