function Tempo(request, response) {
   
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGTMString();
    
return
(
      <div>
        <div> {dynamicDateString}(dinâmico)</div>
        <div>{props.staticDateString}(estático)</div>
      </div>
)
}

export function getStaticProps(){
    const dynamicDate = new Date();
    const staticDateString = staticDate.toGTMString();

    return{
        props: {
            staticDateString
        }
    }
}
export default Tempo;