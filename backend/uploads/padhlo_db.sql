-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 21, 2020 at 02:02 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `padhlo_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `contact` bigint(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `name`, `email`, `contact`) VALUES
(1, 'admin', 'sudhirsinghkumar11@gmail.com', 9811877867);

-- --------------------------------------------------------

--
-- Table structure for table `category_pl`
--

CREATE TABLE `category_pl` (
  `cat_id` int(11) NOT NULL,
  `parent_id` varchar(255) NOT NULL,
  `category_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `category_pl`
--

INSERT INTO `category_pl` (`cat_id`, `parent_id`, `category_name`) VALUES
(1, '0', 'php'),
(2, '1', 'codeigniter'),
(5, '1', 'cakephp'),
(6, '1', 'Laravel'),
(7, '0', 'javascript'),
(8, '7', 'angular'),
(9, '7', 'vue'),
(10, '7', 'react');

-- --------------------------------------------------------

--
-- Table structure for table `courses_pl`
--

CREATE TABLE `courses_pl` (
  `course_id` int(11) NOT NULL,
  `cat_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `file_name` varchar(255) NOT NULL,
  `course_name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `demo_file` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `courses_pl`
--

INSERT INTO `courses_pl` (`course_id`, `cat_id`, `user_id`, `title`, `file_name`, `course_name`, `description`, `demo_file`) VALUES
(1, 0, 0, 'test', 'test', 'dfdff', '', 'https://www.youtube.com/watch?v=HWNl6X631p0'),
(2, 0, 0, 'php', '2423.mp4', 'php11', '', 'uploads\\a63acc72b1fb3e37f95b1569b765b594'),
(3, 0, 0, 'php', '2423.mp4', 'php11', '', 'uploads\\15822722638722423.mp4'),
(4, 0, 0, 'php', 'emails.txt', 'php11', '', 'uploads\\1582272378897emails.txt'),
(5, 0, 0, 'php', 'emails.txt', 'php11', '', 'uploads\\1582272485091sudhiremails.txt'),
(6, 0, 0, 'php', 'Capture001.png', 'php11', '', 'uploads\\1582275853537sudhirCapture001.png'),
(7, 0, 0, 'php', 'Capture001.png', 'php11', '', 'uploads\\1582281647056sudhirCapture001.png'),
(8, 1, 0, 'php', 'Capture001.png', 'php11', '', 'uploads\\1582282741776sudhirCapture001.png'),
(9, 1, 67, 'php', 'Capture001.png', 'php11', '', 'uploads\\1582282792907sudhirCapture001.png'),
(10, 1, 67, 'php', 'Capture001.png', 'php11', '', 'uploads\\1582282858547sudhirCapture001.png'),
(11, 1, 67, 'php', 'Capture001.png', 'php11', '', 'uploads\\1582282865554sudhirCapture001.png');

-- --------------------------------------------------------

--
-- Table structure for table `student_pl`
--

CREATE TABLE `student_pl` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `contact` bigint(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `student_pl`
--

INSERT INTO `student_pl` (`id`, `name`, `email`, `contact`, `password`) VALUES
(1, 'std1', 'acv@GMAIL.COM', 9875465465, 'abc2123'),
(3, 'ustd1', 'uacv@GMAIL.COM', 1875465465, 'uabc2123'),
(4, 'pdate', 'acv@GMAIL.COM', 9875465465, 'abc2123'),
(5, 'qweqw', 'qwe@df.vn', 1232425432, 'asd234'),
(6, 'zzzzz', 'qqwe@gmail.com', 7656756756, 'i8i8i'),
(7, 'qwqwqw1', 'qqwe@gmail.com', 1232425435, 'er5rrt'),
(8, 'qqqq', 'qqwe@gmail.com', 1232425435, 'sa23s'),
(9, 'usudhirqwqeqe', 'uabc@gmail.com', 9812983456, 'uabc@123'),
(10, 'asdasd', 'qqwe@gmail.com', 2323423423, 'asd234'),
(11, 'sudhir', 'abc@gmail.com', 9854658745, 'ddf233'),
(12, 'sudhir', 'abc@gmail.com', 9854658745, 'ddf233');

-- --------------------------------------------------------

--
-- Table structure for table `tutor_pl`
--

CREATE TABLE `tutor_pl` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `cat_id` int(11) NOT NULL,
  `course_id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `createdat` datetime NOT NULL DEFAULT current_timestamp(),
  `status` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tutor_pl`
--

INSERT INTO `tutor_pl` (`id`, `user_id`, `cat_id`, `course_id`, `title`, `description`, `createdat`, `status`) VALUES
(82, 67, 1, 1, 'php tut1', 'php tut1 desc', '2020-02-19 15:46:17', 1),
(83, 1, 1, 1, 'php tut2', 'php tut2 desc', '2020-02-19 15:46:21', 1);

-- --------------------------------------------------------

--
-- Table structure for table `user_pl`
--

CREATE TABLE `user_pl` (
  `user_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `contact` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `profile_image` varchar(255) NOT NULL,
  `role_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_pl`
--

INSERT INTO `user_pl` (`user_id`, `name`, `email`, `contact`, `password`, `profile_image`, `role_id`) VALUES
(15, 'ab', 'zx1@gmail.com', '9834658745', '123f233', '', 10),
(47, 'ab', 'abc@gmail.com', '9834658745', '123f233', '', 10),
(64, 'asdasd', 'mmmm@gmail.com', '9834658745', '123f233', '', 10),
(65, 'asdasd', 'mmmm1@gmail.com', '9834658745', '123f233', '', 10),
(66, 'asdasd', 'qqmmmm1@gmail.com', '9834658745', '123f233', '', 10),
(67, 'qweqw', 'q1@gmail.com', '1232425435', 'asdsd12', '', 10),
(68, 'qweqw', 'q11@gmail.com', '9834598575', 'asd334', '', 10),
(69, 'asdasd', 'qqmmmm2@gmail.com', '9834658745', 'ab', '', 10),
(70, 'abcd', 'abcd@gmail.com', '9898769890', 'abc@123', '', 10),
(71, 'qqqqq', 'q@gmail.com', '9834598575', 'aaaa1', '', 10);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `category_pl`
--
ALTER TABLE `category_pl`
  ADD PRIMARY KEY (`cat_id`);

--
-- Indexes for table `courses_pl`
--
ALTER TABLE `courses_pl`
  ADD PRIMARY KEY (`course_id`);

--
-- Indexes for table `student_pl`
--
ALTER TABLE `student_pl`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tutor_pl`
--
ALTER TABLE `tutor_pl`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_pl`
--
ALTER TABLE `user_pl`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `category_pl`
--
ALTER TABLE `category_pl`
  MODIFY `cat_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `courses_pl`
--
ALTER TABLE `courses_pl`
  MODIFY `course_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `student_pl`
--
ALTER TABLE `student_pl`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `tutor_pl`
--
ALTER TABLE `tutor_pl`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=84;

--
-- AUTO_INCREMENT for table `user_pl`
--
ALTER TABLE `user_pl`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=72;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
