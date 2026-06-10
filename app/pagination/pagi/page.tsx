"use client";
import Link from "next/link";
import React, { memo, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDebounce } from "use-debounce";
function Paginate({ itemsPerpage, data }) {
  const [search, setSearch] = useState("");
  const [sorted, setSorted] = useState(null);

  const [value] = useDebounce(search, 1000);

  const filterUsers = data.filter((item) =>
    item.name.toLowerCase().includes(value.toLowerCase())
  );

  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerpage;

  const currentItems = filterUsers.slice(itemOffset, endOffset);

  const pageCount = Math.ceil(data.length / itemsPerpage);

  const handlePageClick = (event) => {
    setItemOffset(event.selected * itemsPerpage);

    console.log(event.selected, "event.selected ");
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setItemOffset(0);
  };

  useEffect(() => {
    setItemOffset(itemOffset);
  }, [value]);

  const Asending = () => {
    let sorted = currentItems.sort((a, b) => a.name.localeCompare(b.name));
    setSorted(sorted);
  };

  const Decending = () => {
    let sorted = currentItems.sort((a, b) => b.name.localeCompare(a.name));
    setSorted(sorted);
  };

  console.log(itemOffset, "itemOffset");
  return (
    <>
      <input placeholder="keep search" type="text" onChange={handleSearch} />
      <div>
        <button onClick={Asending}>A - Z</button>
      </div>

      <button onClick={Decending}>Z - A</button>
      <div>
        {(sorted || currentItems)?.map((item) => (
          <h2 key={item.id}>
            {item.id} {item.name}
          </h2>
        ))}
      </div>

      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
      />
    </>
  );
}
export default memo(Paginate);