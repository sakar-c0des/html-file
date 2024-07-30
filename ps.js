function showLoginPopup() {
    document.getElementById('loginPopup').style.display = 'block';
}

// Function to close the login popup
function closeLoginPopup() {
    document.getElementById('loginPopup').style.display = 'none';
}

// Add event listener for window load
window.addEventListener('load', showLoginPopup);

// Add event listener for the close button
document.getElementById('closePopup').addEventListener('click', closeLoginPopup);

// Optional: Close the popup when the user clicks outside of the popup content
window.addEventListener('click', function(event) {
    const popup = document.getElementById('loginPopup');
    if (event.target == popup) {
        closeLoginPopup();
    }
});               



        function showsidebar() {
            const sidebar = document.querySelector(".sidebar")
            sidebar.style.display = 'flex'

        }
        function removeside() {
            const remove = document.querySelector(".sidebar")
            remove.style.display = 'none';
        }

        window.onclick = function removeside() {
            if (event.target == document.querySelector(".sidebar")) {
                document.querySelector(".sidebar").style.display = 'none';
            }
        }

        // modification


        document.getElementsByClassName('hideo12')

        function showlogin() {
            document.getElementById('loginPopup').style.display = 'flex';
        };

        document.getElementById('closePopup').onclick = function () {
            document.getElementById('loginPopup').style.display = 'none';
        };

        window.onclick = function (event) {
            if (event.target == document.getElementById('loginPopup')) {
                document.getElementById('loginPopup').style.display = 'none';
            }
        };



        const logoElement = document.getElementById('logo');
        logoElement.addEventListener('click', () => {
            window.location.reload();
        });