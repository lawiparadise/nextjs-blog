'use client'

import { Box, Checkbox, FormControlLabel, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { useState } from "react";

export default function Me() {
  return (
    <>
      <Typography variant="h4">welcome to devjune's blog🍺</Typography>
      <br />
      <Typography>안녕하세요! 개발자 이상준입니다.</Typography>
      <br />

      <Typography>2014년부터 지금까지 개발을 해오며 많은 생각을 했습니다.</Typography>
      <Typography>나는 무엇을 만들어왔는가? 개발을 잘 해온것인가?</Typography>
      <Typography>내가 만든 자식들은 충분히 귀여운가?</Typography>
      <Typography>그러다가 문득 궁금해졌습니다.</Typography>
      <Typography>나는 개발자로서 괜찮은가;</Typography>
      <br />

      <Typography>좋은 개발자란 무엇일까요?</Typography>
      <Box sx={{ mt: 1 }}>
        <span>
          <FormControlLabel
            control={<Checkbox size="small" />}
            label={"good : 좋은, 즐거운"}
            sx={{ ml: 0.03 }}
          />
        </span>

        <br />
        <span><Checkbox size="small" />{"developer : 개발자"}</span>
      </Box>
      <br />

      <Typography>체크박스를 눌러보셨나요?</Typography>
      <Typography>글자를 눌렀을 때에도 체크박스가 동작하는게 더 편하실겁니다.</Typography>
      <Typography>(tab을 누르면 다음 체크박스로, space-bar를 누르면 체크가 됩니다 ^.~)</Typography>
      <br />

      <Typography>저는</Typography>
      <Typography>"사람을 생각하는 개발자"</Typography>
      <Typography>가 좋은 개발자라고 생각합니다.</Typography>
      <br />

      <Typography>내가 만든 것을 사용하는 사람들</Typography>
      <Typography>나와 같이 작품을 만드는 사람들</Typography>
      <Typography>나를 좋아해주는 사람들</Typography>
      <Typography>그리고 내가 사랑하는 사람들</Typography>
      <br />

      <Typography>...</Typography>
      <br />

      <Typography>더 좋은 개발자가 되겠습니다.</Typography>
      <span style={{ color: "#66d9ef" }}>fun </span>
      <span style={{ color: "#e6db74" }}>be_a_good_sport</span>
      <span>(</span>
      <span style={{ color: "#a6e22e" }}>june: </span>
      <span style={{ color: "#fc929e" }}>developer</span>
      <span>)</span>
    </>
  )
}