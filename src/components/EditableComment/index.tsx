import { ChangeEvent, useContext } from 'react';
import { RuleDTO, RulesStatus } from '../../types/supabase';
import { AuthContext } from '../../context/auth';
import { useDebouncedCallback } from 'use-debounce';
import synchroDB from '../../lib/service/dexie';
import { IconButton, TextField, Tooltip, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

interface EditableCommentProps {
  title: string;
  result: RulesStatus & RuleDTO;
}

export const EditableComment = ({ title, result }: EditableCommentProps) => {
  // TODO: add waiter
  const { user } = useContext(AuthContext);
  const _handleChange = useDebouncedCallback(
    async ({ target }: ChangeEvent<HTMLTextAreaElement>) => {
      return await synchroDB.saveDescription(
        { ...result, user_email: user?.email },
        target.value
      );
    },
    500
  );

  const handleEditComment = () => {
    // Lógica para abrir el componente EditableComment en modo de edición
  };

  return (
    <>
      <Typography sx={{ fontStyle: 'italic', fontWeight: 900 }}>
        Sustento de la propuesta
      </Typography>
      <TextField
        multiline
        fullWidth
        defaultValue={result.description}
        title={title}
        placeholder='Esta regla aún no ha tenido observaciones'
        onChange={_handleChange}
      />
      <Tooltip title='Editar propuesta'>
        <IconButton
          onClick={handleEditComment}
          sx={{
            background: ({ palette }) => palette.primary.light,
            zIndex: 500,
            width: '3rem',
            height: '3rem',
            margin: 'auto',
            marginLeft: '1rem',
          }}
        >
          <EditIcon />
        </IconButton>
      </Tooltip>
    </>
  );
};
