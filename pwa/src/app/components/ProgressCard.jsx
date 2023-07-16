import React from "react";

export default function ProgressCard() {
    return (
        <div className="total-users">
            <div className="status">
                <div className="info">
                    <h3 className="text-gray-500">Total students</h3>
                    <h1 className="text-gray-500">2000</h1>
                </div>
                <div className="progress">
                    <svg>
                        <circle cx="40" cy="40" r="30"></circle>
                    </svg>
                    <p className="text-gray-500">+81%</p>
                </div>
            </div>
        </div>
    );
}
