export const fullDateFormatter = new Intl.DateTimeFormat("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
});

export const monthFormatter = new Intl.DateTimeFormat("fr-FR", {
    month: "long",
    year: "numeric",
});
