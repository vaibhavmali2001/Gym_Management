package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.entity.Trainer;
import com.app.service.TrainerService;

@RestController
@CrossOrigin
@RequestMapping("/trainer")
public class TrainerController {
	
	@Autowired
	private TrainerService trainerService;
	
	@GetMapping("/getall")
	public List<Trainer>getall(){
		return trainerService.fetchall();
	}
}
