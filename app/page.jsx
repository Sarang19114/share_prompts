import Feed from '@/components/Feed';

const Home = () => {
    return (
        <section className="w-full flex-center flex-col">
            <h1 className="head_text text-center orange_gradient">Explore & Exchange
            <br className="max-md:hidden" />
            <span className="blue_gradient text-center head_text">Intelligent Content Prompts</span>
            </h1>
            <p className="desc text-center">PromptGen is an open-source platform that enables users to explore, design, and exchange AI-driven prompts, tailored for today's innovative landscape.</p>

            <Feed></Feed>
        </section>
    )
}

export default Home
