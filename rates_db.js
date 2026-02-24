// This file allows syncing rates across different PCs via OneDrive.
// To update, use the "Export to rates_db.js" button in the app and replace this file.

window.RATE_DATA_FILE = {
    "updatedAt": 1740400000000,
    "activePeriodId": "p_initial",
    "periods": [
        {
            "id": "p_initial",
            "effectiveFrom": "1900-01-01",
            "name": "Initial Rates",
            "rates": {
                "fd": [
                    { "label": "30 – 45 days", "minD": 30, "maxD": 45, "all": 4.00, "sc": 4.00 },
                    { "label": "46 – 90 days", "minD": 46, "maxD": 90, "all": 4.50, "sc": 4.50 },
                    { "label": "91 – 180 days", "minD": 91, "maxD": 180, "all": 5.50, "sc": 5.50 },
                    { "label": "181 – 365 days", "minD": 181, "maxD": 365, "all": 7.25, "sc": 7.25 },
                    { "label": "13 – 24 months", "minD": 366, "maxD": 730, "all": 9.00, "sc": 9.25 },
                    { "label": "Above 25 months", "minD": 731, "maxD": 99999, "all": 9.25, "sc": 9.50 }
                ],
                "mis": [
                    { "label": "Above 12 months", "minD": 366, "maxD": 99999, "all": 9.25, "sc": 9.50 }
                ],
                "dd": [
                    { "label": "DD — 90 Months", "minD": 1, "maxD": 99999, "all": 9.50, "sc": 9.50 }
                ],
                "dc": [
                    { "label": "DC — 6 to 12 Months", "minD": 180, "maxD": 364, "all": 2.50, "sc": 2.50 },
                    { "label": "DC — 12 Months Plus", "minD": 365, "maxD": 99999, "all": 5.00, "sc": 5.00 }
                ]
            }
        }
    ]
};
