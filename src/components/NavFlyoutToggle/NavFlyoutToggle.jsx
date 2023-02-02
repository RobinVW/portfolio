import { useStore } from '@nanostores/react';
import { isNavOpen } from '../../utils/store';
import { AiOutlineMenu } from 'react-icons/ai';
import './NavFlyoutToggle.scss';

export default function NavButton() {
  // read the store value with the `useStore` hook
  const $isNavOpen = useStore(isNavOpen);
  // write to the imported store using `.set`
  return (
    // <button onClick={() => isNavOpen.set(!$isNavOpen)}>nav image</button>
    <AiOutlineMenu className='navMenu' onClick={() => isNavOpen.set(!$isNavOpen)}/>
  )
}