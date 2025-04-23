import React from "react";
import getFavoriteListings from "../actions/getFavoriteListings";
import getCurrentUser from "../actions/getCurrentUser";
import ClientOnly from "@/components/ClientOnly";
import EmptyState from "@/components/EmptyState";
import FavoriteClient from "./FavoriteClient";

const FavouritesPage = async () => {
  const listings = await getFavoriteListings();
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState
          title="Unauthorized"
          subtitle="Please login to access this page."
        ></EmptyState>
      </ClientOnly>
    );
  }
  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No favorites found"
          subtitle="Looks like you do not have favorite listings yet."
        ></EmptyState>
      </ClientOnly>
    );
  }
  return (
    <ClientOnly>
      <FavoriteClient
        listings={listings}
        currentUser={currentUser}
      ></FavoriteClient>
    </ClientOnly>
  );
};

export default FavouritesPage;
