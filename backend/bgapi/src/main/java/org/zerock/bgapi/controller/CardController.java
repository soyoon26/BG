package org.zerock.bgapi.controller;

import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.zerock.bgapi.dto.CardDTO;
import org.zerock.bgapi.util.CardFileUtil;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

@RestController
@RequiredArgsConstructor
@Log4j2
@RequestMapping("/api/cards")
public class CardController {
    private final CardFileUtil fileUtil;

    @PostMapping("/")
    public Map<String, String> register(@RequestBody CardDTO cardDTO) {
        System.out.println("왜안되느뇨");
        log.info("rgister: "+ cardDTO);
        List<MultipartFile> files = cardDTO.getFiles();
        log.info("Files: {}", files);
        List<String> uploadFileNames = fileUtil.saveFiles(files);
        cardDTO.setUploadFileNames(uploadFileNames);
        log.info("Upload file names: {}",uploadFileNames);
        return Map.of("RESULT", "SUCCESS");
    }
}