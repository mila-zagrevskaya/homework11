function exercise1 (event) {

		var files = [

	    {
			title: 'picture',
	  		ref: 'https://st2.depositphotos.com/1053646/6104/i/450/depositphotos_61040615-stock-photo-dubai-downtown-night-scene.jpg'
		},
		{
			title: 'picture',
	  		ref: 'https://s1.1zoom.ru/big3/559/347133-admin.jpg'
		},
		{
			title: 'picture',
	  		ref: 'https://avatars.mds.yandex.net/get-pdb/231404/32ea6edf-adb8-49f4-80ab-f0571f8ba6ce/orig'
		},
		{
			title: 'picture',
	  		ref: 'https://www.zastavki.com/pictures/originals/2014/Cities_A_city_of_skyscrapers_083208_.jpg'
		}	
	]
	var fileJson = JSON.stringify (files)



	JSON.parse (fileJson).forEach (
	    function (item) {
	        var elem = document.createElement ("img")
	        elem.style = `width: 200px; height: 133.33px`
	        elem.src = item.ref
	        elem.title = item.title
	        document.querySelector(".result1").appendChild (elem)
	    }
	)

}
