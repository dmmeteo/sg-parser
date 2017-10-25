var nextBtn = $('div.next');
var currentResults = null;
var iter = 0;

function getData(){
	var trs = $('table').last().find('tbody tr');
	var pageData = {}
	// console.log(trs)
	$(trs).each(function(trka){
		var tds = $(trs[trka]).find('td');
		// console.log(trka);
		pageData[trka] = {}
		$(tds).each(function(tdka){
			if(tdka > 0){
				// console.log($(tds[tdka]).text());
				//TODO numbers of fields
				switch(tdka){
					case 1: 
						pageData[trka]['contact_info'] = $(tds[tdka]).text();
					case 2:
						pageData[trka]['phone'] = $(tds[tdka]).text();
 					case 3:
                         pageData[trka]['address'] = $(tds[tdka]).text();
                    case 4:
                         pageData[trka]['city'] = $(tds[tdka]).text();
                    case 5:
                         pageData[trka]['state'] = $(tds[tdka]).text();
                    case 6:
                         pageData[trka]['zip'] = $(tds[tdka]).text();
 					case 7:
 						pageData[trka]['country'] = $(tds[tdka]).text();
 					case 8:
 						pageData[trka]['age_range'] = $(tds[tdka]).text();
					case 9:
						pageData[trka]['income_range'] = $(tds[tdka]).text();
					case 10:
						pageData[trka]['home_value_range'] = $(tds[tdka]).text();
					case 11:
 						pageData[trka]['owns'] = $(tds[tdka]).text();
 					break;
 				}
 				// console.log(pageData[trka])
 			}
 		})
 	})
	return pageData;
}

var allPageData = {};
setInterval(function(){
	// console.log('Interval');
 	var oldResults = $('.page-input__input-control').attr('placeholder');
 	if(currentResults != oldResults && iter < 29){ //number of pages
 		console.log('Get page', iter);
 		currentResults = oldResults;
 		allPageData[iter] = getData();
 		
 		iter++;
 		nextBtn.click();
 	}
}, 40); //эти 40 трогать не надо это милисекунды

// copy(JSON.stringify(allPageData));