// components/QRScanner.jsx
import React from "react";
import "./QRScanner.css";

const QRScanner = ({ onScanSuccess }) => {
  return (
    <div className="qr-scanner-container">
      <div className="qr-reader-placeholder">
        <div className="camera-icon">📷</div>
        <p>Camera Access Required</p>
        <button 
          className="scan-button"
          onClick={() => onScanSuccess("TEST-LOCATION-123")}
        >
          Scan
        </button>
      </div>
    </div>
  );
};

export default QRScanner;
