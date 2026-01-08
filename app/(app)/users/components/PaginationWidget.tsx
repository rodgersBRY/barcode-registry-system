import { Icon } from "@/components/icon";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

export default function PaginationWidget() {
  return (
    <>
      <div className="pages flex justify-between items-end">
        <p className="text-sm">showing 1 to 5 of 20 users</p>

        <div className="pagination-tiles flex gap-3">
          <div className="prev pagination-tile-base">
            <Icon icon={ChevronLeftIcon} className="w-4 text-gray-400"></Icon>
          </div>

          <div className="1 page pagination-tile-base bg-red-700 text-white">
            <p>1</p>
          </div>

          <div className="2 page pagination-tile-base">
            <p>2</p>
          </div>

          <div className="3 page pagination-tile-base">
            <p>3</p>
          </div>

          <div className="4 page pagination-tile-base">
            <p>4</p>
          </div>

          <div className="next pagination-tile-base">
            <Icon icon={ChevronRightIcon} className="w-4 text-gray-700"></Icon>
          </div>
        </div>
      </div>
    </>
  );
}
