import { useNavigate } from 'react-router-dom';
import React from 'react';

function Dashboard() {
  return (
    <section className="dashboard-wrapper">
      <div className="dashboard-header">
        <h1 className="logo-text">dashboard</h1>
        <div className="dropdown">
          <button className="btn" type="button">
            <span id="user-name">john doe</span>
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
            <li className="dropdown-header">
              <div className="d-flex align-items-center">
                <div>
                  <div className="fw-semibold user-username" id="dw-username">
                    john doe
                  </div>
                  <div className="text-muted small user-email" id="dw-email">
                    johndow@example.com
                  </div>
                </div>
              </div>
            </li>
            <hr className="dropdown-divider" />
            <li className="dropdown-item" id="logout">
              Logout
            </li>
          </ul>
        </div>
      </div>
      <p className="subtitle">stay organized and productive</p>
      <p id="task-completed"></p>
      <div className="add-task-wrapper">
        <div className="add-task">
          <input
            type="text"
            name="todo"
            id="add-todo"
            placeholder="add a new task here"
          />

        </div>
        <div className="categories">
          {/* <label htmlFor="categories">categories</label> */}
          <select id="category-filter">
            <option value="select category">all category</option>
            <option value="personal">personal</option>
            <option value="shopping">shopping</option>
            <option value="health">health</option>
            <option value="work">work</option>
          </select>
          {/* <label htmlFor="priority">priority</label> */}
          <select id="priority-filter">
            <option value="">priority</option>
            <option value="low">low</option>
            <option value="medium">medium</option>
            <option value="high">high</option>
          </select>
          <button id="submit">
            <span className="material-symbols-outlined">add</span>
            add</button>
        </div>

      </div>
      <div className="filter">
        <div className="icon">
          <input
            type="search"
            name="search"
            id="search"
            placeholder="search tasks..."
          />
          <span class="material-symbols-outlined">search</span>
        </div>
        {/* <label htmlFor="search-category">categories</label> */}
        <select id="search-category">
          <option value="select category">all category</option>
          <option value="personal">personal</option>
          <option value="shopping">shopping</option>
          <option value="health">health</option>
          <option value="work">work</option>
        </select>
      </div>
      <div className="task-item">
        <input type="checkbox" id="check" checked="" />
        <div className="task-content">
          <div className="mode">
            <h1>complete project for the week</h1>
            <div className="priority-category">
              <p className="category shopping">shopping</p>
              <p className="priority high">high</p>
            </div>
          </div>
          <div className="icons">
            <span className="material-symbols-outlined">edit</span>
            <span className="material-symbols-outlined">close</span>
          </div>
        </div>
      </div>
      <div className="task-item">
        <input type="checkbox" id="check" checked="" />
        <div className="task-content">
          <div className="mode">
            <h1>complete project for the week</h1>
            <div className="priority-category">
              <p className="category work">work</p>
              <p className="priority medium">medium</p>
            </div>
          </div>
          <div className="icons">
            <span className="material-symbols-outlined">edit</span>
            <span className="material-symbols-outlined">close</span>
          </div>
        </div>
      </div>
      <div className="task-item">
        <input type="checkbox" id="check" checked="yes" />
        <div className="task-content">
          <div className="mode">
            <h1>complete project for the week</h1>
            <div className="priority-category">
              <p className="category health">health</p>
              <p className="priority low">low</p>
            </div>
          </div>
          <div className="icons">
            <span className="material-symbols-outlined">edit</span>
            <span className="material-symbols-outlined">close</span>
          </div>
        </div>
      </div>

      <div className="tracker">
        <input type="range" name="range" id="tracker" min="0" max="100" value="50" />
      </div>
    </section>
  );
}

export default Dashboard;
