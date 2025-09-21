import React from 'react'
import Navbar from '../components/Navbar'

const About_journal = () => {
  return (
    <>
    <Navbar/>
    <div className="bg-gray-100 min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto bg-white rounded shadow p-8">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">About the Journal</h1>
        <p className="text-lg text-gray-900">
          A leading journal in its field, and the primary source of communication across the many disciplines it serves, the <span className="italic">Journal of Health Politics, Policy and Law</span> focuses on the initiation, formulation, and implementation of health policy and analyzes the relations between government and health—past, present, and future.
        </p>
      </div>
    </div>
    </>
  )
}

export default About_journal