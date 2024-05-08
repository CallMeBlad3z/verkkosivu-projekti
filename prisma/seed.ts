import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
  const johndoe = await prisma.user.upsert({
    where: { email: 'johndoe@prisma.io' },
    update: {},
    create: {
      email: 'johndoe@prisma.io',
      firstname: 'John',
      lastname: 'Doe',
      password: 'password123',
      isAdmin: true,
    },
  })
  const janedoe = await prisma.user.upsert({
    where: { email: 'janedoe@prisma.io' },
    update: {},
    create: {
      email: 'janedoe@prisma.io',
      firstname: 'John',
      lastname: 'Doe',
      password: 'password123',
      isAdmin: true,
    },
  })
  console.log({ johndoe, janedoe })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })