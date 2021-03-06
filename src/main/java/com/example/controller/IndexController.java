package com.example.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/index")
public class IndexController {

	@RequestMapping(value = "/home")
	public String getHome(ModelMap model) {
		return "home";
	}

	@RequestMapping(value = "/homepage")
	public String getHomePage(ModelMap model) {
		return "homepage";
	}
}
