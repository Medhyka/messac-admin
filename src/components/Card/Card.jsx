import { Box, IconButton } from '@mui/material';
import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import { supabase } from '../../configuration/supabase';
import './card.css';

const now = new Date().toLocaleString();
console.log(new Date(now));
const modified_at = format(new Date(now), 'YYYY-MM-DDTHH:mm:ss');

console.log(modified_at);

const updateAvailableRoom = async (value) => {
  await supabase
    .from('rooms')
    .update({ available: value }, { modified_at })
    .eq('hospital_id', 1);

  await supabase.from('rooms').update({ modified_at: new Date() }).eq('id', 1);
};

const updateCapacityRoom = async (value) => {
  await supabase
    .from('rooms')
    .update({ capacity: value }, { modified_at })
    .eq('id', 1);

  const { data, error } = await supabase
    .from('rooms')
    .update({ modified_at })
    .eq('id', 1);

  console.log(error);
};

const getRoomStatus = async (id) => {
  const { data: hospitals, error } = await supabase
    .from('hospitals')
    .select(
      `
				name,
				rooms (
					name,
					available,
					capacity,
					modified_at,
					class (name)
				),
				ambulances,
				bloods
			`
    )
    .eq('id', id);

  if (error) {
    throw error;
  }

  return hospitals;
};

const Card = () => {
  const [available, setAvailable] = useState(20);
  const [capacity, setCapacity] = useState(30);

  useEffect(() => {
    getRoomStatus(1);
  }, []);

  const handleIncreaseAvailable = (current) => {
    setAvailable((current) => current + 1);
    updateAvailableRoom(current + 1);
  };

  const handleDecraseAvailable = (current) => {
    setAvailable((current) => current - 1);
    updateAvailableRoom(current - 1);
  };

  const handleIncreaseCapacity = (current) => {
    setCapacity((current) => current + 1);
    updateCapacityRoom(current + 1);
  };

  const handleDecreaseCapacity = (current) => {
    setCapacity((current) => current - 1);
    updateCapacityRoom(current - 1);
  };
  return (
    <div className="card">
      <Box
        display="flex"
        height="100px"
        width="500px"
        bgcolor="white"
        borderColor="black"
        border={1}
        borderRadius="10px"
        padding="10px"
      >
        <h2>SVIP</h2>

        <Box
          marginLeft="100px"
          display="flex"
          flexDirection="column"
          height="80px"
          width="1500px"
          bgcolor="var(--color-text)"
          borderColor="black"
          border={1}
          borderRadius="10px"
          padding="10px"
          justifyContent="center"
          alignItems="center"
          color="white"
        >
          Tersedia
          <p>
            <IconButton
              color="inherit"
              onClick={() => handleDecraseAvailable(available)}
            >
              -
            </IconButton>
            {available}
            <IconButton
              color="inherit"
              onClick={() => handleIncreaseAvailable(available)}
            >
              +
            </IconButton>
          </p>
        </Box>
        <Box
          marginLeft="10px"
          display="flex"
          flexDirection="column"
          height="80px"
          width="1500px"
          bgcolor="white"
          borderColor="black"
          border={1}
          borderRadius="10px"
          padding="10px"
          justifyContent="center"
          alignItems="center"
        >
          Jumlah Bed
          <p>
            <IconButton onClick={() => handleDecreaseCapacity(capacity)}>
              -
            </IconButton>
            {capacity}
            <IconButton onClick={() => handleIncreaseCapacity(capacity)}>
              +
            </IconButton>
          </p>
        </Box>
      </Box>
    </div>
  );
};

export default Card;
