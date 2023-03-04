import logo from '../../assets/imgs/headerImg.svg'
import Button from '../../components/Button'

const HeaderSection = () => {
    return (
        <div className='container py-10 flex justify-between items-center'>
            <div className=''>
                <div className='background-secondry text-primary rounded-lg text-xs py-2 px-7 mb-5 w-fit'>Netbook community</div>
                <p className='text-dark-blue font-bold text-56'>Your Solutions For <br/> Community!</p>
                <p className='text-grey text-lg mt-5 mb-6 max-md: text-sm'>More than 2 billion people in over countries use socibook <br/> to stay in touch with friends & family.</p>
                <div className='md:flex'>
                    <Button className={'button-primary md:mr-5 max-md:mb-5'}>About More</Button>
                    <Button className={'button-secondry'}>Invite Friend</Button>
                </div>
            </div>
            <img className='header-img' src={logo} alt='headerImg' />
        </div>
    )
}

export default HeaderSection