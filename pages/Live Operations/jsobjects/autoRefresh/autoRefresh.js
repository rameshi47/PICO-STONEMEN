export default {
  startRefresh() {
    setInterval(() => {
      // Page 1 queries
      qGetOrders.run();

      // Page 2 queries
      qTodayStats.run();
      qLineStatus.run();
      qRecentEvents.run();
    }, 10000); // every 5 seconds
  }
}