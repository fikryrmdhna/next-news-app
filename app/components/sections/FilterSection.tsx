'use client'

import { useState } from "react";

interface FilterSectionProps {
  onFilter?: (filters: FilterValues) => void;
  provinces?: Array<{ id: number; name: string }>;
  rubrics?: Array<{ id: number; name: string; alias: string }>;
}

interface FilterValues {
  province?: string;
  rubric?: string;
  dateFrom?: string;
  dateTo?: string;
  tags?: string;
}

export default function FilterSection({ onFilter, provinces = [], rubrics = [] }: FilterSectionProps) {
  const [filters, setFilters] = useState<FilterValues>({});

  const handleFilterChange = (key: keyof FilterValues, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
  };

  const handleApplyFilter = () => {
    if (onFilter) {
      onFilter(filters);
    }
  };

  const handleResetFilter = () => {
    setFilters({});
    if (onFilter) {
      onFilter({});
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow mb-6">
      <h3 className="text-lg font-bold text-[#212121] mb-4">Filter Berita</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Province Filter */}
        {provinces.length > 0 && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Provinsi
            </label>
            <select
              value={filters.province || ''}
              onChange={(e) => handleFilterChange('province', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Semua Provinsi</option>
              {provinces.map((province) => (
                <option key={province.id} value={province.id}>
                  {province.name}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Rubric Filter */}
        {rubrics.length > 0 && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Rubrik
            </label>
            <select
              value={filters.rubric || ''}
              onChange={(e) => handleFilterChange('rubric', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Semua Rubrik</option>
              {rubrics.map((rubric) => (
                <option key={rubric.id} value={rubric.alias}>
                  {rubric.name}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Date From */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Dari Tanggal
          </label>
          <input
            type="date"
            value={filters.dateFrom || ''}
            onChange={(e) => handleFilterChange('dateFrom', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Date To */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Sampai Tanggal
          </label>
          <input
            type="date"
            value={filters.dateTo || ''}
            onChange={(e) => handleFilterChange('dateTo', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Tags Input */}
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Tags (pisahkan dengan koma)
        </label>
        <input
          type="text"
          value={filters.tags || ''}
          onChange={(e) => handleFilterChange('tags', e.target.value)}
          placeholder="contoh: ham, lingkungan, korupsi"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 mt-4">
        <button
          onClick={handleApplyFilter}
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Terapkan Filter
        </button>
        <button
          onClick={handleResetFilter}
          className="px-6 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
