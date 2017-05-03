describe('Ad Display', function(){

	var ads = window.EBG && window.EBG.ads || null, uid;

	it('There should be ad(s) in the page', function(){		
		expect(ads).not.toBeNull();
	});

	for(uid in ads)
		describe('Ad ' + uid + ' should show', function(){
			var ad = ads[uid];
			it('Ad ' + uid + ' placeholder should be present', function(){			
				expect(window.document.getElementById(ad._adConfig.placeHolderId)).not.toBeNull();
			});
			it('Ad ' + uid + ' bannerCC should be defined', function(){
				expect(ads._bannerCC).not.toBeUndefined();
			});
		});	
});