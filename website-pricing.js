
/* ==========================================
   WEBSITE PRICING CARDS
   Complete optimized pricing breakdown
   Maximum prices display +
   Single-open accordion preserved
========================================== */

(() => {
    "use strict";

    /* ==========================================
       CURRENCY FORMATTERS
    ========================================== */

    const formatINR = value =>
        "₹" + Number(value).toLocaleString("en-IN");

    const formatMaximum = value =>
        `${formatINR(value)}+`;

    /* ==========================================
       COMMON ADDITIONAL COSTS
    ========================================== */

    const commonExtra = [
        ["Domain registration", "₹800/year", "₹2,000+/year"],
        ["Hosting, backend server and database", "₹0/year*", "₹30,000+/year"],
        ["Maintenance, bug fixes and technical support", "₹3,000/month", "₹10,000+/month"],
        ["Source-code handover / exclusive ownership arrangement", "₹10,000", "₹30,000+ one-time"]
    ];

    /* ==========================================
       PRICING DATA

       Format:
       [Feature / Module, Minimum, Maximum]

       Institute Management System:
       Minimum = ₹50,000
       Maximum = ₹1,50,000+
    ========================================== */

    const pricingData = [
        {
            name: "Landing Page",
            min: 5000,
            max: 15000,
            rows: [
                ["Responsive layout and page structure", 2000, 6000],
                ["Hero section, headline and CTA", 1000, 2500],
                ["Content sections and visual styling", 1000, 2000],
                ["Contact form and basic validation", 1000, 2500],
                ["Mobile optimization and cross-device testing", 0, 1500],
                ["Basic SEO and performance checks", 0, 500]
            ]
        },

        {
            name: "Personal Portfolio Website",
            min: 3000,
            max: 10000,
            rows: [
                ["Home page and personal introduction", 800, 2000],
                ["About section and profile information", 500, 1000],
                ["Projects and skills showcase", 700, 2500],
                ["Education and experience sections", 400, 1200],
                ["Contact form and social links", 300, 1500],
                ["Responsive design and deployment setup", 300, 1800]
            ]
        },

        {
            name: "Developer / Professional Portfolio",
            min: 5000,
            max: 15000,
            rows: [
                ["Custom UI design and responsive layout", 1500, 4000],
                ["About, skills and technology stack", 700, 1500],
                ["Projects and project detail sections", 1000, 3000],
                ["Experience, education and achievements", 700, 2000],
                ["Contact form and social integrations", 500, 2000],
                ["SEO, performance testing and deployment", 600, 2500]
            ]
        },

        {
            name: "Business / Corporate Website",
            min: 8000,
            max: 40000,
            rows: [
                ["Homepage and company introduction", 2000, 6000],
                ["About, team and company profile pages", 1000, 5000],
                ["Services and individual service pages", 1500, 7000],
                ["Contact form, map and social links", 1000, 5000],
                ["Testimonials, gallery and CTA sections", 1000, 4000],
                ["CMS / editable content management", 1000, 7000],
                ["Responsive design, SEO and deployment", 500, 6000]
            ]
        },

        {
            name: "School / Coaching Website",
            min: 10000,
            max: 30000,
            rows: [
                ["Homepage and institute information", 2000, 5000],
                ["About, faculty and infrastructure pages", 1500, 4000],
                ["Courses, batches and fee information", 1500, 4000],
                ["Admission and enquiry forms", 1500, 4000],
                ["Notices, events and announcements", 1000, 3000],
                ["Admin content management", 1500, 5000],
                ["Responsive design, SEO and deployment", 1000, 5000]
            ]
        },

        /* ======================================
           INSTITUTE MANAGEMENT SYSTEM (ERP)
           Optimized and merged feature rows
        ====================================== */

        {
            name: "Institute Management System (ERP)",
            min: 50000,
            max: 150000,
            rows: [
                [
                    "Public website, institute information and admission enquiries",
                    5000,
                    16000
                ],
                [
                    "Student records, courses, batches and academic management",
                    6500,
                    19000
                ],
                [
                    "Fee management, installments, due dates and receipts",
                    5000,
                    15000
                ],
                [
                    "Attendance management and attendance reports",
                    3000,
                    10000
                ],
                [
                    "Admin dashboard, summaries and reports",
                    3000,
                    10000
                ],
                [
                    "Student and teacher login portals",
                    9000,
                    22000
                ],
                [
                    "Notifications, email alerts, backend APIs, database and role-based access",
                    10500,
                    32000
                ],
                [
                    "Biometric attendance and payment gateway integrations",
                    5000,
                    20000
                ],
                [
                    "Testing, deployment and production setup",
                    3000,
                    6000
                ]
            ]
        },

        {
            name: "E-commerce Website",
            min: 20000,
            max: 80000,
            rows: [
                ["Storefront design and homepage", 3000, 10000],
                ["Product catalogue and product detail pages", 4000, 12000],
                ["Categories, search and product filters", 2500, 8000],
                ["Shopping cart and checkout flow", 3000, 10000],
                ["Payment gateway integration", 3000, 10000],
                ["Order management and customer accounts", 2000, 8000],
                ["Admin product and inventory management", 1500, 10000],
                ["Shipping, testing and deployment", 1000, 12000]
            ]
        },

        {
            name: "Restaurant / Cafe Website",
            min: 8000,
            max: 25000,
            rows: [
                ["Homepage and restaurant information", 1500, 4000],
                ["Menu, categories and pricing display", 1500, 4000],
                ["Food gallery and featured items", 1000, 3000],
                ["Reservation and enquiry forms", 1500, 5000],
                ["Map, opening hours and contact details", 1000, 3000],
                ["Social links and customer testimonials", 500, 2000],
                ["Responsive design, SEO and deployment", 1000, 4000]
            ]
        },

        {
            name: "Hotel / Travel Website",
            min: 15000,
            max: 50000,
            rows: [
                ["Homepage and property / destination pages", 3000, 8000],
                ["Room, package or tour listings", 3000, 9000],
                ["Gallery and detailed information pages", 1500, 5000],
                ["Booking and enquiry forms", 2500, 9000],
                ["Availability and booking management", 1500, 7000],
                ["Admin content management", 1500, 6000],
                ["Maps, responsive design and deployment", 2000, 6000]
            ]
        },

        {
            name: "Medical Store / Pharmacy Website",
            min: 10000,
            max: 35000,
            rows: [
                ["Homepage and pharmacy information", 1500, 4000],
                ["Medicine and product catalogue", 2500, 7000],
                ["Search, categories and filters", 1500, 5000],
                ["Product detail and availability display", 1000, 4000],
                ["Enquiry and order request forms", 1500, 5000],
                ["Admin inventory and content management", 1000, 6000],
                ["Responsive design, testing and deployment", 1000, 4000]
            ]
        },

        {
            name: "Clinic / Hospital Website",
            min: 15000,
            max: 50000,
            rows: [
                ["Homepage and hospital information", 2000, 6000],
                ["Doctor profiles and department pages", 3000, 8000],
                ["Services, facilities and treatment pages", 2000, 7000],
                ["Appointment request and enquiry forms", 2500, 8000],
                ["Contact details, maps and visiting hours", 1000, 3000],
                ["Admin content and appointment management", 2000, 8000],
                ["Notifications, responsive design and deployment", 2500, 10000]
            ]
        },

        {
            name: "CA / Accountant Website",
            min: 8000,
            max: 25000,
            rows: [
                ["Homepage and professional profile", 1500, 4000],
                ["Services and practice-area pages", 1500, 4000],
                ["About, qualifications and experience", 1000, 3000],
                ["Client enquiry and appointment forms", 1500, 4000],
                ["Resources, FAQs and document information", 1000, 3000],
                ["Optional document upload / enquiry workflow", 500, 3000],
                ["Responsive design, SEO and deployment", 1000, 4000]
            ]
        },

        {
            name: "Real Estate Website",
            min: 15000,
            max: 50000,
            rows: [
                ["Homepage and property showcase", 2000, 6000],
                ["Property listings and detail pages", 3000, 9000],
                ["Search, filters and location information", 2500, 8000],
                ["Property images and gallery", 1500, 4000],
                ["Enquiry forms and lead capture", 2000, 6000],
                ["Admin property and listing management", 2000, 9000],
                ["Responsive design, maps and deployment", 2000, 8000]
            ]
        },

        {
            name: "Blog / News Website",
            min: 8000,
            max: 25000,
            rows: [
                ["Homepage and article listing", 1500, 4000],
                ["Article detail pages and content layout", 1500, 4000],
                ["Categories, tags and search", 1000, 3000],
                ["Admin article publishing panel", 1500, 5000],
                ["Image uploads and featured content", 800, 2500],
                ["SEO metadata and social sharing", 700, 2500],
                ["Responsive design, testing and deployment", 1000, 4000]
            ]
        },

        {
            name: "Booking / Appointment System",
            min: 15000,
            max: 50000,
            rows: [
                ["Service listing and detail pages", 2000, 6000],
                ["Availability and schedule selection", 3000, 9000],
                ["Booking form and customer information", 2500, 8000],
                ["Admin booking and schedule management", 3000, 10000],
                ["Email notifications and booking status", 1500, 5000],
                ["Booking history and basic reporting", 1000, 4000],
                ["Responsive design, testing and deployment", 2000, 8000]
            ]
        },

        {
            name: "Online Learning Platform",
            min: 25000,
            max: 100000,
            rows: [
                ["Student and teacher authentication", 3000, 10000],
                ["Course catalogue and course detail pages", 3000, 10000],
                ["Lesson and learning-material management", 4000, 15000],
                ["Assignment upload and submission workflow", 3000, 10000],
                ["Quizzes, marks and progress tracking", 4000, 15000],
                ["Student and teacher dashboards", 3000, 12000],
                ["Admin management and notifications", 2500, 10000],
                ["Testing, deployment and integrations", 2500, 18000]
            ]
        },

        {
            name: "Job Portal / Recruitment Website",
            min: 25000,
            max: 100000,
            rows: [
                ["Homepage and job listing pages", 3000, 10000],
                ["Job search and filtering", 3000, 10000],
                ["Candidate registration and profiles", 4000, 12000],
                ["Employer accounts and job posting", 4000, 15000],
                ["Applications and status management", 4000, 15000],
                ["Admin moderation and user management", 3000, 12000],
                ["Email alerts and notifications", 1500, 8000],
                ["Testing, deployment and responsive UI", 2500, 18000]
            ]
        },

        {
            name: "CRM / Inventory Management System",
            min: 30000,
            max: 120000,
            rows: [
                ["Authentication and role-based permissions", 3000, 10000],
                ["Customer and supplier records", 4000, 12000],
                ["Product and inventory management", 5000, 18000],
                ["Stock movement and transaction workflows", 5000, 18000],
                ["Search, filters and data management", 3000, 10000],
                ["Reports, analytics and data export", 4000, 15000],
                ["Admin dashboard and notifications", 3000, 12000],
                ["Testing, deployment and API integration", 3000, 25000]
            ]
        },

        {
            name: "Admin Dashboard / Analytics Panel",
            min: 12000,
            max: 50000,
            rows: [
                ["Dashboard layout and summary cards", 2500, 8000],
                ["Charts, graphs and key metrics", 2500, 9000],
                ["Data tables, search and filters", 2000, 7000],
                ["Authentication and role access", 1500, 6000],
                ["API and database integration", 1500, 8000],
                ["Reports, exports and data views", 1000, 5000],
                ["Responsive design, testing and deployment", 1000, 7000]
            ]
        },

        {
            name: "Custom MERN Web Application",
            min: 30000,
            max: 200000,
            rows: [
                ["Requirements analysis and technical planning", 3000, 12000],
                ["UI design and responsive frontend", 7000, 35000],
                ["Backend APIs and database models", 6000, 35000],
                ["Authentication and role permissions", 4000, 18000],
                ["Core business features and workflows", 5000, 40000],
                ["Third-party API and service integrations", 2000, 20000],
                ["Testing, security checks and bug fixing", 1500, 15000],
                ["Deployment, documentation and handover", 1500, 25000]
            ]
        },

        {
            name: "Existing Website Redesign",
            min: 5000,
            max: 25000,
            rows: [
                ["Existing UI review and design refresh", 1000, 4000],
                ["Homepage and page-layout improvements", 1500, 6000],
                ["Typography, colors and component styling", 800, 3000],
                ["Mobile responsiveness and accessibility fixes", 1000, 5000],
                ["Content and image migration", 300, 2000],
                ["Performance and SEO improvements", 200, 2000],
                ["Cross-browser testing and deployment", 200, 3000]
            ]
        }
    ];

    /* ==========================================
       PRICING LIST
    ========================================== */

    const list = document.getElementById("websitePricingList");

    if (!list) {
        return;
    }

    /* Prevent duplicate cards if script runs again */

    list.replaceChildren();

    /* ==========================================
       CREATE PRICE TABLE
       Every maximum value displays +
    ========================================== */

    function makeTable(rows, extra = false) {
        const table = document.createElement("table");
        table.className = "website-pricing-table";

        const thead = document.createElement("thead");
        const header = document.createElement("tr");

        [
            "Feature / Module",
            "Minimum",
            "Maximum"
        ].forEach(label => {
            const th = document.createElement("th");
            th.textContent = label;
            header.appendChild(th);
        });

        thead.appendChild(header);
        table.appendChild(thead);

        const tbody = document.createElement("tbody");

        rows.forEach(row => {
            const tr = document.createElement("tr");

            row.forEach((value, index) => {
                const td = document.createElement("td");

                if (index === 0 || extra) {
                    td.textContent = value;
                } else if (index === 1) {
                    td.textContent =
                        typeof value === "number"
                            ? formatINR(value)
                            : value;
                } else {
                    td.textContent =
                        typeof value === "number"
                            ? formatMaximum(value)
                            : value;
                }

                tr.appendChild(td);
            });

            tbody.appendChild(tr);
        });

        table.appendChild(tbody);

        return table;
    }

    /* ==========================================
       ADD TABLE TO CONTAINER
    ========================================== */

    function addTable(parent, rows, extra = false) {
        const wrap = document.createElement("div");

        wrap.className = "website-pricing-table-wrap";
        wrap.appendChild(makeTable(rows, extra));

        parent.appendChild(wrap);
    }

    /* ==========================================
       CREATE PRICING CARDS
    ========================================== */

    pricingData.forEach((project, index) => {
        const item = document.createElement("article");
        item.className = "website-pricing-item";

        /* Card button */

        const button = document.createElement("button");

        button.type = "button";
        button.className = "website-pricing-toggle";
        button.id = `pricing-toggle-${index}`;

        button.setAttribute("aria-expanded", "false");
        button.setAttribute(
            "aria-controls",
            `pricing-details-${index}`
        );

        /* Website name and price */

        const textWrap = document.createElement("span");

        const name = document.createElement("span");
        name.className = "website-pricing-name";
        name.textContent = project.name;

        const range = document.createElement("span");
        range.className = "website-pricing-range";

        range.textContent =
            `${formatINR(project.min)} – ${formatMaximum(project.max)}`;

        textWrap.append(name, range);

        /* Expand icon */

        const chevron = document.createElement("span");

        chevron.className = "website-pricing-chevron";
        chevron.setAttribute("aria-hidden", "true");
        chevron.textContent = "⌄";

        button.append(textWrap, chevron);

        /* Expanded details */

        const details = document.createElement("div");

        details.className = "website-pricing-details";
        details.id = `pricing-details-${index}`;

        details.setAttribute("role", "region");
        details.setAttribute("aria-labelledby", button.id);

        details.hidden = true;

        /* Feature-wise pricing */

        addTable(details, project.rows);

        /* Additional cost heading */

        const subheading = document.createElement("h3");

        subheading.className = "website-pricing-subheading";
        subheading.textContent =
            "Domain, Hosting, Maintenance & Code Ownership";

        details.appendChild(subheading);

        /* Common additional costs */

        addTable(details, commonExtra, true);

        /* Development price summary */

        const total = document.createElement("div");

        total.className = "website-pricing-total";

        total.textContent =
            `Estimated development: ${formatINR(project.min)} – ` +
            formatMaximum(project.max);

        details.appendChild(total);

        /* Disclaimer */

        const note = document.createElement("p");

        note.className = "pricing-disclaimer";

        note.textContent =
            "*Free hosting depends on provider limits and availability. " +
            "Domain, hosting and maintenance are separate from the " +
            "development estimate. Optional modules may cost extra. " +
            "Final pricing depends on the confirmed project scope.";

        details.appendChild(note);

        /* ======================================
           ACCORDION FUNCTIONALITY
        ====================================== */

        button.addEventListener("click", () => {
            const willOpen =
                button.getAttribute("aria-expanded") !== "true";

            /* Close all other cards */

            list.querySelectorAll(
                ".website-pricing-toggle"
            ).forEach(other => {
                other.setAttribute("aria-expanded", "false");

                const panel = document.getElementById(
                    other.getAttribute("aria-controls")
                );

                if (panel) {
                    panel.hidden = true;
                }
            });

            /* Open or close the selected card */

            button.setAttribute(
                "aria-expanded",
                String(willOpen)
            );

            details.hidden = !willOpen;
        });

        item.append(button, details);
        list.appendChild(item);
    });

})();
