'use client'
import { activeGroup } from "@/app/utils/globals";
import { useEffect } from "react";

export default function InitCityPage() {
  useEffect(() => {

    activeGroup('.info-tab');
    activeGroup('.circle-tab');
    
  })
  return <></>;
}