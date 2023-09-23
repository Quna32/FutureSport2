import React from 'react';

function Table() {
  return (
    <div className="table-container">
      <h3>Team Positions</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec justo
        eu metus consectetur ullamcorper. Fusce vestibulum tortor a odio
        pulvinar, vel feugiat leo varius. Nulla facilisi. Nunc maximus convallis
        lacinia. Ut dignissim justo eu ante lacinia, at pulvinar dolor tempor.
        Integer vel ex vel lorem posuere fermentum.
      </p>
      <table className="table-data">
        <thead>
          <tr>
            <th>Player Name</th>
            <th>Age</th>
            <th>Position</th>
            <th>Jersey Number</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John Doe</td>
            <td>25</td>
            <td>Forward</td>
            <td>10</td>
          </tr>
          <tr>
            <td>Jane Smith</td>
            <td>23</td>
            <td>Midfielder</td>
            <td>7</td>
          </tr>
          <tr>
            <td>Michael Johnson</td>
            <td>28</td>
            <td>Defender</td>
            <td>5</td>
          </tr>
          <tr>
            <td>Emily Brown</td>
            <td>22</td>
            <td>Goalkeeper</td>
            <td>1</td>
          </tr>
        </tbody>
      </table>
      
      <hr />
    </div>
  );
}

export default Table;
