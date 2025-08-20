   // Mobile Navigation
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');

        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });

        // Resume Download
        document.getElementById('resume-btn').addEventListener('click', function(e) {
            e.preventDefault();
            // Replace with your actual resume link
            window.open('https://drive.google.com/file/d/1eb4DfZAYtz01csLn4rR9vWmWo73Yxifp/view?usp=sharing', '_blank');
            
            // Create a temporary link for download
            const link = document.createElement('a');
            link.href = 'arpitResume (2).pdf';
            link.download = 'Arpit-Resume.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });

        // document.getElementById('hero-resume-btn').addEventListener('click', function(e) {
        //     e.preventDefault();
        //     // Same functionality as above
        //     window.open('https://resume-builder-test-new.masaischool.com/resume/public?resumeId=68621e0d0f08b606c35b9000', '_blank');
            
        //     const link = document.createElement('a');
        //     link.href = 'arpitR.pdf';
        //     link.download = 'Arpit-Resume.pdf';
        //     document.body.appendChild(link);
        //     link.click();
        //     document.body.removeChild(link);
        // });

        // Form Submission
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the form data to a server
            // For demonstration, we'll just log it and show an alert
            console.log({ name, email, subject, message });
            alert('Thank you for your message! I will get back to you soon.');
            
            // Reset the form
            this.reset();
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });