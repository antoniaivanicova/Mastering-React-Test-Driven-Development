const today = new Date()
const at = hours => today.setHours(hours, 0)
export const sampleAppointments = [
    {startsAt: at(9), customer: {firstName: 'Charlie', lastName: 'TEST', phoneNumber: '0904050603'}, stylist: 'Jane', notes: 'balayage', service: 'strihanie'},
    {startsAt: at(10), customer: {firstName: 'Frankie'}},
    {startsAt: at(11), customer: {firstName: 'Peter'}},
    {startsAt: at(12), customer: {firstName: 'Dano'}},
    {startsAt: at(13), customer: {firstName: 'Dominik'}},
    {startsAt: at(14), customer: {firstName: 'Matus'}},
    {startsAt: at(15), customer: {firstName: 'Niuska'}},
    {startsAt: at(16), customer: {firstName: 'Peter'}},
    {startsAt: at(17), customer: {firstName: 'Pepa'}}
]