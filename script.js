        // Scroll to top button functionality
        const scrollTopBtn = document.getElementById("scrollTopBtn");
        window.onscroll = function() {
            if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
                scrollTopBtn.style.display = "block";
            } else {
                scrollTopBtn.style.display = "none";
            }
        };
        scrollTopBtn.onclick = function() {
            window.scrollTo({ top: 1, behavior: 'smooth' });
        };
