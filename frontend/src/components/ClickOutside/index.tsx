import { useRef } from 'react';
import useClickOutside from '../../hooks/useClickOutside';

const ClickOutside = (props: any) => {
  const wrapperRef = useRef(null);
  useClickOutside(wrapperRef, props.callback);

  return <div ref={wrapperRef}>{props.children}</div>;
};

export default ClickOutside;
