<?php
error_reporting(E_ERROR | E_PARSE);
include('model.php');
class Users extends Model {
    public $id;
    public $LOGIN;
    public $password;
    public $full_name;
    public $email;
    public $status;

    public function __construct() {
        parent::__construct("users");
    }
    public function __destruct() {
        $this->connection = null;
    }

    public function find($LOGIN)
    {
        if ($this->connection->getConnectionStatus()) {
            $result = $this->connection->connection->query("SELECT * FROM $this->table WHERE LOGIN='$LOGIN'");
            $pdo = $result->fetch(PDO::FETCH_ASSOC);
            if ($pdo) {
                $this->id = $pdo["id"];
                $this->LOGIN = $pdo["LOGIN"];
                $this->password = $pdo["password"];
                $this->full_name = $pdo["full_name"];
                $this->email = $pdo["email"]; 
                $this->status = $pdo["status"];

                return true;
            }
            else return false;
        }
    }
    public function delete()
    {    
        if ($this->connection->getConnectionStatus()) {
            $result = $this->connection->connection->query("SELECT id FROM " . $this->table . " WHERE id = " . $this->id . ";");
            $pdo = $result->fetch(PDO::FETCH_ASSOC);
            if ($pdo["id"]) {
                $sql = "DELETE FROM $this->table WHERE id=$this->id";
                $syst = $this->connection->connection->prepare($sql);
                $syst->execute();
                echo("id: ".$this->id." Deleted\n");
                $this->id = null;
                $this->LOGIN = null;
                $this->password = null;
                $this->full_name = null;
                $this->email = null;
                $this->status = null;
            }
            else echo("Nothing Deleted\n");
        }
    }
    public function save()
    {
        if ($this->connection->getConnectionStatus()) {
                $LOGIN = $this->LOGIN;
                $password = $this->password;
                $full_name = $this->full_name;
                $email = $this->email;
                $sql = "INSERT INTO `users` (LOGIN, password, full_name, email) VALUES (\"$LOGIN\", \"$password\", \"$full_name\", \"$email\")";
                $syst = $this->connection->connection->prepare($sql);
                try{
                    $syst->execute();
                }catch(PDOException $e){
                }
                echo "<p id=alert><b>$LOGIN You've registred successfully!</b></p>";
        }
    }
}

?>