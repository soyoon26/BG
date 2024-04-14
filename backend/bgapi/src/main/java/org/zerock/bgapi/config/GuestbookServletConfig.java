package org.zerock.bgapi.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.format.FormatterRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.zerock.bgapi.controller.formatter.LocalDateFormatter;

@Configuration
public class GuestbookServletConfig implements WebMvcConfigurer{
    @Override
    public void addFormatters(FormatterRegistry registry) {
        registry.addFormatter(new LocalDateFormatter());
    }     
   
}
