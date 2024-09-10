import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const instructorRouter = createTRPCRouter({
  get: publicProcedure
    .query(async ({ctx}) => {
      return ctx.db.instructor.findMany();
    }),

  /* create: publicProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.post.create({
        data: {
          name: input.name,
        },
      });
    }),

  getLatest: publicProcedure.query(async ({ ctx }) => {
    const post = await ctx.db.post.findFirst({
      orderBy: { createdAt: "desc" },
    });

    return post ?? null;
  }), */
});
