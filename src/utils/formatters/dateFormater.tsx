const dateFormater = (dateToFormat: Date): string => {
  return new Date(dateToFormat).toLocaleDateString('pt-br', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
};
export default dateFormater;
