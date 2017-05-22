var nextBtn = $('#resultsGridView_next');
var oldResults = $("#resultsGridView_info").text();
var currentResults = null;
var iter = 0;

function getData(){
	var trs = $('table').last().find('tbody tr');
	var pageData = {}
	$(trs).each(function(trka){
		var tds = $(trs[trka]).find('td');
		// console.log(trka);
		pageData[trka] = {}
		$(tds).each(function(tdka){
			if(tdka > 3){
				switch(tdka){
					case 4: 
						pageData[trka]['business_name'] = $(tds[tdka]).find('div a').text();
						// console.log($(tds[tdka]).find('div a').text());
						break;
					case 5:
						pageData[trka]['executive_name'] = $(tds[tdka]).find('div').text();
						// console.log($(tds[tdka]).find('div').text());
					case 6:
						pageData[trka]['executive_title'] = $(tds[tdka]).text();
					case 7:
						var phone = $(tds[tdka]).find('div span').text();
						if(!phone){
							phone = $(tds[tdka]).find('div').text();
						}
						pageData[trka]['phone'] = phone;
						// console.log($(tds[tdka]).find('div span').text());
					case 8:
						pageData[trka]['street_address'] = $(tds[tdka]).text();
					case 9:
						pageData[trka]['city'] = $(tds[tdka]).text();
					case 10:
						pageData[trka]['province'] = $(tds[tdka]).text();
					case 11:
						pageData[trka]['postal_code'] = $(tds[tdka]).text();
					case 12:
						pageData[trka]['sic_description'] = $(tds[tdka]).text();
				}
				// console.log(tds[tdka]);
			}
		})
	})
	return pageData;
}

var allPageData = {};
setInterval(function(){
	// console.log('Interval');
	var oldResults = $("#resultsGridView_info").text();
	if(currentResults != oldResults && iter < 40){ // TODO normal iteration
		console.log('Get page', iter);
		currentResults = oldResults;
		allPageData[iter] = getData();
		
		iter++;
		nextBtn.click();
	}
}, 40); //эти 40 трогать не надо это милисекунды


// copy(JSON.stringify(allPageData));
