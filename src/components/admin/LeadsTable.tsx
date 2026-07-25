'use client';

import React, { useMemo, useState } from 'react';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnFiltersState,
  type SortingState,
} from '@tanstack/react-table';
import styles from '@/app/admin/admin.module.css';

export type Lead = {
  id: string;
  name: string;
  phone: string;
  location?: string;
  category: string;
  course: string;
  date: string;
};

type LeadsTableProps = {
  leads: Lead[];
  loading: boolean;
  error: string;
  onRefresh: () => void;
};

const columnHelper = createColumnHelper<Lead>();

function SortIcon({ sorted }: { sorted: false | 'asc' | 'desc' }) {
  if (sorted === 'asc') return <span className={styles.sortIcon} aria-hidden>↑</span>;
  if (sorted === 'desc') return <span className={styles.sortIcon} aria-hidden>↓</span>;
  return <span className={`${styles.sortIcon} ${styles.sortMuted}`} aria-hidden>↕</span>;
}

export default function LeadsTable({ leads, loading, error, onRefresh }: LeadsTableProps) {
  const [sorting, setSorting] = useState<SortingState>([{ id: 'date', desc: true }]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = useState('');

  const locations = useMemo(
    () => Array.from(new Set(leads.map((l) => l.location || 'Other'))).sort(),
    [leads]
  );
  const categories = useMemo(
    () => Array.from(new Set(leads.map((l) => l.category))).sort(),
    [leads]
  );

  const columns = useMemo(
    () => [
      columnHelper.accessor('date', {
        header: 'Date',
        cell: (info) => {
          const d = new Date(info.getValue());
          return (
            <div className={styles.dateCell}>
              <span className={styles.dateMain}>
                {d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}
              </span>
              <span className={styles.dateSub}>
                {d.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
          );
        },
        sortingFn: 'datetime',
      }),
      columnHelper.accessor('name', {
        header: 'Applicant',
        cell: (info) => <span className={styles.nameCell}>{info.getValue()}</span>,
      }),
      columnHelper.accessor('phone', {
        header: 'Contact',
        cell: (info) => (
          <a href={`tel:${info.getValue()}`} className={styles.phoneLink}>
            {info.getValue()}
          </a>
        ),
      }),
      columnHelper.accessor((row) => row.location || 'Other', {
        id: 'location',
        header: 'Location',
        cell: (info) => <span className={styles.badgeLocation}>{info.getValue()}</span>,
        filterFn: 'equalsString',
      }),
      columnHelper.accessor('category', {
        header: 'Category',
        cell: (info) => <span className={styles.badgeCategory}>{info.getValue()}</span>,
        filterFn: 'equalsString',
      }),
      columnHelper.accessor('course', {
        header: 'Course',
        cell: (info) => <span className={styles.courseCell}>{info.getValue()}</span>,
      }),
    ],
    []
  );

  const table = useReactTable({
    data: leads,
    columns,
    state: {
      sorting,
      columnFilters,
      globalFilter,
    },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: { pageSize: 10 },
    },
  });

  const locationFilter = (columnFilters.find((f) => f.id === 'location')?.value as string) || '';
  const categoryFilter = (columnFilters.find((f) => f.id === 'category')?.value as string) || '';
  const filteredCount = table.getFilteredRowModel().rows.length;
  const pageIndex = table.getState().pagination.pageIndex;
  const pageSize = table.getState().pagination.pageSize;
  const pageCount = table.getPageCount();
  const from = filteredCount === 0 ? 0 : pageIndex * pageSize + 1;
  const to = Math.min((pageIndex + 1) * pageSize, filteredCount);

  const clearFilters = () => {
    setGlobalFilter('');
    setColumnFilters([]);
  };

  const hasActiveFilters = Boolean(globalFilter || locationFilter || categoryFilter);

  return (
    <section className={styles.tableCard}>
      <div className={styles.tableHeader}>
        <div>
          <h3 className={styles.tableTitle}>Recent Enquiries</h3>
          <p className={styles.tableSubtitle}>
            {filteredCount} of {leads.length} lead{leads.length === 1 ? '' : 's'}
          </p>
        </div>
        <button type="button" className={styles.refreshBtn} onClick={onRefresh} disabled={loading}>
          <span className={loading ? styles.spin : undefined}>↻</span>
          Refresh
        </button>
      </div>

      <div className={styles.filtersBar}>
        <div className={styles.searchWrap}>
          <span className={styles.searchIcon} aria-hidden>⌕</span>
          <input
            className={styles.searchInput}
            value={globalFilter}
            onChange={(e) => setGlobalFilter(e.target.value)}
            placeholder="Search name, phone, course..."
            aria-label="Search leads"
          />
        </div>

        <select
          className={styles.filterSelect}
          value={locationFilter}
          onChange={(e) =>
            table.getColumn('location')?.setFilterValue(e.target.value || undefined)
          }
          aria-label="Filter by location"
        >
          <option value="">All locations</option>
          {locations.map((loc) => (
            <option key={loc} value={loc}>{loc}</option>
          ))}
        </select>

        <select
          className={styles.filterSelect}
          value={categoryFilter}
          onChange={(e) =>
            table.getColumn('category')?.setFilterValue(e.target.value || undefined)
          }
          aria-label="Filter by category"
        >
          <option value="">All categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>

        {hasActiveFilters && (
          <button type="button" className={styles.clearBtn} onClick={clearFilters}>
            Clear filters
          </button>
        )}
      </div>

      {error && <div className={styles.errorBanner}>{error}</div>}

      <div className={styles.tableScroll}>
        {loading ? (
          <div className={styles.emptyState}>
            <div className={styles.spinner} />
            <p>Loading leads…</p>
          </div>
        ) : filteredCount === 0 ? (
          <div className={styles.emptyState}>
            <h4>{leads.length === 0 ? 'No leads yet' : 'No matching leads'}</h4>
            <p>
              {leads.length === 0
                ? 'When visitors submit the enquiry form, they will appear here.'
                : 'Try adjusting your search or filters.'}
            </p>
          </div>
        ) : (
          <table className={styles.table}>
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th key={header.id}>
                      {header.isPlaceholder ? null : (
                        <button
                          type="button"
                          className={styles.thBtn}
                          onClick={header.column.getToggleSortingHandler()}
                          disabled={!header.column.getCanSort()}
                        >
                          {flexRender(header.column.columnDef.header, header.getContext())}
                          {header.column.getCanSort() && (
                            <SortIcon sorted={header.column.getIsSorted()} />
                          )}
                        </button>
                      )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {!loading && filteredCount > 0 && (
        <div className={styles.pagination}>
          <div className={styles.pageInfo}>
            Showing <strong>{from}–{to}</strong> of <strong>{filteredCount}</strong>
          </div>

          <div className={styles.pageControls}>
            <label className={styles.pageSizeLabel}>
              Rows
              <select
                className={styles.pageSizeSelect}
                value={pageSize}
                onChange={(e) => table.setPageSize(Number(e.target.value))}
              >
                {[5, 10, 20, 50].map((size) => (
                  <option key={size} value={size}>{size}</option>
                ))}
              </select>
            </label>

            <button
              type="button"
              className={styles.pageBtn}
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              Prev
            </button>
            <span className={styles.pageCount}>
              Page {pageIndex + 1} / {Math.max(pageCount, 1)}
            </span>
            <button
              type="button"
              className={styles.pageBtn}
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
