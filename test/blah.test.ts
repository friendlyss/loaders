import {Loaders} from '../src'

describe('loaders', () => {
  it('check loader name', () => {
    const LOADER_NAME = 'LoaderName'
    Loaders.start(LOADER_NAME)

    const isLoading = Loaders.isLoading(LOADER_NAME)

    Loaders.finish(LOADER_NAME)

    expect(isLoading).toBe(true);
  });

  it('check global loader name', () => {
    const LOADER_NAME = 'LoaderName'
    Loaders.start(LOADER_NAME)

    const isLoadingGlobal = Loaders.isLoadingNamespace('*')

    Loaders.finish(LOADER_NAME)

    expect(isLoadingGlobal).toBe(true);
  });
});
