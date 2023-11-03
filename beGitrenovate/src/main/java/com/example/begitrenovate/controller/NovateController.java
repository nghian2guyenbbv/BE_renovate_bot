package com.example.begitrenovate.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/renovate")
public class NovateController {
  @GetMapping("/message")
  public String getMessage(){
    return "message";
  }
}
