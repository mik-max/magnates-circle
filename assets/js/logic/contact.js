document.addEventListener('DOMContentLoaded', function(){
    
    
});

let contactArray = [
    {
        id: 1,
        state: "Lagos",
        location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4964.433594341297!2d3.351514977871041!3d6.634581118516276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93e96541ab83%3A0xd60c555347f8c8d4!2s21a%20Lateef%20Jakande%20Rd%2C%20Agidingbi%20100000%2C%20Ikeja!5e0!3m2!1sen!2sng!4v1644255345364!5m2!1sen!2sng",
        phoneNumber: "+(234) 806 412 0099",
        address: "21A Lateef Jakande Road Agidingbi Ikeja Lagos Nigeria"
    },
    {
        id: 2,
        state: "Abuja",
        location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63042.703424821724!2d7.408706616362689!3d9.048347602420083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e7516466627c3%3A0x3f6ef79cf4b8d52b!2sJabi%20Lake%20Mall!5e0!3m2!1sen!2sng!4v1644358638347!5m2!1sen!2sn",
        phoneNumber: "08060019208",
        address: "71 radi Jabii Area Abuja."
    },
    {
        id: 3,
        state: "Kano",
        location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.9919838489354!2d8.533697314296528!3d12.044072237809834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae86da79948705%3A0xb30620d050da411f!2sNcaa%20Aviation%20Quarters!5e0!3m2!1sen!2sng!4v1644358790584!5m2!1sen!2sng",
        phoneNumber: "09157823594",
        address: "Thelma house Aviation Avenue Airport Road Kano state"
    },
    {
        id: 4,
        state: "Ilorin",
        location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3893.81324654784!2d4.591292338900937!3d8.43611075392934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1037b2dd52ecffe1%3A0x7e1af4d479f7df2a!2sOlunlade%20Bus%20Stop!5e0!3m2!1sen!2sng!4v1644263039122!5m2!1sen!2sng",
        phoneNumber: "08023054581",
        address: "98, Akapoti Street Kaore Olunlade Area Ilorin, Kwara State"
    }
]
function myFunction(){
    let state = document.getElementById('state').value;
    for( let x = 0; x < contactArray.length; x++){
        if(state == contactArray[x].state){
            document.getElementById('address').innerHTML = contactArray[x].address;
            document.getElementById('phoneNumber').innerHTML = contactArray[x].phoneNumber;
            document.getElementById('location').src = contactArray[x].location;
        }else{
            
        }
    }
}