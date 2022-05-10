
const OnboardingTrack = ({
  onBack,
  goToNext,
  error,
  data,
  track,
  buttonText,
  isSubmit,
  onSubmit,
  submit,
}) => {
  return (
    <div className="fixed bottom-[0px] left-[0px] w-screen bg-[#fff]">
      <div
        style={{ width: track }}
        className={`left-[0px] h-2 bg-[#14a800]`}
      ></div>
      <div className="flex justify-between px-8 py-10">
        <button
          onClick={() => onBack()}
          className="rounded-lg border border-solid border-[#d5e0d5] bg-[#d5e0d5] p-2 font-bold"
        >
          Back
        </button>
        {isSubmit ? (
          <button
            className="rounded-lg border border-solid border-[#14a800] text-[#fff] bg-[#14a800] p-2 w-64 font-bold"
            onClick={() => {
              onSubmit(data);
              submit()
            }}
          >
            {buttonText}
          </button>
        ) : (
          <button
            className="rounded-lg border border-solid border-[#14a800] text-[#fff] bg-[#14a800] p-2 w-64 font-bold"
            onClick={() => {
              !error && goToNext(data);
            }}
          >
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
};

export default OnboardingTrack;
