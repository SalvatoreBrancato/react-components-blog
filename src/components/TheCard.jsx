export default function TheCard() {
    return (
        <div className='flex justify-center items-center flex-col'>
            <div class="box-post border-solid border-2 border-indigo-600">
                {/* <div className="img"></div> */}
                <img src="https://picsum.photos/600/400" alt="img" />
                <h1 className="m-1">Titolo</h1>
                <p className="m-1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi distinctio hic at necessitatibus nemo ex illo. Exercitationem labore nesciunt enim natus, odit a quia fugiat officiis voluptatibus dolorem modi deleniti?</p>
                <button className="btn-primary m-1">Leggi di più</button>
            </div>
        </div>
    );
}