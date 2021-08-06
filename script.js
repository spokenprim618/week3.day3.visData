function createProfile(person) {
   let body=document.querySelector('body');
    let newElement= document.createElement('p');//createed p ele

    newElement.innerHTML = person.name['title']+person.name['first']+person.name['last'];//putting text into the p
    
    body.appendChild(newElement);//appending para to body
    
    let local=document.createElement('p');
    local.innerHTML=person.location.street['number']+person.location.street['name'] +person.location.city+person.location.state+person.location.country+person.location.postcode+person.location.coordinates.latitude+person.location.coordinates.longitude;
    body.appendChild(local);
    
    let Time=document.createElement('p');
     Time.innerHTML=person.location.timezone['offset'] +person.location.timezone.description;
     body.appendChild(Time);

    let Gmail=document.createElement('p');
    Gmail.innerHTML=person.email;
    body.appendChild(Gmail);
    let loginInfo = document.createElement('p');
    loginInfo.innerHTML=person.login.uuid+person.login.username+person.login.password+person.login.salt+person.login.md5+person.login.sha1+person.login.sha256;
    body.appendChild(loginInfo);
    
    let dateOfBirth=document.createElement('p');
    dateOfBirth.innerHTML=person.dob.date+person.dob.age;
    body.appendChild(dateOfBirth);
    let registration=document.createElement('p');
    registration.innerHTML=person.registered.date+person.registered.age;
    body.appendChild(registration);
    let contact= document.createElement('p');
    contact.innerHTML=person.phone+person.cell;
    body.appendChild(contact);
    let ids=document.createElement('p');
    ids.innerHTML=person.id.name+person.id.value;
    body.appendChild(ids);


let natType=document.createElement('p')
natType.innerHTML=person.nat;
body.appendChild(natType);

    let newPic=document.createElement('img');//create img
    
    newPic.src=person.picture['large'];//create route for image to loud
    
    body.appendChild(newPic);//appending img to body
 
  

 }
 
 
 for(let i = 0; i < data.results.length; i++) {
    
      createProfile(data.results[i]);
 }

