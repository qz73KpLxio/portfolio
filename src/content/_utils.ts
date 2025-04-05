import { getCollection, type CollectionEntry } from 'astro:content'

import type { collections } from './config'

type Collections = keyof typeof collections

type PaginatedCollectionResult<C extends Collections> = {
  items: CollectionEntry<C>[];
  totalPages: number;
  currentPage: number;
}

export const getHomepageCollection = async <C extends Collections>(
  name: C, 
  page: number = 1, 
  itemsPerPage: number = 3
): Promise<PaginatedCollectionResult<C>> => {
  const allItems = await getCollection(name) as unknown as Array<CollectionEntry<C>>
  const sortedItems = allItems.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
  
  const totalItems = sortedItems.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const currentPage = Math.max(1, Math.min(page, totalPages)); 
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const paginatedItems = sortedItems.slice(startIndex, endIndex);
  
  return {
    items: paginatedItems,
    totalPages: totalPages,
    currentPage: currentPage
  };
}
