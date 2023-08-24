import { useParams } from "react-router";
import { getParticipantSession } from "../services/SgClimateService";

export const SessionDetail = () => {
  let params = useParams();
  const sessionId = parseInt(params.sessionId || "");
  const session = getParticipantSession(sessionId);
  return (
    <div key={session?.id}>
      {session && (
        <>
          <p>Date: {session.date}</p>
          <p>Session Type: {session.sessionType}</p>
          <p>Host: {session.host}</p>
          <p>Url: {session.url}</p>
        </>
      )}
    </div>
  );
};
