(function () {
	var ready = function () {
		ExpPack.modPath = modPath;
		
		ExpPack.initCompatibilityChecks();
		ExpPack.addCustomPrice();
		ExpPack.addBlackBull();
			
		ExpPack.addTopic();
	
		ExpPack.addPlatformGrapintosh();
		ExpPack.addPlatformGrMac();
		ExpPack.addPlatform3GS();
		ExpPack.addPlatform2GS();
		ExpPack.addPlatformGamelingColor();
		ExpPack.addPlatformViva();
		ExpPack.addPlatformPS2S();
		ExpPack.addPlatformItaraBackflash();
		ExpPack.addPlatformItara5200();
		ExpPack.addPlatformHoloBox();
		ExpPack.addPlatformMBox360S();
		
		ExpPack.addEventCelebration();
		ExpPack.addEventCuriosity();
		ExpPack.addEventVac();
		ExpPack.addEventBilly();
		ExpPack.addEventMovieGame();
		ExpPack.addEventFire();
		ExpPack.addEventFirstMagazine();
		ExpPack.addEventSecMagazine();
	
		ExpPack.addResearch();
	};

	var error = function () {
	};

	var modPath = GDT.getRelativePath();

	GDT.loadJs(['/source/source.js',
	'/source/CC_AddOn.js',
	'/source/Search_AddOn.js'
	], ready, error);
})();