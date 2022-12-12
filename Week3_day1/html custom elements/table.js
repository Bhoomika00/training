
//customElements.define("my-template",
     class mytable extends HTMLElement{
         constructor(){
         super();
        const shadowRoot =this.attachShadow({mode:'open'});
        const btn=document.createElement("button");
        btn.innerText="create";
        this.shadowRoot.appendChild(btn);

        btn.addEventListener('click',function(){
        const tb1=document.createElement("table");
        const tbody=document.createElement("tbody");

        for(let i=0;i<4;i++){
        const row=document.createElement("tr");
            for(let j=0;j<2;j++){
            const td=document.createElement("td");
            const text=document.createTextNode(`row ${i} col${j}`);
            td.appendChild(text);
            row.appendChild(td);
            }
            tbody.appendChild(row);
        }
        tb1.appendChild(tbody);
        document.body.appendChild(tb1);
        //this.shadowRoot.appendChild(tb1);
        tb1.setAttribute('border',2)
    });
     }
    }
     customElements.define('my-table',mytable);
