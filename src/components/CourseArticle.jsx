export default function CourseArticle(
    {
        code,name,credit,type,classes,instructors,schedule,
        hours,languages,certificationsSupport,description,
        prerequisites,syllabus,weeklySchedule,exams,
        teachingAndAssessment,textbook,referenceBooks,teachingSoftware,
        rules
    }){
    return(
        <article>
            <Title {...name}/>
            <div class="grid grid-flow-row-dense gap-3 mb-3 sm:grid-cols-3">
                <Code code={code}/>
                <Type type={type}/>
                <Credit credit={credit}/>
                <Languages languages={languages}/>
                <Instructor instructor={instructors}/>
                <Classes classes={classes}/>
                <Hours hours={hours}/>
                <Schedule schedule={schedule}/>
            </div>
            <div class="grid grid-cols-2 gap-3 mb-3">
                <CertificationsSupport certificationsSupport={certificationsSupport}/>
                <Prerequisites prerequisites={prerequisites}/>
                <Description description={description}/>
                <Syllabus syllabus={syllabus}/>
                <WeeklySchedule weeklySchedule={weeklySchedule}/>
                <TeachingAndAssessment teachingAndAssessment={teachingAndAssessment}/>
                <Exams exams={exams}/>
                <Textbook textbook={textbook}/>
                <ReferenceBooks referenceBooks={referenceBooks}/>
                <TeachingSoftware teachingSoftware={teachingSoftware}/>
                <Rules rules={rules}/>
            </div>
        </article>
    )
}
const Title = ({zh,en})=>(
    <h1 class="grid px-3 py-5">
        <span class="text-2xl font-bold">{zh}</span>
        <span class="'text-xl'">{en}</span>
    </h1>
)
const Code = ({code})=>(
    <section class="bg-gray-800 p-3 rounded-lg flex gap-x-6 items-center sm:flex-col sm:items-start sm:gap-y-2">
        <h2 class="text-lg font-bold text-nowrap">課程代碼</h2>
        <p class="">{code}</p>
    </section>
)
const Type = ({type})=>(
    <section class="bg-gray-800 p-3 rounded-lg flex gap-x-6 items-center sm:flex-col sm:items-start sm:gap-y-2">
        <h2 class="text-lg font-bold text-nowrap">課程類型</h2>
        <p class="">{type}</p>
    </section>
)
const Credit = ({credit})=>(
    <section class="bg-gray-800 p-3 rounded-lg flex gap-x-6 items-center sm:flex-col sm:items-start sm:gap-y-2">
        <h2 class="text-lg font-bold text-nowrap">課程學分</h2>
        <p class="">{credit}</p>
    </section>
)
const Languages = ({languages})=>(
    <section class="bg-gray-800 p-3 rounded-lg flex gap-x-6 items-center sm:flex-col sm:items-start sm:gap-y-2 sm:col-span-2">
        <h2 class="text-lg font-bold text-nowrap">授課語言</h2>
        <div class="sm:flex sm:flex-wrap w-full grid grid-cols-1 gap-2 text-center">
            {languages.map(language=>(
                <a href={`/course/113/1/language/${language}`} class="">
                    <p class="bg-gray-700 py-2 px-2 rounded-md sm:px-4">{language}</p>
                </a>
            ))}
        </div>
    </section>
)
const Instructor = ({instructor})=>(
    <section class="bg-gray-800 p-3 rounded-lg flex gap-x-6 items-center sm:flex-col sm:items-start sm:gap-y-2 sm:col-span-full">
        <h2 class="text-lg font-bold text-nowrap">任課教師</h2>
        <div class="sm:grid sm:gap-2 sm:text-center w-full grid grid-cols-1 gap-2 text-center sm:grid-cols-3">
            {
                instructor.map((i)=>(<a href={`/course/113/1/instructor/${i}`} class="">
                    <p class="bg-gray-700 py-2 px-2 rounded-md">{i}</p>
                </a>))
            }
        </div>
    </section>
)
const Classes = ({classes})=>(
    <section class="bg-gray-800 p-3 rounded-lg flex gap-x-6 items-center sm:flex-col sm:items-start sm:gap-y-2 sm:col-span-full">
        <h2 class="text-lg font-bold text-nowrap">開課班級</h2>
        <div class="sm:grid sm:gap-2 sm:text-center w-full grid grid-cols-1 gap-2 text-center sm:grid-cols-3">
            {
                classes.map((c)=>(
                    <a href={`/course/113/1/class/${c}`} class="">
                        <p class="bg-gray-700 py-2 px-2 rounded-md">{c}</p>
                    </a>
                ))
            }
        </div>
    </section>
)
const Hours = ({hours})=>(
    <section class="bg-gray-800 p-3 rounded-lg flex gap-x-6 items-center sm:flex-col sm:items-start sm:gap-y-2">
        <h2 class="text-lg font-bold text-nowrap">課程時數</h2>
        <div class="w-full grid grid-rows-2 items-center border border-gray-100/15 rounded-md text-center">
            <section class="grid grid-cols-2 py-1 border-b border-gray-100/15 last-of-type:border-b-0">
                <h3>課程</h3>
                <p>{hours.course}</p>
            </section>
            <section class="grid grid-cols-2 py-1 border-b border-gray-100/15 last-of-type:border-b-0">
                <h3>實習</h3>
                <p>{hours.practice}</p>
            </section>
        </div>
    </section>
)
const Schedule = ({schedule})=>(
    <section class="bg-gray-800 p-3 rounded-lg flex gap-x-6 items-center sm:flex-col sm:items-start sm:gap-y-2 sm:col-span-full">
        <h2 class="text-lg font-bold text-nowrap">上課時間</h2>
        <div class="w-full flex flex-col gap-y-2">
            {
                schedule.map(s=>(
                    <>
                        <p class="grid grid-cols-2 text-center sm:grid-cols-3">
                            <a href={`/course/113/1/schedule/weekday/${s.day}`} class="bg-gray-700 py-2 px-2 rounded-tl-md border-r border-gray-100/15 sm:rounded-l-md sm:border-r-0 sm:px-4">{s.day}</a>
                            <a href={`/course/113/1/schedule/period/${s.period}`} class="bg-gray-700 py-2 px-2 rounded-tr-md sm:rounded-none sm:border-x sm:border-gray-100/15 sm:px-4">{s.period}</a>
                            <a href={`/course/113/1/location/${s.location}`} class="bg-gray-700 py-2 px-2 col-span-2 rounded-b-md border-t border-gray-100/15 grid place-items-center sm:px-4 sm:col-auto sm:border-t-0 sm:rounded-b-none sm:rounded-r-md">{s.location}</a>
                        </p>
                    </>
                ))
            }
        </div>
    </section>
)
const Rules = ({rules})=>(
    <section class="bg-gray-800 p-3 rounded-lg flex flex-col gap-y-2 col-span-full">
        <h2 class="text-lg font-bold">課程規範</h2>
        <p>
            <span>{rules}</span>
        </p>
    </section>
)
const TeachingSoftware = ({teachingSoftware})=>(
    <section class="bg-gray-800 p-3 rounded-lg flex flex-col gap-y-2 col-span-full">
        <h2 class="text-lg font-bold">教學軟體</h2>
        <p>
            <span>{teachingSoftware==""?"無":teachingSoftware}</span>
        </p>
    </section>
)
const ReferenceBooks = ({referenceBooks})=>(
    <section class="bg-gray-800 p-3 rounded-lg flex flex-col gap-y-2 col-span-full">
        <h2 class="text-lg font-bold">參考書籍</h2>
        <p>
            <span>{referenceBooks==""?"無":referenceBooks}</span>
        </p>
    </section>
)
const Textbook = ({textbook})=>(
    <section class="bg-gray-800 p-3 rounded-lg flex flex-col gap-y-2 col-span-full sm:col-auto">
        <h2 class="text-lg font-bold">指定用書</h2>
        <div class="">
            <section class="grid grid-cols-4 py-2 border-b border-gray-100/15 last-of-type:border-b-0">
                <h3>書名</h3>
                <p class="col-span-3">{textbook.title==""?"無":textbook.title}</p>
            </section>
            <section class="grid grid-cols-4 py-2 border-b border-gray-100/15 last-of-type:border-b-0">
                <h3>作者</h3>
                <p class="col-span-3">{textbook.author==""?"無":textbook.author}</p>
            </section>
            <section class="grid grid-cols-4 py-2 border-b border-gray-100/15 last-of-type:border-b-0">
                <h3>書局</h3>
                <p class="col-span-3">{textbook.publisher==""?"無":textbook.publisher}</p>
            </section>
            <section class="grid grid-cols-4 py-2 border-b border-gray-100/15 last-of-type:border-b-0">
                <h3>年份</h3>
                <p class="col-span-3">{textbook.year==""?"無":textbook.year}</p>
            </section>
            <section class="grid grid-cols-4 py-2 border-b border-gray-100/15 last-of-type:border-b-0">
                <h3>ISBN</h3>
                <p class="col-span-3">{textbook.ISBN==""?"無":textbook.ISBN}</p>
            </section>
            <section class="grid grid-cols-4 py-2 border-b border-gray-100/15 last-of-type:border-b-0">
                <h3>版本</h3>
                <p class="col-span-3">{textbook.edition==""?"無":textbook.edition}</p>
            </section>
        </div>
    </section>
)
const Exams = ({exams})=>(
    <section class="bg-gray-800 p-3 rounded-lg flex flex-col gap-y-2 col-span-full sm:col-auto">
        <h2 class="text-lg font-bold">考試方式</h2>
        <div class="grid grid-rows-3">
            <section class="grid grid-cols-4 py-2 border-b border-gray-100/15 last-of-type:border-b-0">
                <h3>期中考</h3>
                <p class="col-span-3">{exams.midterm==""?"無":exams.midterm}</p>
            </section>
            <section class="grid grid-cols-4 py-2 border-b border-gray-100/15 last-of-type:border-b-0">
                <h3>期末考</h3>
                <p class="col-span-3">{exams.final==""?"無":exams.final}</p>
            </section>
            <section class="grid grid-cols-4 py-2 border-b border-gray-100/15 last-of-type:border-b-0">
                <h3>其他週</h3>
                <p class="col-span-3">{exams.other==""?"無":exams.other}</p>
            </section>
        </div>
    </section>
)
const TeachingAndAssessment = ({teachingAndAssessment})=>(
    <section class="bg-gray-800 p-3 rounded-lg flex flex-col gap-y-2 col-span-full">
        <h2 class="text-lg font-bold">教學、評量方式</h2>
        <div class="grid grid-cols-1 gap-y-2 text-center sm:gap-y-0 sm:border sm:border-gray-100/15 sm:rounded-md">
            {
                teachingAndAssessment.map(tA=>(
                    <div class="border border-gray-100/15 rounded-md sm:grid sm:grid-cols-2 sm:border-t-0 sm:border-x-0 sm:last-of-type:border-b-0 sm:rounded-none">
                        <p class="grid items-center border-b p-2 border-gray-100/15 sm:border-b-0 sm:text-left">{tA.objective}</p>
                        <div class="grid grid-cols-3">
                            {
                                tA.teachingMethods.map(tM=>(
                                    <p class="grid items-center p-2 border-r border-gray-100/15 sm:border-r-0">{tM}</p>
                                ))
                            }
                            <div class="col-span-2 grid grid-cols-1 items-center">
                                {
                                    tA.assessmentMethods.map(aM=>(
                                        <div class="grid grid-cols-2 p-2 gap-x-2 border-b border-gray-100/15 last-of-type:border-b-0 sm:border-b-0">
                                            <p>{aM.method}</p>
                                            <p>{aM.type}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </section>
)
const WeeklySchedule = ({weeklySchedule})=>(
    <section class="bg-gray-800 p-3 rounded-lg flex flex-col gap-y-2 col-span-full">
        <h2 class="text-lg font-bold">課程進度表</h2>
        <p>
            <span>{weeklySchedule.split("<br>").map(ws=>(
                <>
                    {ws}
                    <br/>
                </>
            ))}</span>
        </p>
    </section>
)
const Syllabus = ({syllabus})=>(
    <section class="bg-gray-800 p-3 rounded-lg flex flex-col gap-y-2 col-span-full">
        <h2 class="text-lg font-bold">課程大綱</h2>
        <p>
            <span>{syllabus.zh.split("<br>").map(s=>(<>{s}<br/></>))}</span>
        </p>
        <p>
            <span>{syllabus.en.split("<br>").map(s=>(<>{s}<br/></>))}</span>
        </p>
    </section>
)
const Description = ({description})=>(
    <section class="bg-gray-800 p-3 rounded-lg flex flex-col gap-y-2 col-span-full">
        <h2 class="text-lg font-bold">課程概述</h2>
        <p>
            <span>{description}</span>
        </p>
    </section>
)
const Prerequisites = ({prerequisites})=>(
    <section class="bg-gray-800 p-3 rounded-lg flex flex-col gap-y-2 col-span-full">
        <h2 class="text-lg font-bold">先修科目與預備能力</h2>
        <p>
            <span>{prerequisites}</span>
        </p>
    </section>
)
const CertificationsSupport = ({certificationsSupport})=>(
    <section class="bg-gray-800 p-3 rounded-lg flex flex-col gap-y-2 col-span-full">
        <h2 class="text-lg font-bold">輔導考證</h2>
        <ol>
            {certificationsSupport.map(cS=>(
                <li class="flex gap-x-2">
                    <span>{cS}</span>
                </li>
            ))}
        </ol>
    </section>
)