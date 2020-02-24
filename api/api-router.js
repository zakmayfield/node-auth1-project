const router = require('express').Router();

const userRouter = require('../api-users/users-router.js');
const authRouter = require('../api-auth/auth-router.js');

router.use('/users', userRouter);
router.use('/auth', authRouter);

router.get('/', (req, res) => {
  res.json({ server: "is running" });
})

module.exports = router