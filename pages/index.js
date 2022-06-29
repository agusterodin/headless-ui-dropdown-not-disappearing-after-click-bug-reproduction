import { Menu } from '@headlessui/react'

export default function Home() {
  return (
    <Menu>
      <Menu.Button>More</Menu.Button>
      <Menu.Items>
        <Menu.Item as="div">
          {({}) => (
            <a
              onClick={event => {
                event.preventDefault()
                console.log('CHECK FOR ERRORS')
              }}
              href="/examplepath"
            >
              Link with verification
            </a>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  )
}
