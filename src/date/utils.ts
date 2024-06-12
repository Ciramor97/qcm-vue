import dayjs from "dayjs";

function formatDateDDMMYYYY(date: string): string {
  return dayjs(date).format("DD/MM/YYYY");
}

export { formatDateDDMMYYYY };
