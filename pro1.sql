-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 10, 2024 at 10:05 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `my-product`
--

-- --------------------------------------------------------

--
-- Table structure for table `pro1`
--

CREATE TABLE `pro1` (
  `id` int(11) NOT NULL,
  `sname` varchar(20) NOT NULL,
  `sphoto` varchar(30) NOT NULL,
  `stype` varchar(20) NOT NULL,
  `sdescrip` varchar(100) NOT NULL,
  `scost` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pro1`
--

INSERT INTO `pro1` (`id`, `sname`, `sphoto`, `stype`, `sdescrip`, `scost`) VALUES
(14, 'Series 1', 'uploadImage/0.1.png', 'Beginner', 'kjadh kjahd jahd ahd ahd agdhasgdhas dadg had had askhd adhadhsgdahd gashd ', '999'),
(15, 'series 2', 'uploadImage/0.2.png', 'Advance', 'kjadh kjahd jahd ahd ahd agdhasgdhas dadg had had askhd adhadhsgdahd gashd', '1499'),
(16, 'series 3', 'uploadImage/0.3.png', 'Pro', 'asdfghjdfgh adfsgdsaf asdfsafdg adfsafdg fdsgfdh', '2999');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `pro1`
--
ALTER TABLE `pro1`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `pro1`
--
ALTER TABLE `pro1`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
