import { NavLink as RouterNavLink } from "react-router-dom";
import {
  NavLink,
  Stack,
  Box,
  Avatar,
  Indicator,
  Text,
  Group,
} from "@mantine/core";
interface SidebarComponentProps  {
  userName: string;
  type?: "admin" |"student";
}
export type { SidebarComponentProps };
export default function Sidebar() {
  return (
    <Stack
      align="stretch"
      justify="space-between"
      gap="md"
      style={{ height: "100%" }}
    >
      {/* Menu / เมนู*/}
      <Box>
        <NavLink
          color="cyan"
          label="Home"
          component={RouterNavLink}
          to="/"
          active
        />
        <NavLink
          color="cyan"
          label="About"
          component={RouterNavLink}
          to="/about"
        />
        {/* ตัวอย่าง ใช้ Navlink กับ  components อื่นๆ ของ mantine */}
        {/* <Text component={RouterNavLink} to="/">
          Test
        </Text> */}
      </Box>
      {/* แสดงผู้ใช้งาน */}
      <Box p={10}>
        <Group>
          <Indicator color="red" position="bottom-end" size={10} withBorder offset={6 }>
            <Avatar
              size="md"
              variant="default"
              radius="xl"
              src="https://scontent.fcnx1-1.fna.fbcdn.net/v/t1.6435-9/82539637_512871592913679_8442264390773768192_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeF2ixmK0Ph5O-Dg5HWLOfHghlzvj1ZJKgyGXO-PVkkqDI9qCFwEGBDG_AAPYq214sPJOXtxbG2lJ-tf1aLl5xvN&_nc_ohc=A-Rv7cn7F-oQ7kNvwH3fhi6&_nc_oc=AdkdEfd6Hkw7iczAgj5f6lcWA7mIf51vm17Zzdek2p-Oi8HJl_YnypYNyD5EU_U-Vww&_nc_zt=23&_nc_ht=scontent.fcnx1-1.fna&_nc_gid=RVlNJOA7lbRCgNUF3al_6g&oh=00_AfWWhTggQbZA4HwOyIATOD6_tEEcp4brg_dqMmtyPXV-Vw&oe=68DD5037"
            />
          </Indicator>
          <Text>User : Thanakorn : Student</Text>


        </Group>
        
      </Box>
    </Stack>
  );
}
