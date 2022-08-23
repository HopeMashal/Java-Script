const palette = {
	red    : '#eb4d4b',
	yellow : '#f9ca24',
	blue   : '#30336b'
};

//DOT NOTATION
palette.red; //'#eb4d4b'

//SQUARE BRACKET NOTATION
palette['yellow']; //'#f9ca24'

//With square brackets, we can also use dynamic key names:

let mysteryColor = 'blue';
palette[mysteryColor]; //'#30336b'

const userReviews = {};

//Adding a new property:
userReviews['queenBee49'] = 4.0;
userReviews.mrSmith78 = 3.5;

//Updating existing properties
userReviews['queenBee49'] += 2;
userReviews.mrSmith78++;