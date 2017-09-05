//get statistics for current page from json file name supplied
	function setStats(jsonStatFile){
		statsFile = jsonStatFile;
		currStats[0] = null;
		currStats[1] = null;
		$scope.page.project = "";
		$scope.statistic = "";
		$scope.context = "";		
	}
	function getStats(jsonStatFile){
		// Gets the JSON data from JSON file 
		$.getJSON(jsonStatFile, function(data) {
			
		})
		.done(function(data){
			//statsViewer returns items from list of json data
			for(i=0;i<data.statistics.length;i++){
				currStats[i] = new StatsViewer(data.statistics[i].numbers, data.statistics[i].projectTitle);
			}
			statIndex = 0;
			if(currStats[statIndex]){
				//set scope variables to show first statistic in list
				var currentStats = currStats[statIndex].getCurrStat();
				$scope.page.project = currStats[statIndex].getTitle();
				$scope.statistic = currentStats.stat;
				$scope.context = currentStats.context;
			}	
		})
		.error(function(error){
			//Throws an error to the console if there is one
			console.log("Stats error", error);
			currentStats[statIndex] = null;
			$scope.statistic = "";
			$scope.context = "";
		})
		.complete(function(data){
		// current stats
			if(currStats[statIndex]){
				var currentStats = currStats[statIndex].getCurrStat();
				$scope.page.project = currStats[statIndex].getTitle();
				$scope.statistic = currentStats.stat;
				$scope.context = currentStats.context;
			}
			else{
				$scope.page.project = "";
				$scope.statistic = "";
				$scope.context = "";
			}
		});	
	};
//move on to next statistic - Developer: Anthony Funai.
	function rollStats(){
		//roll forward to next statistic or back to first if end has been reached
		if(document.hasFocus()){
			if(currStats[statIndex] != null){
				var currentStats = currStats[statIndex].advanceNextStat();
				$scope.page.project = currStats[statIndex].getTitle();
				$scope.statistic = currentStats.stat;
				$scope.context = currentStats.context;
				//currently only caters for a list of two projects - in this report this is the maximum
				if(currStats[statIndex].reachedEnd() && currStats.length > 1){
					if(statIndex == 0){
						statIndex = 1;
					}
					else{
						statIndex = 0;
					}
				}
			}
			else if(statsFile != ""){
				getStats(statsFile);
			}
		}	
	}	