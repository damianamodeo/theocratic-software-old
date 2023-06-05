const ChangeLog = () => {
  const changes = [
    {
      date: "June 4",
      changes: ["Prevent back button from closing app on Android devices", "Hide keyboard when adding address","Fix Version time"],
    },
  ];
  return (
    <div className="m-6">
      {changes.map((change, index) => (
        <ul key={index} className="mt-8 font-bold dark:text-white list-disc p-4">
          {change.date}
          {change.changes.map((change, index) => (
            <li key={index} className="mt-1 font-light">
              {change}
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
};

export default ChangeLog;
