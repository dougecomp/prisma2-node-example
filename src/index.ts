import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main () {
  await prisma.user.create({
    data: {
      name: 'Alice',
      email: 'alice@prisma.io'
    }
  })

  const users = await prisma.user.findMany()
  return users
}

main().then((users) => {
  console.log(users)
}).finally(() => {
  prisma.disconnect()
})
