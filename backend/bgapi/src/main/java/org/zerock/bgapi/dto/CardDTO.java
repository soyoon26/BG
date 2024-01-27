package org.zerock.bgapi.dto;
import lombok.*;
import java.util.*;
import org.springframework.web.multipart.MultipartFile;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CardDTO {
    // private Long pno;
    private String pname;
    // private int price;
    private String pdesc;
    private boolean delFlag;

    @Builder.Default
    private List<MultipartFile> files = new ArrayList<>();
    //실제 파일 데이터 
    @Builder.Default
    private List<String> uploadFileNames = new ArrayList<>();
    //문자열로만 보관
}
