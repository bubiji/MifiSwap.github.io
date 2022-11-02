/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';

const validationSchema = yup.object({
  name: yup
    .string()
    .trim()
    .min(2, '请输入正确的名称')
    .max(50, '请输入正确的名称')
    .required('请输入名称'),
  phone: yup
    .string()
    .matches(/^1[3456789]\d{9}$/, '请输入正确的手机号')
    .required('请输入手机号'),
  email: yup
    .string()
    .trim()
    .email('请输入正确邮箱地址')
    .required('请输入手机号'),
  company: yup
    .string()
    .required('请输入公司名称'),
});

const Form = () => {
  const initialValues = {
    name: '',
    phone: '',
    email: '',
    company: '',
  };

  const onSubmit = (values) => {
    console.log(values);
    //return values;
    axios.post('https://hworigin.com/api/request/save', values).then(response => {
      console.log(response.data);
      alert('提交成功!');
    });
  };

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit,
  });

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'text.secondary'}
        >
          Signup
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
          }}
        >
          申请试用
        </Typography>
        <Typography color="text.secondary">
          请填写以下信息.
        </Typography>
      </Box>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
             请输入您的名称
            </Typography>
            <TextField
              label="名称 *"
              variant="outlined"
              name={'name'}
              fullWidth
              value={formik.values.name}
              onChange={formik.handleChange}
              error={
                formik.touched.name && Boolean(formik.errors.name)
              }
              helperText={formik.touched.name && formik.errors.name}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
              请输入您的 email
            </Typography>
            <TextField
              label="Email *"
              variant="outlined"
              name={'email'}
              fullWidth
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
              请输入您的手机号
            </Typography>
            <TextField
              label="手机号 *"
              variant="outlined"
              name={'phone'}
              fullWidth
              value={formik.values.phone}
              onChange={formik.handleChange}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
              请输入您的公司名称
            </Typography>
            <TextField
              label="公司名称 *"
              variant="outlined"
              name={'company'}
              fullWidth
              value={formik.values.company}
              onChange={formik.handleChange}
              error={formik.touched.company && Boolean(formik.errors.company)}
              helperText={formik.touched.company && formik.errors.company}
            />
          </Grid>
          <Grid item container xs={12}>
            <Box
              display="flex"
              flexDirection={{ xs: 'column', sm: 'row' }}
              alignItems={{ xs: 'stretched', sm: 'center' }}
              justifyContent={'space-between'}
              width={1}
              maxWidth={600}
              margin={'0 auto'}
            >
              <Button size={'large'} variant={'contained'} type={'submit'}>
                提交
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default Form;
