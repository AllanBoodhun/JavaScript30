   // Query Selector
    const secondHand = document.querySelector('.second-hand');
    const minutesHand = document.querySelector('.min-hand');
    const hourHand = document.querySelector('.hour-hand');

    
    // Function 
    function setDate() {
      const now = new Date();

      // second
      const seconds = now.getSeconds();
      const secondsDegrees = ((seconds / 60) * 360) + 90;
      secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

      // minutes
      const minutes = now.getMinutes();
      const minutesDegrees = ((minutes / 60) * 360) + 90;  
      minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;
      
      // heures
      const hour = now.getHours();
      const hoursDegrees = ((hour / 12) *360) +90;
      hourHand.style.transform = `rotate(${hoursDegrees}deg)`;



    }

    setInterval(setDate, 1000);