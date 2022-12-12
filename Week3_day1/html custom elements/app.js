class myElement extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode:'open'});
        //style="";
        
        let div=document.createElement('div');
        let style=this.getAttribute('style');
        let msg=this.getAttribute('message');
        div.style=" ";
        div.style=style;
        div.innerText=msg;
        this.shadowRoot.appendChild(div);
        //div.style="";
    }
}
customElements.define("my-element",myElement);