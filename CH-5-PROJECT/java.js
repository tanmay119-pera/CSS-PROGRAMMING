// Minimal JavaScript purely to handle the mobile sidebar drawer state toggle.
// (Proving that layout, grids, calculations, and interactions live natively in CSS).

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const dashboardContainer = document.querySelector('.dashboard-container');

    if (menuToggle && dashboardContainer) {
        menuToggle.addEventListener('click', () => {
            dashboardContainer.classList.toggle('sidebar-open');
        });

        // Close sidebar when clicking outside on mobile viewports
        document.addEventListener('click', (event) => {
            const isClickInsideSidebar = event.target.closest('.sidebar');
            const isClickOnToggle = event.target.closest('#menu-toggle');

            if (!isClickInsideSidebar && !isClickOnToggle && dashboardContainer.classList.contains('sidebar-open')) {
                dashboardContainer.classList.remove('sidebar-open');
            }
        });
    }
});