const userAction = async () => {
  const response = await fetch('http://192.168.1.20:8080/workout/person/99/getDummy');
  const myJson = await response.json(); //extract JSON from the http response
  // do something with myJson
}