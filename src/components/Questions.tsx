import Button from './Button'

interface PropsType {
    name: string
};

export default function Questions({ name }: PropsType) {
    return (
        <section className='page__container'>
            <div className='page__row'>
                <div className='grid__2'>
                    <img src={require("../img/vet-4.png")} alt='vet-4' className='contact__image'></img>
                    <div className='home__page__content'>
                        <h1>{name}</h1>
                        <p>Donec feugiat lectus mi, nec scelerisque massa viverraac. Vivam vestibulum ornare imperdiet.</p>

                        <div className='contact__container'>
                            <div className='contact__row'>
                                <h3>Name : </h3>
                                <input type='text' placeholder='Ex Joseph'></input>
                            </div>

                            <div className='grid__2'>
                                <div className='contact__row'>
                                    <h3>Telephone : </h3>
                                    <input type='text' placeholder='+62 491 xxxx'></input>
                                </div>

                                <div className='contact__row'>
                                    <h3>Email : </h3>
                                    <input type='text' placeholder='mail@mail.com'></input>
                                </div>
                            </div>

                            <div className='contact__row'>
                                <h3>Questions : </h3>
                                <textarea placeholder='Your Questions'></textarea>
                            </div>
                        </div>
                        <Button className={"pages__button--send"} name={"Send Questions"} />
                    </div>
                </div>
            </div>
        </section>
    )
}
