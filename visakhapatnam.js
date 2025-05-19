    // Project Data
    const projects = {
        'Aero Space': {
            mainImage: 'bogapuram.jpg',
            description: 'A premium residential project strategically located near the upcoming Bhogapuram International Airport. This gated community offers modern amenities, secure living, and excellent appreciation potential.',
            features: [
                'Gated community with 24/7 security',
                'Clubhouse, gym & swimming pool',
                'Landscaped gardens & children\'s play area',
                'Proximity to airport & business district',
                'Variety of unit sizes from 2BHK to 4BHK'
            ],
            images: [
                'Bhogapuram/image 1.jpg',
                'Bhogapuram/image 2.jpg',
                'Bhogapuram/image 3.jpg',
                'Bhogapuram/image 4.jpg',
                'Bhogapuram/image 5.jpg'
            ],
            mapUrl: 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3600.7137198591063!2d83.495175!3d18.0556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDAzJzIwLjIiTiA4M8KwMjknNDIuNiJF!5e1!3m2!1sen!2sin!4v1743713727317!5m2!1sen!2sin',
            benefits: 'Aero Space offers a unique combination of modern living and investment potential. With the upcoming international airport just minutes away, residents will enjoy unparalleled connectivity while benefiting from the peaceful surroundings of Bhogapuram.',
            connectivity: [
                '10 mins to proposed airport terminal',
                'Easy access to NH16',
                'Proposed metro connectivity'
            ],
            investment: [
                'Expected 20-25% annual appreciation',
                'Rental demand from airport staff',
                'First-mover advantage in the area'
            ]
        },
        'Sky Vista': {
            mainImage: 'images/sky-vista-main.jpg',
            description: 'Luxury apartments with panoramic views of the surrounding landscape, offering premium living spaces with high-end finishes.',
            features: [
                'Premium finishes and fixtures',
                'Rooftop terrace with city views',
                'Walking distance to proposed commercial center',
                'Underground parking available',
                'Smart home features'
            ],
            images: [
                'images/sky-vista-1.jpg',
                'images/sky-vista-2.jpg',
                'images/sky-vista-3.jpg',
                'images/sky-vista-4.jpg',
                'images/sky-vista-5.jpg'
            ],
            mapUrl: 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3787.216276370513!2d83.4926000749956!3d18.05559998213847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDAzJzIwLjIiTiA4M8KwMjknNDIuNiJF!5e0!3m2!1sen!2sin!4v1712232482742!5m2!1sen!2sin',
            benefits: 'Sky Vista provides breathtaking views and luxurious living spaces designed for those who appreciate quality and comfort.',
            connectivity: [
                'Direct access to main arterial roads',
                'Close to proposed shopping district',
                'Easy highway access'
            ],
            investment: [
                'Premium property with strong demand',
                'Limited units available',
                'High-end rental potential'
            ]
        },
        'Green Heights': {
            mainImage: 'images/green-heights-main.jpg',
            description: 'Eco-friendly residential community with sustainable features and green spaces designed for modern, environmentally conscious living.',
            features: [
                'Solar-powered common areas',
                'Rainwater harvesting system',
                'Organic garden spaces',
                'Electric vehicle charging stations',
                'Recycling program'
            ],
            images: [
                'images/green-heights-1.jpg',
                'images/green-heights-2.jpg',
                'images/green-heights-3.jpg',
                'images/green-heights-4.jpg',
                'images/green-heights-5.jpg'
            ],
            mapUrl: 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3787.216276370513!2d83.4926000749956!3d18.05559998213847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDAzJzIwLjIiTiA4M8KwMjknNDIuNiJF!5e0!3m2!1sen!2sin!4v1712232482742!5m2!1sen!2sin',
            benefits: 'Green Heights combines sustainable living with modern comforts, offering residents a healthier lifestyle while reducing environmental impact.',
            connectivity: [
                'Close to proposed green belt area',
                'Easy access to public transport routes',
                'Bicycle-friendly neighborhood'
            ],
            investment: [
                'Growing demand for eco-friendly homes',
                'Lower operational costs for residents',
                'Future-proof sustainable design'
            ]
        },
        'Airport Residency': {
            mainImage: 'images/airport-residency-main.jpg',
            description: 'Designed for frequent travelers and aviation professionals, offering convenient access to the upcoming international airport.',
            features: [
                'Quick access to airport terminals',
                'Soundproof construction',
                'Flexible short-term leasing options',
                'Business center with meeting rooms',
                'Airport shuttle service'
            ],
            images: [
                'images/airport-residency-1.jpg',
                'images/airport-residency-2.jpg',
                'images/airport-residency-3.jpg',
                'images/airport-residency-4.jpg',
                'images/airport-residency-5.jpg'
            ],
            mapUrl: 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3787.216276370513!2d83.4926000749956!3d18.05559998213847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDAzJzIwLjIiTiA8M8KwMjknNDIuNiJF!5e0!3m2!1sen!2sin!4v1712232482742!5m2!1sen!2sin',
            benefits: 'Airport Residency is the perfect choice for those who value convenience and connectivity, with thoughtful amenities tailored for travelers.',
            connectivity: [
                '5 minutes to proposed airport terminal',
                'Dedicated airport access road',
                '24/7 taxi and ride-share availability'
            ],
            investment: [
                'High rental demand from aviation professionals',
                'Short-term rental opportunities',
                'Consistent occupancy rates'
            ]
        },
        'The Runway': {
            mainImage: 'images/the-runway-main.jpg',
            description: 'Commercial spaces for businesses looking to capitalize on airport growth, with flexible office and retail configurations.',
            features: [
                'Mixed-use development (retail + office)',
                'High visibility location',
                'Ample parking facilities',
                'Modern architectural design',
                'Flexible floor plans'
            ],
            images: [
                'images/the-runway-1.jpg',
                'images/the-runway-2.jpg',
                'images/the-runway-3.jpg',
                'images/the-runway-4.jpg',
                'images/the-runway-5.jpg'
            ],
            mapUrl: 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3787.216276370513!2d83.4926000749956!3d18.05559998213847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDAzJzIwLjIiTiA4M8KwMjknNDIuNiJF!5e0!3m2!1sen!2sin!4v1712232482742!5m2!1sen!2sin',
            benefits: 'The Runway offers businesses prime commercial space in Bhogapuram\'s emerging aerotropolis, with excellent visibility and accessibility.',
            connectivity: [
                'Direct access to airport approach road',
                'High foot traffic location',
                'Proposed business district proximity'
            ],
            investment: [
                'Commercial property with high growth potential',
                'Diverse tenant opportunities',
                'Long-term lease options available'
            ]
        }
    };

    // Carousel Variables
    let currentCarouselIndex = 1;
    let carouselItems = 0;
    let carouselInterval;

    // Show location details
    function showLocation(locationId) {
        // Hide all location details first
        document.querySelectorAll('.location-details').forEach(el => {
            el.classList.remove('location-active');
        });
        
        // Show selected location
        document.getElementById(locationId + '-details').classList.add('location-active');
        
        // Scroll to the location details
        document.getElementById(locationId + '-details').scrollIntoView({
            behavior: 'smooth'
        });
    }
    
    // Hide location details
    function hideLocation(locationId) {
        document.getElementById(locationId + '-details').classList.remove('location-active');
    }

    // Show Project Details
    function showProjectDetails(projectName) {
        const project = projects[projectName];
        if (!project) return;
        
        // Set basic project info
        document.getElementById('project-modal-title').textContent = `${projectName}, Bhogapuram`;
        document.getElementById('project-modal-description').textContent = project.description;
        document.getElementById('project-modal-benefits').textContent = project.benefits;
        document.getElementById('project-map-iframe').src = project.mapUrl;
        
        // Set the project-specific main image
        document.getElementById('project-main-image').src = project.mainImage;
        
        // Set features list
        const featuresList = document.getElementById('project-modal-features');
        featuresList.innerHTML = '';
        project.features.forEach(feature => {
            const li = document.createElement('li');
            li.textContent = feature;
            featuresList.appendChild(li);
        });
        
        // Set connectivity list
        const connectivityList = document.getElementById('project-connectivity');
        connectivityList.innerHTML = '';
        project.connectivity.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            connectivityList.appendChild(li);
        });
        
        // Set investment list
        const investmentList = document.getElementById('project-investment');
        investmentList.innerHTML = '';
        project.investment.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            investmentList.appendChild(li);
        });
        
        // Setup carousel
        const carouselTrack = document.getElementById('project-carousel-track');
        carouselTrack.innerHTML = '';
        
        if (project.images && project.images.length > 0) {
            project.images.forEach(img => {
                const slide = document.createElement('div');
                slide.className = 'carousel-slide';
                slide.innerHTML = `<img src="${img}" alt="${projectName}">`;
                carouselTrack.appendChild(slide);
            });
            
            // Clone first and last images for infinite effect
            const firstClone = carouselTrack.children[0].cloneNode(true);
            const lastClone = carouselTrack.children[project.images.length - 1].cloneNode(true);
            
            carouselTrack.insertBefore(lastClone, carouselTrack.children[0]);
            carouselTrack.appendChild(firstClone);
            
            // Set initial position
            carouselTrack.style.transform = `translateX(-${250}px)`;
            currentCarouselIndex = 1;
            carouselItems = project.images.length + 2; // Original + 2 clones
            
            // Start auto-scrolling
            startCarousel();
        }
        
        // Show modal
        document.getElementById('project-details-modal').style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
    
    // Close Project Details
    function closeProjectDetails() {
        document.getElementById('project-details-modal').style.display = 'none';
        document.body.style.overflow = 'auto';
        stopCarousel();
    }
    
    // Carousel Navigation
    function moveCarousel(direction) {
        const track = document.getElementById('project-carousel-track');
        
        currentCarouselIndex += direction;
        track.style.transition = 'transform 0.5s ease';
        track.style.transform = `translateX(-${currentCarouselIndex * 250}px)`;
        
        // Handle infinite loop
        if (currentCarouselIndex === 0) {
            setTimeout(() => {
                track.style.transition = 'none';
                currentCarouselIndex = carouselItems - 2;
                track.style.transform = `translateX(-${currentCarouselIndex * 250}px)`;
            }, 500);
        }
        
        if (currentCarouselIndex === carouselItems - 1) {
            setTimeout(() => {
                track.style.transition = 'none';
                currentCarouselIndex = 1;
                track.style.transform = `translateX(-${currentCarouselIndex * 250}px)`;
            }, 500);
        }
    }
    
    // Auto-scroll Carousel
    function startCarousel() {
        stopCarousel();
        carouselInterval = setInterval(() => {
            moveCarousel(1);
        }, 3000);
    }
    
    function stopCarousel() {
        clearInterval(carouselInterval);
    }
    
    // Image Zoom Functionality
    function adjustZoom(imageId, direction) {
        const image = document.getElementById(imageId);
        let currentScale = image.dataset.scale ? parseFloat(image.dataset.scale) : 1;
        
        if (direction === 'in') {
            currentScale += 0.1;
        } else {
            currentScale = Math.max(0.5, currentScale - 0.1);
        }
        
        image.style.transform = `scale(${currentScale})`;
        image.dataset.scale = currentScale; // Store the scale value
    }
    
    function resetZoom(imageId) {
        const image = document.getElementById(imageId);
        image.style.transform = 'scale(1)';
        image.dataset.scale = 1;
    }
    
    // Full Image Modal
    function openFullImage(imageId) {
        const image = document.getElementById(imageId);
        const modal = document.getElementById('full-image-modal');
        const modalImage = document.getElementById('full-image-view');
        
        modalImage.src = image.src;
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
    
    function closeFullImage() {
        const modal = document.getElementById('full-image-modal');
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    
    function adjustModalZoom(direction) {
        const image = document.getElementById('full-image-view');
        let currentScale = image.style.transform ? parseFloat(image.style.transform.replace('scale(', '').replace(')', '')) : 1;
        
        if (direction === 'in') {
            currentScale += 0.1;
        } else {
            currentScale = Math.max(0.5, currentScale - 0.1);
        }
        
        image.style.transform = `scale(${currentScale})`;
    }
    
    function resetModalZoom() {
        const image = document.getElementById('full-image-view');
        image.style.transform = 'scale(1)';
    }
    
    // Event Listeners
    document.addEventListener('DOMContentLoaded', function() {
        // Pause carousel on modal hover
        document.getElementById('project-details-modal').addEventListener('mouseenter', stopCarousel);
        document.getElementById('project-details-modal').addEventListener('mouseleave', startCarousel);
        
        // Close modals when clicking outside content
        window.addEventListener('click', function(event) {
            // Full image modal
            const fullImageModal = document.getElementById('full-image-modal');
            if (event.target === fullImageModal) {
                closeFullImage();
            }
            
            // Project details modal
            const projectModal = document.getElementById('project-details-modal');
            if (event.target === projectModal) {
                closeProjectDetails();
            }
        });
    });

    