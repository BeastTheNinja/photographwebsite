export interface BookingFormData {
    name: string;
    email: string;
    phone: string;
    date: string;
    time: string;
    sessionType: string;
    location: string;
    message: string;
    website: string;
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
    website: '',
};

export const sessionTypes = [
    {
        title: 'Bryllupsfotografering',
        description: 'Heldagsdækning af jeres store dag',
    },
    {
        title: 'Portrætfotografering',
        description: 'Individuelle, par- eller familieportrætter',
    },
    {
        title: 'Event dækning',
        description: 'Firmaevents, fester og særlige begivenheder',
    },
];

export const bookingOptions = [
    'Bryllupsfotografering',
    'Portrætfotografering',
    'Familiefotografering',
    'Event dækning',
    'Andet',
];
