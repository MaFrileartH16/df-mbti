import React from 'react'
import { AppLayout } from '@/Layouts/AppLayout.jsx'
import { BarChart } from '@mantine/charts'
import { Select } from '@mantine/core'
import { IconUser } from '@tabler/icons-react'

const Index = (props) => {
  const [supervisorId, setSupervisorId] = React.useState('')

// If supervisorId is equal to the authenticated user's id, set it to an empty string
  const effectiveSupervisorId = supervisorId === props.auth.user.id ? '' : supervisorId
  
  const aggregatePersonalities = (students) => {
    return students.reduce((acc, student) => {
      const personality = student.tests[0].work.name
      if (personality) {
        const existingPersonality = acc.find(
          (item) => item.personalityName === personality,
        )
        if (existingPersonality) {
          existingPersonality['Mahasiswa'] += 1
        } else {
          acc.push({ personalityName: personality, 'Mahasiswa': 1 })
        }
      }
      return acc
    }, [])
  }
  
  const personalities = effectiveSupervisorId
    ? aggregatePersonalities(props.tests.filter((student) => student.supervisor_id === effectiveSupervisorId))
    : aggregatePersonalities(props.tests)
  
  return (
    <AppLayout
      title="Grafik"
      activeNav="Grafik"
      authed={props.auth.user}
      meta={props.meta}
    >
      <Select styles={{
        label: { marginBottom: 8 },
        input: {
          height: 48,
          borderRadius: 32,
          paddingLeft: 50,
          paddingRight: 16,
        },
        section: { marginLeft: 0, width: 48, height: 48 },
        error: { marginTop: 8 },
      }}
              leftSection={<IconUser />}
              clearable mb={16}
              searchable
              value={supervisorId}
              disabled={props.auth.user.role === 'Dosen PA'}
              nothingFoundMessage="Tidak ada dosen pembimbing"
              checkIconPosition="right"
              placeholder="Dosen Pembimbing"
              data={props.lecturers.map(lecturer => ({
                value: lecturer.user.id,
                label: lecturer.user.full_name,
              }))}
              onChange={(value) => setSupervisorId(value)}
      />
      
      <BarChart
        h="100vh"
        tickLine="xy"
        gridAxis="xy"
        data={personalities}
        dataKey="personalityName"
        withLegend
        xAxisLabel="Kepribadian"
        yAxisLabel={`${
          effectiveSupervisorId ? props.tests.filter((student) => student.supervisor_id === effectiveSupervisorId).length : props.tests.length
        } dari ${effectiveSupervisorId ? props.students.filter((student) => student.supervisor_id === effectiveSupervisorId).length : props.students.length} Mahasiswa`}
        series={[{ name: 'Mahasiswa', color: 'blue' }]}
        withBarValueLabel
      />
    </AppLayout>
  )
}

export default Index
