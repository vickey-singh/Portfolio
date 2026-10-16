/* Website pricing cards — static hover styling, no animations. */

(() => {
    "use strict";

    const formatINR = value =>
        "₹" + Number(value).toLocaleString("en-IN");

    const commonExtra = [
        ["Domain registration", "₹800/year", "₹2,000/year"],
        ["Hosting, backend server and database", "₹0/year*", "₹30,000+/year"],
        ["Maintenance, bug fixes and technical support", "₹3,000/month", "₹10,000/month"],
        ["Source-code handover / exclusive ownership arrangement", "₹10,000", "₹30,000 one-time"]
    ];

    const pricingData = [
        {
            name: "Landing Page",
            min: 5000,
            max: 15000,
            rows: [
                ["Responsive page design and layout", 2500, 6000],
                ["Hero section, content sections and CTA", 1500, 4000],
                ["Contact form and basic validation", 1000, 2500],
                ["Mobile responsiveness and testing", 0, 2500]
            ]
        },
        {
            name: "Personal Portfolio Website",
            min: 3000,
            max: 10000,
            rows: [
                ["Home / introduction section", 1000, 2500],
                ["Projects and skills sections", 1000, 3000],
                ["Contact form and social links", 500, 2000],
                ["Responsive design and deployment setup", 500, 2500]
            ]
        },
        {
            name: "Developer / Professional Portfolio",
            min: 5000,
            max: 15000,
            rows: [
                ["Custom UI and responsive layout", 1500, 4000],
                ["Projects, experience and skills sections", 1500, 4000],
                ["Contact form and integrations", 1000, 3000],
                ["SEO basics, testing and deployment", 1000, 4000]
            ]
        },
        {
            name: "Business / Corporate Website",
            min: 8000,
            max: 40000,
            rows: [
                ["Home and company pages", 2500, 8000],
                ["Services and contact pages", 2000, 7000],
                ["Forms, map and social links", 1500, 6000],
                ["Responsive design, SEO basics and testing", 2000, 9000],
                ["Optional CMS / editable content", 0, 10000]
            ]
        },
        {
            name: "School / Coaching Website",
            min: 10000,
            max: 30000,
            rows: [
                ["Public pages and institute information", 3000, 7000],
                ["Courses, faculty and notices", 2500, 7000],
                ["Admission / enquiry form", 2000, 6000],
                ["Admin content management", 1500, 6000],
                ["Responsive design and deployment", 1000, 4000]
            ]
        },
        {
            name: "Institute Management System (EduPortal type)",
            min: 157000,
            max: 392000,
            rows: [
                ["Landing page / Public website", 5000, 15000],
                ["Admission form + Razorpay + confirmation emails + receipt", 8000, 20000],
                ["Admin dashboard, summary cards and analytics", 8000, 18000],
                ["Admin home page customization", 4000, 10000],
                ["Student management, auto admission number and profiles", 10000, 25000],
                ["Student payments, installments, due dates and receipts", 12000, 30000],
                ["Course management", 4000, 10000],
                ["Student attendance management", 6000, 15000],
                ["Biometric attendance device integration", 10000, 25000],
                ["Automatic absent emails and holiday management", 5000, 12000],
                ["Online/offline payment and revenue management", 7000, 18000],
                ["Fee due reports and automatic/manual reminders", 7000, 18000],
                ["Faculty management", 5000, 12000],
                ["Faculty biometric attendance and salary calculation", 10000, 25000],
                ["Feedback management", 3000, 7000],
                ["Notice management", 3000, 7000],
                ["Institute settings: logo, address, map, email and links", 4000, 10000],
                ["Student login and complete student portal", 12000, 30000],
                ["Teacher login and complete teacher portal", 12000, 30000],
                ["Admin admission/payment notifications", 3000, 8000],
                ["Student notifications for attendance, assignments and marks", 4000, 10000],
                ["Backend APIs, database, authentication and role permissions", 10000, 25000],
                ["Deployment, production configuration, testing and bug fixes", 5000, 12000]
            ]
        },
        {
            name: "E-commerce Website",
            min: 20000,
            max: 80000,
            rows: [
                ["Storefront and product listing pages", 5000, 15000],
                ["Product details, categories and search/filter", 4000, 12000],
                ["Cart and checkout flow", 4000, 12000],
                ["Payment gateway integration", 4000, 12000],
                ["Admin product/order management", 3000, 18000]
            ]
        },
        {
            name: "Restaurant / Cafe Website",
            min: 8000,
            max: 25000,
            rows: [
                ["Home page and restaurant information", 2000, 6000],
                ["Menu and gallery", 2000, 5000],
                ["Reservation / enquiry form", 1500, 5000],
                ["Map, contact and social links", 1000, 3000],
                ["Responsive design and deployment", 1500, 6000]
            ]
        },
        {
            name: "Hotel / Travel Website",
            min: 15000,
            max: 50000,
            rows: [
                ["Destination / property pages and gallery", 4000, 12000],
                ["Packages, rooms or tour listings", 3000, 10000],
                ["Booking / enquiry forms", 3000, 10000],
                ["Admin content management", 2500, 8000],
                ["Maps, responsive UI and deployment", 2500, 10000]
            ]
        },
        {
            name: "Medical Store / Pharmacy Website",
            min: 10000,
            max: 35000,
            rows: [
                ["Product / medicine catalogue", 3000, 9000],
                ["Search and category filters", 2000, 6000],
                ["Enquiry / order request flow", 2000, 7000],
                ["Admin inventory/content management", 2000, 8000],
                ["Responsive design and deployment", 1000, 5000]
            ]
        },
        {
            name: "Clinic / Hospital Website",
            min: 15000,
            max: 50000,
            rows: [
                ["Doctor, department and service pages", 4000, 12000],
                ["Appointment request system", 3000, 10000],
                ["Patient information and contact pages", 2500, 8000],
                ["Admin management and notifications", 3000, 10000],
                ["Responsive design, maps and deployment", 2500, 10000]
            ]
        },
        {
            name: "CA / Accountant Website",
            min: 8000,
            max: 25000,
            rows: [
                ["Home and professional profile", 2000, 6000],
                ["Services and resources pages", 2000, 5000],
                ["Client enquiry / appointment form", 1500, 5000],
                ["Document enquiry / upload option", 1000, 4000],
                ["Responsive design and deployment", 1500, 5000]
            ]
        },
        {
            name: "Real Estate Website",
            min: 15000,
            max: 50000,
            rows: [
                ["Property listings and detail pages", 4000, 12000],
                ["Search, filters and location information", 3000, 10000],
                ["Enquiry / lead capture forms", 2500, 8000],
                ["Admin property management", 3000, 10000],
                ["Responsive design and deployment", 2500, 10000]
            ]
        },
        {
            name: "Blog / News Website",
            min: 8000,
            max: 25000,
            rows: [
                ["Article listing and detail pages", 2000, 6000],
                ["Categories, tags and search", 1500, 5000],
                ["Admin article publishing panel", 2000, 7000],
                ["SEO basics and sharing options", 1000, 3000],
                ["Responsive design and deployment", 1500, 4000]
            ]
        },
        {
            name: "Booking / Appointment System",
            min: 15000,
            max: 50000,
            rows: [
                ["Service and availability pages", 3000, 9000],
                ["Booking form and schedule selection", 4000, 12000],
                ["Admin booking management", 3000, 10000],
                ["Email notifications and status updates", 2000, 7000],
                ["Responsive design, testing and deployment", 3000, 12000]
            ]
        },
        {
            name: "Online Learning Platform",
            min: 25000,
            max: 100000,
            rows: [
                ["Student/teacher authentication and roles", 4000, 12000],
                ["Course and lesson management", 5000, 18000],
                ["Study materials and assignment uploads", 4000, 15000],
                ["Progress, quiz or marks module", 4000, 18000],
                ["Admin panel, notifications and deployment", 8000, 37000]
            ]
        },
        {
            name: "Job Portal / Recruitment Website",
            min: 25000,
            max: 100000,
            rows: [
                ["Job listings and search filters", 5000, 15000],
                ["Candidate registration and profiles", 5000, 15000],
                ["Employer accounts and job posting", 5000, 20000],
                ["Applications and status management", 5000, 20000],
                ["Admin dashboard, notifications and deployment", 5000, 30000]
            ]
        },
        {
            name: "CRM / Inventory Management System",
            min: 30000,
            max: 120000,
            rows: [
                ["Authentication and role permissions", 4000, 12000],
                ["Customer / product / inventory records", 7000, 25000],
                ["Transactions, stock or task workflows", 7000, 25000],
                ["Reports, search and data export", 5000, 20000],
                ["Admin dashboard, testing and deployment", 7000, 38000]
            ]
        },
        {
            name: "Admin Dashboard / Analytics Panel",
            min: 12000,
            max: 50000,
            rows: [
                ["Dashboard layout and summary cards", 3000, 10000],
                ["Charts, metrics and reports", 3000, 12000],
                ["Tables, search and filters", 2500, 10000],
                ["Authentication and role access", 1500, 8000],
                ["API integration, testing and deployment", 2000, 10000]
            ]
        },
        {
            name: "Custom MERN Web Application",
            min: 30000,
            max: 200000,
            rows: [
                ["Requirements analysis and UI planning", 3000, 15000],
                ["Frontend screens and responsive UI", 7000, 40000],
                ["Backend APIs and database", 8000, 50000],
                ["Authentication, permissions and integrations", 5000, 40000],
                ["Testing, deployment and handover", 7000, 55000]
            ]
        },
        {
            name: "Existing Website Redesign",
            min: 5000,
            max: 25000,
            rows: [
                ["UI review and design refresh", 1500, 6000],
                ["Page layout and styling updates", 1500, 7000],
                ["Mobile responsiveness and accessibility fixes", 1000, 5000],
                ["Content/layout migration and testing", 1000, 4000]
            ]
        }
    ];

    const list = document.getElementById("websitePricingList");

    if (!list) {
        return;
    }

    /* ==========================================
       CREATE PRICE TABLE
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

            [row[0], row[1], row[2]].forEach((value, index) => {
                const td = document.createElement("td");

                td.textContent =
                    !extra && index > 0
                        ? formatINR(value)
                        : value;

                tr.appendChild(td);
            });

            tbody.appendChild(tr);
        });

        table.appendChild(tbody);

        return table;
    }

    /* ==========================================
       ADD TABLE TO A CONTAINER
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
            `${formatINR(project.min)} – ${formatINR(project.max)}` +
            `${project.max >= 200000 ? "+" : ""}`;

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

        /* Domain, hosting, maintenance and code ownership */

        addTable(details, commonExtra, true);

        /* Development price summary */

        const total = document.createElement("div");

        total.className = "website-pricing-total";

        total.textContent =
            `Estimated development: ${formatINR(project.min)} – ` +
            `${formatINR(project.max)}` +
            `${project.max >= 200000 ? "+" : ""}`;

        details.appendChild(total);

        /* Additional information */

        const note = document.createElement("p");

        note.className = "pricing-disclaimer";

        note.textContent =
            "*Free hosting depends on provider limits and availability. " +
            "Domain, hosting and maintenance are separate from the " +
            "development estimate. Code ownership terms should be defined " +
            "in the project agreement.";

        details.appendChild(note);

        /* ==========================================
           CLICK TO EXPAND / COLLAPSE
        ========================================== */

        button.addEventListener("click", () => {
            const willOpen =
                button.getAttribute("aria-expanded") !== "true";

            /* Close all other cards */

            list.querySelectorAll(".website-pricing-toggle").forEach(other => {
                other.setAttribute("aria-expanded", "false");

                const panel = document.getElementById(
                    other.getAttribute("aria-controls")
                );

                if (panel) {
                    panel.hidden = true;
                }
            });

            /* Toggle the selected card */

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