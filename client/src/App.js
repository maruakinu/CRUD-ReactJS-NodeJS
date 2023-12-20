import { useState, useEffect } from "react";
import { DetailsAPI } from "./api/system-api";

export function App() {
  const [currentDetails, setCurrentDetails] = useState([]);

  // Async Function
  async function fetchDetailsInfo() {
    const tutorialList = await DetailsAPI.fetchDetails();
    // Save the tutorials data in currentTutorial state

    setCurrentDetails(tutorialList.data);
  }

  const removeTutorials = async (id) => {
    try {
      await DetailsAPI.deleteDetails(id);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchDetailsInfo();
  }, []);

  return (
    <>
      <div>
        <table>
          <thead>
            <tr>
              <th>Serial ID</th>
              <th>Description</th>
              <th>Title</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {currentDetails.map((val) => {
              return (
                <tr>
                  <td>{val.id}</td>
                  <td>{val.description}</td>
                  <td>{val.title}</td>
                  <td>
                    <button
                      onClick={() => {
                        removeTutorials(val.id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
