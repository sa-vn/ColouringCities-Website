
import { useEffect, useRef } from "react"
import * as d3 from "d3"
import { feature  } from "topojson-client"
import worldData from "world-atlas/countries-110m.json"
import React from "react"

import type {  FeatureCollection } from "geojson"


// Status palette
const STATUS_CONFIG = {
  active: { label: "Active", color: "#22c55e" },       // green
  expanding: { label: "Expanding", color: "#eab308" }, // yellow
  planning: { label: "Planning", color: "#3b82f6" },   // blue
  partners: { label: "Partner", color: "#ef4444" },    // red
  none: { label: "No node", color: "#e5e7eb" },        // gray
} as const

// Country → status mapping (example)
const STATUS_BY_ISO3: Record<string, keyof typeof STATUS_CONFIG> = {
  CAN: "active",
  GBR: "active",
  SWE: "active",
  KEN: "expanding",
  DEU: "planning",
  USA: "partners",
  GHA: "planning",

}
const NUM_TO_ISO3: Record<number, string> = {
  840: "USA",
  124: "CAN",
  826: "GBR",
  752: "SWE",
  404: "KEN",
  276: "DEU",
  288: "GHA",
  364: "IRN",
  0o10: "ATA",
  304: "GRL"

  // add more as needed...
}
// const hiddenCountries = ["ATA", "GRL"]
export default function WorldMap() {
  const svgRef = useRef<SVGSVGElement | null>(null)

  useEffect(() => {
    if (!svgRef.current) return

    const width = 450
    const height = 300

    const projection = d3.geoEqualEarth().scale(100).translate([width / 2, height / 2])
    const path = d3.geoPath(projection)

    // Clear old svg
    d3.select(svgRef.current).selectAll("*").remove()

    const svg = d3.select(svgRef.current)
      .attr("width", width)
      .attr("height", height)

//     const countries =  feature(
//   worldData as any,
//   (worldData as any)
// ).features// as unknown as FeatureCollection<Geometry, GeoJsonProperties>
const countries = (feature(worldData as any, (worldData as any).objects.countries) as unknown as FeatureCollection).features


    svg.selectAll("path").remove() // clear before drawing

    svg.append("g")
      .attr("width", width)
      .attr("height", height)

      .selectAll("path")
      .data(countries.filter((d: any) => d.id !== 10 && d.id !== 304))
      .data(countries)
      .join("path")
      .attr("d", path as any)
      .attr("fill", (d: any) => {
        const iso3 = NUM_TO_ISO3[d.id] // world-atlas uses ISO3 country codes in `id`
        const statusKey = STATUS_BY_ISO3[iso3] ?? "none"
        return STATUS_CONFIG[statusKey].color
      })
      .attr("stroke", "gray")
      .attr("stroke-width", 0.5)
      .on("mouseover", function () {
        d3.select(this).attr("fill", "#fff") // highlight
      })
      .on("mouseout", function (_event, d: any) {
        const iso3 = NUM_TO_ISO3[d.id]
        const statusKey = STATUS_BY_ISO3[iso3] ?? "none"
        d3.select(this).attr("fill", STATUS_CONFIG[statusKey].color)
      })
  }, [])

  return (
    <section className=" w-full px-0 py-0 flex justify-center">
    
      <div className="grid md:grid-cols-2 gap-1  ">
    {/* RIGHT */}
        <div className="  bg-white justify-center">
  <div className="w-full px-0 py-0 m-0" >
            <svg ref={svgRef} className="w-full"></svg>
          </div>
          <div className=" mt-0 flex flex-wrap justify-center gap-3 text-sm px-0">
            {Object.entries(STATUS_CONFIG).map(([key, cfg]) => (
              <div key={key} className="flex items-center gap-2">
                <span
                  className="inline-block w-4 h-4 rounded-sm"
                  style={{ backgroundColor: cfg.color }}
                />
                {cfg.label}
              </div>
            ))}
          </div>
        
        </div>

        <div className="m-0 p-2 w-full text-justify ">
          {/* Title + Description */}
          <div>
            <h1 className="text-1xl md:text-1xl font-bold mb-2">
              CCRP Network Map
            </h1>
            <p >
              The Colouring Cities Research Programme (CCRP) is a global academic
              consortium creating open, reproducible urban data platforms for
              research and
            </p>
            <p>
              The Colouring Cities Research Programme (CCRP) is a global academic
              consortium creating open, reproducible urban data platforms for
              research and public good.
              The Colouring Cities Research Programme (CCRP) is a global academic

            </p>
            <p>
              Colouring Cities Research Programme (CCRP) is a global academic
              consortium creating open, reproducible urban data platforms for
              research and public good.
              The Colouring Cities Research Programme (CCRP) is a global academic
             

            </p>
          </div>



        </div>

      </div>
    </section>

  )
}
