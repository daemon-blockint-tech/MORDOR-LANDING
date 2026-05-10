import { Mppx, tempo } from 'mppx/nextjs'

const mppx = Mppx.create({
  secretKey: process.env.MPP_SECRET_KEY || "dummy_secret_key_for_build_purposes_only_do_not_use_in_prod",
  methods: [
    tempo.charge({
      // @ts-expect-error Tempo types expect an EVM 0x string, but a Solana treasury address was provided
      recipient: 'Hu3YoWcfd8jUFHz5hVv21gThDPRexj2eP1YDWG7LEs6z',
    }),
  ],
})

export const GET = mppx.charge({ amount: '0.01' })(() => 
  Response.json({ message: 'Success! Payment received by MORDOR.' })
)
