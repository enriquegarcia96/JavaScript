<?php

    $conn = NULL;

    try {
        $con = new PDO('mysql:host=localhost;dbname=marvel; charset=utf8;', 'root', 'Dragon97%');
        if (isset($_GET['id'])) {
            $id = $_GET['id'];
            $sql = "SELECT * FROM characters WHERE id=$id";
        }else{
            $sql = "SELECT * FROM characters;";
        }
        $stm = $con->prepare($sql);
        $stm->execute();
        $resultset = $stm->fetchAll(PDO::FETCH_ASSOC);

        echo json_encode($resultset);//convierto el array en formato JSON
        
        echo json_encode($_POST);

    } catch (PDOException $e) {
        echo "Error".$e->getMessage();
    }



