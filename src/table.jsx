export default function Complex({ complex }) {
  return (
    <table border="1">
      <thead>
        <tr>
          <th>Company</th>
          <th>Jobs</th>
        </tr>
      </thead>
      <tbody>
        {complex.map((item, i) => (
          <tr key={i}>
            <td>{item.company}</td>
            <td>
              {item.jobs.map((job, j) => (
                <span key={j}>{job} </span>
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
