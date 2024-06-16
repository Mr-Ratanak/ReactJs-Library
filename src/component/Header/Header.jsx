import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Header.css";
import Search from "../SearchForm/Search";

const Header = () => {
  return (
    <div className="holder">
      <header className="header">
        <Navbar />
        <div className="header-content">
          <div className="shadow1">
            <h2 className="content-title fs-8 text-white">
              Find Your book of Choice.
            </h2>
            <p className="text-white fw-5">
              ជាវេទិការសាបព្រួសចំណេះដឹងតាមរយៈការសង្ខេបសៀវភៅទៅជាសម្លេងភាសាខ្មែរ
              សម្រាប់ប្រជាពលរដ្ឋកម្ពុជា។
              ចក្ខុវិស័យរបស់យើងគឺចង់ឃើញប្រជាពលរដ្ឋកម្ពុជាមួយលាននាក់ទទួលបានចំណេះដឹងតាមរយៈការអាន
              និងស្តាប់សៀវភៅដោយប្រើប្រាស់បច្ចេកវិទ្យា។
              សម្រាប់អ្នកដែលរវល់ខ្លាំងគ្មានពេលអាន
              និងអ្នកដែលគ្មានទម្លាប់ក្នុងការសិក្សារ។ ចំណាយពេល
              20នាទីដើម្បីស្រូបយកចំណេះដឹង និងខ្លឹមសារសំខាន់នៅក្នុងសៀវភៅមួយក្បាល
              ជារៀងរាល់ថ្ងៃ។
            </p>
            <Search />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
