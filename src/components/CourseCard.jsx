function CourseCard({title, desc, onClick}) {
    return (
        <div class="card w-25">
            <div class="card-body">
                <h5 class="card-title">{title}</h5>
                <p class="card-text">{desc}</p>
                <a href="#" class="btn btn-primary" onClick={onClick}>get cource</a>
            </div>
        </div>
    )
} export default CourseCard;