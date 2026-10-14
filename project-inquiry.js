
document.addEventListener('DOMContentLoaded', () => {
    const scriptURL =
        'https://script.google.com/macros/s/AKfycbxAhOHk32GLD7AcZHWvcL5g7JG2NnkY1_a30k2poBarTJejBvWdKQbJgvKU_r1PBbwpBw/exec';

    const form = document.getElementById('projectInquiryForm');
    const statusMessage = document.getElementById('inquiryMessage');
    const submitButton = document.getElementById('submitInquiryBtn');

    if (!form || !statusMessage || !submitButton) {
        return;
    }

    const getValue = (name) => {
        const field = form.elements.namedItem(name);

        return field ? field.value.trim() : '';
    };

    const getSelectedOptions = (name) => {
        return Array.from(
            form.querySelectorAll(`input[name="${name}"]:checked`)
        ).map((input) => input.value);
    };

    const buildSection = (title, entries) => {
        const lines = entries
            .filter(([, value]) => {
                return Array.isArray(value)
                    ? value.length > 0
                    : Boolean(value);
            })
            .map(([label, value]) => {
                const formattedValue = Array.isArray(value)
                    ? value.join(', ')
                    : value;

                return `${label}: ${formattedValue}`;
            });

        if (lines.length === 0) {
            return '';
        }

        return `${title}\n${lines.join('\n')}`;
    };

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        statusMessage.textContent = '';
        statusMessage.className = 'inquiry-status';

        if (!form.reportValidity()) {
            return;
        }

        const selectedFeatures = getSelectedOptions('featureOption');
        const selectedServices = getSelectedOptions('serviceOption');

        const sections = [
            buildSection('CONTACT & PROJECT', [
                ['Name', getValue('Client Name')],
                ['Email', getValue('Client Email')],
                ['Phone / WhatsApp', getValue('Phone / WhatsApp')],
                ['Project Name', getValue('Project Name')],
                ['Project Type', getValue('Project Type')],
                ['Project Status', getValue('Project Status')],
                ['Project Requirements', getValue('Project Requirements')],
                ['Reference Website', getValue('Reference URL')],
                ['Expected Timeline', getValue('Expected Timeline')]
            ]),

            buildSection('REQUIRED FEATURES', [
                ['Selected Features', selectedFeatures]
            ]),

            buildSection('BUDGET & PAYMENT', [
                ['Estimated Budget', getValue('Estimated Budget')],
                ['Payment Schedule', getValue('Payment Schedule')],
                ['Domain & Hosting', getValue('Domain & Hosting')],
                ['Hosting Cost Preference', getValue('Hosting Cost Preference')]
            ]),

            buildSection('SUPPORT & PROJECT TERMS', [
                ['Maintenance Preference', getValue('Maintenance Preference')],
                ['Support Services', getValue('Maintenance Services')],
                ['Additional Services', selectedServices],
                ['Source Code & Ownership', getValue('Source Code & Ownership')],
                ['Additional Notes', getValue('Additional Notes')]
            ])
        ].filter(Boolean);

        const projectSummary = sections.join('\n\n');

        document.getElementById('sheetName').value =
            getValue('Client Name');

        document.getElementById('sheetEmail').value =
            getValue('Client Email');

        document.getElementById('sheetMessage').value =
            projectSummary;

        document.getElementById('sheetFeatures').value =
            selectedFeatures.join(', ');

        const formData = new FormData(form);

        submitButton.disabled = true;
        submitButton.textContent = 'Submitting...';

        statusMessage.textContent = 'Submitting your project inquiry...';

        try {
            await fetch(scriptURL, {
                method: 'POST',
                body: formData,
                mode: 'no-cors'
            });

            statusMessage.textContent =
                'Your inquiry has been sent. Thank you for sharing your project details.';

            statusMessage.classList.add('success');

            form.reset();
        } catch (error) {
            console.error('Project inquiry submission error:', error);

            statusMessage.textContent =
                'Unable to submit your inquiry. Please check your connection and try again.';

            statusMessage.classList.add('error');
        } finally {
            submitButton.disabled = false;
            submitButton.textContent = 'Submit Project Inquiry';
        }
    });
});
