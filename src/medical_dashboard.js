const ctx = document.getElementById("lineChart").getContext("2d");

const labels = [
  "Oct 2023",
  "Nov 2023",
  "Dec 2023",
  "Jan 2024",
  "Feb 2024",
  "Nar 2024",
];
const data = {
  labels: labels,
  datasets: [
    {
      label: "Systolic",
      data: [110, 65, 110, 90, 70, 75],
      backgroundColor: "#8C6FE6",
      borderColor: "#7E6CAB",
      borderWidth: 2,
      lineTension: 0.3,
    },
    {
      label: "Diastolic",
      data: [120, 115, 160, 110, 150, 155],
      backgroundColor: "#E66FD2",
      borderColor: "#C26EB4",
      borderWidth: 2,
      lineTension: 0.3,
    },
  ],
};

const config = {
  type: "line",
  data: data,
  options: {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        max: 180,
        min: 60,
        ticks: {
          stepSize: 20,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  },
};

const myChart = new Chart(ctx, config);

// To fetch profile data from API
document.addEventListener("DOMContentLoaded", () => {
  const headers = new Headers();
  let username = "coalition";
  let password = "skills-test";
  let auth = "Basic " + btoa(username + ":" + password);
  console.log(auth);
  const requestOptions = {
    method: "GET",
    headers: headers,
    redirect: "follow",
  };
  try {
    const fetchProfile = async () => {
      const response = await fetch("https://fedskillstest.coalitiontechnologies.workers.dev", requestOptions);
      const fetchData = await response.json();
      let profileData;
      if (fetchData.error) {
        // console.log(data);
        fetch('http://127.0.0.1:5502/src/data.json').then(response => response.json()).then(data => {
          profileData = data[0];
          document.getElementById("profile-photo").src = profileData.profile_picture;
          document.getElementById("profile-id-name").textContent = profileData.name;
          document.getElementById("profile-dob-info").textContent = profileData.date_of_birth;
          document.getElementById("profile-gender-info").textContent = profileData.gender;
          document.getElementById("profile-contact-info").textContent = profileData.phone_number;
          document.getElementById("profile-emergency-contacts-info").textContent = profileData.emergency_contact;
          document.getElementById("profile-insurance-info").textContent = profileData.insurance_type;
        });
      }
    };
    fetchProfile();
  } catch (e) {
    console.log(e);
  }

});
