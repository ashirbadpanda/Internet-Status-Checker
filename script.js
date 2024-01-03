window.addEventListener("load", checkInternetConnection);

function checkInternetConnection() {
    const statusText = document.getElementById('statusText');
    const ipAddressTest = document.getElementById('ipAddressTest');
    const networkStrengthText = document.getElementById('networkStrengthText');

    statusText.textContent = 'checking....';
    if (navigator.onLine) {
        fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then((data)=>{
            ipAddressTest.textContent = data.ip;
            statusText.textContent = 'Connected';

            const networkStrength = navigator.connection ? navigator.connection.downlink + 'Mb/s' : 'Unknown';
            networkStrengthText.textContent = networkStrength;
        })
        .catch(()=>{
            statusText.textContent = 'Disconnected';
            ipAddressTest.textContent = '-';
            networkStrengthText.textContent = '-';
        });

    } else {
        statusText.textContent = 'Disconnected';
        ipAddressTest.textContent = '-';
        networkStrengthText.textContent = '-';
    }
}
