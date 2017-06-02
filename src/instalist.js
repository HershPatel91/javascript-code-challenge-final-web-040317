class instaList {
	constructor(){
		this.instas = []
	}

	render (){
		var x = `<ul>${this.instas.map(insta => insta.render())}</ul>`
		return x.replace(/,/g, '')
	}

	addInsta (url, caption){
		this.instas.push(new Insta(url, caption))
	}

}