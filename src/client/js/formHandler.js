function handleSubmit(event) {
    event.preventDefault()

    let formurl = document.getElementById('name').value
    if(Client.checkForName(formurl)){
      postData('http://localhost:8081/api', {url: formurl})
      .then(function(res) {
        document.getElementById("agreement").innerHTML = `Agreement: ${res.agreement}`;
        document.getElementById("subjectivity").innerHTML = `Subjectivity: ${res.subjectivity}`;
        document.getElementById("confidence").innerHTML = `Confidence: ${res.confidence}`;
        document.getElementById("irony").innerHTML = `Irony: ${res.irony}`;
    })
    } else {
        alert('invalid URL');
    }

    const postData = async (url = "", data = {}) => {
      console.log('Analyzing:', data);
      const response = await fetch(url, {
          method: 'POST',
          credentials: 'same-origin',
          mode: 'cors',
          headers: {
          'Content-Type': 'application/json',
          },
          body: JSON.stringify(data)
      });
      try {
          const newData = await response.json();
          console.log('Data received:', newData)
          return newData;
      } catch (error) {
          console.log('error', error);
      }
  };

    }


export { handleSubmit }
