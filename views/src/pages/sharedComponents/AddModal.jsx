import { useState } from "react";

const AddModal = ({
  id,
  datas,
  setDatas,
  setShowAddModal,
}) => {
  const [data, setData] = useState({});

  return (
    <>
      <div
        onClick={() => {
          setShowAddModal(false);
        }}
        className="fixed w-screen h-screen top-[0px] left-[0px] bg-[#000]/[.5]"
      ></div>

      <div className="fixed w-[500px] h-[80%] top-[50%] translate-y-[-50%] bg-[#fff] overflow-y-scroll">
        <div className="sticky top-[0px] bg-[#fff] pl-10 py-4 shadow-[0_4px_2px_-2px_rgba(0,0,0,0.2)]">
          <h1 className="font-bold text-xl">Add Work Expirience</h1>
        </div>
        <div className="flex flex-col ml-10">
          {id === "education" ? (
            <div className="mb-5 mt-5">
              <p className="mb-2">Degree*</p>
              <input
                className="w-[80%] p-2 border border-solid"
                type="text"
                placeholder="ex. Software Engineer"
                onChange={(e) => {
                  setData({ ...data, degree: e.target.value });
                }}
              />
            </div>
          ) : (
            <div className="mb-5 mt-5">
              <p className="mb-2">Title*</p>
              <input
                className="w-[80%] p-2 border border-solid"
                type="text"
                placeholder="ex. Software Engineer"
                onChange={(e) => {
                  setData({ ...data, title: e.target.value });
                }}
              />
            </div>
          )}
          {id === "education" && (
            <div className="mb-5">
              <p>Field Of Study*</p>
              <input
                className="w-[80%] p-2 border border-solid"
                type="text"
                placeholder="ex. Google"
                onChange={(e) => {
                  setData({
                    ...data,
                    fieldofstudy: e.target.value,
                  });
                }}
              />
            </div>
          )}

          {id === "education" ? (
            <div className="mb-5">
              <p>School*</p>
              <input
                className="w-[80%] p-2 border border-solid"
                type="text"
                placeholder="ex. Google"
                onChange={(e) => {
                  setData({ ...data, school: e.target.value });
                }}
              />
            </div>
          ) : (
            <div className="mb-5">
              <p>Company*</p>
              <input
                className="w-[80%] p-2 border border-solid"
                type="text"
                placeholder="ex. Google"
                onChange={(e) => {
                  setData({ ...data, company: e.target.value });
                }}
              />
            </div>
          )}
          <div className="mb-5">
            <p>Location*</p>
            <input
              className="w-[80%] p-2 border border-solid"
              type="text"
              placeholder="ex. Mountain View, CA"
              onChange={(e) => {
                setData({ ...data, location: e.target.value });
              }}
            />
          </div>
          <div className="flex w-[80%] justify-between">
            <div className="mb-5">
              <p>From*</p>
              <input
                className="w-[100%] p-2 border border-solid"
                type="date"
                placeholder="from"
                onChange={(e) => {
                  setData({ ...data, from: e.target.value });
                }}
              />
            </div>
            <div className="mb-5">
              <p>To*</p>
              <input
                className="w-[100%] p-2 border border-solid"
                type="date"
                placeholder="to"
                onChange={(e) => {
                  setData({ ...data, to: e.target.value });
                }}
              />
            </div>
          </div>
          <div className="flex items-center mb-5">
            <input
              // checkbox material style
              className="mr-2 w-4 h-4"
              type="checkbox"
              onChange={(e) => {
                setData({ ...data, current: e.target.checked });
              }}
            />

            <p>i'm still working on this job</p>
          </div>
          <div className="mb-5">
            <p>Description</p>
            <textarea
              className="w-[80%] p-2 border border-solid"
              placeholder="ex. I was a software engineer at Google"
              onChange={(e) => {
                setData({ ...data, description: e.target.value });
              }}
            />
          </div>
        </div>
        <div className="flex justify-end sticky bottom-[0px] bg-[#fff] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.2)]">
          <button
            className="rounded-lg border border-solid border-[#14a800] text-[#fff] bg-[#14a800] m-2 p-2 w-48 font-bold"
            onClick={() => {
              setData({ ...data, id: datas.length + 1 });
              setDatas([...datas, data]);
              setShowAddModal(false);
            }}
          >
            Add Experience
          </button>
        </div>
      </div>
    </>
  );
};

export default AddModal;