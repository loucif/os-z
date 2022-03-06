import { DesktopContainer } from './Desktop.styles';
import DesktopButton from './DesktopButton';

const Desktop = () => {
    const bgWallpaper = '/default_dark.png';
    return (
    <DesktopContainer bgWallpaper={bgWallpaper}>
        <DesktopButton iconSrc={'/computer.png'} iconSize={{ width: 40, height: 40 }} text={'This PC'}/>
    </DesktopContainer>);
};

export default Desktop;
