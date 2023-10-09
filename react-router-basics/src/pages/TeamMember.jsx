import React from "react"
import { useLoaderData } from "react-router-dom"

function TeamMember() {
  const member = useLoaderData()
  return <div>Team Member - {member.name} </div>
}

export default TeamMember
