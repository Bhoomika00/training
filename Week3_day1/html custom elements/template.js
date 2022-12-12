 let template= document.getElementById("mytemplate");
let content = template.content;
document.body.appendChild(content);
 
customElements.define("my-template",
     class extends HTMLElement{

       constructor(){

        super();
        let template =  document.getElementById('mytempalte1');
        let content=template.content;
        let date1=Date.now();
        let div=document.createElement('div');
        div.innerHTML=new Date(date1);
        
        //document.body.appendChild(div);
        template.content.appendChild(div);

        //let content=template.content;
        const shadowRoot =this.attachShadow({mode:'open'});
        shadowRoot.appendChild(content.cloneNode(true));

       }
   

     }


)