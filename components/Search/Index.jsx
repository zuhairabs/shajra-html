import {useState, useEffect, useRef } from "react";
import { BottomSheet } from "react-spring-bottom-sheet";
import SearchContent from "./SearchContent";
import "react-spring-bottom-sheet/dist/style.css";

export default function Search({ isOpen, setOpen}) {
  const focusRef = useRef();

  return (
      <BottomSheet
        open={isOpen}
        onDismiss={() => setOpen(false)}
        expandOnContentDrag={true}
        initialFocusRef={focusRef}
        header={
          <input
            className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-300 focus:bg-white focus:ring-0"
            type="text"
            placeholder="Text input field in a sticky header"
          />
        }
        defaultSnap={({ maxHeight }) => maxHeight}
        snapPoints={({ maxHeight }) => [maxHeight - maxHeight / 10, maxHeight / 4, maxHeight * 0.6]}
      >
        <SearchContent />
      </BottomSheet>
  );
}
