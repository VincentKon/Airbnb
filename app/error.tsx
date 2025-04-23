"use client";
import EmptyState from "@/components/EmptyState";
import React, { useEffect } from "react";

interface ErrorStateProps {
  error: Error;
}

const ErrorState: React.FC<ErrorStateProps> = ({ error }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <EmptyState title="Error" subtitle="Something went wrong"></EmptyState>
  );
};

export default ErrorState;
