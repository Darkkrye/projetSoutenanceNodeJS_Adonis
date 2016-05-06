-- phpMyAdmin SQL Dump
-- version 4.5.3.1
-- http://www.phpmyadmin.net
--
-- Client :  127.0.0.1
-- Généré le :  Ven 06 Mai 2016 à 16:31
-- Version du serveur :  5.6.25
-- Version de PHP :  5.6.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `adonis`
--
CREATE DATABASE IF NOT EXISTS `adonis` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `adonis`;

-- --------------------------------------------------------

--
-- Structure de la table `question`
--

CREATE TABLE `question` (
  `id` int(11) NOT NULL,
  `Entitled` varchar(500) NOT NULL,
  `imageLink` varchar(500) DEFAULT NULL,
  `Categories` varchar(500) NOT NULL,
  `Answer1` varchar(500) NOT NULL,
  `Answer2` varchar(500) NOT NULL,
  `Answer3` varchar(500) NOT NULL,
  `Answer4` varchar(500) NOT NULL,
  `GoodAnswer` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `question`
--

INSERT INTO `question` (`id`, `Entitled`, `imageLink`, `Categories`, `Answer1`, `Answer2`, `Answer3`, `Answer4`, `GoodAnswer`) VALUES
(1, 'Par quelle entreprise à été rachetée YouTube en 2006 ?', NULL, 'Informatique', 'Apple', 'Google', 'FaceBook', 'Microsoft', 'Google'),
(2, 'Quelle est la capitale de la France ?', NULL, 'Géographie, France', 'Paris', 'Monaco', 'Madrid', 'Londres', 'Paris'),
(3, 'A quelle date s\'est déroulé la bataille de Marignan ?', NULL, 'Histoire, France', '1111', '456', '1515', '1756', '1515'),
(4, 'Quels furent les 3 fondateurs d\'Apple ?', NULL, 'Informatique', 'Mark ZUCKERBERG, Dustin MOSKOVITZ & Eduardo SAVERIN', 'Steve JOBS & Bill GATES', 'Steve JOBS, WOZNIACK & Ronald WAYNE', 'Steve JOBS, WOZNIACK & John SCULLEY', 'Steve JOBS, WOZNIACK & Ronald WAYNE'),
(5, 'Quelle est la marque représentée par ce logo ?', 'http://data.topquizz.com/distant/question/big/9/6/1/2/112169_59fe715126.jpg', 'Marque', 'Apple', 'Cornetto', 'Nestle', 'Mikko', 'Mikko');

--
-- Index pour les tables exportées
--

--
-- Index pour la table `question`
--
ALTER TABLE `question`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `question`
--
ALTER TABLE `question`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
