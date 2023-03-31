function EsGrito(n){
    let p = 0; 
    let o = 0;
    let u = false;
    for(let i = 0;i<n.length;i++){
        if(n.charAt(i) == "!"){
            p += 1;
        }
        else{
            o += 1;
        }
    }
    if(p > o){
        u = true;
    }
    return u;
}
