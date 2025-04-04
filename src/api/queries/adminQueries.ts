import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface DashboardData {
  totalUsers: number;
  productStatus: {
    mostReviewedProduct: {
      name: string;
      reviewCount: number;
    };
    notReviewedCount: 2;
    reviewedCount: 8;
    totalProduct: 10;
  };
  reviewsByStatus: {
    _id: string;
    count: number;
  }[];
  totalModerators: number;
}

export interface Review {
  reviewId: string;
  comment: string;
  rating: number;
  userName: string;
  profileImage: string | null;
}

export interface Product {
  _id: {
    status: string;
    productId: string;
  };
  reviews: Review[];
  productName: string;
  productPrice: number;
  productImage: string;
}

export interface AuditReviewResponse {
  pending: Product[];
  approved: Product[];
  rejected: Product[];
}

interface ProductDetails {
  _id: string;
  name: string;
  price: number;
  description: string;
  mainImage: string;
  images: string[];
  brand: string;
  category: string;
  buylink: string;
}

const fetchDashboardData = async () => {
  const response = await axios.get("/api/admin/dashboard");
  return response.data as DashboardData;
};

export const useDashboardData = () => {
  return useQuery({ queryKey: ["dashboard"], queryFn: fetchDashboardData });
};

const fetchReviewsByStatus = async () => {
  const response = await axios.get("/api/admin/reviews");
  return response.data as AuditReviewResponse;
};

export const useReviewsByStatus = () => {
  return useQuery({
    queryKey: ["audit_reviews"],
    queryFn: fetchReviewsByStatus,
  });
};

const fetchProducts = async (): Promise<ProductDetails[]> => {
  const { data } = await axios.get("/api/admin/products");
  return data as ProductDetails[];
};

export const useProducts = () => {
  return useQuery({ queryKey: ["admin-products"], queryFn: fetchProducts });
};
