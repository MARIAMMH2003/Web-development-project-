document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("search-input").addEventListener("input", function() {
        const container = document.getElementById("search-container");
        container.style.display = "block"; 
        const query = this.value.trim();
        if (query === "") 
            {
            document.getElementById("search-results-container").innerHTML = "";
        } else
         {
            searchMuseumsByName();
        }
    });
    document.getElementById("search-link").addEventListener("click", function() {
        const container = document.getElementById("search-container");
        container.style.display = container.style.display === "none" ? "block" : "none";
    });
    document.getElementById("search-button").addEventListener("click", function() {
        searchMuseumsByName();
    });
    function searchMuseumsByName()
     {
        const search = document.getElementById("search-input").value.trim().toLowerCase();
        const result = document.getElementById("search-results-container");

        if (!search) {
            result.innerHTML = "Please enter a search query";
            return;
        }

        fetch(`/museums/search?name=${encodeURIComponent(search)}`)
            .then(response => {
                if (!response.ok) 
                    {
                    throw new Error('network problem');
                }
                return response.json();
            })
            .then(data => {
                if (data.museums) 
                    {
                    displaySearchResults(data.museums, data.civilizations || []);
                } else 
                {
                    displaySearchResults(museums);
                }
               
            })
            .catch(error => {
                console.error( error);
                result.innerHTML = "Failed to fetch search";
            });
    }

//displaying
    function displaySearchResults(museums, monuments) {
        const result = document.getElementById("search-results-container");
       result.innerHTML = "";
    
        museums.forEach(museum => {
            const museumHTML = `
                <div class="museum">
                    <h2>${museum.title}</h2>
                    <p>${museum.slogan}</p>
                    <img src="${museum.picture}" alt="${museum.title}" style="max-width: 300px;">
                </div>
            `;
           result.innerHTML += museumHTML;
        });
    
        monuments.forEach(monument => {
            const monumentHTML = `
                <div class="civilization">
                    <h2>${monument.name}</h2>
                    <p>${monument.description}</p>
                    <img src="${monument.image}" alt="${monument.name}" style="max-width: 300px;">
                </div>
            `;
            result.innerHTML += monumentHTML;
        });
    }
});

