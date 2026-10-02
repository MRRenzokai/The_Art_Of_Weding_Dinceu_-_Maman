function initCalendarEvents(weddingData) {
    const akadBtn = document.getElementById("save-akad-calendar");
    const receptionBtn = document.getElementById("save-reception-calendar");

    function createGoogleCalendarUrl(title, location, details, dateString) {
        // Format date ISO untuk Google Calendar: YYYYMMDDTHHMMSSZ
        // Kita parsing tanggal akad/resepai dari weddingData
        const startDate = new Date(weddingData.weddingDateISO);
        const endDate = new Date(startDate.getTime() + (3 * 60 * 60 * 1000)); // Durasi 3 jam

        const formatGCalDate = (date) => {
            return date.toISOString().replace(/-|:|\.\d\d\d/g, "");
        };

        const params = new URLSearchParams({
            action: 'TEMPLATE',
            text: title,
            dates: `${formatGCalDate(startDate)}/${formatGCalDate(endDate)}`,
            details: details,
            location: location,
        });

        return `https://calendar.google.com/calendar/render?${params.toString()}`;
    }

    if (akadBtn) {
        akadBtn.addEventListener("click", () => {
            const title = `Akad Nikah ${weddingData.groom.nickname} & ${weddingData.bride.nickname}`;
            const url = createGoogleCalendarUrl(
                title, 
                `${weddingData.akad.venue}, ${weddingData.akad.address}`, 
                `Acara Akad Nikah ${weddingData.groom.name} dan ${weddingData.bride.name}`,
                weddingData.weddingDateISO
            );
            window.open(url, '_blank');
        });
    }

    if (receptionBtn) {
        receptionBtn.addEventListener("click", () => {
            const title = `Resepsi Pernikahan ${weddingData.groom.nickname} & ${weddingData.bride.nickname}`;
            const url = createGoogleCalendarUrl(
                title, 
                `${weddingData.reception.venue}, ${weddingData.reception.address}`, 
                `Acara Resepsi Pernikahan ${weddingData.groom.name} dan ${weddingData.bride.name}`,
                weddingData.weddingDateISO
            );
            window.open(url, '_blank');
        });
    }
}