document.getElementById('jobForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const company = document.getElementById('company').value;
    const description = document.getElementById('description').value;

    const jobList = document.getElementById('jobList');
    const jobItem = document.createElement('li');

    const jobTitle = document.createElement('h3');
    jobTitle.textContent = title;
    jobItem.appendChild(jobTitle);

    const jobCompany = document.createElement('p');
    jobCompany.innerHTML = '<strong>Company:</strong> ' + company;
    jobItem.appendChild(jobCompany);

    const jobDescription = document.createElement('p');
    jobDescription.textContent = description;
    jobItem.appendChild(jobDescription);

    jobList.appendChild(jobItem);

    document.getElementById('jobForm').reset();
});
