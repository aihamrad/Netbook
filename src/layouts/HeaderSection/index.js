import { useContext } from 'react';

import Button from '../../components/Button'
import { ContentContext } from '../../store/ContentContext';

const HeaderSection = () => {
    const { contents } = useContext(ContentContext);
    const headerContent = contents.headerSection
    return (
        <div className='container py-10 flex justify-between items-center'>
            <div className=''>
                <div className='background-secondry text-primary rounded-lg text-xs py-2 px-7 mb-5 w-fit'>{headerContent?.hint}</div>
                <p className='text-dark-blue font-bold text-56'>{headerContent?.title}</p>
                <p className='text-grey text-lg mt-5 mb-6 max-md: text-sm'>{headerContent?.text}</p>
                <div className='md:flex'>
                    <Button className={'button-primary md:mr-5 max-md:mb-5'}>{headerContent?.primaryBtnText}</Button>
                    <Button className={'button-secondry'}>{headerContent?.secondryBtnText}</Button>
                </div>
            </div>
            <img className='header-img' src={headerContent?.img} alt='headerImg' />
        </div>
    )
}

export default HeaderSection