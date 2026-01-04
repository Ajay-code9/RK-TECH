"use client";
import React from "react";
import { PinContainer } from "../components/ui/3d-pin.tsx";

export default function Pin({item}) {
  return (
    <div className="h-[25rem] w-full flex items-center justify-center ">
      <PinContainer
        title={`https://techaayaam.com${item.link}`}
        href={item.link.replace("/","")}
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            {item.title}
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              {item.description}
            </span>
          </div>
          <div className="flex flex-1 w-full overflow-hidden rounded-lg mt-4 " >
            {item.header}
            </div>
        </div>
      </PinContainer>
    </div>
  );
}
