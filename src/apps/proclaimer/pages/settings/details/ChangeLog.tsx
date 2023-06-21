const ChangeLog = () => {
  const changes = [
    {
      date: "June 19, 2023",
      changes: [
        "Add user location to map",
        "Fix map resize on orientation change",
      ],
    },
    {
      date: "June 16, 2023",
      changes: ["Fix order of house numbers in suburb list"],
    },
    {
      date: "June 13, 2023",
      changes: [
        "Status bar follows user theme color",
        "Add Map View to Return Page",
      ],
    },
    {
      date: "June 4, 2023",
      changes: [
        "Prevent back button from closing app on Android devices",
        "Hide keyboard when adding address",
        "Fix Version time",
      ],
    },
  ];
  return (
    <div className="m-6">
      {changes.map((change, index) => (
        <ul
          key={index}
          className="mt-8 font-bold dark:text-white list-disc p-4"
        >
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
