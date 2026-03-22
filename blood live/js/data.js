// Initial Mock Data
const INITIAL_DATA = {
    donors: [
        { id: 1, name: 'John Doe', bloodGroup: 'A+', city: 'Chennai', phone: '9876543210', lastDonation: '2023-11-20', available: true },
        { id: 2, name: 'Jane Smith', bloodGroup: 'O-', city: 'Coimbatore', phone: '8765432109', lastDonation: '2024-01-15', available: true },
        { id: 3, name: 'Mike Ross', bloodGroup: 'B+', city: 'Chennai', phone: '7654321098', lastDonation: '2023-10-10', available: false },
        { id: 4, name: 'Sarah Lee', bloodGroup: 'AB+', city: 'Madurai', phone: '6543210987', lastDonation: '2024-02-01', available: true },
        { id: 5, name: 'David Kim', bloodGroup: 'A-', city: 'Salem', phone: '5432109876', lastDonation: '2023-09-05', available: true }
    ],
    requests: [
        { id: 1, patientName: 'Ravi Kumar', bloodGroup: 'B+', hospital: 'Apollo Hospital', city: 'Chennai', contact: '9988776655', urgent: true, timestamp: new Date().toISOString() },
        { id: 2, patientName: 'Anita Raj', bloodGroup: 'O-', hospital: 'GKNM Hospital', city: 'Coimbatore', contact: '8877665544', urgent: false, timestamp: new Date(Date.now() - 86400000).toISOString() }
    ],
    banks: [
        { id: 1, name: 'Red Cross Blood Bank', city: 'Chennai', stock: { 'A+': 10, 'A-': 2, 'B+': 15, 'B-': 1, 'AB+': 5, 'AB-': 0, 'O+': 20, 'O-': 3 } },
        { id: 2, name: 'Govt Hospital Blood Bank', city: 'Coimbatore', stock: { 'A+': 8, 'A-': 5, 'B+': 12, 'B-': 4, 'AB+': 2, 'AB-': 1, 'O+': 15, 'O-': 2 } }
    ]
};

// Data Management Functions
const DataManager = {
    init: function () {
        if (!localStorage.getItem('bloodLink_donors')) {
            localStorage.setItem('bloodLink_donors', JSON.stringify(INITIAL_DATA.donors));
            console.log('Donors initialized');
        }
        if (!localStorage.getItem('bloodLink_requests')) {
            localStorage.setItem('bloodLink_requests', JSON.stringify(INITIAL_DATA.requests));
            console.log('Requests initialized');
        }
        if (!localStorage.getItem('bloodLink_banks')) {
            localStorage.setItem('bloodLink_banks', JSON.stringify(INITIAL_DATA.banks));
            console.log('Blood Banks initialized');
        }
    },

    getDonors: () => JSON.parse(localStorage.getItem('bloodLink_donors') || '[]'),
    getRequests: () => JSON.parse(localStorage.getItem('bloodLink_requests') || '[]'),
    getBanks: () => JSON.parse(localStorage.getItem('bloodLink_banks') || '[]'),

    addDonor: (donor) => {
        const donors = DataManager.getDonors();
        donor.id = Date.now();
        donors.push(donor);
        localStorage.setItem('bloodLink_donors', JSON.stringify(donors));
        return donor;
    },

    addRequest: (request) => {
        const requests = DataManager.getRequests();
        request.id = Date.now();
        request.timestamp = new Date().toISOString();
        requests.unshift(request); // Add to top
        localStorage.setItem('bloodLink_requests', JSON.stringify(requests));
        return request;
    }
};

// Initialize on load
DataManager.init();
