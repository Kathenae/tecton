import { PageProps } from '@/types';
import Logo from '../../img/logo_tec-tonarq.png';
import LogoEnscape from "../../img/logo_enscape.png";
import LogoVray from "../../img/logo_vray.png";
import LogoSketchUp from "../../img/logo_sketch.png";
import LogoWatermark from "../../img/logo.png";
import LogoMkt from "../../img/assinatura white.png";
import HeroSectionBg from "../../img/img1.png";
import ModelsImg from "../../img/img21.png";
import ContactModelImg from "../../img/img15.png";
import VideoSectionBg from "../../img/img19.png";
import Gallery01 from "../../img/gallery01.png";
import Gallery02 from "../../img/gallery02.png";
import Gallery03 from "../../img/gallery03.png";
import Package1Bg from "../../img/img18.png";
import Package2Bg from "../../img/img17.png";
import Package3Bg from "../../img/img16.png";
import { Head, Link } from '@inertiajs/react';
import TextInput from '@/Components/TextInput';
import PrimaryButton from '@/Components/PrimaryButton';
import InputLabel from '@/Components/InputLabel';

export default function Home({
    auth,
    laravelVersion,
    phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {

    return (
        <>
            <header className='flex bg-white border-b-[20px] border-bahia-400 space-x-12 px-10'>
                <img src={Logo} className='w-56' />
                <nav className='w-full flex items-end justify-between'>
                    <Link className='w-36 text-center hover:bg-bahia-400 rounded-t-2xl font-bold hover:text-white' href="">Inicio</Link>
                    <Link className='w-36 text-center hover:bg-bahia-400 rounded-t-2xl font-bold hover:text-white' href="">Cursos</Link>
                    <Link className='w-36 text-center hover:bg-bahia-400 rounded-t-2xl font-bold hover:text-white' href="">Portafolio</Link>
                    <Link className='w-36 text-center hover:bg-bahia-400 rounded-t-2xl font-bold hover:text-white' href="">Servicios</Link>
                    <Link className='w-36 text-center hover:bg-bahia-400 rounded-t-2xl font-bold hover:text-white' href="">Quiénes somos</Link>
                </nav>
                <div className='space-x-4 w-80 flex items-center'>
                    <Link className='rounded-2xl w-28 hover:bg-gray-200 text-center' href={route('register')}>Registrarse</Link>
                    <Link className='rounded-2xl w-28 bg-gray-100 hover:bg-gray-200 text-center' href={route('login')}>Iniciar sesión</Link>
                </div>
            </header>

            <section className='relative'>
                <img src={HeroSectionBg} className='brightness-50 w-full' />
                <div className='w-full h-full absolute top-0 left-0'>
                    <div className="container mx-auto flex flex-col justify-center h-full">
                        <h3 className='text-7xl text-white w-[600px] font-thin'>Llegó el momento en que tus renders parezcan fotos</h3>
                        <Link className='text-5xl text-bahia-400 mt-4' href=''>Sepa más</Link>
                    </div>
                </div>
            </section>

            <section className='relative bg-bahia-400 w-full'>
                <div className='container mx-auto relative'>
                    <img src={ModelsImg} className='absolute left-0 w-[560px] bottom-0' />
                    <div className='flex items-center justify-end relative h-96'>
                        <img src={LogoWatermark} className='absolute right-24 w-[400px] bottom-0' />
                        <h3 className='text-7xl w-[400px] font-bold text-white mr-32'>Cursos de renderizado fotorealista</h3>
                    </div>
                </div>
            </section>

            <section className='relative w-full'>
                <img src={VideoSectionBg} className='w-full brightness-[0.1]' />
                <div className='absolute top-0 left-0 w-full h-full'>
                    <div className='container mx-auto flex flex-col h-full justify-center items-center'>
                        <h3 className='text-white text-7xl font-bold mb-16'>Quiénes somos</h3>
                        <iframe
                            className='w-full h-[600px] rounded-xl'
                            src="https://www.youtube.com/embed/Rc7OHXJtWco?si=cQTCXPLA8acymzqg"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        >
                        </iframe>
                    </div>
                </div>
            </section>

            <section className='bg-bahia-400 w-full h-96 flex items-center justify-center'>
                <h3 className='text-8xl font-extrabold text-center text-tuatara-950'>Resultados que puedes <br /> llegar a alcanzar</h3>
            </section>

            <section className='bg-tuatara-900 flex flex-col py-32 justify-center items-center'>
                <div className='container mx-auto flex space-x-4 overflow-hidden'>
                    <div className='relative rounded-3xl'>
                        <img className='rounded-3xl min-w-[480px] h-[300px]' src={Gallery01} />
                        <img className='absolute w-48 bottom-2 right-4' src={LogoEnscape} />
                    </div>
                    <div className='relative rounded-3xl'>
                        <img className='rounded-3xl min-w-[480px] h-[300px]' src={Gallery03} />
                        <img className='absolute w-24 bottom-2 right-4' src={LogoVray} />
                    </div>
                    <div className='relative rounded-3xl'>
                        <img className='rounded-3xl min-w-[480px] h-[300px]' src={Gallery02} />
                        <img className='absolute w-48 bottom-2 right-4' src={LogoEnscape} />
                    </div>
                </div>
                <Link href='' className='bg-white mt-12 text-bahia-400 px-8 py-2 rounded-full font-bold text-5xl'>Ver nuestro portfolio</Link>
            </section>

            <section className='relative'>
                <div className='container mx-auto text-center py-8'>
                    <h3 className='text-7xl text-tuatara-900 font-bold'>Nuestros Paquetes</h3>
                    <div className='grid grid-cols-3 mt-8 gap-40'>
                        <div className='h-96 relative overflow-clip shadow-2xl rounded-3xl flex flex-col items-center justify-center'>
                            <img src={Package1Bg} className='absolute top-0 left-0 w-full h-full object-cover brightness-[0.5] -z-10' />
                            <img src={LogoSketchUp} className='w-44' />
                            <h3 className='text-4xl font-bold text-white uppercase mt-6'>Inicial</h3>
                        </div>
                        <div className='h-96 relative overflow-clip space-y-4 shadow-2xl rounded-3xl flex flex-col items-center justify-center'>
                            <img src={Package2Bg} className='absolute top-0 left-0 w-full h-full object-cover brightness-[0.5] -z-10' />
                            <img src={LogoSketchUp} className='w-44' />
                            <h3 className='font-bold text-5xl text-white'>+</h3>
                            <img src={LogoVray} className='w-36 bg-blue-700 px-4 py-2 rounded-lg' />
                        </div>
                        <div className='h-96 relative overflow-clip space-y-4 shadow-2xl rounded-3xl flex flex-col items-center justify-center'>
                            <img src={Package3Bg} className='absolute top-0 left-0 w-full h-full object-cover brightness-[0.5] -z-10' />
                            <img src={LogoSketchUp} className='w-44' />
                            <h3 className='font-bold text-5xl text-white'>+</h3>
                            <img src={LogoEnscape} className='w-44 from-orange-400 to-orange-500 bg-gradient-to-r px-4 py-2 rounded-lg' />
                        </div>
                    </div>
                </div>
            </section>

            <section className='relative bg-tuatara-950 w-full pb-40'>
                <div className="container mx-auto flex flex-col items-center py-12">
                    <h1 className='text-7xl font-bold text-white'>Servicios</h1>
                    <ul className='list-none flex space-x-6 mt-8'>
                        <li className='border-2 border-white rounded-full px-6 py-4 text-white font-bold items-center justify-center flex w-72'>Elaboración de proyectos arquitectónicos</li>
                        <li className='border-2 border-white rounded-full px-6 py-4 text-white font-bold items-center justify-center flex w-72'>Diseño de interiores y fabricación de mobiliarios</li>
                        <li className='border-2 border-white rounded-full px-6 py-4 text-white font-bold items-center justify-center flex w-72'>Visualización fotorrealista</li>
                        <li className='border-2 border-white rounded-full px-6 py-4 text-white font-bold items-center justify-center flex w-72'>Recorridos Virtuales</li>
                    </ul>
                </div>
            </section>

            <section className='bg-white border-b-[24px] border-bahia-400 relative'>
                <div className='absolute -top-20 left-0 w-[90%] pr-56 rounded-r-full bg-bahia-400 py-12'>
                    <div className="container mx-auto flex flex-col items-end">
                        <h1 className='text-6xl font-bold text-white'>Contactanos</h1>
                        <p className='text-lg mt-4 font-bold text-white'>Y sepa más sobre nuestros servicios y cursos</p>
                    </div>
                </div>
                <div className='container mx-auto pb-24 pt-60 flex flex-col items-center justify-center relative'>
                    <div className='flex flex-col items-start justify-start relative'>
                        <img src={ContactModelImg} className='absolute -left-12 -top-[400px] z-10 w-[325px]' />
                        <form method='post' className='bg-gray-200 w-[800px] shadow-2xl rounded-2xl px-12 py-8 relative z-20'>
                            <div className='grid grid-cols-6 gap-4'>
                                <div className='col-span-3 space-y-6'>
                                    <div className='flex flex-col'>
                                        <InputLabel htmlFor="name">Nombres y Apelidos</InputLabel>
                                        <TextInput name='name' />
                                    </div>
                                    <div className='flex flex-col'>
                                        <InputLabel htmlFor="email">Correo electrónico</InputLabel>
                                        <TextInput name='email' />
                                    </div>
                                </div>
                                <div className='col-span-3 pb-5'>
                                    <InputLabel htmlFor="message">Mensaje</InputLabel>
                                    <textarea name='message' className='rounded-xl border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 w-full h-full'></textarea>
                                </div>
                            </div>
                            <button className='mt-12 px-6 py-4 !text-center text-white font-bold hover:bg-bahia-300 transition-colors rounded-2xl bg-bahia-400 w-full'>Enviar mensaje</button>
                        </form>

                    </div>
                </div>
            </section>
            <footer className='bg-tuatara-950 py-12 flex text-white space-x-2 items-center justify-center'>
                <p>Designed by: </p>
                <img src={LogoMkt} width={100}/>
            </footer>
        </>
    );
}
