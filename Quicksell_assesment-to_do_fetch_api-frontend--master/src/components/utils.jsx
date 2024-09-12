// utils.js
export const groupByStatus = (tickets) => {
    return tickets.reduce((groups, ticket) => {
      const { status } = ticket;
      if (!groups[status]) {
        groups[status] = [];
      }
      groups[status].push(ticket);
      return groups;
    }, {});
  };
  