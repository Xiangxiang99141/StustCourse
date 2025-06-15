import { Link } from "react-router"


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
            <div className="grid grid-flow-row-dense gap-3 mb-3 sm:grid-cols-3">
                <Code code={code}/>
                <Type type={type}/>
                <Credit credit={credit}/>
                <Languages languages={languages}/>
                <Instructor instructor={instructors}/>
                <Classes classes={classes}/>
                <Hours hours={hours}/>
                <Schedule schedule={schedule} code={code}/>
            </div>
            <div className="grid grid-cols-2 gap-3 mb-3">
                <CertificationsSupport certificationsSupport={certificationsSupport}/>
                <Prerequisites prerequisites={prerequisites}/>
                <Description description={description}/>
                <Syllabus syllabus={syllabus}/>
                <WeeklySchedule weeklySchedule={weeklySchedule}/>
                <TeachingAndAssessment teachingAndAssessment={teachingAndAssessment} code={code}/>
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
    <h1 className="grid px-3 py-5">
        <span className="text-2xl font-bold">{zh}</span>
        <span className="'text-xl'">{en}</span>
    </h1>
)
const Code = ({code})=>(
    <section className="bg-gray-800 p-3 rounded-lg flex gap-x-6 items-center sm:flex-col sm:items-start sm:gap-y-2">
        <h2 className="text-lg font-bold text-nowrap">課程代碼</h2>
        <p className="">{code}</p>
    </section>
)
const Type = ({type})=>(
    <section className="bg-gray-800 p-3 rounded-lg flex gap-x-6 items-center sm:flex-col sm:items-start sm:gap-y-2">
        <h2 className="text-lg font-bold text-nowrap">課程類型</h2>
        <p className="">{type}</p>
    </section>
)
const Credit = ({credit})=>(
    <section className="bg-gray-800 p-3 rounded-lg flex gap-x-6 items-center sm:flex-col sm:items-start sm:gap-y-2">
        <h2 className="text-lg font-bold text-nowrap">課程學分</h2>
        <p className="">{credit}</p>
    </section>
)
const Languages = ({languages})=>(
    <section className="bg-gray-800 p-3 rounded-lg flex gap-x-6 items-center sm:flex-col sm:items-start sm:gap-y-2 sm:col-span-2">
        <h2 className="text-lg font-bold text-nowrap">授課語言</h2>
        <div className="sm:flex sm:flex-wrap w-full grid grid-cols-1 gap-2 text-center">
            {languages.map(language=>(
                <Link to={`/course/113/1/language/${language.split('.')[1]}`} className="" key={language.split('.')[1]}>
                    <p className="bg-gray-700 py-2 px-2 rounded-md sm:px-4">{language.split('.')[1]}</p>
                </Link>
            ))}
        </div>
    </section>
)
const Instructor = ({instructor})=>(
    <section className="bg-gray-800 p-3 rounded-lg flex gap-x-6 items-center sm:flex-col sm:items-start sm:gap-y-2 sm:col-span-full">
        <h2 className="text-lg font-bold text-nowrap">任課教師</h2>
        <div className="sm:grid sm:gap-2 sm:text-center w-full grid grid-cols-1 gap-2 text-center sm:grid-cols-3">
            {
                instructor.map((i)=>(
                    <Link to={`/course/113/1/instructor/${i}`} className="" key={i}>
                        <p className="bg-gray-700 py-2 px-2 rounded-md">{i}</p>
                    </Link>
                ))
            }
        </div>
    </section>
)
const Classes = ({classes})=>(
    <section className="bg-gray-800 p-3 rounded-lg flex gap-x-6 items-center sm:flex-col sm:items-start sm:gap-y-2 sm:col-span-full">
        <h2 className="text-lg font-bold text-nowrap">開課班級</h2>
        <div className="sm:grid sm:gap-2 sm:text-center w-full grid grid-cols-1 gap-2 text-center sm:grid-cols-3">
            {
                classes.map((c)=>(
                    <Link to={`/course/113/1/className/${c}`} className="" key={c}>
                        <p className="bg-gray-700 py-2 px-2 rounded-md">{c}</p>
                    </Link>
                ))
            }
        </div>
    </section>
)
const Hours = ({hours})=>(
    <section className="bg-gray-800 p-3 rounded-lg flex gap-x-6 items-center sm:flex-col sm:items-start sm:gap-y-2">
        <h2 className="text-lg font-bold text-nowrap">課程時數</h2>
        <div className="w-full grid grid-rows-2 items-center border border-gray-100/15 rounded-md text-center">
            <section className="grid grid-cols-2 py-1 border-b border-gray-100/15 last-of-type:border-b-0">
                <h3>課程</h3>
                <p>{hours.course}</p>
            </section>
            <section className="grid grid-cols-2 py-1 border-b border-gray-100/15 last-of-type:border-b-0">
                <h3>實習</h3>
                <p>{hours.practice}</p>
            </section>
        </div>
    </section>
)
const Schedule = ({schedule,code})=>(
    <section className="bg-gray-800 p-3 rounded-lg flex gap-x-6 items-center sm:flex-col sm:items-start sm:gap-y-2 sm:col-span-full">
        <h2 className="text-lg font-bold text-nowrap">上課時間</h2>
        <div className="w-full flex flex-col gap-y-2">
            {
                schedule.map(s=>(
                    <p className="grid grid-cols-2 text-center sm:grid-cols-3" key={code+s.location+s.period}>
                        <Link to={`/course/113/1/schedule/weekday/${s.day}`} className="bg-gray-700 py-2 px-2 rounded-tl-md border-r border-gray-100/15 sm:rounded-l-md sm:border-r-0 sm:px-4">{s.day}</Link>
                        <Link to={`/course/113/1/schedule/period/${s.period}`} className="bg-gray-700 py-2 px-2 rounded-tr-md sm:rounded-none sm:border-x sm:border-gray-100/15 sm:px-4">{s.period}</Link>
                        <Link to={`/course/113/1/location/${s.location}`} className="bg-gray-700 py-2 px-2 col-span-2 rounded-b-md border-t border-gray-100/15 grid place-items-center sm:px-4 sm:col-auto sm:border-t-0 sm:rounded-b-none sm:rounded-r-md">{s.location}</Link>
                    </p>
                ))
            }
        </div>
    </section>
)
const Rules = ({rules})=>(
    <section className="bg-gray-800 p-3 rounded-lg flex flex-col gap-y-2 col-span-full">
        <h2 className="text-lg font-bold">課程規範</h2>
        <p>
            <span>{rules}</span>
        </p>
    </section>
)
const TeachingSoftware = ({teachingSoftware})=>(
    <section className="bg-gray-800 p-3 rounded-lg flex flex-col gap-y-2 col-span-full">
        <h2 className="text-lg font-bold">教學軟體</h2>
        <p>
            <span>{teachingSoftware==""?"無":teachingSoftware}</span>
        </p>
    </section>
)
const ReferenceBooks = ({referenceBooks})=>(
    <section className="bg-gray-800 p-3 rounded-lg flex flex-col gap-y-2 col-span-full">
        <h2 className="text-lg font-bold">參考書籍</h2>
        <p>
            <span>{referenceBooks==""?"無":referenceBooks}</span>
        </p>
    </section>
)
const Textbook = ({textbook})=>(
    <section className="bg-gray-800 p-3 rounded-lg flex flex-col gap-y-2 col-span-full sm:col-auto">
        <h2 className="text-lg font-bold">指定用書</h2>
        <div className="">
            <section className="grid grid-cols-4 py-2 border-b border-gray-100/15 last-of-type:border-b-0">
                <h3>書名</h3>
                <p className="col-span-3">{textbook.title}</p>
            </section>
            <section className="grid grid-cols-4 py-2 border-b border-gray-100/15 last-of-type:border-b-0">
                <h3>作者</h3>
                <p className="col-span-3">{textbook.author}</p>
            </section>
            <section className="grid grid-cols-4 py-2 border-b border-gray-100/15 last-of-type:border-b-0">
                <h3>書局</h3>
                <p className="col-span-3">{textbook.publisher}</p>
            </section>
            <section className="grid grid-cols-4 py-2 border-b border-gray-100/15 last-of-type:border-b-0">
                <h3>年份</h3>
                <p className="col-span-3">{textbook.year}</p>
            </section>
            <section className="grid grid-cols-4 py-2 border-b border-gray-100/15 last-of-type:border-b-0">
                <h3>ISBN</h3>
                <p className="col-span-3">{textbook.ISBN}</p>
            </section>
            <section className="grid grid-cols-4 py-2 border-b border-gray-100/15 last-of-type:border-b-0">
                <h3>版本</h3>
                <p className="col-span-3">{textbook.edition}</p>
            </section>
        </div>
    </section>
)
const Exams = ({exams})=>(
    <section className="bg-gray-800 p-3 rounded-lg flex flex-col gap-y-2 col-span-full sm:col-auto">
        <h2 className="text-lg font-bold">考試方式</h2>
        <div className="grid grid-rows-3">
            <section className="grid grid-cols-4 py-2 border-b border-gray-100/15 last-of-type:border-b-0">
                <h3>期中考</h3>
                <p className="col-span-3">{exams.midterm}</p>
            </section>
            <section className="grid grid-cols-4 py-2 border-b border-gray-100/15 last-of-type:border-b-0">
                <h3>期末考</h3>
                <p className="col-span-3">{exams.final}</p>
            </section>
            <section className="grid grid-cols-4 py-2 border-b border-gray-100/15 last-of-type:border-b-0">
                <h3>其他週</h3>
                <p className="col-span-3">{exams.other}</p>
            </section>
        </div>
    </section>
)
const TeachingAndAssessment = ({code,teachingAndAssessment})=>(
    <section className="bg-gray-800 p-3 rounded-lg flex flex-col gap-y-2 col-span-full">
        <h2 className="text-lg font-bold">教學、評量方式</h2>
        <div className="grid grid-cols-1 gap-y-2 text-center sm:gap-y-0 sm:border sm:border-gray-100/15 sm:rounded-md">
            {
                teachingAndAssessment.map(tA=>(
                    <div className="border border-gray-100/15 rounded-md sm:grid sm:grid-cols-2 sm:border-t-0 sm:border-x-0 sm:last-of-type:border-b-0 sm:rounded-none" key={tA.objective}>
                        <p className="grid items-center border-b p-2 border-gray-100/15 sm:border-b-0 sm:text-left">{tA.objective}</p>
                        <div className="grid grid-cols-3">
                            {
                                tA.teachingMethods.map(tM=>(
                                    <p className="grid items-center p-2 border-r border-gray-100/15 sm:border-r-0" key={tM}>{tM}</p>
                                ))
                            }
                            <div className="col-span-2 grid grid-cols-1 items-center">
                                {
                                    tA.assessmentMethods.map(aM=>(
                                        <div className="grid grid-cols-2 p-2 gap-x-2 border-b border-gray-100/15 last-of-type:border-b-0 sm:border-b-0" key={code+aM.method+aM.type}>
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
    <section className="bg-gray-800 p-3 rounded-lg flex flex-col gap-y-2 col-span-full">
        <h2 className="text-lg font-bold">課程進度表</h2>
        <div>
            {weeklySchedule.split("<br>").map(ws=>(
                <span key={ws}>{ws}</span>
                )
            )}
        </div>
    </section>
)
const Syllabus = ({syllabus})=>(
    <section className="bg-gray-800 p-3 rounded-lg flex flex-col gap-y-2 col-span-full">
        <h2 className="text-lg font-bold">課程大綱</h2>
        <div>
            <span>{syllabus.zh.split("<br>").map(s=>(<p key={s}>{s}</p>))}</span>
        </div>
        <div>
            <span>{syllabus.en.split("<br>").map(s=>(<p key={s}>{s}</p>))}</span>
        </div>
    </section>
)
const Description = ({description})=>(
    <section className="bg-gray-800 p-3 rounded-lg flex flex-col gap-y-2 col-span-full">
        <h2 className="text-lg font-bold">課程概述</h2>
        <p>
            <span>{description}</span>
        </p>
    </section>
)
const Prerequisites = ({prerequisites})=>(
    <section className="bg-gray-800 p-3 rounded-lg flex flex-col gap-y-2 col-span-full">
        <h2 className="text-lg font-bold">先修科目與預備能力</h2>
        <p>
            <span>{prerequisites}</span>
        </p>
    </section>
)
const CertificationsSupport = ({certificationsSupport})=>(
    <section className="bg-gray-800 p-3 rounded-lg flex flex-col gap-y-2 col-span-full">
        <h2 className="text-lg font-bold">輔導考證</h2>
        <ol>
            {certificationsSupport.map(cS=>(
                <li className="flex gap-x-2" key={cS}>
                    <span>{cS}</span>
                </li>
            ))}
        </ol>
    </section>
)