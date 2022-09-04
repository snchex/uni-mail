-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema dbRegistrationService
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema dbRegistrationService
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `dbRegistrationService` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `dbRegistrationService` ;

-- -----------------------------------------------------
-- Table `dbRegistrationService`.`departament`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dbRegistrationService`.`departament` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `departamento` VARCHAR(90) NOT NULL,
  `createdAt` DATE NULL DEFAULT NULL,
  `updatedAt` DATE NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `dbRegistrationService`.`cluster`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dbRegistrationService`.`cluster` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `responsible` VARCHAR(60) NOT NULL,
  `member` VARCHAR(200) NOT NULL,
  `createdAt` DATE NULL DEFAULT NULL,
  `updatedAt` DATE NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `dbRegistrationService`.`request`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dbRegistrationService`.`request` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `solicitud` VARCHAR(45) NOT NULL,
  `createdAt` DATE NULL DEFAULT NULL,
  `updatedAt` DATE NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `dbRegistrationService`.`mailType`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dbRegistrationService`.`mailType` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `tipo` VARCHAR(45) NOT NULL,
  `createdAt` DATE NULL DEFAULT NULL,
  `updatedAt` DATE NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `dbRegistrationService`.`mail`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dbRegistrationService`.`mail` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `statu` TINYINT(1) NOT NULL,
  `fk_idtypeMail` INT NOT NULL,
  `fk_idrequest` INT NOT NULL,
  `fk_iddepartament` INT NOT NULL,
  `fk_idgroup` INT NOT NULL,
  `createdAt` TIMESTAMP NOT NULL,
  `updatedAt` TIMESTAMP NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_mail_typeMail_idx` (`fk_idtypeMail` ASC) VISIBLE,
  INDEX `fk_mail_request1_idx` (`fk_idrequest` ASC) VISIBLE,
  INDEX `fk_mail_departament1_idx` (`fk_iddepartament` ASC) VISIBLE,
  INDEX `fk_mail_group1_idx` (`fk_idgroup` ASC) VISIBLE,
  CONSTRAINT `fk_iddepartament`
    FOREIGN KEY (`fk_iddepartament`)
    REFERENCES `dbRegistrationService`.`departament` (`id`)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT,
  CONSTRAINT `fk_idgroup`
    FOREIGN KEY (`fk_idgroup`)
    REFERENCES `dbRegistrationService`.`cluster` (`id`),
  CONSTRAINT `fk_idrequest`
    FOREIGN KEY (`fk_idrequest`)
    REFERENCES `dbRegistrationService`.`request` (`id`),
  CONSTRAINT `fk_idtypeMail`
    FOREIGN KEY (`fk_idtypeMail`)
    REFERENCES `dbRegistrationService`.`mailType` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
