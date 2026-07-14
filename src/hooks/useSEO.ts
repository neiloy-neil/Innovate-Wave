import { useEffect } from 'react';
import { updateMetaTags, MetaTags } from '../utils/seoUtils';

const useSEO = (meta: MetaTags) => {
  useEffect(() => {
    updateMetaTags(meta);
  }, [meta.title, meta.description, meta.keywords, meta.ogTitle, meta.ogDescription, meta.ogImage, meta.ogUrl]);
};

export default useSEO;