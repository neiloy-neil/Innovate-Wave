import { useEffect } from 'react';
import { updateMetaTags, MetaTags } from '../utils/seoUtils';

const useSEO = (meta: MetaTags) => {
  useEffect(() => {
    updateMetaTags(meta);
  }, [meta]);
};

export default useSEO;