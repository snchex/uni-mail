-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema dbRegistrationService
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema dbRegistrationService
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `dbRegistrationService` ;
USE `dbRegistrationService` ;

-- -----------------------------------------------------
-- Table `dbRegistrationService`.`mailTypes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dbRegistrationService`.`mailTypes` (
  `idmailType` INT NOT NULL AUTO_INCREMENT,
  `tipo` VARCHAR(45) NOT NULL,
  `createdAt` DATE NULL,
  `updatedAt` DATE NULL,
  PRIMARY KEY (`idmailType`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `dbRegistrationService`.`request`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dbRegistrationService`.`request` (
  `idrequest` INT NOT NULL AUTO_INCREMENT,
  `solicitud` VARCHAR(45) NOT NULL,
  `createdAt` DATE NULL,
  `updatedAt` DATE NULL,
  PRIMARY KEY (`idrequest`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `dbRegistrationService`.`departament`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dbRegistrationService`.`departament` (
  `iddepartament` INT NOT NULL AUTO_INCREMENT,
  `departament` VARCHAR(90) NOT NULL,
  `createdAt` DATE NULL,
  `updatedAt` DATE NULL,
  PRIMARY KEY (`iddepartament`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `dbRegistrationService`.`group`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dbRegistrationService`.`group` (
  `idgroup` INT NOT NULL AUTO_INCREMENT,
  `responsible` VARCHAR(60) NOT NULL,
  `members` VARCHAR(200) NOT NULL,
  `createdAt` DATE NULL,
  `updatedAt` DATE NULL,
  PRIMARY KEY (`idgroup`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `dbRegistrationService`.`mail`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dbRegistrationService`.`mail` (
  `idmail` INT NOT NULL AUTO_INCREMENT,
  `user` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `statu` VARCHAR(45) NOT NULL,
  `typeMail_idtypeMail` INT NOT NULL,
  `request_idrequest` INT NOT NULL,
  `departament_iddepartament` INT NOT NULL,
  `group_idgroup` INT NOT NULL,
  `createdAt` DATE NULL,
  `updatedAt` DATE NULL,
  PRIMARY KEY (`idmail`),
  INDEX `fk_mail_typeMail_idx` (`typeMail_idtypeMail` ASC) VISIBLE,
  INDEX `fk_mail_request1_idx` (`request_idrequest` ASC) VISIBLE,
  INDEX `fk_mail_departament1_idx` (`departament_iddepartament` ASC) VISIBLE,
  INDEX `fk_mail_group1_idx` (`group_idgroup` ASC) VISIBLE,
  CONSTRAINT `fk_mail_typeMail`
    FOREIGN KEY (`typeMail_idtypeMail`)
    REFERENCES `dbRegistrationService`.`mailTypes` (`idmailType`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_mail_request1`
    FOREIGN KEY (`request_idrequest`)
    REFERENCES `dbRegistrationService`.`request` (`idrequest`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_mail_departament1`
    FOREIGN KEY (`departament_iddepartament`)
    REFERENCES `dbRegistrationService`.`departament` (`iddepartament`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_mail_group1`
    FOREIGN KEY (`group_idgroup`)
    REFERENCES `dbRegistrationService`.`group` (`idgroup`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
