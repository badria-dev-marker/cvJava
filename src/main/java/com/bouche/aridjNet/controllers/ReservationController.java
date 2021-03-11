package com.bouche.aridjNet.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class ReservationController {
	
	@RequestMapping(value="/bookingForm", method=RequestMethod.GET)
	public String bookingForm(Model model) {		
		
		
			
		return "reservation";
	}
	
	@RequestMapping(value="/submitForm", method=RequestMethod.POST)
	public String submitForm(Model model, 
					@RequestParam(name="fname") String fname,
					@RequestParam(name="lname") String lname,
					@RequestParam(name="gender") String gender,
					@RequestParam(name="food", defaultValue="") String[] food)	
	{			
		
		model.addAttribute("fname", fname);
		model.addAttribute("lname", lname);
		model.addAttribute("gender", gender);
		model.addAttribute("food", food);
	
		
		
		if (fname.length() == 0 || lname.length() == 0 
				|| gender == null ) { 
			return "reservation";
		}
		
		else {
		
		return "confirmation-form";
		}
	}
}
