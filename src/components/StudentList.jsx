const students = [
  { id: 1, name: 'Ali', score: 85 },
  { id: 2, name: 'Sara', score: 42 },
  { id: 3, name: 'Hamza', score: 67 },
  { id: 4, name: 'Ayesha', score: 38 },
];

function StudentList() {
  return (
    <div className="student-list">
      {students.map(({ id, name, score }) => (
        <div key={id} className="student-item">
          <span className="student-name">{name}</span>
          <span className="student-score">Score: {score}</span>
          {score >= 50 ? (
            <span className="status pass">Pass</span>
          ) : (
            <span className="status fail">Fail</span>
          )}
        </div>
      ))}
    </div>
  );
}

export default StudentList;