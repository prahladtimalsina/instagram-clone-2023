function LeftHeaderItem({ Icon, title }) {
  return (
    <div className="mt-4 hover:bg-gray-100 dark:hover:bg-gray-900  rounded hover:rounded-full ">
      <div className="flex gap-3 flex-row p-3 ml-2 items-center cursor-pointer navBtnLeft">
        <Icon className="h-6 mb-1 " />
        <p className="tracking-widest">{title}</p>
      </div>
    </div>
  );
}

export default LeftHeaderItem;
