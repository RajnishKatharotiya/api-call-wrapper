export const apiList = {
    cities: {url:'cities', method: 'GET'},
    postCities: {url:'cities', method: 'POST'},
    deleteCities: {url:'cities', method: "DELETE"},
    putCities: {url:'cities', method: 'PUT'},

    areas: {url:'areas', method: 'GET'},
    postArea: {url:'areas', method: 'POST'},
    deleteArea: {url:'areas', method: "DELETE"},
    putArea: {url:'areas', method: 'PUT'},

    mandirSelectBox: {url: 'mandirs/selectBox', method: 'GET'},
    mandalSelectBox: {url: 'mandals/selectBox', method: 'GET'},
    utsavSelectBox: {url: 'utsavs/selectBox', method: 'GET'},
    donationtypeSelectBox: {url: 'donation-types/selectBox', method: "GET"},
    citySelectBox: {url: 'cities/selectBox', method: "GET"},
    areaSelectBox: {url: 'areas/selectBox', method: "GET"},
    mandirHeadSelectBox: {url: 'users/mandir-heads/selectBox', method: "GET"},
    roleUsersSelectBox: {url: 'users/roles/selectBox', method: "GET"},
    donationBookingSelectBox: {url: 'donation-bookings/selectBox', method: "GET"},


    getDonorsDonor: {url: 'donors/donor', method: "GET"},

    getDonationBookingLog: { url: 'donation-bookings/logs', method: 'GET'},
    postDonationBooking: { url: 'donation-bookings', method: 'POST'},
    getDonationBooking: { url: 'donation-bookings', method: 'GET'},
    deleteDonationBooking: { url: 'donation-bookings', method: 'DELETE'},
    putDonationBooking: { url: 'donation-bookings', method: 'PUT'},

    getDonationPaymentLog: { url: 'donation-payments/logs', method: 'GET'},
    postDonationPayment: { url: 'donation-payments', method: 'POST'},
    getDonationPayment: { url: 'donation-payments', method: 'GET'},
    deleteDonationPayment: { url: 'donation-payments', method: 'DELETE'},
    putDonationPayment: { url: 'donation-payments', method: 'PUT'},

    postDonationType: { url: 'donation-types', method: 'POST'},
    getDonationType: { url: 'donation-types', method: 'GET' },
    deleteDonationType: { url: 'donation-types', method: 'DELETE'},
    putDonationType: { url: 'donation-types' , method: 'PUT'},

    postMandal: { url: 'mandals', method: 'POST'},
    getMandal: { url: 'mandals', method: 'GET' },
    deleteMandal: { url: 'mandals', method: 'DELETE'},
    putMandal: { url: 'mandals' , method: 'PUT'},

    postMandir: { url: 'mandirs', method: 'POST'},
    getMandir: { url: 'mandirs', method: 'GET' },
    deleteMandir: { url: 'mandirs', method: 'DELETE'},
    putMandir: { url: 'mandirs' , method: 'PUT'},


    getDonorDonorDetails: { url: '/api/donors/donor-details/', method: 'GET'},
    getDonorDonorDetail: { url: '/api/donors/donor-detail', method: 'GET'},

    postUtsav: { url: 'utsavs', method: 'POST'},
    getUtsav: { url: 'utsavs', method: 'GET'},
    deleteUtsav: { url: 'utsavs', method: 'DELETE'},
    putUtsav: { url: 'utsavs', method: 'PUT'},

    postUser: { url: 'users', method: 'POST'},
    getUser: { url: 'users', method: 'GET'},
    deleteUser: { url: 'users', method: 'DELETE'},
    putUser: { url: 'users', method: 'PUT'},

    login: { url: '/login', method: 'POST'}

};