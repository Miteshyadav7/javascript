<script>
console.log("day started...");
    const pizza = () => {
setTimeout(() => {
    console.log("pizza done");
},4000)
    }
    let service = () => {
setTimeout(() => {
    console.log("service done");
},3000)
    }
    let meeting = () => {
setTimeout(() => {
    console.log("meeting  done");
},2000);
    }
    let icecream = () => {
setTimeout(() => {
    console.log("icecream done");
},1500);
    }
    pizza();
    service();
    meeting();
    icecream();
    document.write("ended");
</script>
