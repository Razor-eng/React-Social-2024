import { useEffect, useState } from 'react'
import './Theme.css'

const Theme = () => {
    const [active, setActive] = useState(2);
    const [activeColor, setActiveColor] = useState(0);
    const [activeMode, setActiveMode] = useState(0);

    const sizes = [
        { val: '1' }, { val: '2' }, { val: '3' }, { val: '4' }, { val: '5' }
    ]

    const bgs = [
        {
            val: '1',
            mode: 'Light'
        },
        {
            val: '2',
            mode: 'Dim'
        },
        {
            val: '3',
            mode: 'Lights Out'
        },
    ]

    const Colors = [
        'hsl(252,75%,60%)',
        'hsl(52,75%,60%)',
        'hsl(352,75%,60%)',
        'hsl(152,75%,60%)',
        'hsl(202,75%,60%)',
    ]

    useEffect(() => {
        document.querySelector('#theme').addEventListener('click', () => {
            document.querySelector('.customize-theme').style.display = 'grid';
        })
        document.querySelector('.customize-theme').addEventListener('click', (e) => {
            if (e.target.classList.contains('customize-theme')) {
                document.querySelector('.customize-theme').style.display = 'none';
            }
        })

        var root = document.querySelector(':root');

        document.querySelectorAll('.choose-size span').forEach(size => {
            let fontSize;

            size.addEventListener('click', () => {
                if (size.classList.contains('font-size-1')) {
                    fontSize = '10px';
                    root.style.setProperty('----sticky-top-left', '5.4rem')
                    root.style.setProperty('----sticky-top-right', '5.4rem')
                } else if (size.classList.contains('font-size-2')) {
                    fontSize = '13px';
                    root.style.setProperty('----sticky-top-left', '5.4rem')
                    root.style.setProperty('----sticky-top-right', '-7rem')
                } else if (size.classList.contains('font-size-3')) {
                    fontSize = '16px';
                    root.style.setProperty('----sticky-top-left', '-2rem')
                    root.style.setProperty('----sticky-top-right', '-17rem')
                } else if (size.classList.contains('font-size-4')) {
                    fontSize = '19px';
                    root.style.setProperty('----sticky-top-left', '-5rem')
                    root.style.setProperty('----sticky-top-right', '-25rem')
                } else if (size.classList.contains('font-size-5')) {
                    fontSize = '22px';
                    root.style.setProperty('----sticky-top-left', '-12rem')
                    root.style.setProperty('----sticky-top-right', '-35rem')
                }

                document.querySelector('html').style.fontSize = fontSize;
            })
        })

        document.querySelectorAll('.choose-color span').forEach(color => {
            color.addEventListener('click', () => {
                let primary;

                if (color.classList.contains('color-1')) {
                    primary = 252;
                } else if (color.classList.contains('color-2')) {
                    primary = 52;
                } else if (color.classList.contains('color-3')) {
                    primary = 352;
                } else if (color.classList.contains('color-4')) {
                    primary = 152;
                } else if (color.classList.contains('color-5')) {
                    primary = 202;
                }

                root.style.setProperty('--primary-color-hue', primary)
            })
        })

        let dark;
        let white;
        let light;

        const changeBg = () => {
            root.style.setProperty('--light-color-lightness', light);
            root.style.setProperty('--white-color-lightness', white);
            root.style.setProperty('--dark-color-lightness', dark);
        }

        document.querySelector('.bg-1').addEventListener('click', () => {
            dark = '17%';
            white = '100%';
            light = '95%';
            changeBg();
        })

        document.querySelector('.bg-2').addEventListener('click', () => {
            dark = '95%';
            white = '20%';
            light = '15%';
            changeBg();
        })

        document.querySelector('.bg-3').addEventListener('click', () => {
            dark = '95%';
            white = '10%';
            light = '0%';
            changeBg();
        })

        document.querySelectorAll('#create').forEach(ele => {
            ele.addEventListener('click', () => {
                document.querySelector('.createModal').style.display = 'flex';
            })
        })

        document.querySelector('#close').addEventListener('click', () => {
            document.querySelector('.createModal').style.display = 'none';
        })
    }, [])

    return (
        <div className='customize-theme'>
            <div className="card">
                <h2>Customize your view</h2>
                <p>Manage your font size, color, and background.</p>

                <div className="font-size">
                    <h4>Font Size</h4>
                    <div>
                        <h6>Aa</h6>
                        <div className="choose-size">
                            {sizes.map((size, id) => (
                                <span key={id} className={`font-size-${size.val} ${active === id ? 'active' : ''}`} onClick={() => setActive(id)}></span>
                            ))}
                        </div>
                        <h3>Aa</h3>
                    </div>
                </div>

                <div className="color">
                    <h4>Color</h4>
                    <div className="choose-color">
                        {Colors.map((color, id) => (
                            <span key={id} className={`color-${id + 1} ${activeColor === id ? 'active' : ''}`} style={{ background: `${color}` }} onClick={() => setActiveColor(id)}></span>
                        ))}
                    </div>
                </div>

                <div className="background">
                    <h4>Background</h4>
                    <div className="choose-bg">
                        {bgs.map((bg, id) => (
                            <div className={`bg-${bg.val} ${activeMode === id ? 'active' : ''}`} key={id} onClick={() => setActiveMode(id)}>
                                <span></span>
                                <h5>{bg.mode}</h5>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Theme