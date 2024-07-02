function UserSocials({ href, Icon }) {
  return (
    <div
      className="d-flex align-items-center justify-content-center border border-dark rounded-circle bg-white mb-3"
      style={{ width: "40px", height: "40px" }}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-black d-flex justify-content-center align-items-center"
        style={{ width: "100%", height: "100%" }}
      >
        <Icon size={20} />
      </a>
    </div>
  );
}

export default UserSocials;
