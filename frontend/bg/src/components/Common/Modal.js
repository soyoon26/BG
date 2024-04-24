import "./Modal.css";
const Modal = ({ content, callbackFn }) => {
  return (
    <div
      className={`fixed top-0 left-0 z-[1055] flex h-full w-full justify-center bg-black bg-opacity-20`}
      onClick={() => {
        if (callbackFn) {
          callbackFn();
        }
      }}
    >
      <div className="absolute bg-red-100 shadow dark:bg-grey-700 opacity-100 w-1/6 rounded mt-10 mb-10 px-6 min-w-[400px]">
        <div className="alret justify-center bg-warnning-400 mt-6 mb-6">
          {content}
        </div>
        <div className="justify-end flex">
          <button
            className="close rounded bg-red-600 mt-4 mb-4 px-6 pt-4 pb-4 text-white"
            onClick={() => {
              if (callbackFn) {
                callbackFn();
              }
            }}
          >
            닫음
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
