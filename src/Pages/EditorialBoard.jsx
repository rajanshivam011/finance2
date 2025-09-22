import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const editorialNames = [
  "Simon F. Haeder",
  "Mark Hall",
  "Jake Haselswerdt",
  "Allison K. Hoffman",
  "Lawrence R. Jacobs",
  "Holly Jarman",
  "Matthew Kavanagh",
  "Anna Kirkland",
  "Lars Thorup Larsen",
  "Helen Levy",
  "Julia Lynch",
  "Michelle Mello",
  "Jamila Michener",
  "Edward Miller",
  "Matt Motta",
  "Sayeh Nikpay",
  "Adam Oliver",
  "Thomas Oliver",
  "Julianna Pacheco",
  "Harold Pollack",
  "Elizabeth Rigby",
  "Philip Rocco",
  "Marc Rodwin",
  "Rachel Sachs",
  "Michael Sances"
];

const formerEditors = [
  "Lawrence D. Brown",
  "Colleen M. Grogan",
  "Theodore R. Marmor",
  "James A. Morone",
  "Jonathan Oberlander",
  "Eric M. Patashnik",
  "Mark A. Peterson",
  "Mark Schlesinger",
  "Michael S. Sparer",
  "Ralph A. Straetz"
];

const boardOfEditors = [
  "Nicholas Bagley",
  "Daniel Béland",
  "Arturo Vargas Bustamante",
  "Timothy Callaghan",
  "Andrea Louise Campbell",
  "Daniel Carpenter",
  "Jacqueline Chattopadhyay",
  "Elize Massard da Fonseca",
  "Ashley Fox",
  "David M. Frankford",
  "Erika Franklin Fowler",
  "Scott L. Greer",
  "Michael K. Gusmano",
  "Deborah A. Stone",
    "Joseph White",
    "Charley Willison",
];

const EditorialBoard = () => {
  return (
    <>
    <Navbar/>
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-6">Editorial Board</h1>
      <div className="mb-8">
        {editorialNames.map((name, idx) => (
          <div key={idx} className="text-lg">{name}</div>
        ))}
      </div>
      <div className="mb-8">
        <strong>Former Editors:</strong>
        {formerEditors.map((name, idx) => (
          <div key={idx} className="text-lg">{name}</div>
        ))}
      </div>
      <div className="mb-8">
        <strong>Board of Editors:</strong>
        {boardOfEditors.map((name, idx) => (
          <div key={idx} className="text-lg">{name}</div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default EditorialBoard;