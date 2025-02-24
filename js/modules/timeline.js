
const events = {
  '1833': 'Benjamin Harrison was born in North Bend, Ohio',
  '1852': 'Graduated from Miami University in Oxford, Ohio',
  '1862': 'Served as Colonel in the Union Army during Civil War',
  '1888': 'Won presidential election against Grover Cleveland',
  '1890': 'Signed the Sherman Antitrust Act',
  '1901': 'Passed away in Indianapolis, Indiana'
};

export function showEvent(year) {
  const eventDetails = document.getElementById('event-details');
  eventDetails.textContent = events[year];
}
