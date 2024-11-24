type AsyncReturn<T> = [Error | null, T | null];

export const handleAsync = async <T>(promise: Promise<T>): Promise<AsyncReturn<T>> => {
  try {
    const data = await promise;
    return [null, data];
  } catch (error) {
    return [error as Error, null];
  }
};
