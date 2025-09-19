import { useState } from "react";
import { Globe, ChevronDown } from "lucide-react"; // icons

export default function LanguageSelector() {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState("English");

  const languages = ["English", "French", "Spanish", "German"];

  return (
    <div className="relative inline-block text-left">
      {/* Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 bg-black text-white px-3 py-2 rounded-lg"
      >
        <Globe className="w-4 h-4" />
        <span>{language}</span>
        <ChevronDown className="w-4 h-4" />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
          {languages.map((lang) => (
            <div
              key={lang}
              onClick={() => {
                setLanguage(lang);
                setOpen(false);
              }}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {lang}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
