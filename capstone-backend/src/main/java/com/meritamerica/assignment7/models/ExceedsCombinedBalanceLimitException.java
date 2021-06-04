package com.meritamerica.assignment7.models;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@SuppressWarnings("serial")
@ResponseStatus(HttpStatus.BAD_REQUEST)
public class ExceedsCombinedBalanceLimitException extends Exception {

	public ExceedsCombinedBalanceLimitException(String msg) {
		super(msg);
	}
}
