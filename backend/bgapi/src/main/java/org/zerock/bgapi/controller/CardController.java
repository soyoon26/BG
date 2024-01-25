package org.zerock.bgapi.controller;

import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.zerock.bgapi.dto.CardDTO;
import org.zerock.bgapi.util.CardFileUtil;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequiredArgsConstructor
@Log4j2
@RequestMapping("/api/cards")


public class CardController {
    private final CardFileUtil fileUtil;

    @PostMapping("/")
    public Map<String, String> register(CardDTO cardDTO) {
        log.info("rgister: "+ cardDTO);
        List<MultipartFile> files = cardDTO.getFiles();
        List<String> uploadFileNames = fileUtil.saveFiles(files);
        cardDTO.setUploadFileNames(uploadFileNames);
        log.info(uploadFileNames);
        return Map.of("RESULT", "SUCCESS");
    }
}
