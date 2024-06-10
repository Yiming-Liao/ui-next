import { useTranslations } from "next-intl"

const About = () => {
    const t = useTranslations("About")
    return (
        <div className='w-full min-h-[80vh] flex justify-center items-center'>
            <h1 className='text-5xl font-semibold text-slate-500'>{t('text')}</h1>
        </div>
    )
}
export default About;