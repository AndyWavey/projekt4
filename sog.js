var search_terms = ['Photoshop Kursus -> pris: 50', 'Mens Vi Venter -> pris: 100 ', 'Banankast -> pris: Gratis' , 'Beerpong Turnering -> pris: 25', 'Filmaften -> pris: Gratis', 'Løbe Klub -> pris: 75',  'Skakturnering -> pris: Gratis','LoL-turnering -> pris: Gratis'  ];

function autocompleteMatch(input) {
  if (input == '') {
    return [];
  }

  else {
      'Beklager, intet matchede det du søgte på'
  }
  var reg = new RegExp(input)
  return search_terms.filter(function(term) {
	  if (term.match(reg)) {
  	  return term;
	  }
  });
}

function showResults(val) {
  res = document.getElementById("result");
  res.innerHTML = '';
  let list = '';
  let terms = autocompleteMatch(val);
  for (i=0; i<terms.length; i++) {
    list += '<li>' + terms[i] + '</li>';
  }
  res.innerHTML = '<ul>' + list + '</ul>';
}
