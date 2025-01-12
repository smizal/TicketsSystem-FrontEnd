const UserDetails = () => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <img
          src={avatar}
          alt="User Avatar"
          style={{
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            objectFit: 'cover',
            border: '2px solid #ccc'
          }}
        />
        <input type="file" accept="image/*" onChange={handleAvatarChange} />
        <p>{tickets} Tickets</p>

        {/* Profile Form */}
        <form onSubmit={handleSubmit} style={{ flex: 1 }}>
          <div>
            <label>
              Email:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Phone Number:
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </label>
          </div>
          <button type="submit">Update Profile</button>
        </form>
      </div>
    </>
  )
}

export default UserDetails
