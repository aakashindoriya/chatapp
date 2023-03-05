export function Debounce(func,time){
    let run;
    return function(){
        run&&clearTimeout(run)
        run=setTimeout(()=>func.apply(this,arguments),time)
    }
}