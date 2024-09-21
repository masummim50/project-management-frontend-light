
import JournalOverview from "./profile/JournalOverview";
import PersonalProjectOverview from "./profile/PersonalProjectOverview";
import TodoOverview from "./profile/TodoOverview";
import useDocumentTitle from "../../UseDocumentTitle";
import { useState } from "react";



const Profile = () => {
  useDocumentTitle({title:'Dashboard'})
  const [showRandom, setShowRandom] = useState(true);
  return (
      <div>
        <TodoOverview showRandom={showRandom} setShowRandom={setShowRandom} />
        <PersonalProjectOverview showRandom={showRandom} />
        <JournalOverview />
      </div>
  );
};

export default Profile;
