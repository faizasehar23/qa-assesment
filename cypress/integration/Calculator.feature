Feature: Test online calculator scenarios
Scenario Outline: Test subtraction functionality
Given Open chrome browser and start application
When I subtract following values and press CE button
			|value1 | <3>|
			|value2 | <3>|
			|operator | <->|			
Then I should be able to see "0"
			|expected |<0>|
Examples:
		| value1  		| value2 		| operator			| expected	|
    	| 	3 			|   3			|		-			| 0		|
Scenario Outline: Test Addition functionality of calculator
Given Open firefox browser and start running the application
When I add following values and press CE button
			|value1 | <3>|
			|value2 | <3>|
			|operator | <+>|			
Then I should be able to see "6"
			|expected |<6>|
Examples:
		| value1  		| value2 		| operator			| expected	|
    	| 	3 			|   3			|		+			| 6			|
Scenario Outline: Test division functionality of calculator
Given Start running the application
When I divide following values and press CE button
			|value1 | <3>|
			|value2 | <3>|
			|operator | </>|			
Then I should be able to see "1"
			|expected |<1>|
Examples:
		| value1  		| value2 		| operator			| expected	|
    	| 	3			|   3			|	/				| 1			|
Scenario Outline: Test Multiplication functionality of calculator
Given Start running the application
When I multiply following values and press CE button
			|value1 | <3>|
			|value2 | <3>|
			|operator | <*>|			
Then I should be able to see "9"
			|expected |<9>|
Examples:
		| value1  		| value2 		| operator			| expected	|
    	| 	3			|   3			|	*				| 9			|
Scenario Outline: Test division of 1 by any number
Given Start the application
When I divide 1 by any number and press equal button 
			|value | <3>|
			|value2 | <3>|
			|operator | <1/x>|			
Then I should be able to see "0.03"
			|expected |<0.03>|
Examples:
		| value1  		| value2 		| operator			| expected	|
    	| 	3			|   3			|	1/x				| 0.03		|
Scenario Outline: Test finding percentage of a number
Given Start application
When I press a number and finds its percentage
			|value | <3>|
			|value2 | <3>|
			|operator | <%>|			
Then I should be able to see "0.33"
			|expected |<0.33>|
Examples:
		| value1  		| value2 		| operator			| expected	|
    	| 	3			|   3			|	%				| 0.33		|
