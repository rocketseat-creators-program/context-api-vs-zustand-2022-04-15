import { useStore } from "../stores/Zustand";
import shallow from "zustand/shallow";

export default function Profile() {
  const { email, fullName } = useStore(
    (state) => ({
      fullName: state.user.fullName,
      email: state.user.email,
    }),
    shallow
  );

  const updateUser = useStore((state) => state.updateUser);

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
