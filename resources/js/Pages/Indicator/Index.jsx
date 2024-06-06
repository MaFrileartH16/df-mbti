import React, { useState } from 'react'
import {
  Button,
  FileButton,
  Group,
  SimpleGrid,
  Stack,
  Table,
  TextInput
} from '@mantine/core'
import { IconPlus, IconUser } from '@tabler/icons-react'
import { router } from '@inertiajs/core'
import { AppLayout } from '@/Layouts/AppLayout.jsx'
import { useForm } from '@inertiajs/react'

const Index = (props) => {
  const [search, setSearch] = useState('')
  console.log(props)
  const indicators = props.indicators.filter(indicator =>
    indicator.name.toLowerCase().includes(search.toLowerCase())
  )
  
  
  const form = useForm({
    file: null
  })
  
  
  const THList = ['#', 'Soal', 'Aksi']
  
  return (
    <AppLayout title="Soal" activeNav="Soal"
               authed={props.auth.user} meta={props.meta}>
      <Stack p={16}>
        <SimpleGrid cols={{
          base: 1,
          xs: 2,
          sm: 3
        }} justify="space-between">
          <TextInput
            leftSection={<IconUser />}
            placeholder="Cari soal..."
            value={search}
            onChange={(event) => setSearch(event.currentTarget.value)}
          />
          
          <Button
            leftSection={<IconPlus />}
            onClick={() => router.get(route('indicators.create'))}
          >
            Tambah Soal
          </Button>
          
          <FileButton variant="light" color="green" w="100%"
                      onChange={(file) => form.setData('file', file)}
                      accept="text/csv,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet">
            {(props) =>
              <Button {...props}>{form.data.file ? form.data.file.name : 'Pilih file excel'}</Button>}
          </FileButton>
        </SimpleGrid>
        
        <Table.ScrollContainer>
          <Table horizontalSpacing="xl" verticalSpacing="sm" highlightOnHover
                 withTableBorder withColumnBorders>
            <Table.Thead>
              <Table.Tr>
                {THList.map((th, id) => (
                  <Table.Th key={id}
                            style={{ whiteSpace: 'nowrap' }}>{th}</Table.Th>
                ))}
              </Table.Tr>
            </Table.Thead>
            
            <Table.Tbody>
              {indicators.map((indicator, id) => (
                <Table.Tr key={id}>
                  <Table.Td style={{ whiteSpace: 'nowrap' }}>{id + 1}</Table.Td>
                  <Table.Td
                    style={{ whiteSpace: 'nowrap' }}>{indicator.name}</Table.Td>
                  <Table.Td style={{ whiteSpace: 'nowrap' }}>
                    <Group>
                      <Button variant="outline" color="blue"
                              onClick={() => router.get(route('statements.create', indicator))}>
                        Tambah Konten Pertanyaan</Button>
                      <Button variant="outline" color="green"
                              onClick={() => router.get(route('statements.index', indicator))}>
                        Lihat Konten Pertanyaan</Button>
                      <Button variant="outline" color="yellow"
                              onClick={() => router.get(route('indicators.edit', indicator))}>Ubah</Button>
                      <Button variant="outline" color="red"
                              onClick={() => router.delete(route('indicators.destroy', indicator))}>Hapus</Button>
                    </Group>
                  </Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </Table.ScrollContainer>
      </Stack>
    </AppLayout>
  )
}

export default Index
