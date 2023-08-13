var canvas = {
	create : (w, h)=>{
		var cnv = document.createElement('canvas');
		cnv.width  = w;
		cnv.height = h;
		cnv.returnImg = (s)=>{return s?'<img src="'+cnv.toDataURL()+'" '+s+'>':'<img src="'+cnv.toDataURL()+'">'}
		return cnv;
	}
	
	
	
}