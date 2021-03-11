package com.bouche.aridjNet.controllers;



import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;

import org.springframework.web.bind.annotation.RequestParam;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;




@Controller
public class CvController {
	@RequestMapping(value="/cv",  method=RequestMethod.GET)
	public String home(ModelMap map) {
		
		return "cv";
	}

	
	@RequestMapping(value="/flutter", method=RequestMethod.GET)
	public String flutter() {
		
		return "flutter";
	}
	
	@RequestMapping(value="/php", method=RequestMethod.GET)
	public String phpdemmo() {
		
		return "php";
	}
	
	@RequestMapping(value="/resto", method=RequestMethod.GET)
	public String resto() {
		
		return "resto";
	}
	
	
	@RequestMapping(value="/parfum", method=RequestMethod.GET)
	public String slide(Model model) {
	
		
		
		return "parfum";
	}
	
	
	@RequestMapping(value="/mathAlgo", method=RequestMethod.GET)
	public String mathAlgo(Model model) {
		
		return "mathAlgo";
	}
	@RequestMapping(value="/mathAlgo", method=RequestMethod.POST)
	public String mathAlgo(Model model,
						@RequestParam(name="nombre") String nombre) {
		
		
		model.addAttribute("nombre", nombre);
		
		
		return "mathAlgo";
	}
	
	
	
	
	
	

}
