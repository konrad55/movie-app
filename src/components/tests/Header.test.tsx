import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "../Header";

describe('Header', () => {
  it('should render title "Movie Database"', () => {
    render(<Header />);
    expect(screen.getByText('Movie Database')).toBeInTheDocument();
  });

  it('should render the search icon (lucide-search)', () => {
    render(<Header />);
    const searchIcon = document.querySelector('svg.lucide-search');
    expect(searchIcon).toBeInTheDocument();
  });

  it('should render the search button', () => {
    render(<Header />);
    expect(screen.getAllByText('Search movie')[0]).toBeInTheDocument();
  });
  
});