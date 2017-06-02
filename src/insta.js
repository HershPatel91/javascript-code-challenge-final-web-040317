class Insta {
	constructor(url, caption){
		this.url = url
		this.caption = caption
	}

	// render (){
	// 	return `<li><img src=${this.url} width="100%" height="100%"></img><br><br><h4>${this.caption}</h4></li>`
	// }

	render (){
		return `<li><div class="row"><div class="col s12 m7"><div class="card"><div class="card-image"><img src=${this.url}></div>
            <div class="card-content">
              <p>${this.caption}<p>
            </div>
          </div>
        </div>
      </div></li>`
	}

}