console.log("javascript added")
<div className=" absolute right-3 lg:hidden">
{menu ? (
  <IoIosMenu
    className={`   text-3xl font-semibold `}
    onClick={() => {
      setMenu(0);
      SetDisplay("block");
    }}
  />
) : (
  <RxCross2
    className={`  text-3xl font-semibold `}
    onClick={() => {
      setMenu(1);
      SetDisplay("hidden");
    }}
  />
)}
</div>