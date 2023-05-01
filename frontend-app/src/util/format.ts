export const { format: FormatDate } = new Intl.DateTimeFormat("pt-br", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
});

const ptBrMonths: { [k: string]: number } = {
  Janeiro: 1,
  Fevereiro: 2,
  Março: 3,
  abril: 4,
  maio: 5,
  junho: 6,
  julho: 7,
  agosto: 8,
  setembro: 9,
  outubro: 10,
  novembro: 11,
  Dezembro: 12,
};

export const newDateFromDateString = (dateString: string): number => {
  const [ptBrMonth, , year] = dateString.split(" ");
  const monthNumber = ptBrMonths[ptBrMonth];
  const result = year + monthNumber;
  return Number(result);
};
