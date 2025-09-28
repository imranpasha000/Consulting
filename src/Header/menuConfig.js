
export const menuConfig = [
  {
    label: "Company Registration",
    icon: "Building2",
    columns: [
      {
        title: "Incorporation",
        links: [
          { name: "Private Limited Company", href: "/company-registration/private-limited" },
          { name: "One Person Company", href: "/company-registration/one-person" },
          { name: "Public Limited Company", href: "/company-registration/public-limited" },
          { name: "Section-8 Company", href: "/company-registration/section-8" },
          { name: "Limited Liability Partnership", href: "/company-registration/llp" },
          { name: "Increase in Authorized Capital", href: "/company-registration/increase-capital" },
          { name: "Increase in Paid-Up-Capital", href: "/company-registration/tds-registration" }
        ]
      },
      {
        title: "Compliances",
        links: [
          { name: "Annual Return", href: "/compliance/annual-return" },
          { name: "Director DIN-KYC", href: "/compliance/din-kyc" },
          { name: "Director Appointment", href: "/compliance/appoint-director" },
          { name: "Director Removal", href: "/compliance/remove-director" },
          { name: "Wind-up LLP", href: "/compliance/increase-capital" },
          { name: "Registered Office Change", href: "/compliance/change-office" },
          { name: "Name Change", href: "/compliance/name-change" },
          { name: "Appointment & Resignation of Director", href: "/compliance/director-changes" },
          { name: "Share Transfer", href: "/compliance/share-transfer" },
          { name: "MOA Amendment", href: "/compliance/moa-amendment" }
        ]
      },
      {
        title: "Conversion",
        links: [
          { name: "OPC to Private Limited", href: "/conversion/opc-to-pvt" },
          { name: "Private Limited to Public Limited", href: "/conversion/pvt-to-public" },
          { name: "LLP to Private Limited", href: "/conversion/llp-to-pvt" },
          { name: "Wind-up Company", href: "/conversion/windup-company" }
        ]
      }
    ]
  },
  {
    label: "GST Registration",
    icon: "Calculator",
    columns: [
      {
        title: "GST Services",
        links: [
          { name: "GST Registration", href: "/gst/registration" },
          { name: "GST Return Filing", href: "/gst/return-filing" },
          { name: "GST Registration Cancellation", href: "/gst/registration-cancellation" },
          { name: "Letter of Undertaking (LUT)", href: "/gst/lut" },
          { name: "GSTR-9 Annual Return Filing", href: "/gst/annual-filing" },
          { name: "GST Amendment", href: "/gst/amendment" }
        ]
      }
    ]
  },
  {
    label: "ITR Filing",
    icon: "FileText",
    columns: [
      {
        title: "ITR Filing",
        links: [
          { name: "Salaried-ITR Filing", href: "/itr/salaried" },
          { name: "Business-ITR Filing", href: "/itr/business" },
          { name: "Tax Audit", href: "/itr/audit" },
          { name: "TDS Return Filing", href: "/itr/tds-return" },
          { name: "TAN Registration", href: "/itr/tan-registration" }
        ]
      }
    ]
  },
  {
    label: "Other Registration",
    icon: "Award",
    columns: [
      {
        title: "Business & Trademark",
        links: [
          { name: "Trademark Registration", href: "/trademark/registration" },
          { name: "Export Import Registration", href: "/licenses/import-export" },
          { name: "Shop Establishment", href: "/business/shop-establishment" },
          { name: "MSME Registration", href: "/business/msme" }
        ]
      },
      {
        title: "Licenses & Compliance",
        links: [
          { name: "FSSAI Registration", href: "/licenses/fssai" },
          { name: "PF Registration", href: "/payroll/pf" },
          { name: "ESI Registration", href: "/payroll/esi" },
          { name: "Factory Pollution Registration", href: "/environment/pollution" }
        ]
      },
      {
        title: "Organizations",
        links: [
          { name: "Trust Registration", href: "/organization/trust" },
          { name: "NGO Registration", href: "/organization/ngo" }
        ]
      }
    ]
  },
  {
    label: "Other Services",
    icon: "Briefcase",
    columns: [
      {
        title: "Services",
        links: [
          { name: "Accounting Services", href: "/services/accounting" },
          { name: "ISO Certification", href: "/services/iso-certification" }
        ]
      }
    ]
  },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" }
];
