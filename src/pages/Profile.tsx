import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import type { DemoUser } from "../context/AuthContext";
import "./Profile.css";

interface ProfileProps {
  onLogout: () => void;
}

function Profile({ onLogout }: ProfileProps) {
  const { user, updateProfile } = useAuth();

  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState<DemoUser>(
    user ?? { name: "", email: "", phone: "", address: "" }
  );
  const [message, setMessage] = useState("");

  if (!user) return null;

  function handleSave(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    updateProfile(form);
    setEditing(false);
    setMessage("Profile updated successfully!");
  }

  return (
    <main className="profile-page">
      <section className="profile-header">
        <div className="profile-avatar">
          {user.name.charAt(0).toUpperCase()}
        </div>
        <div>
          <span className="profile-eyebrow">MY JSHOP ACCOUNT</span>
          <h1>Hello, {user.name}!</h1>
          <p>Manage your personal information and shopping details.</p>
        </div>
      </section>

      <section className="profile-card">
        <div className="profile-card-heading">
          <div>
            <h2>Personal Information</h2>
            <p>Your account details</p>
          </div>
          {!editing && (
            <button
              className="profile-secondary-button"
              onClick={() => {
                setForm(user);
                setEditing(true);
                setMessage("");
              }}
            >
              Edit Profile
            </button>
          )}
        </div>

        {message && <p className="profile-success">{message}</p>}

        {editing ? (
          <form className="profile-form" onSubmit={handleSave}>
            <label>
              Full Name
              <input
                value={form.name}
                onChange={(event) =>
                  setForm({ ...form, name: event.target.value })
                }
                required
              />
            </label>

            <label>
              Email Address
              <input
                type="email"
                value={form.email}
                onChange={(event) =>
                  setForm({ ...form, email: event.target.value })
                }
                required
              />
            </label>

            <label>
              Phone Number
              <input
                type="tel"
                value={form.phone}
                onChange={(event) =>
                  setForm({ ...form, phone: event.target.value })
                }
                placeholder="Enter phone number"
              />
            </label>

            <label>
              Delivery Address
              <textarea
                value={form.address}
                onChange={(event) =>
                  setForm({ ...form, address: event.target.value })
                }
                placeholder="Enter delivery address"
                rows={3}
              />
            </label>

            <div className="profile-form-actions">
              <button type="submit" className="profile-primary-button">
                Save Changes
              </button>
              <button
                type="button"
                className="profile-secondary-button"
                onClick={() => {
                  setForm(user);
                  setEditing(false);
                }}
              >
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <div className="profile-information">
            <div>
              <span>Full Name</span>
              <strong>{user.name}</strong>
            </div>
            <div>
              <span>Email Address</span>
              <strong>{user.email}</strong>
            </div>
            <div>
              <span>Phone Number</span>
              <strong>{user.phone || "Not provided yet"}</strong>
            </div>
            <div>
              <span>Delivery Address</span>
              <strong>{user.address || "Not provided yet"}</strong>
            </div>
          </div>
        )}
      </section>

      <section className="profile-card profile-account-card">
        <div>
          <h2>Demo Account</h2>
          <p>This is a sample account for your Jshop project.</p>
        </div>
        <button className="profile-logout-button" onClick={onLogout}>
          Log Out
        </button>
      </section>
    </main>
  );
}

export default Profile;