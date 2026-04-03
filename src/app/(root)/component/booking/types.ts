export interface BookingFormData {
    name: string;
    email: string;
    phone: string;
    date: string;
    time: string;
    sessionType: string;
    location: string;
    message: string;
}

export const initialBookingFormData: BookingFormData = {
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    sessionType: '',
    location: '',
    message: '',
};

export const sessionTypes = [
    {
        title: 'Bryllupsfotografering',
        description: 'Heldags dækning af jeres store dag',
    },
    {
        title: 'Portrætsession',
        description: 'Individuelle, par- eller familieportrætter',
    },
    {
        title: 'Event dækning',
        description: 'Firmaevents, fester og særlige begivenheder',
    },
];

export const bookingOptions = [
    'Bryllupsfotografering',
    'Portrætsession',
    'Familiefotografering',
    'Event dækning',
    'Andet',
];
