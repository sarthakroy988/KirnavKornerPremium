// Calculates current open/closed status for Kirnav Korner in Indian Standard Time (IST, UTC+5:30)
export function getStoreStatus() {
  const now = new Date();
  // Convert UTC time to IST (UTC+5:30)
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
  const istTime = new Date(utc + (3600000 * 5.5));
  
  const hours = istTime.getHours();
  const minutes = istTime.getMinutes();
  const timeInMinutes = hours * 60 + minutes;
  
  // Store hours: 10:00 AM (600 mins) to 8:00 PM (1200 mins)
  const openTime = 10 * 60;
  const closeTime = 20 * 60;
  
  const isOpen = timeInMinutes >= openTime && timeInMinutes < closeTime;
  
  return {
    isOpen,
    statusText: isOpen ? 'Open Today' : 'Closed Now',
    subText: isOpen ? 'Closes at 8:00 PM' : 'Opens at 10:00 AM',
    fullBadge: isOpen ? 'Open Today · Closes 8:00 PM' : 'Closed · Opens 10:00 AM'
  };
}

export const STORE_INFO = {
  name: 'Kirnav Korner',
  assameseName: 'কিৰ্ণভ কৰ্ণাৰ',
  tagline: 'Everything a child needs, in one little corner.',
  phone: '+91 99543 61338',
  phoneClean: '919954361338',
  address: 'RG Baruah Rd, AIDC, Ambikagirinagar, Guwahati, Assam 781024',
  landmark: 'Plot 208, RG Baruah Road (Zoo Road), Near AIDC, Ambikagirinagar',
  rating: '4.7',
  reviewsCount: '33',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Kirnav+Korner+RG+Baruah+Rd+AIDC+Ambikagirinagar+Guwahati+Assam+781024',
  whatsappUrl: (msg) => `https://wa.me/919954361338?text=${encodeURIComponent(msg || "Hi Kirnav Korner, I'm visiting your website and would like to enquire about visiting your store.")}`
};
