package org.zerock.bgapi.dto;

import lombok.Builder;
import lombok.Data;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

@Data
public class PageResponseDTO<E> {
    private List<E> dtoList;

    private List<Integer> pageNumList;

    private PageRequestDTO pageRequestDTO;

    private boolean prev, next;

    private int totalCount, prevPage, nextPage, totalPage, current;

    @Builder(builderMethodName = "withAll")
    public PageResponseDTO(List<E> dtoList, PageRequestDTO pageRequestDTO, long totalCount) {
        this.dtoList = dtoList;
        this.pageRequestDTO = pageRequestDTO;
        this.totalCount = (int)totalCount;

        int end = (int)(Math.ceil(pageRequestDTO.getPage() / 10.0)) * 10;
        int start = end - 9;
        int last = (int)(Math.ceil((totalCount/(double)pageRequestDTO.getSize())));

        end = end > last ? last: end;

       
        this.pageNumList = IntStream.rangeClosed(start,end).boxed().collect(Collectors.toList());

        
        this.totalPage = this.pageNumList.size();
        this.current = pageRequestDTO.getPage();
        this.prev = this.current != totalPage;

        this.next = this.current != 1;
        if(prev) {
            this.prevPage = this.current + 1;
        }
        if(next) {
            this.nextPage = this.current - 1;
        }
    }
}
