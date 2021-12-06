import React from "react";
import "./PackageCards.css";

export default function PackageCards() {
  let packages = [
    {
      name: "Starter",
      price: "from $350",
      description:
        "Tailored for small business owners or sole traders who need a clear picture of their financial performance and basic bookkeeping services.",
      services: [
        "Monthly bank reconciliation",
        "Dext App for purchases",
        "Monthly reporting pack",
        "BAS calculations & lodgement",
        "Payroll (up to 2 ppl)",
        "Jounal entry",
        "STP payroll Reporting directly to ATO",
      ],
    },
    {
      name: "Standard",
      price: "from $500",
      description:
        "Designed for micro to small businesses. I'll look after your payrolls, workers comp and super whilst managing your accounts payable and receivable.",
      services: [
        "Weekly bank reconciliation",
        "Dext App for purchases",
        "Monthly reporting pack",
        "BAS calculations & lodgement",
        "Payroll (up to 5 ppl)",
        "Jounal entry",
        "STP payroll Reporting directly to ATO",
        "Superannuation calculations & lodgements",
        "Workers compensation calculations & lodgements",
        "Phone & email support (10 per week)",
        "Accounts receivable (up to 15 transacations)",
        "Accounts payable (up to 15 transacations)",
      ],
    },
    {
      name: "Growth",
      price: "from $1200",
      description:
        "Tailored for established businesses, relax as your compliance and financial operations are managed.",
      services: [
        "Weekly bank reconciliation",
        "Dext App for purchases",
        "Monthly reporting pack",
        "BAS calculations & lodgement",
        "Payroll (up to 20 ppl)",
        "Jounal entry",
        "STP payroll Reporting directly to ATO",
        "Superannuation calculations & lodgements",
        "Workers compensation calculations & lodgements",
        "Unlimited phone & email support",
        "Unlimited accounts receivable",
        "Unlimited accounts payable",
        "PAYG installments calculations & lodgements",
        "Payroll tax calculations & lodgements",
        "Monthly IAS calculations & lodgements",
      ],
    },
  ];
  return (
    <div className="PackageCards container-fluid">
      <div className="row">
        {packages.map(function (service, index) {
          return (
            <div key={index} className="col d-flex justify-content-center">
              <div className="card text-center">
                <div className="card-body">
                  <h5 className="card-title">{service.name}</h5>
                  <h6 className="card-price mb-2">
                    {service.price}
                    <small> / month</small>
                  </h6>
                  <h6 className="card-subtitle text-muted mb-2">
                    {service.description}
                  </h6>
                  <hr className="element" />
                  <ul className="card-text">
                    {service.services.map(function (service, index) {
                      return <li key={index}>{service}</li>;
                    })}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
