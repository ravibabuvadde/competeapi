fetch('https://www.codechef.com/users/ravibabuvaddeeee',{
    redirect: 'manual'
}) 
        .then((response) => {response.text();
            console.log(response.status);})
        .then((data)=>{});