let selectedOS = null;
let selectedPM = null;
let selectedPackages = new Set();

document.addEventListener('DOMContentLoaded', () => {
    const pmButtons = document.querySelectorAll('.pm-btn');
    const packageSelector = document.getElementById('package-selector');
    const searchInput = document.getElementById('search-packages');
    const categoryFilter = document.getElementById('category-filter');
    const commandOutput = document.getElementById('command-output');
    const copyButton = document.getElementById('copy-command');

    pmButtons.forEach(button => {
        button.addEventListener('click', () => {
            pmButtons.forEach(btn => btn.classList.remove('border-blue-500'));
            button.classList.add('border-blue-500');
            
            // Clear selections when changing package manager
            selectedPackages.clear();
            document.querySelectorAll('.package-card').forEach(card => {
                card.classList.remove('border-blue-500');
            });
            document.getElementById('command-output').classList.add('hidden');
            
            selectedPM = button.dataset.pm;
            showPackages();
        });
    });

    // Show all packages initially but disable clicking until PM is selected
    renderPackages();
    const packagesGrid = document.getElementById('packages-grid');
    packagesGrid.classList.add('pointer-events-none', 'opacity-50');

    // Enable package selection after PM is chosen
    pmButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            packagesGrid.classList.remove('pointer-events-none', 'opacity-50');
        });
    });

    // Update showPackages function
    function showPackages() {
        const pmOverlay = document.getElementById('pm-overlay');
        pmOverlay.style.display = 'none';
        
        // Re-render packages to update availability based on selected PM
        renderPackages(
            document.getElementById('search-packages').value,
            document.querySelector('#category-filter .active').dataset.category
        );
    }

    function renderPackages(searchTerm = '', category = 'all') {
        const packagesGrid = document.getElementById('packages-grid');
        packagesGrid.innerHTML = '';

        Object.entries(packagesDB).forEach(([cat, packages]) => {
            if (category !== 'all' && category !== cat) return;

            Object.entries(packages).forEach(([name, managers]) => {
                if (searchTerm && !name.toLowerCase().includes(searchTerm.toLowerCase())) return;

                const card = document.createElement('div');
                const isAvailable = selectedPM && managers[selectedPM];
                
                card.className = `package-card p-6 bg-white rounded-lg border-2 
                    ${isAvailable ? 'border-gray-200 hover:border-blue-500 cursor-pointer' : 'border-gray-100'} 
                    ${selectedPackages.has(name) ? 'border-blue-500' : ''}
                    ${!isAvailable ? 'opacity-50' : ''}
                    transform transition-all`;

                card.innerHTML = `
                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <img src="${managers.icon}" alt="${name} icon" class="w-6 h-6 mr-3">
                            <h3 class="font-semibold">${name}</h3>
                        </div>
                        <span class="text-sm px-2 py-1 rounded-full bg-${getCategoryColor(cat)}-100 text-${getCategoryColor(cat)}-700">
                            ${cat}
                        </span>
                    </div>
                    ${managers.description ? `<p class="mt-2 text-sm text-gray-600">${managers.description}</p>` : ''}
                `;

                if (isAvailable) {
                    card.addEventListener('click', () => {
                        card.classList.toggle('border-blue-500');
                        if (selectedPackages.has(name)) {
                            selectedPackages.delete(name);
                        } else {
                            selectedPackages.add(name);
                        }
                        updateCommand();
                        updateSelectedCount(); // Add this line
                    });
                }

                packagesGrid.appendChild(card);
            });
        });
    }

    // Add event listener for auto-yes checkbox
    document.getElementById('auto-yes').addEventListener('change', () => {
        if (selectedPackages.size > 0) {
            updateCommand();
        }
    });

    function updateCommand() {
        if (selectedPackages.size === 0) {
            commandOutput.classList.add('hidden');
            return;
        }

        commandOutput.classList.remove('hidden');
        const packages = Array.from(selectedPackages)
            .map(name => packagesDB[getCategory(name)][name][selectedPM]);
        
        const autoYes = document.getElementById('auto-yes').checked;
        let command = '';

        switch (selectedPM) {
            case 'chocolatey':
                command = `choco install ${packages.join(' ')}${autoYes ? ' -y' : ''}`;
                break;
            case 'winget':
                command = `winget install ${packages.join(' ')}${autoYes ? ' -h --accept-package-agreements' : ''}`;
                break;
            case 'scoop':
                command = `scoop install ${packages.join(' ')}`;
                break;
            case 'homebrew':
                command = `brew install ${packages.join(' ')}`;
                break;
            case 'apt':
                command = `sudo apt install ${packages.join(' ')}${autoYes ? ' -y' : ''}`;
                break;
            case 'flatpak':
                command = `flatpak install ${packages.join(' ')}${autoYes ? ' -y' : ''}`;
                break;
            case 'yay':
                command = `yay -S ${packages.join(' ')}${autoYes ? ' --noconfirm' : ''}`;
                break;
        }

        document.getElementById('command-text').textContent = command;
        
    }

    function getCategory(packageName) {
        for (const [category, packages] of Object.entries(packagesDB)) {
            if (packageName in packages) return category;
        }
    }

    // Search and filter functionality
    searchInput.addEventListener('input', (e) => {
        renderPackages(e.target.value, categoryFilter.querySelector('.active').dataset.category);
    });

    categoryFilter.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            categoryFilter.querySelectorAll('button').forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
            renderPackages(searchInput.value, e.target.dataset.category);
        }
    });

    // Copy command functionality
    copyButton.addEventListener('click', () => {
        const command = document.getElementById('command-text').textContent;
        navigator.clipboard.writeText(command)
            .then(() => {
                copyButton.innerHTML = '<i class="fas fa-check"></i>';
                setTimeout(() => {
                    copyButton.innerHTML = '<i class="far fa-copy"></i>';
                }, 2000);
            });
    });

    // Add reset functionality
    document.getElementById('Reset').addEventListener('click', () => {
        // Clear selected packages
        selectedPackages.clear();
        updateSelectedCount(); // Add this line
        // Remove selection styling from all package cards
        document.querySelectorAll('.package-card').forEach(card => {
            card.classList.remove('border-blue-500');
        });
        
        // Hide command output
        document.getElementById('command-output').classList.add('hidden');
        
        // Uncheck auto-yes checkbox if present
        const autoYesCheckbox = document.getElementById('auto-yes');
        if (autoYesCheckbox) {
            autoYesCheckbox.checked = false;
        }
    });
});

// Add these helper functions
function getCategoryIcon(category) {
    const icons = {
        browsers: 'fa-globe',
        development: 'fa-code',
        utilities: 'fa-tools',
        media: 'fa-play-circle'
    };
    return icons[category] || 'fa-box';
}

function getCategoryColor(category) {
    const colors = {
        browsers: 'blue',
        messaging: 'indigo',
        security: 'red',
        media: 'purple',
        utilities: 'yellow',
        filesharing: 'green',
        creative: 'pink',
        compression: 'orange',
        cloud: 'sky',
        documents: 'slate',
        writing: 'emerald',
        gaming: 'violet',
        devlang: 'cyan',
        devtools: 'teal'
    };
    return colors[category] || 'gray';
}

// Add this function after your existing functions
function updateSelectedCount() {
    const countElement = document.getElementById('selected-count');
    countElement.textContent = `(${selectedPackages.size} selected)`;
}

// Call it initially to show (0 selected)
updateSelectedCount();