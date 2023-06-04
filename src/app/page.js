'use client';
import { Box, Button, Input, TextField, Typography } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [author, setAuthor] = useState('');
  const [type, setType] = useState('');
  const [file, setFile] = useState('');
  console.log('file', file);
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        pt: '100px',
        color: '#fff',
        pl: '20px',
        '& img': {
          objectFit: 'cover',
          zIndex: -1,
        },
      }}
    >
      <Image src="/bg.jpg" fill alt="bg" />
      <Box>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 800,
            fontSize: '120px',
          }}
        >
          MUSIC.
        </Typography>
        <Typography
          sx={{
            fontSize: '24px',
            maxWidth: '900px',
          }}
        >
          Be the first to hear new tracks, connect directly with fellow fans and
          your favorite artists in real time, and support the future of music
          with every play, like, repost.
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '60px 30px',
          borderRadius: '10px',
          width: '520px',
          backgroundColor: '#377686',
          marginTop: '120px',
          marginLeft: '120px',
        }}
      >
        <Input
          type="file"
          value={file}
          onChange={(e) => setFile(e.target.value)}
        />
        <TextField
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          sx={{
            backgroundColor: '#fff',
            borderRadius: '5px',
            margin: '30px 0',
          }}
        />
        <TextField
          value={type}
          onChange={(e) => setType(e.target.value)}
          placeholder="Type"
          sx={{
            backgroundColor: '#fff',
            borderRadius: '5px',
            margin: '20px 0',
          }}
        />
        <Button
          variant="contained"
          sx={{
            fontSize: '20px',
          }}
        >
          Extraction
        </Button>
      </Box>
    </Box>
  );
}
