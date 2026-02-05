import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../Layout/Layout";
import DemoVideo from "../Components/DemoVideo";
import heroPng from "../assets/images/hero.png";
import { getAllCourses } from "../Redux/Slices/CourseSlice";
import { getStatsData } from "../Redux/Slices/StatSlice";
import { FiBook, FiUserCheck, FiAward, FiArrowRight, FiPlayCircle, FiMonitor, FiVideo, FiCheckCircle, FiClock, FiUsers, FiZap, FiShield } from "react-icons/fi";
import { FaGraduationCap, FaBookOpen, FaPlay } from "react-icons/fa";
import { getMyCourses } from "../Helpers/api";

export default function HomePage() {
  const dispatch = useDispatch();
  const { coursesData } = useSelector((state) => state.course);
  const { isLoggedIn, data } = useSelector((state) => state.auth);
  const { allUsersCount } = useSelector((state) => state.stat);
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [myCourses, setMyCourses] = useState([]);

  useEffect(() => {
    dispatch(getAllCourses());
    dispatch(getStatsData());
  }, [dispatch]);

  useEffect(() => {
    (async () => {
      try {
        if (!isLoggedIn) return;
        const res = await getMyCourses();
        if (res?.data?.success) {
          setMyCourses(res.data.courses || []);
        }
      } catch (err) {
      }
    })();
  }, [isLoggedIn]);
  const { scrollYProgress } = useScroll();
  const yRange = useTransform(scrollYProgress, [0, 1], [0, 100]);

  // DYNAMIC CONSTANTS
  const totalCourses = coursesData?.length || 0;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <Layout>
      <div className="bg-white dark:bg-gray-900 overflow-x-hidden font-sans">

        {/* ================= HERO SECTION ================= */}
        <section className="relative min-h-[90vh] flex items-center bg-white dark:bg-gray-900 overflow-hidden pt-10 md:pt-0">
          <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">

            {/* Text Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8 max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-300 font-bold text-sm tracking-wide uppercase">
                <FaGraduationCap className="text-lg" />
                #1 Learning Platform
              </div>

              <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white leading-[1.1] tracking-tight">
                Master New Skills, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                  Unlock Your Future
                </span>
              </motion.h1>

              <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-500 dark:text-gray-400 leading-relaxed max-w-lg">
                Join thousands of learners advancing their careers with our expert-led courses.
                Learn at your own pace, anywhere, anytime.
              </motion.p>
              
              <motion.div variants={itemVariants} className="flex flex-wrap gap-6 text-gray-600 dark:text-gray-300 font-medium">
                <div className="flex items-center gap-2">
                   <FiCheckCircle className="text-primary-600 text-xl" /> Expert-led courses
                </div>
                <div className="flex items-center gap-2">
                   <FiCheckCircle className="text-primary-600 text-xl" /> Lifetime access
                </div>
                <div className="flex items-center gap-2">
                   <FiCheckCircle className="text-primary-600 text-xl" /> Certificate included
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
                <Link to="/courses">
                  <button className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white text-lg font-bold py-4 px-8 rounded-full shadow-xl hover:shadow-primary-500/30 transition-all transform hover:-translate-y-1">
                    Start Learning Free <FiArrowRight />
                  </button>
                </Link>
                <button
                  onClick={() => setIsDemoOpen(true)}
                  className="flex items-center gap-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-white border border-gray-200 dark:border-gray-700 hover:border-primary-200 hover:bg-primary-50 dark:hover:bg-gray-700 text-lg font-bold py-4 px-8 rounded-full transition-all shadow-sm hover:shadow-md"
                >
                  <FiPlayCircle className="text-primary-600 text-xl" /> Watch Demo
                </button>
              </motion.div>
            </motion.div>

            {/* Hero Image / Composition */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden md:block"
            >
               {/* Abstract Blobs */}
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-200/50 dark:bg-primary-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
              <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-secondary-200/50 dark:bg-secondary-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
              
              <img src={heroPng} alt="Hero" className="w-full relative z-10 drop-shadow-2xl" />
            </motion.div>

          </div>
        </section>


        {/* ================= STATS SECTION ================= */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                { value: totalCourses || 0, label: "Online Courses", icon: <FiBook />, color: "bg-primary-100 text-primary-600" },
                { value: allUsersCount || 0, label: "Active Learners", icon: <FiUsers />, color: "bg-secondary-100 text-secondary-600" },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-8 rounded-3xl bg-gradient-to-br from-primary-600 to-primary-700 text-white shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 flex flex-col items-center justify-center text-center space-y-4"
                >
                  <div className={`p-4 rounded-full bg-white/20 backdrop-blur-sm text-white text-3xl mb-2`}>
                    {stat.icon}
                  </div>
                  <h3 className="text-4xl font-bold">{stat.value}</h3>
                  <p className="text-primary-100 font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>


        {/* ================= MY COURSES SECTION ================= */}
        <section className="py-24 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-6">
            <div className="mb-12 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-100 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-300 font-bold text-sm tracking-wide uppercase mb-3">
                <FaBookOpen />
                My Courses
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                Continue Your Learning
              </h2>
              <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                Access your enrolled courses and pick up where you left off.
              </p>
            </div>

            {isLoggedIn ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {myCourses?.length > 0 ? (
                  myCourses.map((course, index) => {
                    const progress = course.progress;
                    const completedCount = progress?.lecturesCompleted?.length || 0;
                    const totalLectures = course?.numberOfLectures || 1;
                    const percent = Math.min(100, Math.round((completedCount / totalLectures) * 100));
                    return (
                      <motion.div
                        key={course._id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 h-full flex flex-col"
                      >
                        <div className="relative overflow-hidden h-44">
                          <img
                            src={course?.thumbnail?.secure_url || "/placeholder-course.jpg"}
                            alt="course"
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-3 left-3">
                            <span className="px-2 py-1 bg-primary-600 text-white text-xs font-medium rounded-md shadow-sm">
                              {course?.category}
                            </span>
                          </div>
                          <div className="absolute top-3 right-3 bg-white/90 dark:bg-gray-900/80 backdrop-blur-sm px-2 py-1 rounded-full">
                            <span className="text-xs font-bold text-primary-600 dark:text-primary-400">{percent}%</span>
                          </div>
                        </div>
                        <div className="p-5 flex flex-col flex-grow">
                          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                            {course?.title}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3 mb-4 flex-grow">
                            {course?.description}
                          </p>
                          <div className="mb-4">
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Progress</span>
                              <span className="text-sm font-bold text-primary-600 dark:text-primary-400">
                                {completedCount}/{totalLectures} lectures
                              </span>
                            </div>
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                              <motion.div
                                className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full"
                                initial={{ width: 0 }}
                                whileInView={{ width: `${percent}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: index * 0.1 }}
                              />
                            </div>
                          </div>
                          <Link to="/course/displaylectures" state={{ ...course }}>
                            <button className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors duration-200 text-sm flex items-center justify-center gap-2 mt-auto">
                              <FaPlay className="text-sm" />
                              Continue Learning
                            </button>
                          </Link>
                        </div>
                      </motion.div>
                    );
                  })
                ) : (
                  <div className="col-span-full text-center py-12">
                    <div className="w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <FaBookOpen className="text-2xl text-gray-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-2">No Courses Yet</h3>
                    <p className="text-gray-500 dark:text-gray-400 mb-6">Browse our catalog to start learning.</p>
                    <Link to="/courses">
                      <button className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-2.5 px-6 rounded-full transition-all">
                        Browse Courses
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Log in to see your courses</h3>
                <Link to="/login">
                  <button className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-2.5 px-6 rounded-full transition-all">
                    Log In
                  </button>
                </Link>
              </div>
            )}
          </div>
        </section>


        {/* ================= CTA SECTION ================= */}
        <section className="py-24 px-6 bg-white dark:bg-gray-900">
          <div className="container mx-auto">
            <div className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-r from-primary-600 to-primary-700 px-6 py-20 md:px-20 text-center text-white shadow-2xl">
              
              {/* Background Patterns */}
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-primary-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-accent-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                <div className="absolute top-[20%] right-[20%] text-white/5 text-9xl">
                  <FiAward />
                </div>
              </div>

              <div className="relative z-10 max-w-4xl mx-auto space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium text-sm">
                  <span className="animate-pulse">✨</span> Limited Time Offer
                </div>
                
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
                  Ready to Start Your <br/>
                  Learning Journey?
                </h2>
                
                <p className="text-xl text-primary-100 max-w-2xl mx-auto">
                  Join over 10,000 students already learning with us. Get unlimited access to all courses with our premium plan.
                </p>

                <div className="flex flex-col sm:flex-row gap-5 justify-center pt-8">
                  <Link to="/signup">
                    <button className="bg-white text-primary-700 font-bold py-4 px-10 rounded-full hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 w-full sm:w-auto text-lg">
                      Get Started Now <FiArrowRight className="inline ml-2" />
                    </button>
                  </Link>
                  <Link to="/courses">
                    <button className="bg-transparent border-2 border-white/30 text-white font-bold py-4 px-10 rounded-full hover:bg-white/10 transition-all w-full sm:w-auto text-lg backdrop-blur-sm">
                      View All Courses
                    </button>
                  </Link>
                </div>

                <div className="pt-8 text-sm text-primary-200/80 flex justify-center gap-6">
                  <span>✓ 30-day money-back guarantee</span>
                  <span>✓ Cancel anytime</span>
                  <span>✓ 24/7 Support</span>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* Demo Video Modal */}
      <DemoVideo isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </Layout>
  );
}
