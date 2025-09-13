import React from 'react';
import { ChevronLeft, Plus, Crown } from 'lucide-react';

const InvoiceDashboard = () => {
  const invoices = [
    { client: "Client Name", amount: "$1,25,000", date: "Due 2024-06-15", status: "Update Status", statusColor: "bg-purple-500", textColor: "text-white" },
    { client: "Client Name", amount: "$1,25,000", date: "Due 2024-06-15", status: "Upload", statusColor: "bg-gray-400", textColor: "text-white" },
    { client: "Income Trend", amount: "$1,25,000", date: "Due 2024-06-15", status: "Disputed", statusColor: "bg-red-400", textColor: "text-white" },
    { client: "Income Trend", amount: "$1,25,000", date: "Due 2024-06-15", status: "Paid", statusColor: "bg-green-400", textColor: "text-white" },
    { client: "Income Trend", amount: "$1,25,000", date: "Due 2024-06-15", status: "Paid", statusColor: "bg-green-400", textColor: "text-white" },
    { client: "Income Trend", amount: "$1,25,000", date: "Due 2024-06-15", status: "Partially Paid", statusColor: "bg-yellow-400", textColor: "text-white" },
    { client: "Income Trend", amount: "$1,25,000", date: "Due 2024-06-15", status: "Paid", statusColor: "bg-green-400", textColor: "text-white" },
    { client: "Income Trend", amount: "$1,25,000", date: "Due 2024-06-15", status: "Overdue", statusColor: "bg-red-400", textColor: "text-white", hasIcon: true },
    { client: "Income Trend", amount: "$1,25,000", date: "Due 2024-06-15", status: "Pending", statusColor: "bg-yellow-400", textColor: "text-white", hasIcon: true },
    { client: "Income Trend", amount: "$1,25,000", date: "Due 2024-06-15", status: "Draft", statusColor: "bg-gray-200", textColor: "text-gray-600", hasIcon: true },
    { client: "Income Trend", amount: "$1,25,000", date: "Due 2024-06-15", status: "Paid", statusColor: "bg-green-400", textColor: "text-white" }
  ];

  return (
    <div className="max-w-sm mx-auto bg-white min-h-screen font-sans">
    

      {/* Header */}
      <div className="flex items-center justify-between px-4 pt-4 pb-6">
        
       <div className='flex item-center'> <ChevronLeft className="w-6 h-6 text-black" />Back</div>
        <div><h1 className="text-lg font-medium text-black">Dashboard</h1></div>
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-400"></div>

      </div>

      {/* Create Invoice Card */}
      <div className="mx-4 mb-6 bg-gray-50 rounded-2xl p-6">
        <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full mb-4 mx-auto shadow-sm">
          <Plus className="w-6 h-6 text-purple-500" />
        </div>
        <h2 className="text-purple-500 font-medium text-center mb-2 text-base">Create New Invoice</h2>
        <p className="text-gray-500 text-sm text-center leading-5">
          Start by creating and sending new invoices<br />
          Or Upload an existing invoice and set payment reminders
        </p>
      </div>

      {/* Time Period */}
      <div className="mx-4 mb-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-gray-700 text-sm font-medium">Time Period</span>
          <span className="text-gray-400 text-xs">dd-mm-yyyy - dd-mm-yyyy</span>
        </div>
        <div className="flex space-x-2 mb-3">
          <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg text-sm font-medium">1 Month</button>
          <button className="px-4 py-2 bg-purple-500 text-white rounded-lg text-sm font-medium">3 Months</button>
          <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg text-sm font-medium flex items-center">
            1 Year
            <Crown className="w-4 h-4 ml-1 text-yellow-500" />
          </button>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 border border-gray-300 rounded mr-2"></div>
          <span className="text-gray-500 text-sm">Custom</span>
        </div>
      </div>

      {/* Total Earnings */}
      <div className="mx-4 mb-6">
        <h3 className="text-gray-600 text-sm mb-1">Total Earnings</h3>
        <p className="text-2xl font-bold text-black">$1,25,000</p>
      </div>

      {/* Payment Status */}
      <div className="mx-4 mb-6 flex justify-between">
        <div>
          <p className="text-gray-600 text-sm mb-1">Payment Awaited</p>
          <p className="text-lg font-semibold text-black">$25,000</p>
        </div>
        <div>
          <p className="text-gray-600 text-sm mb-1">Payment Overdue</p>
          <p className="text-lg font-semibold text-black">$25,000</p>
        </div>
      </div>

      {/* Income Trend Chart */}
      <div className="mx-4 mb-6">
        <h3 className="text-black font-semibold mb-2">Income Trend</h3>
        <p className="text-gray-500 text-sm mb-4">Your monthly income and growth for the last 6 months</p>
        
        <div className="relative bg-white">
          {/* Chart container */}
          <div className="relative h-32 flex items-end justify-between px-8">
            {/* Y-axis labels */}
            <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs text-gray-400">
              <span>$8k</span>
              <span>$6k</span>
              <span>$4k</span>
              <span>$2k</span>
              <span>$0k</span>
            </div>
            
            {/* Right axis percentage labels */}
            <div className="absolute right-0 top-0 bottom-0 flex flex-col justify-between text-xs text-gray-400">
              <span>100%</span>
              <span>50%</span>
              <span>0%</span>
              <span>-50%</span>
              <span>-100%</span>
            </div>
            
            {/* Chart bars */}
            <div className="flex items-end justify-between w-full h-full px-8 space-x-2">
              <div className="w-6 h-6 bg-purple-500 rounded-t"></div>
              <div className="w-6 h-10 bg-purple-500 rounded-t"></div>
              <div className="w-6 h-16 bg-purple-500 rounded-t"></div>
              <div className="w-6 h-8 bg-purple-500 rounded-t"></div>
              <div className="w-6 h-20 bg-purple-500 rounded-t"></div>
              <div className="w-6 h-12 bg-purple-500 rounded-t"></div>
            </div>
          </div>
          
          {/* X-axis labels */}
          <div className="flex justify-between text-xs text-gray-400 mt-2 px-8">
            <span>Jan</span>
            <span>Feb</span>
            <span>Mar</span>
            <span>Apr</span>
            <span>May</span>
            <span>Jun</span>
          </div>
          
          {/* Legend */}
          <div className="flex items-center text-xs text-gray-500 mt-4">
            <div className="w-3 h-3 bg-purple-500 rounded mr-2"></div>
            <span className="mr-4">Income</span>
            <span>⟷ momGrowth</span>
          </div>
        </div>
      </div>

      {/* Your Invoices */}
      <div className="mx-4 mb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-black font-semibold">Your Invoices</h3>
          <ChevronLeft className="w-5 h-5 text-gray-400 rotate-180" />
        </div>
        
        <div className="space-y-0">
          {invoices.map((invoice, index) => (
            <div key={index} className="flex items-center justify-between py-3 border-b border-gray-50 last:border-b-0">
              <div className="flex-1">
                <p className="font-medium text-black text-sm">{invoice.client}</p>
                <p className="text-black text-sm font-medium">{invoice.amount}</p>
                <p className="text-gray-400 text-xs">{invoice.date}</p>
              </div>
              <div className="flex items-center space-x-2">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${invoice.statusColor} ${invoice.textColor}`}>
                  {invoice.status}
                </span>
                {invoice.hasIcon && (
                  <div className="w-4 h-4 text-gray-400">
                    {invoice.status === 'Draft' ? (
                      <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                        <path d="M12 20h9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ) : (
                      <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                        <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M13.73 21a2 2 0 0 1-3.46 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom branding */}
      <div className="text-center pb-8">
        <p className="text-gray-800 text-sm font-medium">Sparks</p>
        <p className="text-gray-400 text-xs">Elevate your freelance business</p>
      </div>
    </div>
  );
};

export default InvoiceDashboard;