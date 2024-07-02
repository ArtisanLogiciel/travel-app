import BannerUnauthentfiedUser from "@/components/BannerUnauthentfiedUser";
import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";

describe("BannerUnauthentifiedUser component ", () => {
  beforeEach(() => {
    render(<BannerUnauthentfiedUser />);
  });
  test("should contains image", () => {
    const image = screen.getByAltText(/une illustration des vacances/i);
    expect(image).toBeInTheDocument();
  });
});
