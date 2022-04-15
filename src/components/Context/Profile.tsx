import { useUserContext } from "../../stores/useContext";

export default function Profile() {
  const {
    user: { fullName, email },
    updateUser,
  } = useUserContext();

  return (
    <div>
      <input
        type="text"
        value={fullName}
        placeholder="Full Name"
        onChange={(e) => updateUser({ fullName: e.target.value })}
      />
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => updateUser({ email: e.target.value })}
      />
    </div>
  );
}
