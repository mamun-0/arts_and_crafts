export function FormGroup({
  errorMessage = "",
  children,
  position = "static",
}) {
  return (
    <div className={position}>
      {children}
      {errorMessage.length > 0 && (
        <small className="text-red-700">{errorMessage}</small>
      )}
    </div>
  );
}
