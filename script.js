const districts = {
  "Andaman and Nicobar Islands": ["North and Middle Andaman"],
  "Andhra Pradesh": ["Anantapur", "East Godavari", "Guntur","Kadapa", "Kurnool", "Nellore","Srikakualm", "Vishakapatnam", "Vijayanagaram"],
  Bihar: ["Aurangabad", "Bhojpur", "Darbhanga","East Champaran", "Patna", "Samastipur","Siwan", "West Champaran"],
  Chandigarh: ["Chandigarh"],
  Chattisgarh: ["Bastar", "Janjgir-Champa", "Korba","Raigarh", "Raipur"],
  Delhi: ["New Delhi", "South Delhi"],
  Goa: ["North Goa"],
  Gujarat: ["Ahmedabad", "Kachchh"],
  Haryana: ["Ambala", "Faridabad", "Gurgaon","Karnal", "Kurukshetra", "Rewari","Sonipat", "Yamuna Nagar"],
  "Jammu and Kashmir": ["Jammu","Samba","Srinagar"],
  Jharkhand: ["Bokaro", "Deoghar", "Godda"],
  Karnataka: ["Belgaum", "Bengalore", "Chitradurga","Hubli"],
  Kerala: ["Alappuzha", "Ernakulam", "Kasargod","Kollam","Kottayam","Malappuram","Thrissur"],
  "Madhya Pradesh": ["Chhatarpur", "Dhar", "Indore","Rewa","Sagar"],
  Maharashtra: ["Mumbai","Nanded","Pune","Solapur","Thane"],
  Punjab: ["Jalandhar","Ludhiana","Mohali"],
  Raipur: ["Ajmer", "Alwar", "Banswara","Barmer","Bikaner","Dungarpur","Ganganagar","Hanumangarh","Jaipur","Jhunjhunu","Jodhpur","Nagaur","Pali","Rajsamand","Sirohi","Udaipur"],
  Tamilnadu: ["Chennai","Cuddalore","Coimbatore","Tiruvannamalai","Vellore"],
  Telengana: ["Hyderabad","Medak"],
  Tripura: ["West Tripura"],
  "Uttar Pradesh": ["Jaunpur","Kheri","Lucknow","Noida","Pratapgarh","Raebareli"],
  Uttarakhand: ["Udham Singh Nagar"],
  "West Bengal": ["Bankura","Bardhaman","Birbhum","Howrah","Kolkata","Midnapore","Nadia","North 24 Parganas"]

};

const institutions = {
  "North and Middle Andaman": ["BVB Mondal Public Secondary School"],
  "Anantapur": ["Sri Satya Sai Students and Staff Welfare"],
  "East Godavari": ["Sri Joy Educational Soceity Kakinada"],
  "Guntur": ["RV Institute of Technology", "Mmbg Tirupati", "BVR High School Nambur"],
  "Kadapa": ["Yogi Vemana University"],
  "Kurnool": ["The Orion School"],
  "Nellore": ["Geethanjali Institute of Science and Technology", "Visvodaya Institute of Technology and Science", "Institution 21"],
  "Srikakulam": ["Sri Kumar Degree College Haripuram"],
  "Vishakapatnam": ["MSR National Degree College Munagapaka"],
  "Vijayanagaram": ["Sri Krishna Chaitanya Educational Soceity Makkuva"],
  "Aurangabad": ["St Xaviers High School"],
  "Bhojpur": ["Sixth Sense International School"],
  "Darbhanga": ["New Horizon Public School"],
  "East Champaran": ["Awasiya Delhi Public School Bettiah"],
  "Patna": ["Arcade Business College","Delhi World Public School"],
  "Samastipur": ["Vivekanand Public School"],
  "Siwan": ["DVM Public School"],
  "West Champaran": ["Awasiya Delhi Public School"],
  "Chandigarh": ["Indo Global Education Foundation"],
  "Bastar": ["Ham Academy"],
  "Jangir-Champa": ["Green Valley Public School Baloda"],
  "Korba": ["Saraswati Shishu Mandir Machadoli"],
  "Raigarh": ["O P Jindal School"],
  "Raipur": ["Advani Oerlikon Govt Hr Sec School"],
  "New Delhi": ["Adarsh Gyan Modern Public School", "Masonic Public School", "Guru Tegh Bahadur Institute of Technology"],
  "South Delhi": ["Kendriya Vidyalaya Sangathan"],
  "North Goa": ["The Peoples High School"],
  "Ahmedabad": ["Asia Charitable Trust"],
  "Kachchh": ["Savvy International School"],
  "Ambala": ["Sa Jain Senior Model School"],
  "Faridabad": ["Blue Birds School","John F Kennedy Public School"],
  "Gurgaon": ["Akash Public School","Blue Bells Preparatory School"],
  "Karnal": ["Ops Vidya Mandir School"],
  "Kurukshetra": ["St. Thomus Convent School"],
  "Rewari": ["Parwati Memorial School"],
  "Sonipat": ["Motilal Nehru School of Sports"],
  "Yamuna Nagar": ["Haryana Engineering College","Mukand Public School"],
  "Jammu": ["Little Angeels School Vijaypur"],
  "Samba": ["Shishu Shiksha Niketan Academy Mansar"],
  "Srinagar": ["Minto Circle Educational Trust"],
  "Bokaro": ["Gourac Awasiya Uchcha Vidyalaya","Giru Gobind Singh Public School"],
  "Deoghar": ["St.Josephs School"],
  "Godda": ["SBSSPSJ College"],
  "Belgaum": ["H M Deverendra Jinagouda English Medium Hogh School"],
  "Bengalore": ["IIIT Bangalore","AMRITA VISHWA VIDYAPEETHAM"],
  "Chitradurga": ["Principal and NSS Officer NSS Unit SJM Dental College and Hospital"],
  "Hubli": ["Deshpande Educational Trust"],
  "Alappuzha": ["Food Craft Institute of Cherthala"],
  "Ernakulam": ["Jyoti Nivas Public School,Aluva"],
  "Kasargod": ["Food Craft Institute Uduma"],
  "Kollam": ["AMRITA Kollam","KNG Unnithan Central School"],
  "Kottayam": ["Food Craft Institute Kottayam"],
  "Malappuram": ["Food Craft Institute Perinthalmanna"],
  "Thrissur": ["Food Craft Institute Thrissur"," Hayath Charitable Trust Global Public School"],
  "Chhatarpur": ["Govt Naveen College Rajnagar","Phoolchandra Jain Monument School Ghuwara"],
  "Dhar": ["Institution 25", "Institution 26", "Institution 27"],
  "Indore": ["Institution 1", "Institution 2", "Institution 3"],
  "Rewa": ["Institution 4", "Institution 5", "Institution 6"],
  "Sagar": ["Institution 7", "Institution 8", "Institution 9"],
  "Mumbai": ["IIT BOMBAY"],
  "Nanded": ["Institution 13", "Institution 14", "Institution 15"],
  "Pune": ["Institution 16", "Institution 17", "Institution 18"],
  "Solapur": ["Institution 19", "Institution 20", "Institution 21"],
  "Thane": ["Institution 22", "Institution 23", "Institution 24"],
  "Jalandhar": ["Institution 25", "Institution 26", "Institution 27"],
  "Ludhiana": ["Institution 1", "Institution 2", "Institution 3"],
  "Mohali": ["Institution 4", "Institution 5", "Institution 6"],
  "Ajmer": ["Institution 7", "Institution 8", "Institution 9"],
  "Alwar": ["Institution 10", "Institution 11", "Institution 12"],
  "Banswara": ["Institution 13", "Institution 14", "Institution 15"],
  "Barmer": ["Institution 16", "Institution 17", "Institution 18"],
  "Bikaner": ["Institution 19", "Institution 20", "Institution 21"],
  "Dungarpur": ["Institution 22", "Institution 23", "Institution 24"],
  "Ganganagar": ["Institution 25", "Institution 26", "Institution 27"],
  "Hanumangarh": ["Institution 1", "Institution 2", "Institution 3"],
  "Jaipur": ["Institution 4", "Institution 5", "Institution 6"],
  "Jhunjhunu": ["Institution 7", "Institution 8", "Institution 9"],
  "Jodhpur": ["Institution 10", "Institution 11", "Institution 12"],
  "Nagaur": ["Institution 13", "Institution 14", "Institution 15"],
  "Pali": ["Institution 16", "Institution 17", "Institution 18"],
  "Rajsamand": ["Institution 19", "Institution 20", "Institution 21"],
  "Sirohi": ["Institution 22", "Institution 23", "Institution 24"],
  "Udaipur": ["Institution 25", "Institution 26", "Institution 27"],
  "Chennai": ["SRM","IIT Chennai"],
  "Cuddalore": ["Institution 4", "Institution 5", "Institution 6"],
  "Coimbatore": ["AMRITA VISHWA VIDYAPEETHAM","IIT Palakkad"],
  "Tiruvannamalai": ["IIIT Kanchi,NIT TIRUCHINAPALLI"],
  "Vellore": ["VIT"],
  "Hyderabad": ["CBIT", "JNTU", "IIIT HYDERABAD"],
  "Medak": ["Institution 19", "Institution 20", "Institution 21"],
  "West Tripura": ["Institution 22", "Institution 23", "Institution 24"],
  "Jaunpur": ["Institution 25", "Institution 26", "Institution 27"],
  "Kheri": ["Institution 1", "Institution 2", "Institution 3"],
  "Lucknow": ["Institution 4", "Institution 5", "Institution 6"],
  "Noida": ["Institution 7", "Institution 8", "Institution 9"],
  "Pratapgarh": ["Institution 10", "Institution 11", "Institution 12"],
  "Raebareli": ["Institution 13", "Institution 14", "Institution 15"],
  "Udham Singh Nagar": ["Institution 16", "Institution 17", "Institution 18"],
  "Bankura": ["Institution 19", "Institution 20", "Institution 21"],
  "Bardhaman": ["Institution 22", "Institution 23", "Institution 24"],
  "Howrah": ["Institution 25", "Institution 26", "Institution 27"],
  "Kolkata": ["IIT Kharagpur"],
  "Midnapore": ["Institution 4", "Institution 5", "Institution 6"],
  "Nadia": ["Institution 7", "Institution 8", "Institution 9"],
  "North 24 Parganas": ["Institution 10", "Institution 11", "Institution 12"]
};

function populateDistricts() {
  const stateSelect = document.getElementById("state");
  const districtSelect = document.getElementById("district");
  const selectedState = stateSelect.value;
  
  districtSelect.innerHTML = "<option value=''>--Select District--</option>";
  districtSelect.disabled = false;
  
  if (selectedState !== "") {
    const districtList = districts[selectedState];
    districtList.forEach(district => {
      const option = document.createElement("option");
      option.value = district;
      option.textContent = district;
      districtSelect.appendChild(option);
    });
  } else {
    districtSelect.disabled = true;
  }

  document.getElementById("institution").innerHTML = "<option value=''>--Select Institution--</option>";
  document.getElementById("institution").disabled = true;
}

function populateInstitutions() {
  const districtSelect = document.getElementById("district");
  const institutionSelect = document.getElementById("institution");
  const selectedDistrict = districtSelect.value;
  
  institutionSelect.innerHTML = "<option value=''>--Select Institution--</option>";
  institutionSelect.disabled = false;
  
  if (selectedDistrict !== "") {
    const institutionList = institutions[selectedDistrict];
    institutionList.forEach(institution => {
      const option = document.createElement("option");
      option.value = institution;
      option.textContent = institution;
      institutionSelect.appendChild(option);
    });
  } else {
    institutionSelect.disabled = true;
  }
}
function proceed() {
    console.log("Proceed function called");
    const state = document.getElementById("state").value;
    const district = document.getElementById("district").value;
    const institution = document.getElementById("institution").value;
    
    console.log("State:", state);
    console.log("District:", district);
    console.log("Institution:", institution);
    
    window.location.href = `result.html?state=${state}&district=${district}&institution=${institution}`;
}
