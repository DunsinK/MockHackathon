const Dashboard = () => {
  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold text-green-600">Dashboard</h1>
      <p className="mb-2">Hey, welcome back to U-Hack</p>
      <p className="mb-4">Here is your dashboard where you can submit your project:</p>
      <input type="file" id="project" name="project" className="mx-auto" />
    </div>
  );
};

export default Dashboard;
