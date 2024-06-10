"use client"


import Drawer from '@/components/Drawer/Drawer';
import { useTranslations } from 'next-intl';
import { Languages, Eclipse } from 'lucide-react';
import HoverButton from '@/components/Button/HoverButton';


export default function Index() {
    const t = useTranslations('Home');

    return (
        <div className='min-h-[120vh] flex flex-col items-center'>
            <h1>{t('morning')}</h1>


        </div>
    )
}