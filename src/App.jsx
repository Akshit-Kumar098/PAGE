import React from "react";
import { ChevronLeft } from "lucide-react";
import image2 from "./assets/image2.png";

const InvoiceDashboard = () => {
  const invoices = [
    {
      client: "Client Name",
      amount: "$1,25,000",
      date: "Due: 2024-06-15",
      status: "Update Status ",
      statusColor: "#8134AF",
      textColor: "text-white",
    },
    {
      client: "Client Name",
      amount: "$1,25,000",
      date: "Due: 2024-06-15",
      status: "Unpaid",
      statusColor: "#F2F2F2",
      textColor: "text-gray-500",
    },
    {
      client: "Income Trend",
      amount: "$1,25,000",
      date: "Due: 2024-06-15",
      status: "Disputed",
      statusColor: "#FFB1B1",
      textColor: "text-pink-600",
    },
    {
      client: "Income Trend",
      amount: "$1,25,000",
      date: "Due: 2024-06-15",
      status: "Paid",
      statusColor: "#9CEFB8",
      textColor: "text-green-500",
    },
    {
      client: "Income Trend",
      amount: "$1,25,000",
      date: "Due: 2024-06-15",
      status: "Paid",
      statusColor: "#9CEFB8",
      textColor: "text-green-500",
    },
    {
      client: "Income Trend",
      amount: "$1,25,000",
      date: "Due: 2024-06-15",
      status: "Partially Paid",
      statusColor: "#FFFAE5",
      textColor: "text-yellow-400",
    },
    {
      client: "Income Trend",
      amount: "$1,25,000",
      date: "Due: 2024-06-15",
      status: "Paid",
      statusColor: "#9CEFB8",
      textColor: "text-green-500",
    },
    {
      client: "Income Trend",
      amount: "$1,25,000",
      date: "Due: 2024-06-15",
      status: "Overdue",
      statusColor: "bg-red-400",
      textColor: "text-white",
      hasIcon: true,
    },
    {
      client: "Income Trend",
      amount: "$1,25,000",
      date: "Due: 2024-06-15",
      status: "Awaited",
      statusColor: "#FFFAE5",
      textColor: "text-yellow-400",
      hasIcon: true,
    },
    {
      client: "Income Trend",
      amount: "$1,25,000",
      date: "Due: 2024-06-15",
      status: "Draft",
      statusColor: "#F2F2F2",
      textColor: "text-gray-500",
      hasIcon: true,
    },
    {
      client: "Income Trend",
      amount: "$1,25,000",
      date: "Due: 2024-06-15",
      status: "Paid",
      statusColor: "#9CEFB8",
      textColor: "text-green-500",
    },
  ];

  return (
    <div
      className="max-w-sm mx-auto bg-pink-100 min-h-screen font-sans "
      style={{
        background: "",
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 pt-7 pb-6 text-[17px] font-medium">
        <div className="flex item-center">
          {" "}
          <ChevronLeft className="w-6 h-6 text-black" />
          Back
        </div>
        <div>
          <h1 className="text-[17px] font-medium text-black">Dashboard</h1>
        </div>
        <div className=" rounded-full ">
          <img src={image2} className="w-[40px] h-[40px] rounded-full"></img>
        </div>
      </div>
      <div className="w-full bg-white rounded-t-[46px] p-[20px]">
        {/* Create Invoice Card */}
        <div className="mb-6 rotate-0 opacity-100 gap-[14px] rounded-[32px] pt-[16px] pr-[12px] pb-[16px] pl-[12px] bg-[#F2F2F2]">
          <div className="flex items-center justify-center mx-auto mb-2">
            <i
              class="ri-add-circle-line"
              style={{
                fontSize: "64px",
                background:
                  "linear-gradient(169.7deg, #DD2A7B 1.49%, #9747FF 42.07%, #334CCA 99.84%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block",
                lineHeight: "64px",
              }}
            ></i>
          </div>
          <h2 className="text-purple-500 text-center mb-1 text-[24px] font-[600]">
            Create New Invoice
          </h2>
          <p className="text-[12px] text-center leading-5 text-[#999999]">
            Start by creating and sending new invoices
          </p>
        </div>

        <div class="font-normal text-[#8134AF] text-[12px] text-center mb-4">
          Or Upload an existing invoice and set payment reminder
        </div>

        {/* Time Period */}
        <div
          className="mb-4 opacity-100  gap-1 rounded-[16px] pt-4 pr-3 pb-4 pl-3 border-2"
          style={{ borderColor: "#F2F2F2" }}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="w-full flex items-center justify-between text-[14px] font-medium text-[#999999]">
              Time Period
              <span className="ml-auto text-[12px] font-normal">
                dd:mm:yyyy - dd:mm:yyyy
              </span>
            </div>
          </div>

          <div className="flex gap-1 mb-4">
            <button className="px-3 py-1 text-[#999999] text-[14px] font-normal border border-[#F2F2F2] rounded-2xl">
              1 Month
            </button>
            <button className="px-3 py-1 text-[] text-[14px] font-normal border border-[#F2F2F2] rounded-2xl bg-[#F3E8FF]">
              3 Months
            </button>
            <button className="px-3 py-1 text-[#999999] text-[14px] font-normal border border-[#F2F2F2] gap-1 rounded-2xl flex items-center">
              1 Year
              <i
                class="ri-vip-crown-line"
                style={{
                  fontSize: "18px",
                  background:
                    "linear-gradient(169.7deg, #DD2A7B 1.49%, #9747FF 42.07%, #334CCA 99.84%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  display: "inline-block",
                  lineHeight: "18px",
                }}
              ></i>
            </button>
          </div>
          <div className="flex items-center">
            <div className="px-3 py-1 text-[#999999] text-[14px] font-normal border border-[#F2F2F2] rounded-2xl flex items-center gap-1">
              <i class="ri-calendar-line" style={{ lineHeight: "12px" }}></i>
              <span className="text-gray-500 text-sm">Custom</span>
            </div>
          </div>
        </div>

        {/* Total Earnings */}
        <div
          className="mb-4 opacity-100 rounded-[16px] pt-4 pr-3 pb-4 pl-3 border-2"
          style={{ borderColor: "#F2F2F2" }}
        >
          <p className="text-gray-600 text-[14px] text-m mb-1 w-[90px] h-[18px]">
            Total Earnings
          </p>
          <p className="text-[20px] font-bold text-[#8134AF]">$1,25,000</p>
        </div>

        {/* Payment Status */}
        <div className=" flex justify-between gap-3 mb-4">
          <div
            className="rounded-[16px] pt-4 pr-3 pb-4 pl-3 border-2 w-[48%]"
            style={{ borderColor: "#F2F2F2" }}
          >
            <p className="text-gray-600 text-sm mb-1">Payment Awaited</p>
            <p className="text-lg font-semibold text-[#8134AF]">$25,000</p>
          </div>
          <div
            className="rounded-[16px] pt-4 pr-3 pb-4 pl-3 border-2 w-[48%]"
            style={{ borderColor: "#F2F2F2" }}
          >
            <p className="text-gray-600 text-sm mb-1">Payment Overdue</p>
            <p className="text-lg font-semibold text-[#8134AF]">$25,000</p>
          </div>
        </div>

        {/* Income Trend Chart */}
        <div
          className="mb-8 opacity-100 flex flex-col gap-1 rounded-[16px] pt-4 pr-3 pb-4 pl-3 border-2"
          style={{ borderColor: "#F2F2F2" }}
        >
          <h3
            className="text-gray-500 text-sm
          font-semibold mb-2"
          >
            Income Trend
          </h3>
          <p className="text-gray-500 text-sm mb-4">
            Your monthly income and growth for the last 6 months
          </p>

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
            <div className="flex items-center justify-center text-xs text-gray-500 mt-4">
              <div className="w-3 h-3 bg-purple-500  mr-1 "></div>
              <span className="text-purple-500 text-sm">Income</span>
              <span className="text-yellow-800 font-semibold text-sm ml-2 ">
                ⟷ momGrowth
              </span>
            </div>
          </div>
        </div>

        {/*  Invoices */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-500 text-[16px] font-semibold">
              Your Invoices
            </h3>
            <i class="ri-arrow-down-s-fill"></i>
          </div>

          <div className="space-y-0">
            {invoices.map((invoice, index) => (
              <div
                key={index}
                className="flex gap-4 mt-1 mb-2 rounded-[16px] pt-4 pr-3 pb-4 pl-3 border"
                style={{ borderColor: "#F2F2F2" }}
              >
                <div className="flex-1">
                  <p className="font-medium text-black text-sm">
                    {invoice.client}
                  </p>

                  <p className="text-gray-400 text-xs">
                    {invoice.amount}
                    {invoice.date}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${invoice.statusColor} ${invoice.textColor}`}
                    style={{ backgroundColor: invoice.statusColor }}
                  >
                    {invoice.status}
                  </span>
                  {invoice.hasIcon && (
                    <div className="w-4 h-4 text-gray-400">
                      {invoice.status === "Draft" ? (
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          className="w-4 h-4"
                        >
                          <path
                            d="M12 20h9"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      ) : (
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          className="w-4 h-4"
                        >
                          <path
                            d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M13.73 21a2 2 0 0 1-3.46 0"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center pb-8">
          <p className="text-gray-700 text-lg font-medium">
            Spark<span className="text-gray-500">nomy</span>
          </p>
          <p className="text-gray-500 text-[10px]">
            sparking the creator economy
          </p>
        </div>
      </div>
    </div>
  );
};

export default InvoiceDashboard;
