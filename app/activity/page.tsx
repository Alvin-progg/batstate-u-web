"use client";

import Image from "next/image";
import { useState } from "react";

export default function Activity() {
  const [selectedPDF, setSelectedPDF] = useState<string | null>(null);

  const openPDF = (pdfUrl: string) => {
    setSelectedPDF(pdfUrl);
  };

  const closePDF = () => {
    setSelectedPDF(null);
  };

  // Convert Google Drive preview URL to thumbnail URL
  const getGDriveThumbnail = (url: string) => {
    if (!url) return '';
    const fileIdMatch = url.match(/\/d\/([^\/]+)/);
    if (fileIdMatch) {
      const fileId = fileIdMatch[1];
      // Use a combination of methods that work for public files
      return `https://lh3.googleusercontent.com/d/${fileId}=w400?authuser=0`;
    }
    return url;
  };

  const activities = [
    {
      day: 1,
      title: "OPENING PROGRAM",
      date: "25 November 2024 (9:00 AM)",
      platform: "Zoom",
      icon: "/act22.png",
      platformIcon: "/zoom.png",
      details: [
        <a href="https://us06web.zoom.us/j/82654946389?pwd=6Z8iEgbT9z2bcPItaItbniURru0bCy.1" target="_blank">
  Click to Join Zoom Meeting
</a>,
        "Meeting ID: 826 5494 6389",
        "Passcode: 926964"
      ],
      pdfUrl: "https://drive.google.com/file/d/YOUR_FILE_ID_DAY2/preview"
    },
    {
      day: 2,
      title: "CLASS OBSERVATION & INTERVIEW",
      date: "26 November 2024",
      platform: "Google Meet",
      icon: "/class-icon.png",
      platformIcon: "/gmeet.png",
      activities: [
        {
          name: "CLASS OBSERVATION",
          time: "(1:00 PM)",
          participants: "Faculty Member and Students"
        },
        {
          name: "INTERVIEW",
          time: "(2:00 PM)",
          participants: "Students, Faculty Members, Alumni, Extension Beneficiaries"
        }
      ],
      details: [
        "GMeet Link 1: CLICK TO JOIN THE MEET"
      ],
      pdfUrl: "https://drive.google.com/file/d/YOUR_FILE_ID_DAY2/preview"
    },
    {
      day: 3,
      title: "VIRTUAL CAMPUS TOUR & INTERVIEW",
      date: "27 November 2024 (8:30 AM)",
      platform: "Google Meet",
      icon: "/campus-icon.png",
      platformIcon: "/gmeet.png",
      details: [
        "GMeet Link 1: CLICK TO JOIN THE MEET",
        "Campus facilities and infrastructure showcase",
        "Student testimonials and interviews"
      ],
      pdfUrl: "https://drive.google.com/file/d/YOUR_FILE_ID_DAY3/preview"
    },
    {
      day: 4,
      title: "DOCUMENT VERIFICATION",
      date: "28 November 2024 (9:00 AM)",
      platform: "On-site",
      icon: "/docs-icon.png",
      details: [
        "Review of academic records",
        "Compliance documentation",
        "Quality assurance materials",
        "Location: Accreditation Room"
      ],
      pdfUrl: "https://drive.google.com/file/d/YOUR_FILE_ID_DAY4/preview"
    },
    {
      day: 5,
      title: "FACULTY PRESENTATION",
      date: "29 November 2024 (10:00 AM)",
      platform: "Hybrid",
      icon: "/presentation-icon.png",
      platformIcon: "/zoom.png",
      details: [
        "Research and extension programs",
        "Teaching methodologies",
        "Innovation showcases",
        "Q&A Session"
      ],
      pdfUrl: "https://drive.google.com/file/d/YOUR_FILE_ID_DAY5/preview"
    },
    {
      day: 6,
      title: "STAKEHOLDER CONSULTATION",
      date: "30 November 2024 (2:00 PM)",
      platform: "Google Meet",
      icon: "/consult-icon.png",
      platformIcon: "/gmeet.png",
      details: [
        "Industry partners feedback",
        "Alumni engagement session",
        "Community representative inputs",
        "GMeet Link: CLICK TO JOIN THE MEET"
      ],
      pdfUrl: "https://drive.google.com/file/d/YOUR_FILE_ID_DAY6/preview"
    },

    {
      day: 7,
      title: "EXIT CONFERENCE",
      date: "01 December 2024 (3:00 PM)",
      platform: "Zoom",
      icon: "/exit-icon.png",
      platformIcon: "/zoom.png",
      details: [
        "Preliminary findings presentation",
        "Recommendations and feedback",
        "Next steps and timeline",
        "Zoom Link: CLICK TO JOIN THE ZOOM MEET",
        "Meeting ID: TBA"
      ],
      pdfUrl: "https://drive.google.com/file/d/YOUR_FILE_ID_DAY7/preview"
    }
  ];

  return (
    <main className="min-h-screen flex flex-col bg-gray-50 pt-16">
      {/* Header */}
      <div className="bg-red w-full items-center justify-center flex py-10">
        <h1 className="text-white font-bold text-3xl tracking-wide">PROGRAM OF ACTIVITIES</h1>
      </div>

      {/* Activities Container */}
      <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
        {activities.map((activity, index) => (
          <div 
            key={activity.day}
            className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="grid md:grid-cols-3 gap-6 p-8">
              {/* Left Section - Day and Icon */}
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="w-32 h-32 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-red mb-2">
                      DAY
                    </div>
                    <div className="text-7xl font-bold text-red">
                      {activity.day}
                    </div>
                  </div>
                </div>
                
                {activity.platformIcon && (
                  <div className="flex items-center gap-2 mt-4">
                    <span className="text-sm text-gray-600 font-medium">{activity.platform}</span>
                  </div>
                )}
              </div>

              {/* Middle Section - Details */}
              <div className="md:col-span-1 flex flex-col justify-center space-y-3">
                <h2 className="text-2xl font-bold text-red uppercase tracking-wide">
                  {activity.title}
                </h2>
                <p className="text-gray-700 font-medium">{activity.date}</p>
                
                {activity.activities ? (
                  <div className="space-y-4 mt-4">
                    {activity.activities.map((act, idx) => (
                      <div key={idx} className="border-l-4 border-red pl-4">
                        <h3 className="font-bold text-red">{act.name}</h3>
                        <p className="text-sm text-gray-600">{act.time}</p>
                        <p className="text-sm text-gray-700 mt-1">
                          Participants: {act.participants}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <ul className="space-y-2 mt-4">
                    {activity.details.map((detail, idx) => (
                      <li key={idx} className="text-sm text-gray-700 flex items-start">
                        <span className="text-red mr-2">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Right Section - Chronicle Document Preview */}
              {activity.pdfUrl && !activity.pdfUrl.includes('YOUR_FILE_ID') && (
                <div className="flex items-center justify-center">
                  <div 
                    className="relative rounded-lg overflow-hidden w-full max-w-xs cursor-pointer group"
                    onClick={() => openPDF(activity.pdfUrl)}
                  >
                    <div className="aspect-[3/4] bg-gray-100 rounded shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-200 flex items-center justify-center">
                      <img
                        src={getGDriveThumbnail(activity.pdfUrl)}
                        alt={`Day ${activity.day} Chronicle`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback to document icon if thumbnail fails
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.parentElement!.innerHTML = `
                            <div class="text-center p-6">
                              <svg class="w-20 h-20 mx-auto text-red mb-3" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd"/>
                              </svg>
                              <p class="text-gray-700 font-bold">Day ${activity.day}</p>
                              <p class="text-gray-500 text-sm mt-2">Accreditation Chronicle</p>
                            </div>
                          `;
                        }}
                      />
                    </div>
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-200 flex items-center justify-center">
                      <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-center">
                        <svg 
                          className="w-16 h-16 mx-auto mb-2" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" 
                          />
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" 
                          />
                        </svg>
                        <p className="font-medium">Click to view document</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Footer Note */}
      <div className="bg-white border-t border-gray-200 py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-600 text-sm">
            For more information, please contact the Accreditation Office
          </p>
          <p className="text-gray-500 text-xs mt-2">
            All times are in Philippine Standard Time (PST)
          </p>
        </div>
      </div>

      {/* PDF Modal */}
      {selectedPDF && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={closePDF}
        >
          <div 
            className="bg-white rounded-lg shadow-2xl w-full max-w-6xl h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h3 className="text-lg font-bold text-gray-800">
                Accreditation Chronicle Document
              </h3>
              <button
                onClick={closePDF}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <svg 
                  className="w-6 h-6" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                </svg>
              </button>
            </div>
            
            {/* PDF Viewer */}
            <div className="flex-1 overflow-hidden">
              <iframe
                src={selectedPDF}
                className="w-full h-full"
                title="PDF Viewer"
              />
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-gray-200 flex justify-end gap-3">
              <a
                href={selectedPDF}
                download
                className="px-4 py-2 bg-red text-white rounded-md hover:bg-red-700 transition-colors"
              >
                Download PDF
              </a>
              <button
                onClick={closePDF}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
