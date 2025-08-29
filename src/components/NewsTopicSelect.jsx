import React from 'react'

const NewsTopicSelect = ({ categories, value, onChange }) => {
  return (
    <div className="w-full md:w-64">
      <label htmlFor="news-topic" className="block text-sm font-medium text-gray-700 mb-1">
        Filter by topic
      </label>
      <select
        id="news-topic"
        className="w-full text-sm rounded-md border border-gray-300 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#001f3f] focus:border-[#001f3f]"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.title} ({category.count})
          </option>
        ))}
      </select>
    </div>
  )
}

export default NewsTopicSelect

