interface Pagination {
  limit?: string;
  page?: string;
}

export const getPaginationOptions = ({ limit, page }: Pagination) => {
  const newLimit = Number(limit);
  const skip = (Number(page) - 1) * Number(limit);

  return {
    limit: newLimit,
    skip,
  };
};
