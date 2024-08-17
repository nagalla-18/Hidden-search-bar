        var hy=document.querySelector('.iimg');
        var inp=document.querySelector('.search_bar').value;
        function Cli(){
            var term,myWindow;
            term=document.querySelector('.search_bar').value;
            var inp=document.querySelector('.search_bar').value;
            if (inp == 'car'){
           hy.src="driving school-cuate.svg";
        }
        else if(inp == 'krishna')
        {
            hy.src='https://images.unsplash.com/photo-1631689644455-b570154363e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80';
        }
        else if(inp=='laptops')
        {
            hy.src='https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=820&q=80';    
        }
        else if(inp =='mountains')
        {
            hy.src='https://images.unsplash.com/photo-1463288889890-a56b2853c40f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80'
        }
        else if(inp=='love')
        {
            hy.src='https://images.unsplash.com/photo-1612490689975-c062b1bdcec7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
        }
        else if(inp=='peacock')
        {
            hy.src='https://images.unsplash.com/photo-1624981782695-30877d53b229?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
        }
        else if(inp=='youtube')
        {
            myWindow = window.open("https://www.youtube.com/"+term,"_self")

        }
        else if(inp=='google')
        {
            myWindow = window.open("https://www.google.com/search?q="+term,"_self")

        }
        else if(inp=='linkedin')
        {
            myWindow = window.open("https://www.linkedin.com/in/geetha-koushik-nagalla-927b07241/"+term,"_self")

        }
        else if(inp=='whatsappweb')
        {
            myWindow = window.open("https://web.whatsapp.com/"+term,"_self")

        }
        else if(inp=='gmail')
        {
            myWindow = window.open("https://mail.google.com/mail/u/1/#inbox"+term,"_self")

        }
        else if(inp=='coursera')
        {
            myWindow = window.open("https://www.coursera.org/?adgroupid=141296025592&adpostion=&campaignid=18216928764&creativeid=619458216878&device=c&devicemodel=&gclid=Cj0KCQjwoeemBhCfARIsADR2QCuhr7JCRUhuxnnuLwfc8dJzsKpzTPrcFd7yA3peza5koaoLMwRrQ9UaAvadEALw_wcB&hide_mobile_promo&keyword=coursera%20login&matchtype=b&network=g&utm_campaign=B2C_INDIA__branded_FTCOF__arte&utm_content=B2C&utm_medium=sem&utm_source=gg"+term,"_self")

        }
        console.log(inp)
        console.log('hai')
        }
