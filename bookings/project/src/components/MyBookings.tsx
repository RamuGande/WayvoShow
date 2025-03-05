import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const MyBookings = () => {
  const [showBookings, setShowBookings] = useState(false);

  const bookings = [
    {
      title: "Mazaka",
      language: "Telugu",
      date: "Wed, 26 Feb, 2025 | 02:45 PM",
      venue: "Asian Lakshmikala Cinepride: Moosapet",
      ticketInfo: "1 ticket (S): SILVER - D15",
      status: "FINISHED",
      image: "https://via.placeholder.com/100", // Replace with actual image
    },
    {
      title: "Return of the Dragon",
      language: "Telugu",
      date: "Tue, 25 Feb, 2025 | 09:45 PM",
      venue: "Bhramaramba 70MM A/C 4K Dolby: Kukatpally",
      ticketInfo: "6 tickets (S): FIRST CL - D16",
      status: "FINISHED",
      image: "https://via.placeholder.com/100",
    },
    {
      title: "Interstellar",
      language: "English",
      date: "Mon, 10 Feb, 2025 | 07:45 PM",
      venue: "Prasads Multiplex: Hyderabad",
      ticketInfo: "1 ticket (S): GOLD - B34 | SCREEN 6",
      status: "FINISHED",
      image: "https://via.placeholder.com/100",
    },
  ];

  return (
    <div className="p-4">
      <Button onClick={() => setShowBookings(!showBookings)} className="mb-4">
        My Bookings
      </Button>
      {showBookings && (
        <div className="space-y-4">
          {bookings.map((booking, index) => (
            <Card key={index} className="p-4 shadow-lg rounded-xl">
              <div className="flex items-start space-x-4">
                <img
                  src={booking.image}
                  alt={booking.title}
                  className="w-20 h-28 rounded-lg"
                />
                <div>
                  <h2 className="text-xl font-semibold">{booking.title}</h2>
                  <p className="text-sm text-gray-500">{booking.language}</p>
                  <p className="text-sm font-medium mt-1">{booking.date}</p>
                  <p className="text-sm">{booking.venue}</p>
                  <p className="text-sm text-gray-700">{booking.ticketInfo}</p>
                  <span className="mt-2 px-3 py-1 bg-gray-200 text-xs rounded-lg">
                    {booking.status}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBookings;