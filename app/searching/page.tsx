"use client";
import axios from "axios";
import { useEffect, useState } from "react";

export default function SearchBoxAutoComplete() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  const [selectedIndex, setSelectedIndex] = useState(-1);


  const fetchProducts = async (query) => {
    if (!query.trim()) {
      setResults([]);
      setError("Please enter a product name");
      return;
    }

    try {
      setError("");
      const res = await axios.get(
        `https://dummyjson.com/products/search?q=${query}`
      );

      if (res.data.products.length === 0) {
        setResults([]);
        setError("No products found");
      } else {
        setResults(res.data.products);
        setSelectedIndex(-1);
      }
    } catch {
      setError("Something went wrong");
    }
  };

 
  useEffect(() => {
    const timer = setTimeout(() => {
      fetchProducts(input);
    }, 1000);

    return () => clearTimeout(timer);
  }, [input]);

  
  const handleKeyDown = (e) => {
    
    if (results.length === 0) return;

    
    if (e.key === "ArrowDown") {
      setSelectedIndex((prev) => {
        
        if (prev === results.length - 1) return prev;
        return prev + 1;
      });
    }

    
    if (e.key === "ArrowUp") {
      setSelectedIndex((prev) => {
      
        if (prev <= 0) return -1;
        return prev - 1;
      });
    }

    // if (e.key === "Enter" && selectedIndex !== -1) {
    //   setInput(results[selectedIndex].title);
    //   setResults([]);
    //   setSelectedIndex(-1);
    // }
  };

  return (
    <div style={{ width: "520px" }}>
      <label>Search Products</label>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type product name..."
        style={{ width: "100%", padding: "6px" }}
      />

   
      {error && <p style={{ color: "red" }}>{error}</p>}

   
      {results.length > 0 && (
        <div className="result-container" >
          {results.map((item, index) => (
            <div
              key={item.id}
              onMouseEnter={() => setSelectedIndex(index)}
              onClick={() => {
                setInput(item.title);
                setResults([]);
                setSelectedIndex(-1);
              }}
              style={{
                padding: "6px",
                cursor: "pointer",
                background:
                  index === selectedIndex ? "#4f4b4bff" : "#362e2eff",
              }}
            >
              {item.title}
            </div>
          ))}
        </div>
      )}
    </div>

    
  );
}
